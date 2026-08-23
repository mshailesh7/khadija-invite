import { useCallback, useEffect, useRef } from 'react'

/** Pentatonic phrase, in semitones from the root. */
const PHRASE = [0, 4, 7, 12, 16, 12, 7, 4, 7, 12, 9, 4]
const ROOT = 523.25 // C5
const STEP = 0.46 // seconds between notes

/**
 * Soft music-box loop synthesised in the browser, so the invitation carries
 * ambient sound without shipping an audio file.
 */
export function useMusicBox(enabled: boolean) {
  const ctxRef = useRef<AudioContext | null>(null)
  const busRef = useRef<GainNode | null>(null)
  const timerRef = useRef<number | null>(null)
  const stepRef = useRef(0)

  const stop = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current)
      timerRef.current = null
    }
    const ctx = ctxRef.current
    const bus = busRef.current
    if (ctx && bus) {
      bus.gain.cancelScheduledValues(ctx.currentTime)
      bus.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.25)
    }
  }, [])

  const start = useCallback(async () => {
    const Ctor =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!Ctor) return

    if (!ctxRef.current) {
      const ctx = new Ctor()
      const bus = ctx.createGain()
      bus.gain.value = 0.0001

      // gentle low-pass keeps the tone soft rather than glassy
      const tone = ctx.createBiquadFilter()
      tone.type = 'lowpass'
      tone.frequency.value = 2600

      bus.connect(tone)
      tone.connect(ctx.destination)

      ctxRef.current = ctx
      busRef.current = bus
    }

    const ctx = ctxRef.current
    const bus = busRef.current!
    if (ctx.state === 'suspended') await ctx.resume()
    bus.gain.cancelScheduledValues(ctx.currentTime)
    bus.gain.setTargetAtTime(0.5, ctx.currentTime, 0.6)

    const pluck = () => {
      const semitone = PHRASE[stepRef.current % PHRASE.length]
      stepRef.current += 1
      const freq = ROOT * Math.pow(2, semitone / 12)
      const now = ctx.currentTime

      // bell tone plus a quiet octave partial
      ;[
        { f: freq, g: 0.11, type: 'triangle' as OscillatorType },
        { f: freq * 2, g: 0.03, type: 'sine' as OscillatorType },
      ].forEach(({ f, g, type }) => {
        const osc = ctx.createOscillator()
        const env = ctx.createGain()
        osc.type = type
        osc.frequency.value = f
        env.gain.setValueAtTime(0.0001, now)
        env.gain.exponentialRampToValueAtTime(g, now + 0.02)
        env.gain.exponentialRampToValueAtTime(0.0001, now + 2.4)
        osc.connect(env)
        env.connect(bus)
        osc.start(now)
        osc.stop(now + 2.5)
      })
    }

    pluck()
    timerRef.current = window.setInterval(pluck, STEP * 1000)
  }, [])

  useEffect(() => {
    if (enabled) void start()
    else stop()
    return stop
  }, [enabled, start, stop])
}

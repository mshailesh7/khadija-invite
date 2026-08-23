import { useCallback, useEffect, useRef } from 'react'

const MUSIC_SRC = '/audio/grow-old-with-me.mp3'
const VOLUME = 0.55

/** Background music for the invitation — loops after the guest opens the cover. */
export function useMusicBox(enabled: boolean) {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const stop = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.pause()
    audio.currentTime = 0
  }, [])

  const start = useCallback(async () => {
    if (!audioRef.current) {
      const audio = new Audio(MUSIC_SRC)
      audio.loop = true
      audio.preload = 'auto'
      audio.volume = VOLUME
      audioRef.current = audio
    }

    try {
      await audioRef.current.play()
    } catch {
      // Autoplay may be blocked until the guest interacts with the page.
    }
  }, [])

  useEffect(() => {
    if (enabled) void start()
    else stop()
    return stop
  }, [enabled, start, stop])

  useEffect(
    () => () => {
      audioRef.current?.pause()
      audioRef.current = null
    },
    [],
  )
}

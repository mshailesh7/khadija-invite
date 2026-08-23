import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'

type Props = {
  children: ReactNode
  hint?: string
  hintPlacement?: 'overlay' | 'below'
  className?: string
  brushRadius?: number
  revealAt?: number
  locked?: boolean
  lockedHint?: string
  onRevealed?: () => void
}

export function ScratchReveal({
  children,
  hint = '',
  hintPlacement = 'below',
  className = '',
  brushRadius = 22,
  revealAt = 0.7,
  locked = false,
  lockedHint,
  onRevealed,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const drawing = useRef(false)
  const lastPoint = useRef<{ x: number; y: number } | null>(null)
  const checkCounter = useRef(0)
  const finished = useRef(false)
  const foilPainted = useRef(false)
  const sizeRef = useRef({ w: 0, h: 0 })
  const [done, setDone] = useState(false)
  const [foilReady, setFoilReady] = useState(false)

  const finish = useCallback(() => {
    if (finished.current) return
    finished.current = true
    drawing.current = false
    lastPoint.current = null

    requestAnimationFrame(() => {
      setDone(true)
      onRevealed?.()
    })
  }, [onRevealed])

  const paintFoil = useCallback((ctx: CanvasRenderingContext2D, w: number, h: number) => {
    ctx.globalCompositeOperation = 'source-over'
    ctx.globalAlpha = 1
    ctx.fillStyle = '#f9e6d4'
    ctx.fillRect(0, 0, w, h)

    const g = ctx.createLinearGradient(0, 0, w, h)
    g.addColorStop(0, '#ede0cc')
    g.addColorStop(0.45, '#e2d0b4')
    g.addColorStop(0.7, '#dcc9a8')
    g.addColorStop(1, '#ead9c4')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, w, h)

    ctx.globalAlpha = 0.1
    for (let i = 0; i < 700; i++) {
      ctx.fillStyle = i % 2 === 0 ? '#fff8f0' : '#a8844a'
      ctx.fillRect(Math.random() * w, Math.random() * h, 1.2, 1.2)
    }
    ctx.globalAlpha = 1
  }, [])

  const setupCanvas = useCallback(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas || done) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const { width, height } = wrap.getBoundingClientRect()
    if (width < 2 || height < 2) return

    const pxW = Math.floor(width * dpr)
    const pxH = Math.floor(height * dpr)
    const sizeChanged = sizeRef.current.w !== pxW || sizeRef.current.h !== pxH

    if (!sizeChanged && foilPainted.current) return

    sizeRef.current = { w: pxW, h: pxH }
    canvas.width = pxW
    canvas.height = pxH
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    if (!foilPainted.current || sizeChanged) {
      paintFoil(ctx, width, height)
      foilPainted.current = true
    }

    setFoilReady(true)
  }, [done, paintFoil])

  useEffect(() => {
    if (done) return
    setupCanvas()
    const id = window.requestAnimationFrame(setupCanvas)
    return () => window.cancelAnimationFrame(id)
  }, [setupCanvas, done])

  function pos(e: React.PointerEvent) {
    const canvas = canvasRef.current!
    const rect = canvas.getBoundingClientRect()
    return { x: e.clientX - rect.left, y: e.clientY - rect.top }
  }

  function stroke(ctx: CanvasRenderingContext2D, x: number, y: number) {
    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath()
    ctx.arc(x, y, brushRadius, 0, Math.PI * 2)
    ctx.fill()
  }

  function checkProgress(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    const { width, height } = canvas
    const data = ctx.getImageData(0, 0, width, height).data
    let transparent = 0
    let total = 0
    const step = 8
    for (let i = 3; i < data.length; i += 4 * step) {
      total++
      if (data[i] < 32) transparent++
    }
    if (transparent / total >= revealAt) finish()
  }

  function scratchAt(x: number, y: number) {
    const canvas = canvasRef.current
    if (!canvas || done || locked) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prev = lastPoint.current
    if (prev) {
      const dx = x - prev.x
      const dy = y - prev.y
      const dist = Math.hypot(dx, dy)
      const steps = Math.max(1, Math.floor(dist / (brushRadius * 0.35)))
      for (let i = 0; i <= steps; i++) {
        const t = i / steps
        stroke(ctx, prev.x + dx * t, prev.y + dy * t)
      }
    } else {
      stroke(ctx, x, y)
    }
    lastPoint.current = { x, y }

    checkCounter.current += 1
    if (checkCounter.current % 3 === 0) checkProgress(canvas, ctx)
  }

  function endDraw(e: React.PointerEvent) {
    if (canvasRef.current?.hasPointerCapture(e.pointerId)) {
      canvasRef.current.releasePointerCapture(e.pointerId)
    }
    drawing.current = false
    lastPoint.current = null
  }

  const hintText = locked && lockedHint ? lockedHint : hint
  const showOverlayHint = hintPlacement === 'overlay' && hintText

  return (
    <div className={className}>
      <div ref={wrapRef} className="relative overflow-hidden rounded-sm">
        <div className="relative z-0">{children}</div>

        {!done && (
          <>
            {!foilReady && <div className="absolute inset-0 z-[1] bg-cream" aria-hidden />}
            <canvas
              ref={canvasRef}
              className={`absolute inset-0 z-[2] ${locked ? 'cursor-not-allowed' : 'cursor-crosshair'}`}
              style={{
                touchAction: 'none',
                opacity: foilReady ? 1 : 0,
                pointerEvents: locked ? 'none' : 'auto',
              }}
              onPointerDown={(e) => {
                if (locked || done) return
                if (e.pointerType === 'mouse' && e.button !== 0) return

                drawing.current = true
                lastPoint.current = null
                canvasRef.current?.setPointerCapture(e.pointerId)

                const p = pos(e)
                scratchAt(p.x, p.y)
              }}
              onPointerMove={(e) => {
                if (locked || done || !drawing.current) return
                const p = pos(e)
                scratchAt(p.x, p.y)
              }}
              onPointerUp={endDraw}
              onPointerCancel={endDraw}
            />
            {showOverlayHint && (
              <motion.p
                className="pointer-events-none absolute inset-0 z-[3] flex items-center justify-center px-4 text-center font-sans text-[10px] font-light uppercase tracking-[0.32em] text-gold/50"
                animate={{ opacity: locked ? 0.9 : [0.4, 0.75, 0.4] }}
                transition={locked ? { duration: 0.3 } : { duration: 2.6, repeat: Infinity }}
              >
                {hintText}
              </motion.p>
            )}
          </>
        )}
      </div>

      {!done && hintPlacement === 'below' && hintText && (
        <motion.p
          className="pointer-events-none mt-5 text-center font-sans text-[10px] font-light uppercase tracking-[0.28em] text-gold/45"
          animate={{ opacity: [0.45, 0.8, 0.45] }}
          transition={{ duration: 2.6, repeat: Infinity }}
        >
          {hintText}
        </motion.p>
      )}
    </div>
  )
}

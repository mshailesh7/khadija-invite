import { motion } from 'framer-motion'

/**
 * Fixed atmosphere layer standing in for the reference's looping background
 * film: drifting warm light plus slow-falling petals, veiled by the cream wash.
 */
export function Backdrop() {
  const petals = [
    { left: '6%', delay: 0, dur: 20, size: 13 },
    { left: '21%', delay: 6, dur: 26, size: 9 },
    { left: '38%', delay: 2.5, dur: 23, size: 15 },
    { left: '57%', delay: 9, dur: 28, size: 10 },
    { left: '73%', delay: 4, dur: 22, size: 12 },
    { left: '89%', delay: 12, dur: 30, size: 8 },
  ]

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 45% at 22% 12%, rgba(255,250,248,0.85), transparent 65%), radial-gradient(50% 40% at 82% 28%, rgba(224,169,164,0.22), transparent 60%), radial-gradient(70% 50% at 50% 96%, rgba(134,103,57,0.13), transparent 60%)',
        }}
        animate={{ opacity: [0.75, 1, 0.75], scale: [1, 1.05, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {petals.map((p, i) => (
        <motion.span
          key={i}
          className="absolute top-[-6%] block rounded-[50%_0_50%_0] bg-blush/20"
          style={{ left: p.left, width: p.size, height: p.size }}
          animate={{ y: ['0vh', '112vh'], x: [0, i % 2 ? -26 : 30, 0], rotate: [0, 220] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'linear' }}
        />
      ))}

      <div className="absolute inset-0 bg-cream/30" />
    </div>
  )
}

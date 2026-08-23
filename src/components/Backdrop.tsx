import { motion } from 'framer-motion'

/**
 * Fixed atmosphere — seamless cream wash with soft side glows only.
 * No corner blooms (they mirrored into a split flower at top-centre).
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
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-cream" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(50% 40% at 12% 18%, rgba(224,169,164,0.16), transparent 70%), radial-gradient(50% 40% at 88% 22%, rgba(224,169,164,0.14), transparent 70%), radial-gradient(80% 35% at 50% 100%, rgba(134,103,57,0.08), transparent 70%)',
        }}
      />

      {petals.map((p, i) => (
        <motion.span
          key={i}
          className="absolute top-[-6%] block rounded-[50%_0_50%_0] bg-blush/15"
          style={{ left: p.left, width: p.size, height: p.size }}
          animate={{ y: ['0vh', '112vh'], x: [0, i % 2 ? -26 : 30, 0], rotate: [0, 220] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'linear' }}
        />
      ))}
    </div>
  )
}

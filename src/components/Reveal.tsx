import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Style = 'fadeinup' | 'fadein' | 'zoomin'

type Props = {
  children: ReactNode
  /** Mirrors the reference deck's animation styles. */
  style?: Style
  /** Seconds, as authored in the original. */
  duration?: number
  delay?: number
  /** Travel distance in px for fadeinup. */
  distance?: number
  /** Amount to scale up from, for zoomin (0.15 => starts at 0.85). */
  scale?: number
  className?: string
}

const EASE = [0.22, 0.61, 0.36, 1] as const

export function Reveal({
  children,
  style = 'fadeinup',
  duration = 1.4,
  delay = 0,
  distance = 40,
  scale = 0.15,
  className,
}: Props) {
  const hidden =
    style === 'fadeinup'
      ? { opacity: 0, y: distance }
      : style === 'zoomin'
        ? { opacity: 0, scale: 1 - scale }
        : { opacity: 0 }

  const shown =
    style === 'fadeinup' ? { opacity: 1, y: 0 } : style === 'zoomin' ? { opacity: 1, scale: 1 } : { opacity: 1 }

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, margin: '-8% 0px -8% 0px' }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/** Gentle breathing loop, matching the reference's looping scale keyframes. */
export function Breathe({
  children,
  className,
  peak = 1.16,
  duration = 4,
}: {
  children: ReactNode
  className?: string
  peak?: number
  duration?: number
}) {
  return (
    <motion.div
      className={className}
      animate={{ scale: [1, peak, 1, (1 + peak) / 2, 1] }}
      transition={{ duration: duration * 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

/** Pendulum settle used on the closing illustration. */
export function Swing({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      style={{ transformOrigin: 'top center' }}
      initial={{ rotate: 0 }}
      whileInView={{ rotate: [0, -13, -1, -9, -3, -6, -4.5] }}
      viewport={{ once: true }}
      transition={{
        duration: 2.2,
        delay: 0.3,
        times: [0, 0.18, 0.36, 0.53, 0.7, 0.87, 1],
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}

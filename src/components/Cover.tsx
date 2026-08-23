import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { eventMeta } from '../data/invitation'
import { CornerFloral, LineSprig, WaxSeal } from './decor/Ornaments'
import { BabyFootprints } from './decor/BabyDecor'

type Props = { onOpened: () => void }

const EASE = [0.7, 0, 0.28, 1] as const

export function Cover({ onOpened }: Props) {
  const { t, isRtl } = useLanguage()
  const [opening, setOpening] = useState(false)

  function open() {
    if (opening) return
    setOpening(true)
    window.setTimeout(onOpened, 2400)
  }

  return (
    <motion.div
      className={`fixed inset-0 z-[60] overflow-hidden bg-cream ${opening ? 'pointer-events-none' : ''}`}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55 }}
    >
      <motion.div
        className="absolute inset-x-0 top-0 h-1/2 bg-[#fce8ee]"
        animate={opening ? { y: '-101%' } : { y: 0 }}
        transition={{ duration: 1.35, delay: 0.95, ease: EASE }}
      >
        <CornerFloral className="absolute left-4 top-4 h-28 w-28 text-gold/40" />
        <CornerFloral className="absolute right-4 top-4 h-28 w-28 -scale-x-100 text-gold/40" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gold/15" />
      </motion.div>

      <motion.div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-[#fce8ee]"
        animate={opening ? { y: '101%' } : { y: 0 }}
        transition={{ duration: 1.35, delay: 0.95, ease: EASE }}
      >
        <CornerFloral className="absolute bottom-4 left-4 h-28 w-28 -scale-y-100 text-gold/40" />
        <CornerFloral className="absolute bottom-4 right-4 h-28 w-28 -scale-100 text-gold/40" />
      </motion.div>

      <motion.div
        className="absolute inset-y-0 left-0 z-[2] w-1/2 bg-[#fdf2f5]"
        style={{ boxShadow: '10px 0 44px -20px rgba(184,107,122,0.35)' }}
        animate={opening ? { x: '-101%' } : { x: 0 }}
        transition={{ duration: 1.45, delay: 0.5, ease: EASE }}
      >
        <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-gold/25 to-transparent" />
      </motion.div>

      <motion.div
        className="absolute inset-y-0 right-0 z-[2] w-1/2 bg-[#fdf2f5]"
        style={{ boxShadow: '-10px 0 44px -20px rgba(184,107,122,0.35)' }}
        animate={opening ? { x: '101%' } : { x: 0 }}
        transition={{ duration: 1.45, delay: 0.5, ease: EASE }}
      >
        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-gold/25 to-transparent" />
      </motion.div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6">
        <motion.button
          type="button"
          onClick={open}
          aria-label={t.cover.openLabel}
          className="flex flex-col items-center focus-visible:outline-none"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={opening ? { opacity: 0, scale: 1.22 } : { opacity: 1, scale: 1 }}
          transition={
            opening
              ? { duration: 1.15, ease: 'easeInOut' }
              : { duration: 1.2, delay: 0.3, ease: 'easeOut' }
          }
        >
          <motion.span
            className="block"
            animate={opening ? { scale: 1 } : { scale: [1, 1.04, 1] }}
            transition={{ duration: 2.8, repeat: opening ? 0 : Infinity, ease: 'easeInOut' }}
          >
            <WaxSeal
              initial={eventMeta.initial}
              className="h-[144px] w-[144px] drop-shadow-[0_12px_26px_rgba(125,92,46,0.32)]"
            />
          </motion.span>
        </motion.button>

        <motion.div
          className="mt-10 flex flex-col items-center"
          initial={{ opacity: 0, y: 14 }}
          animate={opening ? { opacity: 0 } : { opacity: 1, y: 0 }}
          transition={opening ? { duration: 0.85 } : { duration: 1.3, delay: 0.75 }}
        >
          <LineSprig className="h-8 w-40 text-gold/60" />
          <BabyFootprints className="mt-5 h-7 w-16 text-gold/45" />
          <p
            className={`mt-4 text-gold ${isRtl ? 'font-urdu' : 'font-sans text-[12px] font-light uppercase tracking-[0.44em]'}`}
            style={isRtl ? { fontSize: '15px' } : undefined}
          >
            {t.cover.tapToOpen}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

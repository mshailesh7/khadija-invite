import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Backdrop } from './components/Backdrop'
import { Cover } from './components/Cover'
import { LanguageToggle } from './components/LanguageToggle'
import {
  Closing,
  Countdown,
  DressCode,
  Hero,
  InviteCard,
  ScratchDate,
  EventTime,
  Timeline,
  Venue,
} from './components/Sections'
import { LanguageProvider } from './context/LanguageContext'
import { RevealFlowProvider, useRevealFlow } from './context/RevealFlowContext'
import { useMusicBox } from './lib/useMusicBox'

function InvitationApp() {
  const [opened, setOpened] = useState(false)
  const [music, setMusic] = useState(false)
  const { dateRevealed } = useRevealFlow()

  useMusicBox(opened && music)

  useEffect(() => {
    document.body.classList.toggle('is-locked', !opened)
    return () => document.body.classList.remove('is-locked')
  }, [opened])

  return (
    <div className="relative min-h-screen bg-cream">
      <Backdrop />
      <LanguageToggle />

      <AnimatePresence>
        {!opened && (
          <Cover
            key="cover"
            onOpened={() => {
              setOpened(true)
              setMusic(true)
            }}
          />
        )}
      </AnimatePresence>

      {opened && (
        <>
          <MusicToggle on={music} onToggle={() => setMusic((v) => !v)} />
          <motion.main
            className="relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Hero />
            <ScratchDate />
            <EventTime />

            <AnimatePresence>
              {dateRevealed && (
                <motion.div
                  key="rest"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  <InviteCard />
                  <Countdown />
                  <Timeline />
                  <Venue />
                  <DressCode />
                  <Closing />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.main>
        </>
      )}
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <RevealFlowProvider>
        <InvitationApp />
      </RevealFlowProvider>
    </LanguageProvider>
  )
}

function MusicToggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      aria-label={on ? 'Turn music off' : 'Turn music on'}
      className="fixed right-5 top-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-gold/35 bg-cream-light/70 text-gold backdrop-blur-sm"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4">
        {on ? (
          <>
            <path d="M9 18V6l10-2v12" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="6.5" cy="18" r="2.5" />
            <circle cx="16.5" cy="16" r="2.5" />
          </>
        ) : (
          <>
            <path d="M9 18V6l10-2v12" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
            <circle cx="6.5" cy="18" r="2.5" opacity="0.4" />
            <circle cx="16.5" cy="16" r="2.5" opacity="0.4" />
            <path d="M4 4l16 16" strokeLinecap="round" />
          </>
        )}
      </svg>
    </motion.button>
  )
}

import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import type { Lang } from '../data/invitation'

export function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <motion.div
      className="fixed left-5 top-5 z-50 flex overflow-hidden rounded-full border border-gold/35 bg-cream-light/70 backdrop-blur-sm"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      role="group"
      aria-label="Language"
    >
      {(['en', 'ur'] as Lang[]).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          className={`px-3.5 py-2 font-sans text-[11px] font-light uppercase tracking-[0.18em] transition-colors duration-300 ${
            lang === code ? 'bg-gold text-cream-light' : 'text-gold hover:bg-gold/10'
          }`}
          aria-pressed={lang === code}
        >
          {code === 'en' ? 'EN' : 'اردو'}
        </button>
      ))}
    </motion.div>
  )
}

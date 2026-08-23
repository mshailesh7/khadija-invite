import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { copy, type Lang } from '../data/invitation'

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (typeof copy)[Lang]
  isRtl: boolean
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const isRtl = lang === 'ur'

  useEffect(() => {
    document.documentElement.lang = lang === 'ur' ? 'ur' : 'en'
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr'
  }, [lang, isRtl])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: copy[lang], isRtl }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

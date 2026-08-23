import { createContext, useContext, useState, type ReactNode } from 'react'

type RevealFlowValue = {
  dateRevealed: boolean
  setDateRevealed: (v: boolean) => void
  timeRevealed: boolean
  setTimeRevealed: (v: boolean) => void
}

const RevealFlowContext = createContext<RevealFlowValue | null>(null)

export function RevealFlowProvider({ children }: { children: ReactNode }) {
  const [dateRevealed, setDateRevealed] = useState(false)
  const [timeRevealed, setTimeRevealed] = useState(false)

  return (
    <RevealFlowContext.Provider
      value={{ dateRevealed, setDateRevealed, timeRevealed, setTimeRevealed }}
    >
      {children}
    </RevealFlowContext.Provider>
  )
}

export function useRevealFlow() {
  const ctx = useContext(RevealFlowContext)
  if (!ctx) throw new Error('useRevealFlow must be used within RevealFlowProvider')
  return ctx
}

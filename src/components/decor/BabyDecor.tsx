/**
 * Baby-girl decorative motifs — soft daisies, branches, footprints, and a
 * gentle mobile, drawn in the same line-art language as the gold ornaments.
 */

/** Soft many-petaled bloom like the reference corner flowers. */
export function SoftDaisy({
  className = '',
  petalFill = '#e8b4b0',
  centerFill = '#f5e6c8',
}: {
  className?: string
  petalFill?: string
  centerFill?: string
}) {
  const petals = Array.from({ length: 28 }, (_, i) => i * (360 / 28))
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <g transform="translate(50 50)">
        {petals.map((deg) => (
          <ellipse
            key={deg}
            cx="0"
            cy="-22"
            rx="5.5"
            ry="17"
            fill={petalFill}
            opacity="0.88"
            transform={`rotate(${deg})`}
          />
        ))}
        <circle r="11" fill={centerFill} />
        <circle r="5.5" fill={petalFill} opacity="0.35" />
      </g>
    </svg>
  )
}

/** Corner branch with buds and a bloom — frames the page like the reference. */
export function CornerBranchDaisy({
  className = '',
  flipX = false,
  flipY = false,
}: {
  className?: string
  flipX?: boolean
  flipY?: boolean
}) {
  const sx = flipX ? -1 : 1
  const sy = flipY ? -1 : 1
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <g transform={`scale(${sx} ${sy}) translate(${flipX ? -200 : 0} ${flipY ? -200 : 0})`}>
        <g stroke="#866739" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.55">
          <path d="M8 192C8 120 40 60 110 24" />
          <path d="M48 130c-8-10-7-22 4-28 7 9 5 20-4 28Z" />
          <path d="M72 88c-9-8-9-20 1-27 8 8 8 19-1 27Z" />
          <path d="M96 52c-8-9-7-20 3-26 7 8 6 19-3 26Z" />
          <circle cx="118" cy="28" r="3.5" fill="#866739" opacity="0.4" stroke="none" />
        </g>
        <g transform="translate(128 18) scale(0.72)">
          <SoftDaisy petalFill="#e0a9a4" centerFill="#faf0e8" />
        </g>
      </g>
    </svg>
  )
}

/** Delicate pair of baby footprints. */
export function BabyFootprints({ className = '' }: { className?: string }) {
  const foot = (
    <g stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round">
      <path d="M12 38c0-10 6-18 14-18s14 8 14 18c0 8-6 14-14 14s-14-6-14-14Z" />
      <circle cx="8" cy="24" r="2.2" fill="currentColor" stroke="none" opacity="0.7" />
      <circle cx="14" cy="19" r="2" fill="currentColor" stroke="none" opacity="0.7" />
      <circle cx="21" cy="18" r="1.8" fill="currentColor" stroke="none" opacity="0.7" />
      <circle cx="27" cy="21" r="1.6" fill="currentColor" stroke="none" opacity="0.7" />
      <circle cx="30" cy="27" r="1.4" fill="currentColor" stroke="none" opacity="0.6" />
    </g>
  )
  return (
    <svg viewBox="0 0 80 52" className={className} aria-hidden>
      <g transform="translate(4 2)">{foot}</g>
      <g transform="translate(44 6) scale(0.92)">{foot}</g>
    </svg>
  )
}

/** Single stem with leaf and small bloom — sits beneath a name. */
export function DaisyStem({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 100" className={className} aria-hidden>
      <g stroke="#866739" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.65">
        <path d="M24 96V28" />
        <path d="M24 62c-10-4-16-2-18 6 8 2 14 0 18-6Z" />
        <path d="M24 44c10-3 16-1 17 7-8 2-14-1-17-7Z" />
      </g>
      <g transform="translate(24 18) scale(0.38) translate(-50 -50)">
        <SoftDaisy petalFill="#e0a9a4" centerFill="#faf0e8" />
      </g>
    </svg>
  )
}

/** Gentle star mobile — three stars on fine threads. */
export function StarMobile({ className = '' }: { className?: string }) {
  const star = (cx: number, cy: number, r: number) => (
    <path
      d={`M${cx} ${cy - r}l${r * 0.38} ${r * 0.88}h${r * 0.95}l-${r * 0.77} ${r * 0.56}l${r * 0.3} ${r * 0.92}L${cx} ${cy + r * 0.72}l-${r * 0.77}-${r * 0.56}l-${r * 0.3} ${r * 0.92}l${r * 0.3}-${r * 0.92}z`}
      fill="currentColor"
      opacity="0.55"
    />
  )
  return (
    <svg viewBox="0 0 100 56" className={className} aria-hidden>
      <line x1="50" y1="4" x2="50" y2="18" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="50" y1="18" x2="22" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <line x1="50" y1="18" x2="50" y2="32" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <line x1="50" y1="18" x2="78" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      {star(22, 38, 7)}
      {star(50, 40, 8)}
      {star(78, 38, 7)}
    </svg>
  )
}

/** Tiny rattle outline for accent spots. */
export function BabyRattle({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 48" className={className} fill="none" aria-hidden>
      <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
        <line x1="16" y1="8" x2="16" y2="28" />
        <circle cx="16" cy="34" r="10" />
        <circle cx="16" cy="34" r="5" opacity="0.5" />
        <circle cx="10" cy="12" r="2.5" fill="currentColor" opacity="0.45" stroke="none" />
        <circle cx="22" cy="10" r="2" fill="currentColor" opacity="0.4" stroke="none" />
        <circle cx="18" cy="18" r="1.8" fill="currentColor" opacity="0.35" stroke="none" />
      </g>
    </svg>
  )
}

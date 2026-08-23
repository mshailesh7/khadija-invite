import type { ReactNode } from 'react'

/**
 * Line-art ornaments drawn to match the reference invitation's gold decor set.
 * All shapes inherit `currentColor` so sections can retint them.
 */

export function Divider({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 471 95" className={className} fill="none" aria-hidden>
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M14 47.5h176" />
        <path d="M281 47.5h176" />
        <path d="M150 44.5c26 1.6 40 2.4 40 3s-14 1.4-40 3" />
        <path d="M321 44.5c-26 1.6-40 2.4-40 3s14 1.4 40 3" />
        {/* centre knot: four lobes meeting at a point */}
        <path d="M235.5 47.5c11-15 27-15.5 27-4.5s-16 12.5-27 4.5Z" />
        <path d="M235.5 47.5c-11-15-27-15.5-27-4.5s16 12.5 27 4.5Z" />
        <path d="M235.5 47.5c-8-11-8-25 0-33.5 8 8.5 8 22.5 0 33.5Z" />
        <path d="M235.5 47.5c-8 11-8 25 0 33.5 8-8.5 8-22.5 0-33.5Z" />
      </g>
    </svg>
  )
}

/** Small paired flourish used between stacked lines of text. */
export function MiniFlourish({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 20" className={className} fill="none" aria-hidden>
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M4 10h42" />
        <path d="M74 10h42" />
        <path d="M60 3c1.4 3.6 3.6 5.8 7 7-3.4 1.2-5.6 3.4-7 7-1.4-3.6-3.6-5.8-7-7 3.4-1.2 5.6-3.4 7-7Z" />
      </g>
    </svg>
  )
}

/** Timeline node marker — a small four-point fleuron. */
export function Fleuron({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <g stroke="currentColor" strokeWidth="1.2">
        <path d="M12 2c1.8 4.6 5.6 8.4 10 10-4.4 1.6-8.2 5.4-10 10-1.8-4.6-5.6-8.4-10-10C6.4 10.4 10.2 6.6 12 2Z" />
        <circle cx="12" cy="12" r="2" />
      </g>
    </svg>
  )
}

/** Eight-petal medallion — the piece that travels down the timeline on scroll. */
export function FlowerMedallion({ className = '' }: { className?: string }) {
  const petals = Array.from({ length: 8 }, (_, i) => i * 45)
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <defs>
        <linearGradient id="petalFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fffaf8" />
          <stop offset="100%" stopColor="#f3ded0" />
        </linearGradient>
      </defs>
      <g transform="translate(60 60)">
        {petals.map((deg) => (
          <g key={deg} transform={`rotate(${deg})`}>
            <path
              d="M0 -12c7 -8 12 -20 12 -30 0 -9 -6 -14 -12 -14s-12 5 -12 14c0 10 5 22 12 30Z"
              fill="url(#petalFill)"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path d="M0 -14c2.5 -8 2.5 -20 0 -28" stroke="currentColor" strokeWidth="1.6" fill="none" />
          </g>
        ))}
        <circle r="13" fill="url(#petalFill)" stroke="currentColor" strokeWidth="2.4" />
        <circle r="6" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </g>
    </svg>
  )
}

/** Wax seal with a scalloped rim; `initial` is set in the script face by the caller. */
export function WaxSeal({
  initial,
  className = '',
}: {
  initial: string
  className?: string
}) {
  const steps = 220
  const lobes = 13
  const radius = 82
  const amp = 5
  const points = Array.from({ length: steps }, (_, i) => {
    const a = (i / steps) * Math.PI * 2
    const r = radius + amp * Math.cos(lobes * a)
    return `${(100 + r * Math.cos(a)).toFixed(2)},${(100 + r * Math.sin(a)).toFixed(2)}`
  }).join(' ')

  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <defs>
        <radialGradient id="sealBody" cx="38%" cy="32%" r="78%">
          <stop offset="0%" stopColor="#e2c08a" />
          <stop offset="55%" stopColor="#b8904f" />
          <stop offset="100%" stopColor="#7d5c2e" />
        </radialGradient>
        <radialGradient id="sealFace" cx="40%" cy="34%" r="72%">
          <stop offset="0%" stopColor="#f0d9ac" />
          <stop offset="70%" stopColor="#cda765" />
          <stop offset="100%" stopColor="#a98046" />
        </radialGradient>
      </defs>
      <polygon points={points} fill="url(#sealBody)" />
      <circle cx="100" cy="100" r="64" fill="url(#sealFace)" />
      <circle cx="100" cy="100" r="64" fill="none" stroke="#7d5c2e" strokeOpacity="0.45" strokeWidth="2.5" />
      <circle cx="100" cy="100" r="57" fill="none" stroke="#fff3d8" strokeOpacity="0.5" strokeWidth="1" />
      <text
        x="100"
        y="118"
        textAnchor="middle"
        fontFamily="'Imperial Script', cursive"
        fontSize="62"
        fill="#6d4f24"
        fillOpacity="0.85"
      >
        {initial}
      </text>
    </svg>
  )
}

/**
 * Arched panel that grows with its content. The dome is produced with
 * asymmetric border radii so the arch keeps its shape at any height.
 */
export function ArchPanel({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const dome = '50% 50% 10px 10px / 30% 30% 2% 2%'
  const domeInner = '50% 50% 7px 7px / 29% 29% 2% 2%'

  return (
    <div
      className={`relative border border-gold/55 bg-cream-light/50 ${className}`}
      style={{ borderRadius: dome }}
    >
      <span
        className="pointer-events-none absolute inset-[7px] border border-gold/30"
        style={{ borderRadius: domeInner }}
      />
      {/* finial resting on the crown of the arch */}
      <span className="pointer-events-none absolute -top-[9px] left-1/2 -translate-x-1/2 text-gold">
        <Fleuron className="h-4 w-4" />
      </span>
      <div className="relative">{children}</div>
    </div>
  )
}

/** Symmetric sprig of leaves and buds, centred for use beneath headings. */
export function LineSprig({ className = '' }: { className?: string }) {
  const half = (
    <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none">
      <path d="M0 30c26 0 52-3 74-9" />
      <path d="M22 27c-5-7-3-13 3-15 4 5 2 11-3 15Z" />
      <path d="M48 22c-5-6-4-12 2-15 4 6 3 11-2 15Z" />
      <path d="M30 29c7-3 14-1 16 5-6 2-12 0-16-5Z" />
      <path d="M56 24c7-3 14-1 15 5-6 2-12-1-15-5Z" />
      <circle cx="80" cy="19" r="3.2" />
      <circle cx="90" cy="24" r="2" />
    </g>
  )
  return (
    <svg viewBox="-100 0 200 46" className={className} fill="none" aria-hidden>
      <g transform="scale(-1 1)">{half}</g>
      {half}
    </svg>
  )
}

/** Small heart used as the venue / join marker. */
export function HeartMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden>
      <path
        d="M16 27S4 19.5 4 12.2C4 8.2 7 5 10.9 5c2.3 0 4.2 1.1 5.1 2.8C16.9 6.1 18.8 5 21.1 5 25 5 28 8.2 28 12.2 28 19.5 16 27 16 27Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  )
}

/** Corner floral used at the four corners of the cover panels. */
export function CornerFloral({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" className={className} fill="none" aria-hidden>
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.9">
        <path d="M4 156C4 92 44 40 108 18" />
        <path d="M44 108c-10-10-9-22 3-28 8 9 6 21-3 28Z" />
        <path d="M52 112c12-6 24-2 27 9-11 4-22-1-27-9Z" />
        <path d="M74 66c-11-9-11-21 0-28 8 9 8 20 0 28Z" />
        <path d="M82 70c12-5 24 0 26 11-11 3-22-3-26-11Z" />
        <circle cx="112" cy="22" r="5" />
        <circle cx="126" cy="32" r="3" />
        <path d="M28 132c-9-6-10-16-2-21 7 6 8 15 2 21Z" />
      </g>
    </svg>
  )
}

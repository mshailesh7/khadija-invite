/**
 * Baby-girl decorative motifs — soft daisies, branches, footprints, and a
 * gentle mobile, drawn in the same line-art language as the gold ornaments.
 */

import { useState } from 'react'

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
        <g stroke="#b86b7a" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.55">
          <path d="M8 192C8 120 40 60 110 24" />
          <path d="M48 130c-8-10-7-22 4-28 7 9 5 20-4 28Z" />
          <path d="M72 88c-9-8-9-20 1-27 8 8 8 19-1 27Z" />
          <path d="M96 52c-8-9-7-20 3-26 7 8 6 19-3 26Z" />
          <circle cx="118" cy="28" r="3.5" fill="#b86b7a" opacity="0.4" stroke="none" />
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
      <g stroke="#b86b7a" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.65">
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

export function Pacifier({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} fill="none" aria-hidden>
      <g stroke="currentColor" strokeWidth="1.2">
        <circle cx="18" cy="14" r="9" />
        <path d="M18 23v8" strokeLinecap="round" />
        <path d="M13 31h10" strokeLinecap="round" />
        <path d="M14 14c0-3 1.8-5 4-5s4 2 4 5" opacity="0.5" />
      </g>
    </svg>
  )
}

export function BabyBottle({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 52" className={className} fill="none" aria-hidden>
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="8" y="4" width="12" height="5" rx="1.5" />
        <path d="M10 9v4" />
        <path d="M18 9v4" />
        <path d="M7 13h14v32a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3V13Z" />
        <path d="M9 22h10" opacity="0.45" />
        <path d="M9 28h10" opacity="0.35" />
      </g>
    </svg>
  )
}

export function TeddyBear({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 52" className={className} fill="none" aria-hidden>
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <circle cx="14" cy="12" r="6" />
        <circle cx="34" cy="12" r="6" />
        <ellipse cx="24" cy="28" rx="14" ry="16" />
        <circle cx="19" cy="26" r="1.5" fill="currentColor" />
        <circle cx="29" cy="26" r="1.5" fill="currentColor" />
        <path d="M24 30c-2 2-2 4 0 5 2-1 2-3 0-5Z" fill="currentColor" opacity="0.5" stroke="none" />
        <path d="M10 34c-4 2-6 6-5 10" />
        <path d="M38 34c4 2 6 6 5 10" />
      </g>
    </svg>
  )
}

export function RubberDuck({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 36" className={className} fill="none" aria-hidden>
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <ellipse cx="24" cy="22" rx="14" ry="10" />
        <circle cx="34" cy="14" r="6" />
        <circle cx="36" cy="13" r="1" fill="currentColor" />
        <path d="M38 15c2 1 3 2 4 1" />
        <path d="M14 24c-4 2-6 5-4 7 2-1 4-2 6-4" />
      </g>
    </svg>
  )
}

export function BuildingBlocks({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 52 40" className={className} fill="none" aria-hidden>
      <g stroke="currentColor" strokeWidth="1.2">
        <rect x="4" y="18" width="16" height="16" rx="1" />
        <rect x="18" y="10" width="16" height="16" rx="1" />
        <rect x="32" y="18" width="16" height="16" rx="1" />
        <text x="10" y="29" fontSize="9" fill="currentColor" stroke="none" opacity="0.55" fontFamily="serif">
          K
        </text>
      </g>
    </svg>
  )
}

export function BabyBow({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 28" className={className} fill="none" aria-hidden>
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M24 14c-6-8-16-8-16 0s10 8 16 0 16-8 16 0-10 8-16 0Z" />
        <circle cx="24" cy="14" r="3" fill="currentColor" opacity="0.35" stroke="none" />
      </g>
    </svg>
  )
}

/** Peaceful sleeping baby — used when no photo is provided. */
export function SleepingBabyArt({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 240" className={className} fill="none" aria-hidden>
      <ellipse cx="100" cy="200" rx="72" ry="28" fill="#e0a9a4" opacity="0.12" />
      <path
        d="M52 168c8-48 40-72 48-72s40 24 48 72c-14 8-32 12-48 12s-34-4-48-12Z"
        fill="#faf0e8"
        stroke="#b86b7a"
        strokeWidth="1.4"
        opacity="0.85"
      />
      <circle cx="100" cy="108" r="36" fill="#faf0e8" stroke="#b86b7a" strokeWidth="1.4" />
      <path d="M78 108c0-8 6-14 10-14" stroke="#b86b7a" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M122 108c0-8-6-14-10-14" stroke="#b86b7a" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M92 118q8 6 16 0" stroke="#b86b7a" strokeWidth="1.1" strokeLinecap="round" opacity="0.45" />
      <path d="M68 95c6-10 18-16 32-16s26 6 32 16" stroke="#b86b7a" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      <path
        d="M88 74c-4-5-11-5-11 0s7 5 11 0 11-5 11 0-7 5-11 0"
        stroke="#b86b7a"
        strokeWidth="1"
        opacity="0.5"
      />
      <circle cx="100" cy="74" r="2.5" fill="#e0a9a4" opacity="0.55" />
    </svg>
  )
}

/** Row of small toy icons — scatter under headings or beside photos. */
export function ToyShelf({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-end justify-center gap-4 sm:gap-5 ${className}`}>
      <Pacifier className="h-7 w-7 text-gold/45" />
      <BabyRattle className="h-9 w-5 text-gold/50" />
      <TeddyBear className="h-10 w-9 text-gold/50" />
      <BabyBottle className="h-10 w-5 text-gold/45" />
      <RubberDuck className="h-8 w-10 text-gold/45" />
      <BuildingBlocks className="h-8 w-11 text-gold/45" />
    </div>
  )
}

/** Gold-framed portrait — shows photo if available, else sleeping baby art. */
export function BabyPhotoFrame({
  src,
  alt,
  className = '',
}: {
  src?: string
  alt: string
  className?: string
}) {
  const [failed, setFailed] = useState(false)
  const showPhoto = src && !failed

  return (
    <div
      className={`relative mx-auto border border-gold/40 bg-cream-light/80 p-2.5 shadow-[0_8px_28px_rgba(134,103,57,0.1)] ${className}`}
      style={{ borderRadius: '50% 50% 12px 12px / 18% 18% 4% 4%' }}
    >
      <span className="pointer-events-none absolute -top-2 left-1/2 z-[1] -translate-x-1/2">
        <BabyBow className="h-5 w-10 text-blush" />
      </span>
      <div
        className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-blush/10 to-cream"
        style={{ borderRadius: '50% 50% 8px 8px / 16% 16% 3% 3%' }}
      >
        {showPhoto ? (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            onError={() => setFailed(true)}
          />
        ) : (
          <SleepingBabyArt className="mx-auto h-full w-[85%] py-4 text-gold/50" />
        )}
      </div>
      <Pacifier className="pointer-events-none absolute -left-3 bottom-8 h-7 w-7 text-gold/35" />
      <TeddyBear className="pointer-events-none absolute -right-4 bottom-6 h-9 w-8 text-gold/35" />
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { dressPalette, eventMeta } from '../data/invitation'
import { Breathe, Reveal, Swing } from './Reveal'
import {
  ArchPanel,
  Divider,
  Fleuron,
  FlowerMedallion,
  HeartMark,
  LineSprig,
  MiniFlourish,
} from './decor/Ornaments'

function SectionHead({ title }: { title: string }) {
  return (
    <>
      <h2 className={`h-script ${title.match(/[\u0600-\u06FF]/) ? 'font-urdu-heading' : ''}`}>
        {title}
      </h2>
      <Reveal style="zoomin" duration={1.6} scale={0.15} className="mx-auto mt-1 w-[139px]">
        <Divider className="w-full text-gold" />
      </Reveal>
    </>
  )
}

/* ------------------------------------------------------------------ hero */

export function Hero() {
  const { t, isRtl } = useLanguage()

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center pb-16 pt-24">
      <div className="sheet text-center">
        <Reveal style="fadeinup" duration={1.8} delay={0.35} distance={20}>
          <p
            className={`font-sans text-[11px] font-light uppercase tracking-[0.44em] text-gold/80 ${isRtl ? 'font-urdu leading-relaxed tracking-normal normal-case' : ''}`}
            style={isRtl ? { fontSize: '15px' } : undefined}
          >
            {t.occasion}
          </p>
        </Reveal>

        <Reveal style="fadeinup" duration={1.8} delay={0.5} distance={20}>
          <h1
            className={`mt-8 text-gold ${isRtl ? 'font-urdu-heading' : 'font-script'}`}
            style={{ fontSize: 'var(--fs-name)', lineHeight: isRtl ? 1.6 : 1.1 }}
          >
            {t.babyNameShort}
          </h1>
        </Reveal>

        <Reveal style="fadeinup" duration={1.8} delay={0.7} distance={20}>
          <div className="mx-auto mt-6 w-32">
            <MiniFlourish className="w-full text-gold" />
          </div>
        </Reveal>

        <Reveal style="fadeinup" duration={1.8} delay={0.85} distance={20}>
          <p className={`mt-8 text-gold ${isRtl ? 'font-urdu' : 'font-serif'}`} style={{ fontSize: 'var(--fs-meta)' }}>
            {t.dayLabel} · {t.dateLabel}
          </p>
          <p className={`mt-2 text-gold ${isRtl ? 'font-urdu' : 'font-serif'}`} style={{ fontSize: 'var(--fs-meta)' }}>
            {t.timeLabel}
          </p>
        </Reveal>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 9, 0], opacity: [0.35, 0.9, 0.35] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  )
}

/* ------------------------------------------------------- invitation card */

export function InviteCard() {
  const { t, isRtl } = useLanguage()

  return (
    <section className="relative py-16">
      <div className="sheet">
        <ArchPanel className="mx-auto w-full max-w-[330px] px-7 pb-12 pt-[26%] text-center">
          <Reveal style="fadeinup" duration={1.6} distance={40}>
            <Breathe peak={1.08} duration={2} className="mx-auto mb-7 w-8">
              <Fleuron className="w-full text-gold" />
            </Breathe>
          </Reveal>

          <Reveal style="fadeinup" duration={1.6} distance={40}>
            <p className={`whitespace-pre-line text-ink-soft ${isRtl ? 'font-urdu t-body-urdu' : 't-body'}`}>
              {t.messageBefore}
            </p>
            <p
              className={`my-6 text-gold ${isRtl ? 'font-urdu-heading' : 'font-script'}`}
              style={{ fontSize: 'var(--fs-venue)', lineHeight: isRtl ? 1.7 : 1.25 }}
            >
              {t.babyNameShort}
            </p>
            <p className={`whitespace-pre-line text-ink-soft ${isRtl ? 'font-urdu t-body-urdu' : 't-body'}`}>
              {t.messageAfter}
            </p>
          </Reveal>

          <Reveal style="fadeinup" duration={1.6} distance={50}>
            <div className="mx-auto mt-9 w-32">
              <LineSprig className="w-full text-gold" />
            </div>
          </Reveal>
        </ArchPanel>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------- countdown */

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number }

function timeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now())
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
  }
}

export function Countdown() {
  const { t } = useLanguage()
  const [left, setLeft] = useState(() => timeLeft(new Date(eventMeta.eventDate)))

  useEffect(() => {
    const target = new Date(eventMeta.eventDate)
    const id = window.setInterval(() => setLeft(timeLeft(target)), 1000)
    return () => window.clearInterval(id)
  }, [])

  const units: [number, string][] = [
    [left.days, t.countdown.days],
    [left.hours, t.countdown.hours],
    [left.minutes, t.countdown.minutes],
    [left.seconds, t.countdown.seconds],
  ]

  return (
    <section className="py-14">
      <div className="sheet">
        <SectionHead title={t.sections.countdown} />

        <Reveal style="fadein" duration={1.6} className="mt-10">
          <div className="flex items-start justify-center gap-1.5" dir="ltr">
            {units.map(([value, label], i) => (
              <div key={label} className="flex items-start">
                <div className="text-center">
                  <div
                    className="font-serif text-gold tabular-nums"
                    style={{ fontSize: 'var(--fs-count)', lineHeight: 1 }}
                  >
                    {String(value).padStart(2, '0')}
                  </div>
                  <div className="mt-2 font-serif text-gold" style={{ fontSize: 'var(--fs-meta)' }}>
                    {label}
                  </div>
                </div>
                {i < units.length - 1 && (
                  <span
                    className="px-1.5 font-serif leading-none text-gold"
                    style={{ fontSize: 'calc(var(--fs-count) * 1.15)', marginTop: '-2px' }}
                  >
                    :
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- timeline */

export function Timeline() {
  const { t, isRtl } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 85%', 'end 55%'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 134])

  return (
    <section className="py-14">
      <div className="sheet">
        <SectionHead title={t.sections.timeline} />

        <div ref={ref} className="relative mt-12 pb-4">
          <div className="absolute bottom-6 left-1/2 top-6 w-px -translate-x-1/2 bg-gold/30" />

          <motion.div
            className="pointer-events-none absolute left-1/2 top-2 z-10"
            style={{ x: '-50%', y, rotate }}
          >
            <FlowerMedallion className="h-12 w-12 text-gold drop-shadow-[0_4px_10px_rgba(134,103,57,0.28)]" />
          </motion.div>

          <ul className="relative space-y-11">
            {t.timeline.map((item, i) => (
              <li
                key={`${item.time}-${item.title}`}
                className="grid grid-cols-[1fr_auto_1fr] items-center gap-4"
              >
                <Reveal
                  style="fadeinup"
                  duration={1.4}
                  delay={i * 0.08}
                  distance={20}
                  className={isRtl ? 'text-left' : 'text-right'}
                >
                  <span
                    className="font-serif text-ink tabular-nums"
                    style={{ fontSize: 'var(--fs-time)', lineHeight: 1.2 }}
                    dir="ltr"
                  >
                    {item.time}
                  </span>
                </Reveal>

                <span className="flex h-6 w-6 items-center justify-center">
                  {i !== 0 && <Fleuron className="h-3.5 w-3.5 text-gold/70" />}
                </span>

                <Reveal
                  style="fadeinup"
                  duration={1.4}
                  delay={i * 0.08}
                  distance={20}
                  className={isRtl ? 'text-right' : 'text-left'}
                >
                  <span
                    className={`whitespace-pre-line font-light text-ink ${isRtl ? 'font-urdu' : ''}`}
                    style={{ fontSize: 'var(--fs-body)', lineHeight: 1.15 }}
                  >
                    {item.title}
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------- venue */

export function Venue() {
  const { t, isRtl } = useLanguage()

  return (
    <section className="py-14">
      <div className="sheet text-center">
        <SectionHead title={t.sections.venue} />

        <Breathe peak={1.06} duration={1.5} className="mx-auto mt-8 w-9">
          <HeartMark className="w-full text-gold" />
        </Breathe>

        <Reveal style="fadeinup" duration={1.6} distance={20}>
          <p
            className={`mt-5 font-light text-ink-soft ${isRtl ? 'font-urdu' : ''}`}
            style={{ fontSize: 'clamp(21px, 5.2vw, 23px)' }}
          >
            {t.venue.name}
          </p>
        </Reveal>

        <Reveal style="fadeinup" duration={1.6} delay={0.1} distance={20}>
          <p
            className={`mt-2 font-light text-ink ${isRtl ? 'font-urdu' : ''}`}
            style={{ fontSize: 'var(--fs-meta)' }}
          >
            {t.venue.city}
          </p>
        </Reveal>

        <Reveal style="fadeinup" duration={1.6} delay={0.2} distance={40}>
          <a
            href={eventMeta.venueUrl}
            target="_blank"
            rel="noreferrer"
            className={`mt-9 inline-block border border-gold/45 bg-cream-light/60 px-8 py-4 font-sans text-[11px] font-light uppercase tracking-[0.3em] text-gold transition-colors duration-500 hover:bg-cream-light ${isRtl ? 'font-urdu normal-case tracking-normal' : ''}`}
            style={isRtl ? { fontSize: '14px' } : undefined}
          >
            {t.venue.mapsLabel}
          </a>
        </Reveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------ dress code */

export function DressCode() {
  const { t, isRtl } = useLanguage()

  return (
    <section className="py-14">
      <div className="sheet text-center">
        <SectionHead title={t.sections.dressCode} />

        <Reveal style="fadeinup" duration={1.6} distance={20}>
          <p className={`mx-auto mt-9 max-w-[335px] ${isRtl ? 'font-urdu t-body-urdu' : 't-body'}`}>
            {t.dressCode.intro}
          </p>
        </Reveal>

        <h3
          className={`mt-12 text-gold ${isRtl ? 'font-urdu-heading' : 'font-script'}`}
          style={{ fontSize: 'var(--fs-subheading)', lineHeight: 1.55 }}
        >
          {t.dressCode.wear}
        </h3>

        <Reveal style="fadeinup" duration={1.6} distance={20}>
          <p className={`mx-auto mt-4 max-w-[301px] ${isRtl ? 'font-urdu t-body-urdu' : 't-body'}`}>
            {t.dressCode.note}
          </p>
        </Reveal>

        <h4
          className={`mt-12 text-gold ${isRtl ? 'font-urdu-heading' : 'font-script'}`}
          style={{ fontSize: 'var(--fs-subheading)', lineHeight: 1.55 }}
        >
          {t.sections.palette}
        </h4>

        <div className="mt-6 flex items-center justify-center gap-3">
          {dressPalette.map((color, i) => (
            <Reveal key={color} style="fadeinup" duration={1.6} delay={i * 0.1} distance={40}>
              <span className="flex h-[57px] w-[57px] items-center justify-center rounded-full bg-cream-light">
                <span
                  className="h-[55px] w-[55px] rounded-full"
                  style={{ backgroundColor: color, boxShadow: 'inset 0 0 0 1px rgba(134,103,57,0.15)' }}
                />
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ rsvp */

export function Rsvp() {
  const { t, isRtl } = useLanguage()
  const [sent, setSent] = useState(false)
  const [attending, setAttending] = useState<string>('')

  return (
    <section className="py-14">
      <div className="sheet">
        <SectionHead title={t.sections.rsvp} />

        {sent ? (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-12 text-center"
          >
            <h3
              className={`text-gold ${isRtl ? 'font-urdu-heading' : 'font-script'}`}
              style={{ fontSize: 'var(--fs-heading)' }}
            >
              {t.rsvp.thankYou}
            </h3>
            <p className={`mt-4 ${isRtl ? 'font-urdu t-body-urdu' : 't-body'}`}>
              {attending === t.rsvp.options[0] ? t.rsvp.yesReply : t.rsvp.noReply}
            </p>
            <div className="mx-auto mt-8 w-40">
              <LineSprig className="w-full text-gold" />
            </div>
          </motion.div>
        ) : (
          <Reveal style="fadein" duration={1.6}>
            <form
              className="mx-auto mt-10 max-w-[343px] space-y-7"
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <Field label={t.rsvp.fields.name} rtl={isRtl}>
                <input
                  required
                  name="name"
                  className={`w-full border-b border-gold/40 bg-transparent pb-2 font-light text-ink outline-none transition-colors focus:border-gold ${isRtl ? 'font-urdu text-right' : ''}`}
                  style={{ fontSize: 'var(--fs-body)' }}
                  dir={isRtl ? 'rtl' : 'ltr'}
                />
              </Field>

              <Field label={t.rsvp.fields.guests} rtl={isRtl}>
                <input
                  required
                  type="number"
                  min={1}
                  max={20}
                  defaultValue={1}
                  name="guests"
                  className="w-full border-b border-gold/40 bg-transparent pb-2 font-light text-ink outline-none transition-colors focus:border-gold"
                  style={{ fontSize: 'var(--fs-body)' }}
                  dir="ltr"
                />
              </Field>

              <fieldset>
                <legend
                  className={`font-sans text-[11px] font-light uppercase tracking-[0.26em] text-gold ${isRtl ? 'font-urdu normal-case tracking-normal' : ''}`}
                  style={isRtl ? { fontSize: '13px' } : undefined}
                >
                  {t.rsvp.fields.attending}
                </legend>
                <div className="mt-4 space-y-3">
                  {t.rsvp.options.map((opt) => (
                    <label
                      key={opt}
                      className={`flex cursor-pointer items-center gap-3 border px-4 py-3 transition-colors duration-300 ${
                        attending === opt
                          ? 'border-gold bg-cream-light/70'
                          : 'border-gold/30 hover:border-gold/60'
                      } ${isRtl ? 'flex-row-reverse' : ''}`}
                    >
                      <input
                        required
                        type="radio"
                        name="attending"
                        value={opt}
                        className="accent-[#866739]"
                        onChange={() => setAttending(opt)}
                      />
                      <span
                        className={`font-light text-ink ${isRtl ? 'font-urdu text-right' : ''}`}
                        style={{ fontSize: 'var(--fs-meta)' }}
                      >
                        {opt}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <button
                type="submit"
                className={`w-full bg-gold py-4 font-sans text-[11px] font-light uppercase tracking-[0.32em] text-cream-light transition-colors duration-500 hover:bg-gold-deep ${isRtl ? 'font-urdu normal-case tracking-normal' : ''}`}
                style={isRtl ? { fontSize: '15px' } : undefined}
              >
                {t.rsvp.send}
              </button>

              <p
                className={`text-center font-light text-ink-soft ${isRtl ? 'font-urdu' : ''}`}
                style={{ fontSize: isRtl ? '14px' : '15px' }}
              >
                {isRtl ? `براہ کرم ${t.rsvp.deadline} تک جواب دیں` : `Kindly reply by ${t.rsvp.deadline}`}
              </p>
            </form>
          </Reveal>
        )}
      </div>
    </section>
  )
}

function Field({
  label,
  children,
  rtl,
}: {
  label: string
  children: React.ReactNode
  rtl?: boolean
}) {
  return (
    <label className="block">
      <span
        className={`font-sans text-[11px] font-light uppercase tracking-[0.26em] text-gold ${rtl ? 'font-urdu normal-case tracking-normal' : ''}`}
        style={rtl ? { fontSize: '13px' } : undefined}
      >
        {label}
      </span>
      <div className="mt-3">{children}</div>
    </label>
  )
}

/* --------------------------------------------------------------- closing */

export function Closing() {
  const { t, isRtl } = useLanguage()

  return (
    <section className="pb-24 pt-14">
      <div className="sheet text-center">
        <Swing className="mx-auto w-[150px]">
          <FlowerMedallion className="w-full text-gold" />
        </Swing>

        <h2 className={`mt-10 h-script ${isRtl ? 'font-urdu-heading' : ''}`}>{t.closing}</h2>

        <Reveal style="fadeinup" duration={1.6} distance={20}>
          <p
            className={`mt-6 font-light text-ink-soft ${isRtl ? 'font-urdu' : ''}`}
            style={{ fontSize: 'var(--fs-meta)' }}
          >
            {t.parents}
          </p>
        </Reveal>

        <div className="mx-auto mt-10 w-48">
          <LineSprig className="w-full text-gold/70" />
        </div>
      </div>
    </section>
  )
}

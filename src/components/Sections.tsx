import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { useRevealFlow } from '../context/RevealFlowContext'
import { eventMeta } from '../data/invitation'
import { Breathe, Reveal, Swing } from './Reveal'
import { ScratchReveal } from './ScratchReveal'
import {
  ArchPanel,
  Divider,
  Fleuron,
  FlowerMedallion,
  HeartMark,
  LineSprig,
  MiniFlourish,
} from './decor/Ornaments'
import {
  BabyFootprints,
  BabyPhotoFrame,
  BabyRattle,
  DaisyStem,
  Pacifier,
  RubberDuck,
  SoftDaisy,
  StarMobile,
  TeddyBear,
  ToyShelf,
} from './decor/BabyDecor'

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
      <SoftDaisy className="pointer-events-none absolute left-1/2 top-[4.5rem] h-[4.25rem] w-[4.25rem] -translate-x-1/2 opacity-45 sm:top-24 sm:h-20 sm:w-20" />
      <SoftDaisy className="pointer-events-none absolute left-5 top-32 h-16 w-16 opacity-40 sm:left-10 sm:top-36 sm:h-20 sm:w-20" />
      <SoftDaisy className="pointer-events-none absolute right-5 top-44 h-14 w-14 opacity-35 sm:right-10 sm:top-48 sm:h-[4.5rem] sm:w-[4.5rem]" />
      <TeddyBear className="pointer-events-none absolute left-3 top-[52%] h-11 w-10 opacity-30 sm:left-6" />
      <RubberDuck className="pointer-events-none absolute right-3 top-[55%] h-9 w-11 opacity-30 sm:right-6" />
      <Pacifier className="pointer-events-none absolute left-6 bottom-28 h-8 w-8 opacity-25 sm:bottom-32" />

      <div className="relative z-[1] sheet text-center">
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

        <Reveal style="fadeinup" duration={1.8} delay={0.62} distance={20}>
          <BabyPhotoFrame
            src={eventMeta.babyPhoto}
            alt={t.babyName}
            className="mt-7 w-[200px] sm:w-[220px]"
          />
        </Reveal>

        <Reveal style="fadeinup" duration={1.8} delay={0.68} distance={20}>
          <ToyShelf className="mt-6 scale-90 sm:scale-100" />
        </Reveal>

        <Reveal style="fadeinup" duration={1.8} delay={0.7} distance={20}>
          <div className="mx-auto mt-6 flex items-end justify-center gap-3">
            <BabyRattle className="h-9 w-6 text-gold/45" />
            <div className="w-32">
              <MiniFlourish className="w-full text-gold" />
            </div>
            <BabyRattle className="h-9 w-6 -scale-x-100 text-gold/45" />
          </div>
        </Reveal>

        <Reveal style="fadeinup" duration={1.8} delay={0.78} distance={20}>
          <BabyFootprints className="mx-auto mt-4 h-7 w-16 text-gold/50" />
        </Reveal>

        <Reveal style="fadeinup" duration={1.8} delay={0.85} distance={20}>
          <p
            className={`mx-auto mt-8 max-w-[320px] font-light text-ink-soft ${isRtl ? 'font-urdu t-body-urdu' : 't-body'}`}
          >
            {t.welcomeLine}
          </p>
        </Reveal>

        <Reveal style="fadeinup" duration={1.8} delay={0.92} distance={20}>
          <p
            className={`mx-auto mt-5 max-w-[330px] font-light text-ink-soft ${isRtl ? 'font-urdu t-body-urdu' : 't-body'}`}
          >
            {t.inviteLine}
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

/* ---------------------------------------------------------- scratch date */

export function ScratchDate() {
  const { t, isRtl } = useLanguage()
  const { dateRevealed, setDateRevealed } = useRevealFlow()

  return (
    <section className="relative py-14">
      <div className="sheet text-center">
        <SectionHead title={t.sections.saveTheDate} />

        <Reveal style="fadeinup" duration={1.6} distance={30} className="mt-10">
          <ScratchReveal
            hint={t.scratch.dateHint}
            hintPlacement="below"
            brushRadius={22}
            revealAt={0.7}
            onRevealed={() => setDateRevealed(true)}
            className="mx-auto w-full max-w-[400px]"
          >
            <div className="grid grid-cols-[1fr_1fr_1.35fr] gap-2 sm:gap-3" dir="ltr">
              {[t.date.day, t.date.month, t.date.year].map((value, i) => (
                <div
                  key={value}
                  className="flex min-h-[120px] items-center justify-center border border-gold/20 bg-pink-soft/50 px-1 py-8 sm:min-h-[136px]"
                >
                  <span
                    className="font-serif font-bold tabular-nums leading-none text-gold"
                    style={{
                      fontSize:
                        i === 2
                          ? 'clamp(36px, 9.5vw, 52px)'
                          : 'clamp(48px, 13vw, 72px)',
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </ScratchReveal>

          {dateRevealed && (
            <motion.div
              className="mt-8 flex flex-col items-center"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p
                className={`text-gold ${isRtl ? 'font-urdu-heading' : 'font-script'}`}
                style={{ fontSize: 'clamp(28px, 7vw, 36px)', lineHeight: 1.4 }}
              >
                {t.date.weekday}
              </p>
              <p className="mt-6 font-sans text-[10px] font-light uppercase tracking-[0.32em] text-gold/60">
                {t.scratch.scrollHint}
              </p>
              <motion.div
                className="mt-3 h-8 w-px bg-gradient-to-b from-gold/70 to-transparent"
                animate={{ y: [0, 6, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          )}
        </Reveal>
      </div>
    </section>
  )
}

/* --------------------------------------------------------------- event time */

export function EventTime() {
  const { t, isRtl } = useLanguage()
  const { dateRevealed } = useRevealFlow()

  if (!dateRevealed) return null

  return (
    <motion.section
      id="event-time"
      className="py-14"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="sheet text-center">
        <SectionHead title={t.sections.time} />

        <Reveal style="fadeinup" duration={1.6} distance={30} className="mt-10">
          <p
            className="font-serif font-bold tabular-nums text-gold"
            style={{ fontSize: 'clamp(52px, 14vw, 72px)', lineHeight: 1 }}
            dir="ltr"
          >
            {t.time.clock}
          </p>
          <p
            className={`mt-4 font-light text-ink-soft ${isRtl ? 'font-urdu' : ''}`}
            style={{ fontSize: 'var(--fs-meta)' }}
          >
            {t.time.note}
          </p>
        </Reveal>
      </div>
    </motion.section>
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
            <Breathe peak={1.08} duration={2} className="mx-auto mb-5 w-8">
              <StarMobile className="w-full text-gold/70" />
            </Breathe>
          </Reveal>

          <Reveal style="fadeinup" duration={1.6} distance={40}>
            <BabyFootprints className="mx-auto mb-6 h-8 w-20 text-gold/45" />
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
            <div className="mx-auto mt-9 flex items-end justify-center gap-4">
              <DaisyStem className="h-16 w-8 shrink-0 opacity-70" />
              <div className="w-24">
                <LineSprig className="w-full text-gold" />
              </div>
              <DaisyStem className="h-16 w-8 shrink-0 -scale-x-100 opacity-70" />
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

        <ToyShelf className="mt-6 scale-[0.85] opacity-80 sm:scale-90" />

        <Reveal style="fadein" duration={1.6} className="mt-8">
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

        <ToyShelf className="mx-auto mt-6 max-w-[320px] scale-[0.8] opacity-75" />

        <Reveal style="fadeinup" duration={1.6} distance={20}>
          <p className={`mx-auto mt-4 max-w-[301px] ${isRtl ? 'font-urdu t-body-urdu' : 't-body'}`}>
            {t.dressCode.note}
          </p>
        </Reveal>
      </div>
    </section>
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

        <BabyFootprints className="mx-auto mt-6 h-8 w-20 text-gold/45" />

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

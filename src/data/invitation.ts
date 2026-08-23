export type Lang = 'en' | 'ur'

/** Shared facts — not translated. */
export const eventMeta = {
  initial: 'K',
  eventDate: '2026-08-24T19:00:00',
  venueUrl: 'https://share.google/aMMtrTYbGhEFxxrgk',
  /** Drop a photo at public/baby-photo.jpg to replace the illustration */
  babyPhoto: '/baby-photo.jpg',
} as const

export type LocaleCopy = {
  babyName: string
  babyNameShort: string
  father: string
  mother: string
  parents: string
  occasion: string
  welcomeLine: string
  date: {
    day: string
    month: string
    year: string
    weekday: string
    /** small label under each number */
    dayLabel: string
    monthLabel: string
    yearLabel: string
  }
  time: {
    clock: string
    note: string
  }
  messageBefore: string
  messageAfter: string
  venue: {
    name: string
    city: string
    mapsLabel: string
  }
  sections: {
    saveTheDate: string
    time: string
    littleOne: string
    countdown: string
    timeline: string
    venue: string
    dressCode: string
  }
  countdown: {
    days: string
    hours: string
    minutes: string
    seconds: string
  }
  timeline: { time: string; title: string }[]
  dressCode: {
    intro: string
    wear: string
    note: string
  }
  closing: string
  cover: {
    tapToOpen: string
    openLabel: string
  }
  scratch: {
    dateHint: string
    scrollHint: string
    timeHint: string
    lockedHint: string
  }
}

export const copy: Record<Lang, LocaleCopy> = {
  en: {
    babyName: 'Khadija Vadgama',
    babyNameShort: 'Khadija',
    father: 'Irshad Vadgama',
    mother: 'Svaleha Irshad Vadgama',
    parents: 'Irshad & Svaleha Vadgama',
    occasion: 'Welcoming Our Precious Daughter To Our Lives',
    welcomeLine: 'We Welcome You All To Join Us in Our Joy',
    date: {
      day: '24',
      month: '08',
      year: '2026',
      weekday: 'Monday',
      dayLabel: 'DD',
      monthLabel: 'MM',
      yearLabel: 'YYYY',
    },
    time: {
      clock: '19:00',
      note: 'Dinner & Celebration',
    },
    messageBefore: `With hearts full of joy,
Irshad & Svaleha Vadgama
joyfully welcome their daughter`,
    messageAfter: `We welcome you all to join us in our joy

24 · 08 · 2026
19:00

Hotel Mina International`,
    venue: {
      name: 'Hotel Mina International',
      city: 'Mumbai, India',
      mapsLabel: 'Open in Google Maps',
    },
    sections: {
      saveTheDate: 'Save the Date',
      time: 'Time',
      littleOne: 'Our Little Princess',
      countdown: 'The Celebration Begins',
      timeline: 'Order of the Day',
      venue: 'Venue',
      dressCode: 'Dress Code',
    },
    countdown: {
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
    },
    timeline: [
      { time: '19:00', title: 'Welcome' },
      { time: '19:30', title: 'Dinner' },
      { time: '20:30', title: 'Celebration' },
    ],
    dressCode: {
      intro:
        'We kindly invite you to dress in elegant ethnic wear that reflects the warmth and joy of our celebration.',
      wear: 'Ethnic Wear',
      note: 'Traditional attire in rich colours is warmly encouraged for this special evening.',
    },
    closing: 'We look forward to welcoming you',
    cover: {
      tapToOpen: 'Tap to open',
      openLabel: 'Tap to open the invitation',
    },
    scratch: {
      dateHint: 'Scratch to reveal the date',
      scrollHint: 'Scroll down',
      timeHint: 'Scratch to reveal the time',
      lockedHint: 'Reveal the date first',
    },
  },

  ur: {
    babyName: 'خدیجہ وڈگامہ',
    babyNameShort: 'خدیجہ',
    father: 'ارشد وڈگامہ',
    mother: 'سوالیہ ارشد وڈگامہ',
    parents: 'ارشد اور سوالیہ وڈگامہ',
    occasion: 'اپنی پیاری بیٹی کو زندگی میں خوش آمدید',
    welcomeLine: 'ہم آپ سب کو اپنی خوشی میں شامل ہونے کی دعوت دیتے ہیں',
    date: {
      day: '۲۴',
      month: '۰۸',
      year: '۲۰۲۶',
      weekday: 'پیر',
      dayLabel: 'DD',
      monthLabel: 'MM',
      yearLabel: 'YYYY',
    },
    time: {
      clock: '۱۹:۰۰',
      note: 'رات کا کھانا اور جشن',
    },
    messageBefore: `دلوں بھر کر خوشی کے ساتھ،
ارشد اور سوالیہ وڈگامہ
اپنی بیٹی کا خوش آمدید کہتے ہیں`,
    messageAfter: `ہم آپ سب کو اپنی خوشی میں شامل ہونے کی دعوت دیتے ہیں

۲۴ · ۰۸ · ۲۰۲۶
۱۹:۰۰

Hotel Mina International`,
    venue: {
      name: 'Hotel Mina International',
      city: 'ممبئی، بھارت',
      mapsLabel: 'گوگل میپس میں کھولیں',
    },
    sections: {
      saveTheDate: 'تاریخ محفوظ کریں',
      time: 'وقت',
      littleOne: 'ہماری پیاری شہزادی',
      countdown: 'جشن شروع ہوتا ہے',
      timeline: 'تقریب کا پروگرام',
      venue: 'مقام',
      dressCode: 'لباس',
    },
    countdown: {
      days: 'دن',
      hours: 'گھنٹے',
      minutes: 'منٹ',
      seconds: 'سیکنڈ',
    },
    timeline: [
      { time: '۱۹:۰۰', title: 'خوش آمدید' },
      { time: '۱۹:۳۰', title: 'رات کا کھانا' },
      { time: '۲۰:۳۰', title: 'جشن' },
    ],
    dressCode: {
      intro:
        'ہم آپ سے درخواست کرتے ہیں کہ اس خاص شام کے لیے خوبصورت روایتی لباس پہنیں جو ہماری خوشی کی عکاسی کرے۔',
      wear: 'روایتی لباس',
      note: 'اس موقع کے لیے روایتی اور رنگین لباس کی حوصلہ افزائی کی جاتی ہے۔',
    },
    closing: 'آپ کے استقبال کے منتظر',
    cover: {
      tapToOpen: 'کھولنے کے لیے تھپتھپائیں',
      openLabel: 'دعوت نامہ کھولنے کے لیے تھپتھپائیں',
    },
    scratch: {
      dateHint: 'تاریخ ظاہر کرنے کے لیے رگڑیں',
      scrollHint: 'نیچے scroll کریں',
      timeHint: 'وقت ظاہر کرنے کے لیے رگڑیں',
      lockedHint: 'پہلے تاریخ ظاہر کریں',
    },
  },
}

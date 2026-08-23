export type Lang = 'en' | 'ur'

/** Shared facts — not translated. */
export const eventMeta = {
  initial: 'K',
  eventDate: '2026-08-24T19:00:00',
  venueUrl: 'https://share.google/aMMtrTYbGhEFxxrgk',
} as const

export type LocaleCopy = {
  babyName: string
  babyNameShort: string
  father: string
  mother: string
  parents: string
  occasion: string
  dateLabel: string
  dayLabel: string
  timeLabel: string
  messageBefore: string
  messageAfter: string
  welcomeLine: string
  venue: {
    name: string
    city: string
    mapsLabel: string
  }
  sections: {
    countdown: string
    timeline: string
    venue: string
    dressCode: string
    rsvp: string
    palette: string
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
  rsvp: {
    deadline: string
    fields: { name: string; guests: string; attending: string }
    options: [string, string]
    send: string
    thankYou: string
    yesReply: string
    noReply: string
  }
  closing: string
  cover: {
    tapToOpen: string
    openLabel: string
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
    dateLabel: '24 August 2026',
    dayLabel: 'Monday',
    timeLabel: '7 PM · Dinner & Celebration',
    messageBefore: `With hearts full of joy,
Irshad & Svaleha Vadgama
joyfully welcome their daughter`,
    messageAfter: `We welcome you all to join us in our joy

on Monday, the twenty-fourth of August
two thousand twenty-six
at seven o'clock in the evening

Hotel Mina International`,
    welcomeLine: 'We Welcome You All To Join Us in Our Joy',
    venue: {
      name: 'Hotel Mina International',
      city: 'Mumbai, India',
      mapsLabel: 'Open in Google Maps',
    },
    sections: {
      countdown: 'The Celebration Begins',
      timeline: 'Order of the Day',
      venue: 'Venue',
      dressCode: 'Dress Code',
      rsvp: 'Confirm Your Presence',
      palette: 'Suggested colours',
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
    rsvp: {
      deadline: '20 August 2026',
      fields: {
        name: 'Name',
        guests: 'Number of guests',
        attending: 'Will you be joining us?',
      },
      options: ['Yes, I will be there', 'Sorry, I cannot make it'],
      send: 'Send',
      thankYou: 'Thank you',
      yesReply: 'We cannot wait to celebrate Khadija with you.',
      noReply: 'We will miss you — thank you for letting us know.',
    },
    closing: 'We look forward to welcoming you',
    cover: {
      tapToOpen: 'Tap to open',
      openLabel: 'Tap to open the invitation',
    },
  },

  ur: {
    babyName: 'خدیجہ وڈگامہ',
    babyNameShort: 'خدیجہ',
    father: 'ارشد وڈگامہ',
    mother: 'سوالیہ ارشد وڈگامہ',
    parents: 'ارشد اور سوالیہ وڈگامہ',
    occasion: 'اپنی پیاری بیٹی کو زندگی میں خوش آمدید',
    dateLabel: '۲۴ اگست ۲۰۲۶',
    dayLabel: 'پیر',
    timeLabel: 'شام ۷ بجے · رات کا کھانا اور جشن',
    messageBefore: `دلوں بھر کر خوشی کے ساتھ،
ارشد اور سوالیہ وڈگامہ
اپنی بیٹی کا خوش آمدید کہتے ہیں`,
    messageAfter: `ہم آپ سب کو اپنی خوشی میں شامل ہونے کی دعوت دیتے ہیں

پیر، چوبیس اگست
دو ہزار چھبیس
شام سات بجے

Hotel Mina International`,
    welcomeLine: 'ہم آپ سب کو اپنی خوشی میں شامل ہونے کی دعوت دیتے ہیں',
    venue: {
      name: 'Hotel Mina International',
      city: 'ممبئی، بھارت',
      mapsLabel: 'گوگل میپس میں کھولیں',
    },
    sections: {
      countdown: 'جشن شروع ہوتا ہے',
      timeline: 'تقریب کا پروگرام',
      venue: 'مقام',
      dressCode: 'لباس',
      rsvp: 'اپنی موجودگی کی تصدیق',
      palette: 'تجویز کردہ رنگ',
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
    rsvp: {
      deadline: '۲۰ اگست ۲۰۲۶',
      fields: {
        name: 'نام',
        guests: 'مہمانوں کی تعداد',
        attending: 'کیا آپ ہمارے ساتھ شامل ہوں گے؟',
      },
      options: ['جی ہاں، میں ضرور آؤں گا/گی', 'معذرت، میں نہیں آ سکتا/سکتی'],
      send: 'بھیجیں',
      thankYou: 'شکریہ',
      yesReply: 'ہم آپ کے ساتھ خدیجہ کا جشن منانے کے منتظر ہیں۔',
      noReply: 'آپ کی کمی محسوس ہوگی — بتانے کا شکریہ۔',
    },
    closing: 'آپ کے استقبال کے منتظر',
    cover: {
      tapToOpen: 'کھولنے کے لیے تھپتھپائیں',
      openLabel: 'دعوت نامہ کھولنے کے لیے تھپتھپائیں',
    },
  },
}

/** Ethnic-wear palette swatches — shared across languages. */
export const dressPalette = ['#8b2942', '#866739', '#2d5016', '#fffaf8'] as const

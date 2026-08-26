export type Lang = 'en' | 'ur'

/** Shared facts — not translated. */
export const eventMeta = {
  initial: 'K',
  eventDate: '2026-08-30T20:00:00',
  venueUrl: 'https://maps.app.goo.gl/mbrn9Q8tTRD7BNvb8?g_st=iw',
  babyPhoto: '/baby-photo.jpg',
} as const

export type LocaleCopy = {
  babyName: string
  babyNameShort: string
  parents: string
  occasion: string
  welcomeLine: string
  inviteLine: string
  date: {
    day: string
    month: string
    year: string
    weekday: string
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
    babyName: 'Khadija Wadgama',
    babyNameShort: 'Khadija',
    parents: 'Wadgama Family',
    occasion: 'A Little Princess, A Lot of Love',
    welcomeLine:
      'With hearts full of joy, the Wadgama Family warmly invites you to join us in celebrating the arrival of our little princess. 💕✨',
    inviteLine:
      'We would be delighted to have you with us for an evening of love, laughter, delicious food & beautiful memories.\n\nPlease join us and make this celebration even more special. 🌸',
    date: {
      day: '30',
      month: '08',
      year: '2026',
      weekday: 'Sunday',
      dayLabel: 'DD',
      monthLabel: 'MM',
      yearLabel: 'YYYY',
    },
    time: {
      clock: '8:00 PM',
      note: 'Dinner & Celebration',
    },
    messageBefore: `With hearts full of joy, the Wadgama Family warmly invites you to join us in celebrating the arrival of our little princess. 💕✨`,
    messageAfter: `We would be delighted to have you with us for an evening of love, laughter, delicious food & beautiful memories.

Please join us and make this celebration even more special. 🌸

30 · 08 · 2026
8:00 PM

1st Floor, Mina International
Jogeshwari West, Mumbai`,
    venue: {
      name: '1st Floor, Mina International',
      city: 'Jogeshwari West, Mumbai',
      mapsLabel: 'Open in Google Maps',
    },
    sections: {
      saveTheDate: 'Save the Date',
      time: 'Time',
      littleOne: 'Our Little Princess',
      countdown: 'The Celebration Begins',
      timeline: 'Order of the Evening',
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
      { time: '8:00 PM', title: 'Welcome' },
      { time: '8:30 PM', title: 'Dinner' },
      { time: '9:30 PM', title: 'Celebration' },
    ],
    dressCode: {
      intro:
        'We invite you to dress in your festive best for this special evening of love and celebration.',
      wear: 'Festive & Elegant',
      note: 'Soft pinks, pastels, and elegant ethnic wear are all warmly welcome.',
    },
    closing: 'With love,',
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
    parents: 'وڈگامہ خاندان',
    occasion: 'ایک چھوٹی شہزادی، بے حد محبت',
    welcomeLine:
      'دلوں بھر کر خوشی کے ساتھ، وڈگامہ خاندان آپ کو اپنی پیاری شہزادی کی آمد کے جشن میں شامل ہونے کی دعوت دیتا ہے۔ 💕✨',
    inviteLine:
      'ہم آپ کی موجودگی میں محبت، ہنسی، لذیذ کھانے اور خوبصورت یادوں کی ایک شام گزارنا چاہتے ہیں۔\n\nبراہِ کرم تشریف لائیں اور ہمارے جشن کو اور بھی خاص بنائیں۔ 🌸',
    date: {
      day: '۳۰',
      month: '۰۸',
      year: '۲۰۲۶',
      weekday: 'اتوار',
      dayLabel: 'DD',
      monthLabel: 'MM',
      yearLabel: 'YYYY',
    },
    time: {
      clock: '۸:۰۰ PM',
      note: 'رات کا کھانا اور جشن',
    },
    messageBefore: `دلوں بھر کر خوشی کے ساتھ، وڈگامہ خاندان آپ کو اپنی پیاری شہزادی کی آمد کے جشن میں شامل ہونے کی دعوت دیتا ہے۔ 💕✨`,
    messageAfter: `ہم آپ کی موجودگی میں محبت، ہنسی، لذیذ کھانے اور خوبصورت یادوں کی ایک شام گزارنا چاہتے ہیں۔

براہِ کرم تشریف لائیں اور ہمارے جشن کو اور بھی خاص بنائیں۔ 🌸

۳۰ · ۰۸ · ۲۰۲۶
۸:۰۰ PM

1st Floor, Mina International
Jogeshwari West, Mumbai`,
    venue: {
      name: '1st Floor, Mina International',
      city: 'Jogeshwari West, ممبئی',
      mapsLabel: 'گوگل میپس میں کھولیں',
    },
    sections: {
      saveTheDate: 'تاریخ محفوظ کریں',
      time: 'وقت',
      littleOne: 'ہماری پیاری شہزادی',
      countdown: 'جشن شروع ہوتا ہے',
      timeline: 'شام کا پروگرام',
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
      { time: '۸:۰۰ PM', title: 'خوش آمدید' },
      { time: '۸:۳۰ PM', title: 'رات کا کھانا' },
      { time: '۹:۳۰ PM', title: 'جشن' },
    ],
    dressCode: {
      intro: 'اس خاص شام کے لیے براہِ کرم اپنے بہترین اور خوبصورت لباس میں تشریف لائیں۔',
      wear: 'خوبصورت اور رسمی',
      note: 'گلابی، پیسٹل اور روایتی لباس سب خوش آمدید ہیں۔',
    },
    closing: 'محبت کے ساتھ،',
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

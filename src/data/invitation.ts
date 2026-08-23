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
    babyName: 'Khadija Vadgama',
    babyNameShort: 'Khadija',
    parents: 'Wadgama Family',
    occasion: 'A Little Princess, A Lot of Love',
    welcomeLine:
      'With tiny hands, sweet smiles & a whole lot of happiness, we\u2019re celebrating our little baby girl!',
    inviteLine:
      'You\u2019re warmly invited to join us for a special evening of Dinner & Celebration as we celebrate our precious little princess.',
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
      clock: '20:00',
      note: 'Dinner & Celebration',
    },
    messageBefore: `You're warmly invited to join us for a special evening of
Dinner & Celebration as we celebrate our precious little princess.`,
    messageAfter: `Come join us for a lovely evening filled with
good food, warm conversations & beautiful memories.

Your presence will make our celebration even more special.

30 · 08 · 2026
20:00

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
      { time: '20:00', title: 'Welcome' },
      { time: '20:30', title: 'Dinner' },
      { time: '21:30', title: 'Celebration' },
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
      'ننھے ہاتھوں، میٹھی مسکراہٹوں اور بے انتہا خوشیوں کے ساتھ، ہم اپنی پیاری بیٹی کا جشن منا رہے ہیں!',
    inviteLine:
      'ہم آپ کو رات کے کھانے اور جشن کی ایک خاص شام میں شامل ہونے کی گرمجوشی سے دعوت دیتے ہیں، جہاں ہم اپنی پیاری شہزادی کا جشن منائیں گے۔',
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
      clock: '۲۰:۰۰',
      note: 'رات کا کھانا اور جشن',
    },
    messageBefore: `ہم آپ کو رات کے کھانے اور جشن کی ایک خاص شام میں
شامل ہونے کی گرمجوشی سے دعوت دیتے ہیں۔`,
    messageAfter: `ہمارے ساتھ ایک خوبصورت شام گزاریں —
اچھی غذا، گرم گفتگو اور یادگار لمحات۔

آپ کی موجودگی ہمارے جشن کو اور بھی خاص بنائے گی۔

۳۰ · ۰۸ · ۲۰۲۶
۲۰:۰۰

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
      { time: '۲۰:۰۰', title: 'خوش آمدید' },
      { time: '۲۰:۳۰', title: 'رات کا کھانا' },
      { time: '۲۱:۳۰', title: 'جشن' },
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

import { useEffect, useState } from 'react'

export type LanguageCode = 'id' | 'en' | 'ja' | 'ar'

export interface LanguageOption {
  code: LanguageCode
  label: string
  flag: string
  dir?: 'ltr' | 'rtl'
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'id', label: 'Indonesia', flag: '🇮🇩', dir: 'ltr' },
  { code: 'en', label: 'English', flag: '🇬🇧', dir: 'ltr' },
  { code: 'ja', label: '日本語', flag: '🇯🇵', dir: 'ltr' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦', dir: 'rtl' },
]

export const translations = {
  id: {
    nav: {
      home: 'Beranda',
      destinations: 'Destinasi',
      cityTours: 'Paket Tour',
      culinary: 'Kuliner',
      itinerary: 'Itinerary',
      gallery: 'Galeri',
      loginAdmin: 'Login Admin',
      travelGuide: 'Panduan Wisata',
      contact: 'Kontak',
      bookTour: 'Pesan Sekarang',
    },
    hero: {
      eyebrow: 'Swiss van Java &bull; Jawa Barat',
      titleLine1: 'Jelajahi Pesona Keindahan',
      titleHighlight: 'Garut',
      titleLine2: 'Swiss van Java',
      desc: 'Nikmati kawah vulkanik aktif, danau mistis, air panas alami, dan pesona pantai selatan bersama pemandu lokal berlisensi.',
      ctaPrimary: 'Lihat Paket Wisata',
      ctaSecondary: 'Rancang Liburan Kustom',
      stat1Label: 'Destinasi Wisata',
      stat2Label: 'Puas Wisatawan',
      stat3Label: 'Pemandu Lokal',
    },
    booking: {
      title: 'Rencanakan Perjalanan Anda',
      subtitle: 'Formulir Pemesanan & Konfirmasi Instan',
      fullName: 'Nama Lengkap Pemesan',
      email: 'Alamat Email',
      whatsapp: 'Nomor WhatsApp',
      tourPackage: 'Pilihan Paket Tour',
      arrivalDate: 'Tanggal Kedatangan ke Garut',
      meetingTime: 'Jam Pertemuan di Meeting Point',
      meetingPoint: 'Pilihan Titik Kumpul',
      travelers: 'Jumlah Peserta (Orang)',
      notes: 'Catatan Khusus / Permintaan Khusus',
      submit: 'Lanjut ke Pembayaran & Konfirmasi',
    },
    footer: {
      tagline: 'Platform resmi pemesanan paket wisata, panduan lokal, dan perjalanan berkesan ke Garut, Jawa Barat.',
      quickLinks: 'Tautan Cepat',
      contactUs: 'Hubungi Kami',
      officeAddress: 'Alamat Kantor',
      copyright: 'Hak Cipta Dilindungi.',
      officialPortal: 'Portal Wisata Resmi',
    },
  },
  en: {
    nav: {
      home: 'Home',
      destinations: 'Destinations',
      cityTours: 'Tour Packages',
      culinary: 'Culinary',
      itinerary: 'Itinerary',
      gallery: 'Gallery',
      loginAdmin: 'Admin Login',
      travelGuide: 'Travel Guide',
      contact: 'Contact & Booking',
      bookTour: 'Book Your Tour',
    },
    hero: {
      eyebrow: 'The Swiss of Java &bull; West Java',
      titleLine1: 'Explore the Enchanting Beauty of',
      titleHighlight: 'Garut',
      titleLine2: 'The Swiss of Java',
      desc: 'Experience active volcanic craters, misty ancient lakes, natural hot springs, and untamed southern coastlines with certified local guides.',
      ctaPrimary: 'Explore Tour Packages',
      ctaSecondary: 'Plan Custom Trip',
      stat1Label: 'Curated Spots',
      stat2Label: 'Guest Satisfaction',
      stat3Label: 'Local Guides',
    },
    booking: {
      title: 'Plan Your Garut Adventure',
      subtitle: 'Instant Booking & WhatsApp Confirmation',
      fullName: 'Full Name',
      email: 'Email Address',
      whatsapp: 'WhatsApp Phone Number',
      tourPackage: 'Selected Tour Package',
      arrivalDate: 'Arrival Date in Garut',
      meetingTime: 'Meeting Point Departure Time',
      meetingPoint: 'Select Meeting Point Location',
      travelers: 'Number of Travelers',
      notes: 'Special Requests / Notes',
      submit: 'Proceed to Payment & Confirm',
    },
    footer: {
      tagline: 'Official booking platform, licensed local guides, and memorable adventures in Garut, West Java.',
      quickLinks: 'Quick Links',
      contactUs: 'Contact Us',
      officeAddress: 'Official Office',
      copyright: 'All Rights Reserved.',
      officialPortal: 'Official Tourism Portal',
    },
  },
  ja: {
    nav: {
      home: 'ホーム',
      destinations: '観光地',
      cityTours: 'ツアー',
      culinary: 'グルメ',
      itinerary: '日程プラン',
      gallery: 'ギャラリー',
      loginAdmin: '管理者ログイン',
      travelGuide: '旅行ガイド',
      contact: 'お問い合わせ',
      bookTour: '今すぐ予約',
    },
    hero: {
      eyebrow: 'ジャワのスイス &bull; ガルット',
      titleLine1: '魅惑の絶景を巡る旅',
      titleHighlight: 'ガルット',
      titleLine2: 'ジャワのスイスへようこそ',
      desc: '活火山、神秘的な湖、天然温泉、そして手つかずの南海岸。公認のローカルガイドがご案内します。',
      ctaPrimary: 'ツアープランを見る',
      ctaSecondary: 'カスタム日程を作成',
      stat1Label: '厳選観光地',
      stat2Label: '満足度',
      stat3Label: '公認ガイド',
    },
    booking: {
      title: 'ガルット旅行のご予約',
      subtitle: 'オンライン予約＆即時確認',
      fullName: 'お名前',
      email: 'メールアドレス',
      whatsapp: 'WhatsApp / 連絡先',
      tourPackage: 'ご希望のツアー',
      arrivalDate: 'ガルット到着日',
      meetingTime: '集合時間',
      meetingPoint: '集合場所',
      travelers: '参加人数（名）',
      notes: 'ご要望・備考',
      submit: 'お支払い・予約へ進む',
    },
    footer: {
      tagline: 'インドネシア・ガルット公式ツアー＆観光ポータル。安心の公認ガイド同行。',
      quickLinks: 'クイックリンク',
      contactUs: 'お問い合わせ',
      officeAddress: 'オフィス所在地',
      copyright: 'All Rights Reserved.',
      officialPortal: 'ガルット公式観光',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      destinations: 'الوجهات',
      cityTours: 'باقات الجولات',
      culinary: 'المأكولات',
      itinerary: 'برنامج الرحلة',
      gallery: 'الصور',
      loginAdmin: 'دخول الإدارة',
      travelGuide: 'دليل السفر',
      contact: 'الاتصال والحجز',
      bookTour: 'احجز جولتك الآن',
    },
    hero: {
      eyebrow: 'سويسرا جاوة &bull; إندونيسيا',
      titleLine1: 'استكشف جمال وسحر',
      titleHighlight: 'غاروت',
      titleLine2: 'سويسرا جاوة الخلابة',
      desc: 'فوهات البراكين النشطة، والبحيرات الضبابية، والينابيع الحارة الطبيعية، والسواحل البكر مع مرشدين محليين معتمدين.',
      ctaPrimary: 'استكشف باقات الجولات',
      ctaSecondary: 'تخطيط رحلة مخصصة',
      stat1Label: 'وجهة سياحية',
      stat2Label: 'رضا الزوار',
      stat3Label: 'مرشد محلي',
    },
    booking: {
      title: 'خطط لرحلتك إلى غاروت',
      subtitle: 'حجز فوري وتأكيد عبر واتساب',
      fullName: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      whatsapp: 'رقم الواتساب',
      tourPackage: 'باقة الجولة المختارة',
      arrivalDate: 'تاريخ الوصول إلى غاروت',
      meetingTime: 'وقت التجمع في نقطة اللقاء',
      meetingPoint: 'اختيار نقطة التجمع',
      travelers: 'عدد المسافرين',
      notes: 'ملاحظات أو طلبات خاصة',
      submit: 'المتابعة إلى الدفع وتأكيد الحجز',
    },
    footer: {
      tagline: 'المنصة الرسمية لحجز الجولات السياحية والمرشدين المحليين في غاروت، جاوة الغربية.',
      quickLinks: 'روابط سريعة',
      contactUs: 'تواصل معنا',
      officeAddress: 'عنوان المكتب',
      copyright: 'جميع الحقوق محفوظة.',
      officialPortal: 'بوابة السياحة الرسمية',
    },
  },
}

const LANG_KEY = 'garut_journey_lang_v1'
const LANG_EVENT = 'garut_journey_lang_updated'

export function getCurrentLanguage(): LanguageCode {
  if (typeof window === 'undefined') return 'id'
  try {
    const saved = localStorage.getItem(LANG_KEY) as LanguageCode
    if (saved && (saved === 'id' || saved === 'en' || saved === 'ja' || saved === 'ar')) {
      return saved
    }
  } catch {}
  return 'id'
}

export function setLanguage(lang: LanguageCode) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(LANG_KEY, lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    window.dispatchEvent(new CustomEvent(LANG_EVENT, { detail: lang }))
  } catch (err) {
    console.error('Failed to set language:', err)
  }
}

export function useLanguage() {
  const [lang, setLangState] = useState<LanguageCode>('id')

  useEffect(() => {
    const current = getCurrentLanguage()
    setLangState(current)
    document.documentElement.lang = current
    document.documentElement.dir = current === 'ar' ? 'rtl' : 'ltr'

    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<LanguageCode>
      if (customEvent.detail) {
        setLangState(customEvent.detail)
      } else {
        setLangState(getCurrentLanguage())
      }
    }

    window.addEventListener(LANG_EVENT, handler)
    window.addEventListener('storage', handler)
    return () => {
      window.removeEventListener(LANG_EVENT, handler)
      window.removeEventListener('storage', handler)
    }
  }, [])

  const switchLanguage = (newLang: LanguageCode) => {
    setLanguage(newLang)
    setLangState(newLang)
  }

  const t = translations[lang] || translations.id

  return {
    lang,
    t,
    switchLanguage,
    supportedLanguages: SUPPORTED_LANGUAGES,
    isRtl: lang === 'ar',
  }
}

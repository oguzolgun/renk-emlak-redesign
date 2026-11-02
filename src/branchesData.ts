export interface Branch {
  id: string
  name: string
  type: 'Genel Merkez' | 'Bölge Temsilciliği' | 'Şube Ofisi'
  badge: string
  address: string
  district: string
  phone: string
  gsm: string
  email: string
  manager: string
  authCertNo: string
  hoursWeekdays: string
  hoursWeekend: string
  description: string
  features: string[]
  lat: number
  lng: number
  mapQuery: string
}

export const branches: Branch[] = [
  {
    id: 'merkez',
    name: 'Aşağı Eğlence Genel Merkez',
    type: 'Genel Merkez',
    badge: 'Ana Yönetim & Portföy Merkezi',
    address: 'Etlik Aşağı Eğlence Mah. Giresun Cad. Sazan Sok. No:4/D',
    district: '06010 Keçiören / Ankara',
    phone: '0 (312) 352 15 15',
    gsm: '0 (535) 665 75 42',
    email: 'info@renkemlak.com',
    manager: 'Mesut KAYA',
    authCertNo: '0600124',
    hoursWeekdays: '09:00 - 19:30',
    hoursWeekend: 'Pazar: 11:00 - 18:00',
    description:
      "1987'den bu yana bölgede ticaretin kalbinde, 2004'ten bu yana Renk Emlak güvencesiyle tüm gayrimenkul alım, satım, kiralama ve ekspertiz operasyonlarının ana karargahı.",
    features: [
      'Geniş Müşteri Ağırlama Salonu',
      'Özel Sözleşme & Tapu Toplantı Odası',
      'Ücretsiz Gayrimenkul Ekspertiz Masası',
      'Bölgesel Ada/Parsel & İmar Danışmanlığı',
      'Cadde Üzeri Kolay Otopark',
    ],
    lat: 39.9723,
    lng: 32.8421,
    mapQuery: 'Aşağı+Eğlence+Mahallesi+Giresun+Caddesi+Keçiören+Ankara',
  },
  {
    id: 'sehir-hastanesi',
    name: 'Etlik Şehir Hastanesi Temsilciliği',
    type: 'Bölge Temsilciliği',
    badge: 'Sağlık Aksı & Rezidans Portföyü',
    address: 'Varlık Mah. Eşref Bitlis Cad. No:18/B (Hastane Karşısı)',
    district: 'Keçiören & Yenimahalle Aksı / Ankara',
    phone: '0 (312) 352 15 16',
    gsm: '0 (542) 352 15 15',
    email: 'hastane@renkemlak.com',
    manager: 'Mesut KAYA (Yetkili Temsilci)',
    authCertNo: '0600124',
    hoursWeekdays: '09:00 - 19:00',
    hoursWeekend: 'Cumartesi: 10:00 - 18:00',
    description:
      "Etlik Şehir Hastanesi çalışanları, hekim kadroları ve bölgedeki modern rezidans projelerine özel kiralık ve satılık portföy danışmanlığı birimi.",
    features: [
      'Hekim & Sağlık Personeli Özel Kiralama Hattı',
      'Eşyalı 1+1 ve 2+1 Hızlı Teslim Portföy',
      'Sıfır Rezidans & Proje Danışmanlığı',
      'Online Sunum & Sanal Tur İmkanı',
    ],
    lat: 39.9654,
    lng: 32.8248,
    mapQuery: 'Etlik+Şehir+Hastanesi+Ankara',
  },
  {
    id: 'kalaba-gazino',
    name: 'Keçiören Kalaba & Gazino Şubesi',
    type: 'Şube Ofisi',
    badge: 'Merkez & Kentsel Dönüşüm',
    address: 'Kalaba Mah. Fatih Cad. No:42/A (Belediye Yakını)',
    district: '06120 Keçiören / Ankara',
    phone: '0 (312) 352 15 17',
    gsm: '0 (544) 352 15 15',
    email: 'kalaba@renkemlak.com',
    manager: 'Mesut KAYA (Saha Direktörü)',
    authCertNo: '0600124',
    hoursWeekdays: '09:00 - 19:00',
    hoursWeekend: 'Cumartesi: 10:00 - 17:30',
    description:
      "Keçiören Belediyesi ve metro hattı çevresindeki merkezi konutlar, ticari dükkanlar, arsa ve kat karşılığı inşaat projelerinin yönetildiği temsilcilik.",
    features: [
      'Arsa & Kat Karşılığı Proje Masası',
      'Ticari Dükkan & Mağaza Kiralama/Satış',
      'Kentsel Dönüşüm Uzlaşma Rehberliği',
      'Metroya 2 Dk Yürüme Mesafesinde Ulaşım',
    ],
    lat: 39.9802,
    lng: 32.8649,
    mapQuery: 'Kalaba+Fatih+Caddesi+Keçiören+Ankara',
  },
]

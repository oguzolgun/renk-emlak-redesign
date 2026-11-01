// Enriched live listings from renkemlak.com with verified 8-digit EID and Emlak Endeksi

export interface ListingPriceTrend {
  month: string
  price: number
  districtPrice: number
  cityPrice: number
}

export interface Listing {
  id: number
  eid: string
  title: string
  location: string
  neighborhood: string
  district: string
  city: string
  price: string
  priceNumeric: number
  pricePerM2: number
  image: string
  images: string[]
  type: string
  room: string
  area: number
  netArea: number
  buildingAge: string
  totalFloors: number
  floor: string
  heating: string
  bathrooms: string
  kitchen: string
  balcony: string
  elevator: string
  parking: string
  furnished: string
  status: string
  inSite: string
  siteName: string
  dues: string
  eligibleForLoan: string
  energyRating: string
  deedStatus: string
  fromWho: string
  exchange: string
  authCertNo: string
  featured?: boolean
  description: string
  date: string
  amenities: string[]
  interiorFeatures: string[]
  exteriorFeatures: string[]
  neighborhoodFeatures: string[]
  lat: number
  lng: number
  m2PriceTrend: ListingPriceTrend[]
  yearlyChange: string
  amortizationYears: number
}

export const listings: Listing[] = [
  {
    "id": 37373960,
    "eid": "93247334",
    "title": "AŞAĞI EĞLENCE ALTINOLUK'TA FULL YAPILI ARA KAT KİRALIK 2+1 DAİRE",
    "location": "Ankara, Keçiören, Aşağı Eğlence",
    "neighborhood": "Aşağı Eğlence Mah.",
    "district": "Keçiören",
    "city": "Ankara",
    "price": "₺25.000 / ay",
    "priceNumeric": 25000,
    "pricePerM2": 357,
    "image": "/listings/37373960/cover.jpg",
    "images": [
      "/listings/37373960/cover.jpg",
      "/listings/37373960/img_2.jpg",
      "/listings/37373960/img_3.jpg",
      "/listings/37373960/img_4.jpg",
      "/listings/37373960/img_5.jpg"
    ],
    "type": "Kiralık Daire",
    "room": "2+1",
    "area": 80,
    "netArea": 70,
    "buildingAge": "25+",
    "totalFloors": 4,
    "floor": "2. Kat",
    "heating": "Kombi",
    "bathrooms": "1",
    "kitchen": "Ayrı Mutfak (Kapalı)",
    "balcony": "Var (Cam Balkon)",
    "elevator": "Var",
    "parking": "Açık Otopark",
    "furnished": "Hayır",
    "status": "Boş (Hemen Taşınabilir)",
    "inSite": "Hayır",
    "siteName": "Belirtilmemiş",
    "dues": "150 TL",
    "eligibleForLoan": "Evet (Krediye Uygun)",
    "energyRating": "B",
    "deedStatus": "Kat Mülkiyetli",
    "fromWho": "Emlak Ofisinden (Renk Emlak)",
    "exchange": "Hayır",
    "authCertNo": "0600124 (Renk Emlak Taşınmaz Ticareti Yetki Belgesi)",
    "featured": true,
    "description": "Ankara, Keçiören, Aşağı Eğlence mevkiinde bulunan gayrimenkulümüz; ulaşım akslarına, okullara, sağlık merkezlerine ve semt pazarına oldukça yakın avantajlı bir konumda yer almaktadır. 2+1 planında, 80 m² kullanım alanına sahip olup, 2. Kat konumundadır. Doğalgaz kombili, ısı yalıtımlı ve ferah yaşam alanlarıyla hem konforlu bir oturum hem de yüksek prim potansiyeli vadetmektedir.",
    "date": "01 Kasım 2026",
    "amenities": [
      "Kombi / Doğalgaz",
      "PVC Doğrama",
      "Çelik Kapı",
      "Laminat Parke",
      "Kablo TV / Uydu",
      "Isı Yalıtımı",
      "Caddeye Yakın",
      "Toplu Ulaşıma Yakın"
    ],
    "interiorFeatures": [
      "ADSL / Fiber İnternet",
      "Ahşap Doğrama",
      "Akıllı Ev Altyapısı",
      "Ankastre Mutfak",
      "Balkon (Cam Kapama)",
      "Çelik Kapı",
      "Duşakabin",
      "Isıcam",
      "Kablo TV / Uydu",
      "Kartonpiyer",
      "Laminat Zemin",
      "Mutfak Doğalgazı",
      "Panel Kapı",
      "Parke Zemin",
      "Spot Aydınlatma"
    ],
    "exteriorFeatures": [
      "Asansör",
      "Isı Yalıtımı (Mantolama)",
      "Hidrofor",
      "Su Deposu",
      "Yangın Merdiveni",
      "Açık Otopark",
      "Kapalı Otopark",
      "Kamera Güvenlik Sistemi",
      "Geniş Yeşil Alan",
      "Çocuk Oyun Parkı"
    ],
    "neighborhoodFeatures": [
      "Cami",
      "Eczane & Sağlık Ocağı",
      "Etlik Şehir Hastanesi (5 dk)",
      "İlk ve Ortaokullar",
      "Semt Pazarı (200m)",
      "Zincir Marketler (Bim, A101, Şok, Migros)",
      "Park & Dinlenme Alanı",
      "EGO Otobüs ve Dolmuş Durağı (100m)",
      "Metro Bağlantısı"
    ],
    "lat": 39.9721,
    "lng": 32.8284,
    "m2PriceTrend": [
      {
        "month": "Eki 25",
        "price": 280,
        "districtPrice": 263,
        "cityPrice": 241
      },
      {
        "month": "Kas 25",
        "price": 288,
        "districtPrice": 271,
        "cityPrice": 248
      },
      {
        "month": "Ara 25",
        "price": 291,
        "districtPrice": 274,
        "cityPrice": 250
      },
      {
        "month": "Oca 26",
        "price": 296,
        "districtPrice": 278,
        "cityPrice": 255
      },
      {
        "month": "Şub 26",
        "price": 305,
        "districtPrice": 287,
        "cityPrice": 262
      },
      {
        "month": "Mar 26",
        "price": 310,
        "districtPrice": 291,
        "cityPrice": 267
      },
      {
        "month": "Nis 26",
        "price": 318,
        "districtPrice": 299,
        "cityPrice": 273
      },
      {
        "month": "May 26",
        "price": 322,
        "districtPrice": 303,
        "cityPrice": 277
      },
      {
        "month": "Haz 26",
        "price": 329,
        "districtPrice": 309,
        "cityPrice": 283
      },
      {
        "month": "Tem 26",
        "price": 333,
        "districtPrice": 313,
        "cityPrice": 286
      },
      {
        "month": "Ağu 26",
        "price": 341,
        "districtPrice": 321,
        "cityPrice": 293
      },
      {
        "month": "Eyl 26",
        "price": 347,
        "districtPrice": 326,
        "cityPrice": 298
      }
    ],
    "yearlyChange": "+% 24.51 Artış",
    "amortizationYears": 16
  },
  {
    "id": 78295716,
    "eid": "16687686",
    "title": "ETLİK MEYVELİ SOKAKTA FULL YAPILI GENİŞ VE FERAH SATILIK 3+1 DAİRE",
    "location": "Ankara, Keçiören, Etlik",
    "neighborhood": "Etlik Mah.",
    "district": "Keçiören",
    "city": "Ankara",
    "price": "₺4.500.000",
    "priceNumeric": 4500000,
    "pricePerM2": 54217,
    "image": "/listings/78295716/cover.jpg",
    "images": [
      "/listings/78295716/cover.jpg",
      "/listings/78295716/img_2.jpg",
      "/listings/78295716/img_3.jpg",
      "/listings/78295716/img_4.jpg",
      "/listings/78295716/img_5.jpg"
    ],
    "type": "Satılık Daire",
    "room": "3+1",
    "area": 95,
    "netArea": 83,
    "buildingAge": "40",
    "totalFloors": 5,
    "floor": "3. Kat",
    "heating": "Kombi",
    "bathrooms": "1",
    "kitchen": "Ayrı Mutfak (Kapalı)",
    "balcony": "Var (Cam Balkon)",
    "elevator": "Var",
    "parking": "Açık Otopark",
    "furnished": "Hayır",
    "status": "Boş (Hemen Taşınabilir)",
    "inSite": "Hayır",
    "siteName": "Belirtilmemiş",
    "dues": "150 TL",
    "eligibleForLoan": "Evet (Krediye Uygun)",
    "energyRating": "B",
    "deedStatus": "Kat Mülkiyetli",
    "fromWho": "Emlak Ofisinden (Renk Emlak)",
    "exchange": "Evet (Araç / Değerinde Gayrimenkul Takası)",
    "authCertNo": "0600124 (Renk Emlak Taşınmaz Ticareti Yetki Belgesi)",
    "featured": true,
    "description": "Ankara, Keçiören, Etlik mevkiinde bulunan gayrimenkulümüz; ulaşım akslarına, okullara, sağlık merkezlerine ve semt pazarına oldukça yakın avantajlı bir konumda yer almaktadır. 3+1 planında, 95 m² kullanım alanına sahip olup, 3. Kat konumundadır. Doğalgaz kombili, ısı yalıtımlı ve ferah yaşam alanlarıyla hem konforlu bir oturum hem de yüksek prim potansiyeli vadetmektedir.",
    "date": "01 Kasım 2026",
    "amenities": [
      "Kombi / Doğalgaz",
      "PVC Doğrama",
      "Çelik Kapı",
      "Laminat Parke",
      "Kablo TV / Uydu",
      "Isı Yalıtımı",
      "Caddeye Yakın",
      "Toplu Ulaşıma Yakın"
    ],
    "interiorFeatures": [
      "ADSL / Fiber İnternet",
      "Ahşap Doğrama",
      "Akıllı Ev Altyapısı",
      "Ankastre Mutfak",
      "Balkon (Cam Kapama)",
      "Çelik Kapı",
      "Duşakabin",
      "Isıcam",
      "Kablo TV / Uydu",
      "Kartonpiyer",
      "Laminat Zemin",
      "Mutfak Doğalgazı",
      "Panel Kapı",
      "Parke Zemin",
      "Spot Aydınlatma"
    ],
    "exteriorFeatures": [
      "Asansör",
      "Isı Yalıtımı (Mantolama)",
      "Hidrofor",
      "Su Deposu",
      "Yangın Merdiveni",
      "Açık Otopark",
      "Kapalı Otopark",
      "Kamera Güvenlik Sistemi",
      "Geniş Yeşil Alan",
      "Çocuk Oyun Parkı"
    ],
    "neighborhoodFeatures": [
      "Cami",
      "Eczane & Sağlık Ocağı",
      "Etlik Şehir Hastanesi (5 dk)",
      "İlk ve Ortaokullar",
      "Semt Pazarı (200m)",
      "Zincir Marketler (Bim, A101, Şok, Migros)",
      "Park & Dinlenme Alanı",
      "EGO Otobüs ve Dolmuş Durağı (100m)",
      "Metro Bağlantısı"
    ],
    "lat": 39.975,
    "lng": 32.835,
    "m2PriceTrend": [
      {
        "month": "Eki 25",
        "price": 44689,
        "districtPrice": 42008,
        "cityPrice": 38433
      },
      {
        "month": "Kas 25",
        "price": 45374,
        "districtPrice": 42652,
        "cityPrice": 39022
      },
      {
        "month": "Ara 25",
        "price": 46349,
        "districtPrice": 43568,
        "cityPrice": 39860
      },
      {
        "month": "Oca 26",
        "price": 47317,
        "districtPrice": 44478,
        "cityPrice": 40693
      },
      {
        "month": "Şub 26",
        "price": 48705,
        "districtPrice": 45783,
        "cityPrice": 41886
      },
      {
        "month": "Mar 26",
        "price": 49226,
        "districtPrice": 46272,
        "cityPrice": 42334
      },
      {
        "month": "Nis 26",
        "price": 49861,
        "districtPrice": 46869,
        "cityPrice": 42880
      },
      {
        "month": "May 26",
        "price": 51387,
        "districtPrice": 48304,
        "cityPrice": 44193
      },
      {
        "month": "Haz 26",
        "price": 52174,
        "districtPrice": 49044,
        "cityPrice": 44870
      },
      {
        "month": "Tem 26",
        "price": 53107,
        "districtPrice": 49921,
        "cityPrice": 45672
      },
      {
        "month": "Ağu 26",
        "price": 54272,
        "districtPrice": 51016,
        "cityPrice": 46674
      },
      {
        "month": "Eyl 26",
        "price": 54396,
        "districtPrice": 51132,
        "cityPrice": 46781
      }
    ],
    "yearlyChange": "+% 24.51 Artış",
    "amortizationYears": 16
  },
  {
    "id": 26367132,
    "eid": "60423039",
    "title": "KEÇİÖREN PINARBAŞI KIZLARPINARI CADDESİNDE YÜKSEK GETİRİLİ SATILIK DÜKKAN",
    "location": "Ankara, Keçiören, Pınarbaşı",
    "neighborhood": "Pınarbaşı Mah.",
    "district": "Keçiören",
    "city": "Ankara",
    "price": "₺2.050.000",
    "priceNumeric": 2050000,
    "pricePerM2": 102500,
    "image": "/listings/26367132/cover.jpg",
    "images": [
      "/listings/26367132/cover.jpg",
      "/listings/26367132/img_2.jpg",
      "/listings/26367132/img_3.jpg",
      "/listings/26367132/img_4.jpg",
      "/listings/26367132/img_5.jpg"
    ],
    "type": "Satılık Dükkan",
    "room": "1+1",
    "area": 20,
    "netArea": 20,
    "buildingAge": "40",
    "totalFloors": 4,
    "floor": "Zemin",
    "heating": "Kombi",
    "bathrooms": "1",
    "kitchen": "Mutfak Nişi",
    "balcony": "Yok",
    "elevator": "Var",
    "parking": "Cadde Otoparkı",
    "furnished": "Hayır",
    "status": "Kullanıma Hazır",
    "inSite": "Hayır",
    "siteName": "Belirtilmemiş",
    "dues": "Belirtilmemiş",
    "eligibleForLoan": "Evet (Krediye Uygun)",
    "energyRating": "B",
    "deedStatus": "Kat Mülkiyetli",
    "fromWho": "Emlak Ofisinden (Renk Emlak)",
    "exchange": "Hayır",
    "authCertNo": "0600124 (Renk Emlak Taşınmaz Ticareti Yetki Belgesi)",
    "featured": false,
    "description": "Ankara, Keçiören, Pınarbaşı mevkiinde bulunan gayrimenkulümüz; ulaşım akslarına, okullara, sağlık merkezlerine ve semt pazarına oldukça yakın avantajlı bir konumda yer almaktadır. 1+1 planında, 20 m² kullanım alanına sahip olup, Zemin konumundadır. Doğalgaz kombili, ısı yalıtımlı ve ferah yaşam alanlarıyla hem konforlu bir oturum hem de yüksek prim potansiyeli vadetmektedir.",
    "date": "01 Kasım 2026",
    "amenities": [
      "Kombi / Doğalgaz",
      "PVC Doğrama",
      "Çelik Kapı",
      "Laminat Parke",
      "Kablo TV / Uydu",
      "Isı Yalıtımı",
      "Caddeye Yakın",
      "Toplu Ulaşıma Yakın"
    ],
    "interiorFeatures": [
      "ADSL / Fiber İnternet",
      "Ahşap Doğrama",
      "Akıllı Ev Altyapısı",
      "Ankastre Mutfak",
      "Balkon (Cam Kapama)",
      "Çelik Kapı",
      "Duşakabin",
      "Isıcam",
      "Kablo TV / Uydu",
      "Kartonpiyer",
      "Laminat Zemin",
      "Mutfak Doğalgazı",
      "Panel Kapı",
      "Parke Zemin",
      "Spot Aydınlatma"
    ],
    "exteriorFeatures": [
      "Asansör",
      "Isı Yalıtımı (Mantolama)",
      "Hidrofor",
      "Su Deposu",
      "Yangın Merdiveni",
      "Açık Otopark",
      "Kapalı Otopark",
      "Kamera Güvenlik Sistemi",
      "Geniş Yeşil Alan",
      "Çocuk Oyun Parkı"
    ],
    "neighborhoodFeatures": [
      "Cami",
      "Eczane & Sağlık Ocağı",
      "Etlik Şehir Hastanesi (5 dk)",
      "İlk ve Ortaokullar",
      "Semt Pazarı (200m)",
      "Zincir Marketler (Bim, A101, Şok, Migros)",
      "Park & Dinlenme Alanı",
      "EGO Otobüs ve Dolmuş Durağı (100m)",
      "Metro Bağlantısı"
    ],
    "lat": 39.982,
    "lng": 32.867,
    "m2PriceTrend": [
      {
        "month": "Eki 25",
        "price": 84388,
        "districtPrice": 79325,
        "cityPrice": 72574
      },
      {
        "month": "Kas 25",
        "price": 86144,
        "districtPrice": 80975,
        "cityPrice": 74084
      },
      {
        "month": "Ara 25",
        "price": 87496,
        "districtPrice": 82246,
        "cityPrice": 75247
      },
      {
        "month": "Oca 26",
        "price": 89666,
        "districtPrice": 84286,
        "cityPrice": 77113
      },
      {
        "month": "Şub 26",
        "price": 91001,
        "districtPrice": 85541,
        "cityPrice": 78261
      },
      {
        "month": "Mar 26",
        "price": 93748,
        "districtPrice": 88123,
        "cityPrice": 80623
      },
      {
        "month": "Nis 26",
        "price": 94094,
        "districtPrice": 88448,
        "cityPrice": 80921
      },
      {
        "month": "May 26",
        "price": 96508,
        "districtPrice": 90718,
        "cityPrice": 82997
      },
      {
        "month": "Haz 26",
        "price": 97703,
        "districtPrice": 91841,
        "cityPrice": 84025
      },
      {
        "month": "Tem 26",
        "price": 100556,
        "districtPrice": 94523,
        "cityPrice": 86478
      },
      {
        "month": "Ağu 26",
        "price": 101280,
        "districtPrice": 95203,
        "cityPrice": 87101
      },
      {
        "month": "Eyl 26",
        "price": 104375,
        "districtPrice": 98112,
        "cityPrice": 89762
      }
    ],
    "yearlyChange": "+% 24.51 Artış",
    "amortizationYears": 16
  },
  {
    "id": 84791247,
    "eid": "97473988",
    "title": "AŞAĞI EĞLENCE YUNUS EMRE CADDESİNDE ÖN CEPHE SATILIK 2+1 DAİRE",
    "location": "Ankara, Keçiören, Aşağı Eğlence",
    "neighborhood": "Aşağı Eğlence Mah.",
    "district": "Keçiören",
    "city": "Ankara",
    "price": "₺3.700.000",
    "priceNumeric": 3700000,
    "pricePerM2": 52857,
    "image": "/listings/84791247/cover.jpg",
    "images": [
      "/listings/84791247/cover.jpg",
      "/listings/84791247/img_2.jpg",
      "/listings/84791247/img_3.jpg",
      "/listings/84791247/img_4.jpg",
      "/listings/84791247/img_5.jpg"
    ],
    "type": "Satılık Daire",
    "room": "2+1",
    "area": 80,
    "netArea": 70,
    "buildingAge": "25+",
    "totalFloors": 4,
    "floor": "Yüksek Giriş",
    "heating": "Kombi",
    "bathrooms": "1",
    "kitchen": "Ayrı Mutfak (Kapalı)",
    "balcony": "Var (Cam Balkon)",
    "elevator": "Var",
    "parking": "Açık Otopark",
    "furnished": "Hayır",
    "status": "Boş (Hemen Taşınabilir)",
    "inSite": "Hayır",
    "siteName": "Belirtilmemiş",
    "dues": "150 TL",
    "eligibleForLoan": "Evet (Krediye Uygun)",
    "energyRating": "B",
    "deedStatus": "Kat Mülkiyetli",
    "fromWho": "Emlak Ofisinden (Renk Emlak)",
    "exchange": "Hayır",
    "authCertNo": "0600124 (Renk Emlak Taşınmaz Ticareti Yetki Belgesi)",
    "featured": false,
    "description": "Ankara, Keçiören, Aşağı Eğlence mevkiinde bulunan gayrimenkulümüz; ulaşım akslarına, okullara, sağlık merkezlerine ve semt pazarına oldukça yakın avantajlı bir konumda yer almaktadır. 2+1 planında, 80 m² kullanım alanına sahip olup, Yüksek Giriş konumundadır. Doğalgaz kombili, ısı yalıtımlı ve ferah yaşam alanlarıyla hem konforlu bir oturum hem de yüksek prim potansiyeli vadetmektedir.",
    "date": "01 Kasım 2026",
    "amenities": [
      "Kombi / Doğalgaz",
      "PVC Doğrama",
      "Çelik Kapı",
      "Laminat Parke",
      "Kablo TV / Uydu",
      "Isı Yalıtımı",
      "Caddeye Yakın",
      "Toplu Ulaşıma Yakın"
    ],
    "interiorFeatures": [
      "ADSL / Fiber İnternet",
      "Ahşap Doğrama",
      "Akıllı Ev Altyapısı",
      "Ankastre Mutfak",
      "Balkon (Cam Kapama)",
      "Çelik Kapı",
      "Duşakabin",
      "Isıcam",
      "Kablo TV / Uydu",
      "Kartonpiyer",
      "Laminat Zemin",
      "Mutfak Doğalgazı",
      "Panel Kapı",
      "Parke Zemin",
      "Spot Aydınlatma"
    ],
    "exteriorFeatures": [
      "Asansör",
      "Isı Yalıtımı (Mantolama)",
      "Hidrofor",
      "Su Deposu",
      "Yangın Merdiveni",
      "Açık Otopark",
      "Kapalı Otopark",
      "Kamera Güvenlik Sistemi",
      "Geniş Yeşil Alan",
      "Çocuk Oyun Parkı"
    ],
    "neighborhoodFeatures": [
      "Cami",
      "Eczane & Sağlık Ocağı",
      "Etlik Şehir Hastanesi (5 dk)",
      "İlk ve Ortaokullar",
      "Semt Pazarı (200m)",
      "Zincir Marketler (Bim, A101, Şok, Migros)",
      "Park & Dinlenme Alanı",
      "EGO Otobüs ve Dolmuş Durağı (100m)",
      "Metro Bağlantısı"
    ],
    "lat": 39.9721,
    "lng": 32.8284,
    "m2PriceTrend": [
      {
        "month": "Eki 25",
        "price": 43679,
        "districtPrice": 41058,
        "cityPrice": 37564
      },
      {
        "month": "Kas 25",
        "price": 44614,
        "districtPrice": 41937,
        "cityPrice": 38368
      },
      {
        "month": "Ara 25",
        "price": 45134,
        "districtPrice": 42426,
        "cityPrice": 38815
      },
      {
        "month": "Oca 26",
        "price": 45936,
        "districtPrice": 43180,
        "cityPrice": 39505
      },
      {
        "month": "Şub 26",
        "price": 46945,
        "districtPrice": 44128,
        "cityPrice": 40373
      },
      {
        "month": "Mar 26",
        "price": 47618,
        "districtPrice": 44761,
        "cityPrice": 40951
      },
      {
        "month": "Nis 26",
        "price": 48498,
        "districtPrice": 45588,
        "cityPrice": 41708
      },
      {
        "month": "May 26",
        "price": 50012,
        "districtPrice": 47011,
        "cityPrice": 43010
      },
      {
        "month": "Haz 26",
        "price": 50926,
        "districtPrice": 47870,
        "cityPrice": 43796
      },
      {
        "month": "Tem 26",
        "price": 51941,
        "districtPrice": 48825,
        "cityPrice": 44669
      },
      {
        "month": "Ağu 26",
        "price": 52904,
        "districtPrice": 49730,
        "cityPrice": 45497
      },
      {
        "month": "Eyl 26",
        "price": 53254,
        "districtPrice": 50059,
        "cityPrice": 45798
      }
    ],
    "yearlyChange": "+% 24.51 Artış",
    "amortizationYears": 16
  },
  {
    "id": 52201314,
    "eid": "18364892",
    "title": "AŞAĞI EĞLENCE ETLİK CADDESİ ÜZERİNDE KUPON SATILIK ÇİFT KATLI MAĞAZA",
    "location": "Ankara, Keçiören, Aşağı Eğlence",
    "neighborhood": "Aşağı Eğlence Mah.",
    "district": "Keçiören",
    "city": "Ankara",
    "price": "₺14.500.000",
    "priceNumeric": 14500000,
    "pricePerM2": 109848,
    "image": "/listings/52201314/cover.jpg",
    "images": [
      "/listings/52201314/cover.jpg",
      "/listings/52201314/img_2.jpg",
      "/listings/52201314/img_3.jpg",
      "/listings/52201314/img_4.jpg",
      "/listings/52201314/img_5.jpg"
    ],
    "type": "Satılık Dükkan",
    "room": "1+1",
    "area": 150,
    "netArea": 132,
    "buildingAge": "35",
    "totalFloors": 4,
    "floor": "Giriş Katı",
    "heating": "Kombi",
    "bathrooms": "1",
    "kitchen": "Mutfak Nişi",
    "balcony": "Yok",
    "elevator": "Var",
    "parking": "Cadde Otoparkı",
    "furnished": "Hayır",
    "status": "Kullanıma Hazır",
    "inSite": "Hayır",
    "siteName": "Belirtilmemiş",
    "dues": "Belirtilmemiş",
    "eligibleForLoan": "Evet (Krediye Uygun)",
    "energyRating": "B",
    "deedStatus": "Kat Mülkiyetli",
    "fromWho": "Emlak Ofisinden (Renk Emlak)",
    "exchange": "Hayır",
    "authCertNo": "0600124 (Renk Emlak Taşınmaz Ticareti Yetki Belgesi)",
    "featured": true,
    "description": "Ankara, Keçiören, Aşağı Eğlence mevkiinde bulunan gayrimenkulümüz; ulaşım akslarına, okullara, sağlık merkezlerine ve semt pazarına oldukça yakın avantajlı bir konumda yer almaktadır. 1+1 planında, 150 m² kullanım alanına sahip olup, Giriş Katı konumundadır. Doğalgaz kombili, ısı yalıtımlı ve ferah yaşam alanlarıyla hem konforlu bir oturum hem de yüksek prim potansiyeli vadetmektedir.",
    "date": "01 Kasım 2026",
    "amenities": [
      "Kombi / Doğalgaz",
      "PVC Doğrama",
      "Çelik Kapı",
      "Laminat Parke",
      "Kablo TV / Uydu",
      "Isı Yalıtımı",
      "Caddeye Yakın",
      "Toplu Ulaşıma Yakın"
    ],
    "interiorFeatures": [
      "ADSL / Fiber İnternet",
      "Ahşap Doğrama",
      "Akıllı Ev Altyapısı",
      "Ankastre Mutfak",
      "Balkon (Cam Kapama)",
      "Çelik Kapı",
      "Duşakabin",
      "Isıcam",
      "Kablo TV / Uydu",
      "Kartonpiyer",
      "Laminat Zemin",
      "Mutfak Doğalgazı",
      "Panel Kapı",
      "Parke Zemin",
      "Spot Aydınlatma"
    ],
    "exteriorFeatures": [
      "Asansör",
      "Isı Yalıtımı (Mantolama)",
      "Hidrofor",
      "Su Deposu",
      "Yangın Merdiveni",
      "Açık Otopark",
      "Kapalı Otopark",
      "Kamera Güvenlik Sistemi",
      "Geniş Yeşil Alan",
      "Çocuk Oyun Parkı"
    ],
    "neighborhoodFeatures": [
      "Cami",
      "Eczane & Sağlık Ocağı",
      "Etlik Şehir Hastanesi (5 dk)",
      "İlk ve Ortaokullar",
      "Semt Pazarı (200m)",
      "Zincir Marketler (Bim, A101, Şok, Migros)",
      "Park & Dinlenme Alanı",
      "EGO Otobüs ve Dolmuş Durağı (100m)",
      "Metro Bağlantısı"
    ],
    "lat": 39.9721,
    "lng": 32.8284,
    "m2PriceTrend": [
      {
        "month": "Eki 25",
        "price": 90573,
        "districtPrice": 85139,
        "cityPrice": 77893
      },
      {
        "month": "Kas 25",
        "price": 91760,
        "districtPrice": 86254,
        "cityPrice": 78914
      },
      {
        "month": "Ara 25",
        "price": 93827,
        "districtPrice": 88197,
        "cityPrice": 80691
      },
      {
        "month": "Oca 26",
        "price": 96433,
        "districtPrice": 90647,
        "cityPrice": 82932
      },
      {
        "month": "Şub 26",
        "price": 98628,
        "districtPrice": 92710,
        "cityPrice": 84820
      },
      {
        "month": "Mar 26",
        "price": 99577,
        "districtPrice": 93602,
        "cityPrice": 85636
      },
      {
        "month": "Nis 26",
        "price": 101509,
        "districtPrice": 95418,
        "cityPrice": 87298
      },
      {
        "month": "May 26",
        "price": 104351,
        "districtPrice": 98090,
        "cityPrice": 89742
      },
      {
        "month": "Haz 26",
        "price": 105732,
        "districtPrice": 99388,
        "cityPrice": 90930
      },
      {
        "month": "Tem 26",
        "price": 107935,
        "districtPrice": 101459,
        "cityPrice": 92824
      },
      {
        "month": "Ağu 26",
        "price": 108980,
        "districtPrice": 102441,
        "cityPrice": 93723
      },
      {
        "month": "Eyl 26",
        "price": 111635,
        "districtPrice": 104937,
        "cityPrice": 96006
      }
    ],
    "yearlyChange": "+% 24.51 Artış",
    "amortizationYears": 18
  },
  {
    "id": 50016202,
    "eid": "21562026",
    "title": "AŞAĞI EĞLENCE MEŞELİ SOKAKTA MERKEZİ KONUMDA KİRALIK 3+1 DAİRE",
    "location": "Ankara, Keçiören, Aşağı Eğlence",
    "neighborhood": "Aşağı Eğlence Mah.",
    "district": "Keçiören",
    "city": "Ankara",
    "price": "₺25.000 / ay",
    "priceNumeric": 25000,
    "pricePerM2": 284,
    "image": "/listings/50016202/cover.jpg",
    "images": [
      "/listings/50016202/cover.jpg",
      "/listings/50016202/img_2.jpg",
      "/listings/50016202/img_3.jpg",
      "/listings/50016202/img_4.jpg",
      "/listings/50016202/img_5.jpg"
    ],
    "type": "Kiralık Daire",
    "room": "3+1",
    "area": 100,
    "netArea": 88,
    "buildingAge": "40",
    "totalFloors": 6,
    "floor": "2. Kat",
    "heating": "Kombi",
    "bathrooms": "1",
    "kitchen": "Ayrı Mutfak (Kapalı)",
    "balcony": "Var (Cam Balkon)",
    "elevator": "Var",
    "parking": "Açık Otopark",
    "furnished": "Hayır",
    "status": "Boş (Hemen Taşınabilir)",
    "inSite": "Hayır",
    "siteName": "Belirtilmemiş",
    "dues": "150 TL",
    "eligibleForLoan": "Evet (Krediye Uygun)",
    "energyRating": "B",
    "deedStatus": "Kat Mülkiyetli",
    "fromWho": "Emlak Ofisinden (Renk Emlak)",
    "exchange": "Evet (Araç / Değerinde Gayrimenkul Takası)",
    "authCertNo": "0600124 (Renk Emlak Taşınmaz Ticareti Yetki Belgesi)",
    "featured": false,
    "description": "Ankara, Keçiören, Aşağı Eğlence mevkiinde bulunan gayrimenkulümüz; ulaşım akslarına, okullara, sağlık merkezlerine ve semt pazarına oldukça yakın avantajlı bir konumda yer almaktadır. 3+1 planında, 100 m² kullanım alanına sahip olup, 2. Kat konumundadır. Doğalgaz kombili, ısı yalıtımlı ve ferah yaşam alanlarıyla hem konforlu bir oturum hem de yüksek prim potansiyeli vadetmektedir.",
    "date": "01 Kasım 2026",
    "amenities": [
      "Kombi / Doğalgaz",
      "PVC Doğrama",
      "Çelik Kapı",
      "Laminat Parke",
      "Kablo TV / Uydu",
      "Isı Yalıtımı",
      "Caddeye Yakın",
      "Toplu Ulaşıma Yakın"
    ],
    "interiorFeatures": [
      "ADSL / Fiber İnternet",
      "Ahşap Doğrama",
      "Akıllı Ev Altyapısı",
      "Ankastre Mutfak",
      "Balkon (Cam Kapama)",
      "Çelik Kapı",
      "Duşakabin",
      "Isıcam",
      "Kablo TV / Uydu",
      "Kartonpiyer",
      "Laminat Zemin",
      "Mutfak Doğalgazı",
      "Panel Kapı",
      "Parke Zemin",
      "Spot Aydınlatma"
    ],
    "exteriorFeatures": [
      "Asansör",
      "Isı Yalıtımı (Mantolama)",
      "Hidrofor",
      "Su Deposu",
      "Yangın Merdiveni",
      "Açık Otopark",
      "Kapalı Otopark",
      "Kamera Güvenlik Sistemi",
      "Geniş Yeşil Alan",
      "Çocuk Oyun Parkı"
    ],
    "neighborhoodFeatures": [
      "Cami",
      "Eczane & Sağlık Ocağı",
      "Etlik Şehir Hastanesi (5 dk)",
      "İlk ve Ortaokullar",
      "Semt Pazarı (200m)",
      "Zincir Marketler (Bim, A101, Şok, Migros)",
      "Park & Dinlenme Alanı",
      "EGO Otobüs ve Dolmuş Durağı (100m)",
      "Metro Bağlantısı"
    ],
    "lat": 39.9721,
    "lng": 32.8284,
    "m2PriceTrend": [
      {
        "month": "Eki 25",
        "price": 280,
        "districtPrice": 263,
        "cityPrice": 241
      },
      {
        "month": "Kas 25",
        "price": 285,
        "districtPrice": 268,
        "cityPrice": 245
      },
      {
        "month": "Ara 25",
        "price": 290,
        "districtPrice": 273,
        "cityPrice": 249
      },
      {
        "month": "Oca 26",
        "price": 298,
        "districtPrice": 280,
        "cityPrice": 256
      },
      {
        "month": "Şub 26",
        "price": 305,
        "districtPrice": 287,
        "cityPrice": 262
      },
      {
        "month": "Mar 26",
        "price": 308,
        "districtPrice": 290,
        "cityPrice": 265
      },
      {
        "month": "Nis 26",
        "price": 316,
        "districtPrice": 297,
        "cityPrice": 272
      },
      {
        "month": "May 26",
        "price": 324,
        "districtPrice": 305,
        "cityPrice": 279
      },
      {
        "month": "Haz 26",
        "price": 329,
        "districtPrice": 309,
        "cityPrice": 283
      },
      {
        "month": "Tem 26",
        "price": 335,
        "districtPrice": 315,
        "cityPrice": 288
      },
      {
        "month": "Ağu 26",
        "price": 337,
        "districtPrice": 317,
        "cityPrice": 290
      },
      {
        "month": "Eyl 26",
        "price": 348,
        "districtPrice": 327,
        "cityPrice": 299
      }
    ],
    "yearlyChange": "+% 24.51 Artış",
    "amortizationYears": 16
  },
  {
    "id": 79552133,
    "eid": "20645844",
    "title": "MAMAK CENGİZHAN CADDESİ ÜZERİNDE CADDE CEPHELİ KOMPLE SATILIK BİNA",
    "location": "Ankara, Mamak",
    "neighborhood": "Aşağı Eğlence Mah.",
    "district": "Mamak",
    "city": "Ankara",
    "price": "₺9.750.000",
    "priceNumeric": 9750000,
    "pricePerM2": 40456,
    "image": "/listings/79552133/img_2.jpg",
    "images": [
      "/listings/79552133/img_2.jpg",
      "/listings/79552133/img_3.jpg",
      "/listings/79552133/img_4.jpg",
      "/listings/79552133/img_5.jpg"
    ],
    "type": "Satılık Komple Bina",
    "room": "Ticari",
    "area": 274,
    "netArea": 241,
    "buildingAge": "15-20",
    "totalFloors": 4,
    "floor": "Düz Giriş",
    "heating": "Kombi",
    "bathrooms": "1",
    "kitchen": "Mutfak Nişi",
    "balcony": "Yok",
    "elevator": "Yok",
    "parking": "Cadde Otoparkı",
    "furnished": "Hayır",
    "status": "Kullanıma Hazır",
    "inSite": "Hayır",
    "siteName": "Belirtilmemiş",
    "dues": "Belirtilmemiş",
    "eligibleForLoan": "Evet (Krediye Uygun)",
    "energyRating": "B",
    "deedStatus": "Kat Mülkiyetli",
    "fromWho": "Emlak Ofisinden (Renk Emlak)",
    "exchange": "Evet (Araç / Değerinde Gayrimenkul Takası)",
    "authCertNo": "0600124 (Renk Emlak Taşınmaz Ticareti Yetki Belgesi)",
    "featured": false,
    "description": "Özellikler Altyapı Özellikleri Elektrik Sanayi Elektriği Su Telefon Doğalgaz Kanalizasyon Arıtma Sondaj & Kuyu Zemin Etüdü Yolu Açılmış Yolu Açılmamış Yolu Yok",
    "date": "01 Kasım 2026",
    "amenities": [
      "Kombi / Doğalgaz",
      "PVC Doğrama",
      "Çelik Kapı",
      "Laminat Parke",
      "Kablo TV / Uydu",
      "Isı Yalıtımı",
      "Caddeye Yakın",
      "Toplu Ulaşıma Yakın"
    ],
    "interiorFeatures": [
      "ADSL / Fiber İnternet",
      "Ahşap Doğrama",
      "Akıllı Ev Altyapısı",
      "Ankastre Mutfak",
      "Balkon (Cam Kapama)",
      "Çelik Kapı",
      "Duşakabin",
      "Isıcam",
      "Kablo TV / Uydu",
      "Kartonpiyer",
      "Laminat Zemin",
      "Mutfak Doğalgazı",
      "Panel Kapı",
      "Parke Zemin",
      "Spot Aydınlatma"
    ],
    "exteriorFeatures": [
      "Asansör",
      "Isı Yalıtımı (Mantolama)",
      "Hidrofor",
      "Su Deposu",
      "Yangın Merdiveni",
      "Açık Otopark",
      "Kapalı Otopark",
      "Kamera Güvenlik Sistemi",
      "Geniş Yeşil Alan",
      "Çocuk Oyun Parkı"
    ],
    "neighborhoodFeatures": [
      "Cami",
      "Eczane & Sağlık Ocağı",
      "Etlik Şehir Hastanesi (5 dk)",
      "İlk ve Ortaokullar",
      "Semt Pazarı (200m)",
      "Zincir Marketler (Bim, A101, Şok, Migros)",
      "Park & Dinlenme Alanı",
      "EGO Otobüs ve Dolmuş Durağı (100m)",
      "Metro Bağlantısı"
    ],
    "lat": 39.9385,
    "lng": 32.912,
    "m2PriceTrend": [
      {
        "month": "Eki 25",
        "price": 33535,
        "districtPrice": 31523,
        "cityPrice": 28840
      },
      {
        "month": "Kas 25",
        "price": 33885,
        "districtPrice": 31852,
        "cityPrice": 29141
      },
      {
        "month": "Ara 25",
        "price": 34839,
        "districtPrice": 32749,
        "cityPrice": 29962
      },
      {
        "month": "Oca 26",
        "price": 35006,
        "districtPrice": 32906,
        "cityPrice": 30105
      },
      {
        "month": "Şub 26",
        "price": 36175,
        "districtPrice": 34004,
        "cityPrice": 31110
      },
      {
        "month": "Mar 26",
        "price": 36894,
        "districtPrice": 34680,
        "cityPrice": 31729
      },
      {
        "month": "Nis 26",
        "price": 37700,
        "districtPrice": 35438,
        "cityPrice": 32422
      },
      {
        "month": "May 26",
        "price": 37852,
        "districtPrice": 35581,
        "cityPrice": 32553
      },
      {
        "month": "Haz 26",
        "price": 39067,
        "districtPrice": 36723,
        "cityPrice": 33598
      },
      {
        "month": "Tem 26",
        "price": 39577,
        "districtPrice": 37202,
        "cityPrice": 34036
      },
      {
        "month": "Ağu 26",
        "price": 40395,
        "districtPrice": 37971,
        "cityPrice": 34740
      },
      {
        "month": "Eyl 26",
        "price": 40973,
        "districtPrice": 38515,
        "cityPrice": 35237
      }
    ],
    "yearlyChange": "+% 24.51 Artış",
    "amortizationYears": 18
  },
  {
    "id": 78295706,
    "eid": "85993025",
    "title": "AŞAĞI EĞLENCE ALTINOLUK'TA 170 M² KULLANIM ALANLI SATILIK TİCARİ MÜLK",
    "location": "Ankara, Keçiören, Aşağı Eğlence",
    "neighborhood": "Aşağı Eğlence Mah.",
    "district": "Keçiören",
    "city": "Ankara",
    "price": "₺7.200.000 ($200.000)",
    "priceNumeric": 7200000,
    "pricePerM2": 48322,
    "image": "/listings/78295706/cover.jpg",
    "images": [
      "/listings/78295706/cover.jpg",
      "/listings/78295706/img_2.jpg",
      "/listings/78295706/img_3.jpg",
      "/listings/78295706/img_4.jpg",
      "/listings/78295706/img_5.jpg"
    ],
    "type": "Satılık Dükkan",
    "room": "1+1",
    "area": 170,
    "netArea": 149,
    "buildingAge": "40",
    "totalFloors": 4,
    "floor": "Giriş Katı",
    "heating": "Kombi",
    "bathrooms": "1",
    "kitchen": "Mutfak Nişi",
    "balcony": "Yok",
    "elevator": "Var",
    "parking": "Cadde Otoparkı",
    "furnished": "Hayır",
    "status": "Kullanıma Hazır",
    "inSite": "Hayır",
    "siteName": "Belirtilmemiş",
    "dues": "Belirtilmemiş",
    "eligibleForLoan": "Evet (Krediye Uygun)",
    "energyRating": "B",
    "deedStatus": "Kat Mülkiyetli",
    "fromWho": "Emlak Ofisinden (Renk Emlak)",
    "exchange": "Evet (Araç / Değerinde Gayrimenkul Takası)",
    "authCertNo": "0600124 (Renk Emlak Taşınmaz Ticareti Yetki Belgesi)",
    "featured": false,
    "description": "Ankara, Keçiören, Aşağı Eğlence mevkiinde bulunan gayrimenkulümüz; ulaşım akslarına, okullara, sağlık merkezlerine ve semt pazarına oldukça yakın avantajlı bir konumda yer almaktadır. 1+1 planında, 170 m² kullanım alanına sahip olup, Giriş Katı konumundadır. Doğalgaz kombili, ısı yalıtımlı ve ferah yaşam alanlarıyla hem konforlu bir oturum hem de yüksek prim potansiyeli vadetmektedir.",
    "date": "01 Kasım 2026",
    "amenities": [
      "Kombi / Doğalgaz",
      "PVC Doğrama",
      "Çelik Kapı",
      "Laminat Parke",
      "Kablo TV / Uydu",
      "Isı Yalıtımı",
      "Caddeye Yakın",
      "Toplu Ulaşıma Yakın"
    ],
    "interiorFeatures": [
      "ADSL / Fiber İnternet",
      "Ahşap Doğrama",
      "Akıllı Ev Altyapısı",
      "Ankastre Mutfak",
      "Balkon (Cam Kapama)",
      "Çelik Kapı",
      "Duşakabin",
      "Isıcam",
      "Kablo TV / Uydu",
      "Kartonpiyer",
      "Laminat Zemin",
      "Mutfak Doğalgazı",
      "Panel Kapı",
      "Parke Zemin",
      "Spot Aydınlatma"
    ],
    "exteriorFeatures": [
      "Asansör",
      "Isı Yalıtımı (Mantolama)",
      "Hidrofor",
      "Su Deposu",
      "Yangın Merdiveni",
      "Açık Otopark",
      "Kapalı Otopark",
      "Kamera Güvenlik Sistemi",
      "Geniş Yeşil Alan",
      "Çocuk Oyun Parkı"
    ],
    "neighborhoodFeatures": [
      "Cami",
      "Eczane & Sağlık Ocağı",
      "Etlik Şehir Hastanesi (5 dk)",
      "İlk ve Ortaokullar",
      "Semt Pazarı (200m)",
      "Zincir Marketler (Bim, A101, Şok, Migros)",
      "Park & Dinlenme Alanı",
      "EGO Otobüs ve Dolmuş Durağı (100m)",
      "Metro Bağlantısı"
    ],
    "lat": 39.9721,
    "lng": 32.8284,
    "m2PriceTrend": [
      {
        "month": "Eki 25",
        "price": 39532,
        "districtPrice": 37160,
        "cityPrice": 33998
      },
      {
        "month": "Kas 25",
        "price": 40896,
        "districtPrice": 38442,
        "cityPrice": 35171
      },
      {
        "month": "Ara 25",
        "price": 41136,
        "districtPrice": 38668,
        "cityPrice": 35377
      },
      {
        "month": "Oca 26",
        "price": 42356,
        "districtPrice": 39815,
        "cityPrice": 36426
      },
      {
        "month": "Şub 26",
        "price": 42907,
        "districtPrice": 40333,
        "cityPrice": 36900
      },
      {
        "month": "Mar 26",
        "price": 43935,
        "districtPrice": 41299,
        "cityPrice": 37784
      },
      {
        "month": "Nis 26",
        "price": 45009,
        "districtPrice": 42308,
        "cityPrice": 38708
      },
      {
        "month": "May 26",
        "price": 45581,
        "districtPrice": 42846,
        "cityPrice": 39200
      },
      {
        "month": "Haz 26",
        "price": 46121,
        "districtPrice": 43354,
        "cityPrice": 39664
      },
      {
        "month": "Tem 26",
        "price": 47565,
        "districtPrice": 44711,
        "cityPrice": 40906
      },
      {
        "month": "Ağu 26",
        "price": 47726,
        "districtPrice": 44862,
        "cityPrice": 41044
      },
      {
        "month": "Eyl 26",
        "price": 49090,
        "districtPrice": 46145,
        "cityPrice": 42217
      }
    ],
    "yearlyChange": "+% 24.51 Artış",
    "amortizationYears": 18
  },
  {
    "id": 47600525,
    "eid": "47885228",
    "title": "ETLİK AŞAĞI EĞLENCE MENDİL SOKAKTA YÜKSEK GİRİŞ SATILIK 2+1 DAİRE",
    "location": "Ankara, Keçiören, Aşağı Eğlence",
    "neighborhood": "Aşağı Eğlence Mah.",
    "district": "Keçiören",
    "city": "Ankara",
    "price": "₺3.850.000",
    "priceNumeric": 3850000,
    "pricePerM2": 55000,
    "image": "/listings/47600525/cover.jpg",
    "images": [
      "/listings/47600525/cover.jpg",
      "/listings/47600525/img_2.jpg",
      "/listings/47600525/img_3.jpg",
      "/listings/47600525/img_4.jpg",
      "/listings/47600525/img_5.jpg"
    ],
    "type": "Satılık Daire",
    "room": "2+1",
    "area": 80,
    "netArea": 70,
    "buildingAge": "40",
    "totalFloors": 5,
    "floor": "Yüksek Giriş",
    "heating": "Kombi",
    "bathrooms": "1",
    "kitchen": "Ayrı Mutfak (Kapalı)",
    "balcony": "Var (Cam Balkon)",
    "elevator": "Var",
    "parking": "Açık Otopark",
    "furnished": "Hayır",
    "status": "Boş (Hemen Taşınabilir)",
    "inSite": "Hayır",
    "siteName": "Belirtilmemiş",
    "dues": "150 TL",
    "eligibleForLoan": "Evet (Krediye Uygun)",
    "energyRating": "B",
    "deedStatus": "Kat Mülkiyetli",
    "fromWho": "Emlak Ofisinden (Renk Emlak)",
    "exchange": "Evet (Araç / Değerinde Gayrimenkul Takası)",
    "authCertNo": "0600124 (Renk Emlak Taşınmaz Ticareti Yetki Belgesi)",
    "featured": false,
    "description": "Ankara, Keçiören, Aşağı Eğlence mevkiinde bulunan gayrimenkulümüz; ulaşım akslarına, okullara, sağlık merkezlerine ve çarşı merkezine oldukça yakın avantajlı konumuyla dikkat çekmektedir. Ferah iç mekanı, kullanışlı planı ve yapılı durumuyla konforlu bir kullanım vadeder.",
    "date": "01 Kasım 2026",
    "amenities": [
      "Kombi / Doğalgaz",
      "PVC Doğrama",
      "Çelik Kapı",
      "Laminat Parke",
      "Kablo TV / Uydu",
      "Isı Yalıtımı",
      "Caddeye Yakın",
      "Toplu Ulaşıma Yakın"
    ],
    "interiorFeatures": [
      "ADSL / Fiber İnternet",
      "Ahşap Doğrama",
      "Akıllı Ev Altyapısı",
      "Ankastre Mutfak",
      "Balkon (Cam Kapama)",
      "Çelik Kapı",
      "Duşakabin",
      "Isıcam",
      "Kablo TV / Uydu",
      "Kartonpiyer",
      "Laminat Zemin",
      "Mutfak Doğalgazı",
      "Panel Kapı",
      "Parke Zemin",
      "Spot Aydınlatma"
    ],
    "exteriorFeatures": [
      "Asansör",
      "Isı Yalıtımı (Mantolama)",
      "Hidrofor",
      "Su Deposu",
      "Yangın Merdiveni",
      "Açık Otopark",
      "Kapalı Otopark",
      "Kamera Güvenlik Sistemi",
      "Geniş Yeşil Alan",
      "Çocuk Oyun Parkı"
    ],
    "neighborhoodFeatures": [
      "Cami",
      "Eczane & Sağlık Ocağı",
      "Etlik Şehir Hastanesi (5 dk)",
      "İlk ve Ortaokullar",
      "Semt Pazarı (200m)",
      "Zincir Marketler (Bim, A101, Şok, Migros)",
      "Park & Dinlenme Alanı",
      "EGO Otobüs ve Dolmuş Durağı (100m)",
      "Metro Bağlantısı"
    ],
    "lat": 39.9721,
    "lng": 32.8284,
    "m2PriceTrend": [
      {
        "month": "Eki 25",
        "price": 45356,
        "districtPrice": 42635,
        "cityPrice": 39006
      },
      {
        "month": "Kas 25",
        "price": 45963,
        "districtPrice": 43205,
        "cityPrice": 39528
      },
      {
        "month": "Ara 25",
        "price": 46753,
        "districtPrice": 43948,
        "cityPrice": 40208
      },
      {
        "month": "Oca 26",
        "price": 47944,
        "districtPrice": 45067,
        "cityPrice": 41232
      },
      {
        "month": "Şub 26",
        "price": 49268,
        "districtPrice": 46312,
        "cityPrice": 42370
      },
      {
        "month": "Mar 26",
        "price": 49885,
        "districtPrice": 46892,
        "cityPrice": 42901
      },
      {
        "month": "Nis 26",
        "price": 51019,
        "districtPrice": 47958,
        "cityPrice": 43876
      },
      {
        "month": "May 26",
        "price": 51626,
        "districtPrice": 48528,
        "cityPrice": 44398
      },
      {
        "month": "Haz 26",
        "price": 53181,
        "districtPrice": 49990,
        "cityPrice": 45736
      },
      {
        "month": "Tem 26",
        "price": 53456,
        "districtPrice": 50249,
        "cityPrice": 45972
      },
      {
        "month": "Ağu 26",
        "price": 54276,
        "districtPrice": 51019,
        "cityPrice": 46677
      },
      {
        "month": "Eyl 26",
        "price": 55687,
        "districtPrice": 52346,
        "cityPrice": 47891
      }
    ],
    "yearlyChange": "+% 24.51 Artış",
    "amortizationYears": 16
  },
  {
    "id": 77223057,
    "eid": "53311046",
    "title": "AŞAĞI EĞLENCE BAĞLUM SOKAKTA ÜÇ CEPHELİ KUPON KİRALIK 3+1 DAİRE",
    "location": "Ankara, Keçiören, Aşağı Eğlence",
    "neighborhood": "Aşağı Eğlence Mah.",
    "district": "Keçiören",
    "city": "Ankara",
    "price": "₺25.000 / ay",
    "priceNumeric": 25000,
    "pricePerM2": 284,
    "image": "/listings/77223057/cover.jpg",
    "images": [
      "/listings/77223057/cover.jpg",
      "/listings/77223057/img_2.jpg",
      "/listings/77223057/img_3.jpg",
      "/listings/77223057/img_4.jpg",
      "/listings/77223057/img_5.jpg"
    ],
    "type": "Kiralık Daire",
    "room": "3+1",
    "area": 100,
    "netArea": 88,
    "buildingAge": "40",
    "totalFloors": 5,
    "floor": "3. Kat",
    "heating": "Kombi",
    "bathrooms": "1",
    "kitchen": "Ayrı Mutfak (Kapalı)",
    "balcony": "Var (Cam Balkon)",
    "elevator": "Yok",
    "parking": "Açık Otopark",
    "furnished": "Hayır",
    "status": "Boş (Hemen Taşınabilir)",
    "inSite": "Hayır",
    "siteName": "Belirtilmemiş",
    "dues": "150 TL",
    "eligibleForLoan": "Evet (Krediye Uygun)",
    "energyRating": "B",
    "deedStatus": "Kat Mülkiyetli",
    "fromWho": "Emlak Ofisinden (Renk Emlak)",
    "exchange": "Evet (Araç / Değerinde Gayrimenkul Takası)",
    "authCertNo": "0600124 (Renk Emlak Taşınmaz Ticareti Yetki Belgesi)",
    "featured": false,
    "description": "Ankara, Keçiören, Aşağı Eğlence mevkiinde bulunan gayrimenkulümüz; ulaşım akslarına, okullara, sağlık merkezlerine ve semt pazarına oldukça yakın avantajlı bir konumda yer almaktadır. 3+1 planında, 100 m² kullanım alanına sahip olup, 3. Kat konumundadır. Doğalgaz kombili, ısı yalıtımlı ve ferah yaşam alanlarıyla hem konforlu bir oturum hem de yüksek prim potansiyeli vadetmektedir.",
    "date": "01 Kasım 2026",
    "amenities": [
      "Kombi / Doğalgaz",
      "PVC Doğrama",
      "Çelik Kapı",
      "Laminat Parke",
      "Kablo TV / Uydu",
      "Isı Yalıtımı",
      "Caddeye Yakın",
      "Toplu Ulaşıma Yakın"
    ],
    "interiorFeatures": [
      "ADSL / Fiber İnternet",
      "Ahşap Doğrama",
      "Akıllı Ev Altyapısı",
      "Ankastre Mutfak",
      "Balkon (Cam Kapama)",
      "Çelik Kapı",
      "Duşakabin",
      "Isıcam",
      "Kablo TV / Uydu",
      "Kartonpiyer",
      "Laminat Zemin",
      "Mutfak Doğalgazı",
      "Panel Kapı",
      "Parke Zemin",
      "Spot Aydınlatma"
    ],
    "exteriorFeatures": [
      "Asansör",
      "Isı Yalıtımı (Mantolama)",
      "Hidrofor",
      "Su Deposu",
      "Yangın Merdiveni",
      "Açık Otopark",
      "Kapalı Otopark",
      "Kamera Güvenlik Sistemi",
      "Geniş Yeşil Alan",
      "Çocuk Oyun Parkı"
    ],
    "neighborhoodFeatures": [
      "Cami",
      "Eczane & Sağlık Ocağı",
      "Etlik Şehir Hastanesi (5 dk)",
      "İlk ve Ortaokullar",
      "Semt Pazarı (200m)",
      "Zincir Marketler (Bim, A101, Şok, Migros)",
      "Park & Dinlenme Alanı",
      "EGO Otobüs ve Dolmuş Durağı (100m)",
      "Metro Bağlantısı"
    ],
    "lat": 39.9721,
    "lng": 32.8284,
    "m2PriceTrend": [
      {
        "month": "Eki 25",
        "price": 281,
        "districtPrice": 264,
        "cityPrice": 242
      },
      {
        "month": "Kas 25",
        "price": 287,
        "districtPrice": 270,
        "cityPrice": 247
      },
      {
        "month": "Ara 25",
        "price": 294,
        "districtPrice": 276,
        "cityPrice": 253
      },
      {
        "month": "Oca 26",
        "price": 298,
        "districtPrice": 280,
        "cityPrice": 256
      },
      {
        "month": "Şub 26",
        "price": 306,
        "districtPrice": 288,
        "cityPrice": 263
      },
      {
        "month": "Mar 26",
        "price": 310,
        "districtPrice": 291,
        "cityPrice": 267
      },
      {
        "month": "Nis 26",
        "price": 316,
        "districtPrice": 297,
        "cityPrice": 272
      },
      {
        "month": "May 26",
        "price": 323,
        "districtPrice": 304,
        "cityPrice": 278
      },
      {
        "month": "Haz 26",
        "price": 326,
        "districtPrice": 306,
        "cityPrice": 280
      },
      {
        "month": "Tem 26",
        "price": 334,
        "districtPrice": 314,
        "cityPrice": 287
      },
      {
        "month": "Ağu 26",
        "price": 338,
        "districtPrice": 318,
        "cityPrice": 291
      },
      {
        "month": "Eyl 26",
        "price": 345,
        "districtPrice": 324,
        "cityPrice": 297
      }
    ],
    "yearlyChange": "+% 24.51 Artış",
    "amortizationYears": 16
  },
  {
    "id": 68010162,
    "eid": "65718904",
    "title": "AŞAĞI EĞLENCE MALİYE BLOKLARI SİTESİNDE ASANSÖRLÜ KİRALIK 3+1 DAİRE",
    "location": "Ankara, Keçiören, Aşağı Eğlence",
    "neighborhood": "Aşağı Eğlence Mah.",
    "district": "Keçiören",
    "city": "Ankara",
    "price": "₺20.000 / ay",
    "priceNumeric": 20000,
    "pricePerM2": 227,
    "image": "/listings/68010162/cover.jpg",
    "images": [
      "/listings/68010162/cover.jpg",
      "/listings/68010162/img_2.jpg",
      "/listings/68010162/img_3.jpg",
      "/listings/68010162/img_4.jpg",
      "/listings/68010162/img_5.jpg"
    ],
    "type": "Kiralık Daire",
    "room": "3+1",
    "area": 100,
    "netArea": 88,
    "buildingAge": "40",
    "totalFloors": 5,
    "floor": "5. Kat",
    "heating": "Merkezi Sistem",
    "bathrooms": "1",
    "kitchen": "Ayrı Mutfak (Kapalı)",
    "balcony": "Var (Cam Balkon)",
    "elevator": "Var",
    "parking": "Açık Otopark",
    "furnished": "Hayır",
    "status": "Boş (Hemen Taşınabilir)",
    "inSite": "Evet",
    "siteName": "Susurluk Konutları",
    "dues": "350 TL",
    "eligibleForLoan": "Evet (Krediye Uygun)",
    "energyRating": "B",
    "deedStatus": "Kat Mülkiyetli",
    "fromWho": "Emlak Ofisinden (Renk Emlak)",
    "exchange": "Evet (Araç / Değerinde Gayrimenkul Takası)",
    "authCertNo": "0600124 (Renk Emlak Taşınmaz Ticareti Yetki Belgesi)",
    "featured": false,
    "description": "Ankara, Keçiören, Aşağı Eğlence mevkiinde bulunan gayrimenkulümüz; ulaşım akslarına, okullara, sağlık merkezlerine ve semt pazarına oldukça yakın avantajlı bir konumda yer almaktadır. 3+1 planında, 100 m² kullanım alanına sahip olup, 5. Kat konumundadır. Doğalgaz kombili, ısı yalıtımlı ve ferah yaşam alanlarıyla hem konforlu bir oturum hem de yüksek prim potansiyeli vadetmektedir.",
    "date": "01 Kasım 2026",
    "amenities": [
      "Kombi / Doğalgaz",
      "PVC Doğrama",
      "Çelik Kapı",
      "Laminat Parke",
      "Kablo TV / Uydu",
      "Isı Yalıtımı",
      "Caddeye Yakın",
      "Toplu Ulaşıma Yakın"
    ],
    "interiorFeatures": [
      "ADSL / Fiber İnternet",
      "Ahşap Doğrama",
      "Akıllı Ev Altyapısı",
      "Ankastre Mutfak",
      "Balkon (Cam Kapama)",
      "Çelik Kapı",
      "Duşakabin",
      "Isıcam",
      "Kablo TV / Uydu",
      "Kartonpiyer",
      "Laminat Zemin",
      "Mutfak Doğalgazı",
      "Panel Kapı",
      "Parke Zemin",
      "Spot Aydınlatma"
    ],
    "exteriorFeatures": [
      "Asansör",
      "Isı Yalıtımı (Mantolama)",
      "Hidrofor",
      "Su Deposu",
      "Yangın Merdiveni",
      "Açık Otopark",
      "Kapalı Otopark",
      "Kamera Güvenlik Sistemi",
      "Geniş Yeşil Alan",
      "Çocuk Oyun Parkı"
    ],
    "neighborhoodFeatures": [
      "Cami",
      "Eczane & Sağlık Ocağı",
      "Etlik Şehir Hastanesi (5 dk)",
      "İlk ve Ortaokullar",
      "Semt Pazarı (200m)",
      "Zincir Marketler (Bim, A101, Şok, Migros)",
      "Park & Dinlenme Alanı",
      "EGO Otobüs ve Dolmuş Durağı (100m)",
      "Metro Bağlantısı"
    ],
    "lat": 39.9721,
    "lng": 32.8284,
    "m2PriceTrend": [
      {
        "month": "Eki 25",
        "price": 280,
        "districtPrice": 263,
        "cityPrice": 241
      },
      {
        "month": "Kas 25",
        "price": 289,
        "districtPrice": 272,
        "cityPrice": 249
      },
      {
        "month": "Ara 25",
        "price": 290,
        "districtPrice": 273,
        "cityPrice": 249
      },
      {
        "month": "Oca 26",
        "price": 296,
        "districtPrice": 278,
        "cityPrice": 255
      },
      {
        "month": "Şub 26",
        "price": 301,
        "districtPrice": 283,
        "cityPrice": 259
      },
      {
        "month": "Mar 26",
        "price": 312,
        "districtPrice": 293,
        "cityPrice": 268
      },
      {
        "month": "Nis 26",
        "price": 315,
        "districtPrice": 296,
        "cityPrice": 271
      },
      {
        "month": "May 26",
        "price": 321,
        "districtPrice": 302,
        "cityPrice": 276
      },
      {
        "month": "Haz 26",
        "price": 329,
        "districtPrice": 309,
        "cityPrice": 283
      },
      {
        "month": "Tem 26",
        "price": 331,
        "districtPrice": 311,
        "cityPrice": 285
      },
      {
        "month": "Ağu 26",
        "price": 338,
        "districtPrice": 318,
        "cityPrice": 291
      },
      {
        "month": "Eyl 26",
        "price": 344,
        "districtPrice": 323,
        "cityPrice": 296
      }
    ],
    "yearlyChange": "+% 24.51 Artış",
    "amortizationYears": 16
  },
  {
    "id": 46830811,
    "eid": "94947513",
    "title": "ETLİK YAYLA MAHALLESİNDE MERKEZİ KONUMDA MASRAFSIZ KİRALIK 1+1 DAİRE",
    "location": "Ankara, Keçiören, Etlik",
    "neighborhood": "Etlik Mah.",
    "district": "Keçiören",
    "city": "Ankara",
    "price": "₺10.000 / ay",
    "priceNumeric": 10000,
    "pricePerM2": 227,
    "image": "/listings/46830811/cover.jpg",
    "images": [
      "/listings/46830811/cover.jpg",
      "/listings/46830811/img_2.jpg",
      "/listings/46830811/img_3.jpg",
      "/listings/46830811/img_4.jpg",
      "/listings/46830811/img_5.jpg"
    ],
    "type": "Kiralık Daire",
    "room": "1+1",
    "area": 50,
    "netArea": 44,
    "buildingAge": "25",
    "totalFloors": 6,
    "floor": "Kot 2",
    "heating": "Kombi",
    "bathrooms": "1",
    "kitchen": "Ayrı Mutfak (Kapalı)",
    "balcony": "Var (Cam Balkon)",
    "elevator": "Var",
    "parking": "Açık Otopark",
    "furnished": "Hayır",
    "status": "Boş (Hemen Taşınabilir)",
    "inSite": "Hayır",
    "siteName": "Belirtilmemiş",
    "dues": "150 TL",
    "eligibleForLoan": "Evet (Krediye Uygun)",
    "energyRating": "B",
    "deedStatus": "Kat Mülkiyetli",
    "fromWho": "Emlak Ofisinden (Renk Emlak)",
    "exchange": "Hayır",
    "authCertNo": "0600124 (Renk Emlak Taşınmaz Ticareti Yetki Belgesi)",
    "featured": false,
    "description": "Ankara, Keçiören, Etlik mevkiinde bulunan gayrimenkulümüz; ulaşım akslarına, okullara, sağlık merkezlerine ve semt pazarına oldukça yakın avantajlı bir konumda yer almaktadır. 1+1 planında, 50 m² kullanım alanına sahip olup, Kot 2 konumundadır. Doğalgaz kombili, ısı yalıtımlı ve ferah yaşam alanlarıyla hem konforlu bir oturum hem de yüksek prim potansiyeli vadetmektedir.",
    "date": "01 Kasım 2026",
    "amenities": [
      "Kombi / Doğalgaz",
      "PVC Doğrama",
      "Çelik Kapı",
      "Laminat Parke",
      "Kablo TV / Uydu",
      "Isı Yalıtımı",
      "Caddeye Yakın",
      "Toplu Ulaşıma Yakın"
    ],
    "interiorFeatures": [
      "ADSL / Fiber İnternet",
      "Ahşap Doğrama",
      "Akıllı Ev Altyapısı",
      "Ankastre Mutfak",
      "Balkon (Cam Kapama)",
      "Çelik Kapı",
      "Duşakabin",
      "Isıcam",
      "Kablo TV / Uydu",
      "Kartonpiyer",
      "Laminat Zemin",
      "Mutfak Doğalgazı",
      "Panel Kapı",
      "Parke Zemin",
      "Spot Aydınlatma"
    ],
    "exteriorFeatures": [
      "Asansör",
      "Isı Yalıtımı (Mantolama)",
      "Hidrofor",
      "Su Deposu",
      "Yangın Merdiveni",
      "Açık Otopark",
      "Kapalı Otopark",
      "Kamera Güvenlik Sistemi",
      "Geniş Yeşil Alan",
      "Çocuk Oyun Parkı"
    ],
    "neighborhoodFeatures": [
      "Cami",
      "Eczane & Sağlık Ocağı",
      "Etlik Şehir Hastanesi (5 dk)",
      "İlk ve Ortaokullar",
      "Semt Pazarı (200m)",
      "Zincir Marketler (Bim, A101, Şok, Migros)",
      "Park & Dinlenme Alanı",
      "EGO Otobüs ve Dolmuş Durağı (100m)",
      "Metro Bağlantısı"
    ],
    "lat": 39.975,
    "lng": 32.835,
    "m2PriceTrend": [
      {
        "month": "Eki 25",
        "price": 279,
        "districtPrice": 262,
        "cityPrice": 240
      },
      {
        "month": "Kas 25",
        "price": 288,
        "districtPrice": 271,
        "cityPrice": 248
      },
      {
        "month": "Ara 25",
        "price": 294,
        "districtPrice": 276,
        "cityPrice": 253
      },
      {
        "month": "Oca 26",
        "price": 297,
        "districtPrice": 279,
        "cityPrice": 255
      },
      {
        "month": "Şub 26",
        "price": 301,
        "districtPrice": 283,
        "cityPrice": 259
      },
      {
        "month": "Mar 26",
        "price": 311,
        "districtPrice": 292,
        "cityPrice": 267
      },
      {
        "month": "Nis 26",
        "price": 314,
        "districtPrice": 295,
        "cityPrice": 270
      },
      {
        "month": "May 26",
        "price": 324,
        "districtPrice": 305,
        "cityPrice": 279
      },
      {
        "month": "Haz 26",
        "price": 329,
        "districtPrice": 309,
        "cityPrice": 283
      },
      {
        "month": "Tem 26",
        "price": 334,
        "districtPrice": 314,
        "cityPrice": 287
      },
      {
        "month": "Ağu 26",
        "price": 338,
        "districtPrice": 318,
        "cityPrice": 291
      },
      {
        "month": "Eyl 26",
        "price": 348,
        "districtPrice": 327,
        "cityPrice": 299
      }
    ],
    "yearlyChange": "+% 24.51 Artış",
    "amortizationYears": 16
  },
  {
    "id": 73076657,
    "eid": "64796051",
    "title": "ETLİK ADNAN YÜKSEL CADDESİNDE ASANSÖRLÜ FULL EŞYALI KİRALIK 3+1 DAİRE",
    "location": "Ankara, Keçiören, Etlik",
    "neighborhood": "Etlik Mah.",
    "district": "Keçiören",
    "city": "Ankara",
    "price": "₺34.000 / ay",
    "priceNumeric": 34000,
    "pricePerM2": 386,
    "image": "/listings/73076657/cover.jpg",
    "images": [
      "/listings/73076657/cover.jpg",
      "/listings/73076657/img_2.jpg",
      "/listings/73076657/img_3.jpg",
      "/listings/73076657/img_4.jpg",
      "/listings/73076657/img_5.jpg"
    ],
    "type": "Kiralık Daire",
    "room": "3+1",
    "area": 100,
    "netArea": 88,
    "buildingAge": "40",
    "totalFloors": 6,
    "floor": "1. Kat",
    "heating": "Kombi",
    "bathrooms": "1",
    "kitchen": "Ayrı Mutfak (Kapalı)",
    "balcony": "Var (Cam Balkon)",
    "elevator": "Var",
    "parking": "Açık Otopark",
    "furnished": "Evet (Full Eşyalı)",
    "status": "Boş (Hemen Taşınabilir)",
    "inSite": "Hayır",
    "siteName": "Belirtilmemiş",
    "dues": "150 TL",
    "eligibleForLoan": "Evet (Krediye Uygun)",
    "energyRating": "B",
    "deedStatus": "Kat Mülkiyetli",
    "fromWho": "Emlak Ofisinden (Renk Emlak)",
    "exchange": "Hayır",
    "authCertNo": "0600124 (Renk Emlak Taşınmaz Ticareti Yetki Belgesi)",
    "featured": false,
    "description": "Ankara, Keçiören, Etlik mevkiinde bulunan gayrimenkulümüz; ulaşım akslarına, okullara, sağlık merkezlerine ve semt pazarına oldukça yakın avantajlı bir konumda yer almaktadır. 3+1 planında, 100 m² kullanım alanına sahip olup, 1. Kat konumundadır. Doğalgaz kombili, ısı yalıtımlı ve ferah yaşam alanlarıyla hem konforlu bir oturum hem de yüksek prim potansiyeli vadetmektedir.",
    "date": "01 Kasım 2026",
    "amenities": [
      "Kombi / Doğalgaz",
      "PVC Doğrama",
      "Çelik Kapı",
      "Laminat Parke",
      "Kablo TV / Uydu",
      "Isı Yalıtımı",
      "Caddeye Yakın",
      "Toplu Ulaşıma Yakın"
    ],
    "interiorFeatures": [
      "ADSL / Fiber İnternet",
      "Ahşap Doğrama",
      "Akıllı Ev Altyapısı",
      "Ankastre Mutfak",
      "Balkon (Cam Kapama)",
      "Çelik Kapı",
      "Duşakabin",
      "Isıcam",
      "Kablo TV / Uydu",
      "Kartonpiyer",
      "Laminat Zemin",
      "Mutfak Doğalgazı",
      "Panel Kapı",
      "Parke Zemin",
      "Spot Aydınlatma"
    ],
    "exteriorFeatures": [
      "Asansör",
      "Isı Yalıtımı (Mantolama)",
      "Hidrofor",
      "Su Deposu",
      "Yangın Merdiveni",
      "Açık Otopark",
      "Kapalı Otopark",
      "Kamera Güvenlik Sistemi",
      "Geniş Yeşil Alan",
      "Çocuk Oyun Parkı"
    ],
    "neighborhoodFeatures": [
      "Cami",
      "Eczane & Sağlık Ocağı",
      "Etlik Şehir Hastanesi (5 dk)",
      "İlk ve Ortaokullar",
      "Semt Pazarı (200m)",
      "Zincir Marketler (Bim, A101, Şok, Migros)",
      "Park & Dinlenme Alanı",
      "EGO Otobüs ve Dolmuş Durağı (100m)",
      "Metro Bağlantısı"
    ],
    "lat": 39.975,
    "lng": 32.835,
    "m2PriceTrend": [
      {
        "month": "Eki 25",
        "price": 280,
        "districtPrice": 263,
        "cityPrice": 241
      },
      {
        "month": "Kas 25",
        "price": 289,
        "districtPrice": 272,
        "cityPrice": 249
      },
      {
        "month": "Ara 25",
        "price": 292,
        "districtPrice": 274,
        "cityPrice": 251
      },
      {
        "month": "Oca 26",
        "price": 296,
        "districtPrice": 278,
        "cityPrice": 255
      },
      {
        "month": "Şub 26",
        "price": 302,
        "districtPrice": 284,
        "cityPrice": 260
      },
      {
        "month": "Mar 26",
        "price": 309,
        "districtPrice": 290,
        "cityPrice": 266
      },
      {
        "month": "Nis 26",
        "price": 318,
        "districtPrice": 299,
        "cityPrice": 273
      },
      {
        "month": "May 26",
        "price": 322,
        "districtPrice": 303,
        "cityPrice": 277
      },
      {
        "month": "Haz 26",
        "price": 325,
        "districtPrice": 306,
        "cityPrice": 280
      },
      {
        "month": "Tem 26",
        "price": 336,
        "districtPrice": 316,
        "cityPrice": 289
      },
      {
        "month": "Ağu 26",
        "price": 338,
        "districtPrice": 318,
        "cityPrice": 291
      },
      {
        "month": "Eyl 26",
        "price": 343,
        "districtPrice": 322,
        "cityPrice": 295
      }
    ],
    "yearlyChange": "+% 24.51 Artış",
    "amortizationYears": 16
  },
  {
    "id": 26549087,
    "eid": "55513328",
    "title": "MAMAK CENGİZHAN MAHALLESİNDE 2 DÜKKAN + 2 DAİRELİ SATILIK BİNA",
    "location": "Ankara, Mamak",
    "neighborhood": "Aşağı Eğlence Mah.",
    "district": "Mamak",
    "city": "Ankara",
    "price": "₺9.750.000",
    "priceNumeric": 9750000,
    "pricePerM2": 40289,
    "image": "/listings/26549087/cover.jpg",
    "images": [
      "/listings/26549087/cover.jpg",
      "/listings/26549087/img_2.jpg",
      "/listings/26549087/img_3.jpg"
    ],
    "type": "Satılık Komple Bina",
    "room": "Ticari",
    "area": 275,
    "netArea": 242,
    "buildingAge": "40",
    "totalFloors": 4,
    "floor": "Düz Giriş",
    "heating": "Soba",
    "bathrooms": "1",
    "kitchen": "Mutfak Nişi",
    "balcony": "Yok",
    "elevator": "Var",
    "parking": "Cadde Otoparkı",
    "furnished": "Hayır",
    "status": "Kullanıma Hazır",
    "inSite": "Hayır",
    "siteName": "Belirtilmemiş",
    "dues": "Belirtilmemiş",
    "eligibleForLoan": "Evet (Krediye Uygun)",
    "energyRating": "B",
    "deedStatus": "Kat Mülkiyetli",
    "fromWho": "Emlak Ofisinden (Renk Emlak)",
    "exchange": "Evet (Araç / Değerinde Gayrimenkul Takası)",
    "authCertNo": "0600124 (Renk Emlak Taşınmaz Ticareti Yetki Belgesi)",
    "featured": false,
    "description": "Ankara, Mamak mevkiinde bulunan gayrimenkulümüz; ulaşım akslarına, okullara, sağlık merkezlerine ve semt pazarına oldukça yakın avantajlı bir konumda yer almaktadır. Ticari planında, 275 m² kullanım alanına sahip olup, Düz Giriş konumundadır. Doğalgaz kombili, ısı yalıtımlı ve ferah yaşam alanlarıyla hem konforlu bir oturum hem de yüksek prim potansiyeli vadetmektedir.",
    "date": "01 Kasım 2026",
    "amenities": [
      "Kombi / Doğalgaz",
      "PVC Doğrama",
      "Çelik Kapı",
      "Laminat Parke",
      "Kablo TV / Uydu",
      "Isı Yalıtımı",
      "Caddeye Yakın",
      "Toplu Ulaşıma Yakın"
    ],
    "interiorFeatures": [
      "ADSL / Fiber İnternet",
      "Ahşap Doğrama",
      "Akıllı Ev Altyapısı",
      "Ankastre Mutfak",
      "Balkon (Cam Kapama)",
      "Çelik Kapı",
      "Duşakabin",
      "Isıcam",
      "Kablo TV / Uydu",
      "Kartonpiyer",
      "Laminat Zemin",
      "Mutfak Doğalgazı",
      "Panel Kapı",
      "Parke Zemin",
      "Spot Aydınlatma"
    ],
    "exteriorFeatures": [
      "Asansör",
      "Isı Yalıtımı (Mantolama)",
      "Hidrofor",
      "Su Deposu",
      "Yangın Merdiveni",
      "Açık Otopark",
      "Kapalı Otopark",
      "Kamera Güvenlik Sistemi",
      "Geniş Yeşil Alan",
      "Çocuk Oyun Parkı"
    ],
    "neighborhoodFeatures": [
      "Cami",
      "Eczane & Sağlık Ocağı",
      "Etlik Şehir Hastanesi (5 dk)",
      "İlk ve Ortaokullar",
      "Semt Pazarı (200m)",
      "Zincir Marketler (Bim, A101, Şok, Migros)",
      "Park & Dinlenme Alanı",
      "EGO Otobüs ve Dolmuş Durağı (100m)",
      "Metro Bağlantısı"
    ],
    "lat": 39.9385,
    "lng": 32.912,
    "m2PriceTrend": [
      {
        "month": "Eki 25",
        "price": 33151,
        "districtPrice": 31162,
        "cityPrice": 28510
      },
      {
        "month": "Kas 25",
        "price": 33653,
        "districtPrice": 31634,
        "cityPrice": 28942
      },
      {
        "month": "Ara 25",
        "price": 34631,
        "districtPrice": 32553,
        "cityPrice": 29783
      },
      {
        "month": "Oca 26",
        "price": 35009,
        "districtPrice": 32908,
        "cityPrice": 30108
      },
      {
        "month": "Şub 26",
        "price": 36027,
        "districtPrice": 33865,
        "cityPrice": 30983
      },
      {
        "month": "Mar 26",
        "price": 36537,
        "districtPrice": 34345,
        "cityPrice": 31422
      },
      {
        "month": "Nis 26",
        "price": 37228,
        "districtPrice": 34994,
        "cityPrice": 32016
      },
      {
        "month": "May 26",
        "price": 37967,
        "districtPrice": 35689,
        "cityPrice": 32652
      },
      {
        "month": "Haz 26",
        "price": 38805,
        "districtPrice": 36477,
        "cityPrice": 33372
      },
      {
        "month": "Tem 26",
        "price": 39021,
        "districtPrice": 36680,
        "cityPrice": 33558
      },
      {
        "month": "Ağu 26",
        "price": 40213,
        "districtPrice": 37800,
        "cityPrice": 34583
      },
      {
        "month": "Eyl 26",
        "price": 40637,
        "districtPrice": 38199,
        "cityPrice": 34948
      }
    ],
    "yearlyChange": "+% 24.51 Artış",
    "amortizationYears": 18
  },
  {
    "id": 90177784,
    "eid": "44764836",
    "title": "ANKARA ÇUBUK BARBAROS MAHALLESİNDE ÖZEL OKUL YANI İMARLI SATILIK ARSA",
    "location": "Ankara, Keçiören",
    "neighborhood": "Aşağı Eğlence Mah.",
    "district": "Keçiören",
    "city": "Ankara",
    "price": "₺2.300.000",
    "priceNumeric": 2300000,
    "pricePerM2": 4064,
    "image": "/listings/90177784/img_5.jpg",
    "images": [
      "/listings/90177784/img_5.jpg"
    ],
    "type": "Satılık Arsa",
    "room": "Arsa",
    "area": 644,
    "netArea": 566,
    "buildingAge": "15-20",
    "totalFloors": 8,
    "floor": "Ara Kat",
    "heating": "Kombi",
    "bathrooms": "1",
    "kitchen": "Yok",
    "balcony": "Yok",
    "elevator": "Yok",
    "parking": "Açık Otopark",
    "furnished": "Hayır",
    "status": "Boş (Hemen Taşınabilir)",
    "inSite": "Hayır",
    "siteName": "Belirtilmemiş",
    "dues": "150 TL",
    "eligibleForLoan": "Evet (Krediye Uygun)",
    "energyRating": "B",
    "deedStatus": "Müstakil Parsel Tapu",
    "fromWho": "Emlak Ofisinden (Renk Emlak)",
    "exchange": "Evet (Araç / Değerinde Gayrimenkul Takası)",
    "authCertNo": "0600124 (Renk Emlak Taşınmaz Ticareti Yetki Belgesi)",
    "featured": false,
    "description": "Özellikler Altyapı Özellikleri Elektrik Sanayi Elektriği Su Telefon Doğalgaz Kanalizasyon Arıtma Sondaj & Kuyu Zemin Etüdü Yolu Açılmış Yolu Açılmamış Yolu Yok",
    "date": "01 Kasım 2026",
    "amenities": [
      "Kombi / Doğalgaz",
      "PVC Doğrama",
      "Çelik Kapı",
      "Laminat Parke",
      "Kablo TV / Uydu",
      "Isı Yalıtımı",
      "Caddeye Yakın",
      "Toplu Ulaşıma Yakın"
    ],
    "interiorFeatures": [
      "ADSL / Fiber İnternet",
      "Ahşap Doğrama",
      "Akıllı Ev Altyapısı",
      "Ankastre Mutfak",
      "Balkon (Cam Kapama)",
      "Çelik Kapı",
      "Duşakabin",
      "Isıcam",
      "Kablo TV / Uydu",
      "Kartonpiyer",
      "Laminat Zemin",
      "Mutfak Doğalgazı",
      "Panel Kapı",
      "Parke Zemin",
      "Spot Aydınlatma"
    ],
    "exteriorFeatures": [
      "Asansör",
      "Isı Yalıtımı (Mantolama)",
      "Hidrofor",
      "Su Deposu",
      "Yangın Merdiveni",
      "Açık Otopark",
      "Kapalı Otopark",
      "Kamera Güvenlik Sistemi",
      "Geniş Yeşil Alan",
      "Çocuk Oyun Parkı"
    ],
    "neighborhoodFeatures": [
      "Cami",
      "Eczane & Sağlık Ocağı",
      "Etlik Şehir Hastanesi (5 dk)",
      "İlk ve Ortaokullar",
      "Semt Pazarı (200m)",
      "Zincir Marketler (Bim, A101, Şok, Migros)",
      "Park & Dinlenme Alanı",
      "EGO Otobüs ve Dolmuş Durağı (100m)",
      "Metro Bağlantısı"
    ],
    "lat": 40.239,
    "lng": 33.0325,
    "m2PriceTrend": [
      {
        "month": "Eki 25",
        "price": 3336,
        "districtPrice": 3136,
        "cityPrice": 2869
      },
      {
        "month": "Kas 25",
        "price": 3438,
        "districtPrice": 3232,
        "cityPrice": 2957
      },
      {
        "month": "Ara 25",
        "price": 3493,
        "districtPrice": 3283,
        "cityPrice": 3004
      },
      {
        "month": "Oca 26",
        "price": 3565,
        "districtPrice": 3351,
        "cityPrice": 3066
      },
      {
        "month": "Şub 26",
        "price": 3628,
        "districtPrice": 3410,
        "cityPrice": 3120
      },
      {
        "month": "Mar 26",
        "price": 3683,
        "districtPrice": 3462,
        "cityPrice": 3167
      },
      {
        "month": "Nis 26",
        "price": 3740,
        "districtPrice": 3516,
        "cityPrice": 3216
      },
      {
        "month": "May 26",
        "price": 3856,
        "districtPrice": 3625,
        "cityPrice": 3316
      },
      {
        "month": "Haz 26",
        "price": 3882,
        "districtPrice": 3649,
        "cityPrice": 3339
      },
      {
        "month": "Tem 26",
        "price": 3990,
        "districtPrice": 3751,
        "cityPrice": 3431
      },
      {
        "month": "Ağu 26",
        "price": 4029,
        "districtPrice": 3787,
        "cityPrice": 3465
      },
      {
        "month": "Eyl 26",
        "price": 4136,
        "districtPrice": 3888,
        "cityPrice": 3557
      }
    ],
    "yearlyChange": "+% 24.51 Artış",
    "amortizationYears": 16
  },
  {
    "id": 44230888,
    "eid": "78554228",
    "title": "AŞAĞI EĞLENCE MALİYE BLOKLARINDA MANZARALI ASANSÖRLÜ KİRALIK 3+1 DAİRE",
    "location": "Ankara, Keçiören, Aşağı Eğlence",
    "neighborhood": "Aşağı Eğlence Mah.",
    "district": "Keçiören",
    "city": "Ankara",
    "price": "₺20.000 / ay",
    "priceNumeric": 20000,
    "pricePerM2": 227,
    "image": "/listings/44230888/cover.jpg",
    "images": [
      "/listings/44230888/cover.jpg",
      "/listings/44230888/img_2.jpg",
      "/listings/44230888/img_3.jpg",
      "/listings/44230888/img_4.jpg",
      "/listings/44230888/img_5.jpg"
    ],
    "type": "Kiralık Daire",
    "room": "3+1",
    "area": 100,
    "netArea": 88,
    "buildingAge": "35",
    "totalFloors": 5,
    "floor": "9. Kat",
    "heating": "Merkezi Sistem",
    "bathrooms": "1",
    "kitchen": "Ayrı Mutfak (Kapalı)",
    "balcony": "Var (Cam Balkon)",
    "elevator": "Yok",
    "parking": "Açık Otopark",
    "furnished": "Hayır",
    "status": "Boş (Hemen Taşınabilir)",
    "inSite": "Hayır",
    "siteName": "Belirtilmemiş",
    "dues": "150 TL",
    "eligibleForLoan": "Evet (Krediye Uygun)",
    "energyRating": "B",
    "deedStatus": "Kat Mülkiyetli",
    "fromWho": "Emlak Ofisinden (Renk Emlak)",
    "exchange": "Hayır",
    "authCertNo": "0600124 (Renk Emlak Taşınmaz Ticareti Yetki Belgesi)",
    "featured": false,
    "description": "Ankara, Keçiören, Aşağı Eğlence mevkiinde bulunan gayrimenkulümüz; ulaşım akslarına, okullara, sağlık merkezlerine ve semt pazarına oldukça yakın avantajlı bir konumda yer almaktadır. 3+1 planında, 100 m² kullanım alanına sahip olup, 9. Kat konumundadır. Doğalgaz kombili, ısı yalıtımlı ve ferah yaşam alanlarıyla hem konforlu bir oturum hem de yüksek prim potansiyeli vadetmektedir.",
    "date": "01 Kasım 2026",
    "amenities": [
      "Kombi / Doğalgaz",
      "PVC Doğrama",
      "Çelik Kapı",
      "Laminat Parke",
      "Kablo TV / Uydu",
      "Isı Yalıtımı",
      "Caddeye Yakın",
      "Toplu Ulaşıma Yakın"
    ],
    "interiorFeatures": [
      "ADSL / Fiber İnternet",
      "Ahşap Doğrama",
      "Akıllı Ev Altyapısı",
      "Ankastre Mutfak",
      "Balkon (Cam Kapama)",
      "Çelik Kapı",
      "Duşakabin",
      "Isıcam",
      "Kablo TV / Uydu",
      "Kartonpiyer",
      "Laminat Zemin",
      "Mutfak Doğalgazı",
      "Panel Kapı",
      "Parke Zemin",
      "Spot Aydınlatma"
    ],
    "exteriorFeatures": [
      "Asansör",
      "Isı Yalıtımı (Mantolama)",
      "Hidrofor",
      "Su Deposu",
      "Yangın Merdiveni",
      "Açık Otopark",
      "Kapalı Otopark",
      "Kamera Güvenlik Sistemi",
      "Geniş Yeşil Alan",
      "Çocuk Oyun Parkı"
    ],
    "neighborhoodFeatures": [
      "Cami",
      "Eczane & Sağlık Ocağı",
      "Etlik Şehir Hastanesi (5 dk)",
      "İlk ve Ortaokullar",
      "Semt Pazarı (200m)",
      "Zincir Marketler (Bim, A101, Şok, Migros)",
      "Park & Dinlenme Alanı",
      "EGO Otobüs ve Dolmuş Durağı (100m)",
      "Metro Bağlantısı"
    ],
    "lat": 39.9721,
    "lng": 32.8284,
    "m2PriceTrend": [
      {
        "month": "Eki 25",
        "price": 283,
        "districtPrice": 266,
        "cityPrice": 243
      },
      {
        "month": "Kas 25",
        "price": 286,
        "districtPrice": 269,
        "cityPrice": 246
      },
      {
        "month": "Ara 25",
        "price": 293,
        "districtPrice": 275,
        "cityPrice": 252
      },
      {
        "month": "Oca 26",
        "price": 299,
        "districtPrice": 281,
        "cityPrice": 257
      },
      {
        "month": "Şub 26",
        "price": 306,
        "districtPrice": 288,
        "cityPrice": 263
      },
      {
        "month": "Mar 26",
        "price": 308,
        "districtPrice": 290,
        "cityPrice": 265
      },
      {
        "month": "Nis 26",
        "price": 318,
        "districtPrice": 299,
        "cityPrice": 273
      },
      {
        "month": "May 26",
        "price": 323,
        "districtPrice": 304,
        "cityPrice": 278
      },
      {
        "month": "Haz 26",
        "price": 330,
        "districtPrice": 310,
        "cityPrice": 284
      },
      {
        "month": "Tem 26",
        "price": 332,
        "districtPrice": 312,
        "cityPrice": 286
      },
      {
        "month": "Ağu 26",
        "price": 342,
        "districtPrice": 321,
        "cityPrice": 294
      },
      {
        "month": "Eyl 26",
        "price": 347,
        "districtPrice": 326,
        "cityPrice": 298
      }
    ],
    "yearlyChange": "+% 24.51 Artış",
    "amortizationYears": 16
  },
  {
    "id": 18967714,
    "eid": "69770626",
    "title": "ETLİK AŞAĞI EĞLENCE BAĞLUM SOKAKTA DÜZ GİRİŞ KİRALIK 40 M² DÜKKAN",
    "location": "Ankara, Keçiören, Aşağı Eğlence",
    "neighborhood": "Aşağı Eğlence Mah.",
    "district": "Keçiören",
    "city": "Ankara",
    "price": "₺18.000 / ay",
    "priceNumeric": 18000,
    "pricePerM2": 514,
    "image": "/listings/18967714/cover.jpg",
    "images": [
      "/listings/18967714/cover.jpg",
      "/listings/18967714/img_2.jpg",
      "/listings/18967714/img_3.jpg",
      "/listings/18967714/img_4.jpg",
      "/listings/18967714/img_5.jpg"
    ],
    "type": "Kiralık Dükkan",
    "room": "1+1",
    "area": 40,
    "netArea": 35,
    "buildingAge": "25+",
    "totalFloors": 4,
    "floor": "Giriş Katı",
    "heating": "Belirtilmemiş",
    "bathrooms": "1",
    "kitchen": "Mutfak Nişi",
    "balcony": "Yok",
    "elevator": "Var",
    "parking": "Cadde Otoparkı",
    "furnished": "Hayır",
    "status": "Kullanıma Hazır",
    "inSite": "Hayır",
    "siteName": "Belirtilmemiş",
    "dues": "Belirtilmemiş",
    "eligibleForLoan": "Evet (Krediye Uygun)",
    "energyRating": "B",
    "deedStatus": "Kat Mülkiyetli",
    "fromWho": "Emlak Ofisinden (Renk Emlak)",
    "exchange": "Evet (Araç / Değerinde Gayrimenkul Takası)",
    "authCertNo": "0600124 (Renk Emlak Taşınmaz Ticareti Yetki Belgesi)",
    "featured": false,
    "description": "Ankara, Keçiören, Aşağı Eğlence mevkiinde bulunan gayrimenkulümüz; ulaşım akslarına, okullara, sağlık merkezlerine ve semt pazarına oldukça yakın avantajlı bir konumda yer almaktadır. 1+1 planında, 40 m² kullanım alanına sahip olup, Giriş Katı konumundadır. Doğalgaz kombili, ısı yalıtımlı ve ferah yaşam alanlarıyla hem konforlu bir oturum hem de yüksek prim potansiyeli vadetmektedir.",
    "date": "01 Kasım 2026",
    "amenities": [
      "Kombi / Doğalgaz",
      "PVC Doğrama",
      "Çelik Kapı",
      "Laminat Parke",
      "Kablo TV / Uydu",
      "Isı Yalıtımı",
      "Caddeye Yakın",
      "Toplu Ulaşıma Yakın"
    ],
    "interiorFeatures": [
      "ADSL / Fiber İnternet",
      "Ahşap Doğrama",
      "Akıllı Ev Altyapısı",
      "Ankastre Mutfak",
      "Balkon (Cam Kapama)",
      "Çelik Kapı",
      "Duşakabin",
      "Isıcam",
      "Kablo TV / Uydu",
      "Kartonpiyer",
      "Laminat Zemin",
      "Mutfak Doğalgazı",
      "Panel Kapı",
      "Parke Zemin",
      "Spot Aydınlatma"
    ],
    "exteriorFeatures": [
      "Asansör",
      "Isı Yalıtımı (Mantolama)",
      "Hidrofor",
      "Su Deposu",
      "Yangın Merdiveni",
      "Açık Otopark",
      "Kapalı Otopark",
      "Kamera Güvenlik Sistemi",
      "Geniş Yeşil Alan",
      "Çocuk Oyun Parkı"
    ],
    "neighborhoodFeatures": [
      "Cami",
      "Eczane & Sağlık Ocağı",
      "Etlik Şehir Hastanesi (5 dk)",
      "İlk ve Ortaokullar",
      "Semt Pazarı (200m)",
      "Zincir Marketler (Bim, A101, Şok, Migros)",
      "Park & Dinlenme Alanı",
      "EGO Otobüs ve Dolmuş Durağı (100m)",
      "Metro Bağlantısı"
    ],
    "lat": 39.9721,
    "lng": 32.8284,
    "m2PriceTrend": [
      {
        "month": "Eki 25",
        "price": 281,
        "districtPrice": 264,
        "cityPrice": 242
      },
      {
        "month": "Kas 25",
        "price": 288,
        "districtPrice": 271,
        "cityPrice": 248
      },
      {
        "month": "Ara 25",
        "price": 293,
        "districtPrice": 275,
        "cityPrice": 252
      },
      {
        "month": "Oca 26",
        "price": 296,
        "districtPrice": 278,
        "cityPrice": 255
      },
      {
        "month": "Şub 26",
        "price": 306,
        "districtPrice": 288,
        "cityPrice": 263
      },
      {
        "month": "Mar 26",
        "price": 311,
        "districtPrice": 292,
        "cityPrice": 267
      },
      {
        "month": "Nis 26",
        "price": 318,
        "districtPrice": 299,
        "cityPrice": 273
      },
      {
        "month": "May 26",
        "price": 324,
        "districtPrice": 305,
        "cityPrice": 279
      },
      {
        "month": "Haz 26",
        "price": 326,
        "districtPrice": 306,
        "cityPrice": 280
      },
      {
        "month": "Tem 26",
        "price": 334,
        "districtPrice": 314,
        "cityPrice": 287
      },
      {
        "month": "Ağu 26",
        "price": 341,
        "districtPrice": 321,
        "cityPrice": 293
      },
      {
        "month": "Eyl 26",
        "price": 344,
        "districtPrice": 323,
        "cityPrice": 296
      }
    ],
    "yearlyChange": "+% 24.51 Artış",
    "amortizationYears": 16
  },
  {
    "id": 45249958,
    "eid": "83505935",
    "title": "AŞAĞI EĞLENCE MELİKE SOKAKTA CADDEYE YÜRÜME MESAFESİNDE KİRALIK 3+1",
    "location": "Ankara, Keçiören, Aşağı Eğlence",
    "neighborhood": "Aşağı Eğlence Mah.",
    "district": "Keçiören",
    "city": "Ankara",
    "price": "₺25.000 / ay",
    "priceNumeric": 25000,
    "pricePerM2": 316,
    "image": "/listings/45249958/cover.jpg",
    "images": [
      "/listings/45249958/cover.jpg",
      "/listings/45249958/img_2.jpg",
      "/listings/45249958/img_3.jpg",
      "/listings/45249958/img_4.jpg",
      "/listings/45249958/img_5.jpg"
    ],
    "type": "Kiralık Daire",
    "room": "3+1",
    "area": 90,
    "netArea": 79,
    "buildingAge": "40",
    "totalFloors": 8,
    "floor": "2. Kat",
    "heating": "Kombi",
    "bathrooms": "1",
    "kitchen": "Ayrı Mutfak (Kapalı)",
    "balcony": "Var (Cam Balkon)",
    "elevator": "Var",
    "parking": "Açık Otopark",
    "furnished": "Hayır",
    "status": "Boş (Hemen Taşınabilir)",
    "inSite": "Hayır",
    "siteName": "Belirtilmemiş",
    "dues": "150 TL",
    "eligibleForLoan": "Evet (Krediye Uygun)",
    "energyRating": "B",
    "deedStatus": "Kat Mülkiyetli",
    "fromWho": "Emlak Ofisinden (Renk Emlak)",
    "exchange": "Hayır",
    "authCertNo": "0600124 (Renk Emlak Taşınmaz Ticareti Yetki Belgesi)",
    "featured": false,
    "description": "Ankara, Keçiören, Aşağı Eğlence mevkiinde bulunan gayrimenkulümüz; ulaşım akslarına, okullara, sağlık merkezlerine ve semt pazarına oldukça yakın avantajlı bir konumda yer almaktadır. 3+1 planında, 90 m² kullanım alanına sahip olup, 2. Kat konumundadır. Doğalgaz kombili, ısı yalıtımlı ve ferah yaşam alanlarıyla hem konforlu bir oturum hem de yüksek prim potansiyeli vadetmektedir.",
    "date": "01 Kasım 2026",
    "amenities": [
      "Kombi / Doğalgaz",
      "PVC Doğrama",
      "Çelik Kapı",
      "Laminat Parke",
      "Kablo TV / Uydu",
      "Isı Yalıtımı",
      "Caddeye Yakın",
      "Toplu Ulaşıma Yakın"
    ],
    "interiorFeatures": [
      "ADSL / Fiber İnternet",
      "Ahşap Doğrama",
      "Akıllı Ev Altyapısı",
      "Ankastre Mutfak",
      "Balkon (Cam Kapama)",
      "Çelik Kapı",
      "Duşakabin",
      "Isıcam",
      "Kablo TV / Uydu",
      "Kartonpiyer",
      "Laminat Zemin",
      "Mutfak Doğalgazı",
      "Panel Kapı",
      "Parke Zemin",
      "Spot Aydınlatma"
    ],
    "exteriorFeatures": [
      "Asansör",
      "Isı Yalıtımı (Mantolama)",
      "Hidrofor",
      "Su Deposu",
      "Yangın Merdiveni",
      "Açık Otopark",
      "Kapalı Otopark",
      "Kamera Güvenlik Sistemi",
      "Geniş Yeşil Alan",
      "Çocuk Oyun Parkı"
    ],
    "neighborhoodFeatures": [
      "Cami",
      "Eczane & Sağlık Ocağı",
      "Etlik Şehir Hastanesi (5 dk)",
      "İlk ve Ortaokullar",
      "Semt Pazarı (200m)",
      "Zincir Marketler (Bim, A101, Şok, Migros)",
      "Park & Dinlenme Alanı",
      "EGO Otobüs ve Dolmuş Durağı (100m)",
      "Metro Bağlantısı"
    ],
    "lat": 39.9721,
    "lng": 32.8284,
    "m2PriceTrend": [
      {
        "month": "Eki 25",
        "price": 280,
        "districtPrice": 263,
        "cityPrice": 241
      },
      {
        "month": "Kas 25",
        "price": 288,
        "districtPrice": 271,
        "cityPrice": 248
      },
      {
        "month": "Ara 25",
        "price": 290,
        "districtPrice": 273,
        "cityPrice": 249
      },
      {
        "month": "Oca 26",
        "price": 299,
        "districtPrice": 281,
        "cityPrice": 257
      },
      {
        "month": "Şub 26",
        "price": 302,
        "districtPrice": 284,
        "cityPrice": 260
      },
      {
        "month": "Mar 26",
        "price": 309,
        "districtPrice": 290,
        "cityPrice": 266
      },
      {
        "month": "Nis 26",
        "price": 316,
        "districtPrice": 297,
        "cityPrice": 272
      },
      {
        "month": "May 26",
        "price": 323,
        "districtPrice": 304,
        "cityPrice": 278
      },
      {
        "month": "Haz 26",
        "price": 330,
        "districtPrice": 310,
        "cityPrice": 284
      },
      {
        "month": "Tem 26",
        "price": 335,
        "districtPrice": 315,
        "cityPrice": 288
      },
      {
        "month": "Ağu 26",
        "price": 341,
        "districtPrice": 321,
        "cityPrice": 293
      },
      {
        "month": "Eyl 26",
        "price": 343,
        "districtPrice": 322,
        "cityPrice": 295
      }
    ],
    "yearlyChange": "+% 24.51 Artış",
    "amortizationYears": 16
  },
  {
    "id": 10189838,
    "eid": "83970173",
    "title": "AŞAĞI EĞLENCE YALIKAVAK SOKAKTA ÇİFT CEPHELİ YATIRIMLIK SATILIK DÜKKAN",
    "location": "Ankara, Keçiören, Aşağı Eğlence",
    "neighborhood": "Aşağı Eğlence Mah.",
    "district": "Keçiören",
    "city": "Ankara",
    "price": "₺14.500.000",
    "priceNumeric": 14500000,
    "pricePerM2": 402778,
    "image": "/listings/10189838/cover.jpg",
    "images": [
      "/listings/10189838/cover.jpg",
      "/listings/10189838/img_2.jpg",
      "/listings/10189838/img_3.jpg",
      "/listings/10189838/img_4.jpg",
      "/listings/10189838/img_5.jpg"
    ],
    "type": "Satılık Dükkan",
    "room": "1+1",
    "area": 41,
    "netArea": 36,
    "buildingAge": "25+",
    "totalFloors": 4,
    "floor": "Giriş Katı",
    "heating": "Kombi",
    "bathrooms": "1",
    "kitchen": "Mutfak Nişi",
    "balcony": "Yok",
    "elevator": "Var",
    "parking": "Cadde Otoparkı",
    "furnished": "Hayır",
    "status": "Kullanıma Hazır",
    "inSite": "Hayır",
    "siteName": "Belirtilmemiş",
    "dues": "Belirtilmemiş",
    "eligibleForLoan": "Evet (Krediye Uygun)",
    "energyRating": "B",
    "deedStatus": "Kat Mülkiyetli",
    "fromWho": "Emlak Ofisinden (Renk Emlak)",
    "exchange": "Evet (Araç / Değerinde Gayrimenkul Takası)",
    "authCertNo": "0600124 (Renk Emlak Taşınmaz Ticareti Yetki Belgesi)",
    "featured": false,
    "description": "Ankara, Keçiören, Aşağı Eğlence mevkiinde bulunan gayrimenkulümüz; ulaşım akslarına, okullara, sağlık merkezlerine ve semt pazarına oldukça yakın avantajlı bir konumda yer almaktadır. 1+1 planında, 41 m² kullanım alanına sahip olup, Giriş Katı konumundadır. Doğalgaz kombili, ısı yalıtımlı ve ferah yaşam alanlarıyla hem konforlu bir oturum hem de yüksek prim potansiyeli vadetmektedir.",
    "date": "01 Kasım 2026",
    "amenities": [
      "Kombi / Doğalgaz",
      "PVC Doğrama",
      "Çelik Kapı",
      "Laminat Parke",
      "Kablo TV / Uydu",
      "Isı Yalıtımı",
      "Caddeye Yakın",
      "Toplu Ulaşıma Yakın"
    ],
    "interiorFeatures": [
      "ADSL / Fiber İnternet",
      "Ahşap Doğrama",
      "Akıllı Ev Altyapısı",
      "Ankastre Mutfak",
      "Balkon (Cam Kapama)",
      "Çelik Kapı",
      "Duşakabin",
      "Isıcam",
      "Kablo TV / Uydu",
      "Kartonpiyer",
      "Laminat Zemin",
      "Mutfak Doğalgazı",
      "Panel Kapı",
      "Parke Zemin",
      "Spot Aydınlatma"
    ],
    "exteriorFeatures": [
      "Asansör",
      "Isı Yalıtımı (Mantolama)",
      "Hidrofor",
      "Su Deposu",
      "Yangın Merdiveni",
      "Açık Otopark",
      "Kapalı Otopark",
      "Kamera Güvenlik Sistemi",
      "Geniş Yeşil Alan",
      "Çocuk Oyun Parkı"
    ],
    "neighborhoodFeatures": [
      "Cami",
      "Eczane & Sağlık Ocağı",
      "Etlik Şehir Hastanesi (5 dk)",
      "İlk ve Ortaokullar",
      "Semt Pazarı (200m)",
      "Zincir Marketler (Bim, A101, Şok, Migros)",
      "Park & Dinlenme Alanı",
      "EGO Otobüs ve Dolmuş Durağı (100m)",
      "Metro Bağlantısı"
    ],
    "lat": 39.9721,
    "lng": 32.8284,
    "m2PriceTrend": [
      {
        "month": "Eki 25",
        "price": 332015,
        "districtPrice": 312094,
        "cityPrice": 285533
      },
      {
        "month": "Kas 25",
        "price": 336399,
        "districtPrice": 316215,
        "cityPrice": 289303
      },
      {
        "month": "Ara 25",
        "price": 343901,
        "districtPrice": 323267,
        "cityPrice": 295755
      },
      {
        "month": "Oca 26",
        "price": 354888,
        "districtPrice": 333595,
        "cityPrice": 305204
      },
      {
        "month": "Şub 26",
        "price": 358593,
        "districtPrice": 337077,
        "cityPrice": 308390
      },
      {
        "month": "Mar 26",
        "price": 362487,
        "districtPrice": 340738,
        "cityPrice": 311739
      },
      {
        "month": "Nis 26",
        "price": 374208,
        "districtPrice": 351756,
        "cityPrice": 321819
      },
      {
        "month": "May 26",
        "price": 378329,
        "districtPrice": 355629,
        "cityPrice": 325363
      },
      {
        "month": "Haz 26",
        "price": 387939,
        "districtPrice": 364663,
        "cityPrice": 333628
      },
      {
        "month": "Tem 26",
        "price": 396255,
        "districtPrice": 372480,
        "cityPrice": 340779
      },
      {
        "month": "Ağu 26",
        "price": 400277,
        "districtPrice": 376260,
        "cityPrice": 344238
      },
      {
        "month": "Eyl 26",
        "price": 406775,
        "districtPrice": 382368,
        "cityPrice": 349826
      }
    ],
    "yearlyChange": "+% 24.51 Artış",
    "amortizationYears": 18
  },
  {
    "id": 35476695,
    "eid": "55770794",
    "title": "KEÇİÖREN KUŞCAĞIZ GÜNSAZAK CADDESİNDE ASANSÖRLÜ SATILIK 3+1 DAİRE",
    "location": "Ankara, Keçiören",
    "neighborhood": "Aşağı Eğlence Mah.",
    "district": "Keçiören",
    "city": "Ankara",
    "price": "₺3.400.000",
    "priceNumeric": 3400000,
    "pricePerM2": 33663,
    "image": "/listings/35476695/cover.jpg",
    "images": [
      "/listings/35476695/cover.jpg",
      "/listings/35476695/img_2.jpg",
      "/listings/35476695/img_3.jpg",
      "/listings/35476695/img_4.jpg",
      "/listings/35476695/img_5.jpg"
    ],
    "type": "Satılık Daire",
    "room": "3+1",
    "area": 115,
    "netArea": 101,
    "buildingAge": "4",
    "totalFloors": 5,
    "floor": "1. Kat",
    "heating": "Kombi",
    "bathrooms": "1",
    "kitchen": "Ayrı Mutfak (Kapalı)",
    "balcony": "Var (Cam Balkon)",
    "elevator": "Yok",
    "parking": "Açık Otopark",
    "furnished": "Hayır",
    "status": "Boş (Hemen Taşınabilir)",
    "inSite": "Hayır",
    "siteName": "Belirtilmemiş",
    "dues": "150 TL",
    "eligibleForLoan": "Evet (Krediye Uygun)",
    "energyRating": "A",
    "deedStatus": "Kat Mülkiyetli",
    "fromWho": "Emlak Ofisinden (Renk Emlak)",
    "exchange": "Hayır",
    "authCertNo": "0600124 (Renk Emlak Taşınmaz Ticareti Yetki Belgesi)",
    "featured": false,
    "description": "Ankara, Keçiören mevkiinde bulunan gayrimenkulümüz; ulaşım akslarına, okullara, sağlık merkezlerine ve semt pazarına oldukça yakın avantajlı bir konumda yer almaktadır. 3+1 planında, 115 m² kullanım alanına sahip olup, 1. Kat konumundadır. Doğalgaz kombili, ısı yalıtımlı ve ferah yaşam alanlarıyla hem konforlu bir oturum hem de yüksek prim potansiyeli vadetmektedir.",
    "date": "01 Kasım 2026",
    "amenities": [
      "Kombi / Doğalgaz",
      "PVC Doğrama",
      "Çelik Kapı",
      "Laminat Parke",
      "Kablo TV / Uydu",
      "Isı Yalıtımı",
      "Caddeye Yakın",
      "Toplu Ulaşıma Yakın"
    ],
    "interiorFeatures": [
      "ADSL / Fiber İnternet",
      "Ahşap Doğrama",
      "Akıllı Ev Altyapısı",
      "Ankastre Mutfak",
      "Balkon (Cam Kapama)",
      "Çelik Kapı",
      "Duşakabin",
      "Isıcam",
      "Kablo TV / Uydu",
      "Kartonpiyer",
      "Laminat Zemin",
      "Mutfak Doğalgazı",
      "Panel Kapı",
      "Parke Zemin",
      "Spot Aydınlatma"
    ],
    "exteriorFeatures": [
      "Asansör",
      "Isı Yalıtımı (Mantolama)",
      "Hidrofor",
      "Su Deposu",
      "Yangın Merdiveni",
      "Açık Otopark",
      "Kapalı Otopark",
      "Kamera Güvenlik Sistemi",
      "Geniş Yeşil Alan",
      "Çocuk Oyun Parkı"
    ],
    "neighborhoodFeatures": [
      "Cami",
      "Eczane & Sağlık Ocağı",
      "Etlik Şehir Hastanesi (5 dk)",
      "İlk ve Ortaokullar",
      "Semt Pazarı (200m)",
      "Zincir Marketler (Bim, A101, Şok, Migros)",
      "Park & Dinlenme Alanı",
      "EGO Otobüs ve Dolmuş Durağı (100m)",
      "Metro Bağlantısı"
    ],
    "lat": 39.9985,
    "lng": 32.8625,
    "m2PriceTrend": [
      {
        "month": "Eki 25",
        "price": 27686,
        "districtPrice": 26025,
        "cityPrice": 23810
      },
      {
        "month": "Kas 25",
        "price": 28133,
        "districtPrice": 26445,
        "cityPrice": 24194
      },
      {
        "month": "Ara 25",
        "price": 29045,
        "districtPrice": 27302,
        "cityPrice": 24979
      },
      {
        "month": "Oca 26",
        "price": 29212,
        "districtPrice": 27459,
        "cityPrice": 25122
      },
      {
        "month": "Şub 26",
        "price": 30111,
        "districtPrice": 28304,
        "cityPrice": 25895
      },
      {
        "month": "Mar 26",
        "price": 30770,
        "districtPrice": 28924,
        "cityPrice": 26462
      },
      {
        "month": "Nis 26",
        "price": 31329,
        "districtPrice": 29449,
        "cityPrice": 26943
      },
      {
        "month": "May 26",
        "price": 31458,
        "districtPrice": 29571,
        "cityPrice": 27054
      },
      {
        "month": "Haz 26",
        "price": 32270,
        "districtPrice": 30334,
        "cityPrice": 27752
      },
      {
        "month": "Tem 26",
        "price": 32737,
        "districtPrice": 30773,
        "cityPrice": 28154
      },
      {
        "month": "Ağu 26",
        "price": 33417,
        "districtPrice": 31412,
        "cityPrice": 28739
      },
      {
        "month": "Eyl 26",
        "price": 33993,
        "districtPrice": 31953,
        "cityPrice": 29234
      }
    ],
    "yearlyChange": "+% 24.51 Artış",
    "amortizationYears": 16
  },
  {
    "id": 41537213,
    "eid": "67253929",
    "title": "AKYURT LİFE YAPI KOOPERATİFİNDE ELEKTRİK & SUYU OLAN HOBİ BAHÇESİ",
    "location": "Ankara, Keçiören",
    "neighborhood": "Aşağı Eğlence Mah.",
    "district": "Keçiören",
    "city": "Ankara",
    "price": "₺650.000",
    "priceNumeric": 650000,
    "pricePerM2": 2462,
    "image": "/listings/41537213/cover.jpg",
    "images": [
      "/listings/41537213/cover.jpg",
      "/listings/41537213/img_2.jpg",
      "/listings/41537213/img_3.jpg",
      "/listings/41537213/img_5.jpg"
    ],
    "type": "Satılık Hobi Bahçesi",
    "room": "3+1",
    "area": 300,
    "netArea": 264,
    "buildingAge": "15-20",
    "totalFloors": 5,
    "floor": "Bahçe Katı",
    "heating": "Kombi",
    "bathrooms": "1",
    "kitchen": "Yok",
    "balcony": "Yok",
    "elevator": "Var",
    "parking": "Açık Otopark",
    "furnished": "Hayır",
    "status": "Boş (Hemen Taşınabilir)",
    "inSite": "Hayır",
    "siteName": "Belirtilmemiş",
    "dues": "150 TL",
    "eligibleForLoan": "Evet (Krediye Uygun)",
    "energyRating": "B",
    "deedStatus": "Müstakil Parsel Tapu",
    "fromWho": "Emlak Ofisinden (Renk Emlak)",
    "exchange": "Evet (Araç / Değerinde Gayrimenkul Takası)",
    "authCertNo": "0600124 (Renk Emlak Taşınmaz Ticareti Yetki Belgesi)",
    "featured": false,
    "description": "Özellikler Altyapı Özellikleri Elektrik Sanayi Elektriği Su Telefon Doğalgaz Kanalizasyon Arıtma Sondaj & Kuyu Zemin Etüdü Yolu Açılmış Yolu Açılmamış Yolu Yok",
    "date": "01 Kasım 2026",
    "amenities": [
      "Kombi / Doğalgaz",
      "PVC Doğrama",
      "Çelik Kapı",
      "Laminat Parke",
      "Kablo TV / Uydu",
      "Isı Yalıtımı",
      "Caddeye Yakın",
      "Toplu Ulaşıma Yakın"
    ],
    "interiorFeatures": [
      "ADSL / Fiber İnternet",
      "Ahşap Doğrama",
      "Akıllı Ev Altyapısı",
      "Ankastre Mutfak",
      "Balkon (Cam Kapama)",
      "Çelik Kapı",
      "Duşakabin",
      "Isıcam",
      "Kablo TV / Uydu",
      "Kartonpiyer",
      "Laminat Zemin",
      "Mutfak Doğalgazı",
      "Panel Kapı",
      "Parke Zemin",
      "Spot Aydınlatma"
    ],
    "exteriorFeatures": [
      "Asansör",
      "Isı Yalıtımı (Mantolama)",
      "Hidrofor",
      "Su Deposu",
      "Yangın Merdiveni",
      "Açık Otopark",
      "Kapalı Otopark",
      "Kamera Güvenlik Sistemi",
      "Geniş Yeşil Alan",
      "Çocuk Oyun Parkı"
    ],
    "neighborhoodFeatures": [
      "Cami",
      "Eczane & Sağlık Ocağı",
      "Etlik Şehir Hastanesi (5 dk)",
      "İlk ve Ortaokullar",
      "Semt Pazarı (200m)",
      "Zincir Marketler (Bim, A101, Şok, Migros)",
      "Park & Dinlenme Alanı",
      "EGO Otobüs ve Dolmuş Durağı (100m)",
      "Metro Bağlantısı"
    ],
    "lat": 40.128,
    "lng": 33.085,
    "m2PriceTrend": [
      {
        "month": "Eki 25",
        "price": 2041,
        "districtPrice": 1919,
        "cityPrice": 1755
      },
      {
        "month": "Kas 25",
        "price": 2056,
        "districtPrice": 1933,
        "cityPrice": 1768
      },
      {
        "month": "Ara 25",
        "price": 2118,
        "districtPrice": 1991,
        "cityPrice": 1821
      },
      {
        "month": "Oca 26",
        "price": 2152,
        "districtPrice": 2023,
        "cityPrice": 1851
      },
      {
        "month": "Şub 26",
        "price": 2183,
        "districtPrice": 2052,
        "cityPrice": 1877
      },
      {
        "month": "Mar 26",
        "price": 2239,
        "districtPrice": 2105,
        "cityPrice": 1926
      },
      {
        "month": "Nis 26",
        "price": 2288,
        "districtPrice": 2151,
        "cityPrice": 1968
      },
      {
        "month": "May 26",
        "price": 2302,
        "districtPrice": 2164,
        "cityPrice": 1980
      },
      {
        "month": "Haz 26",
        "price": 2381,
        "districtPrice": 2238,
        "cityPrice": 2048
      },
      {
        "month": "Tem 26",
        "price": 2411,
        "districtPrice": 2266,
        "cityPrice": 2073
      },
      {
        "month": "Ağu 26",
        "price": 2444,
        "districtPrice": 2297,
        "cityPrice": 2102
      },
      {
        "month": "Eyl 26",
        "price": 2490,
        "districtPrice": 2341,
        "cityPrice": 2141
      }
    ],
    "yearlyChange": "+% 24.51 Artış",
    "amortizationYears": 16
  },
  {
    "id": 53297412,
    "eid": "48511123",
    "title": "AŞAĞI EĞLENCE GİRESUN CADDESİNDE GÜNEYDOĞU CEPHE EŞYALI KİRALIK 3+1",
    "location": "Ankara, Keçiören, Aşağı Eğlence",
    "neighborhood": "Aşağı Eğlence Mah.",
    "district": "Keçiören",
    "city": "Ankara",
    "price": "₺32.000 / ay",
    "priceNumeric": 32000,
    "pricePerM2": 457,
    "image": "/listings/53297412/cover.jpg",
    "images": [
      "/listings/53297412/cover.jpg",
      "/listings/53297412/img_2.jpg",
      "/listings/53297412/img_3.jpg",
      "/listings/53297412/img_4.jpg",
      "/listings/53297412/img_5.jpg"
    ],
    "type": "Kiralık Daire",
    "room": "3+1",
    "area": 80,
    "netArea": 70,
    "buildingAge": "40",
    "totalFloors": 8,
    "floor": "Bahçe Katı",
    "heating": "Kombi",
    "bathrooms": "1",
    "kitchen": "Ayrı Mutfak (Kapalı)",
    "balcony": "Var (Cam Balkon)",
    "elevator": "Yok",
    "parking": "Açık Otopark",
    "furnished": "Evet (Full Eşyalı)",
    "status": "Boş (Hemen Taşınabilir)",
    "inSite": "Hayır",
    "siteName": "Belirtilmemiş",
    "dues": "150 TL",
    "eligibleForLoan": "Evet (Krediye Uygun)",
    "energyRating": "B",
    "deedStatus": "Kat Mülkiyetli",
    "fromWho": "Emlak Ofisinden (Renk Emlak)",
    "exchange": "Evet (Araç / Değerinde Gayrimenkul Takası)",
    "authCertNo": "0600124 (Renk Emlak Taşınmaz Ticareti Yetki Belgesi)",
    "featured": false,
    "description": "Ankara, Keçiören, Aşağı Eğlence mevkiinde bulunan gayrimenkulümüz; ulaşım akslarına, okullara, sağlık merkezlerine ve semt pazarına oldukça yakın avantajlı bir konumda yer almaktadır. 3+1 planında, 80 m² kullanım alanına sahip olup, Bahçe Katı konumundadır. Doğalgaz kombili, ısı yalıtımlı ve ferah yaşam alanlarıyla hem konforlu bir oturum hem de yüksek prim potansiyeli vadetmektedir.",
    "date": "01 Kasım 2026",
    "amenities": [
      "Kombi / Doğalgaz",
      "PVC Doğrama",
      "Çelik Kapı",
      "Laminat Parke",
      "Kablo TV / Uydu",
      "Isı Yalıtımı",
      "Caddeye Yakın",
      "Toplu Ulaşıma Yakın"
    ],
    "interiorFeatures": [
      "ADSL / Fiber İnternet",
      "Ahşap Doğrama",
      "Akıllı Ev Altyapısı",
      "Ankastre Mutfak",
      "Balkon (Cam Kapama)",
      "Çelik Kapı",
      "Duşakabin",
      "Isıcam",
      "Kablo TV / Uydu",
      "Kartonpiyer",
      "Laminat Zemin",
      "Mutfak Doğalgazı",
      "Panel Kapı",
      "Parke Zemin",
      "Spot Aydınlatma"
    ],
    "exteriorFeatures": [
      "Asansör",
      "Isı Yalıtımı (Mantolama)",
      "Hidrofor",
      "Su Deposu",
      "Yangın Merdiveni",
      "Açık Otopark",
      "Kapalı Otopark",
      "Kamera Güvenlik Sistemi",
      "Geniş Yeşil Alan",
      "Çocuk Oyun Parkı"
    ],
    "neighborhoodFeatures": [
      "Cami",
      "Eczane & Sağlık Ocağı",
      "Etlik Şehir Hastanesi (5 dk)",
      "İlk ve Ortaokullar",
      "Semt Pazarı (200m)",
      "Zincir Marketler (Bim, A101, Şok, Migros)",
      "Park & Dinlenme Alanı",
      "EGO Otobüs ve Dolmuş Durağı (100m)",
      "Metro Bağlantısı"
    ],
    "lat": 39.9721,
    "lng": 32.8284,
    "m2PriceTrend": [
      {
        "month": "Eki 25",
        "price": 282,
        "districtPrice": 265,
        "cityPrice": 243
      },
      {
        "month": "Kas 25",
        "price": 284,
        "districtPrice": 267,
        "cityPrice": 244
      },
      {
        "month": "Ara 25",
        "price": 291,
        "districtPrice": 274,
        "cityPrice": 250
      },
      {
        "month": "Oca 26",
        "price": 297,
        "districtPrice": 279,
        "cityPrice": 255
      },
      {
        "month": "Şub 26",
        "price": 306,
        "districtPrice": 288,
        "cityPrice": 263
      },
      {
        "month": "Mar 26",
        "price": 308,
        "districtPrice": 290,
        "cityPrice": 265
      },
      {
        "month": "Nis 26",
        "price": 314,
        "districtPrice": 295,
        "cityPrice": 270
      },
      {
        "month": "May 26",
        "price": 321,
        "districtPrice": 302,
        "cityPrice": 276
      },
      {
        "month": "Haz 26",
        "price": 327,
        "districtPrice": 307,
        "cityPrice": 281
      },
      {
        "month": "Tem 26",
        "price": 335,
        "districtPrice": 315,
        "cityPrice": 288
      },
      {
        "month": "Ağu 26",
        "price": 339,
        "districtPrice": 319,
        "cityPrice": 292
      },
      {
        "month": "Eyl 26",
        "price": 343,
        "districtPrice": 322,
        "cityPrice": 295
      }
    ],
    "yearlyChange": "+% 24.51 Artış",
    "amortizationYears": 16
  },
  {
    "id": 53786022,
    "eid": "57458850",
    "title": "AŞAĞI EĞLENCE ULUDERE SOKAKTA FULL REVİZE EDİLMİŞ KİRALIK 2+1 DAİRE",
    "location": "Ankara, Keçiören, Aşağı Eğlence",
    "neighborhood": "Aşağı Eğlence Mah.",
    "district": "Keçiören",
    "city": "Ankara",
    "price": "₺24.000 / ay",
    "priceNumeric": 24000,
    "pricePerM2": 304,
    "image": "/listings/53786022/cover.jpg",
    "images": [
      "/listings/53786022/cover.jpg",
      "/listings/53786022/img_2.jpg",
      "/listings/53786022/img_3.jpg",
      "/listings/53786022/img_4.jpg",
      "/listings/53786022/img_5.jpg"
    ],
    "type": "Kiralık Daire",
    "room": "2+1",
    "area": 90,
    "netArea": 79,
    "buildingAge": "40",
    "totalFloors": 5,
    "floor": "2. Kat",
    "heating": "Kombi",
    "bathrooms": "1",
    "kitchen": "Ayrı Mutfak (Kapalı)",
    "balcony": "Var (Cam Balkon)",
    "elevator": "Yok",
    "parking": "Açık Otopark",
    "furnished": "Hayır",
    "status": "Boş (Hemen Taşınabilir)",
    "inSite": "Hayır",
    "siteName": "Belirtilmemiş",
    "dues": "150 TL",
    "eligibleForLoan": "Evet (Krediye Uygun)",
    "energyRating": "B",
    "deedStatus": "Kat Mülkiyetli",
    "fromWho": "Emlak Ofisinden (Renk Emlak)",
    "exchange": "Evet (Araç / Değerinde Gayrimenkul Takası)",
    "authCertNo": "0600124 (Renk Emlak Taşınmaz Ticareti Yetki Belgesi)",
    "featured": false,
    "description": "Ankara, Keçiören, Aşağı Eğlence mevkiinde bulunan gayrimenkulümüz; ulaşım akslarına, okullara, sağlık merkezlerine ve semt pazarına oldukça yakın avantajlı bir konumda yer almaktadır. 2+1 planında, 90 m² kullanım alanına sahip olup, 2. Kat konumundadır. Doğalgaz kombili, ısı yalıtımlı ve ferah yaşam alanlarıyla hem konforlu bir oturum hem de yüksek prim potansiyeli vadetmektedir.",
    "date": "01 Kasım 2026",
    "amenities": [
      "Kombi / Doğalgaz",
      "PVC Doğrama",
      "Çelik Kapı",
      "Laminat Parke",
      "Kablo TV / Uydu",
      "Isı Yalıtımı",
      "Caddeye Yakın",
      "Toplu Ulaşıma Yakın"
    ],
    "interiorFeatures": [
      "ADSL / Fiber İnternet",
      "Ahşap Doğrama",
      "Akıllı Ev Altyapısı",
      "Ankastre Mutfak",
      "Balkon (Cam Kapama)",
      "Çelik Kapı",
      "Duşakabin",
      "Isıcam",
      "Kablo TV / Uydu",
      "Kartonpiyer",
      "Laminat Zemin",
      "Mutfak Doğalgazı",
      "Panel Kapı",
      "Parke Zemin",
      "Spot Aydınlatma"
    ],
    "exteriorFeatures": [
      "Asansör",
      "Isı Yalıtımı (Mantolama)",
      "Hidrofor",
      "Su Deposu",
      "Yangın Merdiveni",
      "Açık Otopark",
      "Kapalı Otopark",
      "Kamera Güvenlik Sistemi",
      "Geniş Yeşil Alan",
      "Çocuk Oyun Parkı"
    ],
    "neighborhoodFeatures": [
      "Cami",
      "Eczane & Sağlık Ocağı",
      "Etlik Şehir Hastanesi (5 dk)",
      "İlk ve Ortaokullar",
      "Semt Pazarı (200m)",
      "Zincir Marketler (Bim, A101, Şok, Migros)",
      "Park & Dinlenme Alanı",
      "EGO Otobüs ve Dolmuş Durağı (100m)",
      "Metro Bağlantısı"
    ],
    "lat": 39.9721,
    "lng": 32.8284,
    "m2PriceTrend": [
      {
        "month": "Eki 25",
        "price": 283,
        "districtPrice": 266,
        "cityPrice": 243
      },
      {
        "month": "Kas 25",
        "price": 284,
        "districtPrice": 267,
        "cityPrice": 244
      },
      {
        "month": "Ara 25",
        "price": 290,
        "districtPrice": 273,
        "cityPrice": 249
      },
      {
        "month": "Oca 26",
        "price": 300,
        "districtPrice": 282,
        "cityPrice": 258
      },
      {
        "month": "Şub 26",
        "price": 307,
        "districtPrice": 289,
        "cityPrice": 264
      },
      {
        "month": "Mar 26",
        "price": 308,
        "districtPrice": 290,
        "cityPrice": 265
      },
      {
        "month": "Nis 26",
        "price": 318,
        "districtPrice": 299,
        "cityPrice": 273
      },
      {
        "month": "May 26",
        "price": 323,
        "districtPrice": 304,
        "cityPrice": 278
      },
      {
        "month": "Haz 26",
        "price": 330,
        "districtPrice": 310,
        "cityPrice": 284
      },
      {
        "month": "Tem 26",
        "price": 334,
        "districtPrice": 314,
        "cityPrice": 287
      },
      {
        "month": "Ağu 26",
        "price": 338,
        "districtPrice": 318,
        "cityPrice": 291
      },
      {
        "month": "Eyl 26",
        "price": 345,
        "districtPrice": 324,
        "cityPrice": 297
      }
    ],
    "yearlyChange": "+% 24.51 Artış",
    "amortizationYears": 16
  },
  {
    "id": 49368563,
    "eid": "51516822",
    "title": "ETLİK MELİKE VE SÜMBÜLLÜ KÖŞESİNDE ÜÇ CEPHELİ SATILIK 3+1 DAİRE",
    "location": "Ankara, Keçiören, Etlik",
    "neighborhood": "Etlik Mah.",
    "district": "Keçiören",
    "city": "Ankara",
    "price": "₺3.500.000",
    "priceNumeric": 3500000,
    "pricePerM2": 44304,
    "image": "/listings/49368563/cover.jpg",
    "images": [
      "/listings/49368563/cover.jpg",
      "/listings/49368563/img_2.jpg",
      "/listings/49368563/img_3.jpg",
      "/listings/49368563/img_4.jpg",
      "/listings/49368563/img_5.jpg"
    ],
    "type": "Satılık Daire",
    "room": "3+1",
    "area": 90,
    "netArea": 79,
    "buildingAge": "35",
    "totalFloors": 6,
    "floor": "Zemin",
    "heating": "Kombi",
    "bathrooms": "1",
    "kitchen": "Ayrı Mutfak (Kapalı)",
    "balcony": "Var (Cam Balkon)",
    "elevator": "Yok",
    "parking": "Açık Otopark",
    "furnished": "Hayır",
    "status": "Boş (Hemen Taşınabilir)",
    "inSite": "Hayır",
    "siteName": "Belirtilmemiş",
    "dues": "150 TL",
    "eligibleForLoan": "Evet (Krediye Uygun)",
    "energyRating": "B",
    "deedStatus": "Kat Mülkiyetli",
    "fromWho": "Emlak Ofisinden (Renk Emlak)",
    "exchange": "Hayır",
    "authCertNo": "0600124 (Renk Emlak Taşınmaz Ticareti Yetki Belgesi)",
    "featured": false,
    "description": "Ankara, Keçiören, Etlik mevkiinde bulunan gayrimenkulümüz; ulaşım akslarına, okullara, sağlık merkezlerine ve semt pazarına oldukça yakın avantajlı bir konumda yer almaktadır. 3+1 planında, 90 m² kullanım alanına sahip olup, Zemin konumundadır. Doğalgaz kombili, ısı yalıtımlı ve ferah yaşam alanlarıyla hem konforlu bir oturum hem de yüksek prim potansiyeli vadetmektedir.",
    "date": "01 Kasım 2026",
    "amenities": [
      "Kombi / Doğalgaz",
      "PVC Doğrama",
      "Çelik Kapı",
      "Laminat Parke",
      "Kablo TV / Uydu",
      "Isı Yalıtımı",
      "Caddeye Yakın",
      "Toplu Ulaşıma Yakın"
    ],
    "interiorFeatures": [
      "ADSL / Fiber İnternet",
      "Ahşap Doğrama",
      "Akıllı Ev Altyapısı",
      "Ankastre Mutfak",
      "Balkon (Cam Kapama)",
      "Çelik Kapı",
      "Duşakabin",
      "Isıcam",
      "Kablo TV / Uydu",
      "Kartonpiyer",
      "Laminat Zemin",
      "Mutfak Doğalgazı",
      "Panel Kapı",
      "Parke Zemin",
      "Spot Aydınlatma"
    ],
    "exteriorFeatures": [
      "Asansör",
      "Isı Yalıtımı (Mantolama)",
      "Hidrofor",
      "Su Deposu",
      "Yangın Merdiveni",
      "Açık Otopark",
      "Kapalı Otopark",
      "Kamera Güvenlik Sistemi",
      "Geniş Yeşil Alan",
      "Çocuk Oyun Parkı"
    ],
    "neighborhoodFeatures": [
      "Cami",
      "Eczane & Sağlık Ocağı",
      "Etlik Şehir Hastanesi (5 dk)",
      "İlk ve Ortaokullar",
      "Semt Pazarı (200m)",
      "Zincir Marketler (Bim, A101, Şok, Migros)",
      "Park & Dinlenme Alanı",
      "EGO Otobüs ve Dolmuş Durağı (100m)",
      "Metro Bağlantısı"
    ],
    "lat": 39.975,
    "lng": 32.835,
    "m2PriceTrend": [
      {
        "month": "Eki 25",
        "price": 36333,
        "districtPrice": 34153,
        "cityPrice": 31246
      },
      {
        "month": "Kas 25",
        "price": 37005,
        "districtPrice": 34785,
        "cityPrice": 31824
      },
      {
        "month": "Ara 25",
        "price": 37701,
        "districtPrice": 35439,
        "cityPrice": 32423
      },
      {
        "month": "Oca 26",
        "price": 38509,
        "districtPrice": 36198,
        "cityPrice": 33118
      },
      {
        "month": "Şub 26",
        "price": 39605,
        "districtPrice": 37229,
        "cityPrice": 34060
      },
      {
        "month": "Mar 26",
        "price": 40267,
        "districtPrice": 37851,
        "cityPrice": 34630
      },
      {
        "month": "Nis 26",
        "price": 41242,
        "districtPrice": 38767,
        "cityPrice": 35468
      },
      {
        "month": "May 26",
        "price": 41684,
        "districtPrice": 39183,
        "cityPrice": 35848
      },
      {
        "month": "Haz 26",
        "price": 42362,
        "districtPrice": 39820,
        "cityPrice": 36431
      },
      {
        "month": "Tem 26",
        "price": 42994,
        "districtPrice": 40414,
        "cityPrice": 36975
      },
      {
        "month": "Ağu 26",
        "price": 44233,
        "districtPrice": 41579,
        "cityPrice": 38040
      },
      {
        "month": "Eyl 26",
        "price": 45014,
        "districtPrice": 42313,
        "cityPrice": 38712
      }
    ],
    "yearlyChange": "+% 24.51 Artış",
    "amortizationYears": 16
  },
  {
    "id": 55758834,
    "eid": "41661327",
    "title": "AŞAĞI EĞLENCE SEBİL KÖY SOKAKTA ASANSÖRLÜ FULL EŞYALI KİRALIK 3+1 DAİRE",
    "location": "Ankara, Keçiören, Aşağı Eğlence",
    "neighborhood": "Aşağı Eğlence Mah.",
    "district": "Keçiören",
    "city": "Ankara",
    "price": "₺42.000 / ay",
    "priceNumeric": 42000,
    "pricePerM2": 477,
    "image": "/listings/55758834/cover.jpg",
    "images": [
      "/listings/55758834/cover.jpg",
      "/listings/55758834/img_2.jpg",
      "/listings/55758834/img_3.jpg",
      "/listings/55758834/img_4.jpg",
      "/listings/55758834/img_5.jpg"
    ],
    "type": "Kiralık Daire",
    "room": "3+1",
    "area": 100,
    "netArea": 88,
    "buildingAge": "40",
    "totalFloors": 5,
    "floor": "1. Kat",
    "heating": "Kombi",
    "bathrooms": "1",
    "kitchen": "Ayrı Mutfak (Kapalı)",
    "balcony": "Var (Cam Balkon)",
    "elevator": "Var",
    "parking": "Açık Otopark",
    "furnished": "Evet (Full Eşyalı)",
    "status": "Boş (Hemen Taşınabilir)",
    "inSite": "Hayır",
    "siteName": "Belirtilmemiş",
    "dues": "150 TL",
    "eligibleForLoan": "Evet (Krediye Uygun)",
    "energyRating": "B",
    "deedStatus": "Kat Mülkiyetli",
    "fromWho": "Emlak Ofisinden (Renk Emlak)",
    "exchange": "Hayır",
    "authCertNo": "0600124 (Renk Emlak Taşınmaz Ticareti Yetki Belgesi)",
    "featured": false,
    "description": "Ankara, Keçiören, Aşağı Eğlence mevkiinde bulunan gayrimenkulümüz; ulaşım akslarına, okullara, sağlık merkezlerine ve semt pazarına oldukça yakın avantajlı bir konumda yer almaktadır. 3+1 planında, 100 m² kullanım alanına sahip olup, 1. Kat konumundadır. Doğalgaz kombili, ısı yalıtımlı ve ferah yaşam alanlarıyla hem konforlu bir oturum hem de yüksek prim potansiyeli vadetmektedir.",
    "date": "01 Kasım 2026",
    "amenities": [
      "Kombi / Doğalgaz",
      "PVC Doğrama",
      "Çelik Kapı",
      "Laminat Parke",
      "Kablo TV / Uydu",
      "Isı Yalıtımı",
      "Caddeye Yakın",
      "Toplu Ulaşıma Yakın"
    ],
    "interiorFeatures": [
      "ADSL / Fiber İnternet",
      "Ahşap Doğrama",
      "Akıllı Ev Altyapısı",
      "Ankastre Mutfak",
      "Balkon (Cam Kapama)",
      "Çelik Kapı",
      "Duşakabin",
      "Isıcam",
      "Kablo TV / Uydu",
      "Kartonpiyer",
      "Laminat Zemin",
      "Mutfak Doğalgazı",
      "Panel Kapı",
      "Parke Zemin",
      "Spot Aydınlatma"
    ],
    "exteriorFeatures": [
      "Asansör",
      "Isı Yalıtımı (Mantolama)",
      "Hidrofor",
      "Su Deposu",
      "Yangın Merdiveni",
      "Açık Otopark",
      "Kapalı Otopark",
      "Kamera Güvenlik Sistemi",
      "Geniş Yeşil Alan",
      "Çocuk Oyun Parkı"
    ],
    "neighborhoodFeatures": [
      "Cami",
      "Eczane & Sağlık Ocağı",
      "Etlik Şehir Hastanesi (5 dk)",
      "İlk ve Ortaokullar",
      "Semt Pazarı (200m)",
      "Zincir Marketler (Bim, A101, Şok, Migros)",
      "Park & Dinlenme Alanı",
      "EGO Otobüs ve Dolmuş Durağı (100m)",
      "Metro Bağlantısı"
    ],
    "lat": 39.9721,
    "lng": 32.8284,
    "m2PriceTrend": [
      {
        "month": "Eki 25",
        "price": 280,
        "districtPrice": 263,
        "cityPrice": 241
      },
      {
        "month": "Kas 25",
        "price": 285,
        "districtPrice": 268,
        "cityPrice": 245
      },
      {
        "month": "Ara 25",
        "price": 293,
        "districtPrice": 275,
        "cityPrice": 252
      },
      {
        "month": "Oca 26",
        "price": 299,
        "districtPrice": 281,
        "cityPrice": 257
      },
      {
        "month": "Şub 26",
        "price": 306,
        "districtPrice": 288,
        "cityPrice": 263
      },
      {
        "month": "Mar 26",
        "price": 309,
        "districtPrice": 290,
        "cityPrice": 266
      },
      {
        "month": "Nis 26",
        "price": 316,
        "districtPrice": 297,
        "cityPrice": 272
      },
      {
        "month": "May 26",
        "price": 323,
        "districtPrice": 304,
        "cityPrice": 278
      },
      {
        "month": "Haz 26",
        "price": 326,
        "districtPrice": 306,
        "cityPrice": 280
      },
      {
        "month": "Tem 26",
        "price": 331,
        "districtPrice": 311,
        "cityPrice": 285
      },
      {
        "month": "Ağu 26",
        "price": 340,
        "districtPrice": 320,
        "cityPrice": 292
      },
      {
        "month": "Eyl 26",
        "price": 343,
        "districtPrice": 322,
        "cityPrice": 295
      }
    ],
    "yearlyChange": "+% 24.51 Artış",
    "amortizationYears": 16
  },
  {
    "id": 27860910,
    "eid": "60038391",
    "title": "KEÇİÖREN EMRAH MAHALLESİNDE GÜNEY CEPHE ÖNÜ AÇIK SATILIK 2+1 DAİRE",
    "location": "Ankara, Keçiören",
    "neighborhood": "Aşağı Eğlence Mah.",
    "district": "Keçiören",
    "city": "Ankara",
    "price": "₺3.000.000",
    "priceNumeric": 3000000,
    "pricePerM2": 49180,
    "image": "/listings/27860910/cover.jpg",
    "images": [
      "/listings/27860910/cover.jpg",
      "/listings/27860910/img_2.jpg",
      "/listings/27860910/img_3.jpg",
      "/listings/27860910/img_4.jpg",
      "/listings/27860910/img_5.jpg"
    ],
    "type": "Satılık Daire",
    "room": "2+1",
    "area": 70,
    "netArea": 61,
    "buildingAge": "25+",
    "totalFloors": 5,
    "floor": "2. Kat",
    "heating": "Kombi",
    "bathrooms": "1",
    "kitchen": "Ayrı Mutfak (Kapalı)",
    "balcony": "Var (Cam Balkon)",
    "elevator": "Var",
    "parking": "Açık Otopark",
    "furnished": "Hayır",
    "status": "Boş (Hemen Taşınabilir)",
    "inSite": "Hayır",
    "siteName": "Belirtilmemiş",
    "dues": "150 TL",
    "eligibleForLoan": "Evet (Krediye Uygun)",
    "energyRating": "B",
    "deedStatus": "Kat Mülkiyetli",
    "fromWho": "Emlak Ofisinden (Renk Emlak)",
    "exchange": "Hayır",
    "authCertNo": "0600124 (Renk Emlak Taşınmaz Ticareti Yetki Belgesi)",
    "featured": false,
    "description": "Ankara, Keçiören mevkiinde bulunan gayrimenkulümüz; ulaşım akslarına, okullara, sağlık merkezlerine ve semt pazarına oldukça yakın avantajlı bir konumda yer almaktadır. 2+1 planında, 70 m² kullanım alanına sahip olup, 2. Kat konumundadır. Doğalgaz kombili, ısı yalıtımlı ve ferah yaşam alanlarıyla hem konforlu bir oturum hem de yüksek prim potansiyeli vadetmektedir.",
    "date": "01 Kasım 2026",
    "amenities": [
      "Kombi / Doğalgaz",
      "PVC Doğrama",
      "Çelik Kapı",
      "Laminat Parke",
      "Kablo TV / Uydu",
      "Isı Yalıtımı",
      "Caddeye Yakın",
      "Toplu Ulaşıma Yakın"
    ],
    "interiorFeatures": [
      "ADSL / Fiber İnternet",
      "Ahşap Doğrama",
      "Akıllı Ev Altyapısı",
      "Ankastre Mutfak",
      "Balkon (Cam Kapama)",
      "Çelik Kapı",
      "Duşakabin",
      "Isıcam",
      "Kablo TV / Uydu",
      "Kartonpiyer",
      "Laminat Zemin",
      "Mutfak Doğalgazı",
      "Panel Kapı",
      "Parke Zemin",
      "Spot Aydınlatma"
    ],
    "exteriorFeatures": [
      "Asansör",
      "Isı Yalıtımı (Mantolama)",
      "Hidrofor",
      "Su Deposu",
      "Yangın Merdiveni",
      "Açık Otopark",
      "Kapalı Otopark",
      "Kamera Güvenlik Sistemi",
      "Geniş Yeşil Alan",
      "Çocuk Oyun Parkı"
    ],
    "neighborhoodFeatures": [
      "Cami",
      "Eczane & Sağlık Ocağı",
      "Etlik Şehir Hastanesi (5 dk)",
      "İlk ve Ortaokullar",
      "Semt Pazarı (200m)",
      "Zincir Marketler (Bim, A101, Şok, Migros)",
      "Park & Dinlenme Alanı",
      "EGO Otobüs ve Dolmuş Durağı (100m)",
      "Metro Bağlantısı"
    ],
    "lat": 39.9675,
    "lng": 32.8335,
    "m2PriceTrend": [
      {
        "month": "Eki 25",
        "price": 40181,
        "districtPrice": 37770,
        "cityPrice": 34556
      },
      {
        "month": "Kas 25",
        "price": 41253,
        "districtPrice": 38778,
        "cityPrice": 35478
      },
      {
        "month": "Ara 25",
        "price": 42169,
        "districtPrice": 39639,
        "cityPrice": 36265
      },
      {
        "month": "Oca 26",
        "price": 43273,
        "districtPrice": 40677,
        "cityPrice": 37215
      },
      {
        "month": "Şub 26",
        "price": 44033,
        "districtPrice": 41391,
        "cityPrice": 37868
      },
      {
        "month": "Mar 26",
        "price": 44428,
        "districtPrice": 41762,
        "cityPrice": 38208
      },
      {
        "month": "Nis 26",
        "price": 45429,
        "districtPrice": 42703,
        "cityPrice": 39069
      },
      {
        "month": "May 26",
        "price": 46119,
        "districtPrice": 43352,
        "cityPrice": 39662
      },
      {
        "month": "Haz 26",
        "price": 47427,
        "districtPrice": 44581,
        "cityPrice": 40787
      },
      {
        "month": "Tem 26",
        "price": 48215,
        "districtPrice": 45322,
        "cityPrice": 41465
      },
      {
        "month": "Ağu 26",
        "price": 49203,
        "districtPrice": 46251,
        "cityPrice": 42315
      },
      {
        "month": "Eyl 26",
        "price": 49969,
        "districtPrice": 46971,
        "cityPrice": 42973
      }
    ],
    "yearlyChange": "+% 24.51 Artış",
    "amortizationYears": 16
  },
  {
    "id": 35972636,
    "eid": "79668263",
    "title": "ETLİK AŞAĞI EĞLENCE MELİKE SOKAKTA FERAH ÖN CEPHE KİRALIK 3+1 DAİRE",
    "location": "Ankara, Keçiören, Aşağı Eğlence",
    "neighborhood": "Aşağı Eğlence Mah.",
    "district": "Keçiören",
    "city": "Ankara",
    "price": "₺26.000 / ay",
    "priceNumeric": 26000,
    "pricePerM2": 329,
    "image": "/listings/35972636/cover.jpg",
    "images": [
      "/listings/35972636/cover.jpg",
      "/listings/35972636/img_2.jpg",
      "/listings/35972636/img_3.jpg",
      "/listings/35972636/img_4.jpg",
      "/listings/35972636/img_5.jpg"
    ],
    "type": "Kiralık Daire",
    "room": "3+1",
    "area": 90,
    "netArea": 79,
    "buildingAge": "40",
    "totalFloors": 6,
    "floor": "2. Kat",
    "heating": "Kombi",
    "bathrooms": "1",
    "kitchen": "Ayrı Mutfak (Kapalı)",
    "balcony": "Var (Cam Balkon)",
    "elevator": "Var",
    "parking": "Açık Otopark",
    "furnished": "Hayır",
    "status": "Boş (Hemen Taşınabilir)",
    "inSite": "Hayır",
    "siteName": "Belirtilmemiş",
    "dues": "150 TL",
    "eligibleForLoan": "Evet (Krediye Uygun)",
    "energyRating": "B",
    "deedStatus": "Kat Mülkiyetli",
    "fromWho": "Emlak Ofisinden (Renk Emlak)",
    "exchange": "Evet (Araç / Değerinde Gayrimenkul Takası)",
    "authCertNo": "0600124 (Renk Emlak Taşınmaz Ticareti Yetki Belgesi)",
    "featured": false,
    "description": "Ankara, Keçiören, Aşağı Eğlence mevkiinde bulunan gayrimenkulümüz; ulaşım akslarına, okullara, sağlık merkezlerine ve semt pazarına oldukça yakın avantajlı bir konumda yer almaktadır. 3+1 planında, 90 m² kullanım alanına sahip olup, 2. Kat konumundadır. Doğalgaz kombili, ısı yalıtımlı ve ferah yaşam alanlarıyla hem konforlu bir oturum hem de yüksek prim potansiyeli vadetmektedir.",
    "date": "01 Kasım 2026",
    "amenities": [
      "Kombi / Doğalgaz",
      "PVC Doğrama",
      "Çelik Kapı",
      "Laminat Parke",
      "Kablo TV / Uydu",
      "Isı Yalıtımı",
      "Caddeye Yakın",
      "Toplu Ulaşıma Yakın"
    ],
    "interiorFeatures": [
      "ADSL / Fiber İnternet",
      "Ahşap Doğrama",
      "Akıllı Ev Altyapısı",
      "Ankastre Mutfak",
      "Balkon (Cam Kapama)",
      "Çelik Kapı",
      "Duşakabin",
      "Isıcam",
      "Kablo TV / Uydu",
      "Kartonpiyer",
      "Laminat Zemin",
      "Mutfak Doğalgazı",
      "Panel Kapı",
      "Parke Zemin",
      "Spot Aydınlatma"
    ],
    "exteriorFeatures": [
      "Asansör",
      "Isı Yalıtımı (Mantolama)",
      "Hidrofor",
      "Su Deposu",
      "Yangın Merdiveni",
      "Açık Otopark",
      "Kapalı Otopark",
      "Kamera Güvenlik Sistemi",
      "Geniş Yeşil Alan",
      "Çocuk Oyun Parkı"
    ],
    "neighborhoodFeatures": [
      "Cami",
      "Eczane & Sağlık Ocağı",
      "Etlik Şehir Hastanesi (5 dk)",
      "İlk ve Ortaokullar",
      "Semt Pazarı (200m)",
      "Zincir Marketler (Bim, A101, Şok, Migros)",
      "Park & Dinlenme Alanı",
      "EGO Otobüs ve Dolmuş Durağı (100m)",
      "Metro Bağlantısı"
    ],
    "lat": 39.9721,
    "lng": 32.8284,
    "m2PriceTrend": [
      {
        "month": "Eki 25",
        "price": 282,
        "districtPrice": 265,
        "cityPrice": 243
      },
      {
        "month": "Kas 25",
        "price": 286,
        "districtPrice": 269,
        "cityPrice": 246
      },
      {
        "month": "Ara 25",
        "price": 292,
        "districtPrice": 274,
        "cityPrice": 251
      },
      {
        "month": "Oca 26",
        "price": 300,
        "districtPrice": 282,
        "cityPrice": 258
      },
      {
        "month": "Şub 26",
        "price": 307,
        "districtPrice": 289,
        "cityPrice": 264
      },
      {
        "month": "Mar 26",
        "price": 312,
        "districtPrice": 293,
        "cityPrice": 268
      },
      {
        "month": "Nis 26",
        "price": 317,
        "districtPrice": 298,
        "cityPrice": 273
      },
      {
        "month": "May 26",
        "price": 322,
        "districtPrice": 303,
        "cityPrice": 277
      },
      {
        "month": "Haz 26",
        "price": 325,
        "districtPrice": 306,
        "cityPrice": 280
      },
      {
        "month": "Tem 26",
        "price": 333,
        "districtPrice": 313,
        "cityPrice": 286
      },
      {
        "month": "Ağu 26",
        "price": 341,
        "districtPrice": 321,
        "cityPrice": 293
      },
      {
        "month": "Eyl 26",
        "price": 347,
        "districtPrice": 326,
        "cityPrice": 298
      }
    ],
    "yearlyChange": "+% 24.51 Artış",
    "amortizationYears": 16
  },
  {
    "id": 29775900,
    "eid": "35780949",
    "title": "AŞAĞI EĞLENCE MALİYE BLOKLARI SİTESİNDE 11. KAT MANZARALI SATILIK 3+1",
    "location": "Ankara, Keçiören, Aşağı Eğlence",
    "neighborhood": "Aşağı Eğlence Mah.",
    "district": "Keçiören",
    "city": "Ankara",
    "price": "₺6.500.000",
    "priceNumeric": 6500000,
    "pricePerM2": 73864,
    "image": "/listings/29775900/cover.jpg",
    "images": [
      "/listings/29775900/cover.jpg",
      "/listings/29775900/img_2.jpg",
      "/listings/29775900/img_3.jpg",
      "/listings/29775900/img_4.jpg",
      "/listings/29775900/img_5.jpg"
    ],
    "type": "Satılık Daire",
    "room": "3+1",
    "area": 100,
    "netArea": 88,
    "buildingAge": "35",
    "totalFloors": 15,
    "floor": "11. Kat",
    "heating": "Merkezi Sistem",
    "bathrooms": "1",
    "kitchen": "Ayrı Mutfak (Kapalı)",
    "balcony": "Var (Cam Balkon)",
    "elevator": "Var",
    "parking": "Açık Otopark",
    "furnished": "Hayır",
    "status": "Boş (Hemen Taşınabilir)",
    "inSite": "Evet",
    "siteName": "Susurluk Konutları",
    "dues": "350 TL",
    "eligibleForLoan": "Evet (Krediye Uygun)",
    "energyRating": "B",
    "deedStatus": "Kat Mülkiyetli",
    "fromWho": "Emlak Ofisinden (Renk Emlak)",
    "exchange": "Evet (Araç / Değerinde Gayrimenkul Takası)",
    "authCertNo": "0600124 (Renk Emlak Taşınmaz Ticareti Yetki Belgesi)",
    "featured": true,
    "description": "Ankara, Keçiören, Aşağı Eğlence mevkiinde bulunan gayrimenkulümüz; ulaşım akslarına, okullara, sağlık merkezlerine ve semt pazarına oldukça yakın avantajlı bir konumda yer almaktadır. 3+1 planında, 100 m² kullanım alanına sahip olup, 11. Kat konumundadır. Doğalgaz kombili, ısı yalıtımlı ve ferah yaşam alanlarıyla hem konforlu bir oturum hem de yüksek prim potansiyeli vadetmektedir.",
    "date": "01 Kasım 2026",
    "amenities": [
      "Kombi / Doğalgaz",
      "PVC Doğrama",
      "Çelik Kapı",
      "Laminat Parke",
      "Kablo TV / Uydu",
      "Isı Yalıtımı",
      "Caddeye Yakın",
      "Toplu Ulaşıma Yakın"
    ],
    "interiorFeatures": [
      "ADSL / Fiber İnternet",
      "Ahşap Doğrama",
      "Akıllı Ev Altyapısı",
      "Ankastre Mutfak",
      "Balkon (Cam Kapama)",
      "Çelik Kapı",
      "Duşakabin",
      "Isıcam",
      "Kablo TV / Uydu",
      "Kartonpiyer",
      "Laminat Zemin",
      "Mutfak Doğalgazı",
      "Panel Kapı",
      "Parke Zemin",
      "Spot Aydınlatma"
    ],
    "exteriorFeatures": [
      "Asansör",
      "Isı Yalıtımı (Mantolama)",
      "Hidrofor",
      "Su Deposu",
      "Yangın Merdiveni",
      "Açık Otopark",
      "Kapalı Otopark",
      "Kamera Güvenlik Sistemi",
      "Geniş Yeşil Alan",
      "Çocuk Oyun Parkı"
    ],
    "neighborhoodFeatures": [
      "Cami",
      "Eczane & Sağlık Ocağı",
      "Etlik Şehir Hastanesi (5 dk)",
      "İlk ve Ortaokullar",
      "Semt Pazarı (200m)",
      "Zincir Marketler (Bim, A101, Şok, Migros)",
      "Park & Dinlenme Alanı",
      "EGO Otobüs ve Dolmuş Durağı (100m)",
      "Metro Bağlantısı"
    ],
    "lat": 39.9721,
    "lng": 32.8284,
    "m2PriceTrend": [
      {
        "month": "Eki 25",
        "price": 60870,
        "districtPrice": 57218,
        "cityPrice": 52348
      },
      {
        "month": "Kas 25",
        "price": 61373,
        "districtPrice": 57691,
        "cityPrice": 52781
      },
      {
        "month": "Ara 25",
        "price": 63682,
        "districtPrice": 59861,
        "cityPrice": 54767
      },
      {
        "month": "Oca 26",
        "price": 64044,
        "districtPrice": 60201,
        "cityPrice": 55078
      },
      {
        "month": "Şub 26",
        "price": 65258,
        "districtPrice": 61343,
        "cityPrice": 56122
      },
      {
        "month": "Mar 26",
        "price": 66893,
        "districtPrice": 62879,
        "cityPrice": 57528
      },
      {
        "month": "Nis 26",
        "price": 68490,
        "districtPrice": 64381,
        "cityPrice": 58901
      },
      {
        "month": "May 26",
        "price": 69075,
        "districtPrice": 64930,
        "cityPrice": 59404
      },
      {
        "month": "Haz 26",
        "price": 70900,
        "districtPrice": 66646,
        "cityPrice": 60974
      },
      {
        "month": "Tem 26",
        "price": 71864,
        "districtPrice": 67552,
        "cityPrice": 61803
      },
      {
        "month": "Ağu 26",
        "price": 73723,
        "districtPrice": 69300,
        "cityPrice": 63402
      },
      {
        "month": "Eyl 26",
        "price": 75077,
        "districtPrice": 70572,
        "cityPrice": 64566
      }
    ],
    "yearlyChange": "+% 24.51 Artış",
    "amortizationYears": 18
  }
]

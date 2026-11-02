export interface BlogPost {
  id: string
  title: string
  category: 'Yatırım Rehberi' | 'Hukuk & EİDS' | 'Bölge Analizi' | 'Mimari & Trendler'
  date: string
  readTime: string
  author: string
  authorTitle: string
  image: string
  summary: string
  content: {
    heading?: string
    paragraphs: string[]
  }[]
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Keçiören ve Etlik Gayrimenkul Yatırım Rehberi: 2026 Değerleme ve Trendler',
    category: 'Yatırım Rehberi',
    date: '28 Ekim 2026',
    readTime: '5 dk okuma',
    author: 'Mesut KAYA',
    authorTitle: 'Renk Emlak Kurucusu & Bölge Uzmanı',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85',
    summary:
      "Ankara'nın en dinamik ilçesi Keçiören ve özellikle Etlik bölgesinde gayrimenkul yatırımı yaparken prim potansiyeli yüksek akslar, kira çarpanları ve amortisman süreleri hakkında kapsamlı analiz.",
    content: [
      {
        heading: 'Keçiören Neden Yatırımcıların Odağında?',
        paragraphs: [
          "Ankara'nın yaklaşık 1 milyon nüfusuyla en büyük ilçelerinden biri olan Keçiören, köklü mahalle kültürünün yanı sıra son yıllarda kentsel dönüşüm ve altyapı projeleriyle hızla değer kazanmaktadır. Özellikle Etlik, Aşağı Eğlence ve Ovacık aksı, hem oturum hem de yatırım amaçlı konut arayanların ilk tercihi olmaktadır.",
          'Etlik Şehir Hastanesi gibi mega projelerin faaliyete geçmesi, bölgedeki sağlık personeli, akademisyen ve memur nüfusunun kira talebini zirveye taşımıştır. Bu durum, amortisman sürelerini Ankara ortalaması olan 16-18 yıldan Keçiören genelinde 12-14 yıla kadar düşürmüştür.',
        ],
      },
      {
        heading: 'Kira Getirisi ve Amortisman Hesabı',
        paragraphs: [
          'Bir mülkün yatırım değerini belirleyen en kritik parametre yıllık brüt kira getirisidir. Aşağı Eğlence ve İncirli aksındaki 2+1 ve 3+1 dairelerde yıllık ortalama %6.5 - %7.5 bandında brüt kira getirisi görülmektedir.',
          'Özellikle doğalgaz kombili, ısı yalıtımlı ve asansörlü binalarda boş kalma riski neredeyse sıfırdır. İlana çıkan nitelikli bir daire ortalama 10 gün içinde güvenilir kiracı ile buluşmaktadır.',
        ],
      },
      {
        heading: 'Renk Emlak Önerileri',
        paragraphs: [
          'Gayrimenkul alırken yalnızca mevcut fiyatına değil, çevredeki kamu yatırımlarına, toplu taşıma akslarına ve bölgedeki yetkili emlak danışmanlarının tavsiyelerine odaklanın. 37 yılı aşkın saha tecrübemizle yatırımcılara en doğru lokasyonu sunuyoruz.',
        ],
      },
    ],
    tags: ['Keçiören Yatırım', 'Etlik Emlak', 'Amortisman Süresi', 'Kira Getirisi'],
  },
  {
    id: 'post-2',
    title: 'Elektronik İlan Doğrulama Sistemi (EİDS) Nedir? Taşınmaz No Zorunluluğu',
    category: 'Hukuk & EİDS',
    date: '22 Ekim 2026',
    readTime: '4 dk okuma',
    author: 'Renk Emlak Hukuk Birimi',
    authorTitle: 'Mevzuat & Tapu Danışmanlığı',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=85',
    summary:
      'Ticaret Bakanlığı tarafından yürürlüğe konan EİDS düzenlemesiyle artık yetkisiz ilan vermek, sahte fiyat girmek ve hayali portföy yayınlamak tarihe karıştı. Süreç mülk sahiplerini ve alıcıları nasıl koruyor?',
    content: [
      {
        heading: 'Sahte ve Yetkisiz İlanlara Son',
        paragraphs: [
          "Ticaret Bakanlığı'nın Taşınmaz Ticareti Hakkında Yönetmelik kapsamında hayata geçirdiği Elektronik İlan Doğrulama Sistemi (EİDS), gayrimenkul piyasasında şeffaflık ve güveni yasal teminat altına almıştır.",
          'Sistem sayesinde e-Devlet üzerinden taşınmaz doğrulaması yapılmayan hiçbir ilan dijital platformlarda yayınlanamamaktadır. Bu düzenleme, spekülatif fiyat artışlarının ve tüketiciyi yanıltıcı ilanların önüne geçmiştir.',
        ],
      },
      {
        heading: '8 Haneli Taşınmaz Numarası (EİD) Neden Önemli?',
        paragraphs: [
          'Her gayrimenkulün tapu kütüğünde kayıtlı benzersiz bir Taşınmaz Numarası (EİD) bulunmaktadır. Renk Emlak olarak portföyümüzdeki tüm ilanları mülk sahibinden alınan resmi yetki belgesi ve EİD doğrulamasıyla sisteme işliyoruz.',
          'Alıcılar böylece baktıkları evin gerçekten var olduğunu, yetkili ofis tarafından temsil edildiğini ve tapu bilgilerinin doğruluğunu tek tıkla teyit edebilmektedir.',
        ],
      },
      {
        heading: 'Yetki Belgesi Olmayan Kişilere İtibar Etmeyin',
        paragraphs: [
          'Gayrimenkul alım-satımında mutlaka Ticaret Bakanlığı Yetki Belgesi numarasını (Örn: Renk Emlak Yetki Belge No: 0600124) sorgulayın. Yetkisiz aracılarla yapılan işlemler hem maddi kayba hem de hukuki uyuşmazlıklara yol açabilmektedir.',
        ],
      },
    ],
    tags: ['EİDS', 'Taşınmaz Numarası', 'Ticaret Bakanlığı', 'Güvenli Emlak'],
  },
  {
    id: 'post-3',
    title: 'Etlik Şehir Hastanesi Çevresinde Gayrimenkul Değer Artışı ve Yaşam Aksı',
    category: 'Bölge Analizi',
    date: '15 Ekim 2026',
    readTime: '6 dk okuma',
    author: 'Mesut KAYA',
    authorTitle: 'Renk Emlak Kurucusu & Keçiören Temsilcisi',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85',
    summary:
      "Avrupa'nın ve Türkiye'nin en büyük sağlık komplekslerinden biri olan Etlik Şehir Hastanesi, Keçiören'in gayrimenkul dengelerini nasıl değiştirdi? Bölgedeki konut ve ticari birimlerin prim seyri.",
    content: [
      {
        heading: 'Ankara’nın Yeni Çekim Merkezi',
        paragraphs: [
          'Etlik Şehir Hastanesi’nin hizmete girmesiyle birlikte bölgeye on binlerce sağlık çalışanı, hasta yakını ve hizmet sektörü temsilcisi akın etmiştir. Bu yoğun insan sirkülasyonu, Aşağı Eğlence, Etlik ve Ayvalı aksındaki konut talebini katlamıştır.',
          'Giresun Caddesi ve çevresindeki kafeler, eczaneler, medikal firmalar ve sosyal alanlar ticari gayrimenkullerin kira değerlerini son iki yılda belirgin biçimde artırmıştır.',
        ],
      },
      {
        heading: 'Konut Tiplerinde Değişen Tercihler',
        paragraphs: [
          'Hastaneye yürüme veya tek vasıta mesafesinde bulunan 1+1 ve 2+1 eşyalı daireler, doktor ve asistan hekimler tarafından yoğun şekilde kiralanmaktadır. Bu durum mülk sahiplerine düzenli ve yüksek getirili bir kira akışı sağlamaktadır.',
          'Aynı zamanda geniş aileler için Etlik ve Esertepe yamaçlarında inşa edilen yeni nesil lüks konutlar, modern site imkanlarıyla rağbet görmektedir.',
        ],
      },
      {
        heading: 'Gelecek Projeksiyonu',
        paragraphs: [
          'Bölgedeki metro ve hafif raylı sistem bağlantı projeleri tamamlandığında Keçiören-Etlik aksı Ankara genelinde değer artış grafiğinde liderliğini sürdürmeye devam edecektir.',
        ],
      },
    ],
    tags: ['Etlik Şehir Hastanesi', 'Aşağı Eğlence', 'Bölge Değerleme', 'Kira Talebi'],
  },
  {
    id: 'post-4',
    title: 'Dünyanın En İlginç 9 Mimari Ev Tasarımı ve İlham Veren Yaşam Alanları',
    category: 'Mimari & Trendler',
    date: '08 Ekim 2026',
    readTime: '4 dk okuma',
    author: 'Renk Emlak Editör',
    authorTitle: 'Mimari & Tasarım Masası',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    summary:
      'renkemlak.com arşivinden: Doğa ile bütünleşen, sıradışı mühendislik sınırlarını zorlayan ve geleceğin konut konseptlerine ışık tutan dünyanın en çarpıcı konut projeleri.',
    content: [
      {
        heading: 'Sıradışı Yapılar ve Doğaya Saygı',
        paragraphs: [
          'Geleneksel betonarme dört duvar anlayışını yıkan çağdaş mimarlar, coğrafi engelleri avantaja çeviren nefes kesici yapılar tasarlıyor. Uçurum kenarına asılı cam villalardan yer altı ekolojik evlerine kadar her tasarım, yaşam alanına farklı bir bakış açısı getiriyor.',
          'Örneğin Norveç fiyortlarında kayalıklara entegre edilen ahşap ve çelik yapılar, minimum karbon ayak iziyle maksimum konfor vadediyor.',
        ],
      },
      {
        heading: 'Akıllı Ev Teknolojileri ve Sürdürülebilirlik',
        paragraphs: [
          'Kendi enerjisini güneş ve rüzgardan üreten, gri su geri kazanım sistemlerine sahip sıfır enerjili konutlar artık lüks değil, modern konut inşaatının vazgeçilmez bir standardı haline geldi.',
          'Türkiye’de ve Ankara’da da yeni konut projelerinde güneş paneli altyapıları, yerden ısıtma sistemleri ve akıllı bina otomasyonları standart olarak aranmaktadır.',
        ],
      },
      {
        heading: 'Geleceğin Evleri Nasıl Olacak?',
        paragraphs: [
          'Doğal ışığı gün boyu içeri alan geniş cam cepheler, teras bahçeleri ve modüler iç mekan bölücüleri önümüzdeki on yılın mimari trendlerini şekillendirmeye devam edecek.',
        ],
      },
    ],
    tags: ['Mimari Tasarım', 'Akıllı Ev', 'Sürdürülebilirlik', 'Modern Yaşam'],
  },
  {
    id: 'post-5',
    title: 'Ev Alırken ve Satarken Tapu Devir Sürecinde Yapılması Gereken 5 Kritik Adım',
    category: 'Hukuk & EİDS',
    date: '01 Ekim 2026',
    readTime: '5 dk okuma',
    author: 'Renk Emlak Danışmanlık',
    authorTitle: 'Tapu & İpotek Operasyonları',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=1200&q=85',
    summary:
      'Belediye rayiç bedeli, DASK poliçesi, ipotek/haciz sorgusu ve güvenli para transferiyle tapu müdürlüğündeki imza aşamasına kadar sorunsuz bir devir süreci için kontrol listesi.',
    content: [
      {
        heading: '1. Taşınmazın Hukuki Durumunu Sorgulayın',
        paragraphs: [
          'Tapu dairesine gitmeden önce gayrimenkulün üzerinde haciz, ipotek, intifa hakkı veya ihtiyati tedbir kararı olup olmadığı WebTapu üzerinden yetkili danışman aracılığıyla titizlikle kontrol edilmelidir.',
        ],
      },
      {
        heading: '2. Belediye Rayiç Bedeli ve Emlak Vergisi Borcu',
        paragraphs: [
          'Keçiören Belediyesi’nden ilgili yıla ait emlak vergisi borcunun bulunmadığına dair belge ve güncel rayiç bedel belgesi temin edilmelidir. Rayiç bedel tapu harcının hesaplanmasında alt sınırdır.',
        ],
      },
      {
        heading: '3. Güncel DASK (Zorunlu Deprem Sigortası)',
        paragraphs: [
          'Tapu devir işleminin başlatılabilmesi için binanın geçerli bir DASK poliçesine sahip olması zorunludur. DASK poliçesi yoksa veya süresi dolmuşsa işlem öncesi yenilenmelidir.',
        ],
      },
      {
        heading: '4. Tapu Takas / Güvenli Para Transferi',
        paragraphs: [
          'Nakit para taşıma riskini ortadan kaldırmak için Tapu ve Kadastro Genel Müdürlüğü ile anlaşmalı bankaların sunduğu "TapuTakas" sistemi veya bloke çek yöntemi kullanılmalıdır. Para ancak ıslak imzalar atıldıktan sonra satıcının hesabına geçer.',
        ],
      },
      {
        heading: '5. Aboneliklerin Kapatılması ve Açılması',
        paragraphs: [
          'Devir sonrası elektrik, su, doğalgaz ve internet aboneliklerinin eski malik tarafından feshedilip yeni malik üzerine alınması sürecinde sayaç son endeksleri tutanakla kayıt altına alınmalıdır.',
        ],
      },
    ],
    tags: ['Tapu Devri', 'Güvenli Alım Satım', 'DASK', 'Belediye Rayiç'],
  },
  {
    id: 'post-6',
    title: 'Konut Metrekare Fiyatları ve Kira Getirisi Nasıl Hesaplanır?',
    category: 'Yatırım Rehberi',
    date: '25 Eylül 2026',
    readTime: '4 dk okuma',
    author: 'Mesut KAYA',
    authorTitle: 'Renk Emlak Kurucusu & Ekspertiz',
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1200&q=85',
    summary:
      'Brüt m² ile net m² arasındaki farklar, ada/parsel analizi ve bölge endeksleri ışığında bir konutun gerçek değerini ve getiri potansiyelini doğru hesaplama yöntemleri.',
    content: [
      {
        heading: 'Brüt m² ve Net m² Arasındaki Fark Nedir?',
        paragraphs: [
          'Brüt metrekare; binanın ortak alanları (merdiven boşluğu, asansör, yangın merdiveni, otopark) payı dahil toplam alanı ifade eder. Net metrekare ise süpürülebilir, duvarların içinde kalan fiili kullanım alanıdır.',
          'Değerleme yaparken ilanlardaki brüt m² yerine mutlaka net m² üzerinden birim fiyat karşılaştırması yapılmalıdır.',
        ],
      },
      {
        heading: 'Bölge Emsal Karşılaştırma Yöntemi',
        paragraphs: [
          'Aynı sokak ve caddedeki son 3 ayda satılan veya kiralanan benzer oda sayısındaki, katındaki ve cephesindeki dairelerin fiyatları baz alınmalıdır. İlan sitelerinde yazan fiyatlar bazen şişirilmiş olabileceğinden, gerçekleşen gerçek tapu satış bedelleri referans alınmalıdır.',
        ],
      },
      {
        heading: 'Ücretsiz Ekspertiz Desteği',
        paragraphs: [
          'Renk Emlak olarak Keçiören ve Etlik bölgesindeki tüm mülk sahiplerine yerinde inceleme yaparak ücretsiz piyasa ekspertizi ve değerleme raporu sunuyoruz.',
        ],
      },
    ],
    tags: ['Metrekare Fiyatı', 'Ekspertiz', 'Değerleme', 'Net Brüt m2'],
  },
]

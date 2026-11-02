import { Icon } from '../components/Icon'

interface AboutPageProps {
  onBackToHome: () => void
  onOpenConsultation: () => void
}

export function AboutPage({ onBackToHome, onOpenConsultation }: AboutPageProps) {
  return (
    <main className="info-page">
      {/* Breadcrumb */}
      <div className="breadcrumbs">
        <button onClick={onBackToHome}>Ana Sayfa</button>
        <Icon name="chevron" size={13} />
        <span>Kurumsal</span>
        <Icon name="chevron" size={13} />
        <span className="current">Hakkımızda</span>
      </div>

      {/* Page Hero Header */}
      <div className="info-hero-header">
        <span className="section-kicker">1987'DEN GÜNÜMÜZE GÜVENİN ADRESİ</span>
        <h1 className="info-hero-title">
          37 Yıllık Ticari Tecrübe, <em>20 Yıllık</em> Gayrimenkul Uzmanlığı
        </h1>
        <p className="info-hero-subtitle">
          Ankara Keçiören, Etlik ve Aşağı Eğlence semtinde dürüstlük, şeffaflık, dostluk ve koşulsuz müşteri memnuniyetiyle kurulan köklü bağlar.
        </p>
      </div>

      {/* Stats Ribbon */}
      <div className="info-stats-ribbon">
        <div className="info-stat-card">
          <strong>1987</strong>
          <span>Bölgede Ticari Başlangıç</span>
          <small>37 yılı aşan esnaflık ve güven mirası</small>
        </div>
        <div className="info-stat-card">
          <strong>2004</strong>
          <span>Renk Emlak Kuruluşu</span>
          <small>20 yılı aşkın uzman gayrimenkul faaliyeti</small>
        </div>
        <div className="info-stat-card">
          <strong>5.000+</strong>
          <span>Mutlu Aile & Yatırımcı</span>
          <small>Başarılı alım, satım ve kiralama operasyonu</small>
        </div>
        <div className="info-stat-card">
          <strong>%100</strong>
          <span>EİDS & Taşınmaz Onaylı</span>
          <small>Ticaret Bakanlığı Yetki Belgesi: 0600124</small>
        </div>
      </div>

      {/* Founder Message Section */}
      <section className="about-founder-section">
        <div className="about-founder-card">
          <div className="about-founder-quote-mark">“</div>
          <div className="about-founder-content">
            <span className="about-founder-tag">KURUCUNUN MESAJI</span>
            <h2 className="about-founder-heading">Mesut KAYA’dan Mektup</h2>
            <blockquote className="about-founder-quote">
              Ben <strong>Mesut KAYA</strong>. 1987 yılında başladığım Ankara ili Keçiören ilçesi Etlik Aşağı Eğlence semtindeki ticaretimize zaman içerisinde 
              <em> Efen Piknik</em>, <em>Renk Ticaret</em>, <em>Tekbir Süpermarket</em>, <em>Renk Billuriye</em> ve <strong>2004 yılından beridir Renk Emlak</strong> olarak 
              sizlere hizmet etmeye devam ediyoruz.
              <br /><br />
              1987 tarihinden bu güne kadar ticari anlayışımız; <strong>dürüstlük, güleryüz, dostluk, şeffaflık ve güvenle</strong> tüm dost ve müşterilerimize hizmet etmekten kıvanç duyarız. 
              Duyduğunuz teveccühe teşekkür eder saygılarımı sunarım.
            </blockquote>
            <div className="about-founder-meta">
              <div className="about-founder-sign">
                <strong>Mesut KAYA</strong>
                <span>Renk Emlak Kurucusu & Taşınmaz Ticareti Sorumlusu</span>
              </div>
              <div className="about-founder-cert">
                <Icon name="award" size={16} />
                <span>Yetki Belge No: 0600124</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Grid */}
      <section className="about-vision-grid">
        <div className="about-pillar-card">
          <div className="about-pillar-icon purple">
            <Icon name="shield" size={24} />
          </div>
          <h3>Vizyonumuz</h3>
          <p>
            Klasik ve güvensiz emlakçılık anlayışını tamamen geride bırakarak; çağdaş atılımlar, yasal şeffaflık ve ileri teknolojiyle 
            müşterilerimizi doğru gayrimenkul sahibi yapmak. Ankara genelinde mülk sahiplerinin kiralama, sözleşme, tahliye ve kira takip 
            süreçlerini sıfır hata ve kurumsal güvenceyle yöneten lider danışmanlık markası olmak.
          </p>
        </div>

        <div className="about-pillar-card">
          <div className="about-pillar-icon red">
            <Icon name="check" size={24} />
          </div>
          <h3>Misyonumuz</h3>
          <p>
            Alıcı ve satıcı haklarını eşit, adil ve mevzuata uygun şekilde korumak; Ticaret Bakanlığı Elektronik İlan Doğrulama Sistemi (EİDS) 
            kurallarına harfiyen uyarak gerçeğe aykırı ve spekülatif ilanlara geçit vermemek; her müşterimize bir dost samimiyeti ve kurumsal 
            ciddiyetle yaklaşarak ömür boyu sürecek güven ilişkisi inşa etmek.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-values-section">
        <div className="about-values-header">
          <span className="section-kicker">BİZİ BİZ YAPAN İLKELER</span>
          <h2>Renk Emlak Kalite ve Çalışma Standartları</h2>
        </div>
        <div className="about-values-grid">
          <div className="value-item">
            <span className="value-number">01</span>
            <h4>Şeffaflık & Dürüstlük</h4>
            <p>Gizli komisyonlar, yanıltıcı metrekareler ve hayali fiyatlar kapımızdan giremez. Her bilginin belgesi mevcuttur.</p>
          </div>
          <div className="value-item">
            <span className="value-number">02</span>
            <h4>Bölgesel Saha Hakimiyeti</h4>
            <p>Keçiören ve Etlik sokak sokak, cadde cadde, ada ve parsel düzeyinde 37 yıldır uzmanlık alanımızdır.</p>
          </div>
          <div className="value-item">
            <span className="value-number">03</span>
            <h4>Tam Hukuki & Tapu Güvencesi</h4>
            <p>Ekspertizden belediye rayicine, DASK poliçesinden TapuTakas ile para transferine kadar her an yanınızdayız.</p>
          </div>
          <div className="value-item">
            <span className="value-number">04</span>
            <h4>Satış Sonrası Sürekli Dostluk</h4>
            <p>İmza atıldıktan sonra bağımız kopmaz; mülk yönetimi, tadilat danışmanlığı ve yeniden kiralama desteğimiz sürer.</p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <div className="info-cta-banner">
        <div>
          <h3>Mülkünüzü Güvenle Değerlendirin</h3>
          <p>Keçiören'deki gayrimenkulünüz için ücretsiz piyasa ekspertizi ve değerleme raporu talep edebilirsiniz.</p>
        </div>
        <button className="primary-button" onClick={onOpenConsultation}>
          Ücretsiz Ekspertiz Randevusu Al
        </button>
      </div>
    </main>
  )
}

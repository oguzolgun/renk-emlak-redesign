import { useState } from 'react'
import { Icon } from '../components/Icon'

interface ContactPageProps {
  onBackToHome: () => void
  onOpenConsultation: () => void
}

export function ContactPage({ onBackToHome, onOpenConsultation }: ContactPageProps) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('satilik')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!name.trim()) {
      setError('Lütfen adınızı ve soyadınızı belirtiniz.')
      return
    }
    if (!phone.trim()) {
      setError('Lütfen size ulaşabileceğimiz bir telefon numarası giriniz.')
      return
    }
    if (!message.trim()) {
      setError('Lütfen bize iletmek istediğiniz mesajınızı yazınız.')
      return
    }

    setSubmitted(true)
    setName('')
    setPhone('')
    setEmail('')
    setMessage('')
  }

  return (
    <main className="info-page">
      {/* Breadcrumb */}
      <div className="breadcrumbs">
        <button onClick={onBackToHome}>Ana Sayfa</button>
        <Icon name="chevron" size={13} />
        <span>Kurumsal</span>
        <Icon name="chevron" size={13} />
        <span className="current">İletişim</span>
      </div>

      {/* Page Hero Header */}
      <div className="info-hero-header">
        <span className="section-kicker">7/24 DANIŞMA & İLETİŞİM</span>
        <h1 className="info-hero-title">
          Bizimle Hemen <em>İletişime Geçin</em>
        </h1>
        <p className="info-hero-subtitle">
          Portföy talepleriniz, ücretsiz ekspertiz başvurusu, tapu ve kiralama süreçleriniz için uzman kadromuz bir telefon uzağınızda.
        </p>
      </div>

      {/* 4 Contact Cards Grid */}
      <div className="contact-cards-grid">
        <div className="contact-card">
          <div className="contact-card-icon purple">
            <Icon name="phone" size={24} />
          </div>
          <span className="contact-card-label">SABİT TELEFON</span>
          <strong className="contact-card-value">0 (312) 352 15 15</strong>
          <p>Hafta içi ve hafta sonu kesintisiz santral hattımız.</p>
          <a href="tel:03123521515" className="contact-card-link">Hemen Ara ›</a>
        </div>

        <div className="contact-card">
          <div className="contact-card-icon red">
            <Icon name="whatsapp" size={24} />
          </div>
          <span className="contact-card-label">WHATSAPP DANIŞMA</span>
          <strong className="contact-card-value">0 (535) 665 75 42</strong>
          <p>Hızlı ilan bilgisi, fotoğraf ve konum paylaşımı hattı.</p>
          <a
            href="https://wa.me/905356657542?text=Merhaba,%20Renk%20Emlak%20web%20sitenizden%20ula%C5%9F%C4%B1yorum."
            target="_blank"
            rel="noreferrer"
            className="contact-card-link"
          >
            WhatsApp'tan Yaz ›
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-card-icon purple">
            <Icon name="mail" size={24} />
          </div>
          <span className="contact-card-label">E-POSTA ADRESİMİZ</span>
          <strong className="contact-card-value">info@renkemlak.com</strong>
          <p>Kurumsal iş birlikleri ve resmi evrak paylaşımı.</p>
          <a href="mailto:info@renkemlak.com" className="contact-card-link">E-Posta Gönder ›</a>
        </div>

        <div className="contact-card">
          <div className="contact-card-icon red">
            <Icon name="pin" size={24} />
          </div>
          <span className="contact-card-label">GENEL MERKEZ OFİSİ</span>
          <strong className="contact-card-value">Aşağı Eğlence / Etlik</strong>
          <p>Giresun Cad. Sazan Sok. No:4/D Keçiören / Ankara</p>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=39.9723,32.8421"
            target="_blank"
            rel="noreferrer"
            className="contact-card-link"
          >
            Haritada Göster ›
          </a>
        </div>
      </div>

      {/* 2-Column Section: Form on Left, Office & Map on Right */}
      <div className="contact-layout-grid">
        {/* Left: Contact Form */}
        <div className="contact-form-col">
          <div className="contact-form-box">
            <h3>Bize Mesaj Gönderin</h3>
            <p>Formu doldurarak gayrimenkul talebinizi iletebilirsiniz. En geç 30 dakika içinde tarafınıza dönüş yapılacaktır.</p>

            {submitted ? (
              <div className="contact-form-success">
                <div className="success-icon"><Icon name="check" size={28} /></div>
                <h4>Mesajınız Başarıyla Alındı!</h4>
                <p>Renk Emlak danışmanımız en kısa sürede sizinle iletişime geçecektir. Gösterdiğiniz ilgiye teşekkür ederiz.</p>
                <button className="primary-button" onClick={() => setSubmitted(false)}>
                  Yeni Mesaj Gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-inputs-grid">
                {error && (
                  <div className="contact-error-bar">
                    <Icon name="info" size={15} />
                    <span>{error}</span>
                  </div>
                )}

                <div className="form-row-2col">
                  <label className="contact-field">
                    <span>Adınız Soyadınız *</span>
                    <input
                      type="text"
                      placeholder="Örn: Ahmet Yılmaz"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </label>
                  <label className="contact-field">
                    <span>Telefon Numaranız *</span>
                    <input
                      type="tel"
                      placeholder="0 (5XX) XXX XX XX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </label>
                </div>

                <div className="form-row-2col">
                  <label className="contact-field">
                    <span>E-Posta Adresiniz (Opsiyonel)</span>
                    <input
                      type="email"
                      placeholder="adiniz@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                  <label className="contact-field">
                    <span>İlgilendiğiniz Konu</span>
                    <select value={subject} onChange={(e) => setSubject(e.target.value)}>
                      <option value="satilik">Satılık Ev / Daire Arayışı</option>
                      <option value="kiralik">Kiralık Daire Arayışı</option>
                      <option value="ekspertiz">Mülküm İçin Ücretsiz Ekspertiz</option>
                      <option value="ilan-ver">Mülkümü Kiraya / Satışa Vermek İstiyorum</option>
                      <option value="ticari">Ticari Dükkan / Arsa Talebi</option>
                      <option value="diger">Diğer / Genel Bilgi</option>
                    </select>
                  </label>
                </div>

                <label className="contact-field">
                  <span>Mesajınız / Talebiniz *</span>
                  <textarea
                    rows={4}
                    placeholder="Aradığınız oda sayısı, bütçe aralığı, mahalle veya mülkünüzün detaylarını yazabilirsiniz..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </label>

                <button type="submit" className="contact-submit-btn">
                  <span>Mesajı Gönder</span>
                  <Icon name="arrow" size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right: Office Info, Map & Transport */}
        <div className="contact-side-col">
          <div className="office-schedule-card">
            <h4>
              <Icon name="clock" size={17} /> Çalışma Saatlerimiz
            </h4>
            <div className="schedule-list">
              <div className="schedule-row">
                <span>Pazartesi - Cuma</span>
                <strong>09:00 - 19:30</strong>
              </div>
              <div className="schedule-row">
                <span>Cumartesi</span>
                <strong>09:30 - 19:00</strong>
              </div>
              <div className="schedule-row">
                <span>Pazar</span>
                <strong>11:00 - 18:00 (Nöbetçi Danışman)</strong>
              </div>
            </div>
          </div>

          <div className="office-transport-card">
            <h4>
              <Icon name="bus" size={17} /> Nasıl Ulaşabilirsiniz?
            </h4>
            <ul className="transport-points">
              <li><strong>EGO Otobüs:</strong> 260, 261, 263, 277 ve 281 numaralı hatlar Giresun Caddesi durağında durur.</li>
              <li><strong>Dolmuş:</strong> Sıhhiye ve Ulus'tan kalkan Etlik / Aşağı Eğlence dolmuşları ofisimizin tam önünden geçer.</li>
              <li><strong>Metro:</strong> Keçiören Metro İstasyonu'ndan kalkan aktarma otobüsleriyle 5 dakikada ulaşabilirsiniz.</li>
              <li><strong>Özel Araç:</strong> Giresun Caddesi ve Sazan Sokak üzerinde ziyaretçilerimiz için uygun park alanları mevcuttur.</li>
            </ul>
          </div>

          {/* Map Frame */}
          <div className="contact-map-frame-box">
            <iframe
              title="Renk Emlak Merkez Ofis Haritası"
              className="contact-map-iframe"
              src="https://www.openstreetmap.org/export/embed.html?bbox=32.8351%2C39.9683%2C32.8491%2C39.9763&layer=mapnik&marker=39.9723%2C32.8421"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

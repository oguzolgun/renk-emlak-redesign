import { useState } from 'react'
import { Icon } from '../components/Icon'
import { branches, type Branch } from '../branchesData'

interface BranchesPageProps {
  onBackToHome: () => void
  onOpenConsultation: () => void
}

export function BranchesPage({ onBackToHome, onOpenConsultation }: BranchesPageProps) {
  const [activeBranchId, setActiveBranchId] = useState<string>(branches[0].id)
  const activeBranch = branches.find((b) => b.id === activeBranchId) || branches[0]

  return (
    <main className="info-page">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <button onClick={onBackToHome}>Ana Sayfa</button>
        <Icon name="chevron" size={13} />
        <span>Kurumsal</span>
        <Icon name="chevron" size={13} />
        <span className="current">Şubelerimiz</span>
      </div>

      {/* Page Hero Header */}
      <div className="info-hero-header">
        <span className="section-kicker">GENİŞ BÖLGE AĞI</span>
        <h1 className="info-hero-title">
          Keçiören ve Ankara Genelindeki <em>Şubelerimiz</em>
        </h1>
        <p className="info-hero-subtitle">
          Size en yakın Renk Emlak temsilciliğine uğrayabilir, sıcak bir çay eşliğinde yetkili gayrimenkul danışmanlarımızla yüz yüze görüşebilirsiniz.
        </p>
      </div>

      {/* 2-Column Branches Layout: Left Cards, Right Detail & Map */}
      <div className="branches-main-layout">
        {/* Left Column: Branch Cards List */}
        <div className="branches-list-col">
          {branches.map((b) => {
            const isSelected = b.id === activeBranchId
            return (
              <article
                key={b.id}
                className={`branch-card ${isSelected ? 'active' : ''}`}
                onClick={() => setActiveBranchId(b.id)}
              >
                <div className="branch-card-header">
                  <div>
                    <span className="branch-badge">{b.badge}</span>
                    <h3 className="branch-title">{b.name}</h3>
                  </div>
                  {isSelected && (
                    <span className="branch-selected-tag">
                      <Icon name="check" size={12} /> Seçili Ofis
                    </span>
                  )}
                </div>

                <p className="branch-address">
                  <Icon name="pin" size={16} />
                  <span>{b.address}, {b.district}</span>
                </p>

                <div className="branch-contact-chips">
                  <a
                    href={`tel:${b.phone.replace(/\D/g, '')}`}
                    onClick={(e) => e.stopPropagation()}
                    className="branch-chip"
                    title="Şubeyi Ara"
                  >
                    <Icon name="phone" size={14} /> {b.phone}
                  </a>
                  <a
                    href={`https://wa.me/90${b.gsm.replace(/\D/g, '').slice(-10)}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="branch-chip wa"
                    title="WhatsApp'tan Yaz"
                  >
                    <Icon name="whatsapp" size={14} /> WhatsApp
                  </a>
                </div>

                <div className="branch-hours-row">
                  <Icon name="clock" size={13} />
                  <span>Hafta İçi: {b.hoursWeekdays} · {b.hoursWeekend}</span>
                </div>
              </article>
            )
          })}
        </div>

        {/* Right Column: Active Branch Spotlight & Interactive Map */}
        <div className="branch-spotlight-col">
          <div className="branch-spotlight-card">
            <div className="spotlight-header">
              <div>
                <span className="spotlight-type-badge">{activeBranch.type}</span>
                <h2>{activeBranch.name}</h2>
                <span className="spotlight-manager">
                  Yönetici: <strong>{activeBranch.manager}</strong> (Yetki No: {activeBranch.authCertNo})
                </span>
              </div>
              <div className="spotlight-action-buttons">
                <a
                  href={`tel:${activeBranch.phone.replace(/\D/g, '')}`}
                  className="spotlight-call-btn"
                >
                  <Icon name="phone" size={15} /> Ara
                </a>
                <a
                  href={`https://wa.me/90${activeBranch.gsm.replace(/\D/g, '').slice(-10)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="spotlight-wa-btn"
                >
                  <Icon name="whatsapp" size={15} /> WhatsApp
                </a>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${activeBranch.lat},${activeBranch.lng}`}
                  target="_blank"
                  rel="noreferrer"
                  className="spotlight-directions-btn"
                >
                  <Icon name="compass" size={15} /> Yol Tarifi Al
                </a>
              </div>
            </div>

            <p className="spotlight-desc">{activeBranch.description}</p>

            {/* Features Pill Grid */}
            <div className="spotlight-features-list">
              <h4>Şube İmkân ve Hizmetleri</h4>
              <div className="spotlight-features-grid">
                {activeBranch.features.map((feat) => (
                  <div key={feat} className="spotlight-feature-pill">
                    <span className="feature-check"><Icon name="check" size={12} /></span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Frame */}
            <div className="spotlight-map-wrap">
              <div className="map-badge-overlay">
                <Icon name="pin" size={14} />
                <span>{activeBranch.name} Harita Konumu</span>
              </div>
              <iframe
                title={`Harita - ${activeBranch.name}`}
                className="branch-map-frame"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${activeBranch.lng - 0.007}%2C${activeBranch.lat - 0.004}%2C${activeBranch.lng + 0.007}%2C${activeBranch.lat + 0.004}&layer=mapnik&marker=${activeBranch.lat}%2C${activeBranch.lng}`}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Banner */}
      <div className="info-cta-banner">
        <div>
          <h3>Ofislerimize Uğramadan Önce Randevu Almak İster misiniz?</h3>
          <p>Danışmanlarımızın sizi hazır karşılaması ve mülk portföyünüzün ön incelemesi için randevu oluşturabilirsiniz.</p>
        </div>
        <button className="primary-button" onClick={onOpenConsultation}>
          Ofis Ziyareti Randevusu Oluştur
        </button>
      </div>
    </main>
  )
}

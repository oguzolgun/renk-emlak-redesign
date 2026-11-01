import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { listings, type Listing } from './listingsData'

const Icon = ({
  name,
  size = 20,
}: {
  name:
    | 'search'
    | 'heart'
    | 'user'
    | 'pin'
    | 'home'
    | 'area'
    | 'bed'
    | 'chevron'
    | 'sliders'
    | 'phone'
    | 'share'
    | 'check'
    | 'arrow'
    | 'whatsapp'
    | 'close'
    | 'menu'
  size?: number
}) => {
  const paths: Record<typeof name, ReactNode> = {
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5a5.5 5.5 0 0 0 1-8.9Z" />
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v11h14V10M9 21v-7h6v7" />
      </>
    ),
    area: (
      <>
        <path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5" />
        <path d="M8 12h8" />
      </>
    ),
    bed: (
      <>
        <path d="M3 18v-8M21 18v-5a3 3 0 0 0-3-3H8a5 5 0 0 0-5 5v3M3 15h18M7 10V7h4v3" />
      </>
    ),
    chevron: <path d="m9 18 6-6-6-6" />,
    sliders: (
      <>
        <path d="M4 6h16M4 12h16M4 18h16" />
        <circle cx="9" cy="6" r="2" />
        <circle cx="15" cy="12" r="2" />
        <circle cx="11" cy="18" r="2" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    ),
    share: (
      <>
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="m8.6 10.5 6.8-4M8.6 13.5l6.8 4" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    whatsapp: (
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    ),
    close: <path d="M18 6 6 18M6 6l12 12" />,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  }
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

function Header({
  onHome,
  onNavigate,
  onOpenConsultation,
  onOpenLogin,
}: {
  onHome: () => void
  onNavigate: (tab: 'Satılık' | 'Kiralık' | 'Projeler' | 'Kurumsal') => void
  onOpenConsultation: () => void
  onOpenLogin: () => void
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <button className="brand" onClick={onHome} aria-label="Renk Emlak ana sayfa">
        <img src="/renk-emlak-logo.png" alt="Renk Emlak" />
      </button>

      <nav className="main-nav" aria-label="Ana menü">
        <button onClick={() => onNavigate('Satılık')}>Satılık</button>
        <button onClick={() => onNavigate('Kiralık')}>Kiralık</button>
        <button onClick={() => onNavigate('Projeler')}>Projeler</button>
        <button onClick={() => onNavigate('Kurumsal')}>Kurumsal</button>
      </nav>

      <div className="header-actions">
        <button
          className="icon-button"
          aria-label="Favoriler"
          onClick={() => {
            onHome()
            document.querySelector('#listings')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <Icon name="heart" />
        </button>
        <button className="login-button" onClick={onOpenLogin}>
          <Icon name="user" />
          <span>Giriş Yap</span>
        </button>
        <button className="primary-button" onClick={onOpenConsultation}>
          Ücretsiz İlan Ver
        </button>
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menüyü aç/kapat"
        >
          <Icon name={mobileMenuOpen ? 'close' : 'menu'} size={22} />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-dropdown-menu">
          <button
            onClick={() => {
              setMobileMenuOpen(false)
              onNavigate('Satılık')
            }}
          >
            Satılık İlanlar
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false)
              onNavigate('Kiralık')
            }}
          >
            Kiralık İlanlar
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false)
              onNavigate('Projeler')
            }}
          >
            Projeler & Ticari
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false)
              onNavigate('Kurumsal')
            }}
          >
            Kurumsal & İletişim
          </button>
          <div className="mobile-menu-divider" />
          <button
            className="mobile-menu-login"
            onClick={() => {
              setMobileMenuOpen(false)
              onOpenLogin()
            }}
          >
            <Icon name="user" size={17} /> Giriş Yap
          </button>
        </div>
      )}
    </header>
  )
}

function Hero({ onExplore }: { onExplore: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const hero = document.querySelector('.hero-scroll')
      if (!hero) return
      const rect = hero.getBoundingClientRect()
      const distance = hero.clientHeight - window.innerHeight
      setProgress(Math.min(1, Math.max(0, -rect.top / Math.max(distance, 1))))
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <section className="hero-scroll">
      <div className="hero-sticky">
        <div className="hero-image hero-muted" />
        <div
          className="hero-image hero-color"
          style={{ clipPath: `inset(0 ${100 - progress * 100}% 0 0)` }}
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">
            <span /> Hayalinizdeki yaşam burada başlar
          </p>
          <h1>
            Evinizi
            <br />
            <em>renklendiriyoruz.</em>
          </h1>
          <p className="hero-copy">
            Doğru evi bulmak bir aramadan fazlası.
            <br />
            Size iyi hissettirecek yaşamı birlikte keşfedelim.
          </p>
          <button className="hero-cta" onClick={onExplore}>
            İlanları keşfet <Icon name="arrow" />
          </button>
        </div>
        <div className="color-meter">
          <span>SADELİK</span>
          <div>
            <i style={{ height: `${Math.max(8, progress * 100)}%` }} />
          </div>
          <span>RENK</span>
        </div>
        <div className="scroll-cue">
          <span>Kaydırdıkça renklensin</span>
          <b>
            <i />
          </b>
        </div>
      </div>
    </section>
  )
}

function FilterPanel({
  status,
  setStatus,
  query,
  setQuery,
  propertyType,
  setPropertyType,
  room,
  setRoom,
  matchCount,
  onReset,
  compact = false,
}: {
  status: 'Satılık' | 'Kiralık' | 'Proje'
  setStatus: (s: 'Satılık' | 'Kiralık' | 'Proje') => void
  query: string
  setQuery: (q: string) => void
  propertyType: string
  setPropertyType: (t: string) => void
  room: string
  setRoom: (r: string) => void
  matchCount: number
  onReset: () => void
  compact?: boolean
}) {
  return (
    <aside className={`filter-panel ${compact ? 'compact' : ''}`}>
      <div className="filter-heading">
        <div>
          <span className="section-kicker">AKILLI ARAMA</span>
          <h2>Size uygun olanı bulalım</h2>
        </div>
        <Icon name="sliders" />
      </div>

      <div className="segment">
        {(['Satılık', 'Kiralık', 'Proje'] as const).map((item) => (
          <button
            key={item}
            className={status === item ? 'active' : ''}
            onClick={() => setStatus(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <label className="field">
        <span>Konum</span>
        <div>
          <Icon name="pin" size={18} />
          <input
            placeholder="İl, ilçe veya mahalle"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </label>

      <div className="field">
        <span>Emlak türü</span>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '4px',
            marginTop: '6px',
          }}
        >
          {['Tümü', 'Konut', 'İş Yeri'].map((t) => (
            <button
              key={t}
              onClick={() => setPropertyType(t)}
              style={{
                padding: '8px 2px',
                fontSize: '11px',
                fontWeight: 600,
                borderRadius: '7px',
                border:
                  propertyType === t ? '1.5px solid var(--purple)' : '1px solid var(--line)',
                background: propertyType === t ? 'var(--purple-soft)' : 'white',
                color: propertyType === t ? 'var(--purple)' : '#5d5762',
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="field">
        <span>Oda sayısı</span>
        <div className="room-options">
          {['1+1', '2+1', '3+1', '4+'].map((rm) => (
            <button
              key={rm}
              style={{
                borderColor: room === rm ? 'var(--purple)' : undefined,
                color: room === rm ? 'var(--purple)' : undefined,
                fontWeight: room === rm ? 700 : undefined,
                backgroundColor: room === rm ? 'var(--purple-soft)' : undefined,
              }}
              onClick={() => setRoom(room === rm ? '' : rm)}
            >
              {rm}
            </button>
          ))}
        </div>
      </div>

      <button
        className="search-button"
        onClick={() => {
          document.querySelector('#listings')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <Icon name="search" /> {matchCount} ilanı göster
      </button>

      {(query || propertyType !== 'Tümü' || room !== '') && (
        <button
          onClick={onReset}
          className="advanced-button"
          style={{ color: 'var(--red)', marginTop: '8px' }}
        >
          Filtreleri Temizle
        </button>
      )}
    </aside>
  )
}

function ListingCard({
  listing,
  onOpen,
  isSaved,
  onToggleSave,
}: {
  listing: Listing
  onOpen: (listing: Listing) => void
  isSaved: boolean
  onToggleSave: (id: number) => void
}) {
  return (
    <article className="listing-card" onClick={() => onOpen(listing)}>
      <div className="listing-image">
        <img
          src={listing.image}
          alt={listing.title}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85'
          }}
        />
        {listing.featured && <span className="featured-badge">ÖNE ÇIKAN</span>}
        <span className="listing-eid-badge" title="Ticaret Bakanlığı Elektronik İlan Doğrulama Sistemi (EİDS)">
          EİD: {listing.eid || listing.id}
        </span>
        <button
          className={`save-button ${isSaved ? 'saved' : ''}`}
          onClick={(event) => {
            event.stopPropagation()
            onToggleSave(listing.id)
          }}
          aria-label="Favoriye ekle"
        >
          <Icon name="heart" size={19} />
        </button>
      </div>
      <div className="listing-body">
        <div className="listing-meta">
          <span>{listing.type}</span>
          <span className="eids-verified-text" title="Elektronik İlan Doğrulama Sistemi Onaylı">
            <Icon name="check" size={12} /> EİDS Doğrulandı
          </span>
          <span>{listing.date || 'Güncel'}</span>
        </div>
        <h3 title={listing.title}>{listing.title}</h3>
        <p className="location">
          <Icon name="pin" size={16} />
          {listing.location}
        </p>
        <div className="property-facts">
          <span>
            <Icon name="bed" size={17} />
            {listing.room}
          </span>
          <span>
            <Icon name="area" size={17} />
            {listing.area} m²
          </span>
          <span>
            <Icon name="home" size={17} />
            {listing.floor}
          </span>
        </div>
        <div className="listing-footer">
          <strong>{listing.price}</strong>
          <button aria-label="İlanı aç">
            <Icon name="arrow" />
          </button>
        </div>
      </div>
    </article>
  )
}

function HomePage({
  onOpen,
  filterStatus,
  setFilterStatus,
  savedIds,
  onToggleSave,
}: {
  onOpen: (listing: Listing) => void
  filterStatus: 'Satılık' | 'Kiralık' | 'Proje'
  setFilterStatus: (s: 'Satılık' | 'Kiralık' | 'Proje') => void
  savedIds: Set<number>
  onToggleSave: (id: number) => void
}) {
  const [sort, setSort] = useState('Önerilen sıralama')
  const [query, setQuery] = useState('')
  const [propertyType, setPropertyType] = useState('Tümü')
  const [room, setRoom] = useState('')
  const [visibleCount, setVisibleCount] = useState(9)

  const handleReset = () => {
    setQuery('')
    setPropertyType('Tümü')
    setRoom('')
  }

  const filteredListings = useMemo(() => {
    return listings.filter((item) => {
      if (filterStatus === 'Satılık' && !item.type.includes('Satılık')) return false
      if (filterStatus === 'Kiralık' && !item.type.includes('Kiralık')) return false
      if (filterStatus === 'Proje' && !item.type.includes('Bina') && !item.type.includes('Dükkan'))
        return false

      if (propertyType === 'Konut' && !item.type.includes('Daire')) return false
      if (propertyType === 'İş Yeri' && !item.type.includes('Dükkan') && !item.type.includes('Bina'))
        return false

      if (room && item.room !== room) return false

      if (query.trim()) {
        const q = query.toLowerCase().trim()
        const target = `${item.title} ${item.location} ${item.description} ${item.type}`.toLowerCase()
        if (!target.includes(q)) return false
      }

      return true
    })
  }, [filterStatus, propertyType, room, query])

  const sortedListings = useMemo(() => {
    const list = [...filteredListings]
    if (sort === 'Fiyata göre artan') {
      return list.sort((a, b) => {
        const pA = parseInt(a.price.replace(/[^\d]/g, '')) || 0
        const pB = parseInt(b.price.replace(/[^\d]/g, '')) || 0
        return pA - pB
      })
    }
    if (sort === 'En yeniler') {
      return list.sort((a, b) => b.id - a.id)
    }
    return list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
  }, [filteredListings, sort])

  const displayedListings = useMemo(() => {
    return sortedListings.slice(0, visibleCount)
  }, [sortedListings, visibleCount])

  const scrollToListings = () =>
    document.querySelector('#listings')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <Hero onExplore={scrollToListings} />
      <main id="listings" className="listing-section">
        <div className="listing-intro">
          <div>
            <span className="section-kicker">SEÇKİN PORTFÖY</span>
            <h2>Yeni bir hayata açılan kapılar</h2>
            <p>Uzmanlarımız tarafından doğrulanmış, size özel seçilen ilanlar.</p>
          </div>
          <div className="market-note">
            <span>Canlı Portföy</span>
            <strong>{listings.length}</strong>
            <small>aktif ilan</small>
          </div>
        </div>

        <div className="listing-layout">
          <FilterPanel
            status={filterStatus}
            setStatus={setFilterStatus}
            query={query}
            setQuery={setQuery}
            propertyType={propertyType}
            setPropertyType={setPropertyType}
            room={room}
            setRoom={setRoom}
            matchCount={filteredListings.length}
            onReset={handleReset}
          />
          <div className="results">
            <div className="results-toolbar">
              <p>
                <strong>Ankara</strong> ve çevresinde <b>{filteredListings.length}</b> ilan
              </p>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                aria-label="Sıralama"
              >
                <option>Önerilen sıralama</option>
                <option>Fiyata göre artan</option>
                <option>En yeniler</option>
              </select>
            </div>

            {displayedListings.length === 0 ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '60px 20px',
                  background: 'white',
                  borderRadius: '16px',
                  border: '1px solid var(--line)',
                }}
              >
                <h3>Aradığınız kriterlere uygun ilan bulunamadı</h3>
                <p style={{ color: 'var(--muted)', marginTop: '8px' }}>
                  Filtreleri temizleyerek tüm portföyü görüntüleyebilirsiniz.
                </p>
                <button
                  onClick={handleReset}
                  className="primary-button"
                  style={{ marginTop: '16px' }}
                >
                  Filtreleri Sıfırla
                </button>
              </div>
            ) : (
              <div className="listing-grid">
                {displayedListings.map((listing) => (
                  <ListingCard
                    key={listing.id}
                    listing={listing}
                    onOpen={onOpen}
                    isSaved={savedIds.has(listing.id)}
                    onToggleSave={onToggleSave}
                  />
                ))}
              </div>
            )}

            {visibleCount < sortedListings.length && (
              <button
                className="load-more"
                onClick={() => setVisibleCount((prev) => prev + 9)}
              >
                Daha fazla ilan göster <Icon name="arrow" />
              </button>
            )}
          </div>
        </div>
      </main>

      <section id="kurumsal" className="trust-band">
        <div>
          <span className="section-kicker light">RENK EMLAK FARKI</span>
          <h2>
            Kararınız net,
            <br />
            süreciniz <em>güvenli.</em>
          </h2>
        </div>
        {[
          [
            '01',
            'EİDS & Taşınmaz Doğrulama',
            'Tüm portföyümüz Ticaret Bakanlığı Elektronik İlan Doğrulama Sistemi (EİDS) mevzuatına uygun, Taşınmaz Numaralı ve doğrulanmıştır.',
          ],
          [
            '02',
            'Bölge ve Harita Uzmanlığı',
            'Keçiören, Etlik ve Ankara genelinde harita, ada/parsel ve güncel piyasa ekspertizi sunarız.',
          ],
          [
            '03',
            'Uçtan uca destek',
            'İlk geziden tapu ve anahtar teslim sürecine kadar her adımda yanınızdayız.',
          ],
        ].map(([no, title, text]) => (
          <article key={no}>
            <span>{no}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>
    </>
  )
}

function DetailPage({
  listing,
  onBack,
  isSaved,
  onToggleSave,
}: {
  listing: Listing
  onBack: () => void
  isSaved: boolean
  onToggleSave: (id: number) => void
}) {
  const images = listing.images && listing.images.length > 0 ? listing.images : [listing.image]
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const whatsappMessage = encodeURIComponent(
    `Merhaba Mesut Bey, renkemlak.com üzerinden "RNK-${listing.id} / ${listing.title}" ilanınız hakkında bilgi alabilir miyim?`
  )

  return (
    <main className="detail-page">
      <div className="breadcrumbs">
        <button onClick={onBack}>Ana Sayfa</button>
        <Icon name="chevron" size={14} />
        <span>{listing.type}</span>
        <Icon name="chevron" size={14} />
        <span>{listing.location}</span>
      </div>

      <div className="detail-title-row">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '8px' }}>
            <span className="detail-type">{listing.type}</span>
            <div className="eids-pill" title="Ticaret Bakanlığı Elektronik İlan Doğrulama Sistemi Uyarınca Doğrulanmıştır">
              <span className="eids-pill-dot" />
              <span><strong>EİDS Taşınmaz No:</strong> {listing.eid || listing.id}</span>
              <span className="eids-verified-tag">Bakanlık Doğrulamalı ✓</span>
            </div>
          </div>
          <h1>{listing.title}</h1>
          <p>
            <Icon name="pin" size={17} />
            {listing.location}
          </p>
        </div>
        <div className="detail-actions">
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: listing.title, url: window.location.href })
              } else {
                navigator.clipboard.writeText(window.location.href)
                alert('İlan bağlantısı kopyalandı!')
              }
            }}
          >
            <Icon name="share" /> Paylaş
          </button>
          <button
            onClick={() => onToggleSave(listing.id)}
            style={{ color: isSaved ? 'var(--red)' : undefined }}
          >
            <Icon name="heart" /> {isSaved ? 'Kaydedildi' : 'Kaydet'}
          </button>
        </div>
      </div>

      {/* Main Image Showcase */}
      <div style={{ marginBottom: '24px' }}>
        <div
          style={{
            position: 'relative',
            height: '480px',
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: '#23182c',
          }}
        >
          <img
            src={images[activeImageIndex]}
            alt={listing.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              backgroundColor: '#1b1422',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              right: '16px',
              backgroundColor: 'rgba(0,0,0,0.7)',
              color: 'white',
              fontSize: '13px',
              padding: '6px 14px',
              borderRadius: '20px',
              backdropFilter: 'blur(4px)',
            }}
          >
            Fotoğraf {activeImageIndex + 1} / {images.length}
          </div>
        </div>

        {images.length > 1 && (
          <div
            style={{
              display: 'flex',
              gap: '12px',
              marginTop: '12px',
              overflowX: 'auto',
              paddingBottom: '8px',
            }}
          >
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                style={{
                  width: '90px',
                  height: '64px',
                  flexShrink: 0,
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border:
                    activeImageIndex === idx
                      ? '3px solid var(--purple)'
                      : '2px solid transparent',
                  padding: 0,
                  cursor: 'pointer',
                  opacity: activeImageIndex === idx ? 1 : 0.7,
                }}
              >
                <img
                  src={img}
                  alt={`Fotoğraf ${idx + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="detail-layout">
        <div className="detail-content">
          <section className="detail-summary">
            <div>
              <small>İlan fiyatı</small>
              <strong>{listing.price}</strong>
            </div>
            <div>
              <Icon name="bed" />
              <span>
                <small>Oda sayısı</small>
                <strong>{listing.room}</strong>
              </span>
            </div>
            <div>
              <Icon name="area" />
              <span>
                <small>Brüt alan</small>
                <strong>{listing.area} m²</strong>
              </span>
            </div>
            <div>
              <Icon name="home" />
              <span>
                <small>Kat bilgisi</small>
                <strong>{listing.floor}</strong>
              </span>
            </div>
          </section>

          <section className="detail-section">
            <span className="section-kicker">İLAN HAKKINDA</span>
            <h2>Konforun her tonunu keşfedin</h2>
            <div
              style={{
                fontSize: '15px',
                lineHeight: '1.8',
                color: '#46414d',
                whiteSpace: 'pre-line',
              }}
            >
              {listing.description}
            </div>
          </section>

          <section className="detail-section">
            <span className="section-kicker">ÖZELLİKLER</span>
            <h2>İlan detayları</h2>
            <div className="spec-grid">
              {[
                ['Taşınmaz No (EİD)', listing.eid || `${listing.id}`],
                ['EİDS Doğrulama', 'Bakanlık Onaylı / Doğrulandı ✓'],
                ['Yetki Belgesi', 'Taşınmaz Ticareti Yetki Belgeli Ofis'],
                ['İlan no', `RNK-${listing.id}`],
                ['İlan tarihi', listing.date || '12 Haziran 2025'],
                ['Emlak tipi', listing.type],
                ['Net alan', `${Math.max(20, listing.area - 15)} m²`],
                ['Bina yaşı', listing.buildingAge || '15-20'],
                ['Banyo', listing.bathrooms || '1'],
                ['Isıtma', listing.heating || 'Kombi (Doğalgaz)'],
                ['Kullanım', 'Boş'],
                ['Tapu', 'Kat mülkiyeti'],
                ['Krediye uygun', 'Evet'],
              ].map(([key, value]) => (
                <div key={key}>
                  <span>{key}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className="detail-section">
            <span className="section-kicker">ÖNE ÇIKANLAR</span>
            <h2>Yaşam alanı özellikleri</h2>
            <div className="amenities">
              {(
                listing.amenities || [
                  'Akıllı ev sistemi',
                  'Kapalı otopark',
                  '7/24 güvenlik',
                  'Geniş teras',
                  'Giyinme odası',
                  'Ankastre mutfak',
                  'Ebeveyn banyosu',
                ]
              ).map((item) => (
                <span key={item}>
                  <i>
                    <Icon name="check" size={15} />
                  </i>
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* Harita ve Konum Bilgisi */}
          <section className="detail-section detail-map-section">
            <span className="section-kicker">LOKASYON & HARİTA</span>
            <div className="map-header-row">
              <div>
                <h2 style={{ margin: '8px 0 4px' }}>Harita ve Konum Bilgisi</h2>
                <p className="map-location-sub">
                  <Icon name="pin" size={16} /> {listing.location}
                </p>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${listing.lat || 39.9721},${listing.lng || 32.8284}`}
                target="_blank"
                rel="noreferrer"
                className="map-nav-btn"
              >
                Google Haritalar'da Aç ↗
              </a>
            </div>

            <div className="map-container">
              <iframe
                title={`Harita - ${listing.title}`}
                className="map-iframe"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${(listing.lng || 32.8284) - 0.008}%2C${(listing.lat || 39.9721) - 0.005}%2C${(listing.lng || 32.8284) + 0.008}%2C${(listing.lat || 39.9721) + 0.005}&layer=mapnik&marker=${listing.lat || 39.9721}%2C${listing.lng || 32.8284}`}
                loading="lazy"
              />
              <div className="map-floating-badge">
                <span className="map-badge-dot" />
                <span>
                  <strong>Renk Emlak Portföyü</strong> · EİD: {listing.eid || listing.id}
                </span>
              </div>
            </div>

            <div className="neighborhood-grid">
              <div className="neighborhood-item">
                <span className="nb-icon">🚇</span>
                <div>
                  <strong>Toplu Taşıma</strong>
                  <small>EGO Otobüs durağı 100m, Metro İstasyonu 1.2 km</small>
                </div>
              </div>
              <div className="neighborhood-item">
                <span className="nb-icon">🏥</span>
                <div>
                  <strong>Sağlık Merkezleri</strong>
                  <small>Etlik Şehir Hastanesi & Sağlık Ocağı 5-7 dk</small>
                </div>
              </div>
              <div className="neighborhood-item">
                <span className="nb-icon">🏫</span>
                <div>
                  <strong>Eğitim Kurumları</strong>
                  <small>İlk & Ortaokul, Liseler yürüme mesafesinde</small>
                </div>
              </div>
              <div className="neighborhood-item">
                <span className="nb-icon">🛒</span>
                <div>
                  <strong>Alışveriş & Sosyal</strong>
                  <small>Semt Pazarı, Süpermarketler ve Parklar çok yakın</small>
                </div>
              </div>
            </div>
          </section>
        </div>

        <aside className="agent-card">
          <span className="agent-label">PORTFÖY DANIŞMANI</span>
          <div className="agent-profile">
            <div className="agent-avatar" style={{ backgroundColor: 'var(--purple)' }}>
              MK
            </div>
            <div>
              <strong>Mesut KAYA</strong>
              <span>Gayrimenkul Danışmanı</span>
            </div>
          </div>
          <p>
            Bu ilanla ilgili tüm sorularınız ve özel gösterim talebiniz için bana ulaşabilirsiniz.
          </p>
          <a
            href="tel:03123521515"
            className="call-button"
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            <Icon name="phone" /> (0312) 352 15 15
          </a>
          <a
            href={`https://wa.me/905423521515?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="message-button"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              backgroundColor: '#25D366',
              color: 'white',
              border: 'none',
              marginTop: '10px',
            }}
          >
            <Icon name="whatsapp" size={18} /> WhatsApp ile Mesaj Yaz
          </a>
          <small>İlan sahibiyle iletişime geçtiğinizde ilan numarasını belirtiniz.</small>
        </aside>
      </div>
    </main>
  )
}

function LoginModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegister, setIsRegister] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(isRegister ? 'Kayıt başarılı! Giriş yapabilirsiniz.' : 'Giriş başarılı!')
    onClose()
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(23, 21, 29, 0.75)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          maxWidth: '420px',
          width: '100%',
          padding: '32px',
          boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            border: 0,
            background: 'none',
            color: 'var(--muted)',
            cursor: 'pointer',
          }}
          aria-label="Kapat"
        >
          <Icon name="close" size={22} />
        </button>

        <span className="section-kicker">RENK EMLAK</span>
        <h2 style={{ fontSize: '22px', margin: '6px 0 16px' }}>
          {isRegister ? 'Yeni Hesap Oluştur' : 'Giriş Yap'}
        </h2>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '12px', fontWeight: 600 }}>
            E-posta Adresi
            <input
              type="email"
              required
              placeholder="ornek@renkemlak.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                border: '1px solid var(--line)',
                padding: '10px 12px',
                borderRadius: '8px',
                fontSize: '14px',
              }}
            />
          </label>

          <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '12px', fontWeight: 600 }}>
            Şifre
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                border: '1px solid var(--line)',
                padding: '10px 12px',
                borderRadius: '8px',
                fontSize: '14px',
              }}
            />
          </label>

          <button type="submit" className="primary-button" style={{ width: '100%', marginTop: '6px' }}>
            {isRegister ? 'Kayıt Ol' : 'Giriş Yap'}
          </button>

          <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '13px', color: 'var(--muted)' }}>
            {isRegister ? 'Zaten hesabınız var mı? ' : 'Hesabınız yok mu? '}
            <button
              type="button"
              onClick={() => setIsRegister(!isRegister)}
              style={{ border: 0, background: 'none', color: 'var(--purple)', fontWeight: 700, cursor: 'pointer' }}
            >
              {isRegister ? 'Giriş Yap' : 'Kayıt Ol'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function ConsultationModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [type, setType] = useState('Satılık Daire')
  const [eid, setEid] = useState('')
  const [note, setNote] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(23, 21, 29, 0.75)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          maxWidth: '500px',
          width: '100%',
          padding: '32px',
          boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
          position: 'relative',
          maxHeight: '92vh',
          overflowY: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            border: 0,
            background: 'none',
            color: 'var(--muted)',
            cursor: 'pointer',
          }}
          aria-label="Kapat"
        >
          <Icon name="close" size={22} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                backgroundColor: 'rgba(37, 211, 102, 0.15)',
                color: '#25D366',
                borderRadius: '50%',
                display: 'grid',
                placeItems: 'center',
                margin: '0 auto 16px',
              }}
            >
              <Icon name="check" size={32} />
            </div>
            <h2 style={{ fontSize: '22px', marginBottom: '8px' }}>Talebiniz Alındı!</h2>
            <div
              style={{
                background: '#f0ebf6',
                border: '1px solid rgba(75, 44, 120, 0.2)',
                borderRadius: '8px',
                padding: '10px 14px',
                margin: '12px 0 16px',
                fontSize: '13px',
                color: 'var(--purple-dark)',
              }}
            >
              <strong>Kayıtlı Taşınmaz No (EİD):</strong> {eid}
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.6 }}>
              Sayın <strong>{name}</strong>, gayrimenkulünüzün EİDS ön doğrulama süreci başlatılmıştır. En kısa sürede <strong>{phone}</strong>{' '}
              numaralı telefonunuzdan sizinle iletişime geçeceğiz.
            </p>
            <button
              onClick={onClose}
              className="primary-button"
              style={{ marginTop: '24px', width: '100%' }}
            >
              Tamam
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <span className="section-kicker">RENK EMLAK DESTEK</span>
            <h2 style={{ fontSize: '22px', margin: '6px 0 12px' }}>Ücretsiz İlan & Ekspertiz Talebi</h2>

            <div className="eids-law-notice" style={{ marginBottom: '16px' }}>
              <span className="eids-notice-badge">YASAL ZORUNLULUK</span>
              <p style={{ margin: 0 }}>
                Ticaret Bakanlığı <strong>EİDS (Elektronik İlan Doğrulama Sistemi)</strong> mevzuatı uyarınca, gayrimenkul ilan girişlerinde <strong>Taşınmaz Numarası (EİD)</strong> girilmesi zorunludur.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '12px', fontWeight: 600 }}>
                Adınız Soyadınız *
                <input
                  required
                  placeholder="Örn: Ahmet Yılmaz"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    border: '1px solid var(--line)',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    fontSize: '14px',
                  }}
                />
              </label>

              <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '12px', fontWeight: 600 }}>
                Telefon Numaranız *
                <input
                  required
                  type="tel"
                  placeholder="05XX XXX XX XX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    border: '1px solid var(--line)',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    fontSize: '14px',
                  }}
                />
              </label>

              <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '12px', fontWeight: 600 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>Taşınmaz Numarası (EİD) <span style={{ color: 'var(--red)' }}>* Zorunlu</span></span>
                  <span style={{ fontSize: '11px', color: '#059669', fontWeight: 600 }}>EİDS Doğrulama ✓</span>
                </div>
                <input
                  required
                  type="text"
                  placeholder="Örn: 10849201 (Tapu Taşınmaz Numarası)"
                  value={eid}
                  onChange={(e) => setEid(e.target.value)}
                  style={{
                    border: '1.5px solid var(--purple)',
                    backgroundColor: '#faf7fc',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                  }}
                />
                <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 400, marginTop: '2px', lineHeight: 1.4 }}>
                  💡 <strong>Taşınmaz Numaranızı bilmiyor musunuz?</strong> E-Devlet hesabınıza giriş yaparak <em>"Tapu Bilgileri Sorgulama"</em> sayfasından mülkünüze ait Taşınmaz Numarasını (EİD) görebilirsiniz.
                </span>
              </label>

              <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '12px', fontWeight: 600 }}>
                İşlem Türü
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  style={{
                    border: '1px solid var(--line)',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    fontSize: '14px',
                  }}
                >
                  <option>Satılık Daire</option>
                  <option>Kiralık Daire</option>
                  <option>Satılık Dükkan / İş Yeri</option>
                  <option>Kiralık Dükkan / İş Yeri</option>
                  <option>Arsa / Tarla</option>
                </select>
              </label>

              <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '12px', fontWeight: 600 }}>
                Mülk Konumu ve Notlar
                <textarea
                  rows={2}
                  placeholder="Örn: Aşağı Eğlence Bağlum sokakta 3+1 daire..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  style={{
                    border: '1px solid var(--line)',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    resize: 'none',
                  }}
                />
              </label>

              <button type="submit" className="primary-button" style={{ width: '100%', marginTop: '6px' }}>
                İlanı & Ekspertiz Talebini Gönder (EİDS Onaylı)
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <div className="footer-brand">
        <img src="/renk-emlak-logo.png" alt="Renk Emlak" />
        <p>
          Yaşam alanınıza değer,
          <br />
          hayallerinize renk katıyoruz.
        </p>
      </div>
      <div>
        <strong>Keşfet</strong>
        <button onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}>
          Satılık İlanlar
        </button>
        <button onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}>
          Kiralık İlanlar
        </button>
        <button onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}>
          Yeni Projeler
        </button>
      </div>
      <div>
        <strong>Renk Emlak</strong>
        <button onClick={() => document.querySelector('#kurumsal')?.scrollIntoView({ behavior: 'smooth' })}>
          Hakkımızda
        </button>
        <button onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}>
          Danışmanlarımız
        </button>
        <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
          İletişim
        </button>
      </div>
      <div className="footer-contact">
        <strong>Bize ulaşın</strong>
        <a href="tel:03123521515" style={{ color: 'inherit', textDecoration: 'none' }}>
          <span>+90 312 352 15 15</span>
        </a>
        <a href="mailto:info@renkemlak.com" style={{ color: 'inherit', textDecoration: 'none' }}>
          <span>info@renkemlak.com</span>
        </a>
        <small style={{ color: 'var(--muted)', marginTop: '4px' }}>
          Etlik Aşağı Eğlence Mah. Giresun Cad. Sazan Cad. No:4 Keçiören / Ankara
        </small>
      </div>
      <small>© 2026 Renk Emlak. Tüm hakları saklıdır.</small>
    </footer>
  )
}

export default function App() {
  const [selected, setSelected] = useState<Listing | null>(null)
  const [filterStatus, setFilterStatus] = useState<'Satılık' | 'Kiralık' | 'Proje'>('Satılık')
  const [savedIds, setSavedIds] = useState<Set<number>>(() => new Set())
  const [consultationOpen, setConsultationOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)

  const toggleSave = (id: number) => {
    setSavedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const openListing = (listing: Listing) => {
    setSelected(listing)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goHome = () => {
    setSelected(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavigate = (tab: 'Satılık' | 'Kiralık' | 'Projeler' | 'Kurumsal') => {
    setSelected(null)
    if (tab === 'Satılık') {
      setFilterStatus('Satılık')
      document.querySelector('#listings')?.scrollIntoView({ behavior: 'smooth' })
    } else if (tab === 'Kiralık') {
      setFilterStatus('Kiralık')
      document.querySelector('#listings')?.scrollIntoView({ behavior: 'smooth' })
    } else if (tab === 'Projeler') {
      setFilterStatus('Proje')
      document.querySelector('#listings')?.scrollIntoView({ behavior: 'smooth' })
    } else if (tab === 'Kurumsal') {
      document.querySelector('#kurumsal')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app">
      <Header
        onHome={goHome}
        onNavigate={handleNavigate}
        onOpenConsultation={() => setConsultationOpen(true)}
        onOpenLogin={() => setLoginOpen(true)}
      />
      {selected ? (
        <DetailPage
          listing={selected}
          onBack={goHome}
          isSaved={savedIds.has(selected.id)}
          onToggleSave={toggleSave}
        />
      ) : (
        <HomePage
          onOpen={openListing}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          savedIds={savedIds}
          onToggleSave={toggleSave}
        />
      )}
      <Footer />
      {consultationOpen && <ConsultationModal onClose={() => setConsultationOpen(false)} />}
      {loginOpen && <LoginModal onClose={() => setLoginOpen(false)} />}
    </div>
  )
}

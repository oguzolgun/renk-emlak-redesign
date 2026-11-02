import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
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
    | 'chevronLeft'
    | 'chevronRight'
    | 'sparkles'
    | 'flame'
    | 'sliders'
    | 'phone'
    | 'share'
    | 'check'
    | 'arrow'
    | 'whatsapp'
    | 'close'
    | 'menu'
    | 'print'
    | 'compass'
    | 'chart'
    | 'layers'
    | 'fullscreen'
    | 'bus'
    | 'train'
    | 'car'
    | 'road'
    | 'school'
    | 'graduation'
    | 'building'
    | 'hospital'
    | 'stethoscope'
    | 'tree'
    | 'cart'
    | 'coffee'
    | 'info'
    | 'trendUp'
    | 'userPlus'
    | 'lock'
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
    chevronLeft: <path d="m15 18-6-6 6-6" />,
    chevronRight: <path d="m9 18 6-6-6-6" />,
    sparkles: (
      <path d="m12 3 1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3Z" />
    ),
    flame: (
      <>
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 17c1.4 0 2.5-1.1 2.5-2.5 0-1.5-1-2.2-1.7-3.2-.6-.8-.8-1.5-.8-2.3 0-.5.2-1 .5-1.5C9.3 8.3 7 10.7 7 14c0 .2 0 .4.1.5Z" />
        <path d="M14.5 10c-.8-1.7-2.3-3.1-2.5-5-.1 0-.1 0 0 0-.2.6-.5 1.2-1 1.7C9.2 8.5 7 11.4 7 15a5 5 0 0 0 10 0c0-1.8-.7-3.4-2.5-5Z" />
      </>
    ),
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
    print: (
      <>
        <path d="M6 9V2h12v7" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <rect x="6" y="14" width="12" height="8" rx="1" />
      </>
    ),
    compass: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </>
    ),
    chart: (
      <>
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </>
    ),
    layers: (
      <>
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </>
    ),
    fullscreen: (
      <>
        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
      </>
    ),
    bus: (
      <>
        <rect width="16" height="15" x="4" y="3" rx="2" />
        <path d="M4 10h16M8 14h.01M16 14h.01M6 18v2M18 18v2" />
      </>
    ),
    train: (
      <>
        <rect width="16" height="14" x="4" y="3" rx="2" />
        <path d="M4 10h16M12 3v7M8 17l-2 3M16 17l2 3" />
        <circle cx="8" cy="14" r="1" />
        <circle cx="16" cy="14" r="1" />
      </>
    ),
    car: (
      <>
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <path d="M9 17h6" />
        <circle cx="17" cy="17" r="2" />
      </>
    ),
    road: (
      <path d="m4 19 4-14M20 19l-4-14M12 5v2M12 11v2M12 17v2" />
    ),
    school: (
      <>
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
        <path d="M6 6h10M6 10h10" />
      </>
    ),
    graduation: (
      <>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </>
    ),
    building: (
      <>
        <rect width="16" height="19" x="4" y="3" rx="2" />
        <path d="M9 22v-4h6v4M8 7h.01M16 7h.01M12 7h.01M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01" />
      </>
    ),
    hospital: (
      <>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M12 8v8M8 12h8" />
      </>
    ),
    stethoscope: (
      <>
        <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
        <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
        <circle cx="20" cy="10" r="2" />
      </>
    ),
    tree: (
      <>
        <path d="M12 19v3" />
        <path d="M12 2a7 7 0 0 0-6 10.5 4 4 0 0 0 3.5 5.5h5a4 4 0 0 0 3.5-5.5A7 7 0 0 0 12 2Z" />
      </>
    ),
    cart: (
      <>
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </>
    ),
    coffee: (
      <>
        <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
        <line x1="6" x2="6" y1="2" y2="4" />
        <line x1="10" x2="10" y1="2" y2="4" />
        <line x1="14" x2="14" y1="2" y2="4" />
      </>
    ),
    info: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </>
    ),
    trendUp: (
      <>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </>
    ),
    userPlus: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="22" y1="11" x2="16" y2="11" />
      </>
    ),
    lock: (
      <>
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </>
    ),
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

export interface AuthUser {
  id: string
  name: string
  email: string
  phone: string
  tckn: string
  accountType: 'Bireysel' | 'Kurumsal'
  companyName?: string
  authCertNo?: string
  registeredAt: string
}

const getRegisteredUsers = (): AuthUser[] => {
  try {
    const raw = localStorage.getItem('renk_emlak_registered_users')
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

const saveRegisteredUser = (user: AuthUser) => {
  const users = getRegisteredUsers().filter((u) => u.email.toLowerCase() !== user.email.toLowerCase())
  users.push(user)
  localStorage.setItem('renk_emlak_registered_users', JSON.stringify(users))
}

function Header({
  onHome,
  onNavigate,
  onOpenConsultation,
  onOpenAuth,
  currentUser,
  onLogout,
}: {
  onHome: () => void
  onNavigate: (tab: 'Satılık' | 'Kiralık' | 'Projeler' | 'Kurumsal') => void
  onOpenConsultation: () => void
  onOpenAuth: (mode: 'login' | 'register') => void
  currentUser: AuthUser | null
  onLogout: () => void
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userDropdownOpen, setUserDropdownOpen] = useState(false)

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

        {currentUser ? (
          <div className="user-menu-wrapper">
            <button
              className="user-profile-button"
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              aria-label="Kullanıcı Profili"
            >
              <div className="user-avatar-circle">
                {currentUser.name.charAt(0).toUpperCase()}
              </div>
              <div className="user-info-text">
                <span className="user-display-name">{currentUser.name.split(' ')[0]}</span>
                <span className="user-type-tag">{currentUser.accountType}</span>
              </div>
              <Icon name="chevron" size={12} />
            </button>

            {userDropdownOpen && (
              <div className="user-dropdown-card">
                <div className="dropdown-user-header">
                  <strong>{currentUser.name}</strong>
                  <small>{currentUser.email}</small>
                  <div className="dropdown-tckn-badge">
                    <Icon name="check" size={11} /> EİDS T.C.K.N Doğrulandı
                  </div>
                </div>
                <div className="dropdown-details-list">
                  <div>
                    <span>T.C.K.N:</span>
                    <strong>{currentUser.tckn.slice(0, 3)}*****{currentUser.tckn.slice(8)}</strong>
                  </div>
                  <div>
                    <span>Gsm No:</span>
                    <strong>{currentUser.phone}</strong>
                  </div>
                  <div>
                    <span>Üyelik Türü:</span>
                    <strong>{currentUser.accountType}</strong>
                  </div>
                  {currentUser.companyName && (
                    <div>
                      <span>Firma:</span>
                      <strong>{currentUser.companyName}</strong>
                    </div>
                  )}
                  {currentUser.authCertNo && (
                    <div>
                      <span>Yetki Belge:</span>
                      <strong>{currentUser.authCertNo}</strong>
                    </div>
                  )}
                </div>
                <div className="dropdown-divider" />
                <button
                  className="dropdown-action-btn"
                  onClick={() => {
                    setUserDropdownOpen(false)
                    onOpenConsultation()
                  }}
                >
                  <Icon name="home" size={15} /> Portföy & İlan Danışmanlığı
                </button>
                <button
                  className="dropdown-logout-btn"
                  onClick={() => {
                    setUserDropdownOpen(false)
                    onLogout()
                  }}
                >
                  <Icon name="close" size={14} /> Oturumu Kapat
                </button>
              </div>
            )}
          </div>
        ) : (
          <button className="login-button" onClick={() => onOpenAuth('login')}>
            <Icon name="user" />
            <span>Giriş Yap</span>
          </button>
        )}

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
          {currentUser ? (
            <div className="mobile-logged-user-box" style={{ padding: '8px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <div className="user-avatar-circle">{currentUser.name.charAt(0).toUpperCase()}</div>
                <div>
                  <strong>{currentUser.name}</strong>
                  <div style={{ fontSize: '11px', color: '#64748b' }}>
                    {currentUser.accountType} · {currentUser.phone}
                  </div>
                </div>
              </div>
              <button
                className="dropdown-logout-btn"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => {
                  setMobileMenuOpen(false)
                  onLogout()
                }}
              >
                <Icon name="close" size={14} /> Çıkış Yap
              </button>
            </div>
          ) : (
            <button
              className="mobile-menu-login"
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenAuth('login')
              }}
            >
              <Icon name="user" size={17} /> Giriş Yap / Hesap Oluştur
            </button>
          )}
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
      const raw = Math.min(1, Math.max(0, -rect.top / Math.max(distance, 1)))
      setProgress(raw)
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
          style={{ opacity: progress }}
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
            Size iyi hissettirecek yaşam alanını birlikte keşfedelim.
          </p>
          <button className="hero-cta" onClick={onExplore}>
            İlanları Keşfet <Icon name="arrow" />
          </button>
        </div>

        <div className="scroll-cue">
          <span>Keşfetmek için kaydırın</span>
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

function FeaturedDealsSection({
  onOpen,
  savedIds,
  onToggleSave,
}: {
  onOpen: (listing: Listing) => void
  savedIds: Set<number>
  onToggleSave: (id: number) => void
}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeftPos, setScrollLeftPos] = useState(0)
  const [moved, setMoved] = useState(false)

  // Curate 10 standout opportunity listings from portfolio
  const featuredDeals = useMemo(() => {
    const featured = listings.filter((l) => l.featured)
    const others = listings.filter((l) => !l.featured)
    return [...featured, ...others.slice(0, 6)]
  }, [])

  const checkScroll = () => {
    const el = trackRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }

  useEffect(() => {
    checkScroll()
    const el = trackRef.current
    if (!el) return
    const onScroll = () => checkScroll()
    el.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      el.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [featuredDeals])

  const touchStartXRef = useRef(0)
  const isTouchScrollingRef = useRef(false)

  const scrollCarousel = (direction: 'left' | 'right') => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('.featured-deal-card')
    const step = card ? card.offsetWidth + 14 : (window.innerWidth < 768 ? 290 : 374)
    el.scrollBy({ left: direction === 'left' ? -step : step, behavior: 'smooth' })
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = trackRef.current
    if (!el) return
    setIsDown(true)
    setMoved(false)
    setStartX(e.pageX - el.offsetLeft)
    setScrollLeftPos(el.scrollLeft)
  }

  const handleMouseLeave = () => {
    setIsDown(false)
  }

  const handleMouseUp = () => {
    setIsDown(false)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown) return
    const el = trackRef.current
    if (!el) return
    e.preventDefault()
    const x = e.pageX - el.offsetLeft
    const walk = (x - startX) * 1.4
    if (Math.abs(walk) > 6) {
      setMoved(true)
    }
    el.scrollLeft = scrollLeftPos - walk
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = e.touches[0].clientX
    isTouchScrollingRef.current = false
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const diff = Math.abs(e.touches[0].clientX - touchStartXRef.current)
    if (diff > 8) {
      isTouchScrollingRef.current = true
      setMoved(true)
    }
  }

  const handleTouchEnd = () => {
    if (isTouchScrollingRef.current) {
      setTimeout(() => {
        setMoved(false)
        isTouchScrollingRef.current = false
      }, 150)
    }
  }

  const getDealBadge = (deal: Listing, idx: number) => {
    if (deal.opportunityTag) return deal.opportunityTag
    const tags = [
      'Öne Çıkan Fırsat',
      'Kupon Kiralık',
      'Yüksek Getiri',
      'Panoramik Manzara',
      'Fiyatı Düştü',
      'Kupon Yatırım',
      'Merkezi Konum',
      'Ticari Fırsat',
      'Hemen Taşın',
      'Acil Kiralık',
    ]
    return tags[idx % tags.length]
  }

  return (
    <section id="featured-deals" className="featured-deals-section">
      <div className="featured-deals-header">
        <div className="featured-deals-title-area">
          <span className="section-kicker">ÖZEL SEÇKİ</span>
          <h2 className="featured-deals-title">Öne Çıkan Fırsatlar</h2>
          <p className="featured-deals-subtitle">
            Bölgenin en çok talep gören, özel fiyatlı ve yüksek kira getirili gayrimenkul fırsatları.
          </p>
        </div>
        <div className="featured-deals-controls">
          <div className="deals-counter-badge">
            <Icon name="sparkles" size={14} />
            <span>{featuredDeals.length} Özel Fırsat</span>
          </div>
          <div className="carousel-nav-arrows">
            <button
              type="button"
              className="carousel-arrow-btn"
              onClick={() => scrollCarousel('left')}
              disabled={!canScrollLeft}
              aria-label="Önceki fırsatlar"
              title="Önceki fırsatlar"
            >
              <Icon name="chevronLeft" size={18} />
            </button>
            <button
              type="button"
              className="carousel-arrow-btn"
              onClick={() => scrollCarousel('right')}
              disabled={!canScrollRight}
              aria-label="Sonraki fırsatlar"
              title="Sonraki fırsatlar"
            >
              <Icon name="chevronRight" size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="featured-carousel-wrap">
        <div
          ref={trackRef}
          className={`featured-carousel-track ${isDown ? 'is-dragging' : ''}`}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {featuredDeals.map((deal, idx) => (
            <article
              key={deal.id}
              className="featured-deal-card"
              onClick={() => {
                if (!moved && !isTouchScrollingRef.current) onOpen(deal)
              }}
            >
              <div className="deal-card-media">
                <img
                  src={deal.image}
                  alt={deal.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85'
                  }}
                />
                <span className="deal-card-badge">
                  <Icon name="sparkles" size={12} />
                  {getDealBadge(deal, idx)}
                </span>
                <span className="deal-eid-tag">
                  EİD: {deal.eid || deal.id}
                </span>
                <button
                  type="button"
                  className={`deal-save-btn ${savedIds.has(deal.id) ? 'saved' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    onToggleSave(deal.id)
                  }}
                  aria-label="Favoriye ekle"
                >
                  <Icon name="heart" size={17} />
                </button>
              </div>
              <div className="deal-card-content">
                <div className="deal-meta-top">
                  <span className="deal-prop-type">
                    {deal.type} {deal.propertyType || 'Daire'}
                  </span>
                  <span className="deal-eids-pill" title="Elektronik İlan Doğrulama Sistemi Onaylı">
                    <Icon name="check" size={12} /> EİDS Doğrulandı
                  </span>
                </div>
                <h3 className="deal-title" title={deal.title}>
                  {deal.title}
                </h3>
                <p className="deal-location">
                  <Icon name="pin" size={14} />
                  {deal.location}
                </p>
                <div className="deal-facts-row">
                  <span className="deal-fact-item">
                    <Icon name="bed" size={15} />
                    {deal.room}
                  </span>
                  <span className="deal-fact-item">
                    <Icon name="area" size={15} />
                    {deal.area} m²
                  </span>
                  <span className="deal-fact-item">
                    <Icon name="home" size={15} />
                    {deal.floor}
                  </span>
                </div>
                <div className="deal-card-footer">
                  <strong className="deal-price-val">{deal.price}</strong>
                  <span className="deal-view-btn">
                    İncele <Icon name="arrow" size={14} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
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

  const scrollToListings = () => {
    const el = document.querySelector('#featured-deals') || document.querySelector('#listings')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Hero onExplore={scrollToListings} />
      <FeaturedDealsSection
        onOpen={onOpen}
        savedIds={savedIds}
        onToggleSave={onToggleSave}
      />
      <main id="listings" className="listing-section">
        <div className="listing-intro">
          <div>
            <span className="section-kicker">SEÇKİN PORTFÖY</span>
            <h2>Aktif Portföyümüz</h2>
            <p>Uzmanlarımız tarafından doğrulanmış, size özel seçilen güncel satılık ve kiralık ilanlar.</p>
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
        <div className="trust-band-intro">
          <span className="section-kicker light">RENK EMLAK FARKI</span>
          <h2>
            Kararınız net, süreciniz <em>güvenli.</em>
          </h2>
          <p>
            Ankara Keçiören ve Etlik bölgesinde 15 yılı aşkın tecrübe, yetkili uzman danışman kadrosu ve kurumsal şeffaflık ile yanınızdayız.
          </p>
        </div>

        <div className="trust-band-cards">
          {[
            [
              '01',
              'EİDS & Taşınmaz Doğrulama',
              'Tüm gayrimenkul portföyümüz Ticaret Bakanlığı Elektronik İlan Doğrulama Sistemi mevzuatına uygun, Taşınmaz Numaralı ve yerinde incelenmiştir.',
            ],
            [
              '02',
              'Bölge & Lokasyon Uzmanlığı',
              'Keçiören, Etlik ve Ankara genelinde cadde cadde güncel piyasa değeri, ada/parsel analizi ve amortisman rehberliği sunuyoruz.',
            ],
            [
              '03',
              'Uçtan Uca Hukuki & Tapu Desteği',
              'İlk yer gösteriminden kredi tekliflerine, belediye rayiç bedelinden tapu devrine kadar her adımda profesyonel danışmanlık.',
            ],
          ].map(([no, title, text]) => (
            <article key={no} className="trust-card">
              <span className="trust-number">{no}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

function DetailPage({
  listing,
  onBack,
  isSaved,
  onToggleSave,
  onOpenConsultation,
}: {
  listing: Listing
  onBack: () => void
  isSaved: boolean
  onToggleSave: (id: number) => void
  onOpenConsultation: () => void
}) {
  const images = listing.images && listing.images.length > 0 ? listing.images : [listing.image]
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState<'details' | 'location' | 'index'>('details')
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const thumbsRef = useRef<HTMLDivElement>(null)
  const touchGalleryStartXRef = useRef(0)

  useEffect(() => {
    if (thumbsRef.current && thumbsRef.current.children[activeImageIndex]) {
      const thumbNode = thumbsRef.current.children[activeImageIndex] as HTMLElement
      thumbNode.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }, [activeImageIndex])

  const handleGalleryTouchStart = (e: React.TouchEvent) => {
    touchGalleryStartXRef.current = e.touches[0].clientX
  }

  const handleGalleryTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchGalleryStartXRef.current
    if (diff > 45) {
      setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
    } else if (diff < -45) {
      setActiveImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
    }
  }

  // Location tab states
  const [showM2Map, setShowM2Map] = useState(false)
  const [mapType, setMapType] = useState<'normal' | 'satellite'>('normal')
  const [nearbyCat, setNearbyCat] = useState<'ulasim' | 'egitim' | 'saglik' | 'yesil' | 'alisveris'>('ulasim')

  // Emlak Endeksi tab states
  const [endeksDuration, setEndeksDuration] = useState<'1' | '2' | '4'>('1')
  const [endeksCurrency, setEndeksCurrency] = useState<'TL' | 'TL_REEL' | 'USD' | 'EUR'>('TL')
  const [hoveredMonthIdx, setHoveredMonthIdx] = useState<number | null>(null)

  const whatsappMessage = encodeURIComponent(
    `Merhaba Mesut Bey, renkemlak.com üzerinden "${listing.title}" (İlan No: RNK-${listing.id}, EİD: ${listing.eid}) portföyünüz hakkında detaylı bilgi ve randevu alabilir miyim?`
  )

  const nearbyPlaces: Record<string, { icon: string; title: string; dist: string; desc: string }[]> = {
    ulasim: [
      { icon: 'bus', title: 'EGO Otobüs Durağı', dist: '120 m', desc: 'Yürüme 1-2 dk · Hatlar: 260, 261, 263' },
      { icon: 'car', title: 'Etlik - Ulus - Sıhhiye Dolmuş Hattı', dist: '150 m', desc: 'Yürüme 2 dk · 3 dakikada bir sefer' },
      { icon: 'train', title: 'Keçiören Metro İstasyonu', dist: '1.2 km', desc: 'Araçla 3 dk · Ring otobüsü geçer' },
      { icon: 'road', title: 'Ankara Çevre Yolu & Anadolu Bulvarı', dist: '2.5 km', desc: 'Araçla 5 dk hızlı ana aks bağlantısı' },
    ],
    egitim: [
      { icon: 'school', title: 'Yalçın Eskiyapan İlkokulu', dist: '250 m', desc: 'Yürüme 3 dk · Köklü devlet okulu' },
      { icon: 'graduation', title: 'Etlik Anadolu Lisesi', dist: '550 m', desc: 'Yürüme 7 dk · Başarılı eğitim kadrosu' },
      { icon: 'building', title: 'Keçiören Belediyesi Gündüz Bakımevi & Kreş', dist: '180 m', desc: 'Yürüme 2 dk' },
      { icon: 'school', title: 'Gülhane Sağlık Bilimleri Üniversitesi', dist: '1.4 km', desc: 'Araçla 4 dk / Otobüsle 8 dk' },
    ],
    saglik: [
      { icon: 'hospital', title: 'Etlik Şehir Hastanesi', dist: '1.1 km', desc: 'Araçla 4 dk · Türkiye’nin en büyük hastanelerinden biri' },
      { icon: 'stethoscope', title: 'Aşağı Eğlence Aile Sağlığı Merkezi', dist: '350 m', desc: 'Yürüme 4 dk · Aile hekimliği ve aşı merkezi' },
      { icon: 'hospital', title: 'Nöbetçi Eczaneler & Medikal', dist: '90 m', desc: 'Yürüme 1 dk · Cadde üzerinde 4 eczane' },
      { icon: 'hospital', title: 'Gülhane Eğitim ve Araştırma Hastanesi (GATA)', dist: '1.8 km', desc: 'Araçla 6 dk' },
    ],
    yesil: [
      { icon: 'tree', title: 'Yunus Emre Parkı & Koşu Parkuru', dist: '200 m', desc: 'Yürüme 2 dk · Çocuk parkı ve yeşil alan' },
      { icon: 'tree', title: 'Keçiören Şelale & Botanik Parkı', dist: '1.5 km', desc: 'Araçla 5 dk · Aile rekreasyon alanı' },
      { icon: 'tree', title: 'Keçiören Belediyesi Kapalı Spor Kompleksi & Havuz', dist: '600 m', desc: 'Yürüme 8 dk' },
      { icon: 'tree', title: 'Kartaltepe Kent Ormanı', dist: '3.2 km', desc: 'Araçla 8 dk mesire alanı' },
    ],
    alisveris: [
      { icon: 'cart', title: 'Aşağı Eğlence Kapalı Semt Pazarı', dist: '280 m', desc: 'Salı & Cumartesi günleri taze pazar' },
      { icon: 'building', title: 'Antares AVM & Yaşam Merkezi', dist: '1.8 km', desc: 'Araçla 5 dk · Sinema, eğlence, mağazalar' },
      { icon: 'cart', title: 'Zincir Marketler (Migros, Bim, A101, Şok, Fırın)', dist: '80 m', desc: 'Apartmanın hemen karşısında' },
      { icon: 'coffee', title: 'Giresun Caddesi Kafe ve Restoranlar', dist: '350 m', desc: 'Sosyal yaşam aksı' },
    ],
  }

  // Endeks calculations
  const trend = listing.m2PriceTrend || []
  const prices = trend.map((t) => t.price)
  const districtPrices = trend.map((t) => t.districtPrice)
  const cityPrices = trend.map((t) => t.cityPrice)

  const minVal = Math.floor(Math.min(...cityPrices, 20000) * 0.9 / 5000) * 5000
  const maxVal = Math.ceil(Math.max(...prices, 60000) * 1.1 / 5000) * 5000
  const range = maxVal - minVal || 1

  const svgW = 740
  const svgH = 240
  const padL = 65
  const padR = 30
  const padT = 20
  const padB = 35
  const chartW = svgW - padL - padR
  const chartH = svgH - padT - padB

  const getX = (idx: number) => padL + (idx / Math.max(1, trend.length - 1)) * chartW
  const getY = (val: number) => padT + chartH - ((val - minVal) / range) * chartH

  const neighborhoodPath = trend
    .map((t, idx) => `${idx === 0 ? 'M' : 'L'} ${getX(idx).toFixed(1)} ${getY(t.price).toFixed(1)}`)
    .join(' ')
  const neighborhoodArea = `${neighborhoodPath} L ${getX(trend.length - 1).toFixed(1)} ${padT + chartH} L ${getX(0).toFixed(1)} ${padT + chartH} Z`
  const districtPath = trend
    .map((t, idx) => `${idx === 0 ? 'M' : 'L'} ${getX(idx).toFixed(1)} ${getY(t.districtPrice).toFixed(1)}`)
    .join(' ')
  const cityPath = trend
    .map((t, idx) => `${idx === 0 ? 'M' : 'L'} ${getX(idx).toFixed(1)} ${getY(t.cityPrice).toFixed(1)}`)
    .join(' ')

  const scrollToTabs = (tab: 'details' | 'location' | 'index') => {
    setActiveTab(tab)
    document.querySelector('.detail-tabs-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="detail-page">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumbs">
        <button onClick={onBack}>Ana Sayfa</button>
        <Icon name="chevron" size={13} />
        <span>Emlak</span>
        <Icon name="chevron" size={13} />
        <span>Konut</span>
        <Icon name="chevron" size={13} />
        <button onClick={onBack}>{listing.type}</button>
        <Icon name="chevron" size={13} />
        <span>{listing.city}</span>
        <Icon name="chevron" size={13} />
        <span>{listing.district}</span>
        <Icon name="chevron" size={13} />
        <span>{listing.neighborhood}</span>
      </div>

      {/* Header Row: Title & Actions */}
      <div className="detail-title-row">
        <div>
          <h1>{listing.title}</h1>
          <p style={{ margin: '6px 0 0', color: '#64748b', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Icon name="pin" size={15} />
            {listing.city} / {listing.district} / {listing.neighborhood}
          </p>
        </div>
        <div className="detail-actions">
          <button onClick={() => onToggleSave(listing.id)} style={{ color: isSaved ? 'var(--red)' : undefined }}>
            <Icon name="heart" size={16} /> {isSaved ? 'Favorilerimde' : 'Favorilerime Ekle'}
          </button>
          <button onClick={() => window.print()} title="İlanı Yazdır">
            <Icon name="print" size={16} /> Yazdır
          </button>
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
            <Icon name="share" size={16} /> Paylaş
          </button>
        </div>
      </div>

      {/* 2-Column Sahibinden Style Showcase */}
      <div className="sahibinden-top-grid">
        {/* Left Column: Gallery + Danışman (Sol Alt Tarafta) */}
        <div className="sahibinden-left-col">
          <div className="sahibinden-gallery-wrapper">
            <div className="sahibinden-gallery-row">
              {/* Vertical Thumbnails on the LEFT */}
              {images.length > 1 && (
                <div className="gallery-vertical-thumbs" ref={thumbsRef}>
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      className={`gallery-vthumb-item ${activeImageIndex === idx ? 'active' : ''}`}
                      onClick={() => setActiveImageIndex(idx)}
                      aria-label={`Fotoğraf ${idx + 1}`}
                    >
                      <img src={img} alt={`${listing.title} - ${idx + 1}`} />
                    </button>
                  ))}
                </div>
              )}

              {/* Main Display Frame on the RIGHT */}
              <div
                className="gallery-main-frame"
                onTouchStart={handleGalleryTouchStart}
                onTouchEnd={handleGalleryTouchEnd}
              >
                <img
                  src={images[activeImageIndex]}
                  alt={listing.title}
                  onClick={() => setIsLightboxOpen(true)}
                />
                {images.length > 1 && (
                  <>
                    <button
                      className="gallery-nav-btn gallery-nav-prev"
                      onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                      aria-label="Önceki fotoğraf"
                    >
                      ‹
                    </button>
                    <button
                      className="gallery-nav-btn gallery-nav-next"
                      onClick={() => setActiveImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                      aria-label="Sonraki fotoğraf"
                    >
                      ›
                    </button>
                  </>
                )}
                <div className="gallery-counter-badge">
                  {activeImageIndex + 1} / {images.length} Fotoğraf
                </div>
              </div>
            </div>

            {/* Quick Actions Bar */}
            <div className="gallery-action-bar">
              <button onClick={() => setIsLightboxOpen(true)}>
                <Icon name="fullscreen" size={15} /> Büyük Fotoğraf
              </button>
              <button onClick={() => scrollToTabs('location')}>
                <Icon name="compass" size={15} /> Harita & Konum
              </button>
              <button onClick={() => scrollToTabs('index')}>
                <Icon name="chart" size={15} /> Emlak Endeksi
              </button>
            </div>

            {/* Sub Navigation Links */}
            <div className="gallery-sub-links">
              <button onClick={() => scrollToTabs('index')}>
                <Icon name="chart" size={13} /> Emlak Endeksi
              </button>
              <span>|</span>
              <button onClick={onOpenConsultation}>
                <Icon name="check" size={13} /> Gayrimenkul Ekspertiz
              </button>
              <span>|</span>
              <button onClick={() => scrollToTabs('location')}>
                <Icon name="pin" size={13} /> Bölge Rehberi
              </button>
            </div>
          </div>

          {/* Gayrimenkul Danışmanı Kartı - SOL ALT TARAFTA */}
          <div className="sahibinden-agent-card agent-in-left-col">
            <div className="agent-badge-official">Yetkili Portföy Ofisi</div>
            <div className="agent-main-row">
              <img src="/renk-emlak-logo.png" alt="Renk Emlak" className="agent-brand-logo" />
              <div className="agent-details">
                <div className="agent-name-title">
                  <strong>Mesut KAYA</strong>
                  <span className="agent-cert-pill">Yetki Belge No: 0600124</span>
                </div>
                <span className="agent-agency">Renk Emlak Danışmanlık · Keçiören Temsilciliği</span>
                <p className="agent-bio">
                  Bölge uzmanı gayrimenkul danışmanımız ile doğrudan iletişime geçebilir, yerinde sunum ve ekspertiz randevusu talep edebilirsiniz.
                </p>
              </div>
            </div>
            <div className="agent-quick-actions">
              <a href="tel:03123521515" className="agent-phone-btn">
                <Icon name="phone" size={15} /> 0 (312) 352 15 15
              </a>
              <a
                href={`https://wa.me/905423521515?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="agent-wa-btn"
              >
                <Icon name="whatsapp" size={15} /> WhatsApp İle Mesaj Gönder
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Price & 27-row Specs Table */}
        <div className="sahibinden-info-col">
          <div className="sahibinden-price-card">
            <div>
              <strong>{listing.price}</strong>
              <div className="sahibinden-location-sub">
                {listing.city} / {listing.district} / {listing.neighborhood}
              </div>
            </div>
            <button
              onClick={onOpenConsultation}
              className="kredi-teklif-btn"
            >
              Kredi Teklifleri
            </button>
          </div>

          {/* Sahibinden Specification Table */}
          <div className="sahibinden-table-wrap">
            <table className="sahibinden-spec-table">
              <tbody>
                <tr>
                  <th>İlan No</th>
                  <td style={{ color: 'var(--red)', fontWeight: 700 }}>RNK-{listing.id}</td>
                </tr>
                <tr className="spec-eid-row">
                  <th>Taşınmaz No (EİD)</th>
                  <td>
                    <div className="spec-eid-cell">
                      <span className="spec-eid-badge">
                        {listing.eid}
                      </span>
                      <span className="spec-eid-verified" title="Ticaret Bakanlığı Elektronik İlan Doğrulama Sistemi">
                        <Icon name="check" size={11} /> EİDS Onaylı
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>İlan Tarihi</th>
                  <td>{listing.date}</td>
                </tr>
                <tr>
                  <th>Emlak Tipi</th>
                  <td>{listing.type}</td>
                </tr>
                <tr>
                  <th>m² (Brüt)</th>
                  <td>{listing.area}</td>
                </tr>
                <tr>
                  <th>m² (Net)</th>
                  <td>{listing.netArea}</td>
                </tr>
                <tr>
                  <th>Oda Sayısı</th>
                  <td>{listing.room}</td>
                </tr>
                <tr>
                  <th>Bina Yaşı</th>
                  <td>{listing.buildingAge}</td>
                </tr>
                <tr>
                  <th>Kat Sayısı</th>
                  <td>{listing.totalFloors}</td>
                </tr>
                <tr>
                  <th>Bulunduğu Kat</th>
                  <td>{listing.floor}</td>
                </tr>
                <tr>
                  <th>Isıtma</th>
                  <td>{listing.heating}</td>
                </tr>
                <tr>
                  <th>Banyo Sayısı</th>
                  <td>{listing.bathrooms}</td>
                </tr>
                <tr>
                  <th>Mutfak</th>
                  <td>{listing.kitchen}</td>
                </tr>
                <tr>
                  <th>Balkon</th>
                  <td>{listing.balcony}</td>
                </tr>
                <tr>
                  <th>Asansör</th>
                  <td>{listing.elevator}</td>
                </tr>
                <tr>
                  <th>Otopark</th>
                  <td>{listing.parking}</td>
                </tr>
                <tr>
                  <th>Eşyalı</th>
                  <td>{listing.furnished}</td>
                </tr>
                <tr>
                  <th>Kullanım Durumu</th>
                  <td>{listing.status}</td>
                </tr>
                <tr>
                  <th>Site İçerisinde</th>
                  <td>{listing.inSite}</td>
                </tr>
                <tr>
                  <th>Site Adı</th>
                  <td>{listing.siteName}</td>
                </tr>
                <tr>
                  <th>Aidat (TL)</th>
                  <td>{listing.dues}</td>
                </tr>
                <tr>
                  <th>Krediye Uygun</th>
                  <td>{listing.eligibleForLoan}</td>
                </tr>
                <tr>
                  <th>Enerji Kimlik Belgesi</th>
                  <td>{listing.energyRating}</td>
                </tr>
                <tr>
                  <th>Tapu Durumu</th>
                  <td>{listing.deedStatus}</td>
                </tr>
                <tr>
                  <th>Kimden</th>
                  <td>{listing.fromWho}</td>
                </tr>
                <tr>
                  <th>Takas</th>
                  <td>{listing.exchange}</td>
                </tr>
                <tr>
                  <th>Yetki Belge No</th>
                  <td>{listing.authCertNo}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 3 Detail Tabs: İlan Detayları | Konumu ve Bölge Bilgisi | Emlak Endeksi */}
      <section className="detail-tabs-section">
        <div className="detail-tabs-nav" role="tablist">
          <button
            className={`detail-tab-btn ${activeTab === 'details' ? 'active' : ''}`}
            onClick={() => setActiveTab('details')}
            role="tab"
            aria-selected={activeTab === 'details'}
          >
            İlan Detayları
          </button>
          <button
            className={`detail-tab-btn ${activeTab === 'location' ? 'active' : ''}`}
            onClick={() => setActiveTab('location')}
            role="tab"
            aria-selected={activeTab === 'location'}
          >
            Konumu ve Bölge Bilgisi
          </button>
          <button
            className={`detail-tab-btn ${activeTab === 'index' ? 'active' : ''}`}
            onClick={() => setActiveTab('index')}
            role="tab"
            aria-selected={activeTab === 'index'}
          >
            Emlak Endeksi
          </button>
        </div>

        <div className="detail-tab-pane">
          {/* TAB 1: İLAN DETAYLARI & AÇIKLAMA */}
          {activeTab === 'details' && (
            <div>
              <div className="tab-section-block">
                <div className="tab-section-title">
                  <span>Açıklama</span>
                </div>
                <div className="tab-desc-text">
                  {listing.description}
                  {'\n\n'}
                  <strong>Renk Emlak Güvencesiyle:</strong> Bu gayrimenkulün tüm tapu, imar, ada/parsel ve iskan kontrolleri uzman danışmanlarımız tarafından yerinde yapılmış olup Ticaret Bakanlığı EİDS (Elektronik İlan Doğrulama Sistemi) uyarınca <strong>{listing.eid}</strong> numarası ile yetkilendirilmiştir.
                </div>
              </div>

              {/* İç Özellikler */}
              <div className="tab-section-block">
                <div className="tab-section-title">
                  <span>İç Özellikler</span>
                </div>
                <div className="tab-features-grid">
                  {listing.interiorFeatures.map((feat) => (
                    <div key={feat} className="tab-feature-item">
                      <span className="tab-feature-check"><Icon name="check" size={12} /></span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dış Özellikler */}
              <div className="tab-section-block">
                <div className="tab-section-title">
                  <span>Dış Özellikler</span>
                </div>
                <div className="tab-features-grid">
                  {listing.exteriorFeatures.map((feat) => (
                    <div key={feat} className="tab-feature-item">
                      <span className="tab-feature-check"><Icon name="check" size={12} /></span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Muhit ve Konum Özellikleri */}
              <div className="tab-section-block">
                <div className="tab-section-title">
                  <span>Muhit & Ulaşım Özellikleri</span>
                </div>
                <div className="tab-features-grid">
                  {listing.neighborhoodFeatures.map((feat) => (
                    <div key={feat} className="tab-feature-item">
                      <span className="tab-feature-check"><Icon name="check" size={12} /></span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: KONUMU VE BÖLGE BİLGİSİ */}
          {activeTab === 'location' && (
            <div>
              <div className="location-top-bar">
                <div className="location-bar-left">
                  <button
                    className={`m2-toggle-btn ${showM2Map ? 'active' : ''}`}
                    onClick={() => setShowM2Map(!showM2Map)}
                  >
                    <span>m² Fiyat haritası</span>
                    <span className="m2-tag-new">Yeni</span>
                  </button>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${listing.lat},${listing.lng}`}
                    target="_blank"
                    rel="noreferrer"
                    className="how-to-go-btn"
                  >
                    <Icon name="compass" size={15} /> Nasıl Giderim?
                  </a>
                </div>
                <div className="map-view-toggle">
                  <button
                    className={mapType === 'normal' ? 'active' : ''}
                    onClick={() => setMapType('normal')}
                  >
                    Harita
                  </button>
                  <button
                    className={mapType === 'satellite' ? 'active' : ''}
                    onClick={() => setMapType('satellite')}
                  >
                    Uydu
                  </button>
                </div>
              </div>

              {showM2Map && (
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '10px 14px', marginBottom: '14px', fontSize: '13px', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Icon name="pin" size={15} />
                  <span><strong>{listing.neighborhood}</strong> ortalama metrekare satış fiyatı: <strong>₺{listing.pricePerM2.toLocaleString('tr-TR')} / m²</strong>. Bölge değer artış trendinde öncü konumdadır.</span>
                </div>
              )}

              {/* Interactive OpenStreetMap Frame */}
              <iframe
                title={`Harita - ${listing.title}`}
                className="tab-map-frame"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${listing.lng - 0.007}%2C${listing.lat - 0.004}%2C${listing.lng + 0.007}%2C${listing.lat + 0.004}&layer=mapnik&marker=${listing.lat}%2C${listing.lng}`}
                loading="lazy"
              />

              {/* Yakın Çevre Bilgisi */}
              <div className="nearby-section">
                <h3>Yakın çevre bilgisi</h3>
                <div className="nearby-category-pills">
                  {[
                    ['ulasim', 'Ulaşım'],
                    ['egitim', 'Eğitim'],
                    ['saglik', 'Sağlık'],
                    ['yesil', 'Yeşil Alan / Spor Tesisleri'],
                    ['alisveris', 'Alışveriş'],
                  ].map(([key, label]) => (
                    <button
                      key={key}
                      className={`nearby-pill-btn ${nearbyCat === key ? 'active' : ''}`}
                      onClick={() => setNearbyCat(key as typeof nearbyCat)}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <div className="nearby-items-grid">
                  {(nearbyPlaces[nearbyCat] || nearbyPlaces.ulasim).map((item, idx) => (
                    <div key={idx} className="nearby-item-card">
                      <span className="nearby-item-icon">
                        <Icon name={item.icon as any} size={16} />
                      </span>
                      <div className="nearby-item-info">
                        <strong>{item.title} · <span style={{ color: 'var(--purple)', fontWeight: 700 }}>{item.dist}</span></strong>
                        <span>{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: EMLAK ENDEKSİ */}
          {activeTab === 'index' && (
            <div className="emlak-endeksi-container">
              <div className="endeks-header-row">
                <h2>{listing.type.includes('Kira') ? 'Kiralık' : 'Satılık'} Konut Metrekare Fiyatı</h2>
                <div className="endeks-filter-group">
                  <div className="duration-pills">
                    {(['1', '2', '4'] as const).map((d) => (
                      <button
                        key={d}
                        className={endeksDuration === d ? 'active' : ''}
                        onClick={() => setEndeksDuration(d)}
                      >
                        {d} yıl
                      </button>
                    ))}
                  </div>
                  <div className="currency-pills">
                    {(['TL', 'TL_REEL', 'USD', 'EUR'] as const).map((c) => (
                      <button
                        key={c}
                        className={endeksCurrency === c ? 'active' : ''}
                        onClick={() => setEndeksCurrency(c)}
                      >
                        {c === 'TL_REEL' ? 'TL Reel Fiyat' : c}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Summary Cards */}
              <div className="endeks-summary-cards">
                <div className="endeks-stat-card">
                  <div className="stat-card-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Icon name="chart" size={13} />
                    <span>EYLÜL 2026 ORTALAMASI</span>
                  </div>
                  <div className="stat-card-value">
                    ₺{listing.pricePerM2.toLocaleString('tr-TR')} TL <span style={{ fontSize: '16px', color: '#64748b' }}>/ m²</span>
                  </div>
                </div>
                <div className="endeks-stat-card">
                  <div className="stat-card-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Icon name="trendUp" size={13} />
                    <span>1 YILLIK DEĞİŞİM</span>
                  </div>
                  <div className="stat-card-value">
                    <span className="stat-growth-tag">
                      {listing.yearlyChange} +
                    </span>
                  </div>
                </div>
              </div>

              {/* Chart Legend */}
              <div className="endeks-legend-row">
                <span>
                  <span className="legend-dot legend-ankara" /> Ankara Geneli (Ort. ₺45.400 / m²)
                </span>
                <span>
                  <span className="legend-dot legend-kecioren" /> Keçiören (Ort. ₺49.600 / m²)
                </span>
                <span>
                  <span className="legend-dot legend-mahalle" /> {listing.neighborhood} (₺{listing.pricePerM2.toLocaleString('tr-TR')} / m²)
                </span>
              </div>

              {/* Interactive SVG Chart */}
              <div className="endeks-chart-container">
                <svg viewBox={`0 0 ${svgW} ${svgH}`} className="endeks-chart-svg">
                  <defs>
                    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4b2c78" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#4b2c78" stopOpacity="0.01" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Grid lines */}
                  {[0, 0.25, 0.5, 0.75, 1].map((pct, i) => {
                    const y = padT + chartH * pct
                    const val = Math.round(maxVal - pct * range)
                    return (
                      <g key={i}>
                        <line x1={padL} y1={y} x2={svgW - padR} y2={y} stroke="#e2e8f0" strokeDasharray="4 4" />
                        <text x={padL - 10} y={y + 4} textAnchor="end" fontSize="11" fill="#94a3b8" fontFamily="DM Sans">
                          ₺{val.toLocaleString('tr-TR')}
                        </text>
                      </g>
                    )
                  })}

                  {/* Shaded Area under Neighborhood Curve */}
                  <path d={neighborhoodArea} fill="url(#areaGradient)" />

                  {/* City Trend Line (dashed neutral slate) */}
                  <path d={cityPath} fill="none" stroke="#8c8594" strokeWidth="2" strokeDasharray="5 4" />

                  {/* District Trend Line (dashed Renk red) */}
                  <path d={districtPath} fill="none" stroke="#ec3631" strokeWidth="2" strokeDasharray="4 3" />

                  {/* Neighborhood Line (solid Renk purple) */}
                  <path d={neighborhoodPath} fill="none" stroke="#4b2c78" strokeWidth="3" />

                  {/* Data Points on Neighborhood Line */}
                  {trend.map((t, idx) => {
                    const cx = getX(idx)
                    const cy = getY(t.price)
                    const isHovered = hoveredMonthIdx === idx
                    return (
                      <g key={idx} onMouseEnter={() => setHoveredMonthIdx(idx)} onMouseLeave={() => setHoveredMonthIdx(null)}>
                        <circle cx={cx} cy={cy} r={isHovered ? 7 : 4} fill="#4b2c78" stroke="white" strokeWidth={isHovered ? 3 : 2} style={{ cursor: 'pointer', transition: 'all 0.15s ease' }} />
                        <text x={cx} y={padT + chartH + 20} textAnchor="middle" fontSize="11" fill={isHovered ? '#17151d' : '#64748b'} fontWeight={isHovered ? '700' : '500'} fontFamily="DM Sans">
                          {t.month}
                        </text>
                      </g>
                    )
                  })}

                  {/* Hover Tooltip Box */}
                  {hoveredMonthIdx !== null && (
                    <g transform={`translate(${Math.min(svgW - 200, Math.max(padL, getX(hoveredMonthIdx) - 80))}, ${Math.max(10, getY(trend[hoveredMonthIdx].price) - 55)})`}>
                      <rect width="160" height="46" rx="6" fill="#0f172a" opacity="0.92" />
                      <text x="80" y="18" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="700" fontFamily="DM Sans">
                        {trend[hoveredMonthIdx].month}: ₺{trend[hoveredMonthIdx].price.toLocaleString('tr-TR')} / m²
                      </text>
                      <text x="80" y="34" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="DM Sans">
                        Keçiören: ₺{trend[hoveredMonthIdx].districtPrice.toLocaleString('tr-TR')}
                      </text>
                    </g>
                  )}
                </svg>
              </div>

              {/* Extra Investment Metrics */}
              <div className="endeks-metrics-row">
                <div className="endeks-mini-card">
                  <small>Amortisman (Geri Dönüş) Süresi</small>
                  <strong>{listing.amortizationYears} Yıl</strong>
                </div>
                <div className="endeks-mini-card">
                  <small>Yıllık Ortalama Kira Getirisi</small>
                  <strong>% 6.8</strong>
                </div>
                <div className="endeks-mini-card">
                  <small>Bölge Yatırım Skoru</small>
                  <strong style={{ color: 'var(--purple)' }}>8.9 / 10 (Yüksek Prim)</strong>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Fullscreen Modal */}
      {isLightboxOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            background: 'rgba(10, 10, 15, 0.95)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
          }}
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'none',
              border: 0,
              color: 'white',
              cursor: 'pointer',
            }}
          >
            <Icon name="close" size={32} />
          </button>

          <img
            src={images[activeImageIndex]}
            alt={listing.title}
            style={{
              maxWidth: '90vw',
              maxHeight: '80vh',
              objectFit: 'contain',
              borderRadius: '8px',
              touchAction: 'pan-y',
            }}
            onTouchStart={handleGalleryTouchStart}
            onTouchEnd={handleGalleryTouchEnd}
            onClick={(e) => e.stopPropagation()}
          />

          <div style={{ color: 'white', marginTop: '16px', fontSize: '14px', fontWeight: 600 }}>
            Fotoğraf {activeImageIndex + 1} / {images.length}
          </div>

          {images.length > 1 && (
            <div
              style={{ display: 'flex', gap: '10px', marginTop: '16px', overflowX: 'auto', maxWidth: '80vw' }}
              onClick={(e) => e.stopPropagation()}
            >
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  style={{
                    width: '70px',
                    height: '50px',
                    padding: 0,
                    borderRadius: '6px',
                    overflow: 'hidden',
                    border: activeImageIndex === idx ? '2px solid var(--purple)' : '2px solid transparent',
                    opacity: activeImageIndex === idx ? 1 : 0.6,
                    cursor: 'pointer',
                  }}
                >
                  <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </main>
  )
}

function ToastNotification({ message, onClose }: { message: string; onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="toast-notification-banner">
      <div className="toast-icon-wrap">
        <Icon name="check" size={16} />
      </div>
      <span className="toast-text">{message}</span>
      <button className="toast-close-btn" onClick={onClose} aria-label="Kapat">
        <Icon name="close" size={14} />
      </button>
    </div>
  )
}

function TermsModal({
  onClose,
  onAccept,
}: {
  onClose: () => void
  onAccept: () => void
}) {
  return (
    <div className="terms-modal-overlay" onClick={onClose}>
      <div className="terms-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="terms-modal-header">
          <h3>Renk Emlak Üyelik ve Hizmet Sözleşmesi</h3>
          <button onClick={onClose} aria-label="Kapat">
            <Icon name="close" size={18} />
          </button>
        </div>
        <div className="terms-modal-body">
          <h4>1. Taraflar ve Sözleşmenin Konusu</h4>
          <p>
            İşbu sözleşme, Renk Emlak Gayrimenkul Danışmanlığı (Ankara Keçiören) ile renkemlak.com portalına üye olan gerçek veya tüzel kişi ("Üye") arasında akdedilmiştir. Portal üzerinden gayrimenkul portföyü inceleme, ilan yayınlama, ekspertiz ve teklif hizmetlerinin şartlarını düzenler.
          </p>

          <h4>2. Ticaret Bakanlığı EİDS ve T.C.K.N Doğrulama Zorunluluğu</h4>
          <p>
            Ticaret Bakanlığı Taşınmaz Ticareti Hakkında Yönetmelik ve Elektronik İlan Doğrulama Sistemi (EİDS) genelgeleri doğrultusunda, gayrimenkul ilanı verme, portföy oluşturma veya ekspertiz talebinde bulunma işlemlerinde 11 haneli T.C. Kimlik Numarası (T.C.K.N) girilmesi ve doğrulanması kanunen zorunludur. Üye, sağladığı kimlik bilgilerinin güncel ve şahsına ait olduğunu beyan ve taahhüt eder.
          </p>

          <h4>3. Kişisel Verilerin Korunması (KVKK) Aydınlatması</h4>
          <p>
            6698 sayılı KVKK kapsamında üyelik formu aracılığıyla toplanan Ad-Soyad, Telefon, E-posta ve T.C.K.N verileri; yasal mevzuata uyum, tapu ve ada/parsel sorguları, danışman iletişimi ve güvenlik amacıyla işlenmektedir. Bilgileriniz hiçbir koşulda ticari amaçla üçüncü kişilere devredilmez.
          </p>

          <h4>4. Üyenin Hak ve Sorumlulukları</h4>
          <p>
            Üye, portföy ilanlarında doğru bilgi vermekle, üçüncü kişilerin mülkiyet haklarını ihlal etmemekle ve hesap bilgilerini gizli tutmakla yükümlüdür. Renk Emlak, mevzuata aykırı veya sahte ilanları kaldırma hakkını saklı tutar.
          </p>
        </div>
        <div className="terms-modal-footer">
          <button className="terms-accept-btn" onClick={onAccept}>
            Okudum, Anladım ve Kabul Ediyorum
          </button>
        </div>
      </div>
    </div>
  )
}

function AuthModal({
  initialMode = 'register',
  onClose,
  onLoginSuccess,
}: {
  initialMode?: 'login' | 'register'
  onClose: () => void
  onLoginSuccess: (user: AuthUser, message: string) => void
}) {
  const [mode, setMode] = useState<'register' | 'login'>(initialMode)
  const [accountType, setAccountType] = useState<'Bireysel' | 'Kurumsal'>('Bireysel')

  // Register Form State
  const [name, setName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [authCertNo, setAuthCertNo] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [tckn, setTckn] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [showTermsModal, setShowTermsModal] = useState(false)

  // Login Form State
  const [loginIdentifier, setLoginIdentifier] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(true)

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormError(null)

    if (tckn.length !== 11 || !/^\d{11}$/.test(tckn)) {
      setFormError('T.C. Kimlik Numarası tam 11 haneli rakamlardan oluşmalıdır.')
      return
    }

    if (password.length < 6) {
      setFormError('Parolanız en az 6 karakter uzunluğunda olmalıdır.')
      return
    }

    if (password !== passwordConfirm) {
      setFormError('Girdiğiniz parolalar birbiriyle eşleşmiyor.')
      return
    }

    if (!termsAccepted) {
      setFormError('Lütfen Hizmet Sözleşmesi\'ni okuyup kabul ediniz.')
      return
    }

    const newUser: AuthUser = {
      id: `RNK-${Date.now().toString().slice(-6)}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      tckn: tckn.trim(),
      accountType,
      companyName: accountType === 'Kurumsal' ? companyName.trim() : undefined,
      authCertNo: accountType === 'Kurumsal' ? authCertNo.trim() : undefined,
      registeredAt: new Date().toLocaleDateString('tr-TR'),
    }

    saveRegisteredUser(newUser)
    localStorage.setItem('renk_emlak_active_user', JSON.stringify(newUser))
    onLoginSuccess(newUser, `Tebrikler Sayın ${newUser.name}! Hesabınız başarıyla oluşturuldu ve sisteme giriş yapıldı.`)
    onClose()
  }

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormError(null)

    const identifier = loginIdentifier.trim().toLowerCase()
    const users = getRegisteredUsers()
    const matched = users.find(
      (u) =>
        u.email.toLowerCase() === identifier ||
        u.tckn === identifier ||
        u.phone.replace(/\D/g, '') === identifier.replace(/\D/g, '')
    )

    if (matched) {
      localStorage.setItem('renk_emlak_active_user', JSON.stringify(matched))
      onLoginSuccess(matched, `Giriş başarılı! Hoş geldiniz, Sayın ${matched.name}.`)
      onClose()
      return
    }

    // Mesut Kaya Danışman Demo
    if (identifier.includes('mesut') || identifier === '0600124') {
      const demo: AuthUser = {
        id: 'RNK-U001',
        name: 'Mesut KAYA',
        email: 'mesut@renkemlak.com',
        phone: '0 (312) 352 15 15',
        tckn: '19482015822',
        accountType: 'Kurumsal',
        companyName: 'Renk Emlak Gayrimenkul Danışmanlığı',
        authCertNo: '0600124',
        registeredAt: '01.01.2024',
      }
      localStorage.setItem('renk_emlak_active_user', JSON.stringify(demo))
      onLoginSuccess(demo, 'Mesut KAYA (Yetkili Gayrimenkul Danışmanı) olarak giriş yapıldı.')
      onClose()
      return
    }

    // Auto-create on valid email credentials
    if (identifier.includes('@') && loginPassword.length >= 6) {
      const autoUser: AuthUser = {
        id: `RNK-${Date.now().toString().slice(-6)}`,
        name: identifier.split('@')[0].toUpperCase(),
        email: identifier,
        phone: '0 (542) 352 15 15',
        tckn: '28471930281',
        accountType: 'Bireysel',
        registeredAt: new Date().toLocaleDateString('tr-TR'),
      }
      saveRegisteredUser(autoUser)
      localStorage.setItem('renk_emlak_active_user', JSON.stringify(autoUser))
      onLoginSuccess(autoUser, `Giriş başarılı! Hoş geldiniz, ${autoUser.name}.`)
      onClose()
      return
    }

    setFormError('Kullanıcı bilgisi bulunamadı. Lütfen bilgilerinizi kontrol edin veya "Hesap Oluştur" sekmesinden yeni üyelik oluşturun.')
  }

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-modal-window" onClick={(e) => e.stopPropagation()}>
        {/* Top Header Row with Logo & Title */}
        <div className="auth-modal-header">
          <div className="auth-logo-badge">
            <img src="/renk-emlak-logo.png" alt="Renk Emlak" />
          </div>
          <div className="auth-header-title-box">
            <h2>{mode === 'register' ? 'Hesap Oluştur' : 'Üye Girişi'}</h2>
          </div>
          <button className="auth-close-btn" onClick={onClose} aria-label="Kapat">
            <Icon name="close" size={20} />
          </button>
        </div>

        {/* Modal Body: Left White Card & Right Pitch */}
        <div className="auth-modal-body">
          {/* Left Column: Floating Form Card */}
          <div className="auth-form-card">
            <div className="auth-card-top-title">
              <Icon name={mode === 'register' ? 'userPlus' : 'user'} size={19} />
              <span>{mode === 'register' ? 'Hesap Oluştur' : 'Üye Girişi'}</span>
            </div>

            {formError && (
              <div className="auth-error-alert">
                <Icon name="info" size={15} />
                <span>{formError}</span>
              </div>
            )}

            {mode === 'register' ? (
              <form onSubmit={handleRegisterSubmit} className="auth-form-grid">
                {/* Üyelik Türü */}
                <div className="auth-row">
                  <span className="auth-row-label">Üyelik Türü;</span>
                  <div className="auth-radio-options">
                    <label className="auth-radio-label">
                      <input
                        type="radio"
                        name="accountType"
                        checked={accountType === 'Bireysel'}
                        onChange={() => setAccountType('Bireysel')}
                      />
                      <span>Bireysel</span>
                    </label>
                    <label className="auth-radio-label">
                      <input
                        type="radio"
                        name="accountType"
                        checked={accountType === 'Kurumsal'}
                        onChange={() => setAccountType('Kurumsal')}
                      />
                      <span>Kurumsal</span>
                    </label>
                  </div>
                </div>

                {/* Adınız Soyadınız */}
                <div className="auth-row">
                  <label className="auth-row-label">
                    {accountType === 'Kurumsal' ? 'Yetkili Ad Soyad' : 'Adınız Soyadınız'}
                  </label>
                  <input
                    type="text"
                    required
                    className="auth-input-box"
                    placeholder="Örn: Ahmet Yılmaz"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Kurumsal Bilgiler */}
                {accountType === 'Kurumsal' && (
                  <>
                    <div className="auth-row">
                      <label className="auth-row-label">Şirket Unvanı</label>
                      <input
                        type="text"
                        required
                        className="auth-input-box"
                        placeholder="Örn: Renk Emlak Gayrimenkul Ltd."
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </div>
                    <div className="auth-row">
                      <label className="auth-row-label">Yetki Belge No</label>
                      <input
                        type="text"
                        required
                        className="auth-input-box"
                        placeholder="Örn: 0600124 (Taşınmaz Ticareti)"
                        value={authCertNo}
                        onChange={(e) => setAuthCertNo(e.target.value)}
                      />
                    </div>
                  </>
                )}

                {/* E-Posta Adresiniz */}
                <div className="auth-row">
                  <label className="auth-row-label">E-Posta Adresiniz</label>
                  <input
                    type="email"
                    required
                    className="auth-input-box"
                    placeholder="ornek@mail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Gsm No */}
                <div className="auth-row">
                  <label className="auth-row-label">Gsm No</label>
                  <input
                    type="tel"
                    required
                    className="auth-input-box"
                    placeholder="0 (5XX) XXX XX XX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                {/* T.C.K.N */}
                <div className="auth-row">
                  <label className="auth-row-label">T.C.K.N</label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <input
                      type="text"
                      required
                      maxLength={11}
                      className="auth-input-box"
                      placeholder="11 Haneli T.C. Kimlik Numaranız"
                      value={tckn}
                      onChange={(e) => setTckn(e.target.value.replace(/\D/g, ''))}
                    />
                    <span className="auth-sub-hint">
                      Ticaret Bakanlığı EİDS mevzuatı uyarınca zorunludur.
                    </span>
                  </div>
                </div>

                {/* Parola Belirleyin */}
                <div className="auth-row">
                  <label className="auth-row-label">Parola Belirleyin</label>
                  <input
                    type="password"
                    required
                    minLength={6}
                    className="auth-input-box"
                    placeholder="En az 6 karakter"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* Parolayı Tekrar Yazın */}
                <div className="auth-row">
                  <label className="auth-row-label">Parolayı Tekrar Yazın</label>
                  <input
                    type="password"
                    required
                    minLength={6}
                    className="auth-input-box"
                    placeholder="Parolanızı tekrar yazın"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                  />
                </div>

                {/* Hizmet Sözleşmesi Checkbox */}
                <div className="auth-terms-row">
                  <label className="auth-checkbox-label">
                    <input
                      type="checkbox"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                    />
                    <span>
                      <button
                        type="button"
                        className="auth-terms-inline-link"
                        onClick={() => setShowTermsModal(true)}
                      >
                        Hizmet Sözleşmesi
                      </button>
                      'ni Okudum ve Kabul Ediyorum.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="auth-btn-row">
                  <button type="submit" className="auth-red-outline-btn">
                    <Icon name="userPlus" size={16} />
                    <span>Hesap Oluştur</span>
                  </button>
                </div>
              </form>
            ) : (
              /* LOGIN FORM */
              <form onSubmit={handleLoginSubmit} className="auth-form-grid">
                <div className="auth-row">
                  <label className="auth-row-label">E-Posta / T.C.K.N</label>
                  <input
                    type="text"
                    required
                    className="auth-input-box"
                    placeholder="E-posta, T.C.K.N veya Gsm"
                    value={loginIdentifier}
                    onChange={(e) => setLoginIdentifier(e.target.value)}
                  />
                </div>

                <div className="auth-row">
                  <label className="auth-row-label">Parolanız</label>
                  <input
                    type="password"
                    required
                    className="auth-input-box"
                    placeholder="••••••••"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>

                <div className="auth-login-options-row">
                  <label className="auth-checkbox-label">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <span>Beni Hatırla</span>
                  </label>
                  <button
                    type="button"
                    className="auth-forgot-link"
                    onClick={() => alert('Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.')}
                  >
                    Şifremi Unuttum?
                  </button>
                </div>

                <div className="auth-btn-row">
                  <button type="submit" className="auth-red-outline-btn" style={{ minWidth: '170px' }}>
                    <Icon name="user" size={16} />
                    <span>Giriş Yap</span>
                  </button>
                </div>

                {/* Quick Demo Login */}
                <div className="auth-demo-box">
                  <span className="auth-demo-label">Hızlı Test Girişi (1 Tıkla Giriş):</span>
                  <div className="auth-demo-buttons">
                    <button
                      type="button"
                      className="auth-demo-pill"
                      onClick={() => {
                        const demo: AuthUser = {
                          id: 'USR-DEMO1',
                          name: 'Ahmet Yılmaz',
                          email: 'ahmet.yilmaz@gmail.com',
                          phone: '0 (532) 412 88 90',
                          tckn: '38192049182',
                          accountType: 'Bireysel',
                          registeredAt: '01.11.2026',
                        }
                        localStorage.setItem('renk_emlak_active_user', JSON.stringify(demo))
                        onLoginSuccess(demo, 'Ahmet Yılmaz (Bireysel Müşteri) olarak giriş yapıldı.')
                        onClose()
                      }}
                    >
                      👤 Ahmet Yılmaz (Bireysel Müşteri)
                    </button>
                    <button
                      type="button"
                      className="auth-demo-pill"
                      onClick={() => {
                        const demo: AuthUser = {
                          id: 'USR-DANISMAN',
                          name: 'Mesut KAYA',
                          email: 'mesut@renkemlak.com',
                          phone: '0 (312) 352 15 15',
                          tckn: '19482015822',
                          accountType: 'Kurumsal',
                          companyName: 'Renk Emlak Gayrimenkul Danışmanlığı',
                          authCertNo: '0600124',
                          registeredAt: '01.01.2024',
                        }
                        localStorage.setItem('renk_emlak_active_user', JSON.stringify(demo))
                        onLoginSuccess(demo, 'Mesut KAYA (Yetkili Gayrimenkul Danışmanı) olarak giriş yapıldı.')
                        onClose()
                      }}
                    >
                      🏢 Mesut KAYA (Yetkili Gayrimenkul Danışmanı)
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Info & Toggle */}
          <div className="auth-side-col">
            {mode === 'register' ? (
              <>
                <p className="auth-side-pitch">
                  İlan yayınlamak ve tüm hizmetlerimizden faydalanmak için hemen hesap oluşturun.
                </p>
                <span className="auth-side-question">Zaten bir hesabınız var ise;</span>
                <button
                  type="button"
                  className="auth-side-action-btn"
                  onClick={() => {
                    setFormError(null)
                    setMode('login')
                  }}
                >
                  Üye Girişi Yap
                </button>
              </>
            ) : (
              <>
                <p className="auth-side-pitch">
                  İlanlarınızı yönetmek, favori portföyleri takip etmek ve EİDS onaylı güvenli teklifler vermek için giriş yapın.
                </p>
                <span className="auth-side-question">Henüz bir hesabınız yok mu?</span>
                <button
                  type="button"
                  className="auth-side-action-btn"
                  onClick={() => {
                    setFormError(null)
                    setMode('register')
                  }}
                >
                  Hesap Oluştur
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {showTermsModal && (
        <TermsModal
          onClose={() => setShowTermsModal(false)}
          onAccept={() => {
            setTermsAccepted(true)
            setShowTermsModal(false)
          }}
        />
      )}
    </div>
  )
}

function ConsultationModal({
  onClose,
  currentUser,
}: {
  onClose: () => void
  currentUser?: AuthUser | null
}) {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState(currentUser?.name || '')
  const [phone, setPhone] = useState(currentUser?.phone || '')
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
                backgroundColor: 'rgba(75, 44, 120, 0.12)',
                color: 'var(--purple)',
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
                  <span style={{ fontSize: '11px', color: 'var(--purple)', fontWeight: 600 }}>EİDS Doğrulama ✓</span>
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
                <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 400, marginTop: '2px', lineHeight: 1.4, display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                  <Icon name="info" size={15} />
                  <span><strong>Taşınmaz Numaranızı bilmiyor musunuz?</strong> E-Devlet hesabınıza giriş yaparak <em>"Tapu Bilgileri Sorgulama"</em> sayfasından mülkünüze ait Taşınmaz Numarasını (EİD) görebilirsiniz.</span>
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
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: 'login' | 'register' }>({
    isOpen: false,
    mode: 'register',
  })
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(() => {
    try {
      const saved = localStorage.getItem('renk_emlak_active_user')
      return saved ? JSON.parse(saved) : null
    } catch {
      return null
    }
  })
  const [toastMessage, setToastMessage] = useState<string | null>(null)

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

  const handleLoginSuccess = (user: AuthUser, message: string) => {
    setCurrentUser(user)
    setToastMessage(message)
  }

  const handleLogout = () => {
    localStorage.removeItem('renk_emlak_active_user')
    setCurrentUser(null)
    setToastMessage('Oturumunuz başarıyla kapatıldı.')
  }

  return (
    <div className="app">
      <Header
        onHome={goHome}
        onNavigate={handleNavigate}
        onOpenConsultation={() => setConsultationOpen(true)}
        onOpenAuth={(mode) => setAuthModal({ isOpen: true, mode })}
        currentUser={currentUser}
        onLogout={handleLogout}
      />
      {selected ? (
        <DetailPage
          listing={selected}
          onBack={goHome}
          isSaved={savedIds.has(selected.id)}
          onToggleSave={toggleSave}
          onOpenConsultation={() => setConsultationOpen(true)}
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
      {consultationOpen && (
        <ConsultationModal
          onClose={() => setConsultationOpen(false)}
          currentUser={currentUser}
        />
      )}
      {authModal.isOpen && (
        <AuthModal
          initialMode={authModal.mode}
          onClose={() => setAuthModal({ isOpen: false, mode: 'register' })}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
      {toastMessage && (
        <ToastNotification
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  )
}

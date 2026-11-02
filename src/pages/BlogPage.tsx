import { useState, useMemo } from 'react'
import { Icon } from '../components/Icon'
import { blogPosts, type BlogPost } from '../blogData'

interface BlogPageProps {
  onBackToHome: () => void
  onOpenConsultation: () => void
}

export function BlogPage({ onBackToHome, onOpenConsultation }: BlogPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü')
  const [searchQuery, setSearchQuery] = useState('')
  const [activePost, setActivePost] = useState<BlogPost | null>(null)

  const categories = ['Tümü', 'Yatırım Rehberi', 'Hukuk & EİDS', 'Bölge Analizi', 'Mimari & Trendler']

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchCat = selectedCategory === 'Tümü' || post.category === selectedCategory
      const q = searchQuery.toLowerCase().trim()
      const matchSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.summary.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q))
      return matchCat && matchSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <main className="info-page">
      {/* Breadcrumb */}
      <div className="breadcrumbs">
        <button onClick={onBackToHome}>Ana Sayfa</button>
        <Icon name="chevron" size={13} />
        <span>Rehber & İçerik</span>
        <Icon name="chevron" size={13} />
        <span className="current">Emlak Blogu</span>
      </div>

      {/* Page Hero Header */}
      <div className="info-hero-header">
        <span className="section-kicker">GAYRİMENKUL REHBERİ & BLOG</span>
        <h1 className="info-hero-title">
          Keçiören Emlak Piyasası, <em>Mevzuat</em> ve Yatırım Rehberi
        </h1>
        <p className="info-hero-subtitle">
          renkemlak.com arşivinden ve 37 yıllık saha tecrübemizden derlenen güncel emlak analizleri, EİDS sistemi ve alım-satım tavsiyeleri.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="blog-filter-bar">
        <div className="blog-category-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`blog-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="blog-search-box">
          <Icon name="search" size={16} />
          <input
            type="text"
            placeholder="Makale veya konu ara (örn: EİDS, Etlik, tapu)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className="blog-search-clear"
              onClick={() => setSearchQuery('')}
              aria-label="Aramayı temizle"
            >
              <Icon name="close" size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Blog Cards Grid */}
      {filteredPosts.length === 0 ? (
        <div className="blog-empty-state">
          <h3>Aradığınız kriterlere uygun makale bulunamadı</h3>
          <p>Farklı bir anahtar kelime deneyebilir veya tüm kategorileri görüntüleyebilirsiniz.</p>
          <button
            className="primary-button"
            onClick={() => {
              setSelectedCategory('Tümü')
              setSearchQuery('')
            }}
          >
            Tüm Yazıları Göster
          </button>
        </div>
      ) : (
        <div className="blog-cards-grid">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="blog-card"
              onClick={() => setActivePost(post)}
            >
              <div className="blog-card-media">
                <img src={post.image} alt={post.title} loading="lazy" />
                <span className="blog-category-badge">{post.category}</span>
                <span className="blog-read-time">
                  <Icon name="clock" size={12} /> {post.readTime}
                </span>
              </div>
              <div className="blog-card-body">
                <div className="blog-meta-row">
                  <span className="blog-author-name">{post.author}</span>
                  <span className="blog-date-dot">•</span>
                  <span className="blog-date-text">{post.date}</span>
                </div>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-summary">{post.summary}</p>
                <div className="blog-card-footer">
                  <div className="blog-tags-preview">
                    {post.tags.slice(0, 2).map((t) => (
                      <span key={t} className="blog-tag-pill">#{t}</span>
                    ))}
                  </div>
                  <span className="blog-read-more">
                    Yazıyı Oku <Icon name="arrow" size={14} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Single Blog Article Full Modal / View */}
      {activePost && (
        <div className="blog-article-overlay" onClick={() => setActivePost(null)}>
          <div className="blog-article-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="blog-modal-close-btn"
              onClick={() => setActivePost(null)}
              aria-label="Kapat"
            >
              <Icon name="close" size={20} />
            </button>

            {/* Modal Hero Header */}
            <div className="blog-modal-header">
              <div className="modal-header-top">
                <span className="modal-cat-badge">{activePost.category}</span>
                <span className="modal-read-time">
                  <Icon name="clock" size={13} /> {activePost.readTime}
                </span>
                <span className="modal-date">{activePost.date}</span>
              </div>
              <h2>{activePost.title}</h2>
              <div className="modal-author-row">
                <div className="modal-author-avatar">
                  {activePost.author.charAt(0)}
                </div>
                <div>
                  <strong>{activePost.author}</strong>
                  <span>{activePost.authorTitle}</span>
                </div>
              </div>
            </div>

            {/* Modal Image */}
            <div className="blog-modal-image">
              <img src={activePost.image} alt={activePost.title} />
            </div>

            {/* Modal Article Content */}
            <div className="blog-modal-body">
              <p className="blog-lead-summary">{activePost.summary}</p>
              <div className="blog-divider" />

              {activePost.content.map((sec, sIdx) => (
                <section key={sIdx} className="blog-content-section">
                  {sec.heading && <h3>{sec.heading}</h3>}
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </section>
              ))}

              {/* Tags Row */}
              <div className="blog-article-tags-row">
                <strong>Etiketler:</strong>
                {activePost.tags.map((tag) => (
                  <span key={tag} className="article-tag-item">#{tag}</span>
                ))}
              </div>

              {/* Consultation CTA Inside Blog */}
              <div className="blog-inner-cta">
                <div className="inner-cta-icon">
                  <Icon name="shield" size={28} />
                </div>
                <div className="inner-cta-content">
                  <h4>Bu Konuda Birebir Danışmanlık Almak İster misiniz?</h4>
                  <p>Keçiören bölgesindeki satılık veya kiralık gayrimenkulünüz için Mesut KAYA ve uzman ekibimizle doğrudan iletişime geçebilirsiniz.</p>
                  <div className="inner-cta-actions">
                    <button
                      className="primary-button"
                      onClick={() => {
                        setActivePost(null)
                        onOpenConsultation()
                      }}
                    >
                      Ekspertiz & Danışmanlık Talep Et
                    </button>
                    <a
                      href="tel:03123521515"
                      className="inner-cta-phone"
                    >
                      <Icon name="phone" size={14} /> 0 (312) 352 15 15
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA Banner */}
      <div className="info-cta-banner">
        <div>
          <h3>Gayrimenkul Piyasası Hakkında Sorunuz mu Var?</h3>
          <p>Yatırım analizi, ada/parsel durumu veya güncel kira getirisi hakkında danışmanlarımıza ücretsiz danışabilirsiniz.</p>
        </div>
        <button className="primary-button" onClick={onOpenConsultation}>
          Uzman Danışmana Sorun
        </button>
      </div>
    </main>
  )
}

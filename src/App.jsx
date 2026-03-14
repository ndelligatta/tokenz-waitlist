import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || loading) return
    setLoading(true)
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'waitlist', email }).toString(),
      })
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page">
      <div className="noise" />
      <div className="grid-bg" />

      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-logo">
            <svg className="logo-mark" width="18" height="18" viewBox="0 0 16 16" fill="none">
              <rect x="2.34" y="2.34" width="8" height="8" rx="1.5" transform="rotate(45 8 8)" fill="currentColor"/>
            </svg>
            <span className="logo-text">tokenz</span>
          </div>
          <a href="#waitlist" className="nav-cta">Get Early Access</a>
        </div>
      </nav>

      <main className="hero">
        <div className="hero-content">
          <div className="overline">
            <span className="pulse" />
            Launching on Solana
          </div>

          <h1 className="headline">
            Every post is a<br />token launch.
          </h1>

          <p className="subhead">
            Tokenz turns your social feed into a launchpad. Create posts,
            build communities, and launch fair tokens — powered by
            Meteora bonding curves.
          </p>

          <div id="waitlist" className="waitlist-section">
            {!submitted ? (
              <form className="waitlist-form" onSubmit={handleSubmit} name="waitlist" data-netlify="true">
                <input type="hidden" name="form-name" value="waitlist" />
                <div className="form-row">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="email-input"
                    autoComplete="email"
                  />
                  <button type="submit" className="submit-btn" disabled={loading}>
                    {loading ? (
                      <span className="spinner" />
                    ) : (
                      <>
                        Join waitlist
                        <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="success">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="var(--accent)" fillOpacity="0.15"/>
                  <path d="M6 10l3 3 5-6" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                You're in. We'll reach out soon.
              </div>
            )}
            <p className="waitlist-note">No spam. Early access + token launch priority.</p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="curve-container">
            <svg viewBox="0 0 400 280" className="bonding-curve" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="curveGrad" x1="0" y1="1" x2="0.5" y2="0">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.02"/>
                  <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.15"/>
                </linearGradient>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="var(--accent)" stopOpacity="1"/>
                </linearGradient>
              </defs>
              {[0,1,2,3,4,5].map(i => (
                <line key={`h${i}`} x1="0" y1={i * 48 + 16} x2="400" y2={i * 48 + 16} stroke="var(--border)" strokeWidth="0.5"/>
              ))}
              {[0,1,2,3,4,5,6,7].map(i => (
                <line key={`v${i}`} x1={i * 52 + 18} y1="0" x2={i * 52 + 18} y2="280" stroke="var(--border)" strokeWidth="0.5"/>
              ))}
              <path
                d="M20 260 C60 258 120 245 160 225 C200 200 230 165 270 110 C300 68 330 35 375 15"
                fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeLinecap="round"
                className="curve-line"
              />
              <path
                d="M20 260 C60 258 120 245 160 225 C200 200 230 165 270 110 C300 68 330 35 375 15 L375 260 Z"
                fill="url(#curveGrad)" className="curve-area"
              />
              <circle className="curve-dot" cx="305" cy="62" r="4.5" fill="var(--accent)">
                <animate attributeName="r" values="4;6.5;4" dur="2.5s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="1;0.6;1" dur="2.5s" repeatCount="indefinite"/>
              </circle>
              <circle cx="305" cy="62" r="14" fill="none" stroke="var(--accent)" strokeWidth="1">
                <animate attributeName="r" values="10;24;10" dur="2.5s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.35;0;0.35" dur="2.5s" repeatCount="indefinite"/>
              </circle>
            </svg>
            <div className="curve-label curve-label-price">Price</div>
            <div className="curve-label curve-label-supply">Supply</div>
            <div className="curve-badge">Bonding Curve</div>
          </div>
        </div>
      </main>

      <section className="features">
        <div className="features-inner">
          <div className="feature">
            <div className="feature-num">01</div>
            <h3>Post to Launch</h3>
            <p>Write a post, attach a token. Your followers buy in immediately through a fair bonding curve — no presales, no insiders.</p>
          </div>
          <div className="feature-divider" />
          <div className="feature">
            <div className="feature-num">02</div>
            <h3>Fair by Default</h3>
            <p>Meteora's Dynamic Bonding Curves ensure transparent, manipulation-resistant price discovery from the very first trade.</p>
          </div>
          <div className="feature-divider" />
          <div className="feature">
            <div className="feature-num">03</div>
            <h3>Social Meets DeFi</h3>
            <p>Follow creators, build communities, trade tokens — a real social feed with decentralized finance built into every interaction.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo">tokenz</span>
            <span className="footer-sep">/</span>
            <span className="footer-tagline">Social tokens, simplified.</span>
          </div>
          <span className="footer-copy">&copy; 2026</span>
        </div>
      </footer>
    </div>
  )
}

export default App

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
        body: new URLSearchParams({
          'form-name': 'waitlist',
          email,
        }).toString(),
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
      <div className="glow glow-1" />
      <div className="glow glow-2" />

      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-logo">
            <span className="logo-icon">T</span>
            <span className="logo-text">tokenz</span>
          </div>
        </div>
      </nav>

      <main className="hero">
        <div className="badge">Coming Soon on Solana</div>
        <h1 className="title">
          Launch tokens<br />
          <span className="gradient-text">from your feed.</span>
        </h1>
        <p className="subtitle">
          The social app where every post can become a token.
          Create, trade, and grow — all powered by Solana bonding curves.
        </p>

        {!submitted ? (
          <form className="waitlist-form" onSubmit={handleSubmit} name="waitlist" data-netlify="true">
            <input type="hidden" name="form-name" value="waitlist" />
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="email-input"
              />
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Joining...' : 'Join Waitlist'}
              </button>
            </div>
          </form>
        ) : (
          <div className="success-msg">
            <span className="success-check">&#10003;</span>
            You're on the list. We'll be in touch.
          </div>
        )}

        <p className="social-proof">Join early. Be first to launch.</p>

        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">&#9889;</div>
            <h3>Post &rarr; Token</h3>
            <p>Turn any post into a tradeable Solana SPL token with one tap.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1F4C8;</div>
            <h3>Bonding Curves</h3>
            <p>Fair launches powered by Meteora's Dynamic Bonding Curve protocol.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">&#x1F310;</div>
            <h3>Social First</h3>
            <p>Follow, like, comment, repost — a real social feed with DeFi built in.</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Tokenz</p>
      </footer>
    </div>
  )
}

export default App

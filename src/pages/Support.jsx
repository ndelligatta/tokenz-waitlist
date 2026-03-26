import '../legal.css'

export default function Support() {
  return (
    <div className="legal-page">
      <div className="noise" />
      <div className="grid-bg" />

      <nav className="legal-nav">
        <div className="legal-nav-inner">
          <a href="/" className="legal-nav-logo">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <rect x="2.34" y="2.34" width="8" height="8" rx="1.5" transform="rotate(45 8 8)" fill="currentColor"/>
            </svg>
            <span>tokenz</span>
          </a>
          <div className="legal-nav-links">
            <a href="/support">Support</a>
            <a href="/termsofservice">Terms</a>
            <a href="/privacy">Privacy</a>
          </div>
        </div>
      </nav>

      <main className="legal-content">
        <h1>Support</h1>
        <p className="legal-updated">We're here to help. Find answers below or reach out to our team.</p>

        <h2>Frequently Asked Questions</h2>

        <h3>How do I connect my wallet?</h3>
        <p>Tokenz supports Solana wallets via Mobile Wallet Adapter (Phantom, Solflare, etc.) on Android and WalletConnect on all platforms. Tap the wallet icon on the profile screen to connect.</p>

        <h3>How do I launch a token?</h3>
        <p>Create a post, then tap "Launch Token" to attach a Solana SPL token with a bonding curve. You'll set the token name, symbol, and image. The launch transaction is built and signed through your connected wallet.</p>

        <h3>What are the fees?</h3>
        <p>Token launches use Meteora Dynamic Bonding Curves with a 4% pre-bond and 4% post-bond trading fee. Standard Solana network fees also apply.</p>

        <h3>I lost access to my account</h3>
        <p>Your Tokenz profile is tied to your Solana wallet address. Reconnect the same wallet to recover your profile. We do not store private keys or seed phrases.</p>

        <h3>My transaction failed</h3>
        <p>Failed transactions can happen due to network congestion or insufficient SOL balance. Make sure you have enough SOL to cover the transaction plus network fees, then try again.</p>

        <div className="contact-card">
          <h3>Still need help?</h3>
          <p>Email us at <a href="mailto:support@tokenz.run">support@tokenz.run</a></p>
          <p>We typically respond within 24 hours.</p>
        </div>
      </main>

      <footer className="legal-footer">
        <div className="legal-footer-inner">
          <div className="legal-footer-links">
            <a href="/support">Support</a>
            <a href="/termsofservice">Terms of Service</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
          <span>&copy; 2026 Tokenz</span>
        </div>
      </footer>
    </div>
  )
}

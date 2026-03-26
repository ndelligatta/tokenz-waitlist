import '../legal.css'

export default function Privacy() {
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
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: March 25, 2026</p>

        <h2>1. Introduction</h2>
        <p>This Privacy Policy describes how Tokenz ("we", "our", "us") collects, uses, and protects information when you use our application ("App"). We are committed to protecting your privacy and handling your data responsibly.</p>

        <h2>2. Information We Collect</h2>

        <h3>Information you provide</h3>
        <ul>
          <li><strong>Profile information:</strong> Display name, username, bio, and profile picture that you set in the App.</li>
          <li><strong>Content:</strong> Posts, comments, and images you create and share on the platform.</li>
          <li><strong>Wallet address:</strong> Your public Solana wallet address when you connect your wallet.</li>
        </ul>

        <h3>Information collected automatically</h3>
        <ul>
          <li><strong>Usage data:</strong> Interactions with the App such as posts viewed, likes, and navigation patterns.</li>
          <li><strong>Device information:</strong> Device type, operating system, and app version.</li>
        </ul>

        <h3>Information we do NOT collect</h3>
        <ul>
          <li>Private keys or seed phrases</li>
          <li>Financial account information (bank accounts, credit cards)</li>
          <li>Precise geolocation data</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>To provide and maintain the App's functionality</li>
          <li>To display your profile and content to other users</li>
          <li>To send notifications about interactions (likes, comments, follows)</li>
          <li>To improve the App and develop new features</li>
          <li>To detect and prevent abuse or violations of our Terms of Service</li>
        </ul>

        <h2>4. Data Storage</h2>
        <p>Your data is stored using Supabase, a hosted database service. Profile information and content are stored on secure servers. Blockchain transactions (token launches, trades) are recorded on the public Solana blockchain and are not controlled by us.</p>

        <h2>5. Data Sharing</h2>
        <p>We do not sell your personal information. We may share data in the following limited circumstances:</p>
        <ul>
          <li><strong>Public content:</strong> Posts, comments, and profile information you make public are visible to other users.</li>
          <li><strong>Blockchain data:</strong> Token launches and wallet transactions are publicly visible on the Solana blockchain.</li>
          <li><strong>Legal requirements:</strong> We may disclose information if required by law or legal process.</li>
          <li><strong>Service providers:</strong> We use third-party services (Supabase, Solana RPC providers) to operate the App. These providers process data on our behalf.</li>
        </ul>

        <h2>6. Data Retention</h2>
        <p>We retain your data for as long as your account is active. You may request deletion of your profile data by contacting us. Note that blockchain transactions are permanent and cannot be deleted.</p>

        <h2>7. Security</h2>
        <p>We implement reasonable security measures to protect your data, including encrypted connections and access controls. However, no method of transmission or storage is 100% secure.</p>

        <h2>8. Your Rights</h2>
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to or restrict processing of your data</li>
          <li>Data portability</li>
        </ul>
        <p>To exercise these rights, contact us at <a href="mailto:support@tokenz.run">support@tokenz.run</a>.</p>

        <h2>9. Children's Privacy</h2>
        <p>The App is not intended for users under 18 years of age. We do not knowingly collect information from children under 18.</p>

        <h2>10. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of the App constitutes acceptance of the revised policy.</p>

        <h2>11. Contact</h2>
        <p>For privacy-related questions or requests, contact us at <a href="mailto:support@tokenz.run">support@tokenz.run</a>.</p>
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

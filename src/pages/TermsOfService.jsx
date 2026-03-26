import '../legal.css'

export default function TermsOfService() {
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
        <h1>Terms of Service</h1>
        <p className="legal-updated">Last updated: March 25, 2026</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using the Tokenz application ("App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.</p>

        <h2>2. Description of Service</h2>
        <p>Tokenz is a social media application that allows users to create posts, interact with other users, and launch Solana SPL tokens using bonding curve mechanisms. The App facilitates token creation and trading but does not custody user funds or tokens.</p>

        <h2>3. Eligibility</h2>
        <p>You must be at least 18 years old to use the App. By using Tokenz, you represent and warrant that you are of legal age and have the legal capacity to enter into these Terms.</p>

        <h2>4. Wallet and Account</h2>
        <ul>
          <li>You are solely responsible for maintaining the security of your Solana wallet and any associated private keys or seed phrases.</li>
          <li>Tokenz does not store, manage, or have access to your private keys.</li>
          <li>You are responsible for all activity that occurs through your connected wallet.</li>
        </ul>

        <h2>5. Token Launches</h2>
        <ul>
          <li>Tokens launched through Tokenz are deployed on the Solana blockchain using Meteora Dynamic Bonding Curves.</li>
          <li>You are solely responsible for any tokens you create, including compliance with applicable laws and regulations.</li>
          <li>Tokenz does not endorse, guarantee, or make any representations about the value, legality, or viability of any tokens launched on the platform.</li>
          <li>Token launches are irreversible once confirmed on the blockchain.</li>
        </ul>

        <h2>6. Fees</h2>
        <p>Token trading through bonding curves is subject to a 4% pre-bond and 4% post-bond trading fee. Solana network transaction fees also apply. Fee structures may change with notice.</p>

        <h2>7. Prohibited Conduct</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the App for any unlawful purpose or in violation of any applicable laws or regulations.</li>
          <li>Create tokens intended to defraud, mislead, or manipulate other users.</li>
          <li>Engage in market manipulation, wash trading, or other deceptive trading practices.</li>
          <li>Impersonate other users or entities.</li>
          <li>Post content that is abusive, harassing, defamatory, or violates the rights of others.</li>
          <li>Attempt to interfere with or disrupt the App or its infrastructure.</li>
          <li>Use bots, scripts, or automated tools to interact with the App without authorization.</li>
        </ul>

        <h2>8. Intellectual Property</h2>
        <p>The App, its design, features, and content (excluding user-generated content) are the property of Tokenz and are protected by intellectual property laws. You retain ownership of content you create and post on the platform.</p>

        <h2>9. Disclaimers</h2>
        <ul>
          <li>The App is provided "as is" and "as available" without warranties of any kind, express or implied.</li>
          <li>Tokenz does not provide financial, investment, legal, or tax advice. Token launches and trading involve substantial risk, including the potential loss of your entire investment.</li>
          <li>We do not guarantee the availability, reliability, or accuracy of the App or any blockchain transactions.</li>
        </ul>

        <h2>10. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, Tokenz and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App, including but not limited to loss of funds, failed transactions, or token value fluctuations.</p>

        <h2>11. Indemnification</h2>
        <p>You agree to indemnify and hold harmless Tokenz and its operators from any claims, damages, losses, or expenses arising from your use of the App, your violation of these Terms, or your violation of any applicable laws.</p>

        <h2>12. Modifications</h2>
        <p>We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated "Last updated" date. Continued use of the App after changes constitutes acceptance of the revised Terms.</p>

        <h2>13. Termination</h2>
        <p>We may suspend or terminate your access to the App at any time, with or without cause, and with or without notice. Tokens and assets on the blockchain remain accessible through your wallet independent of the App.</p>

        <h2>14. Governing Law</h2>
        <p>These Terms shall be governed by and construed in accordance with applicable laws. Any disputes shall be resolved through binding arbitration.</p>

        <h2>15. Contact</h2>
        <p>For questions about these Terms, contact us at <a href="mailto:support@tokenz.run">support@tokenz.run</a>.</p>
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

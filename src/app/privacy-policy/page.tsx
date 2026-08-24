const GT = "'GT Ultra Fine', Georgia, serif"
const LORA = "'Lora', Georgia, serif"

export default function PrivacyPolicyPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#F2EDE4', padding: '4rem 2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <a href="/" style={{ fontFamily: LORA, fontSize: '0.72rem', fontWeight: 400, color: '#C8A14A', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' as const, display: 'inline-block', marginBottom: '2rem' }}>← Back to Home</a>
        <h1 style={{ fontFamily: GT, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: '#2B2725', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>Privacy Policy</h1>
        <div style={{ height: '1px', width: '48px', background: '#C8A14A', margin: '0 0 2rem' }} />
        <div style={{ fontFamily: LORA, fontSize: '0.85rem', fontWeight: 300, lineHeight: 2, color: '#4A433D' }}>
          <p><strong>Effective Date:</strong> June 2026</p>
          <p>This website is operated by <strong>Global Business Assistance</strong>, an authorized marketing partner for Runwal Realty. We are committed to protecting the privacy of visitors to this website.</p>
          <h2 style={{ fontFamily: GT, fontSize: '1.4rem', fontWeight: 400, color: '#2B2725', margin: '2rem 0 0.75rem' }}>Information We Collect</h2>
          <p>When you submit an enquiry form on this website, we collect the following personal information:</p>
          <ul style={{ paddingLeft: '1.5rem', margin: '0.5rem 0 1rem' }}><li>Full Name</li><li>Email Address</li><li>Phone Number</li></ul>
          <h2 style={{ fontFamily: GT, fontSize: '1.4rem', fontWeight: 400, color: '#2B2725', margin: '2rem 0 0.75rem' }}>How We Use Your Information</h2>
          <p>Your personal information is used solely for the purpose of:</p>
          <ul style={{ paddingLeft: '1.5rem', margin: '0.5rem 0 1rem' }}><li>Responding to your enquiry about Runwal Raaya residences</li><li>Sharing brochures and project information</li><li>Connecting you with the Runwal Raaya sales team</li><li>Sending relevant updates about the project</li></ul>
          <h2 style={{ fontFamily: GT, fontSize: '1.4rem', fontWeight: 400, color: '#2B2725', margin: '2rem 0 0.75rem' }}>Data Sharing</h2>
          <p>We may share your information with Runwal Realty and their authorized representatives for the purpose of fulfilling your enquiry. We do not sell, rent, or trade your personal data to third parties for marketing purposes unrelated to this project.</p>
          <h2 style={{ fontFamily: GT, fontSize: '1.4rem', fontWeight: 400, color: '#2B2725', margin: '2rem 0 0.75rem' }}>Cookies &amp; Tracking</h2>
          <p>This website uses cookies and tracking technologies including Meta Pixel and Google Analytics for the purpose of:</p>
          <ul style={{ paddingLeft: '1.5rem', margin: '0.5rem 0 1rem' }}><li>Measuring advertising performance</li><li>Understanding user behavior on the website</li><li>Optimizing our marketing efforts</li></ul>
          <h2 style={{ fontFamily: GT, fontSize: '1.4rem', fontWeight: 400, color: '#2B2725', margin: '2rem 0 0.75rem' }}>Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, or destruction.</p>
          <h2 style={{ fontFamily: GT, fontSize: '1.4rem', fontWeight: 400, color: '#2B2725', margin: '2rem 0 0.75rem' }}>Your Rights</h2>
          <ul style={{ paddingLeft: '1.5rem', margin: '0.5rem 0 1rem' }}><li>Request access to your personal data</li><li>Request correction of inaccurate data</li><li>Request deletion of your data</li><li>Opt out of marketing communications</li></ul>
          <h2 style={{ fontFamily: GT, fontSize: '1.4rem', fontWeight: 400, color: '#2B2725', margin: '2rem 0 0.75rem' }}>Contact Us</h2>
          <p>For any privacy-related queries, contact us at:<br />Phone: +91 9240237915<br />Operated by: Global Business Assistance (Authorized Marketing Partner for Runwal Realty)</p>
          <h2 style={{ fontFamily: GT, fontSize: '1.4rem', fontWeight: 400, color: '#2B2725', margin: '2rem 0 0.75rem' }}>Changes to This Policy</h2>
          <p>We reserve the right to update this Privacy Policy at any time. Changes will be effective immediately upon posting on this page.</p>
        </div>
      </div>
    </div>
  )
}

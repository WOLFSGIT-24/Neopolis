const GT = "'GT Ultra Fine', Georgia, serif"
const LORA = "'Lora', Georgia, serif"

export default function TermsPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#F2EDE4', padding: '4rem 2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <a href="/" style={{ fontFamily: LORA, fontSize: '0.72rem', fontWeight: 400, color: '#C8A14A', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' as const, display: 'inline-block', marginBottom: '2rem' }}>← Back to Home</a>
        <h1 style={{ fontFamily: GT, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: '#2B2725', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>Terms &amp; Conditions</h1>
        <div style={{ height: '1px', width: '48px', background: '#C8A14A', margin: '0 0 2rem' }} />
        <div style={{ fontFamily: LORA, fontSize: '0.85rem', fontWeight: 300, lineHeight: 2, color: '#4A433D' }}>
          <p><strong>Effective Date:</strong> June 2026</p>
          <p>By accessing and using this website, you agree to be bound by these Terms and Conditions. This website is operated by <strong>Global Business Assistance</strong>, an authorized marketing partner for Runwal Realty.</p>
          <h2 style={{ fontFamily: GT, fontSize: '1.4rem', fontWeight: 400, color: '#2B2725', margin: '2rem 0 0.75rem' }}>1. Website Purpose</h2>
          <p>This website has been created for the sole purpose of providing information and generating enquiries for Runwal Raaya, a real estate project by Runwal Realty located at Worli, Mumbai. This is not the official website of Runwal Realty.</p>
          <h2 style={{ fontFamily: GT, fontSize: '1.4rem', fontWeight: 400, color: '#2B2725', margin: '2rem 0 0.75rem' }}>2. Disclaimer</h2>
          <ul style={{ paddingLeft: '1.5rem', margin: '0.5rem 0 1rem' }}>
            <li>This website is managed by an authorized sales/marketing partner and is not the official Runwal Realty website.</li>
            <li>All images, renders, and layouts shown are artistic impressions and may not represent the final product.</li>
            <li>Prices, specifications, amenities, and availability are subject to change without prior notice.</li>
            <li>The developer reserves the right to make changes to the project as they deem fit.</li>
          </ul>
          <h2 style={{ fontFamily: GT, fontSize: '1.4rem', fontWeight: 400, color: '#2B2725', margin: '2rem 0 0.75rem' }}>3. Information Accuracy</h2>
          <p>While we strive to keep the information on this website accurate and up to date, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of any information presented. Any reliance you place on such information is strictly at your own risk.</p>
          <h2 style={{ fontFamily: GT, fontSize: '1.4rem', fontWeight: 400, color: '#2B2725', margin: '2rem 0 0.75rem' }}>4. Enquiry &amp; Communication</h2>
          <p>By submitting your contact details through any form on this website, you consent to being contacted by our team and/or the Runwal Raaya sales team via phone, email, SMS, or WhatsApp regarding the project.</p>
          <h2 style={{ fontFamily: GT, fontSize: '1.4rem', fontWeight: 400, color: '#2B2725', margin: '2rem 0 0.75rem' }}>5. Intellectual Property</h2>
          <p>All content on this website including text, images, logos, and design is either owned by or licensed to Global Business Assistance and/or Runwal Realty. Unauthorized reproduction or distribution is prohibited.</p>
          <h2 style={{ fontFamily: GT, fontSize: '1.4rem', fontWeight: 400, color: '#2B2725', margin: '2rem 0 0.75rem' }}>6. RERA Compliance</h2>
          <p>MahaRERA Registration No(s): P51900080218, P51900080252<br />
          Available at: <a href="http://maharera.mahaonline.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: '#C8A14A' }}>maharera.mahaonline.gov.in</a></p>
          <h2 style={{ fontFamily: GT, fontSize: '1.4rem', fontWeight: 400, color: '#2B2725', margin: '2rem 0 0.75rem' }}>7. Limitation of Liability</h2>
          <p>In no event shall Global Business Assistance or Runwal Realty be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or reliance on any information provided herein.</p>
          <h2 style={{ fontFamily: GT, fontSize: '1.4rem', fontWeight: 400, color: '#2B2725', margin: '2rem 0 0.75rem' }}>8. Governing Law</h2>
          <p>These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.</p>
          <h2 style={{ fontFamily: GT, fontSize: '1.4rem', fontWeight: 400, color: '#2B2725', margin: '2rem 0 0.75rem' }}>9. Contact</h2>
          <p>For any queries regarding these terms:<br />
          Phone: +91 9240237915<br />
          Operated by: Global Business Assistance (Authorized Marketing Partner for Runwal Realty)</p>
        </div>
      </div>
    </div>
  )
}

import { Layout } from '../components/layout/Layout';
import { PageHeader } from '../components/layout/PageHeader';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <PageHeader
        title="Privacy Policy"
        description="We respect your privacy and are committed to protecting your personal data."
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-blue text-gray-600">

        <h3>1. Introduction</h3>
        <p>
          This Privacy Policy explains how HiTechDevs (hitechdevs.online) collects, uses, stores, and protects your information when you visit our website. By using our site, you agree to the collection and use of information in accordance with this policy.
        </p>
        <p>
          We are committed to ensuring that your privacy is protected. This policy complies with applicable data protection laws including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
        </p>

        <h3>2. Definitions</h3>
        <ul>
          <li><strong>"Personal Data"</strong> means any information that can identify you directly or indirectly</li>
          <li><strong>"Cookies"</strong> are small files stored on your device that help websites remember information</li>
          <li><strong>"Processing"</strong> refers to any operation performed on personal data (collecting, storing, using, etc.)</li>
          <li><strong>"Third-Party"</strong> refers to external companies or services not operated by us</li>
          <li><strong>"Affiliate Link"</strong> refers to tracked links that may generate commission when you make a purchase</li>
        </ul>

        <h3>3. Information We Collect</h3>

        <h4>3.1 Information Collected Automatically</h4>
        <p>When you visit our website, we automatically collect:</p>
        <ul>
          <li><strong>Log Data:</strong> IP address, browser type and version, operating system, referring URL, pages visited, time and date of visit, time spent on pages</li>
          <li><strong>Device Information:</strong> Device type, screen resolution, language preferences</li>
          <li><strong>Location Data:</strong> General geographic location based on IP address (country/region level)</li>
        </ul>

        <h4>3.2 Information You Provide</h4>
        <p>We may collect information you voluntarily provide:</p>
        <ul>
          <li><strong>Contact Information:</strong> Name and email address when you contact us</li>
          <li><strong>Communication Data:</strong> Messages, feedback, or inquiries you send us</li>
        </ul>

        <h4>3.3 Information from Third Parties</h4>
        <p>We may receive limited information from analytics providers about aggregated user behavior on our site.</p>

        <h3>4. Cookies and Tracking Technologies</h3>

        <h4>4.1 Types of Cookies We Use</h4>
        <ul>
          <li><strong>Essential Cookies:</strong> Required for the website to function properly (e.g., cookie consent preferences)</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
          <li><strong>Affiliate Cookies:</strong> Track referrals when you click on affiliate links to third-party websites</li>
        </ul>

        <h4>4.2 Third-Party Cookies</h4>
        <p>
          When you click on affiliate links, third-party websites (such as domain registrars and hosting providers) may place their own cookies on your device. These cookies are governed by the privacy policies of those third parties, and we have no control over them.
        </p>

        <h4>4.3 Managing Cookies</h4>
        <p>
          You can control cookies through your browser settings. You can choose to block all cookies, accept all cookies, or receive a notification when a cookie is set. Note that blocking essential cookies may affect website functionality.
        </p>

        <h3>5. How We Use Your Information</h3>
        <p>We use the collected data for the following purposes:</p>
        <ul>
          <li>To provide, operate, and maintain our website</li>
          <li>To understand how visitors use our website and improve user experience</li>
          <li>To analyze trends and generate aggregated statistics</li>
          <li>To detect, prevent, and address technical issues or security threats</li>
          <li>To respond to your inquiries and provide customer support</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h3>6. Legal Basis for Processing (GDPR)</h3>
        <p>If you are in the European Economic Area (EEA), we process your data based on:</p>
        <ul>
          <li><strong>Consent:</strong> You have given consent for specific purposes (e.g., accepting cookies)</li>
          <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate business interests (e.g., analytics, security) that do not override your rights</li>
          <li><strong>Legal Obligation:</strong> Processing is necessary to comply with applicable laws</li>
        </ul>

        <h3>7. Affiliate Links and Third-Party Services</h3>

        <h4>7.1 Affiliate Disclosure</h4>
        <p>
          Our website contains affiliate links to third-party services including domain registrars and web hosting providers. When you click these links and make a purchase, we may earn a commission at no additional cost to you.
        </p>

        <h4>7.2 Third-Party Data Collection</h4>
        <p>When you click an affiliate link, the third-party website may collect:</p>
        <ul>
          <li>Referral information (that you came from our website)</li>
          <li>Cookies to track the affiliate relationship</li>
          <li>Any information you provide during purchase</li>
        </ul>
        <p>
          We are not responsible for the privacy practices of third-party websites. We encourage you to read their privacy policies before providing any personal information.
        </p>

        <h4>7.3 Analytics Services</h4>
        <p>
          We may use third-party analytics services (such as Google Analytics) to help analyze how users interact with our website. These services may collect information about your visits using cookies and similar technologies. You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.
        </p>

        <h3>8. Data Retention</h3>
        <p>
          We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy:
        </p>
        <ul>
          <li><strong>Log Data:</strong> Retained for up to 26 months for analytics purposes</li>
          <li><strong>Contact Information:</strong> Retained until you request deletion or for as long as needed to address your inquiry</li>
          <li><strong>Cookie Consent:</strong> Your preference is stored in your browser's local storage</li>
        </ul>

        <h3>9. Data Sharing and Disclosure</h3>
        <p>We do not sell your personal data. We may share your information only in the following circumstances:</p>
        <ul>
          <li><strong>Service Providers:</strong> With trusted third-party services that help us operate our website (e.g., hosting, analytics)</li>
          <li><strong>Legal Requirements:</strong> If required by law, court order, or government request</li>
          <li><strong>Protection of Rights:</strong> To protect our rights, privacy, safety, or property</li>
          <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
        </ul>

        <h3>10. Data Security</h3>
        <p>
          We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include:
        </p>
        <ul>
          <li>HTTPS encryption for all data transmission</li>
          <li>Regular security assessments</li>
          <li>Limited access to personal data on a need-to-know basis</li>
        </ul>
        <p>
          However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
        </p>

        <h3>11. Your Privacy Rights</h3>

        <h4>11.1 Rights for All Users</h4>
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Opt out of analytics tracking</li>
          <li>Withdraw consent at any time</li>
        </ul>

        <h4>11.2 Additional Rights for EEA Residents (GDPR)</h4>
        <p>If you are in the European Economic Area, you also have the right to:</p>
        <ul>
          <li>Data portability (receive your data in a structured format)</li>
          <li>Restrict processing of your data</li>
          <li>Object to processing based on legitimate interests</li>
          <li>Lodge a complaint with a supervisory authority</li>
        </ul>

        <h4>11.3 California Residents (CCPA)</h4>
        <p>If you are a California resident, you have the right to:</p>
        <ul>
          <li>Know what personal information is collected about you</li>
          <li>Know whether your personal information is sold or disclosed</li>
          <li>Say no to the sale of personal information (we do not sell your data)</li>
          <li>Request deletion of your personal information</li>
          <li>Not be discriminated against for exercising your privacy rights</li>
        </ul>

        <h3>12. Children's Privacy</h3>
        <p>
          Our website is not intended for children under the age of 16. We do not knowingly collect personal data from children. If you are a parent or guardian and believe your child has provided us with personal data, please contact us, and we will take steps to delete such information.
        </p>

        <h3>13. International Data Transfers</h3>
        <p>
          Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. By using our website, you consent to such transfers. We ensure appropriate safeguards are in place to protect your data.
        </p>

        <h3>14. Do Not Track Signals</h3>
        <p>
          Some browsers have a "Do Not Track" feature that signals to websites that you do not want your online activity tracked. Our website currently does not respond to Do Not Track signals, but you can manage cookies through your browser settings or opt out of analytics tracking.
        </p>

        <h3>15. Changes to This Policy</h3>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
        </p>

        <h3>16. Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, want to exercise your privacy rights, or have concerns about how we handle your data, please contact us:
        </p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:support@hitechdevs.online">support@hitechdevs.online</a></li>
          <li><strong>Website:</strong> <a href="https://hitechdevs.online/contact">hitechdevs.online/contact</a></li>
        </ul>
        <p>
          We will respond to your request within 30 days.
        </p>

        <p className="mt-8 pt-8 border-t border-gray-200 text-sm">
          Last updated: February 2026
        </p>
      </div>
    </Layout>
  );
}

import { Layout } from '../components/layout/Layout';
import { PageHeader } from '../components/layout/PageHeader';

export default function CookiesPolicy() {
  return (
    <Layout>
      <PageHeader
        title="Cookies Policy"
        description="Learn how we use cookies and similar technologies on our website."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg prose-brand mx-auto text-gray-600">

          {/* 1. Introduction */}
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-6">1. Introduction</h2>
          <p>
            This Cookies Policy explains what cookies are, how HiTechDevs (hitechdevs.online) uses cookies and similar tracking technologies, and your choices regarding their use. This policy should be read alongside our <a href="/privacy" className="text-brand-600 hover:text-brand-700 underline">Privacy Policy</a>.
          </p>
          <p>
            By continuing to use our website, you consent to our use of cookies in accordance with this policy. If you do not agree, you can disable cookies through your browser settings or leave the website.
          </p>

          {/* 2. Definitions */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. Definitions</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>"Cookies"</strong> - Small text files placed on your device when you visit a website</li>
            <li><strong>"First-Party Cookies"</strong> - Cookies set by the website you are visiting (hitechdevs.online)</li>
            <li><strong>"Third-Party Cookies"</strong> - Cookies set by external services (analytics, affiliate networks, etc.)</li>
            <li><strong>"Session Cookies"</strong> - Temporary cookies deleted when you close your browser</li>
            <li><strong>"Persistent Cookies"</strong> - Cookies that remain on your device for a set period or until deleted</li>
            <li><strong>"Local Storage"</strong> - Similar to cookies but can store larger amounts of data in your browser</li>
          </ul>

          {/* 3. What Are Cookies */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. What Are Cookies</h2>
          <p>
            Cookies are small text files stored on your device (computer, tablet, or mobile phone) when you visit websites. They are widely used to make websites work efficiently, provide information to website owners, and enable certain features.
          </p>
          <p>
            Cookies serve various purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Remember your preferences and settings</li>
            <li>Keep you signed in (if applicable)</li>
            <li>Understand how you use our website</li>
            <li>Improve your browsing experience</li>
            <li>Track referrals for affiliate marketing</li>
          </ul>
          <p className="mt-4">
            Cookies do not typically contain personal information that directly identifies you, but they may be linked to personal data we store about you.
          </p>

          {/* 4. How We Use Cookies */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">4. How We Use Cookies</h2>
          <p>At HiTechDevs, we use cookies and similar technologies to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4 mb-8">
            <li><strong>Ensure Functionality:</strong> Make sure the website works correctly and remember your preferences (such as cookie consent)</li>
            <li><strong>Analyze Traffic:</strong> Understand how visitors find and use our site, which pages are popular, and how we can improve</li>
            <li><strong>Measure Performance:</strong> Track page load times and identify technical issues</li>
            <li><strong>Support Affiliate Tracking:</strong> When you click links to third-party providers (domain registrars, hosting companies), cookies track the referral so we receive credit for the recommendation</li>
            <li><strong>Remember Preferences:</strong> Store your cookie consent choice and other settings</li>
          </ul>

          {/* 5. Types of Cookies We Use */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">5. Types of Cookies We Use</h2>

          <div className="space-y-8 mt-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">5.1 Essential Cookies (Strictly Necessary)</h3>
              <p className="mb-4">
                These cookies are required for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies.
              </p>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 font-semibold">Cookie Name</th>
                    <th className="text-left py-2 font-semibold">Purpose</th>
                    <th className="text-left py-2 font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">cookieConsent</td>
                    <td className="py-2">Stores your cookie consent preference</td>
                    <td className="py-2">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">5.2 Analytics Cookies (Performance)</h3>
              <p className="mb-4">
                These cookies collect anonymous information about how visitors use our website. They help us understand which pages are most popular, how visitors navigate the site, and if they encounter errors. All data is aggregated and anonymous.
              </p>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 font-semibold">Cookie Name</th>
                    <th className="text-left py-2 font-semibold">Provider</th>
                    <th className="text-left py-2 font-semibold">Purpose</th>
                    <th className="text-left py-2 font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">_ga</td>
                    <td className="py-2">Google Analytics</td>
                    <td className="py-2">Distinguishes unique users</td>
                    <td className="py-2">2 years</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">_ga_*</td>
                    <td className="py-2">Google Analytics</td>
                    <td className="py-2">Maintains session state</td>
                    <td className="py-2">2 years</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">_gid</td>
                    <td className="py-2">Google Analytics</td>
                    <td className="py-2">Distinguishes unique users</td>
                    <td className="py-2">24 hours</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">_gat</td>
                    <td className="py-2">Google Analytics</td>
                    <td className="py-2">Throttles request rate</td>
                    <td className="py-2">1 minute</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">5.3 Affiliate & Marketing Cookies</h3>
              <p className="mb-4">
                Our website contains affiliate links to domain registrars and web hosting providers. When you click these links, third-party cookies may be placed on your device to track the referral. This is how we earn commissions that keep our content free.
              </p>
              <p className="mb-4">
                <strong>Important:</strong> These cookies are set by the third-party websites you visit, not by us. We do not control these cookies.
              </p>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 font-semibold">Provider</th>
                    <th className="text-left py-2 font-semibold">Purpose</th>
                    <th className="text-left py-2 font-semibold">Typical Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">Namecheap</td>
                    <td className="py-2">Affiliate referral tracking</td>
                    <td className="py-2">30-90 days</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">Bluehost</td>
                    <td className="py-2">Affiliate referral tracking</td>
                    <td className="py-2">30-90 days</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">Hostinger</td>
                    <td className="py-2">Affiliate referral tracking</td>
                    <td className="py-2">30-90 days</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">SiteGround</td>
                    <td className="py-2">Affiliate referral tracking</td>
                    <td className="py-2">30-90 days</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">Other Providers</td>
                    <td className="py-2">Affiliate referral tracking</td>
                    <td className="py-2">30-90 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-brand-50 border-l-4 border-brand-600 p-6 mt-10 rounded-r-lg">
            <p className="text-brand-800 font-medium">
              <strong>Important Note:</strong> We never store sensitive personal information like passwords, credit card numbers, or financial data in cookies.
            </p>
          </div>

          {/* 6. Third-Party Cookies */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">6. Third-Party Cookies</h2>
          <p>
            In addition to our own cookies, third-party services may place cookies on your device when you interact with our website. These include:
          </p>

          <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">6.1 Analytics Providers</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Google Analytics:</strong> We use Google Analytics to understand how visitors use our website. Google may use this data in accordance with their <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 underline">Privacy Policy</a>.</li>
          </ul>

          <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">6.2 Affiliate Networks</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Domain Registrars:</strong> Namecheap, GoDaddy, Dynadot, Porkbun, Hover, and others</li>
            <li><strong>Hosting Providers:</strong> Bluehost, Hostinger, SiteGround, A2 Hosting, DreamHost, Cloudways, Kinsta, and others</li>
          </ul>
          <p className="mt-4">
            Each of these providers has their own cookie and privacy policies. We encourage you to review their policies when visiting their websites.
          </p>

          {/* 7. Cookie Duration */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">7. Cookie Duration</h2>
          <p>Cookies can be classified by how long they remain on your device:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Session Cookies:</strong> These are temporary and are deleted when you close your browser. They are used for essential functions like maintaining your session.</li>
            <li><strong>Persistent Cookies:</strong> These remain on your device for a specified period (or until you delete them). They are used to remember your preferences across visits.</li>
          </ul>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Typical Cookie Lifespans on Our Site</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cookie Consent:</strong> 1 year</li>
              <li><strong>Analytics Cookies:</strong> 24 hours to 2 years</li>
              <li><strong>Affiliate Cookies:</strong> 30 to 90 days (set by third parties)</li>
            </ul>
          </div>

          {/* 8. Managing Your Cookies */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">8. Managing Your Cookies</h2>
          <p>
            You have several options to control and manage cookies:
          </p>

          <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">8.1 Cookie Consent Banner</h3>
          <p>
            When you first visit our website, you will see a cookie consent banner. You can choose to accept all cookies or decline non-essential cookies. Your choice is stored and remembered for future visits.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">8.2 Browser Settings</h3>
          <p>
            Most browsers allow you to control cookies through their settings. You can:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>View and delete cookies stored on your device</li>
            <li>Block all cookies or only third-party cookies</li>
            <li>Set your browser to notify you when a cookie is being set</li>
            <li>Clear all cookies when you close your browser</li>
          </ul>

          <p className="mt-4">Here's how to manage cookies in popular browsers:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 underline">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 underline">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 underline">Safari</a></li>
            <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 underline">Microsoft Edge</a></li>
          </ul>

          <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">8.3 Opt-Out Tools</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Google Analytics Opt-out:</strong> Install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 underline">Google Analytics Opt-out Browser Add-on</a></li>
            <li><strong>Network Advertising Initiative:</strong> Visit <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 underline">NAI Opt-out</a> to opt out of interest-based advertising</li>
            <li><strong>Your Online Choices:</strong> Visit <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 underline">Your Online Choices</a> (for EU users)</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-6 rounded-r-lg">
            <p className="text-yellow-800">
              <strong>Warning:</strong> Disabling cookies may affect the functionality of our website and other websites you visit. Some features may not work correctly without cookies.
            </p>
          </div>

          {/* 9. Local Storage and Similar Technologies */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">9. Local Storage and Similar Technologies</h2>
          <p>
            In addition to cookies, we may use other technologies to store data on your device:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Local Storage:</strong> Similar to cookies but can store larger amounts of data. We use local storage to save your cookie consent preference.</li>
            <li><strong>Session Storage:</strong> Temporary storage that is cleared when you close your browser tab.</li>
          </ul>
          <p className="mt-4">
            These technologies are subject to the same controls as cookies and can be managed through your browser settings.
          </p>

          {/* 10. Your Rights */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">10. Your Rights</h2>
          <p>Depending on your location, you may have the following rights regarding cookies:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Right to Information:</strong> Know what cookies we use and why</li>
            <li><strong>Right to Consent:</strong> Choose whether to accept non-essential cookies</li>
            <li><strong>Right to Withdraw Consent:</strong> Change your cookie preferences at any time</li>
            <li><strong>Right to Access:</strong> Request information about data collected via cookies</li>
            <li><strong>Right to Deletion:</strong> Request deletion of data collected via cookies</li>
          </ul>

          {/* 11. Do Not Track */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">11. Do Not Track (DNT) Signals</h2>
          <p>
            Some browsers have a "Do Not Track" feature that sends a signal to websites requesting that your browsing not be tracked. Our website currently does not respond to DNT signals. However, you can manage cookies and opt out of tracking using the methods described above.
          </p>

          {/* 12. Changes to This Policy */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">12. Changes to This Policy</h2>
          <p>
            We may update this Cookies Policy from time to time to reflect changes in technology, legislation, or our business practices. Any changes will be posted on this page with an updated "Last updated" date.
          </p>
          <p className="mt-4">
            We encourage you to review this policy periodically. Significant changes may be communicated through a notice on our website.
          </p>

          {/* 13. Contact Us */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">13. Contact Us</h2>
          <p>
            If you have any questions about our use of cookies, want to exercise your rights, or need more information, please contact us:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Email:</strong> <a href="mailto:support@hitechdevs.online" className="text-brand-600 hover:text-brand-700 underline">support@hitechdevs.online</a></li>
            <li><strong>Contact Page:</strong> <a href="/contact" className="text-brand-600 hover:text-brand-700 underline">hitechdevs.online/contact</a></li>
          </ul>
          <p className="mt-4">
            For privacy-related inquiries, please see our <a href="/privacy" className="text-brand-600 hover:text-brand-700 underline">Privacy Policy</a>.
          </p>

          <p className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-500">
            Last updated: February 2026
          </p>
        </div>
      </div>
    </Layout>
  );
}

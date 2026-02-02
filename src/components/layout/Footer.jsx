import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-brand-500 to-accent-500 p-1.5 rounded-lg">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                HiTech<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">Devs</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              We compare the best domain registrars and hosting providers to help you make informed decisions for your online presence.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Comparisons</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/domains" className="text-base text-gray-500 hover:text-brand-400 transition-colors">Best Domain Registrars</Link></li>
              <li><Link to="/hosting" className="text-base text-gray-500 hover:text-brand-400 transition-colors">Best Web Hosting</Link></li>
              <li><Link to="/vps" className="text-base text-gray-500 hover:text-brand-400 transition-colors">Cheap VPS Hosting</Link></li>
              <li><Link to="/hosting" className="text-base text-gray-500 hover:text-brand-400 transition-colors">WordPress Hosting</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/contact" className="text-base text-gray-500 hover:text-brand-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="text-base text-gray-500 hover:text-brand-400 transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-base text-gray-500 hover:text-brand-400 transition-colors">Guides & Tutorials</Link></li>
              <li><a href="mailto:support@hitechdevs.online" className="text-base text-gray-500 hover:text-brand-400 transition-colors">support@hitechdevs.online</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/privacy" className="text-base text-gray-500 hover:text-brand-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookies-policy" className="text-base text-gray-500 hover:text-brand-400 transition-colors">Cookies Policy</Link></li>
              <li><Link to="/terms" className="text-base text-gray-500 hover:text-brand-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/disclosure" className="text-base text-gray-500 hover:text-brand-400 transition-colors">Affiliate Disclosure</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-xs text-gray-600 text-center">
            &copy; {new Date().getFullYear()} HiTechDevs. All rights reserved.
          </p>
          <p className="mt-4 text-xs text-gray-700 text-center max-w-2xl mx-auto">
            Disclosure: We may earn a commission when you purchase through links on our site. This comes at no extra cost to you and helps us maintain our high-quality content.
          </p>
        </div>
      </div>
    </footer>
  );
}

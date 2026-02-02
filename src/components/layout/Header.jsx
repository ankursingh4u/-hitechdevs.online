import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';

import { cn } from '../../lib/utils';
import { AffiliateDisclosureTooltip } from '../ui/AffiliateDisclosureTooltip';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Domains', href: '/domains' },
    { name: 'Web Hosting', href: '/hosting' },
    { name: 'VPS', href: '/vps' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Resources', href: '/resources' },
    { name: 'Top Picks', href: '/top-picks' },
    { name: 'Blog', href: '/blog' },
  ];

  const navigate = useNavigate();
  const isActive = (path) => location.pathname === path;
  const closeMenu = () => setIsMenuOpen(false);

  const handleCompareClick = (e) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname === '/') {
      const section = document.getElementById('compare-providers');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: 'compare-providers' } });
    }
  };

  return (
    <header className="bg-gray-950 border-b border-gray-800 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-gradient-to-br from-brand-500 to-accent-500 p-1.5 rounded-lg shadow-lg shadow-brand-500/20 group-hover:shadow-brand-500/40 transition-shadow">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                HiTech<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">Devs</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-400",
                  isActive(link.href) ? "text-brand-400" : "text-gray-400"
                )}
              >
                {link.name}
              </Link>
            ))}
            <AffiliateDisclosureTooltip />
            <Button size="sm" className="ml-4" onClick={handleCompareClick}>
              Compare Providers
            </Button>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="bg-gray-800 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-800 absolute w-full bg-gray-950 shadow-lg">
          <div className="space-y-1 px-4 pt-2 pb-6">
            {navigation.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "block py-3 text-base font-medium border-b border-gray-800",
                  isActive(link.href) ? "text-brand-400" : "text-gray-400 hover:text-brand-400"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <AffiliateDisclosureTooltip mobile />
            <div className="pt-4">
              <Button className="w-full" onClick={handleCompareClick}>
                Compare Providers
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

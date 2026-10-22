import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Printer, 
  Cpu, 
  PhoneCall, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Layers, 
  Calculator, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { COMPANY_INFO } from '../data/goocananData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Beranda (3D Printing)', path: '/' },
    { name: 'Bahan Material', path: '/#materials' },
    { name: 'Portofolio', path: '/#portfolio' },
    { name: 'Kalkulator Biaya', path: '/#estimator' },
    { name: 'GooOS Platform', path: '/gooos', highlight: true },
    { name: 'Kontak & Lokasi', path: '/kontak' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/85 dark:bg-dark-bg/85 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-slate-800/80 py-3' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 p-0.5 shadow-glow-cyan group-hover:shadow-glow-combo transition-all duration-300">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                <Printer className="w-5 h-5 text-brand-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-wider text-slate-900 dark:text-white flex items-center gap-1 font-mono">
                GOO<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">CANAN</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-mono text-slate-500 dark:text-slate-400 -mt-1">
                3D PRINT &amp; GooOS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isGooOS = link.highlight;
              const isActive = location.pathname === link.path;

              if (link.path.startsWith('/#')) {
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                  >
                    {link.name}
                  </a>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                    isGooOS
                      ? 'text-accent-600 dark:text-accent-400 bg-accent-500/10 border border-accent-500/30 hover:bg-accent-500/20 font-semibold flex items-center gap-1.5'
                      : isActive
                        ? 'text-brand-600 dark:text-brand-400 bg-brand-500/10 font-semibold'
                        : 'text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {isGooOS ? (
                    <img 
                      src="/brand/app_icon_gradient.png" 
                      alt="GooOS" 
                      className="w-4 h-4 rounded object-contain shrink-0" 
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  ) : null}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Ganti Mode Tema"
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:scale-105 active:scale-95 transition-all"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            {/* Direct WhatsApp CTA */}
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Halo Goocanan, saya ingin konsultasi mengenai kebutuhan 3D printing / GooOS.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-brand-500 to-accent-500 hover:from-brand-600 hover:to-accent-600 rounded-xl shadow-glow-cyan hover:shadow-glow-combo transition-all duration-300 transform active:scale-95"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Konsultasi Proyek</span>
            </a>
          </div>

          {/* Mobile hamburger + theme toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Ganti Tema"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu Navigasi"
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-dark-bg/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 mt-2 space-y-2 animate-fadeIn shadow-2xl">
          {navLinks.map((link) => {
            const isGooOS = link.highlight;
            if (link.path.startsWith('/#')) {
              return (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-brand-600 dark:text-slate-200 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800/80"
                >
                  {link.name}
                </a>
              );
            }
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium ${
                  isGooOS
                    ? 'text-accent-400 bg-accent-500/10 border border-accent-500/30'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80'
                }`}
              >
                <span className="flex items-center gap-2">
                  {isGooOS && (
                    <img 
                      src="/brand/app_icon_gradient.png" 
                      alt="GooOS" 
                      className="w-4 h-4 rounded object-contain shrink-0" 
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  )}
                  {link.name}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            );
          })}

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Halo Goocanan, saya ingin konsultasi proyek 3D Printing.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-brand-500 to-accent-500 rounded-xl shadow-glow-cyan"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Konsultasi via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Printer, 
  Cpu, 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import { InstagramIcon, LinkedinIcon, GithubIcon, YoutubeIcon } from './SocialIcons';
import { COMPANY_INFO } from '../data/goocananData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-100 dark:bg-[#060a12] border-t border-slate-200 dark:border-slate-800/80 pt-16 pb-12 transition-colors">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-200 dark:border-slate-800/80">
          
          {/* Brand Info & Vision (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 p-0.5 shadow-glow-cyan">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                  <Printer className="w-5 h-5 text-brand-400" />
                </div>
              </div>
              <span className="font-extrabold text-2xl tracking-wider text-slate-900 dark:text-white font-mono">
                GOO<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">CANAN</span>
              </span>
            </Link>
            
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Solusi manufaktur aditif (3D printing) terintegrasi untuk prototipe cepat, komponen fungsional industri, dan seni presisi tinggi. Didukung penuh oleh ekosistem sistem operasi pintar <strong>GooOS</strong>.
            </p>

            {/* Farm Status Live Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>GooOS Smart Farm: 16/16 Online &amp; Active</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 hover:scale-110 transition"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 hover:scale-110 transition"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 hover:scale-110 transition"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 hover:scale-110 transition"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (Col 5-7) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 transition flex items-center gap-1.5">
                  Layanan 3D Printing
                </Link>
              </li>
              <li>
                <a href="/#materials" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 transition">
                  Material &amp; Spesifikasi Teknis
                </a>
              </li>
              <li>
                <a href="/#portfolio" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 transition">
                  Galeri Portofolio Proyek
                </a>
              </li>
              <li>
                <a href="/#estimator" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 transition">
                  Kalkulator Estimasi Biaya
                </a>
              </li>
              <li>
                <Link to="/gooos" className="text-accent-600 dark:text-accent-400 font-semibold hover:underline flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5" />
                  GooOS Platform &amp; Sistem
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 transition">
                  Kontak &amp; Lokasi Workshop
                </Link>
              </li>
            </ul>
          </div>

          {/* Materials & Tech (Col 8-9) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Kemampuan Teknis
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>• FDM &amp; SLA 8K High Res</li>
              <li>• PLA+ &amp; Tough PLA</li>
              <li>• PETG Tahan Kimia</li>
              <li>• ABS/ASA Vapor Smooth</li>
              <li>• TPU Elastis 95A/85A</li>
              <li>• Carbon Fiber (PA-CF)</li>
              <li>• Toleransi hingga 0.05mm</li>
            </ul>
          </div>

          {/* Contact Direct (Col 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Hubungi Goocanan
            </h4>
            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <a 
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                target="_blank" 
                rel="noreferrer"
                className="flex items-start gap-2.5 hover:text-brand-500 dark:hover:text-brand-400 transition group"
              >
                <Phone className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                <span>WhatsApp: {COMPANY_INFO.displayPhone}</span>
              </a>

              <a 
                href={`mailto:${COMPANY_INFO.email}`} 
                className="flex items-start gap-2.5 hover:text-brand-500 dark:hover:text-brand-400 transition"
              >
                <Mail className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                <span className="leading-snug">{COMPANY_INFO.address}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p>© {currentYear} GOOCANAN &amp; GooOS Ecosystem. Seluruh Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-500" />
              Siap Deploy di Render Cloud
            </span>
            <span>•</span>
            <Link to="/kontak" className="hover:underline">Bantuan &amp; Konsultasi</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

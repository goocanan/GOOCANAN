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
  ArrowUpRight,
  ShoppingBag
} from 'lucide-react';
import { InstagramIcon, TikTokIcon, ShopeeIcon, TokopediaIcon } from './SocialIcons';
import { COMPANY_INFO } from '../data/goocananData';
import GoocananLogo from './GoocananLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-100 dark:bg-[#060a12] border-t border-slate-200 dark:border-slate-800/80 pt-16 pb-12 transition-colors">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-200 dark:border-slate-800/80">
          
          {/* Brand Info & Vision (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block group">
              <GoocananLogo variant="horizontal" subtitle="3D PRINT • HARDWARE • GooOS" />
            </Link>
            
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Jasa 3D Printing presisi tinggi, inovasi produk kreatif (seperti <em>Mini Dispo Lens</em>), dan produksi batch UMKM berbasis di <strong>Jakarta Barat</strong>. Didukung ekosistem cerdas <strong>GooOS</strong> (3DFlow &amp; GOO-Studio).
            </p>

            {/* Farm Status Live Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Armada Aktif: Creality Hi &amp; Bambu Lab A1 Mini</span>
            </div>

            {/* Social & Marketplace Channels */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-brand-500 hover:scale-110 transition"
                aria-label="Instagram @goocanan"
                title="Instagram @goocanan"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.tiktok}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-brand-500 hover:scale-110 transition"
                aria-label="TikTok @goocanan"
                title="TikTok @goocanan"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.shopee}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 hover:bg-orange-500 hover:text-white hover:scale-110 transition"
                aria-label="Shopee Goocanan"
                title="Official Shopee Store"
              >
                <ShopeeIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.tokopedia}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white hover:scale-110 transition"
                aria-label="Tokopedia Goocanan"
                title="Official Tokopedia Store"
              >
                <TokopediaIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (Col 5-7) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigasi Layanan
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 transition flex items-center gap-1.5">
                  Layanan 3D Printing &amp; Produk
                </Link>
              </li>
              <li>
                <a href="/#featured" className="text-brand-600 dark:text-brand-400 font-semibold hover:underline flex items-center gap-1">
                  ★ Produk Unggulan: Mini Dispo Lens
                </a>
              </li>
              <li>
                <a href="/#materials" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 transition">
                  Pilihan Bahan (PLA+, PETG, TPU)
                </a>
              </li>
              <li>
                <a href="/#portfolio" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 transition">
                  Galeri Produk &amp; Portofolio
                </a>
              </li>
              <li>
                <a href="/#estimator" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 transition">
                  Kalkulator Biaya (Min. Rp 25rb)
                </a>
              </li>
              <li>
                <Link to="/gooos" className="text-accent-600 dark:text-accent-400 font-semibold hover:underline flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5" />
                  GooOS Platform &amp; Telemetri
                </Link>
              </li>
            </ul>
          </div>

          {/* Materials & Tech (Col 8-9) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Spesifikasi Workshop
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 font-mono text-xs">
              <li>&bull; Creality Hi 0.4</li>
              <li>&bull; Bambu Lab A1 Mini</li>
              <li>&bull; PLA / PLA+ High Grade</li>
              <li>&bull; PETG Tahan Panas 80°C</li>
              <li>&bull; TPU 95A Karet Lentur</li>
              <li>&bull; Min. Order: Rp 25.000</li>
              <li>&bull; Lead Time: 2-3 Hari</li>
            </ul>
          </div>

          {/* Contact Direct (Col 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Kontak &amp; Workshop
            </h4>
            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <a 
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Halo Goocanan, saya ingin konsultasi 3D printing.')}`}
                target="_blank" 
                rel="noreferrer"
                className="flex items-start gap-2.5 hover:text-brand-500 dark:hover:text-brand-400 transition group"
              >
                <Phone className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
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
          <p>© {currentYear} GOOCANAN (Goocanan 3D) &bull; Precision in Every Layer. Seluruh Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-500" />
              Minimal Order Rp 25.000 &bull; Pengerjaan 2-3 Hari
            </span>
            <span>&bull;</span>
            <Link to="/kontak" className="hover:underline">Kontak &amp; Pemesanan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

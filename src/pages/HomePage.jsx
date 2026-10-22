import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Printer, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  Sliders, 
  Check, 
  PhoneCall, 
  HelpCircle,
  ExternalLink,
  ChevronDown,
  Activity,
  Flame,
  Thermometer,
  Box,
  Camera,
  ShoppingBag,
  Clock,
  Tag
} from 'lucide-react';
import { 
  COMPANY_INFO, 
  CORE_SERVICES,
  FEATURED_PRODUCT,
  VALUE_PROPOSITIONS, 
  PRINT_MATERIALS, 
  PORTFOLIO_ITEMS, 
  FAQS 
} from '../data/goocananData';
import CostEstimator from '../components/CostEstimator';
import PortfolioModal from '../components/PortfolioModal';
import { ShopeeIcon, TokopediaIcon } from '../components/SocialIcons';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  
  // Interactive Hero Showcase Material Switcher
  const [heroMaterial, setHeroMaterial] = useState('pla');

  const heroMaterialSpecs = {
    pla: {
      name: 'PLA / PLA+ High Grade',
      job: 'Mini Dispo Lens & Desk Decor',
      nozzle: '210°C',
      bed: '60°C',
      speed: '350 mm/s',
      rate: 'Rp 400 / gram',
      tag: 'Display & Presisi Halus',
      color: '#38bdf8',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'
    },
    petg: {
      name: 'PETG Industrial Impact-Resistant',
      job: 'Poly Wallet & Bracket Mekanik',
      nozzle: '235°C',
      bed: '75°C',
      speed: '300 mm/s',
      rate: 'Rp 500 / gram',
      tag: 'Tahan Panas 80°C & Benturan',
      color: '#34d399',
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80'
    },
    tpu: {
      name: 'TPU 95A Flexible Rubber',
      job: 'Damper Drone & Gasket Karet',
      nozzle: '220°C',
      bed: '50°C',
      speed: '120 mm/s',
      rate: 'Rp 700 / gram',
      tag: 'Karet Lentur Anti Robek',
      color: '#f43f5e',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80'
    }
  };

  const currentHero = heroMaterialSpecs[heroMaterial];

  const categories = [
    'Semua', 
    'Produk Unggulan', 
    'Wall Arts & Dekorasi Meja', 
    'Tools & Organizer', 
    'Part Kustom Industri', 
    'Keychain & Fidget'
  ];

  const filteredPortfolio = selectedCategory === 'Semua' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <div className="relative pt-24 pb-20 overflow-hidden">
      
      {/* =========================================================================
          HERO SECTION (EXPANSIVE 2-COLUMN WIDESCREEN SHOWCASE)
      ========================================================================= */}
      <section className="relative px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1720px] mx-auto pt-4 pb-16 lg:pt-8 lg:pb-20">
        
        {/* Glow ambient background lights */}
        <div className="absolute top-1/4 left-1/4 w-[700px] h-[450px] bg-brand-500/15 dark:bg-brand-500/20 blur-[160px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-accent-500/15 blur-[150px] rounded-full pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          
          {/* LEFT COLUMN: HEADLINE, DESCRIPTION, CTAS & STATS (COL 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-xs font-mono font-medium text-slate-800 dark:text-slate-300 shadow-sm animate-fadeIn">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Armada Aktif: Creality Hi &bull; Bambu Lab A1 Mini &bull; Jakarta Barat</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Jasa 3D Printing Presisi,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-cyan-400 to-accent-400">
                Produk Inovatif
              </span>{' '}
              &amp; Otomasi GooOS
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
              Solusi manufaktur aditif profesional berbasis di <strong>Jakarta Barat</strong>. Melayani cetak kustom file 3D (STL/STEP), produksi massal UMKM, serta produk kreatif unggulan seperti <strong>Mini Dispo Lens</strong>. Minimal order hanya <strong>Rp 25.000</strong>!
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Halo Goocanan, saya ingin konsultasi proyek 3D printing.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-brand-500 to-accent-500 hover:from-brand-600 hover:to-accent-600 text-white font-bold text-sm shadow-glow-cyan hover:shadow-glow-combo flex items-center justify-center gap-2.5 transition-all transform active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasikan File via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#estimator"
                className="px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-bold text-sm border border-slate-300 dark:border-slate-800 shadow-md flex items-center justify-center gap-2 transition"
              >
                <Sliders className="w-4 h-4 text-brand-500" />
                <span>Kalkulator Biaya (Rp 400/g)</span>
              </a>

              <a
                href="#featured"
                className="px-5 py-3.5 rounded-2xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 font-bold text-sm border border-amber-500/30 flex items-center justify-center gap-2 transition"
              >
                <Camera className="w-4 h-4" />
                <span>Lihat Mini Dispo Lens</span>
              </a>
            </div>

            {/* Direct Marketplace Buttons */}
            <div className="flex items-center gap-3 pt-1 text-xs font-mono">
              <span className="text-slate-500 dark:text-slate-400">Order via Marketplace:</span>
              <a
                href={COMPANY_INFO.socials.shopee}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-600 dark:text-orange-400 hover:bg-orange-500 hover:text-white transition font-bold"
              >
                <ShopeeIcon className="w-3.5 h-3.5" />
                <span>Shopee Official</span>
              </a>
              <a
                href={COMPANY_INFO.socials.tokopedia}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white transition font-bold"
              >
                <TokopediaIcon className="w-3.5 h-3.5" />
                <span>Tokopedia</span>
              </a>
            </div>

            {/* Key Stats Counter Grid */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-sm">
                <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-brand-600 dark:text-brand-400">
                  Rp 25rb
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Minimal Order Pemesanan
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-sm">
                <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-accent-600 dark:text-accent-400">
                  2-3 Hari
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Lead Time Part Normal
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-sm">
                <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-brand-600 dark:text-brand-400">
                  Creality &amp; Bambu
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Armada Cepat &amp; Presisi
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-sm">
                <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-accent-600 dark:text-accent-400">
                  128 Spul
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Inventaris Filamen Terdata
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: INTERACTIVE 3D PRINT & SMART FARM SHOWCASE CARD (COL 8-12) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-slate-900/90 border border-brand-500/40 p-5 sm:p-7 shadow-2xl backdrop-blur-xl text-white overflow-hidden">
              
              {/* Card Ambient Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />

              {/* Showcase Top Bar */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-bold text-slate-200">Creality Hi &amp; Bambu Lab A1 Mini</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-brand-500/20 text-brand-300 text-[10px] border border-brand-500/30 font-semibold">
                  GooOS Connected
                </span>
              </div>

              {/* Showcase Visual Viewport */}
              <div className="relative my-4 rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden h-56 sm:h-64 flex items-center justify-center group">
                <img 
                  src={currentHero.image} 
                  alt={currentHero.name} 
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Overlaid Live Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-[11px] font-mono text-cyan-300 border border-slate-700 font-semibold">
                    Tarif: {currentHero.rate}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 backdrop-blur-md text-[11px] font-mono text-emerald-300 border border-emerald-500/30">
                    {currentHero.tag}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Katalog / Job Produksi:
                  </span>
                  <div className="text-sm font-bold font-mono text-white truncate">
                    {currentHero.job}
                  </div>
                  <span className="text-xs text-brand-300 font-mono">
                    {currentHero.name}
                  </span>
                </div>
              </div>

              {/* Interactive Material Selector Tabs */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                  Pilih Bahan Untuk Cek Parameter:
                </span>
                <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                  {[
                    { id: 'pla', label: 'PLA+ (Rp 400/g)' },
                    { id: 'petg', label: 'PETG (Rp 500/g)' },
                    { id: 'tpu', label: 'TPU 95A (Rp 700/g)' },
                  ].map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setHeroMaterial(m.id)}
                      className={`py-2 px-1 rounded-xl text-center font-bold border transition ${
                        heroMaterial === m.id
                          ? 'bg-brand-500 text-white border-brand-400 shadow-glow-cyan'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Sensor Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 pt-3.5 mt-3.5 border-t border-slate-800 text-xs font-mono">
                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800/80">
                  <span className="text-[10px] text-slate-500 block flex items-center gap-1">
                    <Flame className="w-3 h-3 text-orange-400" /> Nozzle Temp
                  </span>
                  <span className="font-bold text-white">{currentHero.nozzle}</span>
                </div>

                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800/80">
                  <span className="text-[10px] text-slate-500 block flex items-center gap-1">
                    <Thermometer className="w-3 h-3 text-brand-400" /> Heatbed
                  </span>
                  <span className="font-bold text-white">{currentHero.bed}</span>
                </div>

                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800/80">
                  <span className="text-[10px] text-slate-500 block flex items-center gap-1">
                    <Activity className="w-3 h-3 text-emerald-400" /> Speed
                  </span>
                  <span className="font-bold text-emerald-400">{currentHero.speed}</span>
                </div>
              </div>

              {/* Direct Scroll to Cost Estimator */}
              <div className="pt-3.5 mt-3.5 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Min. Order Rp 25.000</span>
                <a
                  href="#estimator"
                  className="text-brand-400 hover:text-brand-300 font-bold flex items-center gap-1"
                >
                  <span>Simulasi Harga Cetak</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </section>

      {/* =========================================================================
          FEATURED PRODUCT SPOTLIGHT: MINI DISPO LENS
      ========================================================================= */}
      <section id="featured" className="py-16 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1720px] mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-brand-950 p-8 sm:p-14 border border-brand-500/40 text-white overflow-hidden shadow-glow-combo">
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Product Highlight Info (Col 1-7) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono font-semibold">
                <Camera className="w-4 h-4" />
                <span>{FEATURED_PRODUCT.tag}</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                {FEATURED_PRODUCT.title}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {FEATURED_PRODUCT.shortDesc}
              </p>

              <div className="p-4 rounded-2xl bg-brand-500/10 border border-brand-500/30 text-xs sm:text-sm text-cyan-200 leading-relaxed font-mono">
                ✨ <strong>Karakter Optik Unik:</strong> {FEATURED_PRODUCT.highlight}
              </div>

              {/* Supported Camera Mounts */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                  Tersedia untuk Berbagai Mount Kamera:
                </span>
                <div className="flex flex-wrap gap-2">
                  {FEATURED_PRODUCT.mounts.map((mount, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-slate-900/90 border border-slate-700 text-xs font-mono text-slate-200"
                    >
                      {mount}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={FEATURED_PRODUCT.shopeeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs flex items-center gap-2 shadow-lg transition"
                >
                  <ShopeeIcon className="w-4 h-4" />
                  <span>Beli di Shopee</span>
                </a>

                <a
                  href={FEATURED_PRODUCT.tokopediaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 shadow-lg transition"
                >
                  <TokopediaIcon className="w-4 h-4" />
                  <span>Beli di Tokopedia</span>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(FEATURED_PRODUCT.whatsappText)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-2 border border-slate-700 transition"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Tanya Mount Kamera via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right: Product Spec Box (Col 8-12) */}
            <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl p-6 border border-slate-800 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-400 block">
                Spesifikasi Teknis Mini Dispo Lens
              </span>

              <div className="space-y-3 font-mono text-xs">
                {FEATURED_PRODUCT.specs.map((spec, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex justify-between gap-2">
                    <span className="text-slate-400">{spec.label}:</span>
                    <span className="text-slate-100 font-bold text-right">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300">
                ✓ <strong>Ready Stock / Made to Order:</strong> Diproduksi presisi dengan Bambu Lab A1 Mini untuk memastikan mounting lensa pas dan aman pada kamera mirrorless Anda.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3 CORE OFFERINGS SECTION (JASA CETAK, PRODUK JADI, BATCH UMKM)
      ========================================================================= */}
      <section className="py-16 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1720px] mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            Lini Layanan Goocanan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Solusi Cetak 3D Lengkap Untuk Berbagai Kebutuhan
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Dari cetak kustom satuan per orangan hingga produksi batch massal untuk pelaku usaha.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          {CORE_SERVICES.map((srv, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 shadow-lg hover:shadow-glow-cyan transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                    {idx === 0 && <Layers className="w-6 h-6" />}
                    {idx === 1 && <Sparkles className="w-6 h-6" />}
                    {idx === 2 && <Box className="w-6 h-6" />}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-300 font-semibold border border-slate-200 dark:border-slate-700">
                    {srv.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-brand-500 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {srv.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(`Halo Goocanan, saya ingin tanya mengenai ${srv.title}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-500 flex items-center justify-between"
                >
                  <span>Konsultasikan Kebutuhan Ini</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          VALUE PROPOSITIONS / KEUNGGULAN UTAMA
      ========================================================================= */}
      <section className="py-16 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1720px] mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            Mengapa Memilih Goocanan?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Standar Mutu Manufaktur Modern Tanpa Kompromi
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Kombinasi armada Creality Hi &amp; Bambu Lab A1 Mini, tarif transparan Rp 400/g, dan integrasi GooOS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {VALUE_PROPOSITIONS.map((prop, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 shadow-lg hover:shadow-glow-cyan transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {idx === 0 && <Zap className="w-6 h-6" />}
                {idx === 1 && <Sparkles className="w-6 h-6" />}
                {idx === 2 && <Layers className="w-6 h-6" />}
                {idx === 3 && <Clock className="w-6 h-6" />}
                {idx === 4 && <Cpu className="w-6 h-6" />}
                {idx === 5 && <ShoppingBag className="w-6 h-6" />}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-500 transition-colors">
                {prop.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {prop.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          LAYANAN & BAHAN MATERIAL SECTION (PLA+, PETG, TPU READY STOCK)
      ========================================================================= */}
      <section id="materials" className="py-16 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1720px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              Pilihan Bahan Material (Ready Stock)
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              Material Berkualitas Untuk Setiap Kebutuhan
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-3xl">
              Kami menyediakan filamen berkualitas tinggi: PLA/PLA+ warna-warni, PETG tahan panas, dan TPU karet lentur.
            </p>
          </div>
          
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Halo Goocanan, saya ingin tanya ketersediaan stok warna filamen.')}`}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono font-semibold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1 shrink-0"
          >
            <span>Tanya Ketersediaan Warna</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          {PRINT_MATERIALS.map((material) => (
            <div
              key={material.id}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-brand-500/50 transition-all shadow-md group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-mono font-bold">
                    {material.type}
                  </span>
                  <span className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400">
                    Rp {material.pricePerGram.toLocaleString('id-ID')}/gram
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {material.name}
                </h3>
                
                <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {material.features}
                </p>

                {/* Specs */}
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 space-y-1.5 text-xs font-mono mb-4">
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Karakter Fisik:</span>
                    <span className="text-slate-900 dark:text-white font-bold">{material.specs.strength}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Ketahanan Panas:</span>
                    <span className="text-slate-900 dark:text-white font-bold">{material.specs.tempResistance}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Tekstur Permukaan:</span>
                    <span className="text-slate-900 dark:text-white font-bold">{material.specs.finish}</span>
                  </div>
                </div>

                {/* Tags / Use cases */}
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block mb-1.5 uppercase tracking-wider">
                    Contoh Aplikasi:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {material.useCases.map((useCase, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px]"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800/80">
                <a
                  href="#estimator"
                  className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-500 flex items-center justify-between group-hover:translate-x-1 transition-transform"
                >
                  <span>Simulasikan Biaya {material.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE COST ESTIMATOR WIDGET (RP 400/G & RP 3.000/JAM, MIN. RP 25RB)
      ========================================================================= */}
      <section className="py-16 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1720px] mx-auto">
        <CostEstimator />
      </section>

      {/* =========================================================================
          GALERI PORTOFOLIO SECTION
      ========================================================================= */}
      <section id="portfolio" className="py-16 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1720px] mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            Galeri Portofolio &amp; Produk
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
            Karya Nyata Hasil Cetak 3D Goocanan
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Dari produk inovatif Mini Dispo Lens, organizer estetik, gantungan kunci, hingga part mekanikal fungsional.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-brand-500 text-white shadow-glow-cyan'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {filteredPortfolio.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPortfolioItem(item)}
              className="group cursor-pointer rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-brand-500/60 transition-all shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image Preview with Hover Overlay */}
              <div className="relative h-60 bg-slate-950 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[11px] font-mono font-semibold text-brand-400 border border-slate-700">
                  {item.category}
                </span>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                  <span>Layer: {item.layerHeight}</span>
                  <span className="text-brand-300 flex items-center gap-1 group-hover:underline">
                    <span>Lihat Rincian</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-5">
                <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                  {item.desc}
                </p>
                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Bahan: <strong className="text-slate-700 dark:text-slate-300">{item.material}</strong></span>
                  <span>Waktu: <strong className="text-slate-700 dark:text-slate-300">{item.printTime}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal View */}
        <PortfolioModal
          item={selectedPortfolioItem}
          onClose={() => setSelectedPortfolioItem(null)}
        />
      </section>

      {/* =========================================================================
          GOOOS TEASER BANNER (POSITION OPTION C: QUALITY GUARANTEE & SOFTWARE ADOPTION)
      ========================================================================= */}
      <section className="py-16 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1720px] mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-brand-950 p-8 sm:p-14 border border-brand-500/40 text-white overflow-hidden shadow-glow-combo">
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-500/20 text-accent-400 font-mono text-xs font-semibold border border-accent-500/30">
                <img 
                  src="/brand/app_icon_gradient.png" 
                  alt="GooOS" 
                  className="w-4 h-4 rounded object-contain"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <span>Ekosistem Operasi Internal: GooOS Suite</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Di Balik Ketepatan &amp; Efisiensi Cetak Goocanan
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
                Seluruh armada Creality Hi dan Bambu Lab A1 Mini di workshop kami diatur oleh <strong>GooOS</strong> — sistem operasi pintar yang mengelola inventaris 128 spul filamen (<strong>3DFlow</strong>), mengoptimasi multi-part plate nesting (<strong>GOO-Studio</strong>), dan mendukung WebCAD parametrik (<strong>GooPrint</strong>). Kami juga membuka kemitraan bagi maker space / studio lain yang ingin mengadopsi software ini.
              </p>

              <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-400" />
                  <span>3DFlow Farm Ops &amp; Inventory</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                  <span>GOO-Studio Smart Batching</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Kemitraan Adopsi Software Terbuka</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                to="/gooos"
                className="py-4 px-6 rounded-2xl bg-gradient-to-r from-accent-500 to-brand-500 hover:from-accent-600 hover:to-brand-600 text-white font-bold text-sm text-center shadow-glow-emerald flex items-center justify-center gap-2 transition transform active:scale-95"
              >
                <Cpu className="w-4 h-4" />
                <span>Pelajari Sistem &amp; Fitur GooOS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                to="/kontak"
                className="py-3.5 px-6 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold text-xs text-center border border-slate-700 transition"
              >
                Diskusi Kemitraan Software GooOS
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          FAQ ACCORDION SECTION
      ========================================================================= */}
      <section className="py-16 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            Pertanyaan Umum (FAQ)
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Informasi Seputar Pemesanan di Goocanan
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden transition"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white text-sm sm:text-base hover:text-brand-500 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-brand-500' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-3 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          FINAL BOTTOM CTA
      ========================================================================= */}
      <section className="py-12 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1720px] mx-auto">
        <div className="rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 p-8 sm:p-14 text-center space-y-6">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Siap Merealisasikan Ide Desain Anda Menjadi Produk Nyata?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-3xl mx-auto">
            Kirimkan file 3D Anda hari ini untuk evaluasi dan penawaran instan. Minimal order hanya Rp 25.000 dengan pengerjaan cepat 2-3 hari kerja dari workshop Jakarta Barat.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Halo Goocanan, saya memiliki file 3D dan ingin meminta penawaran harga cetak.')}`}
              target="_blank"
              rel="noreferrer"
              className="py-4 px-8 rounded-2xl bg-gradient-to-r from-brand-500 to-accent-500 hover:from-brand-600 hover:to-accent-600 text-white font-bold text-sm shadow-glow-cyan flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Chat WhatsApp: {COMPANY_INFO.displayPhone}</span>
            </a>
            
            <a
              href={COMPANY_INFO.socials.shopee}
              target="_blank"
              rel="noreferrer"
              className="py-4 px-8 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md flex items-center gap-2"
            >
              <ShopeeIcon className="w-4 h-4" />
              <span>Beli via Shopee</span>
            </a>

            <a
              href={COMPANY_INFO.socials.tokopedia}
              target="_blank"
              rel="noreferrer"
              className="py-4 px-8 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md flex items-center gap-2"
            >
              <TokopediaIcon className="w-4 h-4" />
              <span>Beli via Tokopedia</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

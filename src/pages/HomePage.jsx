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
  Box
} from 'lucide-react';
import { 
  COMPANY_INFO, 
  VALUE_PROPOSITIONS, 
  PRINT_MATERIALS, 
  PORTFOLIO_ITEMS, 
  FAQS 
} from '../data/goocananData';
import CostEstimator from '../components/CostEstimator';
import PortfolioModal from '../components/PortfolioModal';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  
  // Interactive Hero Showcase Material Switcher
  const [heroMaterial, setHeroMaterial] = useState('carbon');

  const heroMaterialSpecs = {
    carbon: {
      name: 'PA-CF (Carbon Fiber Reinforced)',
      job: '#ORD-68 Drone Chassis Arm',
      nozzle: '250°C',
      bed: '90°C',
      speed: '300 mm/s',
      layer: '0.12 mm',
      tag: 'Kekuatan Setara Logam',
      color: '#38bdf8',
      image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80'
    },
    resin: {
      name: 'SLA Tough Resin 8K Ultra Micron',
      job: '#ORD-66 Master Miniatur 8K',
      nozzle: 'UV 405nm',
      bed: 'Chamber 28°C',
      speed: 'Ultra Detail',
      layer: '0.025 mm',
      tag: 'Bebas Garis Lapisan',
      color: '#c084fc',
      image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80'
    },
    petg: {
      name: 'PETG Industrial Impact-Resistant',
      job: '#ORD-69 Enclosure Elektronik',
      nozzle: '235°C',
      bed: '75°C',
      speed: '320 mm/s',
      layer: '0.16 mm',
      tag: 'Tahan Kimia & Benturan',
      color: '#34d399',
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80'
    },
    tpu: {
      name: 'TPU Flexible 95A Rubberized',
      job: '#ORD-65 Damper Getaran Motor',
      nozzle: '220°C',
      bed: '50°C',
      speed: '120 mm/s',
      layer: '0.20 mm',
      tag: 'Karet Elastis Tahan Robek',
      color: '#f43f5e',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80'
    }
  };

  const currentHero = heroMaterialSpecs[heroMaterial];

  const categories = ['Semua', 'Industri & Robotika', 'Arsitektur', 'Miniatur & Seni', 'Rapid Prototyping'];

  const filteredPortfolio = selectedCategory === 'Semua' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <div className="relative pt-24 pb-20 overflow-hidden">
      
      {/* =========================================================================
          HERO SECTION (EXPANSIVE 2-COLUMN WIDESCREEN SHOWCASE)
      ========================================================================= */}
      <section className="relative px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1720px] mx-auto pt-6 pb-16 lg:pt-12 lg:pb-24">
        
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
              <span>GooOS Farm Online &bull; 3 Mesin Aktif &bull; Presisi 0.05 mm</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Wujudkan Inovasi Nyata Melalui Presisi{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-cyan-400 to-accent-400">
                3D Printing
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
              Layanan manufaktur aditif profesional (FDM &amp; SLA Resin 8K) dengan akurasi sub-milimeter, pilihan 15+ material industri, terintegrasi penuh dengan ekosistem sistem operasi pintar <strong>3DFlow</strong> &amp; <strong>GOO-Studio</strong> untuk otomatisasi batching produksi cepat.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Halo Goocanan, saya ingin konsultasi proyek 3D printing.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-500 to-accent-500 hover:from-brand-600 hover:to-accent-600 text-white font-bold text-base shadow-glow-cyan hover:shadow-glow-combo flex items-center justify-center gap-3 transition-all transform active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Konsultasikan Proyek Anda</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#estimator"
                className="px-8 py-4 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-bold text-base border border-slate-300 dark:border-slate-800 shadow-md flex items-center justify-center gap-2.5 transition"
              >
                <Sliders className="w-5 h-5 text-brand-500" />
                <span>Hitung Estimasi Biaya</span>
              </a>

              <Link
                to="/gooos"
                className="px-6 py-4 rounded-2xl bg-accent-500/10 hover:bg-accent-500/20 text-accent-600 dark:text-accent-400 font-bold text-sm border border-accent-500/30 flex items-center justify-center gap-2 transition"
              >
                <Cpu className="w-4 h-4" />
                <span>Jelajahi GooOS Suite</span>
              </Link>
            </div>

            {/* Key Stats Counter Grid */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-sm">
                <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-brand-600 dark:text-brand-400">
                  500+
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Proyek &amp; Prototipe Selesai
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-sm">
                <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-accent-600 dark:text-accent-400">
                  0.05 mm
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Toleransi Presisi Maksimal
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-sm">
                <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-brand-600 dark:text-brand-400">
                  128 Spul
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Inventaris Filamen Terdata
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-sm">
                <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-accent-600 dark:text-accent-400">
                  99.8%
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Tingkat Sukses Cetak QC
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
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-bold text-slate-200">Live Print Farm Telemetry</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-brand-500/20 text-brand-300 text-[10px] border border-brand-500/30">
                  GooOS Active
                </span>
              </div>

              {/* Showcase Visual Viewport */}
              <div className="relative my-4 rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden h-60 sm:h-72 flex items-center justify-center group">
                <img 
                  src={currentHero.image} 
                  alt={currentHero.name} 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Overlaid Live Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-[11px] font-mono text-cyan-300 border border-slate-700">
                    Layer: {currentHero.layer}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 backdrop-blur-md text-[11px] font-mono text-emerald-300 border border-emerald-500/30">
                    {currentHero.tag}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Active Production Job:
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
                  Pilih Material Untuk Simulasi Spek:
                </span>
                <div className="grid grid-cols-4 gap-1.5 text-[11px] font-mono">
                  {[
                    { id: 'carbon', label: 'Carbon CF' },
                    { id: 'resin', label: 'Resin 8K' },
                    { id: 'petg', label: 'PETG' },
                    { id: 'tpu', label: 'TPU Flex' },
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
              <div className="grid grid-cols-3 gap-2 pt-4 mt-4 border-t border-slate-800 text-xs font-mono">
                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800/80">
                  <span className="text-[10px] text-slate-500 block flex items-center gap-1">
                    <Flame className="w-3 h-3 text-orange-400" /> Nozzle/UV
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
                    <Activity className="w-3 h-3 text-emerald-400" /> Kecepatan
                  </span>
                  <span className="font-bold text-emerald-400">{currentHero.speed}</span>
                </div>
              </div>

              {/* Direct Scroll to Cost Estimator */}
              <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Ingin cetak dengan bahan ini?</span>
                <a
                  href="#estimator"
                  className="text-brand-400 hover:text-brand-300 font-bold flex items-center gap-1"
                >
                  <span>Buka Kalkulator Biaya</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

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
            Kombinasi teknologi mesin berkecepatan tinggi, keahlian engineering, dan pemantauan AI cerdas GooOS.
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
                {idx === 3 && <ShieldCheck className="w-6 h-6" />}
                {idx === 4 && <Cpu className="w-6 h-6" />}
                {idx === 5 && <HelpCircle className="w-6 h-6" />}
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
          LAYANAN & BAHAN MATERIAL SECTION
      ========================================================================= */}
      <section id="materials" className="py-16 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1720px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              Pilihan Material &amp; Kapabilitas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              Material Berkualitas Untuk Setiap Kebutuhan
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-3xl">
              Dari prototipe visual berbiaya hemat hingga suku cadang fungsional yang tahan suhu tinggi dan benturan keras.
            </p>
          </div>
          
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Halo Goocanan, saya ingin konsultasi pemilihan material 3D printing yang cocok untuk proyek saya.')}`}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono font-semibold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1 shrink-0"
          >
            <span>Konsultasi Pemilihan Material</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
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
                  <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">
                    Mulai Rp {material.pricePerGram.toLocaleString()}/g
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
                    <span>Kekuatan Struktural:</span>
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
                    Aplikasi Umum:
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
          INTERACTIVE COST ESTIMATOR WIDGET
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
            Galeri Portofolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
            Karya Presisi Nyata Klien Kami
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Jelajahi hasil cetak 3D di berbagai sektor industri, riset akademis, hingga hobi &amp; seni.
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
              <div className="relative h-56 bg-slate-950 overflow-hidden">
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
                    <span>Lihat Detail</span>
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
                  <span>Material: <strong className="text-slate-700 dark:text-slate-300">{item.material}</strong></span>
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
          GOOOS TEASER BANNER
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
                Bagaimana Goocanan Menjamin Efisiensi &amp; Presisi Cetak?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
                Setiap proses di workshop kami didukung oleh <strong>GooOS</strong> — sistem operasi terpadu meliputi <strong>3DFlow</strong> (telemetri armada printer &amp; 128 spul filamen), <strong>GOO-Studio</strong> (smart batching plate nesting &amp; simulasi margin), serta <strong>GooPrint</strong> (WebCAD parametrik 3D).
              </p>

              <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-400" />
                  <span>3DFlow Live Telemetry &amp; Inventory</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                  <span>GOO-Studio Smart Batching (94% Density)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>GooPrint WebCAD &amp; G-Code Bridge</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                to="/gooos"
                className="py-4 px-6 rounded-2xl bg-gradient-to-r from-accent-500 to-brand-500 hover:from-accent-600 hover:to-brand-600 text-white font-bold text-sm text-center shadow-glow-emerald flex items-center justify-center gap-2 transition transform active:scale-95"
              >
                <Cpu className="w-4 h-4" />
                <span>Buka Pengenalan Fitur GooOS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                to="/kontak"
                className="py-3.5 px-6 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold text-xs text-center border border-slate-700 transition"
              >
                Jadwalkan Demo &amp; Kunjungan Farm
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
            Informasi Seputar Layanan Kami
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
            Kirimkan file 3D Anda hari ini untuk mendapatkan evaluasi toleransi, saran orientasi cetak, dan penawaran harga terbaik dari tim engineer Goocanan.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Halo Goocanan, saya memiliki file 3D dan ingin meminta penawaran harga cetak.')}`}
              target="_blank"
              rel="noreferrer"
              className="py-4 px-8 rounded-2xl bg-gradient-to-r from-brand-500 to-accent-500 hover:from-brand-600 hover:to-accent-600 text-white font-bold text-sm shadow-glow-cyan flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Hubungi Hotline WhatsApp</span>
            </a>
            <Link
              to="/kontak"
              className="py-4 px-8 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold text-sm border border-slate-300 dark:border-slate-700"
            >
              Kirim Formulir Kontak
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

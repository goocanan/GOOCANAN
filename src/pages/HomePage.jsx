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
  ChevronDown
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

  const categories = ['Semua', 'Industri & Robotika', 'Arsitektur', 'Miniatur & Seni', 'Rapid Prototyping'];

  const filteredPortfolio = selectedCategory === 'Semua' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <div className="relative pt-24 pb-20 overflow-hidden">
      
      {/* =========================================================================
          HERO SECTION
      ========================================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 pb-16 lg:pt-16 lg:pb-24">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-500/15 dark:bg-brand-500/20 blur-[130px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-accent-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-xs font-mono font-medium text-slate-800 dark:text-slate-300 shadow-sm animate-fadeIn">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span>Jasa 3D Printing Presisi Tinggi &bull; Didukung Otomasi GooOS</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Wujudkan Inovasi Nyata Melalui Presisi{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-cyan-400 to-accent-400">
              3D Printing
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {COMPANY_INFO.subheadline}
          </p>

          {/* Hero CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Halo Goocanan, saya ingin konsultasi proyek 3D printing.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-500 to-accent-500 hover:from-brand-600 hover:to-accent-600 text-white font-bold text-base shadow-glow-cyan hover:shadow-glow-combo flex items-center justify-center gap-3 transition-all transform active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Konsultasikan Proyek Anda</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#estimator"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-bold text-base border border-slate-200 dark:border-slate-800 shadow-md flex items-center justify-center gap-2.5 transition"
            >
              <Sliders className="w-5 h-5 text-brand-500" />
              <span>Hitung Estimasi Biaya</span>
            </a>

            <Link
              to="/gooos"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-accent-500/10 hover:bg-accent-500/20 text-accent-600 dark:text-accent-400 font-bold text-sm border border-accent-500/30 flex items-center justify-center gap-2 transition"
            >
              <Cpu className="w-4 h-4" />
              <span>Jelajahi GooOS</span>
            </Link>
          </div>

          {/* Key Stats Counter Grid */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 backdrop-blur-sm">
              <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-brand-600 dark:text-brand-400">
                500+
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                Proyek &amp; Prototipe Selesai
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 backdrop-blur-sm">
              <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-accent-600 dark:text-accent-400">
                0.05 mm
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                Presisi Toleransi Maksimal
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 backdrop-blur-sm">
              <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-brand-600 dark:text-brand-400">
                16 Nodes
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                GooOS Active Farm Fleet
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 backdrop-blur-sm">
              <span className="block text-2xl sm:text-3xl font-extrabold font-mono text-accent-600 dark:text-accent-400">
                15+
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                Material Rekayasa Pilihan
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          VALUE PROPOSITIONS / KEUNGGULAN UTAMA
      ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <section id="materials" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              Pilihan Material &amp; Kapabilitas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              Material Berkualitas Untuk Setiap Kebutuhan
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <CostEstimator />
      </section>

      {/* =========================================================================
          GALERI PORTOFOLIO SECTION
      ========================================================================= */}
      <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-brand-950 p-8 sm:p-12 border border-brand-500/40 text-white overflow-hidden shadow-glow-combo">
          
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

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Bagaimana Goocanan Menjamin Efisiensi &amp; Presisi Cetak?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
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
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 p-8 sm:p-12 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Siap Merealisasikan Ide Desain Anda Menjadi Produk Nyata?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
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

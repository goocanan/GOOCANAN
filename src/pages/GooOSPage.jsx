import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Eye, 
  Network, 
  CloudLightning, 
  Gauge, 
  Boxes, 
  Smartphone, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Terminal, 
  Activity, 
  Share2, 
  Server, 
  Zap,
  Sliders,
  Sparkles,
  Download
} from 'lucide-react';
import { GOOOS_FEATURES, GOOOS_TECH_SPECS, COMPANY_INFO } from '../data/goocananData';
import GooOSInteractiveMockup from '../components/GooOSInteractiveMockup';

export default function GooOSPage() {
  return (
    <div className="relative pt-24 pb-20 overflow-hidden">
      
      {/* Background Neon Gradients */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-brand-500/15 via-accent-500/15 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* =========================================================================
          HERO SECTION
      ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 pb-12">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-500/10 text-accent-600 dark:text-accent-400 border border-accent-500/30 text-xs font-mono font-semibold">
            <Cpu className="w-3.5 h-3.5 animate-pulse" />
            <span>Ekosistem Sistem Operasi &amp; Otomasi Smart Farm</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">
              GooOS:
            </span>{' '}
            Otak Cerdas di Balik Kecepatan &amp; Presisi Goocanan
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Sistem operasi terdistribusi generasi baru yang menyatukan armada 3D printer berkecepatan tinggi, inferensi kamera AI pencegah kegagalan (spaghetti detection), dan cloud slicing instan dalam satu dashboard terintegrasi.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#mockup"
              className="py-4 px-8 rounded-2xl bg-gradient-to-r from-accent-500 to-brand-500 hover:from-accent-600 hover:to-brand-600 text-white font-bold text-sm shadow-glow-emerald flex items-center gap-2 transition transform active:scale-95"
            >
              <Activity className="w-4 h-4" />
              <span>Coba Demo Interaktif Dashboard</span>
            </a>

            <Link
              to="/kontak"
              className="py-4 px-8 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-bold text-sm border border-slate-300 dark:border-slate-800 flex items-center gap-2 transition"
            >
              <span>Konsultasi Integrasi Farm</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE GOOOS DASHBOARD MOCKUP
      ========================================================================= */}
      <section id="mockup" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-600 dark:text-accent-400">
              Live Preview &bull; Interaktif
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Simulasi Antarmuka GooOS
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Klik tab &bull; Uji emergency pause &bull; Simulasi cloud slicing
          </p>
        </div>

        <GooOSInteractiveMockup />
      </section>

      {/* =========================================================================
          VISI & LATAR BELAKANG
      ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              Visi &amp; Filosofi Pengembangan
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Mengubah Armada Printer Manual Menjadi Pabrik Mandiri Otonom
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Di industri manufaktur aditif tradisional, operator seringkali harus memindahkan SD card secara manual, menyetel slicer satu per satu di laptop yang berat, dan was-was terhadap kegagalan cetak di tengah malam yang menghabiskan kilogram filamen tanpa disadari.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <strong>GooOS lahir untuk menyelesaikan masalah ini.</strong> Dikembangkan oleh tim engineer internal Goocanan, GooOS mengotomatisasi seluruh alur kerja: dari penerimaan file CAD klien, konversi slicing cerdas berbasis cloud, hingga pemantauan kamera dengan visi komputer berkecepatan tinggi.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-2xl font-black text-brand-500 block mb-1">90%</span>
                <span className="text-slate-600 dark:text-slate-400">Pengurangan Limbah Akibat Spaghetti Print</span>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-2xl font-black text-accent-500 block mb-1">4.5x</span>
                <span className="text-slate-600 dark:text-slate-400">Kecepatan Turnaround Order Dibanding Manual</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 text-white space-y-4 relative overflow-hidden shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center font-bold">
                  ✕
                </div>
                <div>
                  <h4 className="font-bold text-sm text-red-300">Cara Lama Tanpa GooOS</h4>
                  <p className="text-xs text-slate-400">Tergantung pengawasan manual mata manusia</p>
                </div>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 font-mono list-disc list-inside">
                <li>Operator harus hadir fisik di workshop saat malam.</li>
                <li>Jika filamen kusut atau terlepas dari bed, printer terus berjalan dan merusak mesin.</li>
                <li>Penyimpanan file g-code berserakan di kartu memori tanpa version control.</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-brand-500/40 text-white space-y-4 relative overflow-hidden shadow-glow-cyan">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-sm text-emerald-300">Revolusi Cerdas Bersama GooOS</h4>
                  <p className="text-xs text-slate-400">Otomasi penuh 24 jam dengan kecerdasan komputasi tepi</p>
                </div>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 font-mono list-disc list-inside">
                <li>AI vision mendeteksi anomali layer dalam waktu &lt; 150 milidetik dan auto-pause.</li>
                <li>Slicing cloud instan langsung mengoptimalkan orientasi cetak dan support tree.</li>
                <li>Klien dapat melihat live progress via web portal transparan.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          KEY FEATURES GRID
      ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-600 dark:text-accent-400">
            Arsitektur Fitur Terstruktur
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
            Fitur Utama Ekosistem GooOS
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Setiap modul dirancang saling berkomunikasi secara asinkronus untuk menghasilkan efisiensi maksimal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GOOOS_FEATURES.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 shadow-lg hover:shadow-glow-cyan transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500/10 to-accent-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {idx === 0 && <Network className="w-6 h-6 text-brand-500" />}
                  {idx === 1 && <Eye className="w-6 h-6 text-accent-500" />}
                  {idx === 2 && <CloudLightning className="w-6 h-6 text-brand-500" />}
                  {idx === 3 && <Gauge className="w-6 h-6 text-accent-500" />}
                  {idx === 4 && <Boxes className="w-6 h-6 text-brand-500" />}
                  {idx === 5 && <Smartphone className="w-6 h-6 text-accent-500" />}
                </div>

                <span className="text-[11px] font-mono font-bold uppercase text-accent-600 dark:text-accent-400 tracking-wider">
                  {feat.tagline}
                </span>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 mb-3 group-hover:text-brand-500 transition-colors">
                  {feat.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Teruji di armada Goocanan</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          TECHNICAL SPECS & COMPATIBILITY
      ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 text-white overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-400">
                Spesifikasi Teknis &amp; Protokol
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                Kompatibel dengan Standar Industri Terbuka
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                GooOS tidak mengunci hardware. Kami mendukung protokol firmware populer, SBC berbasis ARM seperti Raspberry Pi, hingga integrasi cloud API.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-3 font-mono text-xs">
              {GOOOS_TECH_SPECS.map((spec, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <span className="text-slate-400 font-semibold">{spec.label}:</span>
                  <span className="text-brand-300 text-left sm:text-right font-medium">{spec.value}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          MANFAAT PENGGUNAAN (BENEFITS)
      ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            Nilai Tambah &amp; Dampak
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
            Siapa Saja yang Diuntungkan oleh GooOS?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Klien Jasa Cetak Goocanan
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Mendapatkan ketenangan pikiran karena status proyek dapat dilacak transparan, pengerjaan lebih cepat tanpa antrean macet, dan garansi dimensi presisi bebas cacat.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-accent-500/10 text-accent-600 dark:text-accent-400 flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Print Farm &amp; Manufaktur Skala Usaha
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Mengurangi kebutuhan operator shift malam hingga 75%, menghemat biaya listrik dan bahan terbuang, serta integrasi otomatis ke webhook laporan produksi.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Lab Riset Kampus &amp; FabLab
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Manajemen hak akses pengguna terpusat, alokasi kuota pemakaian filamen per mahasiswa, serta pencatatan otomatis jam terbang mesin untuk perawatan rutin.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          CALL TO ACTION (REQUEST ACCESS / PARTNERSHIP)
      ========================================================================= */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-brand-950 border border-brand-500/40 p-8 sm:p-12 text-center text-white space-y-6 shadow-glow-combo">
          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Ingin Mengadopsi GooOS untuk Print Farm Anda?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Kami saat ini membuka program evaluasi kemitraan dan instalasi custom bagi maker space, universitas, dan industrial lab. Diskusikan kebutuhan arsitektur Anda dengan kami.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/kontak"
              className="py-4 px-8 rounded-2xl bg-gradient-to-r from-brand-500 to-accent-500 hover:from-brand-600 hover:to-accent-600 text-white font-bold text-sm shadow-glow-cyan flex items-center gap-2"
            >
              <span>Hubungi Tim Pengembang GooOS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Halo Goocanan, saya tertarik untuk mendiskusikan integrasi sistem operasi GooOS.')}`}
              target="_blank"
              rel="noreferrer"
              className="py-4 px-8 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm border border-slate-700"
            >
              Konsultasi Cepat via WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Zap, 
  Layers, 
  Box, 
  ShoppingBag, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Activity, 
  Calculator, 
  HardDrive, 
  Server, 
  CreditCard, 
  FolderKanban, 
  Settings,
  Database,
  Lock,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { GOO_APPS, GOOOS_TECH_SPECS, COMPANY_INFO } from '../data/goocananData';
import GooOSInteractiveMockup from '../components/GooOSInteractiveMockup';

export default function GooOSPage() {
  const [selectedAppId, setSelectedAppId] = useState('3dflow');

  const selectedApp = GOO_APPS.find(app => app.id === selectedAppId) || GOO_APPS[0];

  return (
    <div className="relative pt-24 pb-20 overflow-hidden">
      
      {/* Background Neon Gradients */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-tr from-brand-500/15 via-indigo-500/15 to-rose-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* =========================================================================
          HERO SECTION
      ========================================================================= */}
      <section className="px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1720px] mx-auto pt-6 pb-12">
        <div className="text-center max-w-5xl mx-auto space-y-6">
          
          {/* Official GooOS Brand Logo & Badge */}
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-slate-300 text-xs font-mono font-semibold shadow-lg backdrop-blur-md">
              <img 
                src="/brand/app_icon_gradient.png" 
                alt="GooOS" 
                className="w-5 h-5 rounded-md object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span>GooOS Suite &bull; Operating System for Content &amp; Production Workflow</span>
            </div>

            <div className="text-xs font-mono text-brand-600 dark:text-brand-400 font-bold tracking-widest uppercase">
              Precision in Every Layer &bull; Precision in Every Workflow
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Ekosistem Sistem Operasi Terpadu{' '}
            <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-indigo-400 to-cyan-400">
              GooOS
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Platform komputasi terdistribusi yang menyatukan seluruh siklus manufaktur aditif Goocanan: dari <strong>3DFlow</strong> (telemetri armada &amp; inventaris spul), <strong>GOO-Studio</strong> (smart batching nesting &amp; kalkulator margin), hingga <strong>GooPrint</strong> (WebCAD parametrik 3D).
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#mockup"
              className="py-4 px-8 rounded-2xl bg-gradient-to-r from-rose-500 via-indigo-500 to-cyan-500 hover:opacity-95 text-white font-bold text-sm shadow-glow-cyan flex items-center gap-2 transition transform active:scale-95"
            >
              <Activity className="w-4 h-4" />
              <span>Buka Simulator Antarmuka GooOS</span>
            </a>

            <a
              href="#apps"
              className="py-4 px-8 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-bold text-sm border border-slate-300 dark:border-slate-800 flex items-center gap-2 transition"
            >
              <span>Eksplorasi Modul Aplikasi</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE GOOOS DASHBOARD MOCKUP
      ========================================================================= */}
      <section id="mockup" className="px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1720px] mx-auto py-8">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-500 dark:text-rose-400">
              Live Preview &bull; Berdasarkan Aplikasi Nyata (/goocanan/gooos)
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Simulasi Antarmuka Suite GooOS
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Jelajahi 3DFlow &bull; GOO-Studio Batching &bull; GooPrint WebCAD
          </p>
        </div>

        <GooOSInteractiveMockup />
      </section>

      {/* =========================================================================
          DAFTAR APLIKASI UTAMA (3DFLOW, GOO-STUDIO, GOOPRINT, GOOMARKET, GOOAI)
      ========================================================================= */}
      <section id="apps" className="py-16 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1720px] mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            Arsitektur Aplikasi Modular
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
            Modul Utama Dalam Ekosistem GooOS
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Masing-masing aplikasi dirancang terhubung melalui monorepo Turborepo dan database Drizzle PostgreSQL terpadu.
          </p>
        </div>

        {/* 5 Apps Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {GOO_APPS.map((app) => (
            <div
              key={app.id}
              className={`p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border transition-all duration-300 flex flex-col justify-between group shadow-lg ${
                app.id === '3dflow'
                  ? 'border-rose-500/30 hover:border-rose-500 hover:shadow-rose-500/10'
                  : app.id === 'goo-studio'
                  ? 'border-indigo-500/30 hover:border-indigo-500 hover:shadow-indigo-500/10'
                  : app.id === 'gooprint'
                  ? 'border-cyan-500/30 hover:border-cyan-500 hover:shadow-cyan-500/10'
                  : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              <div>
                {/* Header Icon + Version Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform ${
                    app.id === '3dflow' ? 'bg-rose-500/10 text-rose-500' :
                    app.id === 'goo-studio' ? 'bg-indigo-500/10 text-indigo-400' :
                    app.id === 'gooprint' ? 'bg-cyan-500/10 text-cyan-400' :
                    app.id === 'goomarket' ? 'bg-amber-500/10 text-amber-400' : 'bg-purple-500/10 text-purple-400'
                  }`}>
                    {app.id === '3dflow' && <Zap className="w-6 h-6" />}
                    {app.id === 'goo-studio' && <Layers className="w-6 h-6" />}
                    {app.id === 'gooprint' && <Box className="w-6 h-6" />}
                    {app.id === 'goomarket' && <ShoppingBag className="w-6 h-6" />}
                    {app.id === 'gooai' && <Sparkles className="w-6 h-6" />}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-semibold">
                      {app.version}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      app.status === 'active' 
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                        : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    }`}>
                      {app.status === 'active' ? 'ACTIVE' : 'R&D'}
                    </span>
                  </div>
                </div>

                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {app.tagline}
                </span>

                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1 mb-3">
                  {app.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                  {app.description}
                </p>

                {/* Real Statistics from /goocanan/gooos */}
                <div className="grid grid-cols-2 gap-2 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 text-xs font-mono mb-5">
                  {app.stats.map((stat, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block">{stat.label}</span>
                      <span className="font-bold text-slate-900 dark:text-white truncate block">{stat.value}</span>
                    </div>
                  ))}
                </div>

                {/* Sub-menu / Features list */}
                <div className="space-y-2 border-t border-slate-100 dark:border-slate-800/80 pt-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                    Fitur &amp; Kemampuan:
                  </span>
                  {app.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-800 dark:text-slate-200">{feat.name}: </strong>
                        <span className="text-slate-500 dark:text-slate-400">{feat.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800/80">
                <a
                  href="#mockup"
                  className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline flex items-center justify-between"
                >
                  <span>Lihat Demo {app.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          TECHNICAL STACK & MONOREPO ARCHITECTURE (Based on ARCHITECTURE.md)
      ========================================================================= */}
      <section className="py-16 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1720px] mx-auto">
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-14 text-white overflow-hidden relative shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-mono font-semibold">
                <Database className="w-3.5 h-3.5" />
                <span>Arsitektur Monorepo Turborepo</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
                Dibangun di Atas Fondasi Teknologi Mutakhir
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                GooOS dirancang modular dengan pnpm workspaces: <code>@gooos/studio</code>, <code>@gooos/db</code> (Drizzle schema 18 tabel PostgreSQL), <code>@gooos/auth</code> (Better Auth multi-workspace), dan Three.js WebCAD parametric engine.
              </p>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs font-mono">
                <div className="flex justify-between text-slate-400">
                  <span>Multi-Tenant Workspaces:</span>
                  <span className="text-emerald-400 font-bold">GOOCANAN 3D &bull; KSM &bull; Personal</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Database Tables:</span>
                  <span className="text-cyan-400 font-bold">18 Tabel Relasional</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>3D CAD Core:</span>
                  <span className="text-purple-400 font-bold">Three.js + CSG Boolean Engine</span>
                </div>
              </div>
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
      <section className="py-16 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1720px] mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            Dampak &amp; Nilai Tambah
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
            Bagaimana GooOS Mengoptimasi Seluruh Alur Kerja
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Bagi Klien Goocanan
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Kalkulasi harga transparan berbasis gramasi &amp; waktu cetak riil tanpa markup tersembunyi, pengerjaan lebih cepat berkat smart batching, serta jaminan ketersediaan filamen sesuai antrean.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Bagi Operator Print Farm
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Tidak ada lagi spul filamen habis di tengah jalan tanpa peringatan. 3DFlow memantau gramasi sisa, mencatat pengeluaran listrik dan depresiasi alat, serta membukukan arus kas transaksi secara otomatis.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Bagi Desainer &amp; Prototyper
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Membuat model 3D parametrik seperti Polaroid Frame langsung di browser melalui GooPrint WebCAD, dan meneruskannya ke antrean pelat cetak GOO-Studio dalam satu klik.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          CALL TO ACTION
      ========================================================================= */}
      <section className="py-12 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1720px] mx-auto">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-brand-950 border border-brand-500/40 p-8 sm:p-12 text-center text-white space-y-6 shadow-glow-combo">
          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Ingin Berkolaborasi atau Menggunakan Ekosistem GooOS?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            GooOS terus berkembang untuk mendukung produktivitas manufaktur aditif. Hubungi tim engineering Goocanan untuk diskusi integrasi, pemesanan kustom, atau demo langsung.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/kontak"
              className="py-4 px-8 rounded-2xl bg-gradient-to-r from-rose-500 via-indigo-500 to-cyan-500 hover:opacity-90 text-white font-bold text-sm shadow-glow-cyan flex items-center gap-2"
            >
              <span>Hubungi Tim Pengembang GooOS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Halo Goocanan, saya tertarik untuk mendiskusikan ekosistem sistem operasi GooOS (3DFlow & GOO-Studio).')}`}
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

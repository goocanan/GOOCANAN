import React from 'react';
import { X, Layers, Clock, CheckCircle2, MessageCircle, Cpu, Tag } from 'lucide-react';
import { COMPANY_INFO } from '../data/goocananData';

export default function PortfolioModal({ item, onClose }) {
  if (!item) return null;

  const handleConsultSimilar = () => {
    const text = `Halo Goocanan! Saya tertarik dengan portofolio "${item.title}" (${item.material}, layer ${item.layerHeight}). Saya punya proyek serupa dan ingin konsultasi cetak.`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-dark-card rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Tutup Modal"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-sm transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Image */}
        <div className="md:w-1/2 relative bg-slate-900 min-h-[260px] md:min-h-full">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent md:hidden" />
          <div className="absolute bottom-4 left-4 md:hidden">
            <span className="px-3 py-1 rounded-full bg-brand-500/80 text-white text-xs font-mono font-semibold backdrop-blur-sm">
              {item.category}
            </span>
          </div>
        </div>

        {/* Right: Details */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-mono font-semibold">
              <Tag className="w-3.5 h-3.5" />
              <span>{item.category}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {item.title}
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {item.desc}
            </p>

            {/* Technical Spec Grid */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-200 dark:border-slate-800">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-mono mb-1">
                  <Layers className="w-3.5 h-3.5 text-brand-500" />
                  <span>Material</span>
                </div>
                <span className="text-xs font-bold text-slate-900 dark:text-white block truncate">
                  {item.material}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-mono mb-1">
                  <Cpu className="w-3.5 h-3.5 text-brand-500" />
                  <span>Resolusi Layer</span>
                </div>
                <span className="text-xs font-bold text-slate-900 dark:text-white block font-mono">
                  {item.layerHeight}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-mono mb-1">
                  <Clock className="w-3.5 h-3.5 text-accent-500" />
                  <span>Durasi Cetak</span>
                </div>
                <span className="text-xs font-bold text-slate-900 dark:text-white block font-mono">
                  {item.printTime}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-mono mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Inspeksi QC</span>
                </div>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 block font-mono">
                  Lolos Uji Toleransi
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-brand-500/10 border border-brand-500/20 text-xs text-brand-700 dark:text-brand-300">
              💡 <strong>Ingin hasil seperti ini?</strong> Kami dapat menyesuaikan skala, toleransi lubang mur (heat-set inserts), atau warna sesuai kebutuhan Anda.
            </div>
          </div>

          {/* CTA Footer */}
          <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleConsultSimilar}
              className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 hover:from-brand-600 hover:to-accent-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-glow-cyan transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Konsultasikan Proyek Serupa</span>
            </button>
            <button
              onClick={onClose}
              className="py-3 px-5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-sm transition"
            >
              Tutup
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

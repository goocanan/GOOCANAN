import React, { useState, useMemo } from 'react';
import { Calculator, Sparkles, MessageCircle, Info, Layers, Check, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { PRINT_MATERIALS, COMPANY_INFO } from '../data/goocananData';

export default function CostEstimator() {
  const [selectedMaterialId, setSelectedMaterialId] = useState('pla-plus');
  const [weight, setWeight] = useState(60); // in grams
  const [infill, setInfill] = useState(20); // in percentage
  const [layerHeight, setLayerHeight] = useState('0.20'); // mm
  const [finishing, setFinishing] = useState('raw'); // 'raw', 'sanded', 'prime'

  const selectedMaterial = useMemo(() => {
    return PRINT_MATERIALS.find(m => m.id === selectedMaterialId) || PRINT_MATERIALS[0];
  }, [selectedMaterialId]);

  // Real calculation logic: Rp 400/g base + Rp 3.000/jam mesin, Min. Rp 25.000
  const calculation = useMemo(() => {
    const basePricePerGram = selectedMaterial.pricePerGram; // e.g. 400 for PLA, 500 for PETG, 700 for TPU
    
    // Infill multiplier
    const infillFactor = 1 + (infill - 20) * 0.005;
    
    // Layer resolution multiplier
    let resolutionMultiplier = 1.0;
    if (layerHeight === '0.12') resolutionMultiplier = 1.3;
    else if (layerHeight === '0.20') resolutionMultiplier = 1.0;
    else if (layerHeight === '0.28') resolutionMultiplier = 0.85;

    // Effective weight
    const effectiveWeight = weight * infillFactor;

    // Estimated print duration (hours) based on Creality Hi & Bambu Lab A1 Mini high speed
    // Approximately 20-25 grams per hour at standard settings
    const speedRate = selectedMaterial.id === 'tpu-flex' ? 12 : 22; // TPU prints slower
    const estimatedHours = Math.max(1, Math.round((effectiveWeight / speedRate) * resolutionMultiplier * 10) / 10);

    // 1. Material Cost (Rp 400 - Rp 700 / gram)
    const materialCost = Math.round(effectiveWeight * basePricePerGram);

    // 2. Machine Cost (Rp 3.000 / jam)
    const machineCost = Math.round(estimatedHours * COMPANY_INFO.calculatorRates.hourlyMachineRate);

    // 3. Finishing add-on
    let finishingCost = 0;
    if (finishing === 'sanded') finishingCost = 15000;
    if (finishing === 'prime') finishingCost = 25000;

    const rawTotal = materialCost + machineCost + finishingCost;

    // Minimum Order enforcement: Rp 25.000
    const totalEstimate = Math.max(COMPANY_INFO.minOrder, Math.round(rawTotal / 1000) * 1000);

    return {
      effectiveWeight: Math.round(effectiveWeight),
      materialCost,
      machineCost,
      finishingCost,
      estimatedHours,
      totalEstimate,
      isMinOrderApplied: rawTotal < COMPANY_INFO.minOrder
    };
  }, [selectedMaterial, weight, infill, layerHeight, finishing]);

  const handleWhatsAppRedirect = () => {
    const finishLabel = finishing === 'raw' ? 'Standar Rapih (Support Lepas)' : finishing === 'sanded' ? 'Amplas Halus (+Rp 15rb)' : 'Amplas & Primer (+Rp 25rb)';
    const text = `Halo Goocanan! Saya tertarik dengan estimasi kalkulator 3D printing web berikut:
• Material: ${selectedMaterial.name} (Rp ${selectedMaterial.pricePerGram}/gram)
• Estimasi Berat Part: ${weight} gram
• Kepadatan Infill: ${infill}%
• Resolusi Layer: ${layerHeight} mm
• Finishing: ${finishLabel}
• Estimasi Durasi Cetak: ±${calculation.estimatedHours} Jam
• Rincian Biaya: Bahan Rp ${calculation.materialCost.toLocaleString('id-ID')} + Mesin Rp ${calculation.machineCost.toLocaleString('id-ID')}
• Total Estimasi Biaya: Rp ${calculation.totalEstimate.toLocaleString('id-ID')} (Min. Order Rp 25.000)

Saya ada file 3D (STL/STEP) yang siap dikonsultasikan. Mohon dicek. Terima kasih!`;

    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div id="estimator" className="relative bg-white dark:bg-dark-card rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
      {/* Glowing background accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-mono font-semibold mb-3">
              <Calculator className="w-3.5 h-3.5" />
              <span>Skema Harga Transparan &bull; Rp 400/gram &amp; Rp 3.000/jam</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Kalkulator Estimasi Biaya Cetak 3D
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Dihitung berdasarkan berat bahan riil dan durasi pemakaian mesin Creality Hi / Bambu Lab A1 Mini.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/20 w-fit">
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>Minimal Order Hanya Rp 25.000 &bull; 2-3 Hari Kerja</span>
          </div>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          
          {/* Controls Column (Col 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Pilih Material Ready */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                1. Pilih Bahan Material (Ready Stock)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {PRINT_MATERIALS.map((mat) => {
                  const isSelected = mat.id === selectedMaterialId;
                  return (
                    <button
                      key={mat.id}
                      type="button"
                      onClick={() => setSelectedMaterialId(mat.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'border-brand-500 bg-brand-500/10 text-slate-900 dark:text-white shadow-glow-cyan'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold truncate">{mat.name}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-brand-500 shrink-0" />}
                      </div>
                      <span className="text-xs text-brand-600 dark:text-brand-400 font-mono font-bold block">
                        Rp {mat.pricePerGram.toLocaleString('id-ID')}/gram
                      </span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">{mat.tags[1]}</span>
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-brand-600 dark:text-brand-400 mt-2 flex items-center gap-1 font-mono">
                <Info className="w-3.5 h-3.5" />
                {selectedMaterial.features}
              </p>
            </div>

            {/* 2. Slider Berat Part */}
            <div className="bg-slate-50 dark:bg-slate-900/40 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  2. Perkiraan Berat Part (Gram)
                </label>
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    min="5"
                    max="1000"
                    value={weight}
                    onChange={(e) => setWeight(Math.max(5, parseInt(e.target.value) || 5))}
                    className="w-20 px-2 py-1 text-right text-sm font-bold bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-brand-600 dark:text-brand-400 focus:outline-none"
                  />
                  <span className="text-xs font-mono text-slate-400">gram</span>
                </div>
              </div>
              <input
                type="range"
                min="5"
                max="350"
                step="5"
                value={weight}
                onChange={(e) => setWeight(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                <span>10g (Fidget / Keychain)</span>
                <span>40g (Mini Dispo Lens)</span>
                <span>120g (Desk Organizer / Dock)</span>
                <span>250g+ (Part Besar)</span>
              </div>
            </div>

            {/* 3. Infill Density & Resolusi Layer */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Infill */}
              <div className="bg-slate-50 dark:bg-slate-900/40 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    3. Kepadatan Infill
                  </label>
                  <span className="text-xs font-bold text-brand-600 dark:text-brand-400 font-mono">
                    {infill}%
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-1.5 mb-2">
                  {[15, 25, 40, 100].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setInfill(val)}
                      className={`py-1 text-xs font-medium rounded-lg border transition ${
                        infill === val
                          ? 'bg-brand-500 text-white border-brand-500 font-bold'
                          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      {val}%
                    </button>
                  ))}
                </div>
                <span className="text-[10px] text-slate-400 block font-mono">
                  {infill <= 20 ? 'Standar display & visual rapi' : infill <= 40 ? 'Kuat fungsional mekanik' : '100% Solid pejal'}
                </span>
              </div>

              {/* Layer Height */}
              <div className="bg-slate-50 dark:bg-slate-900/40 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  4. Ketebalan Layer (Presisi)
                </label>
                <select
                  value={layerHeight}
                  onChange={(e) => setLayerHeight(e.target.value)}
                  className="w-full p-2.5 text-xs font-medium bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-200 focus:outline-none"
                >
                  <option value="0.28">0.28 mm — Fast Prototype Draft</option>
                  <option value="0.20">0.20 mm — Standar Halus (Rekomendasi)</option>
                  <option value="0.12">0.12 mm — Ultra High Detail Presisi</option>
                </select>
                <span className="text-[10px] text-slate-400 block mt-2 font-mono">
                  Bambu Lab &amp; Creality Hi menjamin akurasi 0.05mm.
                </span>
              </div>
            </div>

            {/* 5. Finishing Option */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                5. Opsi Tambahan Finishing
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'raw', name: 'Standar Rapih', desc: 'Support dilepas rapi & bersih', extra: 'Rp 0' },
                  { id: 'sanded', name: 'Amplas Halus', desc: 'Permukaan dihaluskan manual', extra: '+Rp 15.000' },
                  { id: 'prime', name: 'Amplas + Primer', desc: 'Siap langsung dicat pewarna', extra: '+Rp 25.000' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFinishing(item.id)}
                    className={`p-3 rounded-xl border text-left transition ${
                      finishing === item.id
                        ? 'border-brand-500 bg-brand-500/10 text-slate-900 dark:text-white'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span>{item.name}</span>
                      <span className="text-[10px] text-brand-500 font-mono">{item.extra}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Result Card Column (Col 8-12) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-8 rounded-3xl border border-brand-500/30 text-white shadow-glow-cyan relative overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-brand-400 tracking-wider uppercase font-semibold">
                  Rincian Simulasi Biaya
                </span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono border border-emerald-500/30">
                  Tarif Transparan
                </span>
              </div>

              {/* Total Display */}
              <div>
                <span className="text-xs text-slate-400 block mb-1">Perkiraan Biaya Cetak:</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-cyan-300 to-accent-300 font-mono">
                    Rp {calculation.totalEstimate.toLocaleString('id-ID')}
                  </span>
                </div>
                {calculation.isMinOrderApplied ? (
                  <span className="text-[11px] text-amber-400 mt-1 block font-mono">
                    *Menerapkan ketentuan minimal pemesanan Rp 25.000.
                  </span>
                ) : (
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    *Harga final diverifikasi dari geometri file STL/STEP Anda.
                  </span>
                )}
              </div>

              {/* Breakdown List */}
              <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs font-mono">
                <div className="flex justify-between text-slate-300">
                  <span>Biaya Bahan ({selectedMaterial.name}):</span>
                  <span>Rp {calculation.materialCost.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Biaya Jam Mesin (Rp 3.000/jam):</span>
                  <span>Rp {calculation.machineCost.toLocaleString('id-ID')}</span>
                </div>
                {calculation.finishingCost > 0 && (
                  <div className="flex justify-between text-brand-400">
                    <span>Opsi Finishing:</span>
                    <span>Rp {calculation.finishingCost.toLocaleString('id-ID')}</span>
                  </div>
                )}
                <div className="flex justify-between text-emerald-400 pt-2 border-t border-slate-800/80">
                  <span>Estimasi Durasi Cetak:</span>
                  <span>± {calculation.estimatedHours} Jam Mesin</span>
                </div>
              </div>

              {/* Guarantees */}
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-[11px] text-slate-300 space-y-1.5">
                <p className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-accent-400 shrink-0" />
                  <span>Minimal pemesanan Rp 25.000 (Melayani Cetak Satuan).</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-accent-400 shrink-0" />
                  <span>Pengerjaan standar 2-3 hari kerja di workshop Jakarta Barat.</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-accent-400 shrink-0" />
                  <span>Bisa order via Shopee &amp; Tokopedia untuk kemudahan pembayaran.</span>
                </p>
              </div>
            </div>

            {/* CTA WhatsApp Button */}
            <div className="pt-6 relative z-10 space-y-2">
              <button
                type="button"
                onClick={handleWhatsAppRedirect}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-brand-500 to-accent-500 hover:from-brand-600 hover:to-accent-600 text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-glow-cyan hover:shadow-glow-combo transition-all transform active:scale-95 group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Kirim Rincian &amp; File ke WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center justify-center gap-3 pt-1 text-[11px] font-mono text-slate-400">
                <a 
                  href={COMPANY_INFO.socials.shopee} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-brand-400 transition underline"
                >
                  Shopee Store
                </a>
                <span>&bull;</span>
                <a 
                  href={COMPANY_INFO.socials.tokopedia} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-brand-400 transition underline"
                >
                  Tokopedia Store
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

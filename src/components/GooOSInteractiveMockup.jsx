import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Layers, 
  Box, 
  ShoppingBag, 
  Sparkles, 
  Zap, 
  Flame, 
  Thermometer, 
  Package, 
  CreditCard, 
  Sliders, 
  Play, 
  Pause, 
  Download, 
  Check, 
  CheckCircle2, 
  ArrowRight, 
  RefreshCw,
  FolderKanban,
  Calculator,
  Grid
} from 'lucide-react';
import { GOO_APPS } from '../data/goocananData';

export default function GooOSInteractiveMockup() {
  const [activeApp, setActiveApp] = useState('3dflow'); // '3dflow', 'goo-studio', 'gooprint', 'gooai'
  
  // 3DFlow state
  const [nozzleTemp, setNozzleTemp] = useState(218);
  const [bedTemp, setBedTemp] = useState(60);
  const [crealityProgress, setCrealityProgress] = useState(78);
  const [isPaused, setIsPaused] = useState(false);

  // GOO-Studio state
  const [targetMargin, setTargetMargin] = useState(40); // %
  const [selectedBatchPlate, setSelectedBatchPlate] = useState('plate-1');

  // GooPrint state
  const [frameType, setFrameType] = useState('Mini'); // 'Mini', 'Square', 'Wide'
  const [customText, setCustomText] = useState('GOOCANAN · 2026');
  const [includeStand, setIncludeStand] = useState(true);
  const [frameColor, setFrameColor] = useState('#ffffff');
  const [isExporting, setIsExporting] = useState(false);

  // Small live fluctuation effect for telemetry realism
  useEffect(() => {
    const interval = setInterval(() => {
      setNozzleTemp(prev => Math.min(221, Math.max(216, prev + (Math.random() > 0.5 ? 0.3 : -0.3))));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleSimulateExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
    }, 1000);
  };

  return (
    <div className="relative rounded-3xl bg-slate-950 border border-brand-500/30 shadow-2xl overflow-hidden font-sans text-slate-200">
      
      {/* =========================================================================
          OS TOP HEADER BAR (Matching gooos / GooNavbar)
      ========================================================================= */}
      <div className="bg-slate-900/95 border-b border-slate-800 px-4 py-3 flex flex-wrap items-center justify-between gap-3 backdrop-blur-md">
        
        {/* Left: Brand & Suite Indicator */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <div className="h-4 w-px bg-slate-700 mx-1" />
          
          <div className="flex items-center gap-2">
            <img 
              src="/brand/app_icon_gradient.png" 
              alt="GooOS" 
              className="w-6 h-6 rounded-lg object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="flex items-baseline gap-1.5">
              <span className="font-extrabold font-mono text-sm tracking-wider text-white">
                GooOS
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-brand-500/20 text-brand-400 border border-brand-500/30 font-semibold">
                v2.4 Pro Suite
              </span>
            </div>
          </div>
        </div>

        {/* Center: App Switcher Tabs (3DFlow, GOO-Studio, GooPrint, GooAI) */}
        <div className="flex items-center bg-slate-950/80 p-1 rounded-xl border border-slate-800 text-xs font-mono">
          <button
            onClick={() => setActiveApp('3dflow')}
            className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${
              activeApp === '3dflow'
                ? 'bg-rose-500 text-white font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>⚡ 3DFlow</span>
            <span className="hidden sm:inline text-[10px] opacity-80">(Farm Ops)</span>
          </button>

          <button
            onClick={() => setActiveApp('goo-studio')}
            className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${
              activeApp === 'goo-studio'
                ? 'bg-indigo-600 text-white font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>📐 GOO-Studio</span>
            <span className="hidden sm:inline text-[10px] opacity-80">(Batching)</span>
          </button>

          <button
            onClick={() => setActiveApp('gooprint')}
            className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${
              activeApp === 'gooprint'
                ? 'bg-cyan-600 text-white font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>🎨 GooPrint</span>
            <span className="hidden sm:inline text-[10px] opacity-80">(WebCAD)</span>
          </button>

          <button
            onClick={() => setActiveApp('gooai')}
            className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${
              activeApp === 'gooai'
                ? 'bg-purple-600 text-white font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>✨ GooAI</span>
            <span className="hidden sm:inline text-[10px] opacity-80">(Copilot)</span>
          </button>
        </div>

        {/* Right: Farm Live Pulse */}
        <div className="hidden md:flex items-center gap-2 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="text-emerald-400 font-medium">3 Mesin Online &bull; Farm Active</span>
        </div>
      </div>

      {/* =========================================================================
          VIEWPORT CONTENT CONTAINER
      ========================================================================= */}
      <div className="p-4 sm:p-6 min-h-[460px] bg-slate-950 tech-grid-pattern">
        
        {/* =========================================================================
            APP 1: 3DFlow (Additive Manufacturing & Farm Operations)
        ========================================================================= */}
        {activeApp === '3dflow' && (
          <div className="space-y-5 animate-fadeIn">
            
            {/* Top Metrics Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Inventaris Filamen
                </span>
                <div className="text-xl font-bold font-mono text-white mt-0.5">
                  128 <span className="text-xs text-rose-400 font-normal">Spul (84.5 kg)</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">+66 Item Aset Hardware</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Armada Printer
                </span>
                <div className="text-xl font-bold font-mono text-emerald-400 mt-0.5">
                  3 Online <span className="text-xs text-slate-400 font-normal">(100% Ready)</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">Creality Hi &bull; Bambu Lab</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Antrean Pesanan
                </span>
                <div className="text-xl font-bold font-mono text-brand-400 mt-0.5">
                  69 Orders <span className="text-xs text-slate-400 font-normal">Tracking</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">2 Sedang Dicetak &bull; 4 Antre</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Buku Kas &amp; Transaksi
                </span>
                <div className="text-xl font-bold font-mono text-white mt-0.5">
                  474 <span className="text-xs text-emerald-400 font-normal">Catatan Ledger</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">Shopee, Tokopedia &bull; Direct</span>
              </div>
            </div>

            {/* Split Grid: Live Printer Telemetry (Left) & Spool Inventory + Orders (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              
              {/* Left Column: Live Printers Fleet (Col 1-7) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" />
                    Armada Printer &bull; Live Telemetri
                  </h5>
                  <span className="text-[11px] font-mono text-slate-400">
                    Firmware: Klipper / Moonraker
                  </span>
                </div>

                {/* Printer 1: Creality Hi (Active) */}
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-rose-500/50 transition">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-white">Creality Hi 0.4 Nozzle</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        PRINTING
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-rose-400">
                      {crealityProgress}%
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 font-mono mb-2">
                    Job: <strong className="text-white">#ORD-68 Drone Arm Chassis (PA-CF)</strong> &bull; Layer 412/528
                  </p>

                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mb-3">
                    <div 
                      className="h-full bg-gradient-to-r from-rose-500 to-amber-500 rounded-full transition-all duration-300"
                      style={{ width: `${crealityProgress}%` }}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800/80">
                    <div className="flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-orange-400" />
                      <span>{nozzleTemp.toFixed(1)}°C (220°C)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Thermometer className="w-3.5 h-3.5 text-rose-400" />
                      <span>{bedTemp}°C (60°C)</span>
                    </div>
                    <div className="text-right text-slate-300">
                      <span>±38m tersisa</span>
                    </div>
                  </div>
                </div>

                {/* Printer 2: Bambu Lab X1C (Active) */}
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 transition">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-white">Bambu Lab CoreXY</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        PRINTING
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      92%
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-mono mb-2">
                    Job: <strong className="text-white">#ORD-69 Polaroid Frame Mini + Stand</strong> &bull; PLA+ White
                  </p>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mb-3">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '92%' }} />
                  </div>
                  <div className="flex justify-between text-xs font-mono text-slate-400 pt-2 border-t border-slate-800/80">
                    <span>Nozzle: 210°C &bull; Bed: 55°C</span>
                    <span className="text-emerald-400">±11m tersisa (Finishing)</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Spool Inventory Gauge & Recent Orders (Col 8-12) */}
              <div className="lg:col-span-5 space-y-4">
                
                {/* Spool Gauge Card */}
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400">
                      Spul Filamen Terpasang
                    </h5>
                    <span className="text-[10px] font-mono text-slate-400">Gauge Gramasi</span>
                  </div>

                  <div className="space-y-2.5 text-xs font-mono">
                    <div>
                      <div className="flex justify-between text-slate-300 mb-1">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-600 inline-block"></span>
                          eSun PLA+ Black
                        </span>
                        <span className="text-white font-bold">740g / 1000g</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-slate-400 rounded-full" style={{ width: '74%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-300 mb-1">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                          Sunlu PETG Red
                        </span>
                        <span className="text-white font-bold">480g / 1000g</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-rose-500 rounded-full" style={{ width: '48%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-300 mb-1">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block"></span>
                          PolyLite PA-CF (Carbon)
                        </span>
                        <span className="text-white font-bold">890g / 1000g</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-400 rounded-full" style={{ width: '89%' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Orders Pipeline */}
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400">
                      Antrean Pesanan Aktif
                    </h5>
                    <span className="text-[10px] font-mono text-emerald-400">Total 69 Orders</span>
                  </div>

                  <div className="space-y-1.5 text-xs font-mono">
                    <div className="p-2 rounded-xl bg-slate-950 flex items-center justify-between border border-slate-800">
                      <div>
                        <span className="text-white font-bold block">#ORD-69 Polaroid Frame</span>
                        <span className="text-[10px] text-slate-400">Klien: Amelia (Direct)</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        In-Progress
                      </span>
                    </div>

                    <div className="p-2 rounded-xl bg-slate-950 flex items-center justify-between border border-slate-800">
                      <div>
                        <span className="text-white font-bold block">#ORD-68 Drone Arm Chassis</span>
                        <span className="text-[10px] text-slate-400">Klien: Lab Robotika</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-rose-500/20 text-rose-400 border border-rose-500/30">
                        Printing
                      </span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* =========================================================================
            APP 2: GOO-STUDIO (Design Engineering & Smart Batching)
        ========================================================================= */}
        {activeApp === 'goo-studio' && (
          <div className="space-y-5 animate-fadeIn">
            
            {/* Header Metrics */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-400" />
                  GOO-Studio &bull; Smart Batching &amp; Multi-Part Nesting Slicer
                </h4>
                <p className="text-xs text-slate-400">
                  14 Proyek Desain &bull; 265 Komponen STL &bull; 7 Pelat Cetak Ter-nesting
                </p>
              </div>

              <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 text-xs font-mono">
                <span className="text-slate-400">Nesting Efficiency:</span>
                <span className="text-indigo-400 font-bold">94.2% Bed Fill</span>
              </div>
            </div>

            {/* Simulated 3D Printer Bed Plate Nesting Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Virtual Bed Plate (Col 1-8) */}
              <div className="lg:col-span-8 bg-slate-900/90 rounded-2xl p-5 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300 font-bold">
                    Bed Plate #03: <span className="text-indigo-400">Drone Frame Multi-Part Nesting</span>
                  </span>
                  <span className="text-slate-400">Ukuran Bed: 256 x 256 mm</span>
                </div>

                {/* 2D/3D Nesting Bed Simulation */}
                <div className="relative aspect-square max-h-[320px] w-full mx-auto rounded-2xl bg-slate-950 border-2 border-dashed border-indigo-500/40 p-4 flex flex-wrap content-start gap-2.5 overflow-hidden">
                  {/* Grid lines */}
                  <div className="absolute inset-0 bg-[radial-gradient(#312e81_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

                  {/* Nested Parts */}
                  <div className="relative z-10 w-36 h-28 rounded-xl bg-indigo-500/20 border border-indigo-500/60 p-2 flex flex-col justify-between text-[11px] font-mono text-indigo-300 shadow-glow-cyan">
                    <span className="font-bold">Part 01: Chassis Base</span>
                    <span className="text-[10px] text-slate-400">124g &bull; PA-CF</span>
                  </div>

                  <div className="relative z-10 w-24 h-28 rounded-xl bg-purple-500/20 border border-purple-500/60 p-2 flex flex-col justify-between text-[11px] font-mono text-purple-300">
                    <span className="font-bold">Part 02: Arm R1</span>
                    <span className="text-[10px] text-slate-400">38g</span>
                  </div>

                  <div className="relative z-10 w-24 h-28 rounded-xl bg-purple-500/20 border border-purple-500/60 p-2 flex flex-col justify-between text-[11px] font-mono text-purple-300">
                    <span className="font-bold">Part 03: Arm L1</span>
                    <span className="text-[10px] text-slate-400">38g</span>
                  </div>

                  <div className="relative z-10 w-44 h-20 rounded-xl bg-emerald-500/20 border border-emerald-500/60 p-2 flex flex-col justify-between text-[11px] font-mono text-emerald-300">
                    <span className="font-bold">Part 04: Battery Mount Snap-Fit</span>
                    <span className="text-[10px] text-slate-400">42g</span>
                  </div>

                  <div className="relative z-10 w-32 h-20 rounded-xl bg-amber-500/20 border border-amber-500/60 p-2 flex flex-col justify-between text-[11px] font-mono text-amber-300">
                    <span className="font-bold">Part 05: FPV Camera Pod</span>
                    <span className="text-[10px] text-slate-400">18g</span>
                  </div>

                  {/* Bed Corner Axis */}
                  <span className="absolute bottom-2 left-2 text-[10px] font-mono text-slate-500">
                    (0,0) Origin
                  </span>
                  <span className="absolute top-2 right-2 text-[10px] font-mono text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">
                    Auto-Oriented &bull; Zero Collision
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
                  <span>Total Filament Diperlukan: <strong className="text-white">260 gram</strong></span>
                  <span>Estimasi Cetak 1 Plate: <strong className="text-indigo-400">6 Jam 45 Menit</strong></span>
                </div>
              </div>

              {/* Cost & Margin Simulator Card (Col 9-12) */}
              <div className="lg:col-span-4 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                    <Calculator className="w-3.5 h-3.5" />
                    Kalkulator Margin GOO-Studio
                  </h5>
                </div>

                <div className="space-y-3 text-xs font-mono">
                  <div className="flex justify-between text-slate-300">
                    <span>Biaya Bahan (PA-CF 260g):</span>
                    <span className="text-white">Rp 312.000</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Listrik &amp; Mesin (6.75j):</span>
                    <span className="text-white">Rp 27.000</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Upah Operator &amp; QC:</span>
                    <span className="text-white">Rp 50.000</span>
                  </div>

                  <div className="pt-2 border-t border-slate-800">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-slate-400">Target Margin Laba:</span>
                      <span className="text-indigo-400 font-bold">{targetMargin}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="20" 
                      max="70" 
                      value={targetMargin}
                      onChange={(e) => setTargetMargin(parseInt(e.target.value))}
                      className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                    />
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-indigo-500/30 text-center">
                    <span className="text-[11px] text-slate-400 block">Rekomendasi Harga Jual:</span>
                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-mono">
                      Rp {Math.round(((312000 + 27000 + 50000) / (1 - targetMargin / 100)) / 1000) * 1000}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-bold transition flex items-center justify-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Kirim G-Code ke Armada 3DFlow</span>
                </button>
              </div>

            </div>

          </div>
        )}

        {/* =========================================================================
            APP 3: GOOPRINT (Cloud CAD Studio & Parametric Prototyping)
        ========================================================================= */}
        {activeApp === 'gooprint' && (
          <div className="space-y-5 animate-fadeIn">
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Box className="w-4 h-4 text-cyan-400" />
                  GooPrint &bull; WebCAD Parametric Polaroid Frame Generator
                </h4>
                <p className="text-xs text-slate-400">
                  Pemodelan parametrik 3D real-time langsung di browser dengan CSG boolean &amp; STL export.
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-mono text-xs font-semibold">
                Three.js WebGL Engine
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Interactive 3D Canvas Mockup (Col 1-7) */}
              <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl p-5 border border-slate-800 flex flex-col justify-between min-h-[340px]">
                {/* 3D Viewport Header */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-3 border-b border-slate-800">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    Viewport: Polaroid Frame ({frameType})
                  </span>
                  <span>Mesh Triangles: 2,840</span>
                </div>

                {/* Simulated Parametric Polaroid Model */}
                <div className="relative my-4 flex items-center justify-center">
                  <div className="w-56 h-64 rounded-2xl bg-white shadow-2xl p-4 flex flex-col justify-between border-4 border-slate-200 transform hover:rotate-1 hover:scale-105 transition-all duration-300">
                    
                    {/* Photo Cutout Slot */}
                    <div className="w-full h-44 rounded-lg bg-slate-900 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/40 to-accent-600/20"></div>
                      <span className="relative z-10 text-[11px] font-mono text-cyan-200 font-semibold text-center px-4">
                        Photo Cutout Slot (72 x 86mm)
                      </span>
                    </div>

                    {/* Custom Embossed Text */}
                    <div className="text-center font-mono font-bold text-slate-800 text-xs tracking-wider uppercase truncate">
                      {customText || 'GOOCANAN'}
                    </div>

                  </div>

                  {includeStand && (
                    <div className="absolute -bottom-3 w-40 h-5 rounded-lg bg-slate-300 border border-slate-400 shadow-lg text-[9px] font-mono text-slate-700 flex items-center justify-center font-bold">
                      Detachable Desk Stand Slot
                    </div>
                  )}
                </div>

                {/* Viewport Action Footer */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">
                    Format: <strong>STL Binary</strong> (Auto-Manifold)
                  </span>
                  <button
                    type="button"
                    onClick={handleSimulateExport}
                    disabled={isExporting}
                    className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-glow-cyan transition"
                  >
                    {isExporting ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5" />}
                    <span>{isExporting ? 'Generating Mesh...' : 'Download STL Mesh'}</span>
                  </button>
                </div>
              </div>

              {/* Parametric Controls Column (Col 8-12) */}
              <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                  Parameter Generator
                </h5>

                {/* Frame Size */}
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    1. Ukuran Format Frame:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Mini', 'Square', 'Wide'].map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setFrameType(size)}
                        className={`py-1.5 text-xs font-mono font-bold rounded-xl border transition ${
                          frameType === size
                            ? 'bg-cyan-600 text-white border-cyan-500'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Text */}
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    2. Teks Emboss / Deboss:
                  </label>
                  <input
                    type="text"
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    placeholder="Contoh: HAPPY BIRTHDAY"
                    className="w-full px-3 py-2 text-xs font-mono bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                {/* Stand Toggle */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono">
                  <span className="text-slate-300">Sertakan Dudukan Meja (Stand):</span>
                  <button
                    type="button"
                    onClick={() => setIncludeStand(!includeStand)}
                    className={`w-10 h-5 rounded-full transition-colors relative ${
                      includeStand ? 'bg-cyan-600' : 'bg-slate-700'
                    }`}
                  >
                    <span className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-transform ${
                      includeStand ? 'right-0.5' : 'left-0.5'
                    }`} />
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300">
                  ⚡ <strong>G-Code Bridge:</strong> Desain ini dapat langsung dikirim ke antrean cetak 3DFlow tanpa membuka software slicer desktop.
                </div>
              </div>

            </div>

          </div>
        )}

        {/* =========================================================================
            APP 4: GOOAI COPILOT & GOOMARKET PREVIEW
        ========================================================================= */}
        {activeApp === 'gooai' && (
          <div className="space-y-5 animate-fadeIn">
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  GooAI Copilot &bull; Engineering Intelligence &amp; Marketplace Sync
                </h4>
                <p className="text-xs text-slate-400">
                  Analisis orientasi geometri otomatis, pencegahan cacat cetak, dan sinkronisasi pesanan Shopee/Tokopedia.
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30 font-mono text-xs font-semibold">
                AI Preview Mode
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-purple-400 font-bold uppercase">
                  <Sparkles className="w-4 h-4" />
                  <span>AI Pre-Print Inspector</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Model AI menganalisis file STL sebelum dialokasikan ke printer:
                </p>
                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex justify-between">
                    <span className="text-slate-400">Risiko Warping / Detach:</span>
                    <span className="text-emerald-400 font-bold">Rendah (1.2%)</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex justify-between">
                    <span className="text-slate-400">Rekomendasi Brim:</span>
                    <span className="text-cyan-400 font-bold">Brim 5mm Disarankan</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex justify-between">
                    <span className="text-slate-400">Optimasi Support Tree:</span>
                    <span className="text-purple-400 font-bold">Hemat 38g Filamen</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase">
                  <ShoppingBag className="w-4 h-4" />
                  <span>GooMarket &bull; Multi-Channel Sync</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Integrasi reservasi stok otomatis dengan etalase e-commerce:
                </p>
                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex justify-between">
                    <span className="text-slate-400">Shopee Official Store:</span>
                    <span className="text-emerald-400 font-bold">Tersambung (Auto-Reserve)</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex justify-between">
                    <span className="text-slate-400">Tokopedia Store:</span>
                    <span className="text-emerald-400 font-bold">Tersambung (Auto-Reserve)</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex justify-between">
                    <span className="text-slate-400">TikTok Shop:</span>
                    <span className="text-amber-400 font-bold">Tahap Integrasi V2</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}

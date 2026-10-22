import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Cpu, 
  Eye, 
  Layers, 
  Terminal, 
  Sliders, 
  CheckCircle2, 
  AlertTriangle, 
  Play, 
  Pause, 
  RefreshCw, 
  UploadCloud, 
  Flame, 
  Thermometer,
  HardDrive,
  ShieldCheck,
  Maximize2
} from 'lucide-react';

export default function GooOSInteractiveMockup() {
  const [activeTab, setActiveTab] = useState('fleet'); // 'fleet', 'vision', 'slicer', 'telemetry'
  const [isSimulatingFailure, setIsSimulatingFailure] = useState(false);
  const [printerSpeed, setPrinterSpeed] = useState(300); // mm/s
  const [isPaused, setIsPaused] = useState(false);
  const [nozzleTemp, setNozzleTemp] = useState(215);
  const [bedTemp, setBedTemp] = useState(60);
  const [uploadedFileName, setUploadedFileName] = useState('bracket-chassis-v3.step');
  const [isSlicing, setIsSlicing] = useState(false);

  // Small live fluctuation effect for realism
  useEffect(() => {
    const interval = setInterval(() => {
      setNozzleTemp(prev => Math.min(217, Math.max(213, prev + (Math.random() > 0.5 ? 0.4 : -0.4))));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSimulateSlicing = () => {
    setIsSlicing(true);
    setTimeout(() => {
      setIsSlicing(false);
    }, 1200);
  };

  return (
    <div className="relative rounded-3xl bg-slate-950 border border-brand-500/40 shadow-glow-combo overflow-hidden font-sans text-slate-200">
      
      {/* OS Title Bar */}
      <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex flex-wrap items-center justify-between gap-3 backdrop-blur-md">
        
        {/* Left: Window Controls & OS Brand */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <div className="h-4 w-px bg-slate-700 mx-1" />
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-brand-500/20 text-brand-400 font-mono text-xs font-bold border border-brand-500/30">
              GooOS v2.6-PRO
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              Print Farm Controller &bull; Cluster ID: ID-JKT-01
            </span>
          </div>
        </div>

        {/* Center: Interactive Tabs */}
        <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-mono">
          <button
            onClick={() => setActiveTab('fleet')}
            className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${
              activeTab === 'fleet'
                ? 'bg-brand-500 text-white font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Farm Fleet</span>
          </button>

          <button
            onClick={() => setActiveTab('vision')}
            className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${
              activeTab === 'vision'
                ? 'bg-brand-500 text-white font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>AI Vision Cam</span>
          </button>

          <button
            onClick={() => setActiveTab('slicer')}
            className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${
              activeTab === 'slicer'
                ? 'bg-brand-500 text-white font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Cloud Slicer</span>
          </button>

          <button
            onClick={() => setActiveTab('telemetry')}
            className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${
              activeTab === 'telemetry'
                ? 'bg-brand-500 text-white font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Telemetri</span>
          </button>
        </div>

        {/* Right: Live Status badge */}
        <div className="hidden md:flex items-center gap-2 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="text-emerald-400 font-medium">16/16 Nodes Sync (0ms ping)</span>
        </div>
      </div>

      {/* Main OS Viewport */}
      <div className="p-4 sm:p-6 min-h-[420px] bg-slate-950 tech-grid-pattern">
        
        {/* TAB 1: FLEET OVERVIEW */}
        {activeTab === 'fleet' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Activity className="w-4 h-4 text-brand-400" />
                  Cluster Armada Goocanan (Real-time Queue &amp; State)
                </h4>
                <p className="text-xs text-slate-400">
                  Load-balancer membagi job secara cerdas berdasarkan material terpasang.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-slate-400">Total Produksi Hari Ini:</span>
                <span className="text-emerald-400 font-bold">42 Part Selesai</span>
              </div>
            </div>

            {/* Printers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
              {[
                { name: 'Goo-Alpha 01', type: 'CoreXY High-Speed', job: 'Drone Arm PA-CF', progress: 84, time: '38m tersisa', temp: '250°C / 90°C', status: 'PRINTING', color: 'brand' },
                { name: 'Goo-Titan 02', type: 'FDM Industrial 400', job: 'Maket Fasad Arch', progress: 45, time: '2j 14m tersisa', temp: '210°C / 60°C', status: 'PRINTING', color: 'accent' },
                { name: 'Goo-Resin 8K', type: 'SLA Ultra Micron', job: 'Figur Karakter Master', progress: 92, time: '12m tersisa', temp: 'Chamber 28°C', status: 'PRINTING', color: 'brand' },
                { name: 'Goo-Rapid 04', type: 'CoreXY 500mm/s', job: 'Standby - Auto Slicing', progress: 0, time: 'Antrean Siap', temp: 'Ready / Standby', status: 'IDLE', color: 'slate' }
              ].map((printer, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-brand-500/50 transition">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-white">{printer.name}</span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      printer.status === 'PRINTING' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {printer.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">{printer.type}</p>
                  
                  <div className="my-3 space-y-1">
                    <div className="flex justify-between text-[11px] font-mono text-slate-300">
                      <span className="truncate">{printer.job}</span>
                      <span className="text-brand-400 font-bold">{printer.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-brand-500 to-accent-500 rounded-full transition-all duration-500" 
                        style={{ width: `${printer.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
                    <span>{printer.temp}</span>
                    <span className="text-slate-300">{printer.time}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Farm Log */}
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono flex items-center justify-between text-slate-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-brand-400" />
                <span className="text-slate-300">GooOS Log:</span>
                <span className="text-slate-400 truncate">[12:14:02] Goo-Alpha 01 layer #412 verified with AI. No adhesion defect.</span>
              </div>
              <span className="text-brand-400 hidden sm:inline">100% Flow</span>
            </div>
          </div>
        )}

        {/* TAB 2: AI VISION & FAILURE PREVENTION */}
        {activeTab === 'vision' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fadeIn">
            {/* Camera Viewport (Col 1-8) */}
            <div className="lg:col-span-8 relative rounded-2xl bg-black border border-slate-800 overflow-hidden min-h-[280px] flex items-center justify-center">
              {/* Simulated camera grid & feed */}
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
              
              {/* Simulated 3D Print Object */}
              <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center">
                <div className="relative w-44 h-44 rounded-xl border-2 border-dashed border-emerald-500/80 bg-emerald-500/10 flex items-center justify-center shadow-glow-emerald">
                  {/* Bounding box AI tag */}
                  <div className="absolute -top-3 left-2 bg-emerald-500 text-slate-950 font-mono text-[10px] font-extrabold px-1.5 py-0.5 rounded">
                    LAYER #388: HEALTHY (99.8%)
                  </div>
                  <div className="text-center space-y-1">
                    <Eye className="w-8 h-8 text-emerald-400 mx-auto animate-pulse" />
                    <span className="text-xs font-mono text-emerald-300 font-bold block">No Spaghetti Detected</span>
                    <span className="text-[10px] font-mono text-slate-400 block">Z-Hop: OK | Flow: 100.2%</span>
                  </div>
                  {/* Target Crosshair */}
                  <div className="absolute w-4 h-4 border-t-2 border-l-2 border-emerald-400 top-2 left-2"></div>
                  <div className="absolute w-4 h-4 border-t-2 border-r-2 border-emerald-400 top-2 right-2"></div>
                  <div className="absolute w-4 h-4 border-b-2 border-l-2 border-emerald-400 bottom-2 left-2"></div>
                  <div className="absolute w-4 h-4 border-b-2 border-r-2 border-emerald-400 bottom-2 right-2"></div>
                </div>
              </div>

              {/* Camera Overlays */}
              <div className="absolute top-3 left-3 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg text-[11px] font-mono border border-slate-700">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                <span>CAM-01 CH-HD &bull; 60 FPS</span>
              </div>
              <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg text-[11px] font-mono text-slate-300 border border-slate-700">
                Inference Latency: 42ms
              </div>
            </div>

            {/* AI Control Panel (Col 9-12) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-400">
                  AI Model Configuration
                </h5>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300">Deteksi Spaghetti &amp; Gagal Adhesi:</span>
                  <span className="text-emerald-400 font-mono font-bold">AKTIF</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300">Auto-Pause on Failure:</span>
                  <span className="text-brand-400 font-mono font-bold">ENABLED</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300">Telegram/WA Bot Alert:</span>
                  <span className="text-emerald-400 font-mono font-bold">CONNECTED</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <span className="text-xs font-mono text-slate-400 block">
                  Uji Coba Respon Sistem:
                </span>
                <button
                  type="button"
                  onClick={() => setIsPaused(!isPaused)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 transition ${
                    isPaused
                      ? 'bg-amber-500 text-slate-950 hover:bg-amber-400'
                      : 'bg-red-500/20 text-red-400 border border-red-500/40 hover:bg-red-500/30'
                  }`}
                >
                  {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                  <span>{isPaused ? 'Lanjutkan Cetak (Resume)' : 'Simulasi Emergency Pause'}</span>
                </button>
                {isPaused && (
                  <p className="text-[11px] text-amber-400 font-mono bg-amber-500/10 p-2 rounded-lg border border-amber-500/20">
                    ⚠ Printer dipause oleh GooOS. Suhu nozzle diturunkan ke 150°C untuk mencegah oozing.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CLOUD SLICER */}
        {activeTab === 'slicer' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fadeIn">
            <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-400 flex items-center gap-2">
                    <UploadCloud className="w-4 h-4" />
                    Mesin Slicing Cloud Instan GooOS
                  </h5>
                  <span className="text-[10px] font-mono text-slate-400">STL, OBJ, STEP, 3MF</span>
                </div>

                <div 
                  onClick={handleSimulateSlicing}
                  className="border-2 border-dashed border-slate-700 hover:border-brand-500/70 p-6 rounded-2xl text-center cursor-pointer transition bg-slate-950/40 group"
                >
                  <UploadCloud className="w-10 h-10 text-slate-500 group-hover:text-brand-400 mx-auto mb-2 transition" />
                  <p className="text-xs font-bold text-white group-hover:text-brand-300">
                    Klik untuk simulasi slicing file CAD
                  </p>
                  <p className="text-[11px] text-slate-400 font-mono mt-1">
                    File saat ini: <span className="text-brand-400">{uploadedFileName}</span>
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  Engine: <strong className="text-slate-200">GooSlicer Cloud v1.9</strong>
                </span>
                <button
                  type="button"
                  onClick={handleSimulateSlicing}
                  disabled={isSlicing}
                  className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-mono text-xs font-bold flex items-center gap-1.5 shadow-glow-cyan transition"
                >
                  {isSlicing ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isSlicing ? 'Memproses G-Code...' : 'Re-Slice Otomatis'}</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-400">
                Hasil Analisis Geometri &amp; Estimasi
              </h5>
              <div className="space-y-2.5 text-xs font-mono">
                <div className="flex justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">Volume Model:</span>
                  <span className="text-white font-bold">42.8 cm³</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">Estimasi Filament:</span>
                  <span className="text-brand-400 font-bold">54.2 gram (18.1 meter)</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">Jumlah Lapisan:</span>
                  <span className="text-white font-bold">640 Layers (0.16mm)</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">Total Waktu Cetak:</span>
                  <span className="text-emerald-400 font-bold">2 Jam 18 Menit</span>
                </div>
                <div className="flex justify-between p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">Kebutuhan Support:</span>
                  <span className="text-accent-400 font-bold">Tree Support (Auto-Optimized)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: TELEMETRY & CONTROLS */}
        {activeTab === 'telemetry' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Nozzle Temp */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                  <span className="flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-orange-400" />
                    Nozzle Temp
                  </span>
                  <span className="text-orange-400 font-bold">Target 215°C</span>
                </div>
                <div className="text-2xl font-bold font-mono text-white">
                  {nozzleTemp.toFixed(1)}°C
                </div>
                <div className="w-full h-1 bg-slate-800 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-orange-400" style={{ width: '85%' }}></div>
                </div>
              </div>

              {/* Bed Temp */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                  <span className="flex items-center gap-1.5">
                    <Thermometer className="w-3.5 h-3.5 text-brand-400" />
                    Heatbed Temp
                  </span>
                  <span className="text-brand-400 font-bold">Target 60°C</span>
                </div>
                <div className="text-2xl font-bold font-mono text-white">
                  {bedTemp}°C
                </div>
                <div className="w-full h-1 bg-slate-800 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-brand-400" style={{ width: '60%' }}></div>
                </div>
              </div>

              {/* Speed Controller */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    Kecepatan Cetak
                  </span>
                  <span className="text-emerald-400 font-bold">{printerSpeed} mm/s</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="500"
                  value={printerSpeed}
                  onChange={(e) => setPrinterSpeed(parseInt(e.target.value))}
                  className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 mt-3"
                />
                <span className="text-[10px] text-slate-400 font-mono block mt-1">
                  Input Shaping &amp; Pressure Advance: On
                </span>
              </div>

              {/* Filament Spool Telemetry */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                  <span className="flex items-center gap-1.5">
                    <HardDrive className="w-3.5 h-3.5 text-purple-400" />
                    Sisa Spool RFID
                  </span>
                  <span className="text-purple-400 font-bold">PLA+ Grey</span>
                </div>
                <div className="text-2xl font-bold font-mono text-white">
                  684 g <span className="text-xs text-slate-400 font-normal">/ 1000g</span>
                </div>
                <div className="w-full h-1 bg-slate-800 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-purple-400" style={{ width: '68%' }}></div>
                </div>
              </div>

            </div>

            <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Kompatibilitas Firmware: Moonraker WebSocket &bull; Klipper 0.12.0</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                TLS Encrypted Connection
              </span>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}

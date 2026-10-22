// Data terpusat GOOCANAN & GooOS Ecosystem
// Disinkronkan dengan aplikasi /goocanan/gooos (apps.config.ts & ARCHITECTURE.md)

export const COMPANY_INFO = {
  name: "GOOCANAN",
  tagline: "Additive Manufacturing Precision & GooOS Ecosystem",
  headline: "Wujudkan Inovasi Nyata Melalui Presisi 3D Printing & Kecerdasan GooOS",
  subheadline: "Layanan manufaktur aditif profesional dengan akurasi tinggi, didukung penuh oleh GooOS — ekosistem sistem operasi terpadu (3DFlow, GOO-Studio, GooPrint) untuk otomasi print farm, smart batching, dan perancangan CAD parametrik.",
  whatsappNumber: "6281234567890",
  displayPhone: "+62 812-3456-7890",
  email: "halo@goocanan.com",
  secondaryEmail: "partnership@goocanan.com",
  address: "Goocanan Innovation Hub & Studio, Jl. Teknologi Presisi No. 88, Kawasan Sains & Industri, Indonesia",
  workingHours: "Senin - Sabtu: 08.00 - 21.00 WIB (Online Farm 24/7)",
  socials: {
    instagram: "https://instagram.com/goocanan",
    linkedin: "https://linkedin.com/company/goocanan",
    github: "https://github.com/goocanan",
    youtube: "https://youtube.com/@goocanan"
  }
};

export const VALUE_PROPOSITIONS = [
  {
    icon: "Zap",
    title: "Pengerjaan Kilat & Same-Day Ready",
    desc: "Didukung armada print farm Creality Hi & Bambu Lab berkecepatan tinggi, terpantau real-time melalui sistem telemetri 3DFlow."
  },
  {
    icon: "Crosshair",
    title: "Akurasi Sub-Milimeter (0.05mm)",
    desc: "Toleransi dimensi ketat untuk komponen mekanik, perakitan presisi (snap-fit), dan replika berdetail rumit menggunakan FDM & SLA 8K."
  },
  {
    icon: "Layers",
    title: "15+ Material Berkualitas Tinggi",
    desc: "Inventaris terpantau presisi: PLA+, PETG, ABS/ASA, Resin presisi tinggi, hingga Carbon Fiber (PA-CF) dengan pelacakan sisa gramasi di 3DFlow."
  },
  {
    icon: "ShieldCheck",
    title: "Jaminan Kualitas & Inspeksi QC",
    desc: "Setiap part melalui pengecekan dimensional, deburring, dan pengujian toleransi sebelum dikirimkan ke tangan Anda."
  },
  {
    icon: "Cpu",
    title: "Didukung Ekosistem Cerdas GooOS",
    desc: "Sistem operasi terpadu meliputi 3DFlow (Farm Ops), GOO-Studio (Smart Batching), dan GooPrint (WebCAD Studio) untuk efisiensi produksi maksimal."
  },
  {
    icon: "HelpCircle",
    title: "Konsultasi Desain & Slicing Gratis",
    desc: "Tim engineer kami siap menganalisis orientasi cetak, ketebalan dinding, dan optimasi support agar biaya efisien tanpa mengurangi kekuatan."
  }
];

export const PRINT_MATERIALS = [
  {
    id: "pla-plus",
    name: "PLA+ High Grade",
    type: "FDM",
    pricePerGram: 600,
    tags: ["Favorit", "Akurasi Bagus", "Ramah Lingkungan"],
    features: "Permukaan rapi, dimensional presisi, mudah difinishing & dicat. Ideal untuk visual mockup & figur.",
    specs: {
      strength: "7.5/10",
      tempResistance: "60°C",
      finish: "Matte/Satin Halus",
      colors: "20+ Pilihan Warna"
    },
    useCases: ["Model Arsitektur", "Display & Merchandise", "Cosplay & Prop", "Prototipe Visual Awal"]
  },
  {
    id: "petg",
    name: "PETG Industrial",
    type: "FDM",
    pricePerGram: 800,
    tags: ["Kuat", "Tahan Cuaca", "Tahan Kimia"],
    features: "Kekuatan impak tinggi, tahan air & bahan kimia ringan, tidak getas. Cocok untuk fungsi mekanik sehari-hari.",
    specs: {
      strength: "8.8/10",
      tempResistance: "80°C",
      finish: "Glossy/Semi-Gloss",
      colors: "Hitam, Abu, Putih, Transparan"
    },
    useCases: ["Bracket Elektronik", "Komponen Outdoor", "Botol / Case Custom", "Mechanical Gears"]
  },
  {
    id: "abs-asa",
    name: "ABS / ASA High-Temp",
    type: "FDM",
    pricePerGram: 900,
    tags: ["Tahan Panas", "UV Resistant", "Vapor Smoothable"],
    features: "Daya tahan suhu tinggi, dapat dihaluskan dengan uap aseton (vapor smooth) menjadi sehalus cetakan injeksi pabrik.",
    specs: {
      strength: "9.0/10",
      tempResistance: "100°C+",
      finish: "Satin / Ultra Smooth",
      colors: "Hitam, Putih Industri, Industrial Grey"
    },
    useCases: ["Part Otomotif", "Enclosure Mesin", "Aplikasi Outdoor UV", "Ducting Udara Panas"]
  },
  {
    id: "resin-8k",
    name: "Standard & Tough Resin 8K",
    type: "SLA / DLP",
    pricePerGram: 1800,
    tags: ["Ultra Presisi", "Micron Detail", "Bebas Garis Lapisan"],
    features: "Resolusi mikron dengan layer height mulai 0.025mm. Tanpa terlihat layer lines, permukaan selembut produk massal.",
    specs: {
      strength: "8.0/10",
      tempResistance: "75°C",
      finish: "Ultra-High Definition",
      colors: "Grey Master, Clear, Tough Black"
    },
    useCases: ["Perhiasan & Jewelry Master", "Miniatur Gaming & Figur Karakter", "Model Gigi & Medis", "Cetakan Master Mold"]
  },
  {
    id: "tpu-flex",
    name: "TPU Flexible 95A / 85A",
    type: "FDM",
    pricePerGram: 1200,
    tags: ["Elastis", "Tahan Benturan", "Anti Robek"],
    features: "Bahan karet elastis, tahan abrasi, fleksibel, meredam getaran dengan elastisitas luar biasa.",
    specs: {
      strength: "8.5/10 (Elastis)",
      tempResistance: "70°C",
      finish: "Rubberized Grip",
      colors: "Hitam, Merah, Translucent"
    },
    useCases: ["Seal & Gasket Industri", "Protective Case", "Damper Drone & Gimbal", "Footing & Sol Ergonomis"]
  },
  {
    id: "carbon-fiber",
    name: "Carbon Fiber Composite (PA-CF)",
    type: "Industrial FDM",
    pricePerGram: 2400,
    tags: ["Ultra Kaku", "Kekuatan Baja", "Ringan"],
    features: "Poliamida (Nylon) diperkuat serat karbon mikro. Bobot sangat ringan namun kekuatan struktural setara logam lunak.",
    specs: {
      strength: "9.9/10",
      tempResistance: "150°C",
      finish: "Matte Dark Carbon Texture",
      colors: "Obsidian Black"
    },
    useCases: ["Arm Drone Balap & UAV", "Jig & Fixture Pabrik", "Komponen Balap / Motorsport", "Robotika Kompetisi"]
  }
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Drone Aerodynamic Chassis & Arm",
    category: "Industri & Robotika",
    material: "PA-CF (Carbon Fiber Reinforced)",
    layerHeight: "0.12mm",
    printTime: "14 Jam",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80",
    desc: "Struktur frame drone kustom dengan rasio kekuatan-ke-bobot tinggi, dioptimasi melalui Smart Batching GOO-Studio."
  },
  {
    id: 2,
    title: "Scale Model Arsitektur Hunian Futuristik",
    category: "Arsitektur",
    material: "PLA+ High Grade & Clear Acrylic Hybrid",
    layerHeight: "0.10mm",
    printTime: "28 Jam",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    desc: "Maket arsitektur presisi skala 1:100 dengan detail fasad kisi-kisi mikro dan interior transparan untuk presentasi pengembang."
  },
  {
    id: 3,
    title: "Karakter Figur Koleksi Detail 8K",
    category: "Miniatur & Seni",
    material: "SLA Tough Resin 8K",
    layerHeight: "0.03mm",
    printTime: "8.5 Jam",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
    desc: "Hasil cetak SLA beresolusi sangat tajam dengan tekstur kain dan pori-pori mikro, siap menerima proses airbrush painting."
  },
  {
    id: 4,
    title: "Custom Polaroid Photo Frame & Desk Stand",
    category: "Rapid Prototyping",
    material: "PLA+ Matte Silk White",
    layerHeight: "0.16mm",
    printTime: "3.5 Jam",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    desc: "Dihasilkan langsung melalui generator parametrik GooPrint WebCAD dengan kustomisasi teks timbul (emboss) dan slot foto instan."
  },
  {
    id: 5,
    title: "Air Intake Adapter Mesin Balap",
    category: "Industri & Robotika",
    material: "ABS Heat-Resistant (Vapor Polished)",
    layerHeight: "0.16mm",
    printTime: "11 Jam",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    desc: "Saluran udara performa tinggi yang dihaluskan dengan uap aseton untuk aliran udara laminar bebas hambatan pada ruang mesin."
  },
  {
    id: 6,
    title: "Gasket Silikon & Damper Getaran Mesin",
    category: "Industri & Robotika",
    material: "TPU Flexible 95A",
    layerHeight: "0.20mm",
    printTime: "6 Jam",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    desc: "Part elastis peredam vibrasi motor listrik dengan sealing kedap debu dan ketahanan abrasi maksimal."
  }
];

// Data Aplikasi Resmi GooOS dari gooos/apps/studio/src/config/apps.config.ts
export const GOO_APPS = [
  {
    id: "3dflow",
    name: "3DFlow",
    tagline: "Additive Manufacturing & Farm Operations",
    description:
      "End-to-end telemetry sistem cetak 3D, monitoring armada printer, manajemen spul filamen & aset packaging, order tracking, katalog produk, dan buku kas transaksi.",
    version: "v2.4 Pro",
    status: "active",
    category: "Manufacturing",
    icon: "Zap",
    color: "#f43f5e",
    accentColor: "rose",
    stats: [
      { label: "Spool Filamen", value: "128 Items" },
      { label: "Armada Printer", value: "3 Online" },
      { label: "Transaksi Buku Kas", value: "474 Catatan" },
      { label: "Antrean Pesanan", value: "69 Orders" }
    ],
    features: [
      {
        name: "Flow Hub Telemetri",
        desc: "Telemetri live armada printer, metrik KPI, durasi aktif, dan status produksi cetak real-time.",
        badge: "Live Telemetry"
      },
      {
        name: "Inventaris Filamen & Aset",
        desc: "Pelacakan 128 spul filamen dengan sisa gramasi presisi, kode HEX warna, serta 66 aset packaging & hardware.",
        badge: "194 Total"
      },
      {
        name: "Katalog Produk 3D",
        desc: "40 item produk siap cetak dengan kalkulasi otomatis COGS, target margin laba, dan estimasi durasi print.",
        badge: "40 Models"
      },
      {
        name: "Buku Kas & Transaksi Ledger",
        desc: "474 catatan keuangan komprehensif dari marketplace (Shopee, Tokopedia) hingga klien korporat.",
        badge: "Ledger"
      },
      {
        name: "Monitoring Armada Printer",
        desc: "Pemantauan status Creality Hi, Bambu Lab, temperatur nozzle, bed, dan status job.",
        badge: "Multi-Fleet"
      },
      {
        name: "Pengaturan & Biaya Operasional",
        desc: "Konfigurasi tarif listrik per kWh, wattase mesin, upah operator, harga retail per gram, dan bobot tare spul.",
        badge: "Config Engine"
      }
    ]
  },
  {
    id: "goo-studio",
    name: "GOO-Studio",
    tagline: "Design Engineering & Smart Batching",
    description:
      "Manajemen proyek 3D, perpustakaan komponen STL part, algoritma multi-part bed plate nesting batching otomatis, dan simulasi kalkulator harga jual.",
    version: "v3.1",
    status: "active",
    category: "Design & CAD",
    icon: "Layers",
    color: "#6366f1",
    accentColor: "indigo",
    stats: [
      { label: "Proyek 3D", value: "14 Proyek" },
      { label: "Komponen Part", value: "265 STL" },
      { label: "Batch Plates", value: "7 Plates" }
    ],
    features: [
      {
        name: "Proyek & Komponen STL",
        desc: "14 proyek desain aktif dengan rincian 265 file komponen STL, bobot gramasi part, dan versioning file.",
        badge: "265 Parts"
      },
      {
        name: "Smart Batching Optimizer",
        desc: "Penyusunan multi-part nesting pada bed plate secara otomatis untuk mempercepat proses cetak massal.",
        badge: "Plate Slicer"
      },
      {
        name: "Kalkulator Biaya & Margin",
        desc: "Simulasi akurat biaya bahan, pemakaian listrik, depresiasi alat, dan rekomendasi harga jual optimal.",
        badge: "Simulator"
      },
      {
        name: "Integrasi Kebutuhan Filamen",
        desc: "Sinkronisasi langsung ke inventaris 3DFlow untuk memvalidasi kecukupan stok spul sebelum proses cetak.",
        badge: "Auto Sync"
      }
    ]
  },
  {
    id: "gooprint",
    name: "GooPrint",
    tagline: "Cloud CAD Studio & Rapid Prototyping",
    description:
      "Studio CAD parametrik berbasis web untuk pembuatan model teknis 3D langsung di browser, visualisasi geometri 3D WebGL, dan integrasi slicer engine.",
    version: "v1.2",
    status: "active",
    category: "Design & CAD",
    icon: "Box",
    color: "#06b6d4",
    accentColor: "cyan",
    stats: [
      { label: "Engine", value: "Parametric 3D" },
      { label: "Format", value: "STL / STEP / OBJ" },
      { label: "Export", value: "Instant Mesh" }
    ],
    features: [
      {
        name: "WebCAD Studio Hub",
        desc: "Ruang kerja pemodelan parametrik 3D real-time langsung di browser menggunakan Three.js WebGL viewport.",
        badge: "WebCAD"
      },
      {
        name: "Polaroid Frame Generator",
        desc: "Generator bingkai foto Polaroid (Mini, Square, Wide) dengan kustomisasi teks emboss/deboss, stand, dan export STL instan.",
        badge: "Populer"
      },
      {
        name: "Parametric Part Generator",
        desc: "Pembuatan otomatis roda gigi, dudukan sensor, dan box enclosure berdasarkan input parameter ukuran milimeter.",
        badge: "AutoCAD"
      },
      {
        name: "Slicer Bridge & Export",
        desc: "Konektor langsung dari desain WebCAD ke antrean produksi 3DFlow tanpa perlu ekspor manual.",
        badge: "G-Code Bridge"
      }
    ]
  },
  {
    id: "goomarket",
    name: "GooMarket",
    tagline: "Multi-Channel Marketplace Sync",
    description:
      "Integrasi sinkronisasi pesanan dan stok otomatis ke Shopee, Tokopedia, dan TikTok Shop dengan auto-reserve inventory.",
    version: "v0.9",
    status: "coming_soon",
    category: "E-Commerce",
    icon: "ShoppingBag",
    color: "#f59e0b",
    accentColor: "amber",
    stats: [
      { label: "Status", value: "Tahap R&D" },
      { label: "Kanal", value: "Shopee & Tokopedia" }
    ],
    features: [
      {
        name: "Sinkronisasi Etalase & Stok",
        desc: "Menghubungkan penjualan di marketplace dengan ketersediaan filamen fisik di workshop.",
        badge: "Coming Soon"
      }
    ]
  },
  {
    id: "gooai",
    name: "GooAI Copilot",
    tagline: "Autonomous 3D Engineering Intelligence",
    description:
      "Asisten cerdas analisis orientasi cetak optimum, estimasi kemungkinan stringing/warping, serta auto-generate rekomendasi parameter slicer.",
    version: "v0.5",
    status: "coming_soon",
    category: "Intelligence",
    icon: "Sparkles",
    color: "#8b5cf6",
    accentColor: "purple",
    stats: [
      { label: "Model", value: "Engineering AI" },
      { label: "Fokus", value: "Defect Prevention" }
    ],
    features: [
      {
        name: "AI Print Inspector",
        desc: "Pendeteksian kesalahan geometri, orientasi overhang, dan rekomendasi struktur support sebelum dicetak.",
        badge: "Preview"
      }
    ]
  }
];

export const GOOOS_TECH_SPECS = [
  { label: "Arsitektur Monorepo", value: "Turborepo + pnpm workspaces (@gooos/studio, @gooos/db, @gooos/auth, @gooos/ui)" },
  { label: "Frontend Stack", value: "Next.js 15 App Router, TypeScript 5.9, Tailwind CSS 4, shadcn/ui" },
  { label: "Database & ORM", value: "PostgreSQL + Drizzle ORM (18 tabel relasional komprehensif)" },
  { label: "Autentikasi & Multi-Tenancy", value: "Better Auth dengan isolasi multi-workspace (GOOCANAN 3D, KSM, Personal)" },
  { label: "3D Graphics Engine", value: "Three.js WebGL, three-bvh-csg (Boolean Mesh Subtraction/Addition), STLExporter" },
  { label: "Hardware & Telemetri", value: "Creality Hi, Bambu Lab X1C/P1S, Moonraker WebSockets & REST APIs" }
];

export const FAQS = [
  {
    q: "Format file 3D apa saja yang didukung untuk pencetakan?",
    a: "Kami menerima format standar industri seperti STL, STEP/STP, OBJ, 3MF, dan IGES. Format STEP sangat disarankan untuk part fungsional karena menjaga integritas geometri kurva."
  },
  {
    q: "Berapa lama proses pengerjaan jasa 3D printing di Goocanan?",
    a: "Dengan manajemen otomatisasi 3DFlow dan smart batching GOO-Studio, pesanan prototipe satuan seringkali selesai dalam 1x24 jam (Same-Day / Next-Day). Untuk kuantitas banyak atau SLA Resin, rata-rata 2–4 hari kerja."
  },
  {
    q: "Bagaimana jika saya belum punya desain file 3D, hanya punya sketsa atau barang fisik?",
    a: "Goocanan menyediakan layanan Reverse Engineering & 3D CAD Modeling! Kami juga memiliki GooPrint WebCAD untuk pembuatan model parametrik kustom."
  },
  {
    q: "Apakah ada minimal pemesanan (Minimum Order Quantity)?",
    a: "Tidak ada! Kami melayani mulai dari 1 buah part (prototipe satuan) hingga ratusan part dengan batch manufacturing hemat biaya."
  },
  {
    q: "Apa itu GooOS dan apa hubungannya dengan Goocanan?",
    a: "GooOS adalah ekosistem sistem operasi internal buatan Goocanan yang mencakup 3DFlow (telemetri farm & spul filamen), GOO-Studio (manajemen proyek & smart batching pelat cetak), serta GooPrint (WebCAD parametrik). Seluruh pesanan klien di Goocanan diproses melalui GooOS untuk memastikan presisi, efisiensi bahan, dan transparansi."
  }
];

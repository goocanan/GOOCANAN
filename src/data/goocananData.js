// Data terpusat GOOCANAN & GooOS Ecosystem
// Disesuaikan secara presisi dengan bisnis riil GOOCANAN (Armada: Creality Hi & Bambu Lab A1 Mini)

export const COMPANY_INFO = {
  name: "GOOCANAN",
  brandName: "Goocanan 3D",
  tagline: "Precision in Every Layer • 3D Printing Service & Hardware Products",
  headline: "Jasa 3D Printing Presisi, Produk Inovatif & Otomasi GooOS",
  subheadline: "Layanan cetak 3D kustom (FDM), pembuatan produk jadi kreatif (seperti Mini Dispo Lens), dan produksi batch UMKM berakurasi tinggi dengan armada Creality Hi & Bambu Lab A1 Mini. Minimal order hanya Rp 25.000!",
  whatsappNumber: "6285121266636",
  displayPhone: "+62 851-2126-6636",
  email: "goocanan@gmail.com",
  address: "Jakarta Barat, DKI Jakarta, Indonesia",
  workingHours: "Senin - Sabtu: 08.00 - 21.00 WIB (Online Farm 24/7)",
  leadTime: "2 - 3 Hari Kerja untuk Part Standar",
  minOrder: 25000,
  minOrderDisplay: "Rp 25.000",
  calculatorRates: {
    baseGramRate: 400, // Rp 400 / gram
    hourlyMachineRate: 3000, // Rp 3.000 / jam
    minOrderValue: 25000 // Rp 25.000 minimal
  },
  socials: {
    instagram: "https://instagram.com/goocanan",
    tiktok: "https://tiktok.com/@goocanan",
    shopee: "https://id.shp.ee/pe9d6JFK",
    tokopedia: "https://tk.tokopedia.com/ZSgfnfppD/"
  }
};

export const CORE_SERVICES = [
  {
    icon: "Layers",
    title: "Jasa Cetak Kustom (Print on Demand)",
    tag: "File STL / STEP",
    desc: "Cetak 3D presisi tinggi dari file desain Anda sendiri untuk prototipe mekanik, tugas akhir teknik, part pengganti, atau casing custom. Didukung armada Creality Hi & Bambu Lab A1 Mini."
  },
  {
    icon: "Sparkles",
    title: "Katalog Produk Jadi Siap Pakai",
    tag: "Langsung Order",
    desc: "Koleksi produk kreatif inovatif buatan Goocanan: dari produk unggulan Mini Dispo Lens, Desk Organizer, Wall Arts & LED Sign, Classic Mac Watch Dock, hingga Fidget Keychain."
  },
  {
    icon: "Box",
    title: "Produksi Batch Skala UMKM / Bisnis",
    tag: "Puluhan – Ratusan Part",
    desc: "Layanan manufaktur batch kecil hingga menengah dengan smart batching nesting pelat cetak untuk menghemat waktu dan menekan biaya produksi secara signifikan."
  }
];

export const FEATURED_PRODUCT = {
  id: "mini-dispo-lens",
  title: "Mini Dispo Lens — Lensa Kamera Retro Mirrorless",
  tag: "Produk Unggulan Goocanan",
  shortDesc: "Lensa kamera mirrorless inovatif berbasis bodi 3D print berpresisi tinggi dengan optik lensa kamera film disposable asli.",
  highlight: "Menghasilkan foto bergaya retro, vintage, hangat, dan berkarakter khas film analog secara organik — tanpa perlu filter atau editing digital tambahan!",
  mounts: ["Sony E-Mount", "Fujifilm X-Mount", "Canon EOS R / M", "Micro Four Thirds (M4/3)", "Nikon Z"],
  specs: [
    { label: "Bahan Bodi", value: "PLA+ Matte Premium / PETG Black" },
    { label: "Optik", value: "Original Disposable Film Camera Lens" },
    { label: "Focal Length", value: "Fixed Focus & Street Photography Ready" },
    { label: "Karakter Foto", value: "Vintage, Dreamy Halation, Retro Film Vibe" }
  ],
  shopeeUrl: "https://id.shp.ee/pe9d6JFK",
  tokopediaUrl: "https://tk.tokopedia.com/ZSgfnfppD/",
  whatsappText: "Halo Goocanan, saya tertarik memesan Mini Dispo Lens untuk kamera saya."
};

export const VALUE_PROPOSITIONS = [
  {
    icon: "Zap",
    title: "Minimal Order Hanya Rp 25.000",
    desc: "Tidak ada syarat jumlah minimum part! Kami melayani cetak satuan mulai dari Rp 25.000 untuk membantu pelajar, maker, hingga prototipe awal UMKM."
  },
  {
    icon: "Crosshair",
    title: "Armada Cepat Creality Hi & Bambu Lab A1 Mini",
    desc: "Kombinasi printer modern berkecepatan tinggi dengan toleransi dimensi presisi untuk hasil permukaan rapi dan snap-fit akurat."
  },
  {
    icon: "Layers",
    title: "Bahan Material Siap Cetak (Ready Stock)",
    desc: "Pilihan filamen teruji: PLA/PLA+ aneka warna, PETG tahan benturan & panas, hingga TPU 95A karet elastis fleksibel."
  },
  {
    icon: "Clock",
    title: "Pengerjaan Cepat 2–3 Hari Kerja",
    desc: "Lead time standar 2-3 hari kerja untuk part normal, serta opsi prioritas express bagi kebutuhan deadline mendesak."
  },
  {
    icon: "Cpu",
    title: "Didukung Ekosistem Cerdas GooOS",
    desc: "Sistem operasi internal (3DFlow & GOO-Studio) memantau telemetri mesin, ketersediaan spul filamen, dan smart batching nesting."
  },
  {
    icon: "ShoppingBag",
    title: "Toko Resmi Shopee & Tokopedia",
    desc: "Bebas pilih metode transaksi: direct order via WhatsApp atau lewat official store kami di Shopee & Tokopedia dengan gratis ongkir."
  }
];

export const PRINT_MATERIALS = [
  {
    id: "pla-plus",
    name: "PLA / PLA+ High Grade",
    type: "FDM",
    pricePerGram: 400, // Rp 400 / gram real rate
    tags: ["Paling Populer", "Akurasi Tinggi", "Aneka Warna"],
    features: "Permukaan sangat rapi, dimensional presisi, mudah difinishing, ramah lingkungan. Sangat ideal untuk visual mockup, display, miniatur, dan casing.",
    specs: {
      strength: "7.8/10",
      tempResistance: "60°C",
      finish: "Matte / Satin Halus",
      colors: "Hitam, Putih, Abu, Merah, Biru, Hijau, dll."
    },
    useCases: ["Mini Dispo Lens", "Desktop Organizer", "Display & Dekorasi", "Cosplay & Miniatur"]
  },
  {
    id: "petg",
    name: "PETG Industrial",
    type: "FDM",
    pricePerGram: 500, // Rp 500 / gram real rate
    tags: ["Kuat", "Tahan Cuaca", "Tahan Panas 80°C"],
    features: "Kekuatan impak tinggi, tidak mudah patah, tahan air & bahan kimia ringan. Sangat cocok untuk kebutuhan part fungsional dan mekanikal.",
    specs: {
      strength: "8.9/10",
      tempResistance: "80°C",
      finish: "Semi-Glossy Kokoh",
      colors: "Hitam Industri, Putih, Abu, Transparan"
    },
    useCases: ["Bracket Elektronik", "Komponen Outdoor", "Holder Alat & Mesin", "Mounting Sensor"]
  },
  {
    id: "tpu-flex",
    name: "TPU 95A / Flexible",
    type: "FDM",
    pricePerGram: 700, // Rp 700 / gram real rate
    tags: ["Karet Lentur", "Tahan Benturan", "Anti Robek"],
    features: "Bahan karet termoplastik elastis, meredam getaran dengan baik, tahan gesekan, serta tidak getas saat terbentur.",
    specs: {
      strength: "8.5/10 (Elastisitas)",
      tempResistance: "70°C",
      finish: "Rubberized Grip",
      colors: "Hitam, Merah, Semi-Translucent"
    },
    useCases: ["Gasket & Seal", "Damper Getaran Drone", "Bumper Pelindung", "Footing Anti Slip"]
  }
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Mini Dispo Lens — Retro Mirrorless Camera Lens",
    category: "Produk Unggulan",
    material: "PLA+ Matte Black & Original Disposable Optical Glass",
    layerHeight: "0.12mm Presisi",
    printTime: "2.5 Jam",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    desc: "Produk inovasi Goocanan: Bodi lensa kamera mirrorless 3D print dengan optik kamera film disposable asli untuk hasil foto vintage analog tanpa filter digital.",
    isHighlight: true
  },
  {
    id: 2,
    title: "Apple Watch Charging Dock — Classic Mac Retro",
    category: "Wall Arts & Dekorasi Meja",
    material: "PLA+ Retro Beige / White",
    layerHeight: "0.16mm",
    printTime: "4 Jam",
    image: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=800&q=80",
    desc: "Dudukan charger Apple Watch berbentuk komputer Mac vintage klasik, pas untuk meja kerja estetik dengan slot kabel charger rapi."
  },
  {
    id: 3,
    title: "The Poly Wallet — Slim Pop-Up Cascade Cardholder",
    category: "Tools & Organizer",
    material: "PETG High Strength Matte",
    layerHeight: "0.16mm",
    printTime: "3 Jam",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    desc: "Dompet kartu mekanik ramping dengan tuas pop-up otomatis, kuat dan tahan tekukan saku harian."
  },
  {
    id: 4,
    title: "Desktop LED Neon Sign & Ambient Lamp",
    category: "Wall Arts & Dekorasi Meja",
    material: "PLA+ Dual Tone (Black Base & Translucent White)",
    layerHeight: "0.20mm",
    printTime: "5 Jam",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
    desc: "Lampu meja estetik dengan diffuser cetak 3D untuk penyebaran cahaya LED merata, ideal untuk setup gaming atau kamar."
  },
  {
    id: 5,
    title: "Under-Desk Slide Drawer Organizer",
    category: "Tools & Organizer",
    material: "PLA+ / PETG Kokoh",
    layerHeight: "0.20mm",
    printTime: "6 Jam",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    desc: "Laci tempel bawah meja praktis untuk menyimpan alat tulis, flashdisk, dan kabel tanpa memakan ruang atas meja."
  },
  {
    id: 6,
    title: "Functional Drone Arm & Electronics Enclosure",
    category: "Part Kustom Industri",
    material: "PETG / TPU 95A Flexible",
    layerHeight: "0.16mm",
    printTime: "4.5 Jam",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80",
    desc: "Komponen mekanikal custom tahan getaran dan benturan untuk proyek robotika dan aerodinamika."
  },
  {
    id: 7,
    title: "Kawaii Skeleton Bear & Tiny Axolotl Articulated",
    category: "Keychain & Fidget",
    material: "PLA+ Silk Pastel",
    layerHeight: "0.12mm",
    printTime: "1.5 Jam",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
    desc: "Gantungan kunci dan mainan fidget dengan sambungan fleksibel artikulasi langsung tercetak tanpa perlu perakitan manual."
  }
];

// Data Aplikasi Resmi GooOS dari gooos/apps/studio/src/config/apps.config.ts
export const GOO_APPS = [
  {
    id: "3dflow",
    name: "3DFlow",
    tagline: "Additive Manufacturing & Farm Operations",
    description:
      "End-to-end telemetry sistem cetak 3D armada Creality Hi & Bambu Lab A1 Mini, monitoring spul filamen real-time, order tracking pesanan cetak, katalog produk, dan buku kas transaksi.",
    version: "v2.4 Pro",
    status: "active",
    category: "Manufacturing",
    icon: "Zap",
    color: "#f43f5e",
    accentColor: "rose",
    stats: [
      { label: "Spool Filamen", value: "128 Items" },
      { label: "Armada Printer", value: "Creality & Bambu" },
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
        desc: "474 catatan keuangan komprehensif dari marketplace (Shopee, Tokopedia) hingga pesanan langsung WhatsApp.",
        badge: "Ledger"
      },
      {
        name: "Monitoring Armada Printer",
        desc: "Pemantauan status Creality Hi & Bambu Lab A1 Mini, temperatur nozzle, bed, dan progres job.",
        badge: "Multi-Fleet"
      },
      {
        name: "Pengaturan & Biaya Operasional",
        desc: "Konfigurasi tarif listrik per kWh, wattase mesin, upah operator, dan bobot tare spul.",
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
        desc: "Simulasi akurat biaya bahan (Rp 400/g), listrik & mesin (Rp 3.000/j), serta rekomendasi harga jual optimal.",
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
      "Integrasi sinkronisasi pesanan dan stok otomatis ke Shopee dan Tokopedia resmi Goocanan dengan auto-reserve inventory.",
    version: "v0.9",
    status: "coming_soon",
    category: "E-Commerce",
    icon: "ShoppingBag",
    color: "#f59e0b",
    accentColor: "amber",
    stats: [
      { label: "Kanal", value: "Shopee & Tokopedia" },
      { label: "Status", value: "Live Store" }
    ],
    features: [
      {
        name: "Sinkronisasi Etalase & Stok",
        desc: "Menghubungkan penjualan di marketplace Shopee & Tokopedia dengan ketersediaan fisik filamen di workshop.",
        badge: "Integrated"
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
  { label: "Hardware & Telemetri", value: "Creality Hi, Bambu Lab A1 Mini, Moonraker WebSockets & REST APIs" }
];

export const FAQS = [
  {
    q: "Berapa minimal order (MOQ) untuk jasa cetak di Goocanan?",
    a: "Minimal pemesanan sangat terjangkau, yaitu hanya Rp 25.000! Tidak ada batasan minimal jumlah part — Anda bebas memesan 1 pcs prototipe satuan atau ratusan part batch."
  },
  {
    q: "Berapa lama estimasi waktu pengerjaan (lead time)?",
    a: "Untuk part standar normal, estimasi pengerjaan adalah 2 hingga 3 hari kerja. Tersedia juga opsi layanan express bagi kebutuhan proyek yang mendesak."
  },
  {
    q: "Bagaimana cara memesan atau berkonsultasi?",
    a: "Sangat mudah! Anda bisa mengirimkan file 3D (STL/STEP) langsung via WhatsApp ke +62 851-2126-6636 untuk mendapatkan estimasi instan, atau memesan produk jadi kami melalui Shopee dan Tokopedia."
  },
  {
    q: "Format file 3D apa saja yang didukung?",
    a: "Kami menerima format standar industri seperti STL, STEP/STP, OBJ, dan 3MF. Format STEP sangat disarankan untuk komponen mekanikal presisi."
  },
  {
    q: "Bahan filamen apa saja yang ready stock di Goocanan?",
    a: "Kami menyediakan PLA/PLA+ (aneka warna untuk display & mockup rapi), PETG (tahan panas 80°C & benturan mekanikal), serta TPU 95A (karet elastis untuk casing & damper peredam)."
  },
  {
    q: "Apa itu produk Mini Dispo Lens yang diproduksi Goocanan?",
    a: "Mini Dispo Lens adalah produk lensa kamera mirrorless inovatif buatan Goocanan dengan bodi cetak 3D presisi tinggi yang menggabungkan optik lensa kamera film disposable asli. Lensa ini menghasilkan karakter foto retro/vintage film analog secara alami tanpa perlu filter digital tambahan."
  },
  {
    q: "Apa itu GooOS dan apa perannya bagi klien Goocanan?",
    a: "GooOS adalah ekosistem sistem operasi internal buatan Goocanan (3DFlow & GOO-Studio) yang mengotomasi armada printer kami di Jakarta Barat. Melalui GooOS, setiap pesanan dijamin kepastian stok filamennya, tertata efisien dalam pelat cetak (batching), dan diawasi telemetri live untuk hasil cetak yang konsisten dan akurat."
  }
];

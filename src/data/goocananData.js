export const COMPANY_INFO = {
  name: "GOOCANAN",
  tagline: "Additive Manufacturing Precision & Intelligent GooOS Ecosystem",
  headline: "Wujudkan Inovasi Nyata Melalui Presisi 3D Printing & Kecerdasan GooOS",
  subheadline: "Layanan manufaktur aditif profesional dengan akurasi hingga 0.05mm, pilihan material industri lengkap, serta dipadukan dengan ekosistem manajemen smart farm GooOS tercanggih.",
  whatsappNumber: "6281234567890", // Ganti dengan nomor WhatsApp aktif
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
    desc: "Didukung armada print farm multi-printer berkecepatan tinggi hingga 500mm/s dengan auto-dispatch untuk kebutuhan prototipe mendesak."
  },
  {
    icon: "Crosshair",
    title: "Akurasi Sub-Milimeter (0.05mm)",
    desc: "Toleransi dimensi ketat untuk komponen mekanik, perakitan presisi (snap-fit), dan replika berdetail rumit menggunakan FDM & SLA 8K."
  },
  {
    icon: "Layers",
    title: "15+ Material Berkualitas Tinggi",
    desc: "Mulai dari PLA+ ramah lingkungan, PETG tahan kimia, ABS/ASA tahan panas, Resin presisi tinggi, hingga Carbon Fiber komposit."
  },
  {
    icon: "ShieldCheck",
    title: "Jaminan Kualitas & Inspeksi QC",
    desc: "Setiap part melalui pengecekan dimensional, deburring, dan pengujian toleransi sebelum dikirimkan ke tangan Anda."
  },
  {
    icon: "Cpu",
    title: "Didukung Sistem Cerdas GooOS",
    desc: "Pantau antrean, telemetri, dan progres pengerjaan cetak Anda secara transparan melalui sistem operasi internal cerdas kami."
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
    desc: "Struktur frame drone kustom dengan rasio kekuatan-ke-bobot tinggi, tahan getaran motor RPM tinggi dan benturan."
  },
  {
    id: 2,
    title: "Scale Model Arsitektur Hunian Futuristik",
    category: "Arsitektur",
    material: "PLA+ High Grade & Clear Acrylic Hybrid",
    layerHeight: "0.10mm",
    printTime: "28 Jam",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    desc: "Maket arsitektur presisi skala 1:100 dengan detail fasad kisi-kisi mikro dan interior transparan untuk presentasi klien pengembang."
  },
  {
    id: 3,
    title: "Karakter Figur Koleksi Detail 8K",
    category: "Miniatur & Seni",
    material: "SLA Tough Resin 8K",
    layerHeight: "0.03mm",
    printTime: "8.5 Jam",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
    desc: "Hasil cetak SLA beresolusi sangat tajam dengan tekstur kain, pori-pori mikro, dan siap menerima proses airbrush painting."
  },
  {
    id: 4,
    title: "Air Intake Adapter Mesin Balap",
    category: "Industri & Robotika",
    material: "ABS Heat-Resistant (Vapor Polished)",
    layerHeight: "0.16mm",
    printTime: "11 Jam",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    desc: "Saluran udara performa tinggi yang dihaluskan dengan uap aseton untuk aliran udara laminar bebas hambatan pada ruang mesin."
  },
  {
    id: 5,
    title: "Prototipe Ergonomic Split Keyboard Case",
    category: "Rapid Prototyping",
    material: "PETG Matte Black",
    layerHeight: "0.15mm",
    printTime: "18 Jam",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    desc: "Uji ergonomi bentuk tangan dan penempatan hotswap PCB sebelum dilakukan injeksi moulding massal."
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

export const GOOOS_FEATURES = [
  {
    icon: "Network",
    title: "Multi-Fleet Smart Balancing",
    tagline: "Manajemen Farm Otomatis",
    desc: "GooOS secara otomatis mendeteksi ketersediaan nozzle, jenis material yang terpasang, dan suhu chamber untuk membagi antrean cetak secara cerdas ke printer yang paling optimal."
  },
  {
    icon: "Eye",
    title: "AI Real-Time Vision & Spaghetti Detection",
    tagline: "Pencegahan Kegagalan Seketika",
    desc: "Kamera bertenaga AI GooOS memantau layer cetakan setiap detik. Jika terjadi kegagalan adhesi (spaghetti print) atau pergeseran layer, sistem otomatis mem-pause cetakan dan mengirim notifikasi darurat."
  },
  {
    icon: "CloudLightning",
    title: "Instant Cloud Slicing Engine",
    tagline: "Satu Klik dari STL ke G-Code",
    desc: "Tidak perlu membuka software slicer berat di laptop. Cukup seret file 3D (STL, STEP, OBJ), GooOS menerapkan profil slicing terbaik Goocanan dan menghitung estimasi waktu serta filamen dalam 5 detik."
  },
  {
    icon: "Gauge",
    title: "Live Telemetri & Sensor Komprehensif",
    tagline: "Kontrol Penuh 24/7",
    desc: "Pantau grafik suhu nozzle, bed, kelembaban filamen di dry-box, voltase PSU, hingga getaran resonansi accelerometer input-shaping secara real-time dari web atau smartphone."
  },
  {
    icon: "Boxes",
    title: "Smart Spool & Material Telemetry",
    tagline: "Manajemen Inventaris Akurat",
    desc: "Pelacakan RFID dan berat sisa filamen otomatis. GooOS memperingatkan jika filamen yang tersisa tidak mencukupi untuk menyelesaikan job sebelum printer mulai bekerja."
  },
  {
    icon: "Smartphone",
    title: "Client Live Stream & Tracking Portal",
    tagline: "Transparansi Penuh untuk Klien",
    desc: "Klien Goocanan mendapatkan tautan privat untuk melihat tayangan langsung kamera printer serta persentase kemajuan pengerjaan proyek pesanan mereka secara transparan."
  }
];

export const GOOOS_TECH_SPECS = [
  { label: "Protokol Kompatibel", value: "Klipper, Moonraker, Marlin 2.0+, OctoPrint, Bambu Bus" },
  { label: "Hardware Support", value: "Raspberry Pi 3/4/5, Orange Pi, Rockchip, x86 Server, ESP32 Hub" },
  { label: "AI Latency", value: "< 120ms In-Chamber Vision Inference" },
  { label: "Keamanan Data", value: "End-to-End TLS Encryption, Private On-Premise Cloud & Isolated Tenant" },
  { label: "API & Integrasi", value: "REST API, WebSockets, Webhooks Telegram & WhatsApp Bot" }
];

export const FAQS = [
  {
    q: "Format file 3D apa saja yang didukung untuk pencetakan?",
    a: "Kami menerima format standar industri seperti STL, STEP/STP, OBJ, 3MF, dan IGES. Format STEP sangat disarankan untuk part fungsional karena menjaga integritas geometri kurva."
  },
  {
    q: "Berapa lama proses pengerjaan jasa 3D printing di Goocanan?",
    a: "Untuk prototipe cepat berskala kecil hingga sedang, pesanan seringkali dapat diselesaikan dan dikirim dalam 1x24 jam (Same-Day / Next-Day). Untuk kuantitas banyak (batch production) atau SLA Resin detail tinggi, biasanya memakan waktu 2–4 hari kerja."
  },
  {
    q: "Bagaimana jika saya belum punya desain file 3D, hanya punya sketsa / contoh barang?",
    a: "Tenang, Goocanan menyediakan layanan Reverse Engineering & 3D CAD Modeling! Cukup kirimkan foto, dimensi ukuran, atau kirimkan benda fisik yang ingin diduplikasi/dimodifikasi ke workshop kami."
  },
  {
    q: "Apakah ada minimal pemesanan (Minimum Order Quantity)?",
    a: "Tidak ada! Kami melayani mulai dari 1 buah part (prototipe satuan) hingga ratusan part untuk kebutuhan batch manufacturing skala UMKM atau industri."
  },
  {
    q: "Apa itu GooOS dan apakah bisa digunakan di luar Goocanan?",
    a: "GooOS awalnya merupakan sistem operasi internal yang kami kembangkan untuk mengotomasi print farm Goocanan. Saat ini kami membuka program Closed Beta & integrasi khusus bagi laboratorium kampus, maker space, dan industrial print farm yang ingin meningkatkan efisiensi armada printer mereka."
  }
];

# GOOCANAN — Layanan 3D Printing Presisi & Platform GooOS

Website dan Portal Informasi resmi untuk **GOOCANAN** (bisnis manufaktur aditif & jasa cetak 3D) dan sistem operasi internal **GooOS** (smart farm management & AI vision), dibangun berdasarkan PRD (Product Requirement Document).

---

## 🚀 Fitur Utama Website

1. **Halaman Utama (Landing Page 3D Printing)**:
   - **Hero Section**: Tajuk utama yang kuat, badge ekosistem GooOS, tombol CTA utama (WhatsApp & Estimator).
   - **Value Proposition (Keunggulan)**: 6 pilar keunggulan (Pengerjaan kilat, akurasi 0.05mm, 15+ material, jaminan QC, didukung GooOS, konsultasi gratis).
   - **Katalog Bahan & Spesifikasi**: PLA+, PETG, ABS/ASA, Resin 8K, TPU Flexible, dan Carbon Fiber (PA-CF) lengkap dengan spesifikasi struktural, suhu, dan kegunaan.
   - **Kalkulator Biaya 3D Print Interaktif**: Simulasi instan berdasarkan material, berat part (gram), infill %, resolusi layer, serta finishing. Dilengkapi tombol **"Kirim ke WhatsApp"** yang otomatis mengisi template pesan WhatsApp sesuai spesifikasi yang dipilih.
   - **Galeri Portofolio Interaktif**: Filter kategori (*Industri & Robotika, Arsitektur, Miniatur & Seni, Rapid Prototyping*) serta modal detail teknis.
   - **GooOS Teaser Banner**: Mengarahkan pengunjung mengenal sistem automasi farm.
   - **FAQ Interaktif**: Jawaban seputar format file CAD, toleransi, reverse engineering, dan minimal order.

2. **Halaman Pengenalan Aplikasi (GooOS Features & Functions)**:
   - **Interactive Live Dashboard Mockup**: Simulasi interaktif antarmuka GooOS dengan tab *Farm Fleet, AI Vision Cam (Spaghetti Detection), Cloud Slicer, dan Telemetri Sensor*.
   - **Visi & Overview GooOS**: Transformasi print farm konvensional menjadi pabrik mandiri otonom.
   - **Fitur Utama Terstruktur**: Smart fleet balancing, AI vision defect prevention, instant cloud slicing, telemetry 24/7, material RFID spool tracking, dan client live stream.
   - **Spesifikasi & Kompatibilitas**: Mendukung Klipper, Moonraker, Marlin, Raspberry Pi, ESP32, TLS encryption.
   - **Manfaat Penggunaan**: Untuk klien jasa, enterprise farm, hingga laboratorium kampus.

3. **Halaman Kontak & Lokasi (Contact Us)**:
   - **Formulir Kontak Interaktif**: Validasi input nama, email, WhatsApp, kategori layanan, file referensi, dan pesan. Mendukung pengiriman langsung ke WhatsApp hotline atau simpan konfirmasi.
   - **Informasi Kontak Langsung**: WhatsApp Hotline, Email resmi, Jam operasional, alamat studio.
   - **Peta Interaktif Workshop**: Visual lokasi dan ajakan kunjungan studio dengan appointment.
   - **Tautan Media Sosial**: Instagram, LinkedIn, GitHub, YouTube.

4. **Kebutuhan Non-Fungsional**:
   - **Desain Responsif**: Optimal di smartphone, tablet, laptop, dan desktop monitor.
   - **Dark Mode & Light Mode**: Default Sleek Dark Futuristic Tech (Deep Slate + Cyan & Emerald Glow) dengan tombol toggle instan.
   - **SEO Friendly & Fast Loading**: Bundle teroptimasi oleh Vite & Tailwind CSS.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vite.dev/)
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + SVG Custom Brand Icons
- **Fonts**: Google Fonts (*Plus Jakarta Sans* & *JetBrains Mono*)

---

## 💻 Menjalankan di Lokal (Local Development)

### 1. Prasyarat
Pastikan komputer telah terinstal **Node.js** (v18+ atau v20+).

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Jalankan Server Development
```bash
npm run dev
```
Buka browser di `http://localhost:5173` untuk melihat tampilan website.

### 4. Build untuk Produksi
```bash
npm run build
```
Hasil build siap produksi akan berada di direktori `dist/`.

---

## ☁️ Panduan Deployment ke Render (Cloud Hosting)

Website ini dirancang sebagai **Static Site** berperforma tinggi dan sangat mudah di-deploy di **Render**:

### Opsi A: Deploy Manual via Dashboard Render
1. Masuk ke [Render Dashboard](https://dashboard.render.com/).
2. Klik tombol **New +** lalu pilih **Static Site**.
3. Hubungkan repositori GitHub/GitLab Anda yang berisi proyek ini.
4. Masukkan konfigurasi berikut:
   - **Name**: `goocanan-platform` (atau nama pilihan Anda)
   - **Branch**: `main`
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
5. Pada tab **Redirects/Rewrites**, tambahkan rule untuk Single Page Application:
   - **Source**: `/*`
   - **Destination**: `/index.html`
   - **Action**: `Rewrite`
   *(Catatan: file `public/_redirects` juga telah disediakan otomatis)*.
6. Klik **Create Static Site**. Website akan otomatis ter-build dan aktif dengan URL gratis `https://<nama-proyek>.onrender.com` serta SSL HTTPS otomatis.

### Opsi B: Deploy via Render Blueprint (`render.yaml`)
Proyek ini sudah dilengkapi dengan file `render.yaml`. Anda cukup memilih **New Blueprint Instance** di dashboard Render dan mengarahkan ke repositori ini.

---

## ⚙️ Cara Mengubah Kontak & Informasi Perusahaan

Semua konfigurasi kontak, material, portofolio, dan nomor WhatsApp tersentralisasi di satu file agar mudah diperbarui:

Buka file:
```
src/data/goocananData.js
```

- Ubah `whatsappNumber` dengan nomor WhatsApp bisnis Anda (format: `628xxxxxxxxxx` tanpa tanda `+`).
- Ubah `email`, `address`, dan `workingHours` sesuai kebutuhan.
- Tambahkan atau edit material di array `PRINT_MATERIALS`.
- Tambahkan foto portofolio baru di array `PORTFOLIO_ITEMS`.

---

## 📄 Lisensi
Hak Cipta © 2026 GOOCANAN Technology & GooOS. Seluruh hak cipta dilindungi undang-undang.

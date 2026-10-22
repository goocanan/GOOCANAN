import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  FileText, 
  ShieldCheck, 
  ArrowRight, 
  Upload,
  ShoppingBag
} from 'lucide-react';
import { InstagramIcon, TikTokIcon, ShopeeIcon, TokopediaIcon } from '../components/SocialIcons';
import { COMPANY_INFO } from '../data/goocananData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'custom-print',
    message: '',
    fileInfo: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const categoryLabels = {
      'custom-print': 'Jasa Cetak Kustom (File STL/STEP)',
      'dispo-lens': 'Pemesanan Mini Dispo Lens (Lensa Retro)',
      'batch': 'Produksi Batch / Massal UMKM',
      'ready-products': 'Produk Jadi (Wall Art / Organizer / Fidget)',
      'gooos': 'Informasi & Kemitraan Software GooOS',
      'other': 'Kemitraan / Lainnya'
    };

    const text = `Halo Goocanan! Saya ingin konsultasi cetak / order:
• Nama: ${formData.name || '-'}
• Email: ${formData.email || '-'}
• WhatsApp: ${formData.phone || '-'}
• Kategori: ${categoryLabels[formData.category] || formData.category}
• File / Link: ${formData.fileInfo || 'Akan dikirim via chat'}
• Pesan: ${formData.message || 'Mohon info ketersediaan & biaya.'}

Lokasi workshop: Jakarta Barat. Terima kasih!`;

    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="relative pt-24 pb-20 overflow-hidden">
      
      {/* Glow effect */}
      <div className="absolute top-24 left-1/3 w-[600px] h-[350px] bg-brand-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 text-xs font-mono font-semibold mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Workshop Jakarta Barat &bull; Min. Order Rp 25.000 &bull; Respon Cepat</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Hubungi Goocanan &amp; Konsultasikan Proyek Anda
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Punya file 3D siap cetak, tertarik dengan produk <strong>Mini Dispo Lens</strong>, atau ingin memesan lewat Shopee / Tokopedia? Tim Goocanan siap membantu Anda.
          </p>
        </div>

        {/* Content Grid: Form (Left) & Direct Contact Details (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* =========================================================================
              INTERACTIVE CONTACT FORM (COL 1-7)
          ========================================================================= */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto shadow-glow-emerald">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Data Konsultasi Tersimpan!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                  Terima kasih <strong>{formData.name}</strong>. Anda dapat langsung melanjutkan mengirimkan rincian ini ke WhatsApp resmi kami untuk respon seketika.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="py-3 px-6 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-glow-cyan"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Lanjutkan Kirim Langsung ke WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        category: 'custom-print',
                        message: '',
                        fileInfo: ''
                      });
                    }}
                    className="py-3 px-6 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Formulir Konsultasi &amp; Order
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Minimal pemesanan hanya Rp 25.000 &bull; Pengerjaan 2-3 hari kerja
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    *Wajib Diisi
                  </span>
                </div>

                {/* Nama & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="emailanda@gmail.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500 transition"
                    />
                  </div>
                </div>

                {/* Nomor WhatsApp & Kategori Kebutuhan */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                      Nomor WhatsApp Aktif *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0812xxxxxxxx"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                      Kategori Layanan *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500 transition"
                    >
                      <option value="custom-print">Jasa Cetak Kustom (File STL/STEP)</option>
                      <option value="dispo-lens">Pemesanan Mini Dispo Lens (Lensa Kamera Retro)</option>
                      <option value="batch">Produksi Batch / Massal UMKM (Puluhan Part)</option>
                      <option value="ready-products">Katalog Produk Jadi (Desk Organizer, Wall Art, Dock, Fidget)</option>
                      <option value="gooos">Kemitraan / Adopsi Software GooOS</option>
                      <option value="other">Kerjasama Bisnis / Lainnya</option>
                    </select>
                  </div>
                </div>

                {/* Info File / Tautan Cloud */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                    Informasi / Tautan File 3D (Opsional)
                  </label>
                  <input
                    type="text"
                    name="fileInfo"
                    value={formData.fileInfo}
                    onChange={handleChange}
                    placeholder="Contoh: Tautan Google Drive / nama file STL (Bisa juga dikirim langsung via WhatsApp)"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500 transition"
                  />
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    Format file yang didukung: STL, STEP, OBJ, 3MF.
                  </span>
                </div>

                {/* Pesan */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                    Pesan / Keterangan Kebutuhan *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Jelaskan kebutuhan Anda (pilihan material PLA/PETG/TPU, warna yang diinginkan, jumlah part, atau mount kamera jika pesan Mini Dispo Lens)..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500 transition"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 hover:from-brand-600 hover:to-accent-600 text-white font-bold text-sm transition flex items-center justify-center gap-2 shadow-glow-cyan"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Kirim Langsung via WhatsApp (Direkomendasikan)</span>
                  </button>

                  <button
                    type="submit"
                    className="py-3.5 px-6 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm hover:opacity-90 transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Simpan Form</span>
                  </button>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 pt-2">
                  <ShieldCheck className="w-4 h-4 text-accent-500" />
                  <span>Kerahasiaan Desain Dijamin. File 3D Anda aman dan tidak disebarluaskan.</span>
                </div>
              </form>
            )}

          </div>

          {/* =========================================================================
              DIRECT CONTACT & WORKSHOP DETAILS (COL 8-12)
          ========================================================================= */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Cards */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-5">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Kontak Langsung &amp; Saluran Resmi
              </h3>

              <div className="space-y-3.5 text-sm">
                
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Halo Goocanan, saya ingin konsultasi mengenai 3D printing.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-500/20 transition group"
                >
                  <Phone className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-xs font-mono font-bold block text-emerald-700 dark:text-emerald-400">
                      WhatsApp Hotline (Respon Cepat)
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white text-base">
                      {COMPANY_INFO.displayPhone}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">
                      Fast response untuk estimasi file STL &amp; konsultasi
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 transition group"
                >
                  <Mail className="w-5 h-5 text-brand-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-xs font-mono font-bold block text-slate-500 dark:text-slate-400">
                      Email Resmi
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      {COMPANY_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <MapPin className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-mono font-bold block text-slate-500 dark:text-slate-400">
                      Basis Workshop / Studio
                    </span>
                    <span className="text-slate-800 dark:text-slate-200 leading-snug block font-semibold">
                      {COMPANY_INFO.address}
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <Clock className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-mono font-bold block text-slate-500 dark:text-slate-400">
                      Jam Kerja &amp; Konsultasi
                    </span>
                    <span className="text-slate-800 dark:text-slate-200 block font-mono text-xs">
                      {COMPANY_INFO.workingHours}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Official Marketplace Stores Card */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 text-white space-y-4 shadow-md">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-400 block">
                Official Marketplace Stores
              </span>

              <p className="text-xs text-slate-300 leading-relaxed">
                Anda juga dapat membeli produk jadi kami (seperti <strong>Mini Dispo Lens</strong>, organizer, dan dock) melalui toko resmi kami di marketplace:
              </p>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={COMPANY_INFO.socials.shopee}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-orange-500/10 border border-orange-500/30 hover:bg-orange-500 hover:text-white transition flex flex-col items-center justify-center text-center gap-1 group"
                >
                  <ShopeeIcon className="w-5 h-5 text-orange-400 group-hover:text-white transition-colors" />
                  <span className="text-xs font-bold font-mono">Shopee Official</span>
                  <span className="text-[10px] text-slate-400 group-hover:text-white/80">Gratis Ongkir</span>
                </a>

                <a
                  href={COMPANY_INFO.socials.tokopedia}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-600 hover:text-white transition flex flex-col items-center justify-center text-center gap-1 group"
                >
                  <TokopediaIcon className="w-5 h-5 text-emerald-400 group-hover:text-white transition-colors" />
                  <span className="text-xs font-bold font-mono">Tokopedia</span>
                  <span className="text-[10px] text-slate-400 group-hover:text-white/80">Cicilan &amp; Promo</span>
                </a>
              </div>
            </div>

            {/* Social Media Channels */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  Media Sosial Kami
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Update karya &amp; hasil cetak terbaru
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={COMPANY_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-500 flex items-center justify-center hover:scale-110 transition"
                  aria-label="Instagram @goocanan"
                  title="Instagram @goocanan"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.socials.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-500 flex items-center justify-center hover:scale-110 transition"
                  aria-label="TikTok @goocanan"
                  title="TikTok @goocanan"
                >
                  <TikTokIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

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
  Upload
} from 'lucide-react';
import { InstagramIcon, LinkedinIcon, GithubIcon, YoutubeIcon } from '../components/SocialIcons';
import { COMPANY_INFO } from '../data/goocananData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '3d-print',
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
      '3d-print': 'Jasa Cetak 3D Printing (Prototipe / Satuan)',
      'batch': 'Batch Production (Produksi Massal)',
      'gooos': 'Informasi & Integrasi Sistem GooOS',
      'cad': '3D CAD Modeling & Reverse Engineering',
      'other': 'Kemitraan / Lainnya'
    };

    const text = `Halo Goocanan! Saya ingin mengirim formulir konsultasi:
• Nama: ${formData.name || '-'}
• Email: ${formData.email || '-'}
• WhatsApp: ${formData.phone || '-'}
• Kebutuhan: ${categoryLabels[formData.category] || formData.category}
• File Pendukung: ${formData.fileInfo || 'Akan dikirimkan'}
• Pesan: ${formData.message || 'Mohon informasi lebih lanjut.'}`;

    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="relative pt-24 pb-20 overflow-hidden">
      
      {/* Glow effect */}
      <div className="absolute top-24 left-1/3 w-[600px] h-[350px] bg-brand-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 text-xs font-mono font-semibold mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Respon Cepat &bull; Tim Engineer Siap Membantu</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Hubungi Kami &amp; Konsultasikan Proyek Anda
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Apakah Anda memiliki file 3D siap cetak, membutuhkan bantuan perancangan desain CAD, atau tertarik mengadopsi platform GooOS? Hubungi kami sekarang.
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
                  Pesan Anda Berhasil Disimpan!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                  Terima kasih <strong>{formData.name}</strong>. Tim Goocanan akan segera meninjau detail kebutuhan Anda dan menghubungi Anda via WhatsApp atau Email.
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
                        category: '3d-print',
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
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Formulir Konsultasi Proyek
                  </h3>
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
                      placeholder="Contoh: Rian Pratama"
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
                      placeholder="nama@perusahaan.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500 transition"
                    />
                  </div>
                </div>

                {/* Nomor WhatsApp & Kategori Kebutuhan */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                      Nomor WhatsApp / HP *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="081234567890"
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
                      <option value="3d-print">Jasa Cetak 3D Printing (Prototipe / Satuan)</option>
                      <option value="batch">Batch Production (Kuantitas Banyak)</option>
                      <option value="gooos">Pengenalan &amp; Integrasi GooOS Farm</option>
                      <option value="cad">3D CAD Modeling &amp; Reverse Engineering</option>
                      <option value="other">Kemitraan &amp; Kerjasama Lainnya</option>
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
                    placeholder="Contoh: Tautan Google Drive / nama file STL (bisa dikirim langsung via WA)"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500 transition"
                  />
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    File format yang didukung: STL, STEP, OBJ, 3MF, ZIP.
                  </span>
                </div>

                {/* Pesan */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                    Detail Pesan / Kebutuhan Spesifik *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ceritakan tentang dimensi part, jumlah cetakan, preferensi material (PLA, PETG, ABS, Resin, Carbon Fiber), atau deadline pengerjaan..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500 transition"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 px-6 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm hover:opacity-90 transition flex items-center justify-center gap-2 shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Formulir Konsultasi</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 hover:from-brand-600 hover:to-accent-600 text-white font-bold text-sm transition flex items-center justify-center gap-2 shadow-glow-cyan"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Kirim Langsung via WhatsApp</span>
                  </button>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 pt-2">
                  <ShieldCheck className="w-4 h-4 text-accent-500" />
                  <span>Kerahasiaan Desain (NDA) Dijamin. Kami tidak membagikan file 3D Anda ke pihak ketiga.</span>
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

              <div className="space-y-4 text-sm">
                
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Halo Goocanan, saya ingin berdiskusi mengenai proyek.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-500/20 transition group"
                >
                  <Phone className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-xs font-mono font-bold block text-emerald-700 dark:text-emerald-400">
                      WhatsApp Hotline (Respon Cepat)
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      {COMPANY_INFO.displayPhone}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 transition group"
                >
                  <Mail className="w-5 h-5 text-brand-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-xs font-mono font-bold block text-slate-500 dark:text-slate-400">
                      Email Resmi
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      {COMPANY_INFO.email}
                    </span>
                    <span className="text-xs text-slate-400 block">
                      Partnership: {COMPANY_INFO.secondaryEmail}
                    </span>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <MapPin className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-mono font-bold block text-slate-500 dark:text-slate-400">
                      Studio &amp; Workshop Print Farm
                    </span>
                    <span className="text-slate-800 dark:text-slate-200 leading-snug block">
                      {COMPANY_INFO.address}
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <Clock className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-mono font-bold block text-slate-500 dark:text-slate-400">
                      Jam Kerja &amp; Konsultasi Studio
                    </span>
                    <span className="text-slate-800 dark:text-slate-200 block font-mono text-xs">
                      {COMPANY_INFO.workingHours}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Interactive Map Mockup Card */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 text-white space-y-4 shadow-md relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-400">
                  Lokasi Workshop
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">
                  Terbuka untuk Kunjungan
                </span>
              </div>

              {/* Mockup Map Canvas */}
              <div className="h-44 rounded-2xl bg-slate-950 border border-slate-800 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-60"></div>
                {/* Pin indicator */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-brand-500/20 border-2 border-brand-400 flex items-center justify-center animate-bounce">
                    <MapPin className="w-4 h-4 text-brand-400" />
                  </div>
                  <span className="mt-2 text-xs font-bold font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700">
                    Goocanan Studio Hub
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Ingin melihat langsung kualitas sampel material, demonstrasi live GooOS, atau membawa prototipe fisik untuk di-3D scan? Silakan jadwalkan janji temu melalui WhatsApp terlebih dahulu.
              </p>
            </div>

            {/* Social Media Links Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  Ikuti Media Sosial Kami
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Dapatkan update portofolio &amp; rilis GooOS
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={COMPANY_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-500 flex items-center justify-center hover:scale-110 transition"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-500 flex items-center justify-center hover:scale-110 transition"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-500 flex items-center justify-center hover:scale-110 transition"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-500 flex items-center justify-center hover:scale-110 transition"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

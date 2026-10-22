import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { GoocananMark } from '../components/GoocananLogo';

export default function NotFoundPage() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-24 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-slate-900 border border-brand-500/30 flex items-center justify-center mx-auto shadow-glow-cyan p-4">
          <GoocananMark className="w-12 h-12 text-brand-400 animate-pulse" gradient={true} />
        </div>
        <div className="space-y-2">
          <span className="font-mono text-xs text-brand-500 font-bold tracking-widest uppercase">
            Error 404 &bull; Halaman Tidak Ditemukan
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Geometri Jalur Tidak Ditemukan
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Halaman yang Anda tuju mungkin telah dipindahkan atau tautan yang Anda masukkan kurang tepat.
          </p>
        </div>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 py-3 px-6 rounded-2xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-bold text-sm shadow-glow-cyan"
          >
            <Home className="w-4 h-4" />
            <span>Kembali ke Beranda Goocanan</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

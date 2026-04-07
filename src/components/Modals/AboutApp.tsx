"use client";
import React from 'react';
import { ShieldCheck, User, Copyright, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutApp = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 100 }}>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        className="modal-container"
        style={{ maxWidth: '40rem', backgroundColor: 'white' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-emerald-gradient p-8 text-white text-center relative">
          <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-emerald-100" />
          <h2 className="text-2xl font-bold mb-2 m-0 text-white">Tentang Aplikasi Interaktif</h2>
          <p className="text-emerald-100 font-medium m-0">Al-Akhlaq Lil Banin Juz 1</p>
        </div>

        <div className="p-8 space-y-6 max-h-60vh overflow-y-auto custom-scrollbar">
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-secondary-gold font-bold uppercase tracking-widest text-xs">
              <User className="w-4 h-4" />
              <span>Profil Kitab & Penulis</span>
            </div>
            <p className="text-sm text-text-slate leading-relaxed m-0">
              Kitab <strong>Al-Akhlaq Lil Banin</strong> disusun oleh <strong>Al-Ustadz Umar bin Ahmad Baradja</strong>. Kitab ini merupakan panduan dasar pendidikan akhlak bagi anak laki-laki di madrasah-madrasah Islam di Indonesia.
            </p>
          </section>

          <section className="space-y-4 border-t pt-8 border-bg-sand">
            <div className="flex items-center gap-3 text-red-600 font-bold uppercase tracking-widest text-xs">
              <AlertTriangle className="w-4 h-4" />
              <span>Peringatan Hak Cipta (PENTING)</span>
            </div>
            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 space-y-4">
               <p className="text-sm font-bold text-red-800 m-0">
                  "Pengarang dan ahli warisnya tidak ridha dunia-akhirat kepada siapapun yang merubah, menambah, atau membajak kitab ini tanpa izin tertulis dari Penerbit Ahmad Nabhan, Surabaya."
               </p>
               <p className="text-xs text-red-700 italic m-0 opacity-80">
                  Aplikasi ini dikembangkan dengan niat ta'lim (belajar) dan menghormati integritas teks asli 100% sesuai cetakan fisik.
               </p>
            </div>
          </section>

          <section className="space-y-4 border-t pt-8 border-bg-sand">
            <div className="flex items-center gap-3 text-secondary-gold font-bold uppercase tracking-widest text-xs">
              <Copyright className="w-4 h-4" />
              <span>Lisensi & Penerbit</span>
            </div>
            <ul className="text-sm text-text-slate space-y-2 m-0" style={{ listStyleType: 'disc', paddingLeft: '1.25rem' }}>
               <li><strong>Penerbit Asli:</strong> Maktabah Ahmad Nabhan, Surabaya.</li>
               <li><strong>Sumber Data:</strong> Kitab Al-Akhlaq Lil Banin (Cetak Fisik).</li>
               <li><strong>Versi Digital:</strong> Versi 1.1 - April 2026.</li>
            </ul>
          </section>
        </div>

        <button 
          onClick={onClose}
          className="w-full py-4 bg-bg-ivory text-primary-emerald font-bold uppercase tracking-widest text-xs hover:bg-bg-sand transition-colors border-t border-bg-sand border-none cursor-pointer"
        >
          Selesai Membaca
        </button>
      </motion.div>
    </div>
  );
};

export default AboutApp;

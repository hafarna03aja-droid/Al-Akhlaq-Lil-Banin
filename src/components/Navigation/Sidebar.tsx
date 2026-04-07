"use client";
import React from 'react';
import { BookOpen, User, Home, Info, Heart, ShieldQuestion } from 'lucide-react';

interface SidebarProps {
  activeChapter: number;
  onSelectChapter: (id: number) => void;
  onAboutClick: () => void;
  onCopyrightClick: () => void;
  chapters: any[];
}

const Sidebar: React.FC<SidebarProps> = ({ activeChapter, onSelectChapter, onAboutClick, onCopyrightClick, chapters }) => {
  return (
    <aside className="premium-sidebar">
      <div className="flex flex-col items-center mb-10">
        <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mb-4 shadow-lg border-2 border-secondary-gold">
          <BookOpen className="text-white w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-secondary-gold-light text-center leading-tight m-0">
          Al-Akhlaq<br />Lil Banin
        </h2>
        <span className="text-xs text-primary-emerald-light uppercase tracking-widest mt-4">Juz 1 • Interaktif</span>
      </div>

      <nav className="space-y-2">
        <p className="text-xs font-bold text-primary-emerald-light uppercase px-4 mb-2 tracking-widest m-0">Daftar Isi</p>
        
        {chapters.map((chapter) => (
          <button
            key={chapter.id}
            onClick={() => onSelectChapter(chapter.id)}
            className={`nav-item w-full text-left flex items-center gap-3 border-none cursor-pointer ${activeChapter === chapter.id ? 'active' : ''}`}
          >
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-black-10 text-xs font-bold text-secondary-gold">
              {chapter.id}
            </span>
            <span className="flex-1 truncate">{chapter.titleTrans}</span>
          </button>
        ))}

        <div className="pt-10 mt-10 border-t border-emerald-800">
          <p className="text-xs font-bold text-primary-emerald-light uppercase px-4 mb-2 tracking-widest m-0">Informasi</p>
          <button className="nav-item w-full text-left flex items-center gap-3 border-none cursor-pointer" onClick={onAboutClick}>
            <Info className="w-4 h-4 text-secondary-gold" />
            <span>Tentang Aplikasi</span>
          </button>
          <button className="nav-item w-full text-left flex items-center gap-3 border-none cursor-pointer" onClick={onCopyrightClick}>
            <ShieldQuestion className="w-4 h-4 text-secondary-gold" />
            <span>Copyright & Etika</span>
          </button>
        </div>
      </nav>
      
      <div className="mt-10 p-4 bg-emerald-900-50 rounded-xl border border-emerald-800-50">
        <p className="text-xs text-emerald-100 italic m-0">"Pengarang dan ahli warisnya tidak ridha jika dibajak."</p>
      </div>
    </aside>
  );
};

export default Sidebar;

"use client";
import React, { useState } from 'react';
import Sidebar from '@/components/Navigation/Sidebar';
import InteractiveReader from '@/components/Reader/InteractiveReader';
import AboutApp from '@/components/Modals/AboutApp';
import chaptersData from '@/data/chapters.json';
import { Menu, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { Chapter } from '@/types';

export default function Home() {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const chapters = chaptersData as unknown as Chapter[];
  const activeChapter = chapters[activeChapterIndex];

  return (
    <main className="min-h-screen flex bg-bg-ivory selection-gold">
      {/* Mobile Header */}
      <div className="lg-hidden fixed top-0 left-0 right-0 z-40 bg-primary-emerald p-4 text-white flex items-center justify-between shadow-lg">
        <h1 className="text-xl font-bold font-amiri text-secondary-gold-light">Al-Akhlaq Lil Banin</h1>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <div className={`fixed inset-y-0 left-0 z-50 transform lg-relative lg-translate-x-0 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} w-80`}>
        <Sidebar 
          activeChapter={activeChapter.id} 
          onSelectChapter={(id) => {
            const index = chaptersData.findIndex(c => c.id === id);
            setActiveChapterIndex(index);
            setIsSidebarOpen(false);
          }}
          onAboutClick={() => {
            setIsAboutOpen(true);
            setIsSidebarOpen(false);
          }}
          onCopyrightClick={() => {
            setIsAboutOpen(true);
            setIsSidebarOpen(false);
          }}
          chapters={chapters}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-4 lg-p-10 pt-20 lg-pt-10 max-h-screen overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <InteractiveReader chapter={activeChapter} />
          
          {/* Navigation Controls */}
          <div className="mt-12 flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-bg-sand">
            <button 
              disabled={activeChapterIndex === 0}
              onClick={() => setActiveChapterIndex(activeChapterIndex - 1)}
              className={`px-6 py-2 rounded-xl bg-bg-ivory text-primary-emerald font-bold border-bg-sand cursor-pointer transition-all shadow-sm ${activeChapterIndex === 0 ? 'disabled-opacity' : 'hover-gold-gradient'}`}
            >
              ← Bab Sebelumnya
            </button>
            
            <div className="text-center">
              <button 
                onClick={() => setIsAboutOpen(true)}
                className="text-xs font-bold text-secondary-gold tracking-widest uppercase hover-underline bg-transparent border-none cursor-pointer"
              >
                Tentang Kitab
              </button>
              <div className="text-[10px] text-text-muted mt-1">
                {activeChapterIndex + 1} dari {chapters.length}
              </div>
            </div>

            <button 
              disabled={activeChapterIndex === chapters.length - 1}
              onClick={() => setActiveChapterIndex(activeChapterIndex + 1)}
              className={`px-6 py-2 rounded-xl bg-bg-ivory text-primary-emerald font-bold border-bg-sand cursor-pointer transition-all shadow-sm ${activeChapterIndex === chaptersData.length - 1 ? 'disabled-opacity' : 'hover-emerald-gradient'}`}
            >
              Bab Selanjutnya →
            </button>
          </div>

          {/* Footer */}
          <footer className="mt-20 py-12 text-center border-t border-bg-sand opacity-40">
             <div className="text-6xl mb-6 opacity-20">🍃</div>
             <p className="text-xs font-medium text-text-slate tracking-widest uppercase mb-2">Penulis: Umar bin Ahmad Baradja</p>
             <p className="text-[10px] max-w-xs mx-auto mb-4">Aplikasi ini memegang amanah penyebaran adab Islam melalui platform digital interaktif dengan integritas tinggi.</p>
             <div className="flex items-center justify-center gap-4 text-[9px] uppercase tracking-tighter opacity-70">
                <span>Tradisi Madrasah Indonesia</span>
                <span>•</span>
                <span>Penerbit Ahmad Nabhan</span>
                <span>•</span>
                <span>Edu-Interact 2026</span>
             </div>
          </footer>
        </div>
      </div>

      {/* About Modal */}
      <AnimatePresence>
        {isAboutOpen && (
          <AboutApp isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="lg-hidden fixed inset-0 bg-black-60 backdrop-blur-sm z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </main>
  );
}

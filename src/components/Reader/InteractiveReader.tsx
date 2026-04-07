"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, ChevronRight, ChevronLeft, Type, Languages, HelpCircle } from 'lucide-react';

import { Word, Chapter } from '@/types';

import MorphologyTable from './MorphologyTable';

interface ReaderProps {
  chapter: Chapter;
}

const InteractiveReader: React.FC<ReaderProps> = ({ chapter }) => {
  const [selectedWord, setSelectedWord] = useState<Word | null>(null);
  const [showTranslation, setShowTranslation] = useState(false);

  const handleWordClick = (word: Word) => {
    setSelectedWord(word);
  };

  return (
    <div className="reader-container fade-in">
      {/* Chapter Header */}
      <div className="responsive-header fade-in">
        <div className="flex-1">
          <span className="text-secondary-gold font-bold text-[10px] uppercase tracking-widest bg-sand-light px-3 py-1 rounded-full mb-3 inline-block">
            HALAMAN {chapter.refPage}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-primary-emerald-dark leading-tight m-0">
            {chapter.titleTrans}
          </h1>
        </div>
        <div className="text-left md:text-right">
          <p className="arabic-text text-3xl md:text-5xl mb-0 leading-extra">{chapter.titleAr}</p>
        </div>
      </div>

      {/* Control Panel */}
      <div className="flex gap-4 mb-8">
        <button 
          onClick={() => setShowTranslation(!showTranslation)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${showTranslation ? 'bg-primary-emerald text-white shadow-md' : 'bg-bg-ivory text-primary-emerald border border-bg-sand'}`}
        >
          <Languages className="w-4 h-4" />
          {showTranslation ? "Sembunyikan Terjemahan" : "Tampilkan Terjemahan"}
        </button>
      </div>

      {/* Main Content Areas */}
      <div className="space-y-12">
        {chapter.paragraphs.map((para, idx) => (
          <div key={idx} className="space-y-6">
            <div className="arabic-text">
              {para.arabic.map((word, wIdx) => (
                <span 
                  key={wIdx} 
                  className="interactive-word mx-1 hover:text-secondary-gold-dark transition-colors duration-200 decoration-secondary-gold/20 decoration-dashed hover:decoration-solid underline-offset-8"
                  onClick={() => handleWordClick(word)}
                  onContextMenu={(e) => {
                    e.preventDefault();
                    handleWordClick(word); // Long press behavior for trigger
                  }}
                >
                  {word.word}
                </span>
              ))}
            </div>
            
            <AnimatePresence>
              {showTranslation && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-lg italic text-text-muted pl-6 border-l-4 border-secondary-gold/30 bg-bg-ivory/50 p-4 rounded-r-lg">
                    "{para.translation}"
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Word Detail Modal (Glassmorphism Overlay) */}
      <AnimatePresence>
        {selectedWord && (
          <div className="modal-overlay" onClick={() => setSelectedWord(null)}>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="modal-container"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-emerald-gradient p-8 text-white text-center relative">
                <button 
                  onClick={() => setSelectedWord(null)}
                  className="absolute top-4 right-4 p-2 bg-white-10 rounded-full transition-colors border-none cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5 rotate-90" />
                </button>
                <span className="arabic-text text-6xl mb-4 text-emerald-50 leading-relaxed block">
                  {selectedWord.word}
                </span>
                <p className="text-xl font-medium text-emerald-200 italic m-0">{selectedWord.meaning}</p>
              </div>

              <div className="p-8 space-y-6 max-height-60vh overflow-y-auto custom-scrollbar">
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                        <span className="text-xs uppercase font-bold text-amber-500 tracking-widest block mb-2">Jenis Kata</span>
                        <div className={`inline-block px-4 py-1 rounded-full text-xs font-bold uppercase ${
                          selectedWord.type === 'isim' ? 'text-blue-400 border border-blue-400' :
                          selectedWord.type === 'fiil' ? 'text-red-400 border border-red-400' :
                          'text-emerald-400 border border-emerald-400'
                        }`}>
                          {selectedWord.type}
                        </div>
                    </div>
                    <div>
                        <span className="text-xs uppercase font-bold text-amber-500 tracking-widest block mb-2">Analisis (I'rab)</span>
                        <p className="text-sm font-medium text-zinc-300 m-0">
                          {selectedWord.irab}
                        </p>
                    </div>
                 </div>

                 {selectedWord.morphology && (
                   <MorphologyTable data={selectedWord.morphology} />
                 )}
              </div>

              <div className="p-4 bg-zinc-950 border-t border-zinc-800 flex justify-center">
                 <button 
                    className="text-xs font-bold text-zinc-500 hover:text-zinc-300 transition-colors uppercase tracking-widest bg-transparent border-none cursor-pointer"
                    onClick={() => setSelectedWord(null)}
                  >
                    Tinggalkan Detail
                  </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="mt-20 p-8 border-t border-bg-sand text-center text-xs text-text-muted italic space-y-4">
          <HelpCircle className="w-6 h-6 mx-auto opacity-30 mb-2" />
          <p>Ketuk pada setiap kata Arab untuk melihat arti (Mufradat).</p>
          <p>Tahan lama (Long Press) atau Klik Kanan untuk Analisis Nahwu (I'rab).</p>
      </div>
    </div>
  );
};

export default InteractiveReader;

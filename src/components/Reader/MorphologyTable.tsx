"use client";

import React from "react";
import { motion } from "framer-motion";

import { MorphologyData } from "@/types";

interface MorphologyTableProps {
  data: MorphologyData;
}

const MorphologyTable: React.FC<MorphologyTableProps> = ({ data }) => {
  const formLabels: Record<string, string> = {
    madhi: "Madhi (Past)",
    mudhari: "Mudhari (Present)",
    amr: "Amr (Command)",
    mashdar: "Mashdar (Noun)",
    isim_fail: "Isim Fa'il (Subject)",
    isim_maful: "Isim Maf'ul (Object)",
  };

  return (
    <div className="mt-6 border-t border-emerald-800 pt-6 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="text-sm font-bold text-emerald-50 uppercase tracking-widest mb-1 m-0">Analisis Shorof</h4>
          <p className="text-xs text-emerald-400 font-medium m-0">Kamus Lengkap & Perubahan Kata</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-amiri text-amber-500 leading-tight mb-1">{data.root}</div>
          <div className="text-xs text-amber-500 uppercase font-bold tracking-widest">Akar Kata</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {Object.entries(data.forms).map(([key, value], index) => {
          if (!value) return null;
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-3 hover-border-amber transition-colors flex flex-col justify-between min-h-[5rem]"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs text-zinc-500 uppercase font-bold tracking-tight">
                  {formLabels[key] || key}
                </span>
                <span className="text-2xl font-amiri text-emerald-50 leading-tight">
                  {value.ar}
                </span>
              </div>
              <span className="block text-xs text-amber-500 font-medium text-right">
                {value.id}
              </span>
            </motion.div>
          );
        })}
      </div>

      {data.pattern && (
        <div className="mt-4 p-3 bg-white-10 border border-amber-500 rounded-lg text-center">
          <span className="text-xs text-amber-500 uppercase font-bold block mb-1">Wazan (Pattern)</span>
          <span className="text-2xl font-amiri text-amber-400">{data.pattern}</span>
        </div>
      )}
    </div>
  );
};

export default MorphologyTable;

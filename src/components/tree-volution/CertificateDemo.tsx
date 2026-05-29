import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Leaf, ArrowRight, TreePine, AwardIcon } from "lucide-react";

interface CertificateDemoProps {
  onAdoptClick: () => void;
}

export default function CertificateDemo({ onAdoptClick }: CertificateDemoProps) {
  const [name, setName] = useState<string>("");
  const [selectedSpecies, setSelectedSpecies] = useState<string>("Indian Neem");
  const [plateName, setPlateName] = useState<string>("");

  const todayDate = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return (
    <section className="py-28 relative overflow-hidden bg-[#030712] border-t border-white/5">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-5"
          >
            <Award className="w-3.5 h-3.5 text-emerald-400" />
            Digital Certificate Generator
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight font-serif mb-5">
            Your Living Legacy Certificate
          </h2>
          <p className="text-neutral-400 font-sans font-light text-base md:text-lg leading-relaxed">
            Every sponsored sapling generates an official digital certificate logged under your name. Type below to preview your personal certificate in real time!
          </p>
        </div>

        {/* Interactive Grid Framework */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Form Controls */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 md:p-8 rounded-3xl glass-card border border-white/5 space-y-5">
              <h3 className="text-xl font-bold font-serif text-white tracking-tight">
                Preview Details
              </h3>

              {/* Sponsor Name Input */}
              <div className="space-y-1.5">
                <label className="text-xs text-neutral-400 font-bold uppercase tracking-wider font-sans">
                  Sponsor Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Type your name..."
                  maxLength={25}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/5 focus:border-emerald-500 focus:outline-none transition-colors text-sm text-white"
                />
              </div>

              {/* Plate Name Input */}
              <div className="space-y-1.5">
                <label className="text-xs text-neutral-400 font-bold uppercase tracking-wider font-sans">
                  Name on physical plate
                </label>
                <input
                  type="text"
                  value={plateName}
                  onChange={(e) => setPlateName(e.target.value)}
                  placeholder="e.g. Vikas & Family..."
                  maxLength={30}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/5 focus:border-emerald-500 focus:outline-none transition-colors text-sm text-white"
                />
              </div>

              {/* Tree Species Selector */}
              <div className="space-y-1.5">
                <label className="text-xs text-neutral-400 font-bold uppercase tracking-wider font-sans">
                  Select Tree Species
                </label>
                <select
                  value={selectedSpecies}
                  onChange={(e) => setSelectedSpecies(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/5 focus:border-emerald-500 focus:outline-none transition-colors text-sm text-neutral-300"
                >
                  <option>Indian Neem</option>
                  <option>Holy Peepal</option>
                  <option>Sacred Banyan</option>
                  <option>Himalayan Cedar</option>
                  <option>Golden Shower</option>
                </select>
              </div>

              {/* Direct Purchase trigger */}
              <button
                onClick={onAdoptClick}
                className="w-full py-4 mt-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-1.5 shadow-[0_5px_15px_rgba(16,185,129,0.15)]"
              >
                Adopt & Plant This Tree
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Certificate Preview Card */}
          <div className="lg:col-span-7 flex justify-center w-full">
            <motion.div
              initial={{ rotate: -0.5, scale: 0.98 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-xl aspect-[1.414/1] rounded-3xl p-6 md:p-8 bg-gradient-to-br from-neutral-950 via-[#0a0f0d] to-neutral-950 border border-emerald-500/30 relative overflow-hidden flex flex-col justify-between items-center text-center shadow-2xl"
            >
              {/* Premium Topographical Mesh & Watermarks */}
              <Leaf className="absolute w-40 h-40 text-emerald-500/[0.03] rotate-45 z-0 pointer-events-none -right-8 -top-8" />
              <Leaf className="absolute w-40 h-40 text-emerald-500/[0.03] -rotate-12 z-0 pointer-events-none -left-8 -bottom-8" />

              {/* Breathtaking double certificate border matching high-end diplomas */}
              <div className="absolute inset-3 rounded-[24px] border border-emerald-500/20 pointer-events-none z-10" />
              <div className="absolute inset-4 rounded-[20px] border border-emerald-500/5 pointer-events-none z-10" />

              {/* Certificate Logos Header */}
              <div className="relative z-10 w-full flex flex-col items-center border-b border-white/5 pb-4 mb-4 select-none">
                <div className="w-full flex items-center justify-between">
                  <img 
                    src="/logo.png" 
                    alt="Inspire India Talks" 
                    className="h-10 w-auto object-contain drop-shadow-[0_2px_8px_rgba(249,115,22,0.2)]" 
                  />
                  <div className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-white/5 text-[7px] text-neutral-500 font-bold uppercase tracking-widest font-sans">
                    Verified Registry
                  </div>
                </div>
                
                <div className="text-center mt-3 flex items-center gap-1.5 flex-wrap justify-center">
                  <span className="text-[10px] uppercase font-bold tracking-[0.1em] text-emerald-400 font-sans">
                    Tree-volution
                  </span>
                  <span className="text-[8px] text-neutral-600">—</span>
                  <span className="text-[9px] uppercase font-semibold tracking-[0.08em] text-neutral-300 font-sans">
                    Inspire India Talks
                  </span>
                  <span className="text-[8px] text-neutral-600">—</span>
                  <span className="text-[8px] uppercase font-medium tracking-[0.05em] text-neutral-400 font-sans">
                    Powered by Ilmeza Foundation
                  </span>
                </div>
              </div>

              {/* Certificate content */}
              <div className="relative z-10 w-full flex flex-col items-center my-auto space-y-3.5">
                
                <div className="text-xs text-neutral-400 font-serif italic">
                  This document certifies that
                </div>

                {/* Elegant Dynamic Name Display with glowing backing */}
                <div className="relative py-1 flex items-center justify-center min-w-[240px] border-b border-emerald-500/30 px-8">
                  <span className="text-xl md:text-2xl font-black font-serif text-white tracking-wide drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]">
                    {name.trim() || "Your Name Here"}
                  </span>
                  <div className="absolute bottom-[-1px] left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                </div>

                <div className="text-xs text-neutral-300 font-serif italic leading-relaxed">
                  has co-sponsored and planted a native{" "}
                  <span className="text-emerald-400 font-bold font-sans not-italic border-b border-emerald-500/20 pb-0.5">
                    {selectedSpecies}
                  </span>{" "}
                  sapling
                </div>

                {/* Nameplate tag mockup */}
                <div className="px-4 py-2 rounded-2xl bg-neutral-900/90 border border-white/5 text-xs text-neutral-400 font-sans mt-2 shadow-inner max-w-sm truncate flex items-center gap-1.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-500">Plate:</span>
                  <span className="font-semibold text-emerald-400">
                    "{plateName.trim() || "Dedicated Message Here"}"
                  </span>
                </div>
              </div>

              {/* Premium gold seal in the bottom corner */}
              <div className="absolute right-8 bottom-5 w-12 h-12 select-none pointer-events-none opacity-40 z-10 hidden sm:flex items-center justify-center">
                <svg className="w-full h-full text-emerald-400 animate-pulse" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 5 L63 20 L80 15 L78 35 L95 45 L80 57 L85 75 L67 75 L60 92 L45 83 L30 92 L23 75 L5 75 L10 57 L0 45 L15 35 L12 15 L32 20 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="50" cy="46" r="16" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M44 42 L50 48 L56 42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Certificate Footer Metadata */}
              <div className="relative z-10 w-full mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[8px] text-neutral-500 font-bold uppercase tracking-widest font-sans">
                <div className="flex items-center gap-1.5 text-neutral-400">
                  <TreePine className="w-3.5 h-3.5 text-emerald-400" />
                  <span>REGISTRATION ID: IIT-873918</span>
                </div>
                <div className="text-neutral-400">
                  DATE: {todayDate}
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}

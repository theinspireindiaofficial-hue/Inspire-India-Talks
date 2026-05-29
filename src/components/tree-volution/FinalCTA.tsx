import { motion } from "framer-motion";
import { Heart, Leaf, ShieldAlert } from "lucide-react";

interface FinalCTAProps {
  onPlantClick: () => void;
}

export default function FinalCTA({ onPlantClick }: FinalCTAProps) {
  return (
    <section className="py-32 relative overflow-hidden bg-[#030712] border-t border-white/5 flex items-center justify-center">
      
      {/* Cinematic dark forest background overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center select-none scale-102 opacity-25"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2560&auto=format&fit=crop')`,
        }}
      />
      {/* High-intensity dark overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/90 to-[#030712]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#030712_85%)]" />

      {/* Floating leaves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/5 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/5 w-72 h-72 bg-teal-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        
        {/* Heart badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-8"
        >
          <Heart className="w-3.5 h-3.5 fill-current animate-pulse text-emerald-400" />
          Leave A Living Legacy
        </motion.div>

        {/* Emotion-driven Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-neutral-400 text-sm md:text-base font-bold uppercase tracking-[0.25em] mb-6 font-sans"
        >
          A Seed Placed Today, A Forest Heard Tomorrow
        </motion.p>

        {/* Powerful Main Quote */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-7xl font-black text-white font-serif tracking-tight leading-none mb-10"
        >
          ₹99 = One Tree.<br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-green-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            One Name. One Hundred Years.
          </span>
        </motion.h2>

        {/* Supporting description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-neutral-300 font-sans font-light text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-12"
        >
          Every donation creates a permanent ecological anchor with your exact nameplate attached. Join thousands across India who are rooting for the future.
        </motion.p>

        {/* Main CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <button
            onClick={onPlantClick}
            className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 text-neutral-950 font-bold text-xl overflow-hidden shadow-[0_15px_40px_-15px_rgba(16,185,129,0.6)] transition-all hover:scale-105 active:scale-98"
          >
            {/* Dark overlay hover transition */}
            <span className="absolute inset-0 bg-white/10 translate-y-full skew-y-12 transition-transform duration-500 group-hover:translate-y-0" />
            <span className="relative flex items-center justify-center gap-2">
              Plant My Tree Now
              <Leaf className="w-5 h-5 group-hover:rotate-12 transition-transform fill-neutral-950" />
            </span>
          </button>

          {/* Secure disclaimer tag */}
          <div className="flex items-center gap-2 text-xs text-neutral-500 mt-2">
            <ShieldAlert className="w-4 h-4 text-neutral-600" />
            <span>Secure 128-bit Payment Processing Powered by Razorpay. 80G Tax Deductible.</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

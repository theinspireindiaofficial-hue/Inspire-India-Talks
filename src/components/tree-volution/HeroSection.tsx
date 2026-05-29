import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import { useRef } from "react";

interface HeroSectionProps {
  onExploreClick: () => void;
  onPlantClick: () => void;
}

export default function HeroSection({ onExploreClick, onPlantClick }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Floating leaf particles simulation
  const leafParticles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 16 + 8,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
    rotate: Math.random() * 360,
  }));

  return (
    <div
      ref={containerRef}
      className="relative min-h-[95vh] w-full flex items-center justify-center overflow-hidden bg-[#030712]"
    >
      {/* Background Cinematic Forest Image with Parallax & Dark Overlay */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 z-0 bg-cover bg-center select-none scale-105"
        animate={{ scale: 1.02 }}
        transition={{ duration: 15, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2560&auto=format&fit=crop')`,
          }}
        />
        {/* Dark radial and linear gradients for sleek premium feeling */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-[#030712]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#030712_80%)]" />
      </motion.div>

      {/* Floating Interactive Leaf Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {leafParticles.map((leaf) => (
          <motion.div
            key={leaf.id}
            initial={{ y: "110%", x: 0, opacity: 0, rotate: leaf.rotate }}
            animate={{
              y: "-10%",
              x: [0, 40, -40, 20, 0],
              opacity: [0, 0.7, 0.7, 0.3, 0],
              rotate: leaf.rotate + 360,
            }}
            transition={{
              duration: leaf.duration,
              repeat: Infinity,
              delay: leaf.delay,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              left: leaf.left,
              width: leaf.size,
              height: leaf.size,
            }}
            className="text-emerald-500/20"
          >
            <Leaf fill="currentColor" size={leaf.size} />
          </motion.div>
        ))}
      </div>

      {/* Animated Subtle Grid lines */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-10" />

      {/* Hero Content */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-20 container mx-auto px-6 text-center flex flex-col items-center justify-center max-w-4xl"
      >
        {/* Campaign Label Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-8 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
        >
          <Leaf className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
          Flagship Campaign 2026
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-7xl md:text-9xl font-extrabold tracking-tighter text-white uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] font-serif"
        >
          <span className="bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
            Tree-
          </span>
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-green-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            volution
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl md:text-4xl font-light tracking-wide text-neutral-300 mt-4 max-w-2xl font-serif italic"
        >
          Rooting for the Future
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed mt-6 max-w-xl text-center font-sans"
        >
          A nationwide movement to plant{" "}
          <span className="text-white font-semibold underline decoration-emerald-500/50 underline-offset-4">
            10,000 trees in 10 days
          </span>
          .<br />
          One tree. One name. One legacy.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto"
        >
          <button
            onClick={onPlantClick}
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 text-white font-semibold text-lg overflow-hidden shadow-[0_10px_30px_-10px_rgba(16,185,129,0.5)] transition-all hover:scale-105 active:scale-95"
          >
            {/* Hover shine effect */}
            <span className="absolute inset-0 bg-white/20 translate-y-full skew-y-12 transition-transform duration-500 group-hover:translate-y-0" />
            <span className="relative flex items-center justify-center gap-2">
              Plant Your Tree <span className="text-neutral-200 font-light">|</span> ₹99
              <Leaf className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </span>
          </button>

          <button
            onClick={onExploreClick}
            className="group px-8 py-4 rounded-full border border-white/10 hover:border-emerald-500/40 bg-white/5 hover:bg-emerald-500/5 backdrop-blur-md text-white font-medium text-lg transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            Explore The Movement
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-emerald-400" />
          </button>
        </motion.div>
      </motion.div>

      {/* Ultra Sleek Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer pointer-events-none"
      >
        <span className="text-[10px] text-neutral-500 tracking-[0.25em] uppercase font-sans">
          Scroll
        </span>
        <div className="w-5 h-9 rounded-full border border-neutral-700 p-1 flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
}

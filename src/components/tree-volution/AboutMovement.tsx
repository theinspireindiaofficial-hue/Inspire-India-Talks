import { motion } from "framer-motion";
import { ArrowUpRight, MessageSquare, Play, ShieldCheck } from "lucide-react";

export default function AboutMovement() {
  return (
    <section className="py-28 relative overflow-hidden bg-[#030712] border-t border-white/5">
      {/* Background Ornaments */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Storytelling (Tesla-style narrative) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6"
            >
              The Movement Behind The Platform
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-8 font-serif leading-tight"
            >
              Beyond Conversations.<br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-green-500 bg-clip-text text-transparent">
                Catalyzing Action.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-neutral-300 font-sans text-lg font-light leading-relaxed"
            >
              <p>
                At <span className="text-white font-medium">Inspire India Talks</span>, we believe that words are only the seed. Action is the forest. We are not just another platform for storytelling — we are a movement-driven catalyst designed to translate powerful conversations into measurable, nationwide impact.
              </p>
              <p className="border-l-2 border-emerald-500/40 pl-6 italic text-neutral-400 font-serif">
                "Inspire India Talks is a movement-driven platform that transforms powerful conversations into real-world action."
              </p>
              <p>
                Our campaigns are designed to mobilize local communities, empower individuals, and construct solutions to India's most pressing ecological crises. Tree-volution is our loudest call to arms yet. By planting 10,000 trees in 10 days, we're not just planting seeds; we are rooting an unbroken, century-long legacy of clean air, rich biodiversity, and collective ownership.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Visually Premium Action Card (Apple-style minimalism) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative w-full aspect-square md:aspect-[4/3] lg:aspect-square"
          >
            {/* Main Interactive card */}
            <div className="absolute inset-0 rounded-3xl glass-card overflow-hidden p-8 flex flex-col justify-between border border-white/5 relative z-10 group">
              <div className="absolute inset-0 bg-cover bg-center opacity-40 select-none pointer-events-none group-hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop')`
                }}
              />
              {/* Subtle glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent z-0" />

              {/* Card Header */}
              <div className="relative z-10 flex justify-between items-start">
                <div className="p-3 bg-neutral-900/80 border border-white/10 rounded-2xl backdrop-blur-md">
                  <Play fill="white" className="w-5 h-5 text-white ml-0.5" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/25 border border-emerald-400/30 text-emerald-300 text-xs font-semibold tracking-wider backdrop-blur-md">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Movement
                </div>
              </div>

              {/* Card Bottom Details */}
              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-bold font-serif text-white leading-tight">
                  How We Scale Inspiring Words Into Forests
                </h3>
                <p className="text-neutral-300 text-sm font-light leading-relaxed">
                  Every talk hosted on our stage fuels a dedicated action fund. With Tree-volution, 100% of public sponsorships directly seed actual saplings monitored via GPS technology.
                </p>

                <div className="pt-2 flex items-center gap-6 border-t border-white/10">
                  <div>
                    <div className="text-xs text-neutral-400 font-sans uppercase tracking-widest">
                      Stage Talks
                    </div>
                    <div className="text-lg font-bold text-white font-serif flex items-center gap-1 mt-1">
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      50+ Held
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 font-sans uppercase tracking-widest">
                      Action Fund
                    </div>
                    <div className="text-lg font-bold text-emerald-400 font-serif flex items-center gap-1 mt-1">
                      <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                      100% Direct
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing Backdrop Ornaments */}
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-[32px] blur-xl opacity-50 pointer-events-none z-0" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

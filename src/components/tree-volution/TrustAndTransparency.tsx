import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Camera, RefreshCw, BarChart3 } from "lucide-react";

export default function TrustAndTransparency() {
  const transparencyPillars = [
    {
      icon: MapPin,
      title: "GPS Tagged Location",
      description: "Every single tree sponsored is mapped with high-precision GPS coordinates, pin-pointed exactly on our public forestry dashboard."
    },
    {
      icon: Camera,
      title: "Photo Documentation",
      description: "Within 48 hours of plantation, you receive high-resolution, dated photo proof of your specific sapling with your nameplate attached."
    },
    {
      icon: RefreshCw,
      title: "Annual Growth Audits",
      description: "Receive yearly digital health metrics, physical measurements, and fresh photographic progress logs for the critical first three years."
    },
    {
      icon: BarChart3,
      title: "Public Carbon Ledger",
      description: "Our completely open database logs total soil metrics, water absorbed, and estimated carbon captured, fully verifiable by any third party."
    }
  ];

  return (
    <section className="py-28 relative overflow-hidden bg-[#030712] border-t border-white/5">
      {/* Background Ornaments */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Mission copy */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Auditable Progress
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-black text-white tracking-tight font-serif mb-6 leading-tight"
            >
              Radical Transparency.<br />
              Zero Guesswork.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-neutral-400 font-sans font-light text-base md:text-lg leading-relaxed mb-8"
            >
              Most ecological projects fail because sponsors never know if their seeds actually grow. We solve this by building a deep, digital proof system behind every ₹99 contributed. We treat environmental care with absolute computational accountability.
            </motion.p>
            
            {/* CTA tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-neutral-900 border border-white/5 flex items-center gap-4 w-full shadow-inner"
            >
              <div className="text-3xl font-black font-serif text-emerald-400">
                100%
              </div>
              <div className="text-sm text-neutral-300 font-light leading-relaxed border-l border-white/10 pl-4">
                Publicly verifiable ledger. No estimation. Verified on-ground metrics.
              </div>
            </motion.div>
          </div>

          {/* Right Column: Grid of pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {transparencyPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative p-6 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-emerald-500/20 hover:bg-neutral-900/70 transition-all duration-300 shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-neutral-950 border border-white/10 flex items-center justify-center text-white mb-5 group-hover:border-emerald-500/30 group-hover:text-emerald-400 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-serif text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-neutral-400 text-sm font-sans font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

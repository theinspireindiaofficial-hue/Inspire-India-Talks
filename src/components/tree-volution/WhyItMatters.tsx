import { motion } from "framer-motion";
import { CloudRain, Compass, Droplet, Globe, Heart, Sprout, TrendingUp, Users } from "lucide-react";

export default function WhyItMatters() {
  const points = [
    {
      id: "climate",
      title: "Climate Impact & Carbon Capture",
      stat: "2,000,000 kg",
      statLabel: "CO₂ Absorbed Over Lifetime",
      description: "Trees act as the planet's primary lungs. Planting 10,000 native species creates a massive biological carbon sink, actively fighting localized temperature rises and purifying the air for generations.",
      icon: Globe,
      color: "from-emerald-500/20 to-teal-500/20",
      accent: "text-emerald-400",
      size: "lg:col-span-7",
      bgImage: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "water",
      title: "Water Retention & Aquifer Recharge",
      stat: "50 Million Liters",
      statLabel: "Annual Soil Water Retained",
      description: "Forest root systems bind the earth, acting as natural sponges that prevent soil erosion and facilitate rainwater seepage directly into critical underground aquifers, solving local water scarcity.",
      icon: Droplet,
      color: "from-blue-500/20 to-teal-500/20",
      accent: "text-blue-400",
      size: "lg:col-span-5",
      bgImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "biodiversity",
      title: "Biodiversity Restoration",
      stat: "250+ Species",
      statLabel: "Of Flora & Fauna Supported",
      description: "By specifically selecting and planting indigenous, non-monoculture species, we reconstruct native ecosystems, inviting bees, birds, insects, and small wildlife back to their natural habitats.",
      icon: Sprout,
      color: "from-green-500/20 to-emerald-500/20",
      accent: "text-green-400",
      size: "lg:col-span-5",
      bgImage: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "community",
      title: "Community & Economic Livelihoods",
      stat: "1,200+ Days",
      statLabel: "Of Local Employment Generated",
      description: "We partner directly with local farming communities and rural women self-help groups. They are employed to dig, plant, secure, and monitor the trees, creating direct micro-economic resilience.",
      icon: Users,
      color: "from-amber-500/20 to-orange-500/20",
      accent: "text-amber-400",
      size: "lg:col-span-7",
      bgImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-28 relative overflow-hidden bg-[#030712] border-t border-white/5">
      {/* Background Gradient Orbs */}
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-5"
          >
            <Compass className="w-3.5 h-3.5" />
            Why Tree-volution Matters
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight font-serif mb-6"
          >
            The Root Architecture of Global Survival
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-400 font-sans font-light text-lg leading-relaxed"
          >
            Planting a tree is not a singular act of donation. It is a multi-dimensional intervention that heals climate systems, protects regional geology, and sustains local communities.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className={`${point.size} group relative rounded-3xl glass-card border border-white/5 overflow-hidden flex flex-col justify-between p-8 md:p-10 min-h-[350px] hover:scale-[1.01] transition-transform duration-500`}
              >
                {/* Background Image with Hover Zoom and Reveal Effect */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 group-hover:scale-105 transition-all duration-700 select-none pointer-events-none"
                  style={{ backgroundImage: `url('${point.bgImage}')` }}
                />
                
                {/* Inner Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-transparent pointer-events-none" />

                {/* Card Header (Icon and Title) */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-2xl bg-neutral-900 border border-white/15 flex items-center justify-center text-white mb-6 group-hover:border-emerald-500/30 transition-colors">
                      <Icon className={`w-6 h-6 ${point.accent}`} />
                    </div>
                    {/* Visual Pulse Decorator */}
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 flex items-center justify-center animate-ping">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-white tracking-tight mb-4">
                    {point.title}
                  </h3>
                  <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed max-w-xl">
                    {point.description}
                  </p>
                </div>

                {/* Card Footer (Key Metric Stats) */}
                <div className="relative z-10 mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] text-neutral-400 uppercase tracking-widest font-sans">
                      {point.statLabel}
                    </div>
                    <div className={`text-2xl md:text-3xl font-black font-serif tracking-tight mt-1 ${point.accent}`}>
                      {point.stat}
                    </div>
                  </div>
                  
                  {/* Subtle link cue */}
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 group-hover:text-emerald-400 transition-colors cursor-pointer font-semibold uppercase tracking-wider">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Projected Impact
                  </div>
                </div>

                {/* Highlight/glowing corners */}
                <div className="absolute -inset-px rounded-3xl border border-white/0 group-hover:border-white/10 pointer-events-none transition-all" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

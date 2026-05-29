import { motion } from "framer-motion";
import { Sparkles, Trophy, Video, Footprints, Trees, Play } from "lucide-react";

export default function ActivitiesShowcase() {
  const activities = [
    {
      title: "Grand Launch Event",
      category: "Inauguration",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
      description: "Kickstarting the 10-day movement in Dehradun with spiritual leaders, activists, and founders.",
      accent: "text-amber-400"
    },
    {
      title: "Reel-a-Tree Challenge",
      category: "Digital Viral Campaign",
      icon: Video,
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop",
      description: "Plant locally, post a 30-sec creative reel, challenge 5 friends, and double the impact organically.",
      accent: "text-pink-400"
    },
    {
      title: "Guided Nature Walk",
      category: "Educational Experience",
      icon: Footprints,
      image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1200&auto=format&fit=crop",
      description: "Traversing botanical valleys guided by leading plant physiologists to learn about indigenous species.",
      accent: "text-emerald-400"
    },
    {
      title: "Community Plantation Drive",
      category: "On-Ground Action",
      icon: Trees,
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1200&auto=format&fit=crop",
      description: "Mass public action drives mobilizing local schools, organizations, and village councils.",
      accent: "text-blue-400"
    },
    {
      title: "Green Hero Awards",
      category: "Recognition Gala",
      icon: Trophy,
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
      description: "Honoring the outstanding student volunteers, regional caretakers, and active corporate partners.",
      accent: "text-yellow-400"
    }
  ];

  return (
    <section className="py-28 relative overflow-hidden bg-[#030712] border-t border-white/5">
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-5"
          >
            <Play className="w-3 h-3 text-emerald-400" />
            Engage & Participate
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight font-serif mb-5">
            Campaign Activities Showcase
          </h2>
          <p className="text-neutral-400 font-sans font-light text-base md:text-lg leading-relaxed">
            Tree-revolution is a multi-format campaign. Join our on-ground assemblies, participate in digital drives, or explore the nature tracks.
          </p>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Loop over first 3 */}
          {activities.slice(0, 3).map((act, index) => {
            const Icon = act.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative rounded-3xl overflow-hidden glass-card aspect-[4/3] sm:aspect-square md:aspect-[4/3] flex flex-col justify-end p-6 border border-white/5 hover:scale-[1.02] transition-transform duration-500"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700 pointer-events-none select-none"
                  style={{ backgroundImage: `url('${act.image}')` }}
                />
                
                {/* Dark Gradient Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent pointer-events-none" />

                {/* Content Block */}
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                      {act.category}
                    </span>
                    <Icon className={`w-5 h-5 ${act.accent}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold font-serif text-white tracking-tight">
                    {act.title}
                  </h3>
                  
                  <p className="text-neutral-400 text-xs sm:text-sm font-sans font-light leading-relaxed">
                    {act.description}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* Special Double Grid for last 2 items on desktop */}
          {activities.slice(3, 5).map((act, index) => {
            const Icon = act.icon;
            return (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative rounded-3xl overflow-hidden glass-card aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:col-span-1.5 flex flex-col justify-end p-6 border border-white/5 hover:scale-[1.02] transition-transform duration-500"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700 pointer-events-none select-none"
                  style={{ backgroundImage: `url('${act.image}')` }}
                />
                
                {/* Dark Gradient Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent pointer-events-none" />

                {/* Content Block */}
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                      {act.category}
                    </span>
                    <Icon className={`w-5 h-5 ${act.accent}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold font-serif text-white tracking-tight">
                    {act.title}
                  </h3>
                  
                  <p className="text-neutral-400 text-xs sm:text-sm font-sans font-light leading-relaxed">
                    {act.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

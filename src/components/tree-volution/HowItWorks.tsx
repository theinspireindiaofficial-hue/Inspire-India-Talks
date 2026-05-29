import { motion } from "framer-motion";
import { TreePine, HeartHandshake, FileBadge2, Compass, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Choose Your Tree",
      icon: TreePine,
      description: "Select from our curated list of native, highly adaptive Indian tree species like Neem, Banyan, or Peepal.",
      badge: "Native Species Only"
    },
    {
      step: "02",
      title: "Sponsor at ₹99",
      icon: HeartHandshake,
      description: "Contribute ₹99 per sapling. Your sponsorship directly covers planting labor, security fences, and 3-year care.",
      badge: "100% Transparency"
    },
    {
      step: "03",
      title: "Get Certificate",
      icon: FileBadge2,
      description: "Receive a unique digital plantation certificate detailing your name, exact Tree-ID, and co-sponsor status.",
      badge: "Shareable Certificate"
    },
    {
      step: "04",
      title: "Track Growth",
      icon: Compass,
      description: "Monitor growth on our live GPS map with photo updates and yearly health logs uploaded by local caretakers.",
      badge: "Real-time Auditing"
    }
  ];

  return (
    <section className="py-28 relative overflow-hidden bg-[#030712] border-t border-white/5">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-5"
          >
            Sponsorship Journey
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight font-serif mb-5">
            How It Works
          </h2>
          <p className="text-neutral-400 font-sans font-light text-base md:text-lg leading-relaxed">
            Taking environmental action has never been this seamless. In just four simple steps, you can plant a legacy that stands for a hundred years.
          </p>
        </div>

        {/* Step Cards Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[68px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-emerald-500/10 via-emerald-500/30 to-emerald-500/10 z-0 pointer-events-none" />

          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative flex flex-col items-center text-center p-6 rounded-2xl bg-neutral-900/30 hover:bg-neutral-900/60 border border-white/5 hover:border-emerald-500/20 transition-all duration-300 z-10"
              >
                {/* Step Number Badge */}
                <div className="absolute top-4 left-4 font-serif text-sm font-semibold text-neutral-600 group-hover:text-emerald-500 transition-colors">
                  {item.step}
                </div>

                {/* Circle Icon Container */}
                <div className="relative w-20 h-20 rounded-full bg-neutral-900 border border-white/10 group-hover:border-emerald-500/40 flex items-center justify-center text-white mb-6 group-hover:text-emerald-400 transition-colors shadow-inner">
                  <Icon className="w-8 h-8 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-emerald-500/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-serif text-white tracking-tight mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-400 text-sm font-sans font-light leading-relaxed mb-4 flex-grow">
                  {item.description}
                </p>

                {/* Accent Tag */}
                <div className="px-2.5 py-1 rounded-md bg-neutral-950 border border-white/5 text-[10px] uppercase font-bold tracking-widest text-emerald-400">
                  {item.badge}
                </div>

                {/* Connector Arrow for smaller screens */}
                {index < 3 && (
                  <ArrowRight className="lg:hidden absolute bottom-[-24px] rotate-90 md:rotate-0 w-6 h-6 text-neutral-700 pointer-events-none" />
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

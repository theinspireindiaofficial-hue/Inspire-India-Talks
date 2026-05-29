import { motion } from "framer-motion";
import { Handshake, HelpCircle, Shield, Award } from "lucide-react";

export default function OrganizationSection() {
  return (
    <section className="py-28 relative overflow-hidden bg-[#030712] border-t border-white/5">
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Partnership badge */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-5"
          >
            <Handshake className="w-3.5 h-3.5" />
            Strategic Partnership
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-serif max-w-2xl leading-tight">
            Two Organizations.<br />One Unbroken Mission.
          </h2>
        </div>

        {/* Master Partnership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Inspire India Talks: Movement Leader */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="group relative p-8 md:p-10 rounded-3xl glass-card border border-white/5 hover:border-emerald-500/20 transition-all flex flex-col justify-between"
          >
            {/* Glow backing */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 group-hover:to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20">
                  Movement Leader & Facilitator
                </span>
                <Award className="w-6 h-6 text-emerald-400" />
              </div>

              <h3 className="text-2xl font-bold font-serif text-white tracking-tight mb-4">
                Inspire India Talks
              </h3>

              <p className="text-neutral-400 text-sm md:text-base font-sans font-light leading-relaxed mb-6">
                Inspire India Talks is the visionary platform driving this nation-wide environmental call-to-arms. We specialize in gathering brilliant leaders, mobilizing large communities, setting up digital platforms, and channeling resources into projects that require immediate, heavy focus.
              </p>
            </div>

            <div className="border-t border-white/5 pt-6 flex items-center justify-between text-xs text-neutral-500 font-bold uppercase tracking-wider">
              <span>Vision & Community Advocacy</span>
              <span className="text-emerald-400">Mainstage Leader</span>
            </div>
          </motion.div>

          {/* Ilmeza Foundation: Powering Organization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="group relative p-8 md:p-10 rounded-3xl glass-card border border-white/5 hover:border-emerald-500/20 transition-all flex flex-col justify-between"
          >
            {/* Glow backing */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-teal-500/0 to-teal-500/5 group-hover:to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-teal-400 bg-teal-500/10 px-3 py-1 rounded border border-teal-500/20">
                  Execution & Auditing Power
                </span>
                <Shield className="w-6 h-6 text-teal-400" />
              </div>

              <h3 className="text-2xl font-bold font-serif text-white tracking-tight mb-4">
                Ilmeza Foundation
              </h3>

              <p className="text-neutral-400 text-sm md:text-base font-sans font-light leading-relaxed mb-6">
                Ilmeza Foundation is the licensed non-profit agency powering all on-ground operations. They manage our plant nurseries, coordinate with rural agricultural groups, implement protective bamboo mesh shields, secure GPS tag arrays, and conduct long-term growth monitoring audits.
              </p>
            </div>

            <div className="border-t border-white/5 pt-6 flex items-center justify-between text-xs text-neutral-500 font-bold uppercase tracking-wider">
              <span>On-Ground Forestry & GPS Auditing</span>
              <span className="text-teal-400">Powering Partner</span>
            </div>
          </motion.div>

        </div>

        {/* Partnership explanation footer note */}
        <div className="max-w-xl mx-auto text-center mt-12 flex items-center gap-3 justify-center text-xs text-neutral-500">
          <HelpCircle className="w-4 h-4 text-neutral-600 flex-shrink-0" />
          <p className="font-sans font-light leading-relaxed">
            100% of all public contributions are processed securely and funneled directly to seed nursery creation and rural monitoring labor.
          </p>
        </div>

      </div>
    </section>
  );
}

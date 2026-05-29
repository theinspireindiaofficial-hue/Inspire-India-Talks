import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Trees, Calendar, DollarSign, ShieldAlert } from "lucide-react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function Counter({ end, duration = 2000, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, isInView]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ImpactCounter() {
  const cards = [
    {
      id: "trees",
      label: "Trees Goal",
      icon: Trees,
      value: 10000,
      suffix: "+",
      color: "from-emerald-500 to-teal-500",
      description: "A nationwide planting blitz across multiple locations in India.",
    },
    {
      id: "days",
      label: "Days Campaign",
      icon: Calendar,
      value: 10,
      suffix: " Days",
      color: "from-amber-500 to-orange-500",
      description: "Fast-paced environmental movement mobilizing thousands.",
    },
    {
      id: "cost",
      label: "Per Tree",
      icon: DollarSign,
      value: 99,
      prefix: "₹",
      color: "from-teal-500 to-emerald-600",
      description: "Democratizing action. Anyone can become an environmental hero.",
    },
    {
      id: "legacy",
      label: "Year Legacy",
      icon: ShieldAlert,
      value: 100,
      suffix: "-Year",
      color: "from-indigo-500 to-blue-500",
      description: "Nurturing forests for generations. Sustainable long-term impact.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#030712]">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative glass-card p-8 flex flex-col justify-between hover:scale-[1.03] transition-all duration-300"
              >
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-emerald-500/30 transition-all duration-300 pointer-events-none" />
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm pointer-events-none" />

                <div>
                  {/* Icon with beautiful backdrop glow */}
                  <div className="relative w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:border-emerald-500/40 group-hover:text-emerald-400 transition-colors">
                    <Icon className="w-6 h-6" />
                    <div className="absolute inset-0 bg-emerald-500/10 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Highlight Counter Value */}
                  <div className="text-4xl md:text-5xl font-black font-serif text-white tracking-tight mb-2">
                    <Counter
                      end={card.value}
                      prefix={card.prefix}
                      suffix={card.suffix}
                    />
                  </div>

                  {/* Label */}
                  <h3 className="text-emerald-400 font-sans text-sm font-semibold uppercase tracking-wider mb-3">
                    {card.label}
                  </h3>
                </div>

                {/* Short supportive paragraph */}
                <p className="text-neutral-400 text-sm leading-relaxed font-light mt-2">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

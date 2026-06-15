import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const BusinessInsights = () => {
  return (
    <Layout>
      <section className="relative py-20 overflow-hidden gradient-mesh">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs">Insights</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold glow-text mb-8">
              Business <span className="text-primary">Insights</span>
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl">
              Content coming soon.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BusinessInsights;

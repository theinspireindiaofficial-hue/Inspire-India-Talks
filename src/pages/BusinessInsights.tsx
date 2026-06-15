import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { businessInsights } from "../data/businessInsights";

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
            <div className="mt-12 max-w-4xl">
  {businessInsights.map((article) => (
    <div
      key={article.id}
      className="bg-black/30 border border-primary/20 rounded-xl overflow-hidden mb-10"
    >
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-[400px] object-cover"
      />

      <div className="p-6">
        <p className="text-primary text-sm mb-2">
          {article.date}
        </p>

        <h2 className="text-3xl font-bold mb-4">
          {article.title}
        </h2>

        <p className="text-foreground/80 mb-4">
          {article.excerpt}
        </p>

        <p className="text-foreground/70 leading-relaxed">
          {article.content}
        </p>
      </div>
    </div>
  ))}
</div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BusinessInsights;

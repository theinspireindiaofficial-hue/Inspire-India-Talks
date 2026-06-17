import Layout from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { businessinsights as rawInsights } from "../data/businessinsights";

/* Loose local type so this page compiles regardless of how
   src/data/businessinsights.ts is typed. Only id/title/date/image are
   assumed; everything else is optional. */
interface Article {
  id: string;
  title: string;
  date: string;
  image: string;
  excerpt?: string;
  content?: string;
  category?: string;
  featured?: boolean;
  readTime?: string;
}

const businessinsights = rawInsights as unknown as Article[];

/* Image with graceful fallback: if the file is missing, a gradient + the
   headline shows instead of an empty black box. */
const Cover = ({ article, className = "" }: { article: Article; className?: string }) => (
  <div
    className={`relative overflow-hidden bg-gradient-to-br from-primary/25 via-black/50 to-black ${className}`}
  >
    <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
      <span className="font-serif text-foreground/40 text-lg leading-snug">
        {article.title}
      </span>
    </div>
    <img
      src={article.image}
      alt={article.title}
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
      className="relative w-full h-full object-cover"
    />
  </div>
);

const Meta = ({ article }: { article: Article }) => (
  <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-foreground/50 mb-3">
    {article.category && (
      <>
        <span className="text-primary">{article.category}</span>
        <span className="h-1 w-1 rounded-full bg-foreground/30" />
      </>
    )}
    <span>{article.date}</span>
    {article.readTime && (
      <>
        <span className="h-1 w-1 rounded-full bg-foreground/30" />
        <span>{article.readTime}</span>
      </>
    )}
  </div>
);

const BusinessInsights = () => {
  const [active, setActive] = useState<Article | null>(null);

  const featured = businessinsights.find((a) => a.featured) ?? businessinsights[0];
  const rest = businessinsights.filter((a) => a !== featured);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Layout>
      <section className="relative py-20 overflow-hidden gradient-mesh">
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs">
                Insights
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold glow-text mb-12">
              Business <span className="text-primary">Insights</span>
            </h1>
          </motion.div>

          {/* Featured hero — full-bleed image with text overlaid */}
          {featured && (
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => setActive(featured)}
              className="group relative h-[440px] mb-16 rounded-2xl overflow-hidden cursor-pointer border border-primary/20"
            >
              <Cover article={featured} className="absolute inset-0 w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-10 max-w-2xl">
                <Meta article={featured} />
                <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                {featured.excerpt && (
                  <p className="text-foreground/80 leading-relaxed mb-5 line-clamp-2">
                    {featured.excerpt}
                  </p>
                )}
                <span className="text-primary font-medium inline-flex items-center gap-2">
                  Read full story <span aria-hidden>→</span>
                </span>
              </div>
            </motion.article>
          )}

          {/* The rest — grid that fills the page width */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-start">
            {rest.map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                onClick={() => setActive(article)}
                className="group cursor-pointer bg-black/30 border border-primary/20 rounded-xl overflow-hidden flex flex-col hover:border-primary/40 transition-colors"
              >
                <Cover article={article} className="h-52" />
                <div className="p-6 flex flex-col flex-1">
                  <Meta article={article} />
                  <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  {article.excerpt && (
                    <p className="text-foreground/70 text-sm leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  )}
                  <span className="mt-4 text-primary text-sm font-medium">Read more →</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Bigger view on click */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-background border border-primary/20 rounded-2xl overflow-hidden my-8"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close article"
                className="absolute top-4 right-4 z-10 h-9 w-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-primary hover:text-black transition-colors"
              >
                ✕
              </button>
              <Cover article={active} className="w-full h-72 md:h-96" />
              <div className="p-8 md:p-10">
                <Meta article={active} />
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                  {active.title}
                </h2>
                {active.content && (
                  <p className="text-foreground/80 leading-relaxed whitespace-pre-line text-lg">
                    {active.content}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default BusinessInsights;

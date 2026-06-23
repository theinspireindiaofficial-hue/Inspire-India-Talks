import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, TrendingUp } from "lucide-react";
import { businessinsights as rawInsights } from "../data/businessinsights";
import { highlightKeywords } from "@/lib/highlight";

/* Loose local type so this page compiles regardless of how
   src/data/businessinsights.ts is typed. */
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

/* "DD-MM-YYYY" -> sortable timestamp. Falls back to 0 if malformed. */
const toTime = (d: string): number => {
  const m = /^(\d{2})-(\d{2})-(\d{4})$/.exec(d?.trim() ?? "");
  if (!m) return 0;
  return new Date(+m[3], +m[2] - 1, +m[1]).getTime();
};

/* Newest first — so the latest story is always at the top. */
const articles = ([...(rawInsights as unknown as Article[])]).sort(
  (a, b) => toTime(b.date) - toTime(a.date)
);

const Cover = ({ article, className = "" }: { article: Article; className?: string }) => (
  <div className={`relative overflow-hidden bg-gradient-to-br from-primary/25 via-black/50 to-black ${className}`}>
    <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
      <span className="font-serif text-foreground/30 text-lg leading-snug">{article.title}</span>
    </div>
    <img
      src={article.image}
      alt={article.title}
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
      className="relative w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
  </div>
);

const MetaRow = ({ article }: { article: Article }) => (
  <div className="font-mono flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-widest text-foreground/55">
    {article.category && <span className="text-primary font-semibold">{article.category}</span>}
    {article.category && <span className="h-1 w-1 rounded-full bg-foreground/30" />}
    <span className="inline-flex items-center gap-1.5">
      <Calendar className="h-3 w-3" /> {article.date}
    </span>
    {article.readTime && (
      <>
        <span className="h-1 w-1 rounded-full bg-foreground/30" />
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-3 w-3" /> {article.readTime}
        </span>
      </>
    )}
  </div>
);

const BusinessInsights = () => {
  const [latest, ...rest] = articles;

  return (
    <Layout>
      {/* ===== Page header ===== */}
      <section className="relative pt-20 pb-10 overflow-hidden gradient-mesh">
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-primary" />
              <span className="font-mono text-primary font-medium tracking-[0.3em] uppercase text-[11px]">
                Independent Journalism
              </span>
              <span className="h-px w-8 bg-primary" />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold glow-text">
              Business <span className="text-primary">Insights</span>
            </h1>
            <p className="mt-5 text-foreground/60 max-w-2xl mx-auto text-lg font-light">
              Sharp reporting on the deals, markets, and founders shaping India's economy — newest first.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 pb-24">
        {/* ===== Latest / featured story ===== */}
        {latest && (
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group relative grid lg:grid-cols-2 gap-0 mb-20 rounded-3xl overflow-hidden border border-primary/20 bg-black/30 hover:border-primary/40 transition-colors"
          >
            <Link to={`/business-insights/${latest.id}`} className="absolute inset-0 z-20" aria-label={latest.title} />
            <Cover article={latest} className="h-72 lg:h-full min-h-[340px]" />
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="font-mono inline-flex items-center gap-2 self-start mb-5 rounded-full bg-primary/15 text-primary text-[11px] font-bold uppercase tracking-widest px-3 py-1.5">
                <TrendingUp className="h-3.5 w-3.5" /> Latest Story
              </div>
              <MetaRow article={latest} />
              <h2 className="font-serif text-3xl md:text-5xl font-bold leading-[1.1] mt-4 mb-4 group-hover:text-primary transition-colors">
                {latest.title}
              </h2>
              {latest.excerpt && (
                <p className="text-foreground/75 text-lg leading-relaxed line-clamp-3">
                  {highlightKeywords(latest.excerpt)}
                </p>
              )}
              <span className="mt-7 text-primary font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Read full story <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </motion.article>
        )}

        {/* ===== Section label ===== */}
        {rest.length > 0 && (
          <div className="flex items-center gap-4 mb-10">
            <h3 className="font-serif text-2xl md:text-3xl font-bold whitespace-nowrap">
              More <span className="text-primary">Stories</span>
            </h3>
            <span className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
          </div>
        )}

        {/* ===== Grid of the rest ===== */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {rest.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="group bg-black/30 border border-primary/20 rounded-2xl overflow-hidden flex flex-col hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              <Link to={`/business-insights/${article.id}`} className="flex flex-col flex-1">
                <Cover article={article} className="h-52" />
                <div className="p-6 flex flex-col flex-1">
                  <MetaRow article={article} />
                  <h3 className="font-serif text-xl font-bold leading-snug mt-3 mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  {article.excerpt && (
                    <p className="text-foreground/65 text-sm leading-relaxed line-clamp-3">
                      {highlightKeywords(article.excerpt)}
                    </p>
                  )}
                  <span className="mt-5 pt-4 border-t border-border/30 text-primary text-sm font-medium inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    Read more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default BusinessInsights;

import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { businessinsights, getBusinessInsightById } from "@/data/businessinsights";
import { highlightKeywords } from "@/lib/highlight";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";

const BusinessInsightDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = getBusinessInsightById(id || "");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [id]);

  if (!article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="font-serif text-3xl font-bold">Article not found</h1>
          <Link to="/business-insights" className="text-primary mt-4 inline-block">
            ← Back to Business Insights
          </Link>
        </div>
      </Layout>
    );
  }

  const paragraphs = (article.content ?? article.excerpt ?? "").split(/\n\s*\n/).filter(Boolean);
  const related = businessinsights.filter((a) => a.id !== article.id).slice(0, 4);

  return (
    <Layout>
      <Helmet>
        <title>{article.title} — Business Insights</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.image} />
      </Helmet>

      {/* ===== Centered section masthead ===== */}
      <div className="text-center pt-12 pb-8 border-b border-border/30">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="h-px w-8 bg-primary" />
          <span className="font-mono text-primary font-medium tracking-[0.3em] uppercase text-[11px]">
            Independent Journalism
          </span>
          <span className="h-px w-8 bg-primary" />
        </div>
        <Link to="/business-insights" className="inline-block">
          <h2 className="font-serif text-3xl md:text-4xl font-bold glow-text hover:opacity-90 transition-opacity">
            Business <span className="text-primary">Insights</span>
          </h2>
        </Link>
      </div>

      {/* ===== Headline block (above the image, no overlay) ===== */}
      <section className="container mx-auto px-4 md:px-8 pt-12 md:pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="font-mono flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.2em] text-foreground/65 mb-6">
            {article.category && (
              <>
                <span className="text-primary font-semibold">{article.category}</span>
                <span className="h-1 w-1 rounded-full bg-foreground/40" />
              </>
            )}
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3 w-3" /> {article.date}
            </span>
            {article.readTime && (
              <>
                <span className="h-1 w-1 rounded-full bg-foreground/40" />
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3 w-3" /> {article.readTime}
                </span>
              </>
            )}
          </div>

          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-[1.08] tracking-tight text-foreground">
            {article.title}
          </h1>

          {article.excerpt && (
            <p className="mt-6 text-lg md:text-2xl text-foreground/75 leading-relaxed font-light max-w-3xl mx-auto">
              {article.excerpt}
            </p>
          )}
        </motion.div>
      </section>

      {/* ===== Hero image (clean, no text over it) ===== */}
      <section className="container mx-auto px-4 md:px-8 pb-6">
        <div className="relative w-full max-h-[72vh] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-black/40 to-black flex items-center justify-center">
          <img
            src={article.image}
            alt={article.title}
            className="w-full max-h-[72vh] object-contain"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      </section>

      {/* ===== Body: two-column layout so the page fills its width ===== */}
      <section className="container mx-auto px-4 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left sticky rail */}
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <div className="lg:sticky lg:top-28 space-y-8">
              <Link
                to="/business-insights"
                className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> All stories
              </Link>

              <div className="space-y-4 text-sm">
                {article.category && (
                  <div className="border-b border-border/30 pb-3">
                    <p className="font-mono text-muted-foreground text-[11px] uppercase tracking-wider">Section</p>
                    <p className="font-medium text-primary mt-1">{article.category}</p>
                  </div>
                )}
                <div className="border-b border-border/30 pb-3">
                  <p className="font-mono text-muted-foreground text-[11px] uppercase tracking-wider">Published</p>
                  <p className="font-medium text-foreground mt-1">{article.date}</p>
                </div>
                {article.readTime && (
                  <div className="border-b border-border/30 pb-3">
                    <p className="font-mono text-muted-foreground text-[11px] uppercase tracking-wider">Reading time</p>
                    <p className="font-medium text-foreground mt-1">{article.readTime}</p>
                  </div>
                )}
              </div>
            </div>
          </aside>

          {/* Main article column */}
          <article className="lg:col-span-6 order-1 lg:order-2">
            <div className="max-w-[68ch]">
              {paragraphs.map((para, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  className={`font-serif text-xl leading-[1.85] text-foreground/85 mb-7 ${
                    idx === 0
                      ? "first-letter:text-7xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] first-letter:mt-1"
                      : ""
                  }`}
                >
                  {highlightKeywords(para)}
                </motion.p>
              ))}

              <div className="mt-12 pt-8 border-t border-border/40">
                <Link
                  to="/business-insights"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  <ArrowLeft className="h-4 w-4" /> Back to Business Insights
                </Link>
              </div>
            </div>
          </article>

          {/* Right rail — more stories */}
          <aside className="lg:col-span-3 order-3">
            <div className="lg:sticky lg:top-28">
              <h3 className="font-serif text-lg font-bold mb-6 pb-3 border-b border-border/40">
                More Stories
              </h3>
              <div className="space-y-6">
                {related.map((r) => (
                  <Link key={r.id} to={`/business-insights/${r.id}`} className="group block">
                    <div className="h-32 w-full rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 via-black/40 to-black mb-3">
                      <img
                        src={r.image}
                        alt={r.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </div>
                    {r.category && (
                      <span className="font-mono text-[10px] uppercase tracking-widest text-primary">{r.category}</span>
                    )}
                    <h4 className="font-serif text-base font-bold leading-snug mt-1 group-hover:text-primary transition-colors">
                      {r.title}
                    </h4>
                    <span className="mt-2 text-primary text-xs font-medium inline-flex items-center gap-1">
                      Read <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export default BusinessInsightDetail;

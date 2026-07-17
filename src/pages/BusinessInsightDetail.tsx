import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { businessinsights, getBusinessInsightById } from "@/data/businessinsights";
import { highlightKeywords } from "@/lib/highlight";
import { ArrowLeft, ArrowRight, Calendar, Clock, Facebook, Linkedin, Twitter } from "lucide-react";

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

      <div className="container mx-auto px-4 md:px-8 pt-10 md:pt-14 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* ===== Main article column ===== */}
          <article className="lg:col-span-8">
            {/* Breadcrumb / section tag */}
            <div className="flex items-center gap-2 text-sm mb-5">
              <Link to="/business-insights" className="text-primary font-bold hover:underline">
                Business Insights
              </Link>
              {article.category && (
                <>
                  <span className="text-border">/</span>
                  <span className="text-muted-foreground">{article.category}</span>
                </>
              )}
            </div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-serif text-3xl md:text-[2.5rem] font-extrabold leading-[1.15] tracking-tight text-foreground"
            >
              {article.title}
            </motion.h1>

            {/* Dek / standfirst */}
            {article.excerpt && (
              <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed font-serif italic">
                {article.excerpt}
              </p>
            )}

            {/* Byline row */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-border py-4">
              <div className="flex items-center gap-x-5 gap-y-1 flex-wrap text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" /> {article.date}
                </span>
                {article.readTime && (
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> {article.readTime}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Twitter className="h-4 w-4 hover:text-primary transition-colors cursor-pointer" />
                <Facebook className="h-4 w-4 hover:text-primary transition-colors cursor-pointer" />
                <Linkedin className="h-4 w-4 hover:text-primary transition-colors cursor-pointer" />
              </div>
            </div>

            {/* Hero image */}
            <figure className="mt-8">
              <div className="relative w-full bg-muted border border-border">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full max-h-[480px] object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <figcaption className="mt-2 text-xs text-muted-foreground border-l-2 border-primary pl-2">
                {article.title}
              </figcaption>
            </figure>

            {/* Body */}
            <div className="mt-10">
              {paragraphs.map((para, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  className="font-sans text-[18px] leading-[1.8] text-foreground/90 mb-6"
                >
                  {highlightKeywords(para)}
                </motion.p>
              ))}

              <div className="mt-10 pt-6 border-t border-border">
                <Link
                  to="/business-insights"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  <ArrowLeft className="h-4 w-4" /> Back to Business Insights
                </Link>
              </div>
            </div>
          </article>

          {/* ===== Right rail — other news, TNM "picks" style ===== */}
          {related.length > 0 && (
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <h3 className="font-serif text-lg font-bold mb-1 text-foreground">
                  Other Stories
                </h3>
                <div className="h-1 w-10 bg-primary mb-6" />
                <div className="divide-y divide-border border-t border-b border-border">
                  {related.map((r) => (
                    <Link key={r.id} to={`/business-insights/${r.id}`} className="group flex gap-4 py-5">
                      <div className="h-20 w-28 shrink-0 overflow-hidden bg-muted border border-border">
                        <img
                          src={r.image}
                          alt={r.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.display = "none";
                          }}
                        />
                      </div>
                      <div className="min-w-0">
                        {r.category && (
                          <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-bold">
                            {r.category}
                          </span>
                        )}
                        <h4 className="font-serif text-sm font-bold leading-snug mt-1 text-foreground group-hover:text-primary transition-colors line-clamp-3">
                          {r.title}
                        </h4>
                        <span className="mt-1.5 block text-muted-foreground text-xs">
                          {r.date}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  to="/business-insights"
                  className="mt-6 inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:gap-2.5 transition-all"
                >
                  View all stories <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </aside>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BusinessInsightDetail;

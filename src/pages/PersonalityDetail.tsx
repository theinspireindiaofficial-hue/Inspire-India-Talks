import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { getPersonalityById, getPersonalitiesByCategory } from "@/data/personalities";
import { ArrowLeft, Quote, ArrowRight } from "lucide-react";
import NewsletterSheet from "@/components/NewsletterSheet";

const PersonalityDetail = () => {
  const { id } = useParams<{ id: string }>();
  const person = getPersonalityById(id || "");
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const heroRadius = useTransform(scrollYProgress, [0, 1], [0, 24]);

  if (!person) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-serif text-3xl font-bold">Personality not found</h1>
          <Link to="/" className="text-primary mt-4 inline-block">← Back to Home</Link>
        </div>
      </Layout>
    );
  }

  const related = getPersonalitiesByCategory(person.categorySlug).filter(p => p.id !== person.id).slice(0, 4);

  // Helper to render text with **bold** and *italic* support
  const renderRichText = (text: string) => {
    // Handle bold: **text**
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-primary font-bold">{part.slice(2, -2)}</strong>;
      }
      // Handle italic: *text* (simple version)
      const subParts = part.split(/(\*.*?\*)/g);
      return subParts.map((sub, j) => {
        if (sub.startsWith('*') && sub.endsWith('*')) {
          return <em key={`${i}-${j}`} className="italic text-foreground/90">{sub.slice(1, -1)}</em>;
        }
        return sub;
      });
    });
  };

  return (
    <Layout>
      <Helmet>
        <title>{person.name} — Inspire India Talks</title>
        <meta name="description" content={person.story.substring(0, 160) + "..."} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://inspireindiatalks.com/personality/${person.id}`} />
        <meta property="og:title" content={`${person.name} — Inspire India Talks`} />
        <meta property="og:description" content={`${person.title}. ${person.knownFor}`} />
        <meta property="og:image" content={`https://inspireindiatalks.com${person.image}`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://inspireindiatalks.com/personality/${person.id}`} />
        <meta name="twitter:title" content={`${person.name} — Inspire India Talks`} />
        <meta name="twitter:description" content={person.quote} />
        <meta name="twitter:image" content={`https://inspireindiatalks.com${person.image}`} />
      </Helmet>
      {/* Hero Image with scroll shrink */}
      <motion.section
        ref={heroRef}
        style={{ scale: heroScale, opacity: heroOpacity, borderRadius: heroRadius }}
        className="relative h-[60vh] md:h-[70vh] overflow-hidden origin-top"
      >
        <img
          src={person.image}
          alt={person.name}
          className="personality-hero-image"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&size=1200&background=1a1a2e&color=f97316&font-size=0.25&bold=true`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto">
            <Link to={`/category/${person.categorySlug}`} className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors mb-4">
              <ArrowLeft className="h-4 w-4" /> Back to {person.category}
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="font-mono text-primary text-[11px] uppercase tracking-[0.25em] font-medium mb-3">{person.category}</p>
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground glow-text leading-[1.02]">{person.name}</h1>
              <p className="text-muted-foreground mt-3 text-lg md:text-xl font-light">{person.title}</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ===== Editorial facts band ===== */}
      <div className="border-b border-border/40 bg-muted/40">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border/40">
            {[
              { label: "Born", value: person.born },
              { label: "Profession", value: person.profession },
              { label: "Known For", value: person.knownFor },
            ].map(({ label, value }) => (
              <div key={label} className="py-6 sm:px-8 first:sm:pl-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-2">{label}</p>
                <p className="font-serif text-base md:text-lg text-foreground/90 leading-snug">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Story Section - Editorial Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 relative inline-block">
                The Inspiring Story
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full" />
              </h2>

              <div className="prose prose-invert max-w-none">
                {person.story.split('\n\n').map((paragraph, idx) => {
                  const isHighlight = paragraph.trim().startsWith('Key:') || paragraph.trim().startsWith('Crucially:');
                  
                  return (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="relative group"
                    >
                      {/* Drop Cap for first paragraph */}
                      {idx === 0 ? (
                        <p className="font-serif text-xl md:text-2xl text-foreground/80 leading-relaxed mb-12 first-letter:text-7xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:mt-1">
                          {renderRichText(paragraph)}
                        </p>
                      ) : isHighlight ? (
                        <div className="my-12 p-8 md:p-10 bg-primary/5 border-l-4 border-primary rounded-r-2xl glass-card">
                          <p className="font-serif text-xl md:text-2xl text-foreground font-medium leading-relaxed italic">
                            {renderRichText(paragraph.replace(/^(Key:|Crucially:)\s*/, ''))}
                          </p>
                        </div>
                      ) : (
                        <p className="font-serif text-xl md:text-2xl text-foreground/80 leading-relaxed mb-12">
                          {renderRichText(paragraph)}
                        </p>
                      )}

                      {/* Pull Quote - Inserted after the 1st paragraph */}
                      {idx === 0 && person.story.split('\n\n').length > 1 && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          className="my-16 py-12 px-8 md:px-16 border-y border-primary/20 bg-primary/5 relative overflow-hidden group rounded-3xl"
                        >
                          <Quote className="absolute -top-4 -left-4 h-32 w-32 text-primary opacity-5 rotate-12" />
                          <div className="relative z-10 text-center">
                            <p className="font-serif text-3xl md:text-4xl italic font-bold text-foreground leading-tight mb-6 glow-text">
                              "{person.quote}"
                            </p>
                            <div className="flex items-center justify-center gap-4">
                              <div className="h-px w-12 bg-primary/40" />
                              <span className="text-primary text-sm uppercase tracking-widest font-black">{person.name}</span>
                              <div className="h-px w-12 bg-primary/40" />
                            </div>
                          </div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Achievements Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pt-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">Key Achievements</h2>
                <div className="h-px flex-grow bg-gradient-to-r from-border/60 to-transparent" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {person.achievements.map((a, i) => (
                  <div key={i} className="flex items-start gap-4 glass-card p-6 border-l-2 border-l-primary/30 hover:border-l-primary transition-all duration-300 hover:translate-x-1 group">
                    <span className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-sm font-bold flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">{i + 1}</span>
                    <span className="text-foreground/90 font-medium pt-1.5 leading-snug">{a}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {person.authorName && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <div className="mt-10 pt-6 border-t border-border/40 flex items-center gap-2 text-sm text-muted-foreground bg-primary/5 p-4 rounded-xl">
                  <span className="italic">Story curated by</span>
                  {person.authorLinkedin ? (
                    <a
                      href={person.authorLinkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-bold hover:underline flex items-center gap-1"
                    >
                      {person.authorName}
                      <ArrowRight className="h-3 w-3 -rotate-45" />
                    </a>
                  ) : (
                    <span className="font-bold text-foreground">{person.authorName}</span>
                  )}
                </div>
              </motion.div>
            )}

            {/* <div className="border-t border-border pt-8">
              <p className="font-serif text-xl font-bold text-foreground">Enjoyed this story?</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Subscribe for more inspiring Indian journeys, delivered weekly.
              </p>
              <NewsletterSheet
                source="personality-article"
                triggerLabel="Subscribe"
                triggerClassName="mt-4"
              />
            </div> */}
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-28 self-start">
            {related.length > 0 && (
              <div className="glass-card p-6">
                <h3 className="font-serif text-lg font-bold mb-5">Related Personalities</h3>
                <div className="space-y-4">
                  {related.map(r => (
                    <Link key={r.id} to={`/personality/${r.id}`} className="flex items-center gap-3 group">
                      <img
                        src={r.image}
                        alt={r.name}
                        className="h-12 w-12 rounded-xl object-cover bg-muted"
                        style={{ objectPosition: 'center 30%' }}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(r.name)}&size=96&background=1a1a2e&color=f97316`;
                        }}
                      />
                      <div>
                        <p className="text-sm font-medium group-hover:text-primary transition-colors">{r.name}</p>
                        <p className="text-xs text-muted-foreground">{r.title}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PersonalityDetail;

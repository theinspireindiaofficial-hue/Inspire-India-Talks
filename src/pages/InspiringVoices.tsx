import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import { categories, personalities, getFeaturedPersonalities, getPersonalitiesByCategory } from "@/data/personalities";
import type { Personality } from "@/data/personalities";

const locationOf = (p: Personality): string => {
  if (!p.born) return "";
  const parts = p.born.split(",");
  return parts.length > 1 ? parts[parts.length - 1].trim() : "";
};

const Portrait = ({ p, className = "", fit = "object-cover object-top" }: { p: Personality; className?: string; fit?: string }) => (
  <img
    src={p.image}
    alt={p.name}
    loading="lazy"
    className={`${fit} ${className}`}
    onError={(e) => {
      (e.currentTarget as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(p.name)}&size=800&background=1a1a2e&color=f97316&bold=true`;
    }}
  />
);

const Kicker = ({ p }: { p: Personality }) => (
  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
    {p.category}{locationOf(p) && ` · ${locationOf(p)}`}
  </p>
);

const InspiringVoices = () => {
  const featured = getFeaturedPersonalities();
  const [lead, ...featRest] = featured;
  const grid = featRest.slice(0, 6); // 6 featured in the asymmetric grid
  const archive = [...personalities]
    .sort((a, b) => (b.addedAt ? new Date(b.addedAt).getTime() : 0) - (a.addedAt ? new Date(a.addedAt).getTime() : 0))
    .slice(0, 10);

  return (
    <Layout>
      {/* ===== Masthead ===== */}
      <section className="relative overflow-hidden gradient-mesh border-b border-border/40">
        <div className="container mx-auto px-4 md:px-8 pt-16 pb-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-primary" />
              <span className="font-mono text-primary font-medium tracking-[0.3em] uppercase text-[11px]">
                Inspiring Voices
              </span>
              <span className="h-px w-8 bg-primary" />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold glow-text leading-[1.02]">
              The people <span className="text-primary">shaping</span> our era.
            </h1>
            <p className="mt-6 text-foreground/65 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              {personalities.length}+ profiles of India's founders, civil servants, sports icons, healers, and the women
              rewriting the conversation — told as stories, not résumés.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 py-16">
        {/* ===== Lead voice ===== */}
        {lead && (
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
            <Link
              to={`/personality/${lead.id}`}
              className="group grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-primary/20 bg-black/30 hover:border-primary/40 transition-colors"
            >
              <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px] overflow-hidden bg-gradient-to-br from-primary/20 via-black/40 to-black">
                <Portrait p={lead} fit="object-contain object-center" className="absolute inset-0 w-full h-full p-4 transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/55 mb-5">
                  <span className="text-primary font-semibold">Voice of the Week</span>
                </div>
                <Kicker p={lead} />
                <h2 className="font-serif text-4xl md:text-6xl font-bold leading-[1.04] mt-2 group-hover:text-primary transition-colors">
                  {lead.name}
                </h2>
                <p className="mt-5 font-serif text-xl md:text-2xl text-foreground/80 leading-relaxed">
                  {lead.knownFor}
                </p>
                <blockquote className="mt-6 border-l-2 border-primary pl-5 italic text-foreground/70 leading-relaxed">
                  "{lead.quote}"
                </blockquote>
                <span className="mt-8 inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  Read full profile <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        )}

        {/* ===== Asymmetric featured grid ===== */}
        <div className="flex items-center gap-4 mb-10">
          <h3 className="font-serif text-2xl md:text-3xl font-bold whitespace-nowrap">
            Featured <span className="text-primary">this month</span>
          </h3>
          <span className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {grid.map((p, i) => {
            const big = i === 0; // first tile spans large for asymmetry
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
                className={big ? "sm:col-span-2 sm:row-span-2" : ""}
              >
                <Link
                  to={`/personality/${p.id}`}
                  className="group relative block h-full rounded-2xl overflow-hidden border border-primary/15 hover:border-primary/40 transition-colors bg-gradient-to-br from-primary/15 via-black/40 to-black"
                >
                  <Portrait p={p} className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Kicker p={p} />
                    <h4 className={`font-serif font-bold text-white leading-tight mt-1.5 group-hover:text-primary transition-colors ${big ? "text-3xl md:text-4xl" : "text-2xl"}`}>
                      {p.name}
                    </h4>
                    <p className={`text-white/75 leading-snug mt-2 ${big ? "text-base line-clamp-3 max-w-xl" : "text-sm line-clamp-2"}`}>
                      {p.knownFor}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* ===== Browse by category (narrative names + taglines) ===== */}
        <div className="flex items-center gap-4 mt-24 mb-10">
          <h3 className="font-serif text-2xl md:text-3xl font-bold whitespace-nowrap">
            Browse by <span className="text-primary">theme</span>
          </h3>
          <span className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => {
            const inCat = getPersonalitiesByCategory(cat.slug);
            const count = inCat.length;
            const coverImg = inCat[0]?.image;
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.06 }}
              >
                <Link
                  to={`/category/${cat.slug}`}
                  className="group relative block h-64 rounded-2xl border border-primary/15 overflow-hidden hover:border-primary/40 transition-all bg-gradient-to-br from-primary/20 via-black/50 to-black"
                >
                  {coverImg && (
                    <img
                      src={coverImg}
                      alt={cat.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-top opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-75"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
                  <div className="relative h-full flex flex-col justify-end p-6">
                    <div className="absolute top-5 left-6 right-6 flex items-baseline justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-primary">{count} Voices</span>
                    </div>
                    <h4 className="font-serif text-2xl font-bold text-white group-hover:text-primary transition-colors">{cat.name}</h4>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed line-clamp-2">{cat.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-primary text-xs font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 group-hover:gap-2.5 transition-all">
                      Explore <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* ===== Quiet full archive ===== */}
        <div className="flex items-center gap-4 mt-24 mb-8">
          <h3 className="font-serif text-2xl md:text-3xl font-bold whitespace-nowrap">
            The <span className="text-primary">archive</span>
          </h3>
          <span className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        <div className="divide-y divide-border/40 border-y border-border/40">
          {archive.map((p, i) => (
            <Link
              key={p.id}
              to={`/personality/${p.id}`}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-6 py-4"
            >
              <div className="h-14 w-14 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 via-black/40 to-black flex-shrink-0">
                <Portrait p={p} className="w-full h-full transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <span className="font-serif text-lg md:text-xl font-bold group-hover:text-primary transition-colors">{p.name}</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-foreground/45">
                    {p.category}{locationOf(p) && ` · ${locationOf(p)}`}
                  </span>
                </div>
                <p className="text-sm text-foreground/60 leading-snug line-clamp-1 mt-0.5">{p.knownFor}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default InspiringVoices;

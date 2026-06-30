import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import { getPersonalitiesByCategory, getCategoryBySlug, isRecentlyAdded } from "@/data/personalities";
import type { Personality } from "@/data/personalities";

/* Pull a short location (the part after the last comma in `born`). */
const locationOf = (p: Personality): string => {
  if (!p.born) return "";
  const parts = p.born.split(",");
  return parts.length > 1 ? parts[parts.length - 1].trim() : "";
};

const CategoryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategoryBySlug(slug || "");
  const people = getPersonalitiesByCategory(slug || "");

  if (!category) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-serif text-3xl font-bold">Category not found</h1>
          <Link to="/" className="text-primary mt-4 inline-block">← Back to Home</Link>
        </div>
      </Layout>
    );
  }

  const [lead, ...rest] = people;

  return (
    <Layout>
      {/* ===== Editorial masthead ===== */}
      <section className="relative overflow-hidden gradient-mesh border-b border-border/40">
        <div className="container mx-auto px-4 md:px-8 pt-16 pb-14">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/55 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Inspiring Voices
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.02] tracking-tight glow-text">
              {category.name}
            </h1>
            <p className="text-muted-foreground mt-6 max-w-2xl text-lg md:text-xl font-light leading-relaxed">
              {category.description}
            </p>
            <div className="mt-8 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/55">
              <span className="text-primary font-semibold">{people.length} Profiles</span>
              <span className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 py-16">
        {/* ===== Lead profile — large editorial feature ===== */}
        {lead && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <Link
              to={`/personality/${lead.id}`}
              className="group grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-primary/20 bg-black/30 hover:border-primary/40 transition-colors"
            >
              <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[460px] overflow-hidden bg-gradient-to-br from-primary/20 via-black/40 to-black">
                <img
                  src={lead.image}
                  alt={lead.name}
                  className="absolute inset-0 w-full h-full object-contain object-center p-4 transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(lead.name)}&size=800&background=1a1a2e&color=f97316&bold=true`;
                  }}
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/55 mb-5">
                  <span className="text-primary font-semibold">Featured Voice</span>
                  {isRecentlyAdded(lead.id, 60) && (
                    <>
                      <span className="h-1 w-1 rounded-full bg-foreground/30" />
                      <span>New</span>
                    </>
                  )}
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold leading-[1.05] group-hover:text-primary transition-colors">
                  {lead.name}
                </h2>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-foreground/55">
                  {lead.profession}{locationOf(lead) && ` · ${locationOf(lead)}`}
                </p>
                <blockquote className="mt-7 font-serif text-xl md:text-2xl italic text-foreground/80 leading-relaxed border-l-2 border-primary pl-5">
                  "{lead.quote}"
                </blockquote>
                <span className="mt-8 inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  Read full profile <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        )}

        {/* ===== The rest — numbered editorial grid ===== */}
        {rest.length > 0 && (
          <>
            <div className="flex items-center gap-4 mb-10">
              <h3 className="font-serif text-2xl md:text-3xl font-bold whitespace-nowrap">
                More <span className="text-primary">Voices</span>
              </h3>
              <span className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((person, i) => (
                <motion.div
                  key={person.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
                >
                  <Link
                    to={`/personality/${person.id}`}
                    className="group block rounded-2xl overflow-hidden border border-primary/15 bg-black/30 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 h-full"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-primary/15 via-black/40 to-black">
                      <span className="absolute top-4 left-4 z-20 font-mono text-xs font-semibold text-white/70 bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1">
                        {String(i + 2).padStart(2, "0")}
                      </span>
                      <img
                        src={person.image}
                        alt={person.name}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&size=600&background=1a1a2e&color=f97316&bold=true`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-1.5">
                          {person.profession}{locationOf(person) && ` · ${locationOf(person)}`}
                        </p>
                        <h4 className="font-serif text-2xl font-bold text-white leading-tight group-hover:text-primary transition-colors">
                          {person.name}
                        </h4>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-foreground/70 leading-relaxed line-clamp-2">
                        {person.knownFor}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-primary text-xs font-medium uppercase tracking-wider group-hover:gap-2.5 transition-all">
                        Read profile <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </section>
    </Layout>
  );
};

export default CategoryDetail;

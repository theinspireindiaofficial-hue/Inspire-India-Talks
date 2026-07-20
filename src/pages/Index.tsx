import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import Layout from "@/components/Layout";
import PersonalityCard from "@/components/PersonalityCard";
import { categories, getFeaturedPersonalities, personalities } from "@/data/personalities";
import { businessinsights } from "@/data/businessinsights";
import { ArrowRight, Users, BookOpen, Star, Play, Send, Briefcase, Crown, Stethoscope, Leaf, Trophy, Shield, Zap, Radio } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import NewsletterSheet from "@/components/NewsletterSheet";

const categoryIcons: Record<string, React.ReactNode> = {
  entrepreneurs: <Briefcase className="h-8 w-8" />,
  "she-talks": <Crown className="h-8 w-8" />,
  "teachers-educators": <BookOpen className="h-8 w-8" />,
  "medical-heroes": <Stethoscope className="h-8 w-8" />,
  environmentalists: <Leaf className="h-8 w-8" />,
  "sports-icons": <Trophy className="h-8 w-8" />,
  "indian-heroes": <Shield className="h-8 w-8" />,
  "young-achievers": <Zap className="h-8 w-8" />,
  others: <Users className="h-8 w-8" />,
};

const WEB3FORMS_KEY = "30ad2072-0d0d-4d0b-8c55-ebeb571f65e4";

const Index = () => {
  const featured = getFeaturedPersonalities();
  const tickerItems = [...businessinsights]
    .slice(0, 6)
    .map((a) => a.title);
  const heroRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  const sortedPersonalities = [...personalities].sort((a, b) => {
    const dateA = a.addedAt ? new Date(a.addedAt).getTime() : 0;
    const dateB = b.addedAt ? new Date(b.addedAt).getTime() : 0;
    return dateB - dateA;
  });

  const storyOfWeek = sortedPersonalities[0] || personalities[0];

  return (
    <div ref={pageRef} onMouseMove={handleMouseMove} className="relative">
      {/* Cursor Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y - window.scrollY}px, hsl(20 78% 42% / 0.06), transparent 40%)`,
        }}
      />
      <Layout>
        {/* Newsletter subscribe — stays in its original homepage position */}
        {/* ===== Live ticker strip — real headlines, not decoration ===== */}
        {tickerItems.length > 0 && (
          <div className="bg-foreground text-background overflow-hidden">
            <div className="container mx-auto px-4 flex items-center gap-4 py-2.5">
              <span className="shrink-0 inline-flex items-center gap-1.5 text-primary text-[11px] font-bold uppercase tracking-widest">
                <Radio className="h-3 w-3 animate-pulse" /> Latest
              </span>
              <div className="relative flex-1 overflow-hidden">
                <div className="flex whitespace-nowrap animate-marquee">
                  {[...tickerItems, ...tickerItems].map((t, i) => (
                    <span key={i} className="text-xs md:text-sm text-background/85 mx-6">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Newsletter subscribe button — static, sits just below the Latest banner */}
        <div className="container mx-auto flex justify-end px-4 pt-4">
          <NewsletterSheet source="home-hero" triggerLabel="Newsletter" />
        </div>

        <section ref={heroRef} className="relative min-h-[88vh] flex items-center overflow-hidden gradient-mesh">
          {/* Textured backdrop: subtle dotted grid + soft blobs */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 opacity-[0.28]"
              style={{
                backgroundImage: "radial-gradient(hsl(220 12% 78%) 1px, transparent 1px)",
                backgroundSize: "26px 26px",
                maskImage: "radial-gradient(ellipse 75% 65% at 50% 40%, black 35%, transparent 92%)",
              }}
            />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/[0.03] rounded-full blur-3xl" />
          </div>

          <motion.div style={{ opacity: heroOpacity, y: heroY }} className="container mx-auto px-4 relative z-10 py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              {/* Left — Editorial masthead */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="lg:col-span-7"
              >
                <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/60 backdrop-blur-sm px-4 py-1.5 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-foreground/70 font-medium tracking-[0.18em] uppercase text-[11px]">
                    An Independent Editorial Platform
                  </span>
                </div>

                <h1 className="font-serif text-[2.75rem] sm:text-6xl xl:text-7xl font-bold leading-[1.02] tracking-tight text-foreground">
                  The people building
                  <br className="hidden sm:block" /> a new{" "}
                  <span className="text-primary">India</span> — and the
                  <br className="hidden sm:block" /> ideas behind them.
                </h1>

                <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                  In-depth profiles, founder journeys and business insight —
                  reported, written and fact-checked by our editorial team.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    to="/inspiring-voices"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
                  >
                    Read the Stories <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/events"
                    className="inline-flex items-center gap-2 text-foreground px-4 py-3.5 rounded-lg font-medium border border-border hover:border-foreground/40 hover:bg-secondary transition-all"
                  >
                    <Play className="h-4 w-4 text-primary" /> Upcoming Events
                  </Link>
                </div>

                {/* Credibility bar — clean, no collage */}
                <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border/70 pt-7">
                  <div>
                    <p className="font-serif text-2xl font-bold text-foreground leading-none">{personalities.length}+</p>
                    <p className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1.5">Stories reported</p>
                  </div>
                  <div className="h-8 w-px bg-border" />
                  <div>
                    <p className="font-serif text-2xl font-bold text-foreground leading-none">{categories.length}</p>
                    <p className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1.5">Editorial desks</p>
                  </div>
                  <div className="h-8 w-px bg-border hidden sm:block" />
                  <div className="hidden sm:block">
                    <p className="font-serif text-2xl font-bold text-foreground leading-none">Weekly</p>
                    <p className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1.5">New features</p>
                  </div>
                </div>
              </motion.div>

              {/* Right — Feature media, straight and framed */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="hidden lg:block relative lg:col-span-5"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-border shadow-2xl shadow-black/10">
                  <video
                    src="/images/events/0306(1).mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover scale-[1.35]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />

                  {/* Top corner tag */}
                  <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-white/90">On the ground</span>
                  </div>

                  {/* Caption */}
                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <p className="text-[11px] font-medium uppercase tracking-widest text-primary mb-1.5">Featured Event</p>
                    <p className="font-serif text-xl font-bold text-white leading-snug">
                      Inspire India Talks × IIIT Delhi
                    </p>
                    <p className="text-sm text-white/70 mt-1">Conversations with India's changemakers.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Story of the Week */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs">Story of the Week</span>
          </div>
          <Link to={`/personality/${storyOfWeek.id}`} className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 glass-card-hover overflow-hidden">
              <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img
                  src={storyOfWeek.image}
                  alt={storyOfWeek.name}
                  className="personality-image group-hover:scale-105 transition-transform duration-700 h-full"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <p className="text-xs font-medium text-primary uppercase tracking-widest mb-3">{storyOfWeek.category}</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors">{storyOfWeek.name}</h2>
                <p className="text-muted-foreground mt-2">{storyOfWeek.title}</p>
                <p className="text-foreground/70 mt-6 leading-relaxed line-clamp-4">{storyOfWeek.story.substring(0, 300)}...</p>
                <blockquote className="mt-6 pl-4 border-l-2 border-primary italic text-foreground/80">
                  "{storyOfWeek.quote}"
                </blockquote>
                <div className="flex items-center gap-2 text-primary font-medium mt-8 group-hover:gap-3 transition-all">
                  Read Full Story <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* Featured Personalities Slider */}
        <section className="container mx-auto px-4 py-20 overflow-hidden">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-primary" />
                <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs">Featured</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Icons of India</h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  const el = document.getElementById("featured-slider");
                  if (el) el.scrollBy({ left: -400, behavior: "smooth" });
                }}
                className="h-12 w-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <ArrowRight className="h-5 w-5 rotate-180" />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("featured-slider");
                  if (el) el.scrollBy({ left: 400, behavior: "smooth" });
                }}
                className="h-12 w-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div
            id="featured-slider"
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {featured.map((person, i) => (
              <div key={person.id} className="min-w-[300px] md:min-w-[350px] snap-start">
                <PersonalityCard person={person} index={i} isFeatured={true} />
              </div>
            ))}
          </div>
        </section>

       {/* Categories — With Lucide Icons */}
        <section className="relative py-24 overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl -z-10 opacity-30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
          </div>

          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-10 bg-primary" />
                  <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs">Explore by Interest</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold">Browse {personalities.length} Inspiring Voices</h2>
                <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                  Discover stories of excellence across diverse fields that shape the spirit of modern India.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((cat, i) => {
                // Uses cat.image if you add one to your data; otherwise falls back
                // to the image of the first personality in that category.
                const catImage =
                  (cat as any).image ||
                  personalities.find(
                    (p) => p.category === cat.name || p.category === cat.slug
                  )?.image;

                return (
                  <motion.div
                    key={cat.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.6 }}
                  >
                    <Link
                      to={`/category/${cat.slug}`}
                      className="group relative block h-80 overflow-hidden rounded-3xl border border-white/5 transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
                    >
                      {/* Full-bleed image */}
                      {catImage ? (
                        <img
                          src={catImage}
                          alt={cat.name}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/5" />
                      )}

                      {/* Dark gradient so text stays readable, regardless of page theme */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 transition-all duration-500 group-hover:from-black/95 group-hover:via-black/60" />

                      {/* Content pinned to the bottom, over the image */}
                      <div className="absolute inset-0 z-10 flex flex-col justify-end p-7">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary ring-1 ring-primary/30 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/30">
                          {categoryIcons[cat.slug] || <Star className="h-7 w-7" />}
                        </div>

                        <h3 className="font-serif text-2xl font-bold text-white drop-shadow-sm group-hover:text-primary transition-colors duration-300">
                          {cat.name}
                        </h3>
                        <p className="mt-2 text-sm text-white/75 leading-relaxed line-clamp-2">
                          {cat.description}
                        </p>

                        <div className="mt-4 flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wide opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                          View Collection <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Quote */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="h-px w-16 bg-primary mx-auto mb-8" />
            <blockquote className="font-serif text-2xl md:text-4xl italic text-foreground leading-relaxed glow-text">
              "I don't believe in taking right decisions. I take decisions and then make them right."
            </blockquote>
            <p className="mt-6 text-primary font-medium tracking-wider">— Ratan Tata</p>
          </div>
        </section>

        {/* Registration Form */}
        <RegistrationSection />

      </Layout>
    </div>
  );
};

/* ─── Registration Form Component ─── */
const RegistrationSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("subject", "New Event Registration — Inspire India Talks");
    formData.append("from_name", "Inspire India Talks — Registration");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        toast({ title: "Registration Received! ✅", description: "We'll review your profile and send a confirmation email soon." });
        (e.target as HTMLFormElement).reset();
      } else {
        toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Network error. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fields = [
    { name: "name", label: "Full Name", type: "text", required: true, placeholder: "Your full name" },
    { name: "email", label: "Email Address", type: "email", required: true, placeholder: "you@example.com" },
    { name: "university", label: "University / Organization", type: "text", required: false, placeholder: "Where are you from?" },
    { name: "interest", label: "Area of Interest", type: "text", required: false, placeholder: "Leadership, Tech, etc." },
  ];

  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-3xl overflow-hidden"
      >
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[80px]" />
        <div className="absolute inset-0 border border-primary/10 rounded-3xl" />

        <div className="relative z-10 p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left — Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-12 bg-primary" />
                  <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs">Register Now</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Attend an <br /><span className="text-primary">Inspire Talk</span>
                </h2>
                <p className="mt-6 leading-relaxed max-w-md text-lg text-foreground/75">

                  Register your interest to attend our upcoming events. We'll review your profile and send a confirmation if selected.
                </p>

                <div className="mt-8 space-y-4">
                  {["Curated audience of changemakers", "Exclusive networking sessions", "Priority access to future events"].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-foreground/70 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-5">
                {fields.map((field) => (
                  <div key={field.name} className="relative">
                    <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2 block">
                      {field.label} {field.required && <span className="text-primary">*</span>}
                    </label>
                    <Input
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      placeholder={field.placeholder}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      className={`bg-background/30 border-border/30 rounded-xl h-13 text-base transition-all duration-300 ${focusedField === field.name ? "border-primary/50 shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]" : ""
                        }`}
                    />
                  </div>
                ))}
                <Button
                  type="submit"
                  className="w-full rounded-xl py-7 text-base font-medium mt-2 hover:shadow-lg hover:shadow-primary/20 transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    <><Send className="h-4 w-4 mr-2" /> Register Interest</>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Index;

import Layout from "@/components/Layout";
import SectionLabel from "@/components/SectionLabel";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Compass,
  Handshake,
  Megaphone,
  Quote,
  Rocket,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

/* -------------------------------- DATA -------------------------------- */
const heroStats = [
  { value: "50+", label: "Voices Documented" },
  { value: "12+", label: "States Covered" },
  { value: "40+", label: "Sectors Explored" },
];

const heroTicker = [
  "Bihar", "Jharkhand", "Odisha", "Uttar Pradesh", "Madhya Pradesh",
  "Maharashtra", "Karnataka", "Tamil Nadu", "Assam", "Rajasthan", "Punjab", "Kerala",
];

const missionPillars = [
  { icon: Sparkles, title: "Inspire", text: "Share real journeys that make ambition feel close, possible, and unmistakably Indian.", image: "/images/personalities/srikanth-bolla.webp" },
  { icon: BookOpen, title: "Educate", text: "Turn lived experience into practical lessons for students, founders, and young leaders.", image: "/images/personalities/anand-kumar.jpeg" },
  { icon: Rocket, title: "Empower", text: "Give emerging voices the confidence to build, lead, serve, and dream beyond geography.", image: "/images/events/Khushi-grewal.jpg" },
  { icon: Users, title: "Connect", text: "Bring changemakers, institutions, and youth together through thoughtful storytelling.", image: "/images/conference-crowd.png" },
];

const journey = [
  { year: "Origin", title: "A Small-Town Conviction", text: "The idea began with a simple belief: talent exists everywhere, but visibility does not." },
  { year: "Stage", title: "Voices From Bharat", text: "Inspire India Talks started documenting founders, educators, officers, artists, and social leaders." },
  { year: "Community", title: "Youth Conversations", text: "The platform grew into a space where young Indians could meet stories that felt relatable." },
  { year: "Now", title: "A Growing Movement", text: "Today, the mission is expanding through stories, events, campaigns, and partnerships." },
];

const coverAreas = [
  { title: "Inspiring Voices", category: "Stories", note: "Founders, officers, educators, artists.", image: "/images/personalities/srikanth-bolla.webp" },
  { title: "Business Insights", category: "Ideas", note: "Startups built outside the metros.", image: "/images/business-insights/non-metro-startup-story.png" },
  { title: "Youth Leadership", category: "Impact", note: "Young Indians driving real change.", image: "/images/events/Khushi-grewal.jpg" },
  { title: "Innovation", category: "Future", note: "DeepTech, climate, and frontier ideas.", image: "/images/business-insights/deeptech.png" },
  { title: "Education", category: "Learning", note: "Teachers and institutions worth knowing.", image: "/images/personalities/anand-kumar.jpeg" },
  { title: "Social Change", category: "Bharat", note: "Grassroots leaders rewriting their regions.", image: "/images/personalities/Chami-Murmu.jpg" },
];

const whyPoints = [
  "Real Indian journeys, not borrowed motivation.",
  "Voices from towns, districts, campuses, and grassroots communities.",
  "Stories curated for young builders, students, educators, and leaders.",
  "A platform where visibility becomes belief — and belief becomes action.",
];

const founderTags = ["Storyteller", "Youth Builder", "Bharat First", "Platform Creator"];

const joinTracks = [
  { icon: Megaphone, title: "Nominate a Story", text: "Know someone whose journey deserves the spotlight? Tell us.", to: "/contact" },
  { icon: Handshake, title: "Partner With Us", text: "Institutions, campuses, brands aligned with the mission.", to: "/contact" },
  { icon: Compass, title: "Host A Conversation", text: "Bring Inspire India Talks to your city, college, or stage.", to: "/events" },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut" },
};

/* -------------------------------- PAGE -------------------------------- */
const About = () => {
  return (
    <Layout>
      {/* ============ HERO ============ */}
      <section id="top" className="relative overflow-hidden border-b border-white/5 gradient-mesh" data-testid="about-hero">
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{
          background: "radial-gradient(120% 95% at 22% 0%, hsl(28 70% 24% / 0.4) 0%, hsl(24 60% 16% / 0.18) 35%, transparent 60%)",
        }} />
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }} />
        <div className="container relative mx-auto px-4 py-20 md:py-28">
          <div className="mb-12 flex flex-wrap items-center justify-between gap-4 text-[11px] uppercase tracking-[0.3em] text-foreground/45">
            <span className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary/60" />
              Inspire India Talks &mdash; The About Edition
            </span>
            <span className="hidden font-serif italic text-foreground/40 md:inline">
              Vol. 01 &nbsp;&middot;&nbsp; Bharat Stories
            </span>
          </div>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8 lg:items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-primary">
                <Sparkles className="h-4 w-4" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em]">India&apos;s storytelling platform</span>
              </div>
              <h1 className="font-serif mt-8 max-w-5xl text-5xl font-bold leading-[0.95] tracking-tight md:text-[5.5rem]">
                Inspiring minds.<br />
                <span className="text-primary">Shaping India&apos;s</span>{" "}
                <span className="italic font-normal text-foreground/90">future.</span>
              </h1>
              <div className="mt-10 flex max-w-2xl items-start gap-4">
                <span aria-hidden className="mt-2 hidden h-12 w-px bg-primary/50 md:block" />
                <p className="text-lg leading-relaxed text-foreground/75">
                  Inspire India Talks documents the stories, ideas, and journeys that help young India see what is possible{" "}
                  <em className="text-foreground">from wherever they begin</em>. A platform built for the country that is rising quietly, outside the spotlight.
                </p>
              </div>
              <div className="mt-12 flex flex-wrap gap-3">
                <Link to="/inspiring-voices" data-testid="hero-cta-explore" className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
                  Explore Stories
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>
                <Link to="/contact" data-testid="hero-cta-partner" className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-foreground transition hover:border-primary/50 hover:text-primary">
                  Partner With Us
                  <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
              <div className="mt-16 grid max-w-xl grid-cols-3 gap-6">
                {heroStats.map(({ value, label }) => (
                  <div key={label} className="border-l border-primary/70 pl-4" data-testid={`hero-stat-${label.toLowerCase().split(" ")[0]}`}>
                    <div className="font-serif text-3xl font-bold text-foreground md:text-4xl">{value}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="hidden lg:col-span-5 lg:block"
            >
              <div className="relative h-full min-h-[600px] overflow-hidden rounded-[28px] border border-white/10 shadow-2xl">
                <img src="/images/conference-stage.png" alt="Inspire India Talks event stage" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
                <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay" style={{
                  backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/></svg>\")",
                }} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent" />
                <div className="absolute right-6 top-6 rounded-full border border-white/15 bg-background/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-foreground/70 backdrop-blur-md">
                  Est. on stage
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-primary">Stories &middot; Ideas &middot; Impact</div>
                  <div className="font-serif mt-3 text-2xl font-semibold leading-tight md:text-3xl">
                    A stage for the India that is building quietly.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="relative mt-16 overflow-hidden border-y border-white/10 py-4">
            <div className="flex animate-[ticker_40s_linear_infinite] gap-10 whitespace-nowrap text-[11px] uppercase tracking-[0.3em] text-foreground/40">
              {[...heroTicker, ...heroTicker].map((place, i) => (
                <span key={`${place}-${i}`} className="flex items-center gap-10">
                  <span className="text-primary/70">&bull;</span>
                  {place}
                </span>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @keyframes ticker {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* ============ FOUNDER ============ */}
      <section id="founder" className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7 }} className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-3xl border border-primary/40 md:block" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <img src="/images/founder-photo.png" alt="Founder Shamshad Alam" className="aspect-[4/5] h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-background/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-foreground/80 backdrop-blur-md">
                  Founder &middot; 2024
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-primary">Founder</div>
                  <div className="font-serif mt-2 text-3xl font-semibold">Shamshad Alam</div>
                  <div className="mt-1 text-xs text-foreground/60">Storyteller &middot; Platform creator &middot; Bharat first</div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, delay: 0.1 }} className="lg:col-span-7 lg:pt-6">
            <SectionLabel index={1}>Meet The Founder</SectionLabel>
            <h2 className="font-serif mt-6 text-4xl font-bold leading-[1.05] md:text-6xl">
              The story behind <span className="text-primary">our story.</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {founderTags.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-foreground/70">{item}</span>
              ))}
            </div>
            <p className="mt-8 text-lg leading-relaxed text-foreground/75">
              Shamshad Alam comes from the kind of India where ambition runs deep but platforms are rare. Growing up outside metropolitan privilege meant seeing a truth up close:{" "}
              <span className="text-foreground">talent exists everywhere, but visibility does not.</span>
            </p>
            <p className="mt-5 text-lg leading-relaxed text-foreground/75">
              Inspire India Talks was born from that conviction. The platform exists to bring grounded Indian journeys to the front, so students, builders, and young leaders can meet role models who began closer to where they are.
            </p>
            <figure className="glass-card relative mt-10 overflow-hidden border-l-2 border-primary p-8 pl-12 md:p-10 md:pl-14">
              <Quote aria-hidden className="pointer-events-none absolute -top-2 left-4 h-12 w-12 text-primary/25" />
              <blockquote className="font-serif relative text-2xl font-medium italic leading-snug text-foreground md:text-3xl">
                &ldquo;The problem was never lack of potential. The problem was lack of access.&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 text-sm not-italic text-foreground/60">
                <span className="h-px w-8 bg-primary" />
                Shamshad Alam, Founder
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </section>

      {/* ============ MISSION ============ */}
      <section id="mission" className="border-t border-white/5 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 max-w-3xl">
            <SectionLabel index={2}>Our Mission</SectionLabel>
            <h2 className="font-serif mt-6 text-4xl font-bold leading-[1.05] md:text-6xl">
              Four pillars driving everything <span className="text-primary">we publish.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/65">
              A clear purpose shapes our stories, our events, our partners, and every conversation we choose to amplify.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {missionPillars.map(({ icon: Icon, title, text, image }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="group relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-2xl border border-white/10"
                data-testid={`mission-pillar-${title.toLowerCase()}`}
              >
                <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover opacity-35 transition duration-700 group-hover:scale-105 group-hover:opacity-55" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/30" />
                <span aria-hidden className="absolute left-4 top-4 h-3 w-3 border-l border-t border-primary/60" />
                <span aria-hidden className="absolute right-4 top-4 h-3 w-3 border-r border-t border-primary/60" />
                <div className="relative p-7">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/15 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-serif text-xs tracking-[0.3em] text-primary/80">0{index + 1}</span>
                  </div>
                  <h3 className="font-serif mt-6 text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/75">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ JOURNEY ============ */}
      <section id="journey" className="border-t border-white/5 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <SectionLabel index={3}>Our Journey</SectionLabel>
          <h2 className="font-serif mt-6 max-w-3xl text-4xl font-bold leading-[1.05] md:text-6xl">
            Milestones that shaped <span className="text-primary">the road ahead.</span>
          </h2>
          <div className="relative mt-16">
            <div aria-hidden className="absolute left-0 right-0 top-[10px] hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
            <div className="grid gap-10 md:grid-cols-4 md:gap-5">
              {journey.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative md:pt-10"
                >
                  <div className="absolute left-0 top-1 h-5 w-5 md:left-1/2 md:top-0 md:-translate-x-1/2">
                    <div className="relative h-full w-full">
                      <span aria-hidden className="absolute inset-0 rounded-full bg-primary/30 blur-[6px]" />
                      <span className="absolute inset-[3px] rounded-full border-2 border-primary bg-background" />
                    </div>
                  </div>
                  <div className="pl-10 md:pl-0">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">{item.year}</div>
                    <h3 className="font-serif mt-3 text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/65">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ COVERAGE ============ */}
      <section id="cover" className="border-t border-white/5 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <SectionLabel index={4}>What We Cover</SectionLabel>
              <h2 className="font-serif mt-6 text-4xl font-bold leading-[1.05] md:text-6xl">
                Editorial pillars, <span className="text-primary">one mission.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/65">
                From classrooms to startups, from public service to grassroots innovation &mdash; the platform follows stories that move India forward.
              </p>
            </div>
            <Link to="/inspiring-voices" className="group inline-flex w-fit items-center gap-2 text-sm text-foreground/70 transition hover:text-primary">
              View all coverage
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coverAreas.map((area, index) => (
              <motion.article
                key={area.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10"
                data-testid={`cover-card-${area.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <img src={area.image} alt={area.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/0 opacity-0 transition duration-500 group-hover:from-primary/15 group-hover:opacity-100" />
                <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-primary backdrop-blur">{area.category}</span>
                  <span className="font-serif text-xs tracking-[0.3em] text-foreground/40">0{index + 1}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-3xl font-semibold leading-tight transition group-hover:text-primary">{area.title}</h3>
                  <p className="mt-2 text-sm text-foreground/65">{area.note}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-foreground/55">
                    Read latest
                    <span className="h-px w-8 bg-current transition group-hover:w-12" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY ============ */}
      <section id="why" className="border-t border-white/5 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
            <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7 }} className="order-2 lg:order-1 lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <img src="/images/conference-crowd.png" alt="Audience at Inspire India Talks" className="aspect-[3/4] w-full rounded-2xl border border-white/10 object-cover" />
                  <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-background/50 px-2.5 py-1 text-[9px] uppercase tracking-[0.25em] text-foreground/80 backdrop-blur">The Audience</span>
                </div>
                <div className="relative mt-12">
                  <img src="/images/business-insights/startup-funding-2026.jpg" alt="Startup and innovation discussion" className="aspect-[3/4] w-full rounded-2xl border border-white/10 object-cover" />
                  <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-background/50 px-2.5 py-1 text-[9px] uppercase tracking-[0.25em] text-foreground/80 backdrop-blur">The Ideas</span>
                </div>
              </div>
              <p className="mt-8 max-w-sm text-xs uppercase tracking-[0.28em] text-foreground/40">
                &mdash; Built with the people we report on.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7 }} className="order-1 lg:order-2 lg:col-span-6">
              <SectionLabel index={5}>Why Inspire India Talks?</SectionLabel>
              <h2 className="font-serif mt-6 text-4xl font-bold leading-[1.05] md:text-6xl">
                We bridge inspiration <span className="text-primary">with action.</span>
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-foreground/70">
                Young people do not only need success stories. They need believable proof, practical insight, and representation that tells them their starting point is not their limit.
              </p>
              <ul className="mt-10 space-y-4">
                {whyPoints.map((point, i) => (
                  <li key={point} className="flex items-start gap-4 border-b border-white/5 pb-4 last:border-0">
                    <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-serif text-[11px] text-primary">0{i + 1}</span>
                    <span className="text-foreground/85">{point}</span>
                    <CheckCircle2 className="ml-auto mt-1 h-5 w-5 shrink-0 text-primary/70" />
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ VISION ============ */}
      <section id="vision" className="relative overflow-hidden border-t border-white/5 py-28 md:py-40">
        <div className="absolute inset-0 gradient-mesh opacity-70" />
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: "radial-gradient(circle at 20% 30%, hsl(var(--primary)) 0%, transparent 40%), radial-gradient(circle at 80% 70%, hsl(var(--primary)) 0%, transparent 35%)",
        }} />
        <div className="container relative mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-primary">
              <Target className="h-4 w-4" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em]">Our Vision</span>
            </div>
            <div className="mt-10 flex items-center justify-center gap-4 text-primary/50">
              <span className="h-px w-12 bg-current" />
              <span className="font-serif text-xs tracking-[0.4em]">2026 &amp; BEYOND</span>
              <span className="h-px w-12 bg-current" />
            </div>
            <h2 className="font-serif mx-auto mt-8 max-w-5xl text-4xl font-bold leading-[1.02] md:text-7xl">
              To become India&apos;s most trusted platform for{" "}
              <span className="text-primary">inspiration, knowledge, and transformative storytelling.</span>
            </h2>
            <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-foreground/70">
              Built for the leaders of tomorrow &mdash; entrepreneurs, educators, innovators, students, and changemakers writing India&apos;s next chapter.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-[11px] uppercase tracking-[0.3em] text-foreground/45">
              <span>Stories</span>
              <span className="text-primary/60">&bull;</span>
              <span>Ideas</span>
              <span className="text-primary/60">&bull;</span>
              <span>Communities</span>
              <span className="text-primary/60">&bull;</span>
              <span>Impact</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ JOIN ============ */}
      <section id="join" className="border-t border-white/5 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="glass-card overflow-hidden p-8 md:p-14 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <SectionLabel index={6}>Join The Movement</SectionLabel>
                <h2 className="font-serif mt-6 text-4xl font-bold leading-[1.05] md:text-5xl">
                  Be part of a community <span className="text-primary">shaping India&apos;s future.</span>
                </h2>
                <p className="mt-6 max-w-md leading-relaxed text-foreground/70">
                  Read the stories, host a conversation, partner with the platform, or help us bring more unheard Indian journeys into the light.
                </p>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Link to="/inspiring-voices" data-testid="join-cta-explore" className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
                    Explore Stories
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </Link>
                  <Link to="/events" data-testid="join-cta-events" className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-foreground transition hover:border-primary/50 hover:text-primary">
                    Upcoming Events
                    <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="grid gap-4 sm:grid-cols-1">
                  {joinTracks.map(({ icon: Icon, title, text, to }, index) => (
                    <Link
                      key={title}
                      to={to}
                      data-testid={`join-track-${title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-background/40 p-5 transition hover:border-primary/40 hover:bg-background/60"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline gap-3">
                          <span className="font-serif text-[11px] tracking-[0.3em] text-foreground/40">0{index + 1}</span>
                          <h3 className="font-serif text-xl font-semibold transition group-hover:text-primary">{title}</h3>
                        </div>
                        <p className="mt-1 text-sm text-foreground/65">{text}</p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-foreground/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <div className="mt-12 flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.3em] text-foreground/35">
            <span className="h-px w-10 bg-foreground/20" />
            End of Edition
            <span className="h-px w-10 bg-foreground/20" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

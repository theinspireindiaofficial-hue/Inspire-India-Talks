import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

/* ------------------------------ CONTENT ------------------------------ */
const founder = [
  <>
    Inspire India Talks was founded by <strong className="font-semibold text-foreground">Shamshad Alam</strong>, a storyteller whose conviction is simple and stubborn &mdash; talent exists everywhere, but visibility does not. He grew up watching that gap widen in silence, and eventually chose to spend his life closing it. What began as a set of honest conversations has grown into a platform, a movement, and a running record of the India that rarely reaches the mainstream.
  </>,
  <>
    As a storyteller, platform creator, and community builder, Shamshad brings forward the founders, thinkers, and doers whose journeys deserve a wider audience &mdash; and in doing so, he is redefining what an inspiring Indian journey looks like.
  </>,
];

const purpose = [
  <>
    Inspire India Talks exists to document the stories, ideas, and journeys that help young India see what is possible. We look beyond the metros &mdash; to the small towns, tier-two cities, and quiet corners of the country where potential has always lived, waiting to be seen. Our work is to bring those grounded Indian journeys to the front, and to make them impossible to ignore.
  </>,
  <>
    Every story we publish is an argument against the idea that opportunity belongs to a few. It is a record, a mirror, and an invitation &mdash; for the next founder in Ranchi, the next scientist in Aligarh, the next artist in Guwahati &mdash; to know the road is real, and it has been walked before.
  </>,
];

const believe = (
  <>
    We believe storytelling is infrastructure. That when a young person from a forgotten town sees someone from a place like their own build something meaningful, a private belief shifts &mdash; quietly, permanently. We believe in grounded stories over highlight reels, in access over exclusivity, and in ideas that don&apos;t just inspire people, but move them to build. This is the work. This is why we exist.
  </>
);

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const Kicker = ({ children }: { children: ReactNode }) => (
  <div className="text-[13px] font-semibold uppercase tracking-[0.35em] text-primary">{children}</div>
);

/* -------------------------------- PAGE -------------------------------- */
const About = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28" data-testid="about-page">
        {/* ============ HERO ============ */}
        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <Kicker>About</Kicker>
          <h1 className="font-sans mt-8 max-w-4xl text-4xl font-semibold leading-[1.15] tracking-tight md:text-6xl">
            Inspiring minds. <span className="text-primary">Shaping India&apos;s future.</span>
          </h1>
          <p className="mt-7 text-xl text-foreground/60">India&apos;s storytelling platform.</p>
        </motion.header>

        {/* ============ THE FOUNDER ============ */}
        <motion.section {...fadeUp} id="founder" className="mt-24 md:mt-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <figure>
                <div className="overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src="/images/founder-photo.png"
                    alt="Shamshad Alam, Founder of Inspire India Talks"
                    className="aspect-[4/5] w-full object-cover"
                    loading="eager"
                  />
                </div>
                <figcaption className="mt-5">
                  <div className="text-lg font-semibold text-foreground">Shamshad Alam</div>
                  <div className="mt-1 text-sm text-foreground/50">Founder &middot; Storyteller &middot; Platform Creator</div>
                </figcaption>
              </figure>
            </div>
            <div className="lg:col-span-7">
              <Kicker>The Founder</Kicker>
              <div className="mt-8 space-y-7">
                {founder.map((para, i) => (
                  <p key={i} className="text-lg leading-[1.9] text-foreground/75">{para}</p>
                ))}
              </div>
              <blockquote className="mt-12 border-l-2 border-primary pl-8">
                <p className="text-2xl leading-snug text-foreground md:text-[1.7rem]">
                  The problem was never lack of potential. The problem was lack of access.
                </p>
              </blockquote>
            </div>
          </div>
        </motion.section>

        {/* ============ OUR PURPOSE ============ */}
        <motion.section {...fadeUp} id="purpose" className="mt-24 md:mt-32">
          <Kicker>Our Purpose</Kicker>
          <div className="mt-8 max-w-4xl space-y-7">
            {purpose.map((para, i) => (
              <p key={i} className="text-lg leading-[1.9] text-foreground/75">{para}</p>
            ))}
          </div>
        </motion.section>

        {/* ============ WHAT WE BELIEVE ============ */}
        <motion.section {...fadeUp} id="believe" className="mt-24 md:mt-32">
          <Kicker>What We Believe</Kicker>
          <p className="mt-8 max-w-4xl text-lg leading-[1.9] text-foreground/75">{believe}</p>
        </motion.section>

        {/* ============ FOOTER LINE ============ */}
        <motion.footer {...fadeUp} className="mt-24 md:mt-32">
          <hr className="border-white/10" />
          <p className="mt-10 text-base">
            <strong className="font-semibold text-foreground">Inspire India Talks</strong>
            <span className="text-foreground/40"> &nbsp;&middot;&nbsp; </span>
            <span className="tracking-wide text-foreground/50">Stories that shape nations.</span>
          </p>
        </motion.footer>
      </div>
    </Layout>
  );
};

export default About;

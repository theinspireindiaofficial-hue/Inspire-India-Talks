import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { businessinsights } from "../data/businessinsights";

type Article = (typeof businessinsights)[number];

// Category + date + (optional) read time — shown above every headline
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
  // The hero is the article marked featured, else the first one in the file
  const featured = businessinsights.find((a) => a.featured) ?? businessinsights[0];
  const rest = businessinsights.filter((a) => a !== featured);

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

          {/* Featured hero */}
          {featured && (
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 mb-16 bg-black/30 border border-primary/20 rounded-2xl overflow-hidden"
            >
              <div className="h-64 md:h-auto">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Meta article={featured} />
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  {featured.title}
                </h2>
                <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
                  {featured.content}
                </p>
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
                className="bg-black/30 border border-primary/20 rounded-xl overflow-hidden flex flex-col"
              >
                <div className="h-52">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col">
                  <Meta article={article} />
                  <h3 className="font-serif text-xl font-bold mb-3">
                    {article.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed whitespace-pre-line">
                    {article.content}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BusinessInsights;

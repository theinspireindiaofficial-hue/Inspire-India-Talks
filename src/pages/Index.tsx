import { Link } from "react-router-dom";
import { useState } from "react";
import Layout from "@/components/Layout";
import { personalities } from "@/data/personalities";
import { businessinsights } from "@/data/businessinsights";
import { Radio } from "lucide-react";
import NewsletterSheet from "@/components/NewsletterSheet";

const Index = () => {
  const tickerItems = [...businessinsights].slice(0, 8).map((a) => a.title);

  // Get stories for different sections
  const mainStory = personalities[0];
  const insightStories = businessinsights.slice(0, 3);
  const legacyStory = businessinsights[3] || businessinsights[0]; // Fallback
  const startupStories = businessinsights.slice(4, 8);
  const interviewStories = personalities.slice(1, 4);
  const inBriefStories = businessinsights.slice(8, 11);

  return (
    <Layout>
      {/* Ticker Strip */}
      {tickerItems.length > 0 && (
        <div className="bg-foreground text-background border-b-[3px] border-foreground">
          <div className="container mx-auto px-4 flex items-center gap-4 py-2">
            <span className="shrink-0 inline-flex items-center gap-1.5 text-primary text-[10px] font-bold uppercase tracking-widest">
              <Radio className="h-3 w-3 animate-pulse" /> LATEST
            </span>
            <div className="relative flex-1 overflow-hidden">
              <div className="flex whitespace-nowrap animate-marquee">
                {[...tickerItems, ...tickerItems].map((t, i) => (
                  <span key={i} className="text-[11px] font-medium text-background/90 mx-8 flex items-center">
                    {t}
                    <span className="ml-8 text-primary">◆</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
          
          {/* Main Left Column (8 cols) */}
          <div className="lg:col-span-8 lg:border-r border-border lg:pr-8">
            
            {/* Main Headline Story */}
            <article className="mb-12 border-b border-border pb-12">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-primary text-[10px] font-bold uppercase tracking-widest">
                  Founders Stories
                </span>
              </div>
              <Link to={`/personality/${mainStory.id}`} className="group block">
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] mb-6 group-hover:text-primary transition-colors">
                  {mainStory.name} {mainStory.title.toLowerCase().includes('founder') ? '' : '— ' + mainStory.title}
                </h2>
                <div className="aspect-[16/9] mb-6 overflow-hidden bg-muted">
                  <img
                    src={mainStory.image}
                    alt={mainStory.name}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <p className="text-xl md:text-2xl text-foreground/80 font-serif leading-relaxed mb-4">
                  In an era measured by funding rounds, this founder made frugality the entire strategy.
                </p>
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                  <span>By Editorial Desk</span>
                  <span>•</span>
                  <span>{mainStory.addedAt ? new Date(mainStory.addedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Jul 29, 2026'}</span>
                  <span>•</span>
                  <span>12 min read</span>
                </div>
              </Link>
            </article>

            {/* Business Insights Row */}
            <section className="mb-12 border-b border-border pb-12">
              <div className="flex items-center justify-between mb-8 border-b border-border pb-2">
                <h3 className="font-serif text-3xl font-bold text-foreground">Business Insights</h3>
                <Link to="/business-insights" className="text-[10px] font-bold uppercase tracking-widest text-primary hover:underline">
                  More from this desk
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {insightStories.map((story) => (
                  <article key={story.id} className="group cursor-pointer">
                    <Link to={`/business-insights/${story.id}`}>
                      <div className="aspect-[4/3] mb-4 overflow-hidden bg-muted">
                        <img src={story.image} alt={story.title} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" />
                      </div>
                      <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-2 block">{story.category}</span>
                      <h4 className="font-serif text-xl font-bold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
                        {story.title}
                      </h4>
                      <p className="text-sm text-foreground/70 line-clamp-3 mb-3">
                        {story.content.substring(0, 120)}...
                      </p>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
                        By Editorial Desk • {story.date}
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </section>

            {/* Business Legacy */}
            <section className="mb-12 border-b border-border pb-12">
               <div className="flex items-center justify-between mb-8 border-b border-border pb-2">
                <h3 className="font-serif text-3xl font-bold text-foreground">Business Legacy</h3>
                <Link to="/business-legacy" className="text-[10px] font-bold uppercase tracking-widest text-primary hover:underline">
                  Deep research files
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <article className="group cursor-pointer col-span-1 md:col-span-2">
                  <Link to={`/business-insights/${legacyStory.id}`}>
                    <div className="aspect-[21/9] mb-4 overflow-hidden bg-muted">
                      <img src={legacyStory.image} alt={legacyStory.title} className="w-full h-full object-cover sepia-[30%] group-hover:sepia-0 transition-all duration-500" />
                    </div>
                    <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-2 block">The Long Read</span>
                    <h4 className="font-serif text-3xl font-bold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">
                      {legacyStory.title}
                    </h4>
                    <p className="text-lg text-foreground/80 font-serif mb-4">
                      A deep research file on the governance design, trust structure and succession discipline behind India's most enduring empires.
                    </p>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                      By Editorial Desk • {legacyStory.date} • 22 min read
                    </div>
                  </Link>
                </article>
              </div>
            </section>

            {/* Startup Stories */}
            <section className="mb-12 border-b border-border pb-12">
              <div className="flex items-center justify-between mb-8 border-b border-border pb-2">
                <h3 className="font-serif text-3xl font-bold text-foreground">Startup Stories</h3>
                <Link to="/startup-stories" className="text-[10px] font-bold uppercase tracking-widest text-primary hover:underline">
                  The Startup Desk
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {startupStories.map((story) => (
                  <article key={story.id} className="group cursor-pointer">
                    <Link to={`/business-insights/${story.id}`}>
                      <div className="aspect-square mb-3 overflow-hidden bg-muted">
                        <img src={story.image} alt={story.title} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" />
                      </div>
                      <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1 block">{story.category}</span>
                      <h4 className="font-serif text-base font-bold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-3">
                        {story.title}
                      </h4>
                      <div className="text-[9px] uppercase tracking-wider text-muted-foreground font-medium">
                        By Editorial Desk • {story.date}
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </section>

            {/* Interviews */}
            <section className="mb-12 lg:mb-0">
               <div className="flex items-center justify-between mb-8 border-b border-border pb-2">
                <h3 className="font-serif text-3xl font-bold text-foreground">Interviews</h3>
                <Link to="/founders-talk" className="text-[10px] font-bold uppercase tracking-widest text-primary hover:underline">
                  In Conversation
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {interviewStories.map((person) => (
                  <article key={person.id} className="group cursor-pointer border-l-2 border-primary pl-4">
                    <Link to={`/personality/${person.id}`}>
                      <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-2 block">
                        Q&A • {person.category}
                      </span>
                      <h4 className="font-serif text-2xl font-bold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">
                        "{person.quote || 'We stopped chasing GMV the day we understood our own unit economics.'}"
                      </h4>
                      <p className="text-sm text-foreground/70 mb-3">
                        A candid conversation with {person.name} on discipline, boards and building {person.title}.
                      </p>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
                        By Editorial Desk • 15 min read
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-10">
            
            {/* In Brief */}
            <div>
              <div className="flex items-center gap-2 mb-6 border-b-2 border-foreground pb-2">
                <h3 className="text-xs font-bold uppercase tracking-widest text-foreground">
                  In Brief
                </h3>
              </div>
              <div className="space-y-6">
                {inBriefStories.map((story) => (
                  <article key={story.id} className="group border-b border-border pb-6 last:border-0">
                    <Link to={`/business-insights/${story.id}`}>
                      <span className="text-primary text-[9px] font-bold uppercase tracking-widest mb-1.5 block">
                        {story.category}
                      </span>
                      <h4 className="font-serif text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors mb-1.5">
                        {story.title}
                      </h4>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
                        {story.date}
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            {/* Newsletter Box */}
            <div className="bg-secondary/50 p-8 border border-border">
              <div className="mb-4">
                <span className="text-primary text-[10px] font-bold uppercase tracking-widest block mb-2">The Newsletter</span>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  One considered edition, every Friday
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                  The week's reporting from all five desks, condensed for readers who are short on time and long on curiosity.
                </p>
              </div>
              <NewsletterSheet source="home-sidebar" triggerLabel="Subscribe Free" />
            </div>

          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

import { useState, useRef } from "react";
import Layout from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { 
  Play, 
  Calendar, 
  User, 
  ArrowRight, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  MessageSquare,
  Building2,
  TrendingUp
} from "lucide-react";

interface Talk {
  id: string;
  founderName: string;
  companyName: string;
  designation: string;
  topic: string;
  date: string;
  duration: string;
  youtubeId: string;
  excerpt: string;
  keyInsights: string[];
}

const featuredTalks: Talk[] = [
  {
    id: "nithin-kamath-zerodha",
    founderName: "Nithin Kamath",
    companyName: "Zerodha",
    designation: "Co-Founder & CEO",
    topic: "Bootstrapping India's Largest Brokerage & Giving Back",
    date: "14-05-2026",
    duration: "42 min",
    youtubeId: "dQw4w9WgXcQ", // Placeholder or relevant video id
    excerpt: "Nithin shares why they chose not to take venture capital, how they built Zerodha's core tech, and the philosophy behind Rainmatter's environmental funding.",
    keyInsights: [
      "Bootstrapping forces you to focus on product and customer satisfaction over vanity metrics.",
      "Building a trust-based culture with zero marketing spend creates sustainable viral growth.",
      "Success in fintech requires long-term patience and strict adherence to regulatory rules."
    ]
  },
  {
    id: "kunal-shah-cred",
    founderName: "Kunal Shah",
    companyName: "CRED",
    designation: "Founder & CEO",
    topic: "Delta 4 Theory & Building for India's High-Trust Users",
    date: "02-04-2026",
    duration: "38 min",
    youtubeId: "dQw4w9WgXcQ",
    excerpt: "Kunal Shah dives into the Delta 4 framework, consumer behavior shifts in India, and how trust can be productized to build premium networks.",
    keyInsights: [
      "The Delta 4 efficiency score determines if consumers will permanently shift to a new product.",
      "High-trust user cohorts exhibit significantly better monetization and loyalty profiles.",
      "Wealth creation is directly correlated with curiosity and the speed of decision-making."
    ]
  },
  {
    id: "sridhar-vembu-zoho",
    founderName: "Sridhar Vembu",
    companyName: "Zoho Corporation",
    designation: "Founder & CEO",
    topic: "Rural Revival & Building Global Software from Indian Villages",
    date: "20-02-2026",
    duration: "45 min",
    youtubeId: "dQw4w9WgXcQ",
    excerpt: "Sridhar shares Zoho's unique rural-office strategy, building world-class SaaS, and investing heavily in local capital and talent development.",
    keyInsights: [
      "Talent is globally distributed, but opportunities are heavily concentrated. Local offices bridge this gap.",
      "True self-reliance (Atmanirbhar) requires developing fundamental engineering and toolmaking skills.",
      "SaaS built with low customer-acquisition costs provides unmatched financial stability during downturns."
    ]
  }
];

const WEB3FORMS_KEY = "4cde47b8-4bc1-40b8-8166-72179e1d74e9";

const FoundersTalk = () => {
  const [activeTalk, setActiveTalk] = useState<Talk | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const formRef = useRef<HTMLFormElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const validateForm = (formData: FormData): boolean => {
    const newErrors: Record<string, string> = {};
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    const role = formData.get("role") as string;
    const story = formData.get("story") as string;
    const honeypot = formData.get("website") as string;

    if (honeypot) {
      newErrors.honeypot = "Spam detected";
      setErrors(newErrors);
      return false;
    }

    if (!name?.trim()) newErrors.name = "Full name is required";
    if (!email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!company?.trim()) newErrors.company = "Company/Startup name is required";
    if (!role?.trim()) newErrors.role = "Designation/Role is required";
    if (!story?.trim() || story.trim().length < 50) {
      newErrors.story = "Please share a brief description of your startup and journey (min 50 characters)";
    }
    if (!consentChecked) newErrors.consent = "Consent is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    if (consentChecked) {
      formData.set("consent", "accepted");
    } else {
      formData.delete("consent");
    }

    if (!validateForm(formData)) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      formData.append("access_key", WEB3FORMS_KEY);
      formData.append("subject", "Founders Talk Nominee — Inspire India Talks");
      formData.append("from_name", "Inspire India Talks — Founders Talk");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setShowSuccess(true);
        formRef.current?.reset();
        setConsentChecked(false);
        setErrors({});
        toast({
          title: "Application Submitted! 🚀",
          description: "We'll review your application and get in touch with you shortly.",
        });
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        toast({
          title: "Submission Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Nomination submission error:", error);
      toast({
        title: "Submission Error",
        description: "Something went wrong. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden gradient-mesh">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs">Founders Talk</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold glow-text mb-6">
              Insights from India's <span className="text-primary">Visionary Builders</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
              Long-form conversations and deep-dives with builders, operators, and visionaries shaping India's future. Learn from their early struggles, scaling strategies, and foundational wisdom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content: Talks & Application */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Talks list */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">Featured Conversations</h2>
            </div>
            
            <div className="grid gap-6">
              {featuredTalks.map((talk) => (
                <motion.article
                  key={talk.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveTalk(talk)}
                  className="group cursor-pointer bg-card border border-border hover:border-primary/40 hover:shadow-lg rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 transition-all duration-300"
                >
                  <div className="relative aspect-video md:w-56 shrink-0 rounded-xl overflow-hidden bg-gradient-to-br from-primary/30 to-black flex items-center justify-center border border-white/5">
                    <span className="font-serif text-lg font-bold text-foreground/75 px-4 text-center">
                      {talk.founderName}
                    </span>
                    <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="h-12 w-12 rounded-full bg-primary text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="h-5 w-5 fill-black ml-0.5" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2 text-xs text-muted-foreground uppercase tracking-widest">
                        <span className="text-primary font-medium flex items-center gap-1">
                          <Building2 className="h-3 w-3" /> {talk.companyName}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-foreground/30" />
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" /> {talk.designation}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {talk.topic}
                      </h3>
                      <p className="text-sm text-foreground/80 leading-relaxed line-clamp-3">
                        {talk.excerpt}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/10 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" /> {talk.date}
                      </span>
                      <span className="text-primary font-medium group-hover:underline flex items-center gap-1">
                        Watch Episode <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Form nomination sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  <h3 className="font-serif text-2xl font-bold text-foreground">Apply to be Featured</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Are you a founder, builder, or scaling leader building a business in India? Apply now to share your journey on the Founders Talk podcast.
                </p>

                {showSuccess ? (
                  <div className="text-center py-8">
                    <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h4 className="font-serif text-xl font-bold text-foreground mb-1">Thank You!</h4>
                    <p className="text-xs text-muted-foreground mb-4">
                      Your application has been received successfully.
                    </p>
                    <Button
                      onClick={() => setShowSuccess(false)}
                      variant="outline"
                      size="sm"
                      className="rounded-xl"
                    >
                      Nominate Someone Else
                    </Button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    {/* Honeypot */}
                    <input
                      ref={honeypotRef}
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      className="absolute opacity-0 pointer-events-none"
                      aria-hidden="true"
                    />

                    <div>
                      <label className="text-xs font-medium mb-1 block text-foreground">Full Name</label>
                      <Input
                        name="name"
                        required
                        placeholder="Your full name"
                        className={`bg-background/50 border-border/50 ${errors.name ? "border-destructive" : ""}`}
                      />
                      {errors.name && <p className="text-[10px] text-destructive mt-0.5">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="text-xs font-medium mb-1 block text-foreground">Email</label>
                      <Input
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className={`bg-background/50 border-border/50 ${errors.email ? "border-destructive" : ""}`}
                      />
                      {errors.email && <p className="text-[10px] text-destructive mt-0.5">{errors.email}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-medium mb-1 block text-foreground">Company Name</label>
                        <Input
                          name="company"
                          required
                          placeholder="e.g., Zerodha"
                          className={`bg-background/50 border-border/50 ${errors.company ? "border-destructive" : ""}`}
                        />
                        {errors.company && <p className="text-[10px] text-destructive mt-0.5">{errors.company}</p>}
                      </div>
                      <div>
                        <label className="text-xs font-medium mb-1 block text-foreground">Designation/Role</label>
                        <Input
                          name="role"
                          required
                          placeholder="e.g., Co-Founder"
                          className={`bg-background/50 border-border/50 ${errors.role ? "border-destructive" : ""}`}
                        />
                        {errors.role && <p className="text-[10px] text-destructive mt-0.5">{errors.role}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-medium mb-1 block text-foreground">Your Startup Journey</label>
                      <Textarea
                        name="story"
                        required
                        rows={4}
                        placeholder="Briefly describe what you are building and some notable milestones..."
                        className={`bg-background/50 border-border/50 resize-none ${errors.story ? "border-destructive" : ""}`}
                      />
                      {errors.story && <p className="text-[10px] text-destructive mt-0.5">{errors.story}</p>}
                    </div>

                    <div className="flex items-start gap-2 pt-2">
                      <Checkbox
                        id="consent"
                        checked={consentChecked}
                        onCheckedChange={(checked) => setConsentChecked(!!checked)}
                        className={`mt-0.5 ${errors.consent ? "border-destructive" : ""}`}
                      />
                      <label htmlFor="consent" className="text-xs text-foreground cursor-pointer select-none leading-normal">
                        I consent to the Inspire India Talks team contacting me regarding this nomination.
                      </label>
                    </div>
                    {errors.consent && <p className="text-[10px] text-destructive">{errors.consent}</p>}

                    <Button
                      type="submit"
                      className="w-full rounded-xl py-5 text-sm font-medium mt-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : <>Submit Nomination <Send className="h-3.5 w-3.5 ml-2" /></>}
                    </Button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Episode Detail Overlay / Modal */}
      <AnimatePresence>
        {activeTalk && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveTalk(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm overflow-y-auto px-4 py-20 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-background border border-primary/20 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setActiveTalk(null)}
                aria-label="Close details"
                className="absolute top-4 right-4 z-10 h-9 w-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-primary hover:text-black transition-colors"
              >
                ✕
              </button>

              <div className="aspect-video w-full bg-black relative">
                {/* Embed YouTube video player */}
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${activeTalk.youtubeId}`}
                  title={`${activeTalk.founderName} - Founders Talk`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-2 mb-3 text-xs text-muted-foreground uppercase tracking-widest">
                  <span className="text-primary font-medium">{activeTalk.companyName}</span>
                  <span className="h-1 w-1 rounded-full bg-foreground/30" />
                  <span>{activeTalk.designation}</span>
                  <span className="h-1 w-1 rounded-full bg-foreground/30" />
                  <span>{activeTalk.duration}</span>
                </div>
                
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  {activeTalk.founderName}: {activeTalk.topic}
                </h2>
                
                <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                  {activeTalk.excerpt}
                </p>

                <div className="p-5 bg-primary/5 rounded-xl border border-primary/10">
                  <h4 className="font-serif text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <TrendingUp className="h-4.5 w-4.5 text-primary" /> Key Takeaways & Insights
                  </h4>
                  <ul className="space-y-3">
                    {activeTalk.keyInsights.map((insight, idx) => (
                      <li key={idx} className="text-sm text-foreground/90 flex gap-2">
                        <span className="text-primary font-bold">{idx + 1}.</span>
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default FoundersTalk;

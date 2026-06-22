import { useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Send, Mic, Users, Calendar, Building2, Mail, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const WEB3FORMS_KEY = "30ad2072-0d0d-4d0b-8c55-ebeb571f65e4";

const HostEvent = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("subject", "Host a Talk Enquiry — Inspire India Talks");
    formData.append("from_name", "Inspire India Talks — Host Enquiry");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        toast({
          title: "Enquiry Received! ✅",
          description: "Thank you for reaching out. We'll get back to you within 2–3 business days.",
        });
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
    { name: "name", label: "Full Name", type: "text", required: true, placeholder: "Your full name", icon: <Users className="h-4 w-4" /> },
    { name: "email", label: "Email Address", type: "email", required: true, placeholder: "you@example.com", icon: <Mail className="h-4 w-4" /> },
    { name: "organization", label: "Organisation / Institution", type: "text", required: true, placeholder: "Company, college, or NGO name", icon: <Building2 className="h-4 w-4" /> },
    { name: "audience", label: "Expected Audience Size", type: "text", required: false, placeholder: "e.g. 200–500 students", icon: <Users className="h-4 w-4" /> },
    { name: "date", label: "Preferred Date / Timeframe", type: "text", required: false, placeholder: "e.g. July 2025 or flexible", icon: <Calendar className="h-4 w-4" /> },
  ];

  const highlights = [
    { icon: <Mic className="h-6 w-6" />, title: "Curated Speakers", desc: "India's most inspiring voices across entrepreneurship, social impact, and innovation." },
    { icon: <Users className="h-6 w-6" />, title: "Any Scale", desc: "From intimate workshops of 50 to campus-wide events of 5,000+." },
    { icon: <Calendar className="h-6 w-6" />, title: "Flexible Format", desc: "Keynotes, panel discussions, fireside chats, or full-day summits — we adapt to you." },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden gradient-mesh">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs">Host a Talk</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold glow-text mb-6 max-w-3xl">
              Bring Inspiration<br />
              <span className="text-primary">to Your Stage.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Partner with Inspire India Talks to organise a speaker event at your institution, company, or community. We bring India's most compelling stories directly to your audience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 flex flex-col gap-4"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center ring-1 ring-primary/20">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/8 rounded-full blur-[100px]" />
          <div className="absolute inset-0 border border-primary/10 rounded-3xl" />

          <div className="relative z-10 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs">Enquiry Form</span>
            </div>
            <h2 className="font-serif text-3xl font-bold mb-2">Tell Us About Your Event</h2>
            <p className="text-muted-foreground mb-8">
              Fill in the details below and our team will get in touch within 2–3 business days.
            </p>

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
                    className={`bg-background/30 border-border/30 rounded-xl h-12 text-base transition-all duration-300 ${
                      focusedField === field.name
                        ? "border-primary/50 shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]"
                        : ""
                    }`}
                  />
                </div>
              ))}

              {/* Message */}
              <div className="relative">
                <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2 block">
                  <span className="flex items-center gap-1">
                    <MessageSquare className="h-3 w-3" /> Additional Details
                  </span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us more about your event, theme, or any special requirements…"
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full bg-background/30 border border-border/30 rounded-xl px-4 py-3 text-base text-foreground placeholder:text-muted-foreground resize-none transition-all duration-300 outline-none ${
                    focusedField === "message"
                      ? "border-primary/50 shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]"
                      : ""
                  }`}
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-xl py-6 text-base font-medium mt-2 hover:shadow-lg hover:shadow-primary/20 transition-all"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending…
                  </span>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" /> Submit Enquiry
                  </>
                )}
              </Button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Bottom quote */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="h-px w-16 bg-primary mx-auto mb-8" />
          <blockquote className="font-serif text-2xl md:text-3xl italic text-foreground leading-relaxed glow-text">
            "Every great movement begins with one talk, one stage, one audience."
          </blockquote>
          <p className="mt-6 text-primary font-medium tracking-wider">— Inspire India Talks</p>
        </div>
      </section>
    </Layout>
  );
};

export default HostEvent;

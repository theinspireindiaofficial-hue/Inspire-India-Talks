import { useState } from "react";
import { Mail, Loader2, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface NewsletterSignupProps {
  /** Where this form lives, stored with the subscriber for analytics. */
  source?: string;
  className?: string;
}

const NewsletterSignup = ({ source, className }: NewsletterSignupProps) => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!EMAIL_RE.test(email)) {
      toast({
        title: "Check your email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          source: source || (typeof window !== "undefined" ? window.location.pathname : undefined),
        }),
      });

      if (!res.ok) {
        const error = (await res.json().catch(() => ({}))) as { error?: string; code?: string };
        throw new Error(error.error || `Request failed: ${res.status}`);
      }

      const data = (await res.json()) as { ok?: boolean; devConfirmUrl?: string };
      if (data.devConfirmUrl) {
        // Dev only: no mail provider wired yet, so surface the link for testing.
        console.log("[newsletter] dev confirm link:", data.devConfirmUrl);
      }

      setDone(true);
      setEmail("");
    } catch (error) {
      toast({
        title: "Newsletter signup unavailable",
        description: error instanceof Error ? error.message : "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className={className}>
        <div className="flex items-start gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4">
          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground">Almost there!</p>
            <p className="text-sm text-muted-foreground">
              Check your inbox and click the confirmation link to start receiving the newsletter.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className} noValidate>
      <Input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        autoComplete="email"
        required
        disabled={submitting}
      />
      <Button type="submit" disabled={submitting} className="mt-3 w-full">
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Subscribing…
          </>
        ) : (
          <>
            <Mail className="h-4 w-4" /> Subscribe
          </>
        )}
      </Button>
    </form>
  );
};

export default NewsletterSignup;

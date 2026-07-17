import { useState } from "react";
import { Mail, Loader2, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const CONSENT_LABEL =
  "I agree to receive the weekly newsletter. I can unsubscribe anytime.";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface NewsletterSignupProps {
  /** Where this form lives, stored with the subscriber for analytics. */
  source?: string;
  className?: string;
}

const NewsletterSignup = ({ source, className }: NewsletterSignupProps) => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [consent, setConsent] = useState(false);
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
    if (!consent) {
      toast({
        title: "One more thing",
        description: "Please tick the consent box to subscribe.",
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
          firstName: firstName.trim() || undefined,
          consent: true,
          source: source || (typeof window !== "undefined" ? window.location.pathname : undefined),
        }),
      });

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      const data = (await res.json()) as { ok?: boolean; devConfirmUrl?: string };
      if (data.devConfirmUrl) {
        // Dev only: no mail provider wired yet, so surface the link for testing.
        console.log("[newsletter] dev confirm link:", data.devConfirmUrl);
      }

      setDone(true);
      setEmail("");
      setFirstName("");
      setConsent(false);
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again in a moment.",
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
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name (optional)"
          autoComplete="given-name"
          className="sm:max-w-[40%]"
          disabled={submitting}
        />
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
      </div>

      <label className="mt-3 flex items-start gap-2.5 cursor-pointer">
        <Checkbox
          checked={consent}
          onCheckedChange={(v) => setConsent(v === true)}
          disabled={submitting}
          className="mt-0.5"
          aria-label="Consent to receive the newsletter"
        />
        <span className="text-xs text-muted-foreground leading-relaxed">
          {CONSENT_LABEL}
        </span>
      </label>

      <Button type="submit" disabled={submitting} className="mt-4 w-full sm:w-auto">
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

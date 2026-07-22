import { useState } from "react";
import { Mail, Loader2, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Mailchimp embedded-form config (Audience → Signup forms → Embedded).
 * We submit via JSONP straight to Mailchimp, so there's no server/API call —
 * this works on any host regardless of which deployment serves the site.
 */
const MC = {
  domain: "inspireindiatalks.us10.list-manage.com",
  u: "b39238fdd7de8d1b3154bc565",
  id: "d5275f5c6d",
  fId: "00afe7e0f0",
  honeypot: "b_b39238fdd7de8d1b3154bc565_d5275f5c6d",
};

function stripHtml(s: string): string {
  return s.replace(/<[^>]*>/g, "").trim();
}

/** Submit to Mailchimp's post-json endpoint via a JSONP <script> tag (avoids CORS). */
function subscribeViaMailchimp(
  email: string
): Promise<{ result: string; msg: string }> {
  return new Promise((resolve, reject) => {
    const cb = `mc_cb_${Date.now()}_${Math.floor(Math.random() * 1e6)}`;
    const params = new URLSearchParams({
      u: MC.u,
      id: MC.id,
      f_id: MC.fId,
      EMAIL: email,
      [MC.honeypot]: "",
      c: cb,
    });

    const script = document.createElement("script");
    const cleanup = () => {
      delete (window as unknown as Record<string, unknown>)[cb];
      script.remove();
    };

    (window as unknown as Record<string, unknown>)[cb] = (data: {
      result: string;
      msg: string;
    }) => {
      cleanup();
      resolve(data);
    };
    script.onerror = () => {
      cleanup();
      reject(new Error("Network error"));
    };

    script.src = `https://${MC.domain}/subscribe/post-json?${params.toString()}`;
    document.body.appendChild(script);
  });
}

interface NewsletterSignupProps {
  /** Kept for callers that pass it; not used with the direct Mailchimp submit. */
  source?: string;
  className?: string;
}

const NewsletterSignup = ({ className }: NewsletterSignupProps) => {
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
      const data = await subscribeViaMailchimp(email.trim());
      const msg = stripHtml(data.msg || "");

      if (data.result === "success" || /already subscribed/i.test(msg)) {
        setDone(true);
        setEmail("");
      } else {
        toast({
          title: "Couldn't subscribe",
          description: msg || "Please try again.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Newsletter signup unavailable",
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
            <p className="text-sm font-medium text-foreground">You're subscribed! 🎉</p>
            <p className="text-sm text-muted-foreground">
              Thanks for joining — the Inspire India Talks newsletter will land in your inbox every week.
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

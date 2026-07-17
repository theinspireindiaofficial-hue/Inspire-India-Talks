import { useSearchParams, Link } from "react-router-dom";
import { CheckCircle2, XCircle, AlertTriangle, Mail } from "lucide-react";
import Layout from "@/components/Layout";

type Variant = "confirmed" | "unsubscribed";

interface NewsletterStatusProps {
  variant: Variant;
}

const COPY: Record<
  Variant,
  Record<string, { icon: JSX.Element; title: string; body: string }>
> = {
  confirmed: {
    success: {
      icon: <CheckCircle2 className="h-14 w-14 text-primary" />,
      title: "You're subscribed! 🎉",
      body: "Thanks for confirming. You'll get the Inspire India Talks newsletter in your inbox every week.",
    },
    invalid: {
      icon: <AlertTriangle className="h-14 w-14 text-yellow-500" />,
      title: "Link expired or invalid",
      body: "This confirmation link is no longer valid. Please subscribe again to get a fresh link.",
    },
    error: {
      icon: <XCircle className="h-14 w-14 text-red-500" />,
      title: "Something went wrong",
      body: "We couldn't confirm your subscription right now. Please try the link again shortly.",
    },
  },
  unsubscribed: {
    success: {
      icon: <CheckCircle2 className="h-14 w-14 text-primary" />,
      title: "You've been unsubscribed",
      body: "You won't receive the newsletter anymore. You're always welcome back.",
    },
    invalid: {
      icon: <AlertTriangle className="h-14 w-14 text-yellow-500" />,
      title: "Invalid link",
      body: "This unsubscribe link isn't valid. If you keep getting emails, contact us and we'll remove you.",
    },
    error: {
      icon: <XCircle className="h-14 w-14 text-red-500" />,
      title: "Something went wrong",
      body: "We couldn't process that just now. Please try again shortly.",
    },
  },
};

const NewsletterStatus = ({ variant }: NewsletterStatusProps) => {
  const [params] = useSearchParams();
  const status = params.get("status") ?? "error";
  const copy = COPY[variant][status] ?? COPY[variant].error;

  return (
    <Layout>
      <section className="container mx-auto px-4 py-24 min-h-[60vh] flex items-center justify-center">
        <div className="glass-card max-w-lg w-full p-10 text-center">
          <div className="flex justify-center mb-6">{copy.icon}</div>
          <h1 className="font-serif text-3xl font-bold mb-3">{copy.title}</h1>
          <p className="text-muted-foreground mb-8">{copy.body}</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            <Mail className="h-4 w-4" /> Back to Inspire India Talks
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NewsletterStatus;

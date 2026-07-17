import { Mail } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import NewsletterSignup from "@/components/NewsletterSignup";

interface NewsletterSheetProps {
  /** Analytics label for where the signup came from. */
  source?: string;
  /** Optional extra classes for the trigger button. */
  triggerClassName?: string;
}

const NewsletterSheet = ({ source = "home-panel", triggerClassName }: NewsletterSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          className={
            "inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold shadow-lg ring-1 ring-black/5 hover:opacity-90 transition " +
            (triggerClassName ?? "")
          }
        >
          <Mail className="h-4 w-4" />
          Newsletter
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md flex flex-col">
        <SheetHeader className="text-left">
          <SheetTitle className="font-serif text-2xl">Join our newsletter</SheetTitle>
          <SheetDescription>
            Get the best Inspire India Talks stories and interviews delivered to your inbox every week.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-8">
          <NewsletterSignup source={source} />
          <p className="mt-4 text-xs text-muted-foreground">
            We'll only email you the weekly newsletter. Unsubscribe anytime.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NewsletterSheet;

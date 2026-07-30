import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const links = [
    { path: "/", label: "FRONT PAGE" },
    { path: "/business-insights", label: "BUSINESS INSIGHTS" },
    { path: "/founders-talk", label: "FOUNDERS STORIES" },
    { path: "/business-legacy", label: "BUSINESS LEGACY" },
    { path: "/startup-stories", label: "STARTUP STORIES" },
    { path: "/events", label: "EVENTS" },
  ];

  return (
    <header className="w-full bg-background border-b-[3px] border-foreground">
      {/* Top Banner */}
      <div className="bg-primary text-primary-foreground py-1.5 px-4 text-[10px] sm:text-xs font-semibold uppercase tracking-widest flex justify-between items-center">
        <span>VOL. IX - NO. 212 - NEW DELHI EDITION</span>
        <span className="hidden sm:inline">AN INDEPENDENT EDITORIAL PLATFORM</span>
      </div>

      <div className="container mx-auto px-4 pt-6 pb-4">
        {/* Date */}
        <div className="text-center text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4">
          {today}
        </div>

        {/* Masthead */}
        <div className="text-center mb-6">
          <Link to="/" className="inline-block">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-black text-foreground tracking-tight leading-none mb-3">
              Inspire India Talks
            </h1>
          </Link>
          <div className="flex items-center justify-center gap-4 mt-2">
            <div className="h-px bg-border w-16 hidden md:block"></div>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-foreground/80 font-semibold">
              THE PEOPLE BUILDING A NEW INDIA — AND THE IDEAS BEHIND THEM
            </p>
            <div className="h-px bg-border w-16 hidden md:block"></div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-center gap-8 border-y border-border py-4">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                isActive(link.path) ? "text-primary relative after:absolute after:bottom-[-16px] after:left-0 after:w-full after:h-[2px] after:bg-primary" : "text-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex justify-center border-y border-border py-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground hover:text-primary"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            Menu
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-b border-border overflow-hidden bg-background"
          >
            <div className="flex flex-col py-2">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-4 text-center text-xs font-bold uppercase tracking-widest border-b border-border/50 last:border-0 ${
                    isActive(link.path) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { categories } from "@/data/personalities";
import { motion, AnimatePresence } from "framer-motion";

// Past campaigns that have concluded. Add new ones here as they end.
const archivedCampaigns = [
  { path: "/tree-volution", label: "Tree-volution", icon: "🌿", note: "2026" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showArchive, setShowArchive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/10" : "bg-transparent"}`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="Inspire India Talks" className="h-10 w-auto" />
          <span className="font-serif text-lg font-bold text-foreground hidden sm:block">
            Inspire India <span className="text-primary">Talks</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {[
            { path: "/", label: "Home" },
            { path: "/business-insights", label: "Business Insights" },
          ].map(({ path, label }) => (
            <Link key={path} to={path} className={`text-sm font-medium transition-colors hover:text-primary ${isActive(path) ? "text-primary" : "text-foreground/70"}`}>
              {label}
            </Link>
          ))}

          <div className="relative" onMouseEnter={() => setShowCategories(true)} onMouseLeave={() => setShowCategories(false)}>
            <button className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary text-foreground/70">
              Inspiring Voices <ChevronDown className="h-3 w-3" />
            </button>
            <AnimatePresence>
              {showCategories && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute top-full left-0 mt-2 w-72 glass-card py-2 overflow-hidden"
                >
                  {categories.map(cat => (
                    <Link
                      key={cat.slug}
                      to={`/category/${cat.slug}`}
                      className="block px-5 py-3 text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                      onClick={() => setShowCategories(false)}
                    >
                      <span className="mr-3">{cat.icon}</span>{cat.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {[
            { path: "/events", label: "Events" },
          ].map(({ path, label }) => (
            <Link key={path} to={path} className={`text-sm font-medium transition-colors hover:text-primary ${isActive(path) ? "text-primary" : "text-foreground/70"}`}>
              {label}
            </Link>
          ))}

          <div className="relative" onMouseEnter={() => setShowArchive(true)} onMouseLeave={() => setShowArchive(false)}>
            <button className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${archivedCampaigns.some(c => isActive(c.path)) ? "text-primary" : "text-foreground/70"}`}>
              Archive <ChevronDown className="h-3 w-3" />
            </button>
            <AnimatePresence>
              {showArchive && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute top-full right-0 mt-2 w-72 glass-card py-2 overflow-hidden"
                >
                  <div className="px-5 pt-1 pb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Past Campaigns
                  </div>
                  {archivedCampaigns.map(c => (
                    <Link
                      key={c.path}
                      to={c.path}
                      className="flex items-center px-5 py-3 text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                      onClick={() => setShowArchive(false)}
                    >
                      <span className="mr-3">{c.icon}</span>
                      <span className="flex-1">{c.label}</span>
                      <span className="ml-2 text-[10px] font-medium text-muted-foreground border border-border/60 rounded-full px-2 py-0.5">
                        {c.note}
                      </span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {[
            { path: "/contact", label: "Contact" },
          ].map(({ path, label }) => (
            <Link key={path} to={path} className={`text-sm font-medium transition-colors hover:text-primary ${isActive(path) ? "text-primary" : "text-foreground/70"}`}>
              {label}
            </Link>
          ))}
        </div>

        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-3">
              <Link to="/" className="block text-sm font-medium py-2 hover:text-primary" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/business-insights" className="block text-sm font-medium py-2 hover:text-primary" onClick={() => setIsOpen(false)}>Business Insights</Link>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-3">Inspiring Voices</div>
              {categories.map(cat => (
                <Link key={cat.slug} to={`/category/${cat.slug}`} className="block text-sm py-2 pl-3 hover:text-primary" onClick={() => setIsOpen(false)}>
                  {cat.icon} {cat.name}
                </Link>
              ))}
              <Link to="/events" className="block text-sm font-medium py-2 hover:text-primary" onClick={() => setIsOpen(false)}>Events</Link>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-3">Archive</div>
              {archivedCampaigns.map(c => (
                <Link key={c.path} to={c.path} className="flex items-center gap-2 text-sm py-2 pl-3 hover:text-primary" onClick={() => setIsOpen(false)}>
                  <span>{c.icon} {c.label}</span>
                  <span className="text-[10px] font-medium text-muted-foreground border border-border/60 rounded-full px-2 py-0.5">{c.note}</span>
                </Link>
              ))}
              <Link to="/contact" className="block text-sm font-medium py-2 hover:text-primary" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

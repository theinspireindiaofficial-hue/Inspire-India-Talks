import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, Heart, MapPin, Calendar, Users, Leaf, ArrowLeft, ArrowRight, Share2, ZoomIn } from "lucide-react";
import { toast } from "sonner";

interface GalleryItem {
  id: string;
  image: string;
  day: number;
  title: string;
  description: string;
  location: string;
  date: string;
  speciesPlanted: string;
  volunteerCount: number;
  highlight?: boolean;
  position?: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "img-1",
    image: "/images/tree-volution-img/1092e30e-9aaf-489f-8660-01e88e6b1376.JPG",
    day: 1,
    title: "Campaign Kickoff & First Roots",
    description: "Our dedicated founders and core campaign coordinators gathered at Dehradun's outskirts to officially plant the first batch of neem and peepal saplings, marking the start of Tree-volution.",
    location: "Dehradun Forest Zone",
    date: "June 1, 2026",
    speciesPlanted: "Indian Neem & Holy Peepal",
    volunteerCount: 24,
    highlight: true,
    position: "center 5%"
  },
  {
    id: "img-2",
    image: "/images/tree-volution-img/072da783-f60a-4330-b317-47a158b4679f.JPG",
    day: 1,
    title: "Team Seedling Sorting",
    description: "Volunteers carefully cataloging and sorting thousands of indigenous saplings by species before preparing them for local distribution lanes.",
    location: "Dehradun Central Nursery",
    date: "June 1, 2026",
    speciesPlanted: "Diverse Indigenous Species",
    volunteerCount: 15,
    position: "center 20%"
  },
  {
    id: "img-3",
    image: "/images/tree-volution-img/341cbe32-fa37-4619-858f-3f74129e16fd.JPG",
    day: 2,
    title: "Corporate Green Pledge Drive",
    description: "Connecting corporate volunteers with green action. Professionals stepped out of the office to plant saplings in industrial buffer zones.",
    location: "Noida Sector 126 Buffer",
    date: "June 2, 2026",
    speciesPlanted: "Golden Shower (Amaltas)",
    volunteerCount: 40,
    position: "center 8%"
  },
  {
    id: "img-4",
    image: "/images/tree-volution-img/5d031fd6-d952-4e8c-ae32-0870f9954d98.JPG",
    day: 2,
    title: "Digging Deeper for Deforestation",
    description: "Preparing nutrient-rich compost mixtures and excavation zones to support newly adopted saplings through the severe heat wave conditions.",
    location: "Greater Noida Green Belt",
    date: "June 2, 2026",
    speciesPlanted: "Sacred Banyan",
    volunteerCount: 18,
    position: "center 20%"
  },
  {
    id: "img-5",
    image: "/images/tree-volution-img/627356c2-87f1-4e33-9f3e-3ac58db86ced.JPG",
    day: 3,
    title: "Stand For What You Stand On",
    description: "A young student volunteer posing proudly beside her adopted Neem tree, kickstarting the viral #StandForWhatYouStandOn digital challenge.",
    location: "Gurugram Sector 45 Park",
    date: "June 3, 2026",
    speciesPlanted: "Indian Neem",
    volunteerCount: 8,
    position: "center 8%"
  },
  {
    id: "img-6",
    image: "/images/tree-volution-img/8f5e915a-599c-4a9d-b5eb-bf9353ac81ff.JPG",
    day: 3,
    title: "Family Legacy Planting",
    description: "A beautiful multi-generational family effort. Parents and children planting together to build a lasting green legacy for their neighborhood.",
    location: "South Delhi Community Garden",
    date: "June 3, 2026",
    speciesPlanted: "Himalayan Cedar",
    volunteerCount: 12,
    position: "center 20%"
  },
  {
    id: "img-7",
    image: "/images/tree-volution-img/a0076079-33fa-4749-91ad-be845aa1a8d9.JPG",
    day: 4,
    title: "College Campus Green Hub",
    description: "Massive youth turnout at the university plantation drive. Students organized group pledges and distributed flyers encouraging peer adoption.",
    location: "Delhi University North Campus",
    date: "June 4, 2026",
    speciesPlanted: "Holy Peepal & Amaltas",
    volunteerCount: 85,
    highlight: true,
    position: "center 15%"
  },
  {
    id: "img-8",
    image: "/images/tree-volution-img/aeeda918-d6be-4d5d-b1a5-6854c6cf19b1.JPG",
    day: 4,
    title: "Eco-Club Student Leaders",
    description: "University eco-club representatives coordinating the volunteer register, assigning GPS IDs to each newly planted sapling.",
    location: "Delhi University North Campus",
    date: "June 4, 2026",
    speciesPlanted: "Golden Shower",
    volunteerCount: 32,
    position: "center 5%"
  },
  {
    id: "img-9",
    image: "/images/tree-volution-img/dbc21246-9f33-4f48-a40f-4d82165762e5.JPG",
    day: 5,
    title: "Gift-a-Legacy Dedication",
    description: "An heartwarming initiative where local citizens plant saplings dedicated to their ancestors and elders, complete with personalized nameplates.",
    location: "Noida Sector 62 Park",
    date: "June 5, 2026",
    speciesPlanted: "Sacred Banyan",
    volunteerCount: 14,
    position: "center 10%"
  },
  {
    id: "img-10",
    image: "/images/tree-volution-img/e1470d8f-a2b3-4c9a-8145-ab850c02edc7.JPG",
    day: 5,
    title: "Urban Canopy Rows",
    description: "Volunteers planting a protective line of local saplings to shield the neighborhood walkpaths from heat radiation and enhance shade cover.",
    location: "Noida Sector 50 Canopy Line",
    date: "June 5, 2026",
    speciesPlanted: "Indian Neem",
    volunteerCount: 22,
    position: "center 8%"
  },
  {
    id: "img-11",
    image: "/images/tree-volution-img/fc9ca8ff-6090-4cab-b523-2f2f2bff0023.JPG",
    day: 6,
    title: "Gen Z & NSS Community Drive",
    description: "Today's highlights! Vibrant student volunteers from the National Service Scheme (NSS) came together to plant urban green zones and lead localized micro-climate drives.",
    location: "Dwarka Sector 10 Greens",
    date: "June 6, 2026",
    speciesPlanted: "Holy Peepal & Cedar",
    volunteerCount: 110,
    highlight: true,
    position: "center 25%"
  }
];

export default function CampaignGallery() {
  const [filter, setFilter] = useState<number | "all">("all");
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const [likes, setLikes] = useState<{ [key: string]: number }>({});
  const [hasLiked, setHasLiked] = useState<{ [key: string]: boolean }>({});

  // Initialize likes from localStorage or randomize
  useEffect(() => {
    const savedLikes = localStorage.getItem("treevolution_gallery_likes");
    const savedHasLiked = localStorage.getItem("treevolution_gallery_hasliked");
    
    if (savedLikes) {
      setLikes(JSON.parse(savedLikes));
    } else {
      // Seed default random realistic likes
      const initialLikes: { [key: string]: number } = {};
      GALLERY_ITEMS.forEach(item => {
        initialLikes[item.id] = Math.floor(Math.random() * 50) + 40; // 40-90 initial likes
      });
      setLikes(initialLikes);
      localStorage.setItem("treevolution_gallery_likes", JSON.stringify(initialLikes));
    }

    if (savedHasLiked) {
      setHasLiked(JSON.parse(savedHasLiked));
    }
  }, []);

  // Filter gallery items
  const filteredItems = filter === "all" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.day === filter);

  // Active item details for lightbox
  const activeItem = activeItemIndex !== null ? filteredItems[activeItemIndex] : null;

  // Handle like/upvote
  const handleLike = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    
    const itemLiked = hasLiked[id];
    const newLikes = { ...likes };
    const newHasLiked = { ...hasLiked };

    if (itemLiked) {
      newLikes[id] = Math.max(0, (newLikes[id] || 0) - 1);
      newHasLiked[id] = false;
      toast.info("Removed vote.");
    } else {
      newLikes[id] = (newLikes[id] || 0) + 1;
      newHasLiked[id] = true;
      toast.success("Thank you for supporting this plantation story! ❤️");
    }

    setLikes(newLikes);
    setHasLiked(newHasLiked);
    localStorage.setItem("treevolution_gallery_likes", JSON.stringify(newLikes));
    localStorage.setItem("treevolution_gallery_hasliked", JSON.stringify(newHasLiked));
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeItemIndex === null) return;

      if (e.key === "ArrowRight") {
        setActiveItemIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      } else if (e.key === "ArrowLeft") {
        setActiveItemIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      } else if (e.key === "Escape") {
        setActiveItemIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeItemIndex, filteredItems]);

  const handleShare = (item: GalleryItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const shareText = `Check out this amazing tree plantation from Day ${item.day} of the Tree-volution campaign: "${item.title}" in ${item.location}! 🌿`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${window.location.origin}/tree-volution?img=${item.id}`);
      toast.success("Story share link copied to clipboard!");
    } else {
      toast.success(shareText);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#020617] border-t border-white/5">
      {/* Decorative Glow Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-5"
          >
            <Camera className="w-3.5 h-3.5" />
            Tree-volution Live Gallery
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight font-serif mb-5 leading-tight">
            Campaign Moments In Action
          </h2>
          <p className="text-neutral-400 font-sans font-light text-base md:text-lg leading-relaxed">
            Witness the green revolution unfolding day by day. From ground-breaking launch ceremonies to today's student drives, each photo represents a vital step toward our 10,000-tree milestone.
          </p>
        </div>

        {/* Day Filters Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 mb-12 max-w-4xl mx-auto">
          <button
            onClick={() => setFilter("all")}
            className={`px-5 py-2.5 rounded-full border text-xs font-bold transition-all duration-300 ${
              filter === "all"
                ? "bg-gradient-to-r from-emerald-500 to-teal-500 border-transparent text-white shadow-lg shadow-emerald-500/10"
                : "border-white/5 hover:border-emerald-500/20 text-neutral-400 hover:text-neutral-200 bg-neutral-900/40"
            }`}
          >
            All Days (1-6)
          </button>
          
          {[1, 2, 3, 4, 5, 6].map((day) => (
            <button
              key={day}
              onClick={() => setFilter(day)}
              className={`px-5 py-2.5 rounded-full border text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${
                filter === day
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 border-transparent text-white shadow-lg shadow-emerald-500/10"
                  : "border-white/5 hover:border-emerald-500/20 text-neutral-400 hover:text-neutral-200 bg-neutral-900/40"
              }`}
            >
              <span>Day {day}</span>
              {day === 6 && (
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Masonry Styled Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px] max-w-7xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              const itemLiked = hasLiked[item.id];
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setActiveItemIndex(index)}
                  className={`group relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/5 cursor-pointer flex flex-col justify-end p-6 select-none ${
                    item.highlight 
                      ? "md:col-span-2 md:row-span-2" 
                      : "col-span-1 row-span-1"
                  }`}
                >
                  {/* Image Background */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none select-none"
                    style={{ objectPosition: item.position || "center" }}
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />

                  {/* Interactive Glowing Border */}
                  <div className="absolute inset-0 border-2 border-emerald-500/0 group-hover:border-emerald-500/30 rounded-3xl transition-all duration-300 pointer-events-none" />

                  {/* Day Badge & Zoom Action (Top-level) */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10 opacity-90 group-hover:opacity-100 transition-opacity">
                    <span className="px-3 py-1 rounded-lg bg-neutral-950/80 border border-white/10 text-[10px] font-bold text-emerald-400 uppercase tracking-widest backdrop-blur-sm">
                      Day {item.day}
                    </span>
                    <span className="p-2 rounded-lg bg-neutral-950/80 border border-white/10 text-neutral-400 hover:text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                      <ZoomIn className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Bottom Content Area */}
                  <div className="relative z-10 space-y-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-1 text-[11px] text-neutral-400">
                      <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{item.location}</span>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold font-serif text-white tracking-tight leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-neutral-400 text-xs font-sans font-light leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>

                    {/* Actions Row */}
                    <div className="flex justify-between items-center pt-2.5 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={(e) => handleLike(item.id, e)}
                          className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md border transition-all ${
                            itemLiked
                              ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-400"
                              : "border-white/5 hover:border-emerald-500/20 text-neutral-400 hover:text-white"
                          }`}
                        >
                          <Heart className={`w-3.5 h-3.5 ${itemLiked ? "fill-emerald-400 text-emerald-400" : ""}`} />
                          <span>{likes[item.id] || 0}</span>
                        </button>
                        <button
                          onClick={(e) => handleShare(item, e)}
                          className="p-1.5 rounded-md border border-white/5 hover:border-emerald-500/20 text-neutral-400 hover:text-white transition-colors"
                        >
                          <Share2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="text-[10px] text-neutral-500 font-sans tracking-wide">
                        {item.volunteerCount} volunteers
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Immersive Overlay */}
        <AnimatePresence>
          {activeItem !== null && activeItemIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItemIndex(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/90 backdrop-blur-xl cursor-zoom-out"
            >
              {/* Lightbox Card Container */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-6xl rounded-3xl bg-neutral-900 border border-white/10 p-6 md:p-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-10 max-h-[90vh] overflow-y-auto lg:overflow-visible shadow-2xl z-10 text-white cursor-default"
              >
                {/* Close Button - positioned inside card at top right */}
                <button
                  onClick={() => setActiveItemIndex(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full border border-white/5 hover:border-white/20 bg-neutral-950 text-neutral-400 hover:text-white transition-all duration-300 z-30 shadow-md"
                  title="Close Gallery (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Main Image View with navigation overlays */}
                <div className="w-full lg:w-3/5 aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-black flex items-center justify-center shadow-lg relative group">
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: activeItem.position || "center" }}
                  />
                  
                  {/* Subtle vignette inside image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Left Navigation Arrow Overlay on Image */}
                  <button
                    onClick={() => setActiveItemIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/10 hover:border-emerald-500/30 bg-neutral-950/85 hover:bg-neutral-950 text-neutral-400 hover:text-white transition-all transform hover:scale-105 z-20 backdrop-blur-sm shadow-lg"
                    title="Previous Photo (←)"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>

                  {/* Right Navigation Arrow Overlay on Image */}
                  <button
                    onClick={() => setActiveItemIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/10 hover:border-emerald-500/30 bg-neutral-950/85 hover:bg-neutral-950 text-neutral-400 hover:text-white transition-all transform hover:scale-105 z-20 backdrop-blur-sm shadow-lg"
                    title="Next Photo (→)"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  {/* Floating Day Indicator on Image */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1.5 rounded-lg bg-neutral-950/85 border border-white/10 text-xs font-bold text-emerald-400 uppercase tracking-widest backdrop-blur-sm shadow-md">
                      Day {activeItem.day} of 10
                    </span>
                  </div>
                </div>

                {/* Info Description Side Card */}
                <div className="w-full lg:w-2/5 flex flex-col justify-between space-y-6 text-white p-2">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                        Day {activeItem.day} Action
                      </span>
                      {activeItem.day === 6 && (
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-500/10 border border-amber-500/30 text-amber-400 animate-pulse">
                          Live Active
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl md:text-3.5xl font-serif font-black tracking-tight text-white leading-tight">
                      {activeItem.title}
                    </h3>

                    <p className="text-neutral-300 font-sans font-light text-sm md:text-base leading-relaxed">
                      {activeItem.description}
                    </p>
                  </div>

                  {/* Metadata Specs Box */}
                  <div className="grid grid-cols-2 gap-4 bg-neutral-900/60 border border-white/5 p-5 rounded-2xl">
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-4.5 h-4.5 text-emerald-400 flex-shrink-0" />
                      <div>
                        <div className="text-[9px] uppercase tracking-wider text-neutral-500 font-bold">Location</div>
                        <div className="text-xs text-neutral-300 truncate max-w-[150px] font-semibold">{activeItem.location}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Calendar className="w-4.5 h-4.5 text-emerald-400 flex-shrink-0" />
                      <div>
                        <div className="text-[9px] uppercase tracking-wider text-neutral-500 font-bold">Date Planted</div>
                        <div className="text-xs text-neutral-300 font-semibold">{activeItem.date}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Leaf className="w-4.5 h-4.5 text-emerald-400 flex-shrink-0" />
                      <div>
                        <div className="text-[9px] uppercase tracking-wider text-neutral-500 font-bold">Key Species</div>
                        <div className="text-xs text-neutral-300 truncate max-w-[150px] font-semibold">{activeItem.speciesPlanted}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Users className="w-4.5 h-4.5 text-emerald-400 flex-shrink-0" />
                      <div>
                        <div className="text-[9px] uppercase tracking-wider text-neutral-500 font-bold">Volunteers</div>
                        <div className="text-xs text-neutral-300 font-semibold">{activeItem.volunteerCount} Active</div>
                      </div>
                    </div>
                  </div>

                  {/* Lightbox Actions Grid */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <button
                      onClick={() => handleLike(activeItem.id)}
                      className={`flex-1 py-3.5 rounded-xl border font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                        hasLiked[activeItem.id]
                          ? "bg-emerald-500 border-transparent text-white shadow-lg shadow-emerald-500/25 scale-[1.02]"
                          : "border-white/10 hover:border-emerald-500/20 text-neutral-300 hover:text-white bg-neutral-900/40"
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${hasLiked[activeItem.id] ? "fill-white" : ""}`} />
                      <span>{hasLiked[activeItem.id] ? "Upvoted Story" : "Upvote This Story"} ({likes[activeItem.id] || 0})</span>
                    </button>
                    
                    <button
                      onClick={(e) => handleShare(activeItem, e)}
                      className="p-3.5 rounded-xl border border-white/10 hover:border-emerald-500/20 text-neutral-300 hover:text-white bg-neutral-900/40 transition-colors"
                      title="Share Story Link"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

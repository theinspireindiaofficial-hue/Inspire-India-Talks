import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CalendarDays, MapPin, Milestone, Star, CheckCircle2, Circle, Eye, Share2 } from "lucide-react";

interface TimelineDay {
  day: number;
  theme: string;
  title: string;
  objective: string;
  activities: string[];
  status: "completed" | "active" | "upcoming";
  highlight: string;
}

export default function CampaignTimeline() {
  const [activeDay, setActiveDay] = useState<number>(6);

  // ==========================================
  // HARDCODE YOUR DAILY CAMPAIGN STATUSES HERE!
  // Options: "completed" | "active" | "upcoming"
  // Since the campaign is starting soon, they are defaulted to "upcoming".
  // ==========================================
  const timelineDays: TimelineDay[] = [
    {
      day: 1,
      theme: "SHURUWAT HUMSE HI",
      title: "Launch Day & Seed the Revolution",
      objective: "Seeding the campaign with active team leaders, their families, and launching the official GPS portal.",
      activities: [
        "Morning Ground Zero: Team leaders and families plant first trees in local parks, clicking stories.",
        "Official Campaign Launch: Cinematic launch video tag-blasting on YouTube, Instagram & FB.",
        "Founding Member Batch: Launch of special digital batches for early supporters.",
        "WhatsApp Broadcast: Share QR code and payment links to close lists - target 500 trees."
      ],
      status: "completed",
      highlight: "Day 1 completed: Emotional connect initiated. Team stories shared instantly."
    },
    {
      day: 2,
      theme: "KYU ZAROORI HAI EK PED",
      title: "Story Day — Education & Awareness",
      objective: "Spreading factual knowledge about deforestation, localized heatwaves, and climate resilience.",
      activities: [
        "Educational Reels: Launching awareness reels relating recent severe heatwaves to deforested sectors.",
        "Corporate & Startup Outreach: Connecting with Delhi-NCR startups and offices for group pledges.",
        "Influencer Support Announcement: Onboarding environmental voices for caused-based features."
      ],
      status: "completed",
      highlight: "Mainstream focus shift from generic talks to concrete ecological facts."
    },
    {
      day: 3,
      theme: "APNO KO JUDAO",
      title: "Challenge Day — #StandForWhatYouStandOn",
      objective: "Expanding community nodes organically via tag-based viral campaigns.",
      activities: [
        "Challenge Launch: Tag 3 friends and challenge them to adopt a tree or post a planting selfie.",
        "New Moms Initiatives: Promoting mother-child plantation partnerships to plant green roots.",
        "Influencer Co-posts: Expanding the digital ripple effect across regional networks."
      ],
      status: "completed",
      highlight: "Launching the primary social challenge: Stand For What You Stand On."
    },
    {
      day: 4,
      theme: "ZAMEEN PE UTRO",
      title: "On-Field Day — Schools, Colleges & Societies",
      objective: "Direct physical activation and pamphlet distribution across Delhi NCR regions.",
      activities: [
        "Campus Outreach: Visiting schools, universities, and housing societies in Noida and Delhi.",
        "QR Leaflets: Distributing physical flyers/pamphlets with direct Scan-to-Plant QR codes.",
        "T-Shirt Incentives: Distribute official campaign T-Shirts to individuals adopting 2+ trees."
      ],
      status: "completed",
      highlight: "Bridging the online campaign into high-density local residential sectors."
    },
    {
      day: 5,
      theme: "APNE APKO KLIYE",
      title: "Progress Day — Gift a Legacy",
      objective: "Highlighting key donor milestones and pitching updates to local media channels.",
      activities: [
        "Media Releases: Sending press notes and localized data to regional newspapers and channels.",
        "Support Spotlight: Publishing live lists of co-sponsors and overall trees booked.",
        "Gift-a-Plant: Encouraging users to purchase and dedicate a tree to family members as birthday gifts."
      ],
      status: "completed",
      highlight: "Securing local newspaper features and highlighting top active donors."
    },
    {
      day: 6,
      theme: "GEN Z KI ZIMMEDARI",
      title: "Gen Z & Student Mobilization",
      objective: "Activating youth groups (NCC, NSS) to lead local urban canopy plans.",
      activities: [
        "NCC/NSS Partnership: Setting up campus-wide drives and volunteering lists.",
        "Student Reels: Collaboration with college influencers posting 'Plant a tree for your future'.",
        "Campus Leaderboard: Competing college groups on digital charts."
      ],
      status: "active",
      highlight: "Direct student partnerships generating strong volunteer numbers."
    },
    {
      day: 7,
      theme: "CHAAVN",
      title: "Shade Day — The Shield of Green",
      objective: "Connecting heat relief with tree canopies through positive visual storytelling.",
      activities: [
        "Photo Drive: Ask users to click and post photos of local trees giving shade to street vendors, parked bikes, or homes.",
        "Shade Relief Stories: Highlighting how mature canopies drop local asphalt temperatures by up to 8°C.",
        "Vendor Spotlight: Providing compost and saplings to micro-merchants."
      ],
      status: "upcoming",
      highlight: "Emotional connection: Appreciating canopies that shield us in scorching summers."
    },
    {
      day: 8,
      theme: "OFFICIAL SUPPORT",
      title: "Institutional Day — Government & MCD Alliances",
      objective: "Securing government validation, local land zones, and wider institutional safety.",
      activities: [
        "Public Alliances: Engaging local MLAs, MCD councilors, and Delhi Development Authority (DDA).",
        "Press Release: Official statements highlighting corporate CSR alignments.",
        "Joint Plantation: Interactive drives alongside veteran NGO caretakers."
      ],
      status: "upcoming",
      highlight: "Formalizing land permissions in designated municipal zones."
    },
    {
      day: 9,
      theme: "KAL AKHRI MAUKA",
      title: "Countdown Day — The Final Push",
      objective: "Creating heavy urgency to close the 10,000 trees threshold.",
      activities: [
        "Urgency Countdown: Launching hourly stories and leaderboard updates.",
        "Donor Hype: Special shoutouts to major co-sponsors and corporate donors.",
        "Bonus Package: Launching the Eco-Kit offer for sponsors who adopt 10+ trees (₹990)."
      ],
      status: "upcoming",
      highlight: "T-Minus 24 hours. The final stretch to seal the legacy list."
    },
    {
      day: 10,
      theme: "MISSION JAARI RAKHO",
      title: "Grand Finale — The Forest is Born",
      objective: "Announcing final fund collections, honoring partners, and finalizing plantation maps.",
      activities: [
        "Grand Finale Live: Broadcast showcasing team thank yous and total collections.",
        "Plantation Date Reveal: Announcing the exact upcoming day the physical plantation will commence.",
        "Donor Ledger Release: Publishing the complete, transparent directory of every single tree ID."
      ],
      status: "upcoming",
      highlight: "10,000 Trees milestone achieved. The physical campaign preparation begins!"
    }
  ];

  const currentDayInfo = timelineDays.find((d) => d.day === activeDay) || timelineDays[0];

  return (
    <section className="py-28 relative overflow-hidden bg-[#030712] border-t border-white/5">
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-5"
          >
            <Milestone className="w-3.5 h-3.5" />
            10-Day Journey Roadmap
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight font-serif mb-5">
            The Campaign Timeline
          </h2>
          <p className="text-neutral-400 font-sans font-light text-base md:text-lg leading-relaxed">
            Discover our comprehensive 10-day blueprint. We alternate between ground mobilization, educational storytelling, Gen Z activation, and institutional support to secure 10,000 saplings.
          </p>
        </div>

        {/* Days Horizontal Navigation Selector */}
        <div className="flex overflow-x-auto gap-3 pb-6 scrollbar-none snap-x justify-start lg:justify-between max-w-5xl mx-auto border-b border-white/5 mb-12">
          {timelineDays.map((day) => {
            const isActive = day.day === activeDay;
            return (
              <button
                key={day.day}
                onClick={() => setActiveDay(day.day)}
                className={`snap-center flex-shrink-0 flex flex-col items-start gap-1 px-5 py-3 rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-br from-emerald-500 to-teal-500 border-transparent text-white shadow-[0_4px_15px_rgba(16,185,129,0.25)] scale-102"
                    : "border-white/5 hover:border-emerald-500/20 text-neutral-400 hover:text-neutral-200 bg-neutral-900/30"
                }`}
              >
                <div className="flex items-center gap-2">
                  {day.status === "completed" && (
                    <CheckCircle2 className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-emerald-400"}`} />
                  )}
                  {day.status === "active" && (
                    <Circle className={`w-3.5 h-3.5 animate-pulse ${isActive ? "text-white" : "text-amber-400"}`} fill="currentColor" />
                  )}
                  {day.status === "upcoming" && (
                    <Circle className="w-3.5 h-3.5 text-neutral-600" />
                  )}
                  <span className="text-xs uppercase tracking-wider font-bold">Day {day.day}</span>
                </div>
                <span className={`text-[10px] uppercase font-sans tracking-wide mt-0.5 truncate max-w-[120px] ${isActive ? "text-neutral-100" : "text-neutral-500"}`}>
                  {day.theme.split(" ")[0]}...
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Active Day Card Details */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="glass-card border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

              {/* Header block */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-8 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 font-bold uppercase tracking-wider text-xs font-sans">
                      Day {currentDayInfo.day} Theme
                    </span>
                    <span className={`px-2.5 py-0.5 rounded text-xs font-semibold uppercase tracking-wider ${
                      currentDayInfo.status === "completed" 
                        ? "bg-emerald-500/20 text-emerald-300"
                        : currentDayInfo.status === "active"
                        ? "bg-amber-500/20 text-amber-300 animate-pulse"
                        : "bg-neutral-800 text-neutral-400"
                    }`}>
                      {currentDayInfo.status}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-3.5xl font-black text-emerald-400 font-serif tracking-tight leading-tight uppercase">
                    “{currentDayInfo.theme}”
                  </h3>
                  <p className="text-white text-lg font-sans font-medium mt-2 leading-relaxed">
                    {currentDayInfo.title}
                  </p>
                </div>
              </div>

              {/* Core Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                {/* Objective and Highlights */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-neutral-500 font-sans font-semibold mb-3">
                      Core Objective
                    </h4>
                    <p className="text-neutral-200 text-lg font-sans font-light leading-relaxed">
                      {currentDayInfo.objective}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-neutral-900/50 border border-emerald-500/10 flex items-start gap-4 shadow-sm">
                    <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-400 mt-0.5">
                      <Star className="w-4.5 h-4.5" fill="currentColor" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-emerald-400/80 font-bold font-sans">
                        Daily Milestone Focus
                      </div>
                      <p className="text-neutral-400 text-sm font-sans font-light leading-relaxed mt-1">
                        {currentDayInfo.highlight}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Day Activities List */}
                <div className="lg:col-span-5">
                  <h4 className="text-xs uppercase tracking-widest text-neutral-500 font-sans font-semibold mb-4">
                    Social & Ground Activities
                  </h4>
                  <ul className="space-y-4">
                    {currentDayInfo.activities.map((act, index) => (
                      <li key={index} className="flex gap-3 text-sm text-neutral-300 font-sans font-light leading-relaxed">
                        <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mt-0.5">
                          {index + 1}
                        </span>
                        {act}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

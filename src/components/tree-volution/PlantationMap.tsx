import { useState } from "react";
import { motion as motionFramer, AnimatePresence } from "framer-motion";
import { MapPin, Trees, ShieldAlert, ChevronLeft, Maximize2, Compass } from "lucide-react";

interface LocalZone {
  id: number;
  name: string;
  trees: number;
  coordinates: string;
  status: "Planned" | "Active" | "Completed";
  description: string;
  x: string; // Relative X on the Delhi-Noida SVG
  y: string; // Relative Y on the Delhi-Noida SVG
}

interface NationalHub {
  id: string;
  name: string;
  state: string;
  trees: number;
  coordinates: string;
  status: "Planned" | "Active" | "Completed";
  description: string;
  x: string; // Relative X on India Map
  y: string; // Relative Y on India Map
  canZoom: boolean;
}

export default function PlantationMap() {
  const [viewMode, setViewMode] = useState<"national" | "local">("national");
  const [activeHubId, setActiveHubId] = useState<string>("h1");
  const [activeLocalZoneId, setActiveLocalZoneId] = useState<number>(1);

  // ==========================================
  // 1. NATIONAL INDIA CAMPAIGN HUBS
  // ==========================================
  const nationalHubs: NationalHub[] = [
    {
      id: "h1",
      name: "Delhi NCR Command Center",
      state: "Delhi & Noida",
      trees: 10000,
      coordinates: "28.6139° N, 77.2090° E",
      status: "Planned",
      description: "Our primary plantation blitz covering 4 major zones in Noida and Delhi. Click 'Zoom into Noida & Delhi' to view exact localized coordinate pins!",
      x: "34%",
      y: "28%",
      canZoom: true
    },
    {
      id: "h2",
      name: "Western Ghats Slopes",
      state: "Satara, Maharashtra",
      trees: 3500,
      coordinates: "17.6805° N, 73.9918° E",
      status: "Planned",
      description: "Securing landslide-prone denuded hillsides in Satara using native water-retentive Shola species.",
      x: "24%",
      y: "65%",
      canZoom: false
    },
    {
      id: "h3",
      name: "Heritage Foothill Nurseries",
      state: "Dehradun, Uttarakhand",
      trees: 5000,
      coordinates: "30.3165° N, 78.0322° E",
      status: "Planned",
      description: "Launch center managing decentralized native nurseries and community soil coordination.",
      x: "38%",
      y: "20%",
      canZoom: false
    },
    {
      id: "h4",
      name: "Resilient Mangrove Belts",
      state: "Sundarbans Delta, West Bengal",
      trees: 2500,
      coordinates: "21.9497° N, 89.1833° E",
      status: "Planned",
      description: "Coastal bio-shields designed to protect riverbank boundaries from monsoon tidal surges.",
      x: "72%",
      y: "48%",
      canZoom: false
    }
  ];

  // ==========================================
  // 2. HARDCODED LOCAL NOIDA/DELHI ZONES
  // ==========================================
  const localZones: LocalZone[] = [
    {
      id: 1,
      name: "Sector 62 Parkways, Noida",
      trees: 1500,
      coordinates: "28.6284° N, 77.3611° E",
      status: "Planned",
      description: "Dense urban avenue plantation targeted to reduce localized concrete heating in IT corridors.",
      x: "72%",
      y: "35%"
    },
    {
      id: 2,
      name: "Okhla Bird Sanctuary Border, Noida",
      trees: 2500,
      coordinates: "28.5683° N, 77.3159° E",
      status: "Planned",
      description: "Marshland-friendly indigenous species to support regional wetlands bird populations.",
      x: "62%",
      y: "55%"
    },
    {
      id: 3,
      name: "Aravalli Bio-Diversity Hills, South Delhi",
      trees: 3500,
      coordinates: "28.4804° N, 77.1682° E",
      status: "Planned",
      description: "Mining-barren rugged slopes selected for native seed bombing and robust dryland forestry.",
      x: "28%",
      y: "75%"
    },
    {
      id: 4,
      name: "Yamuna Floodplain Basins, East Delhi",
      trees: 2500,
      coordinates: "28.6415° N, 77.2792° E",
      status: "Planned",
      description: "Riverbank protection belts planting highly water-retentive native reeds and trees.",
      x: "52%",
      y: "28%"
    }
  ];

  const selectedHub = nationalHubs.find(h => h.id === activeHubId) || nationalHubs[0];
  const selectedLocalZone = localZones.find(z => z.id === activeLocalZoneId) || localZones[0];

  return (
    <section className="py-28 relative overflow-hidden bg-[#030712] border-t border-white/5">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motionFramer.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-5"
          >
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            Ecological Command Center
          </motionFramer.div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight font-serif mb-5">
            Plantation Map & Ledger
          </h2>
          <p className="text-neutral-400 font-sans font-light text-base md:text-lg leading-relaxed">
            Click on campaign hubs across India on our national map. Zoom in to explore specific local plantation coordinates and targets in Delhi and Noida!
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 glass-card border border-white/5 rounded-3xl p-6 md:p-8 relative overflow-hidden">
          
          {/* Map Section Panel */}
          <div className="lg:col-span-7 bg-neutral-950/70 rounded-2xl border border-white/5 relative aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center p-4 shadow-inner overflow-hidden min-h-[380px] group">
            
            {/* View Switch Overlay Buttons */}
            {viewMode === "local" && (
              <button
                onClick={() => setViewMode("national")}
                className="absolute top-4 left-4 z-30 px-3.5 py-2 rounded-xl bg-neutral-900/90 hover:bg-neutral-900 border border-white/10 hover:border-emerald-500/30 text-xs text-emerald-400 font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-md transition-all hover:scale-103"
              >
                <ChevronLeft className="w-4 h-4" />
                Back to India Map
              </button>
            )}

            {/* Render view modes with smooth transitions */}
            <AnimatePresence mode="wait">
              {viewMode === "national" ? (
                
                // ==========================================
                // NATIONAL INDIA VECTOR MAP SUITE
                // ==========================================
                <motionFramer.div
                  key="national-map"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full flex items-center justify-center p-6"
                >
                  {/* Styled High-tech India Map Silhouette */}
                  <svg 
                    className="w-full h-full max-h-[90%] object-contain" 
                    viewBox="0 0 400 450" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <filter id="glow-neon" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    {/* India Map stylized curves path */}
                    <motionFramer.path
                      d="M 140,5 C 150,15 160,20 170,12 C 180,5 185,15 178,25 C 172,35 188,40 185,50 C 182,60 170,75 168,85 C 166,95 155,100 148,110 C 141,120 140,130 130,138 C 120,146 115,150 108,160 C 101,170 95,168 85,178 C 75,188 65,190 55,200 C 45,210 35,215 25,230 C 15,245 25,260 30,270 C 35,280 40,285 45,290 C 50,295 55,290 60,305 C 65,320 72,330 85,340 C 98,350 110,360 118,375 C 126,390 140,410 148,425 C 156,440 162,442 165,445 C 168,448 178,440 185,420 C 192,400 205,370 212,350 C 219,330 220,310 228,290 C 236,270 240,250 248,230 C 256,210 262,205 272,215 C 282,225 292,230 302,220 C 312,210 325,200 338,198 C 351,196 360,205 372,210 C 384,215 390,200 395,190 C 400,180 392,170 385,165 C 378,160 370,150 365,142 C 360,134 350,125 342,120 C 334,115 320,120 315,110 C 310,100 295,95 288,85 C 281,75 270,72 260,62 C 250,52 240,40 230,35 C 220,30 200,28 190,20 C 180,12 160,8 140,5 Z"
                      fill="rgba(16, 185, 129, 0.02)"
                      stroke="rgba(16, 185, 129, 0.3)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Regional Map Divisions decor */}
                    <path d="M 120,138 C 170,145 220,150 270,138" stroke="rgba(16, 185, 129, 0.1)" strokeWidth="0.8" strokeDasharray="3 3" />
                    <path d="M 185,50 C 210,120 228,290 212,350" stroke="rgba(16, 185, 129, 0.1)" strokeWidth="0.8" strokeDasharray="3 3" />

                    {/* Scan grid effect */}
                    <circle cx="168" cy="110" r="100" stroke="rgba(16, 185, 129, 0.05)" strokeWidth="0.5" />
                    <circle cx="168" cy="110" r="50" stroke="rgba(16, 185, 129, 0.05)" strokeWidth="0.5" />
                  </svg>

                  {/* Header stamp */}
                  <div className="absolute top-4 right-4 text-[10px] tracking-[0.2em] text-neutral-500 font-bold uppercase select-none">
                    National Map // Click Hub to View
                  </div>

                  {/* Winding coordinates indicators */}
                  <div className="absolute bottom-4 left-4 text-[9px] font-mono text-neutral-600 uppercase select-none tracking-widest">
                    SYS.LOC // 20.5937° N, 78.9629° E
                  </div>

                  {/* Map Interactive Pins */}
                  {nationalHubs.map((hub) => {
                    const isActive = hub.id === activeHubId;
                    return (
                      <button
                        key={hub.id}
                        onClick={() => setActiveHubId(hub.id)}
                        style={{ left: hub.x, top: hub.y }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 p-2.5 group transition-transform"
                      >
                        <div className="relative flex items-center justify-center">
                          {/* Radial glowing pulse */}
                          <div className={`absolute w-9 h-9 rounded-full bg-emerald-500/20 blur-sm scale-75 group-hover:scale-100 transition-transform ${
                            isActive ? "opacity-100 animate-ping" : "opacity-0 group-hover:opacity-100"
                          }`} />

                          {/* Outer circular badge */}
                          <div className={`relative w-7 h-7 rounded-full border flex items-center justify-center transition-all ${
                            isActive
                              ? "bg-emerald-500 border-emerald-400 text-neutral-950 shadow-[0_0_12px_rgba(16,185,129,0.4)]"
                              : "bg-neutral-900 border-white/10 hover:border-emerald-500/30 text-emerald-400"
                          }`}>
                            <MapPin className="w-3.5 h-3.5" />
                          </div>

                          {/* Floating Hub Name label */}
                          <span className="absolute bottom-[32px] left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-neutral-950/95 border border-white/15 text-[8px] font-bold text-white tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity font-sans pointer-events-none shadow-md">
                            {hub.name.split(" ")[0]} Hub
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </motionFramer.div>
              ) : (
                
                // ==========================================
                // REGIONAL DELHI-NOIDA BLUEPRINT
                // ==========================================
                <motionFramer.div
                  key="local-map"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full flex items-center justify-center"
                >
                  {/* Beautiful, Glowing High-Tech SVG Map representing actual Delhi-NCR & Noida Geography */}
                  <svg 
                    className="absolute inset-0 w-full h-full" 
                    viewBox="0 0 500 500" 
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <filter id="glow-river" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                      <pattern id="local-tech-grid" width="25" height="25" patternUnits="userSpaceOnUse">
                        <path d="M 25 0 L 0 0 0 25" fill="none" stroke="rgba(16, 185, 129, 0.07)" strokeWidth="0.5"/>
                      </pattern>
                    </defs>

                    {/* Grid Background */}
                    <rect width="100%" height="100%" fill="url(#local-tech-grid)" />

                    {/* Grid Tech Lines */}
                    <line x1="0" y1="125" x2="500" y2="125" stroke="rgba(16, 185, 129, 0.12)" strokeWidth="0.5" strokeDasharray="5 5" />
                    <line x1="0" y1="250" x2="500" y2="250" stroke="rgba(16, 185, 129, 0.12)" strokeWidth="0.5" />
                    <line x1="0" y1="375" x2="500" y2="375" stroke="rgba(16, 185, 129, 0.12)" strokeWidth="0.5" strokeDasharray="5 5" />
                    <line x1="125" y1="0" x2="125" y2="500" stroke="rgba(16, 185, 129, 0.12)" strokeWidth="0.5" strokeDasharray="5 5" />
                    <line x1="250" y1="0" x2="250" y2="500" stroke="rgba(16, 185, 129, 0.12)" strokeWidth="0.5" />
                    <line x1="375" y1="0" x2="375" y2="500" stroke="rgba(16, 185, 129, 0.12)" strokeWidth="0.5" strokeDasharray="5 5" />

                    {/* Radar Sweep lines */}
                    <circle cx="250" cy="250" r="210" stroke="rgba(16, 185, 129, 0.05)" fill="none" strokeWidth="1.5" strokeDasharray="10 5" />
                    <circle cx="250" cy="250" r="140" stroke="rgba(16, 185, 129, 0.08)" fill="none" strokeWidth="1" />

                    {/* Delhi Contour Outline */}
                    <path 
                      d="M 120,40 Q 60,130 90,260 T 180,410 Q 300,440 380,370 T 360,180 T 220,40 Z" 
                      fill="rgba(16, 185, 129, 0.02)" 
                      stroke="rgba(16, 185, 129, 0.25)" 
                      strokeWidth="1.5" 
                      strokeLinecap="round"
                    />

                    {/* Winding Yamuna River (Glowing Neon Blue Flow) */}
                    <path 
                      d="M 230,0 C 250,90 280,160 240,240 C 210,300 270,360 320,400 C 350,430 330,470 350,500" 
                      fill="none" 
                      stroke="#0ea5e9" 
                      strokeWidth="3.5" 
                      strokeOpacity="0.8"
                      filter="url(#glow-river)"
                      strokeLinecap="round"
                    />
                    
                    {/* Winding Yamuna River edge */}
                    <path 
                      d="M 230,0 C 250,90 280,160 240,240 C 210,300 270,360 320,400 C 350,430 330,470 350,500" 
                      fill="none" 
                      stroke="#14b8a6" 
                      strokeWidth="1.5" 
                      strokeOpacity="0.9"
                      strokeLinecap="round"
                    />

                    {/* Delhi / Noida Border Dash Line */}
                    <path 
                      d="M 240,240 C 300,245 370,230 500,260" 
                      fill="none" 
                      stroke="rgba(255, 255, 255, 0.12)" 
                      strokeWidth="1" 
                      strokeDasharray="5 5" 
                    />

                    {/* Geographic Text labels */}
                    <text x="75" y="240" fill="rgba(255, 255, 255, 0.15)" fontSize="9" fontWeight="bold" letterSpacing="2" className="font-sans select-none">
                      DELHI REGION
                    </text>
                    <text x="365" y="300" fill="rgba(255, 255, 255, 0.15)" fontSize="9" fontWeight="bold" letterSpacing="2" className="font-sans select-none">
                      NOIDA REGION
                    </text>
                    <text x="80" y="440" fill="rgba(16, 185, 129, 0.25)" fontSize="8" fontWeight="bold" letterSpacing="1" className="font-sans select-none">
                      ARAVALLI BIO-RANGES
                    </text>
                    <text x="145" y="160" fill="rgba(14, 165, 233, 0.3)" fontSize="7" fontWeight="bold" letterSpacing="1" transform="rotate(78 145 160)" className="font-sans select-none">
                      YAMUNA RIVER
                    </text>
                  </svg>

                  {/* Header text stamp */}
                  <div className="absolute top-4 right-4 text-[10px] tracking-[0.2em] text-neutral-500 font-bold uppercase select-none font-sans flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    LOCAL ZONES // NOIDA & DELHI
                  </div>

                  {/* Local coordinate pins */}
                  {localZones.map((zone) => {
                    const isActive = zone.id === activeLocalZoneId;
                    return (
                      <button
                        key={zone.id}
                        onClick={() => setActiveLocalZoneId(zone.id)}
                        style={{ left: zone.x, top: zone.y }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 p-2 group transition-all"
                      >
                        <div className="relative flex items-center justify-center">
                          <div className={`absolute w-9 h-9 rounded-full bg-emerald-500/20 blur-sm scale-75 group-hover:scale-100 transition-transform ${
                            isActive ? "opacity-100 animate-ping" : "opacity-0 group-hover:opacity-100"
                          }`} />

                          <div className={`relative w-7 h-7 rounded-full border flex items-center justify-center transition-all ${
                            isActive
                              ? "bg-emerald-500 border-emerald-400 text-neutral-950 shadow-[0_0_12px_rgba(16,185,129,0.4)]"
                              : "bg-neutral-900 border-white/10 hover:border-emerald-500/30 text-emerald-400"
                          }`}>
                            <MapPin className="w-3.5 h-3.5" />
                          </div>

                          <span className="absolute bottom-[32px] left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded bg-neutral-950/95 border border-white/10 text-[8px] font-bold text-white tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity font-sans pointer-events-none shadow-md">
                            {zone.name.split(",")[0]}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </motionFramer.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Section Panel: Hub / Local Zone Details */}
          <div className="lg:col-span-5 flex flex-col justify-between p-2">
            <AnimatePresence mode="wait">
              {viewMode === "national" ? (
                
                // ==========================================
                // NATIONAL HUB SIDEBAR DATA
                // ==========================================
                <motionFramer.div
                  key={activeHubId}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div>
                      <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest font-sans">
                        Hub Status
                      </span>
                      <div className="flex items-center gap-2 mt-1 select-none">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs uppercase font-bold text-emerald-400 font-sans tracking-wider">
                          {selectedHub.status}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest font-sans block">
                        GPS Core
                      </span>
                      <span className="text-xs font-semibold text-neutral-300 font-mono mt-1 block">
                        {selectedHub.coordinates}
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest font-sans">
                      National Campaign Hub
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold font-serif text-white tracking-tight leading-tight mt-1">
                      {selectedHub.name}
                    </h3>
                    <p className="text-[11px] text-neutral-500 font-bold uppercase tracking-wider mt-1.5 font-sans">
                      State: {selectedHub.state}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest font-sans">
                      Hub Target Goal
                    </span>
                    <p className="text-neutral-300 text-sm font-sans font-light leading-relaxed mt-2">
                      {selectedHub.description}
                    </p>
                  </div>

                  {/* Quotas panel card */}
                  <div className="p-5 rounded-2xl bg-neutral-950 border border-white/5 flex items-center justify-between shadow-inner">
                    <div>
                      <span className="text-[9px] text-neutral-500 font-bold uppercase tracking-widest font-sans">
                        Quota Target
                      </span>
                      <div className="text-2xl font-black font-serif text-white mt-1">
                        {selectedHub.trees.toLocaleString()} Trees
                      </div>
                    </div>
                    <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                      <Trees className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Direct Zoom Action for Delhi Hub */}
                  {selectedHub.canZoom && (
                    <button
                      onClick={() => setViewMode("local")}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-1.5 shadow-[0_5px_15px_rgba(16,185,129,0.15)]"
                    >
                      <Maximize2 className="w-4 h-4" />
                      Zoom Into Noida & Delhi NCR
                    </button>
                  )}
                </motionFramer.div>
              ) : (
                
                // ==========================================
                // LOCAL ZONE SIDEBAR DATA
                // ==========================================
                <motionFramer.div
                  key={activeLocalZoneId}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div>
                      <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest font-sans">
                        Local Area Status
                      </span>
                      <div className="flex items-center gap-2 mt-1 select-none">
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                        <span className="text-xs uppercase font-bold text-amber-400 font-sans tracking-wider">
                          {selectedLocalZone.status}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest font-sans block">
                        GPS Coordinates
                      </span>
                      <span className="text-xs font-semibold text-neutral-300 font-mono mt-1 block">
                        {selectedLocalZone.coordinates}
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest font-sans">
                      Noida/Delhi Local Zone
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold font-serif text-white tracking-tight leading-tight mt-1">
                      {selectedLocalZone.name}
                    </h3>
                  </div>

                  <div>
                    <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest font-sans">
                      Zone Objective
                    </span>
                    <p className="text-neutral-300 text-sm font-sans font-light leading-relaxed mt-2">
                      {selectedLocalZone.description}
                    </p>
                  </div>

                  {/* Quotas card */}
                  <div className="p-5 rounded-2xl bg-neutral-950 border border-white/5 flex items-center justify-between shadow-inner">
                    <div>
                      <span className="text-[9px] text-neutral-500 font-bold uppercase tracking-widest font-sans">
                        Zone Target Allocation
                      </span>
                      <div className="text-2xl font-black font-serif text-white mt-1">
                        {selectedLocalZone.trees.toLocaleString()} Trees
                      </div>
                    </div>
                    <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                      <Trees className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-[10px] text-neutral-500 font-sans leading-relaxed">
                    <ShieldAlert className="w-4 h-4 text-neutral-600 flex-shrink-0 mt-0.5" />
                    <span>
                      Zone data is pre-allocated inside municipal land banks to ensure localized shade relief and tree survival.
                    </span>
                  </div>
                </motionFramer.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

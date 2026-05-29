import { useEffect, useRef, useState } from "react";
import { motion as motionFramer, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { toast } from "sonner";
import { X, CreditCard, Leaf, CheckCircle2, User, Mail, Award, ArrowRight, Share2, Clipboard, ShieldCheck, Check, TreePine, QrCode } from "lucide-react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/tree-volution/HeroSection";
import ImpactCounter from "@/components/tree-volution/ImpactCounter";
import AboutMovement from "@/components/tree-volution/AboutMovement";
import WhyItMatters from "@/components/tree-volution/WhyItMatters";
import CampaignTimeline from "@/components/tree-volution/CampaignTimeline";
import HowItWorks from "@/components/tree-volution/HowItWorks";
import CertificateDemo from "@/components/tree-volution/CertificateDemo";
import TrustAndTransparency from "@/components/tree-volution/TrustAndTransparency";
import PlantationMap from "@/components/tree-volution/PlantationMap";
import ActivitiesShowcase from "@/components/tree-volution/ActivitiesShowcase";
import ImpactVisualization from "@/components/tree-volution/ImpactVisualization";
import OrganizationSection from "@/components/tree-volution/OrganizationSection";
import FinalCTA from "@/components/tree-volution/FinalCTA";

interface SponsorshipTier {
  id: string;
  name: string;
  price: number;
  trees: number;
  badge: string;
  perks: string[];
}

export default function TreeVolution() {
  const exploreRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStep, setFormStep] = useState<"details" | "pay" | "success">("details");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  // Form Fields
  const [formData, setFormData] = useState({
    sponsorName: "",
    sponsorEmail: "",
    plateName: "",
    species: "Indian Neem (Azadirachta indica)"
  });

  // Tiers List
  const tiers: SponsorshipTier[] = [
    {
      id: "t1",
      name: "1 Tree Seedling",
      price: 99,
      trees: 1,
      badge: "Co-Sponsor",
      perks: ["1 Tree planted", "Digital Certificate", "GPS Location pin"]
    },
    {
      id: "t2",
      name: "3 Trees Legacy",
      price: 299,
      trees: 3,
      badge: "Legacy Sponsor",
      perks: ["3 Trees planted", "Your Name on physical tree plate", "Digital Certificate", "GPS location pins"]
    },
    {
      id: "t3",
      name: "7 Trees Green Citizen",
      price: 699,
      trees: 7,
      badge: "Green Citizen Owner",
      perks: ["7 Trees planted", "Green Citizen Owner Status", "Your name printed on trees", "Official Green Citizen Card"]
    },
    {
      id: "t4",
      name: "10 Trees Eco Champion",
      price: 1000,
      trees: 10,
      badge: "Eco Champion",
      perks: ["10 Trees planted", "Eco Champion status", "Founding member batch", "Official Green Citizen Card", "Public Dashboard Highlight"]
    }
  ];

  const [selectedTierId, setSelectedTierId] = useState<string>("t1");
  const [isCustomCount, setIsCustomCount] = useState(false);
  const [customTreeCount, setCustomTreeCount] = useState<number>(12);
  const [payMethod, setPayMethod] = useState<"razorpay" | "qr">("razorpay");

  // Determine current trees count and total price
  const activeTier = tiers.find(t => t.id === selectedTierId);
  const saplingCount = isCustomCount ? customTreeCount : (activeTier?.trees || 1);
  const totalPrice = isCustomCount ? customTreeCount * 99 : (activeTier?.price || 99);
  const tierNameLabel = isCustomCount ? "Custom Plan" : (activeTier?.name || "1 Tree Seedling");
  const tierBadgeLabel = isCustomCount ? "Earth Advocate" : (activeTier?.badge || "Co-Sponsor");

  // Page Scroll Progress Indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.title = "Tree-volution | Inspire India Talks";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleExploreClick = () => {
    exploreRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePlantClick = () => {
    setIsModalOpen(true);
    setFormStep("details");
    setIsSubmitting(false);
    setPayMethod("razorpay");
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDetailsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.sponsorName || !formData.sponsorEmail || !formData.plateName) {
      toast.error("Please fill in all requested fields to proceed.");
      return;
    }

    setIsSubmitting(true);
    toast.loading("Submitting your sponsorship registration...");

    try {
      // Direct Web3Forms Submission POST
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "ad8b4721-1bf3-4775-b15a-fdb7e6da1261",
          subject: `New Tree-volution Sponsorship - ₹${totalPrice}`,
          from_name: "Tree-volution Website Portal",
          sponsor_name: formData.sponsorName,
          sponsor_email: formData.sponsorEmail,
          plate_name: formData.plateName,
          tree_species: formData.species,
          sponsorship_tier: tierNameLabel,
          sapling_count: saplingCount,
          total_price_inr: totalPrice
        })
      });

      const resData = await response.json();
      toast.dismiss();

      if (resData.success) {
        toast.success("Details successfully logged! Generating your payment portal.");
        setFormStep("pay");
      } else {
        // Fallback in case of verification issues to ensure sponsorship flow remains unbroken
        console.warn("Web3Forms warning:", resData.message);
        toast.info("Proceeding directly to payment gateway.");
        setFormStep("pay");
      }
    } catch (error) {
      console.error("Web3Forms submission failed:", error);
      toast.dismiss();
      toast.info("Connection offline. Proceeding directly to payment gateway.");
      setFormStep("pay");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyUpi = () => {
    navigator.clipboard.writeText("ilmeza4612@fbl");
    setCopied(true);
    toast.success("UPI ID successfully copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({
      sponsorName: "",
      sponsorEmail: "",
      plateName: "",
      species: "Indian Neem (Azadirachta indica)"
    });
    setSelectedTierId("t1");
    setIsCustomCount(false);
  };

  // Pre-filled WhatsApp direct message trigger
  const whatsappNumber = "9718776830";
  const whatsappMessage = encodeURIComponent(
    `Hi! I have sponsored ${saplingCount} tree(s) for the Tree-volution campaign!\n\n` +
    `Sponsor Name: ${formData.sponsorName}\n` +
    `Email: ${formData.sponsorEmail}\n` +
    `Name on Plate: ${formData.plateName}\n` +
    `Species selected: ${formData.species}\n` +
    `Sponsorship Tier: ${tierNameLabel}\n` +
    `Total Amount: ₹${totalPrice}\n\n` +
    `Attached is my transaction payment screenshot below:`
  );
  const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${whatsappMessage}`;

  // Functional scan to pay UPI link
  // upi://pay?pa=PAYEE_ADDRESS&pn=PAYEE_NAME&am=AMOUNT&cu=INR
  const payeeAddress = "ilmeza4612@fbl";
  const payeeName = "Ilmeza Foundation";
  const upiLink = `upi://pay?pa=${payeeAddress}&pn=${encodeURIComponent(payeeName)}&am=${totalPrice}&cu=INR&tn=Treevolution%20Sponsorship`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiLink)}`;

  return (
    <Layout>
      {/* Top Page Progress Bar */}
      <motionFramer.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 z-50 origin-[0%]"
        style={{ scaleX }}
      />

      {/* Hero Header component */}
      <HeroSection
        onExploreClick={handleExploreClick}
        onPlantClick={handlePlantClick}
      />

      {/* Main Campaign Content wrap */}
      <div ref={exploreRef}>
        <ImpactCounter />
        <AboutMovement />
        <WhyItMatters />
        <CampaignTimeline />
        <HowItWorks />
        <CertificateDemo onAdoptClick={handlePlantClick} />
        <TrustAndTransparency />
        <PlantationMap />
        <ActivitiesShowcase />
        <ImpactVisualization />
        <OrganizationSection />
        <FinalCTA onPlantClick={handlePlantClick} />
      </div>

      {/* Premium Multi-step Donation Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            
            {/* Dark glass backdrop overlay */}
            <motionFramer.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-[#030712]/90 backdrop-blur-md"
            />

            {/* Modal Dialog Content Card */}
            <motionFramer.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-xl rounded-3xl bg-neutral-900 border border-white/10 p-6 md:p-8 overflow-hidden shadow-2xl z-10 text-white my-8 max-h-[90vh] overflow-y-auto"
            >
              {/* Backing gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-2 rounded-full border border-white/5 hover:border-white/20 bg-neutral-950 text-neutral-400 hover:text-white transition-colors z-20"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Step Indicators */}
              <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                <span className="p-2 bg-emerald-500/10 rounded-xl text-emerald-400">
                  <Leaf className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-serif font-bold text-lg leading-tight">
                    Sponsor Your Legacy
                  </h3>
                  <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-sans mt-0.5">
                    {formStep === "details" && "Step 1 of 3: Co-sponsor Details"}
                    {formStep === "pay" && "Step 2 of 3: Scan and Submit Screen"}
                    {formStep === "success" && "Step 3 of 3: Living Legacy Formed"}
                  </p>
                </div>
              </div>

              {/* STEP 1: SPONSOR & PLATE DETAILS WITH TIERS SELECTION */}
              {formStep === "details" && (
                <form onSubmit={handleDetailsSubmit} className="space-y-5">
                  
                  {/* Select Tiers Grid */}
                  <div className="space-y-2">
                    <label className="text-xs text-neutral-400 font-bold uppercase tracking-wider">
                      Select Sponsorship Tier
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {tiers.map((tier) => (
                        <div
                          key={tier.id}
                          onClick={() => {
                            setSelectedTierId(tier.id);
                            setIsCustomCount(false);
                          }}
                          className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between relative ${
                            selectedTierId === tier.id && !isCustomCount
                              ? "bg-emerald-500/10 border-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                              : "bg-neutral-950/60 border-white/5 hover:border-emerald-500/30 text-neutral-400"
                          }`}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-xs uppercase font-bold tracking-widest text-emerald-400">
                              {tier.badge}
                            </span>
                            {selectedTierId === tier.id && !isCustomCount && (
                              <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400" />
                            )}
                          </div>
                          
                          <div className="font-serif font-bold text-base text-white">
                            {tier.name}
                          </div>
                          
                          <div className="text-xl font-black font-serif text-white mt-1">
                            ₹{tier.price}
                          </div>
                          
                          <p className="text-[10px] text-neutral-500 leading-tight mt-2 font-sans">
                            {tier.perks.join(" • ")}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Custom sponsorship option */}
                    <div
                      onClick={() => setIsCustomCount(true)}
                      className={`p-4 mt-2 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                        isCustomCount
                          ? "bg-emerald-500/10 border-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                          : "bg-neutral-950/60 border-white/5 hover:border-emerald-500/30 text-neutral-400"
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className="text-xs uppercase font-bold tracking-widest text-emerald-400">
                          Custom Sponsor
                        </span>
                        <span className="text-sm font-serif font-bold text-white mt-0.5">
                          Specify custom count at ₹99/tree
                        </span>
                      </div>
                      
                      {isCustomCount && (
                        <div className="flex items-center gap-3">
                          <input
                            type="number"
                            min="1"
                            value={customTreeCount}
                            onChange={(e) => setCustomTreeCount(Math.max(1, parseInt(e.target.value) || 1))}
                            onClick={(e) => e.stopPropagation()}
                            className="w-16 px-2.5 py-1 text-center bg-neutral-900 border border-emerald-500/40 rounded text-white text-sm"
                          />
                          <span className="font-serif font-bold text-white text-sm">
                            ₹{customTreeCount * 99}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Client Metadata forms */}
                  <div className="space-y-4 pt-2 border-t border-white/5">
                    <div className="space-y-1.5">
                      <label className="text-xs text-neutral-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-neutral-500" />
                        Sponsor's Full Name
                      </label>
                      <input
                        required
                        type="text"
                        name="sponsorName"
                        value={formData.sponsorName}
                        onChange={handleFormChange}
                        placeholder="e.g. Vikas Chaudhary"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/5 hover:border-white/10 focus:border-emerald-500 focus:outline-none transition-colors text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs text-neutral-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-neutral-500" />
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        name="sponsorEmail"
                        value={formData.sponsorEmail}
                        onChange={handleFormChange}
                        placeholder="e.g. vikas@inspireindia.org"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/5 hover:border-white/10 focus:border-emerald-500 focus:outline-none transition-colors text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs text-neutral-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-neutral-500" />
                          Name on Physical Plate
                        </label>
                        <input
                          required
                          type="text"
                          name="plateName"
                          value={formData.plateName}
                          onChange={handleFormChange}
                          placeholder="e.g. In Memory of Grandpa"
                          className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/5 hover:border-white/10 focus:border-emerald-500 focus:outline-none transition-colors text-sm"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs text-neutral-400 font-bold uppercase tracking-wider">
                          Tree Species Choice
                        </label>
                        <select
                          name="species"
                          value={formData.species}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/5 hover:border-white/10 focus:border-emerald-500 focus:outline-none transition-colors text-sm text-neutral-300"
                        >
                          <option>Indian Neem (Azadirachta indica)</option>
                          <option>Holy Peepal (Ficus religiosa)</option>
                          <option>Sacred Banyan (Ficus benghalensis)</option>
                          <option>Himalayan Cedar (Cedrus deodara)</option>
                          <option>Golden Shower (Cassia fistula)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 mt-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-1.5 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Securing Web3 forms Connection...
                      </span>
                    ) : (
                      <>
                        Plant Your Legacy Tree (₹{totalPrice})
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* STEP 2: STUNNING PAYMENT GATEWAY & QR CARD */}
              {formStep === "pay" && (
                <div className="space-y-6 py-2">
                  
                  {/* Select Payment Method Tabs */}
                  <div className="flex gap-2 p-1 bg-neutral-950/80 rounded-xl border border-white/5 mb-5 select-none">
                    <button
                      type="button"
                      onClick={() => setPayMethod("razorpay")}
                      className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                        payMethod === "razorpay"
                          ? "bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                          : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      <CreditCard className="w-3.5 h-3.5" />
                      Pay via Razorpay
                    </button>
                    <button
                      type="button"
                      onClick={() => setPayMethod("qr")}
                      className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                        payMethod === "qr"
                          ? "bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                          : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      <QrCode className="w-3.5 h-3.5" />
                      Scan UPI QR
                    </button>
                  </div>

                  {payMethod === "razorpay" ? (
                    /* OPTION A: PREMIUM RAZORPAY CHECKOUT CARD */
                    <div className="w-full bg-neutral-950 text-white rounded-3xl p-6 shadow-2xl flex flex-col items-center relative overflow-hidden border border-white/5">
                      
                      {/* Background ambient light */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                      
                      {/* Header: Razorpay Shield */}
                      <div className="w-full flex items-center justify-between border-b border-white/5 pb-4 mb-5 select-none">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                          <span className="font-serif font-black text-white tracking-tight text-sm">
                            Razorpay <span className="text-emerald-400">Secure</span>
                          </span>
                        </div>
                        <div className="text-[9px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full font-sans font-bold uppercase tracking-widest">
                          Instant Online Pay
                        </div>
                      </div>

                      {/* Info & Price */}
                      <div className="text-center mb-6">
                        <div className="text-xs text-neutral-400 font-sans font-light uppercase tracking-widest">
                          Sponsorship Total
                        </div>
                        <div className="text-4xl font-black font-serif text-white mt-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                          ₹{totalPrice}
                        </div>
                        <div className="text-[11px] text-neutral-500 mt-1 font-sans">
                          {saplingCount} {saplingCount === 1 ? "sapling" : "saplings"} • {tierNameLabel}
                        </div>
                      </div>

                      {/* Razorpay Gateway Direct Button */}
                      <a
                        href="https://rzp.io/rzp/OiLCpeJ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 text-white font-bold text-sm text-center hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(16,185,129,0.15)] group animate-pulse hover:animate-none"
                      >
                        <CreditCard className="w-4.5 h-4.5" />
                        Proceed to Pay Online (₹{totalPrice})
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>

                      <p className="text-[10px] text-neutral-500 text-center leading-relaxed mt-4 font-sans max-w-sm">
                        Redirects to our official Razorpay billing portal. Supports credit/debit cards, NetBanking, digital wallets, and instant UPI apps.
                      </p>

                      {/* Supported icons footer */}
                      <div className="w-full border-t border-white/5 pt-4 mt-5">
                        <div className="text-[8px] text-neutral-500 text-center font-bold uppercase tracking-widest mb-2.5 font-sans">
                          Accepted Payment Modes
                        </div>
                        <div className="flex justify-center items-center gap-3.5 text-neutral-500 text-xs font-semibold select-none flex-wrap">
                          <span className="text-[9px] bg-neutral-900 border border-white/5 px-2 py-1 rounded">UPI / GPay</span>
                          <span className="text-[9px] bg-neutral-900 border border-white/5 px-2 py-1 rounded">Visa / Master</span>
                          <span className="text-[9px] bg-neutral-900 border border-white/5 px-2 py-1 rounded">RuPay</span>
                          <span className="text-[9px] bg-neutral-900 border border-white/5 px-2 py-1 rounded">NetBanking</span>
                          <span className="text-[9px] bg-neutral-900 border border-white/5 px-2 py-1 rounded">Wallets</span>
                        </div>
                      </div>

                    </div>
                  ) : (
                    /* OPTION B: STUNNING FEDERAL BANK QR CODE PAYMENT CARD */
                    <div className="w-full bg-white text-neutral-900 rounded-3xl p-6 shadow-2xl flex flex-col items-center relative overflow-hidden border border-white">
                      
                      {/* Header: Ilmeza and Federal Bank */}
                      <div className="w-full flex items-center justify-between border-b border-neutral-100 pb-4 mb-4 select-none">
                        <div className="flex items-center gap-1.5">
                          {/* Styled Ilmeza Logo mimic */}
                          <span className="font-serif font-black text-emerald-600 tracking-tight text-sm">
                            Ilmeza
                          </span>
                          <span className="text-[7px] bg-emerald-500/10 text-emerald-700 px-1 py-0.5 rounded font-sans font-bold">
                            FOUNDATION
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-1.5">
                          {/* Federal bank mark */}
                          <span className="text-[10px] font-black text-blue-900 tracking-tighter uppercase font-sans border-r border-blue-900/10 pr-2">
                            Federal Bank
                          </span>
                          <span className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-pulse" />
                        </div>
                      </div>

                      {/* QR Code Container */}
                      <div className="relative p-4 bg-neutral-50 rounded-2xl border border-neutral-100/60 shadow-inner flex items-center justify-center w-60 h-60 mb-4 group">
                        <img
                          src={qrCodeUrl}
                          alt="Federal Bank UPI Scan to Pay QR Code"
                          className="w-full h-full object-contain"
                        />
                        <div className="absolute inset-0 bg-neutral-950/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      </div>

                      {/* UPI ID Field with Direct Copy button */}
                      <div className="w-full max-w-sm px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-between">
                        <div>
                          <div className="text-[9px] text-neutral-400 font-bold uppercase tracking-widest">
                            Payee UPI ID
                          </div>
                          <div className="text-sm font-bold text-neutral-800 tracking-wide font-sans mt-0.5">
                            {payeeAddress}
                          </div>
                        </div>
                        
                        <button
                          onClick={handleCopyUpi}
                          className="p-2 rounded-lg bg-white border border-neutral-200 hover:border-emerald-500 hover:text-emerald-500 text-neutral-500 transition-colors shadow-sm"
                        >
                          {copied ? <Check className="w-4.5 h-4.5 text-emerald-500" /> : <Clipboard className="w-4.5 h-4.5" />}
                        </button>
                      </div>

                      {/* Scan to Pay Footer */}
                      <div className="w-full border-t border-neutral-100 pt-4 mt-4 text-center">
                        <div className="text-[9px] text-neutral-400 font-bold uppercase tracking-widest mb-2 font-sans">
                          Scan to Pay with any UPI App
                        </div>
                        <div className="flex justify-center items-center gap-4 text-neutral-400 text-xs font-semibold select-none">
                          <span className="px-2 py-1 rounded bg-neutral-50 border border-neutral-100 text-[10px]">UPI</span>
                          <span className="px-2 py-1 rounded bg-neutral-50 border border-neutral-100 text-[10px]">GPay</span>
                          <span className="px-2 py-1 rounded bg-neutral-50 border border-neutral-100 text-[10px]">Paytm</span>
                          <span className="px-2 py-1 rounded bg-neutral-50 border border-neutral-100 text-[10px]">PhonePe</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Direct screenshot warning banner */}
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-neutral-300 text-sm leading-relaxed flex flex-col gap-2 font-sans font-light">
                    <div className="flex items-center gap-2 text-amber-400 font-bold uppercase text-xs">
                      <ShieldCheck className="w-4.5 h-4.5" />
                      CRITICAL ACTIVATION STEP
                    </div>
                    <div>
                      Complete your payment of <b className="text-white">₹{totalPrice}</b> securely using either Razorpay or the UPI QR, and share your transaction payment screenshot to WhatsApp: <b className="text-white font-bold tracking-wide">97187 76830</b>.
                    </div>
                  </div>

                  {/* Actions Grid */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => setFormStep("details")}
                      className="w-full sm:w-1/4 py-3.5 rounded-xl border border-white/10 hover:border-white/20 font-bold text-xs text-neutral-400 hover:text-white transition-colors"
                    >
                      Change Details
                    </button>
                    
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-1/2 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-xs text-center hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-1.5 shadow-[0_5px_15px_rgba(16,185,129,0.2)]"
                    >
                      <Share2 className="w-4 h-4" />
                      Share Screenshot on WhatsApp
                    </a>

                    <button
                      onClick={() => {
                        toast.success("Transaction verification in progress! Your digital certificate is ready.");
                        setFormStep("success");
                      }}
                      className="w-full sm:w-1/4 py-3.5 rounded-xl bg-neutral-950 border border-white/5 hover:border-emerald-500/20 text-neutral-300 hover:text-emerald-400 font-bold text-xs transition-colors"
                    >
                      I Have Paid
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: SUCCESS AND LIVING LEGACY CERTIFICATE WITH PREMIUM TIER BADGES */}
              {formStep === "success" && (
                <div className="flex flex-col items-center text-center space-y-6 py-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <h4 className="text-2xl font-black font-serif text-white tracking-tight">
                      Legacy Registered!
                    </h4>
                    <p className="text-neutral-400 text-sm font-sans font-light leading-relaxed mt-2">
                      Thank you, <b>{formData.sponsorName}</b>! Your co-sponsored sapling has been logged. Once your screenshot is approved, this certificate will be live on our global ledger!
                    </p>
                            {/* High Quality Digital Certificate Mock */}
                  <div className="w-full p-6 rounded-2xl bg-gradient-to-br from-neutral-950 via-[#0a0f0d] to-neutral-950 border border-emerald-500/30 relative overflow-hidden flex flex-col justify-between items-center text-center shadow-2xl">
                    
                    {/* Premium Topographical Mesh & Watermarks */}
                    <Leaf className="absolute w-40 h-40 text-emerald-500/[0.03] rotate-45 z-0 pointer-events-none -right-8 -top-8" />
                    <Leaf className="absolute w-40 h-40 text-emerald-500/[0.03] -rotate-12 z-0 pointer-events-none -left-8 -bottom-8" />

                    {/* Breathtaking double certificate border matching high-end diplomas */}
                    <div className="absolute inset-3 rounded-[24px] border border-emerald-500/20 pointer-events-none z-10" />
                    <div className="absolute inset-4 rounded-[20px] border border-emerald-500/5 pointer-events-none z-10" />

                    {/* Certificate Logos Header */}
                    <div className="relative z-10 w-full flex flex-col items-center border-b border-white/5 pb-4 mb-4 select-none">
                      <div className="w-full flex items-center justify-between">
                        <img 
                          src="/logo.png" 
                          alt="Inspire India Talks" 
                          className="h-10 w-auto object-contain drop-shadow-[0_2px_8px_rgba(249,115,22,0.2)]" 
                        />
                        <div className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-white/5 text-[7px] text-neutral-500 font-bold uppercase tracking-widest font-sans">
                          Verified Registry
                        </div>
                      </div>
                      
                      <div className="text-center mt-3 flex items-center gap-1.5 flex-wrap justify-center">
                        <span className="text-[10px] uppercase font-bold tracking-[0.1em] text-emerald-400 font-sans">
                          Tree-volution
                        </span>
                        <span className="text-[8px] text-neutral-600">—</span>
                        <span className="text-[9px] uppercase font-semibold tracking-[0.08em] text-neutral-300 font-sans">
                          Inspire India Talks
                        </span>
                        <span className="text-[8px] text-neutral-600">—</span>
                        <span className="text-[8px] uppercase font-medium tracking-[0.05em] text-neutral-400 font-sans">
                          Powered by Ilmeza Foundation
                        </span>
                      </div>
                    </div>

                    {/* Certificate Content */}
                    <div className="relative z-10 w-full flex flex-col items-center my-auto space-y-3.5">
                      <div className="text-xs text-neutral-400 font-serif italic">
                        This document certifies that
                      </div>
                      
                      {/* Elegant Dynamic Name Display with glowing backing */}
                      <div className="relative py-1 flex items-center justify-center min-w-[240px] border-b border-emerald-500/30 px-8">
                        <span className="text-xl md:text-2xl font-black font-serif text-white tracking-wide drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]">
                          {formData.sponsorName}
                        </span>
                        <div className="absolute bottom-[-1px] left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                      </div>

                      <div className="text-xs text-neutral-300 font-serif italic leading-relaxed">
                        has co-sponsored and planted {saplingCount} native{" "}
                        <span className="text-emerald-400 font-bold font-sans not-italic border-b border-emerald-500/20 pb-0.5">
                          {formData.species.split(" ")[0]}
                        </span>{" "}
                        sapling{saplingCount > 1 ? "s" : ""}
                      </div>

                      {/* Tier Badge Highlight */}
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/25 rounded-md mt-4 shadow-sm select-none">
                        <Award className="w-4.5 h-4.5 text-emerald-400" />
                        <span className="text-xs font-sans font-black text-emerald-400 uppercase tracking-widest">
                          {tierBadgeLabel}
                        </span>
                      </div>

                      <div className="text-xs text-neutral-400 font-semibold uppercase tracking-wider font-sans mt-3 px-3 py-1 bg-neutral-900/60 border border-white/5 rounded">
                        Plate Name: "{formData.plateName}"
                      </div>
                    </div>

                    {/* Premium gold seal in the bottom corner */}
                    <div className="absolute right-8 bottom-5 w-12 h-12 select-none pointer-events-none opacity-40 z-10 hidden sm:flex items-center justify-center">
                      <svg className="w-full h-full text-emerald-400 animate-pulse" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 5 L63 20 L80 15 L78 35 L95 45 L80 57 L85 75 L67 75 L60 92 L45 83 L30 92 L23 75 L5 75 L10 57 L0 45 L15 35 L12 15 L32 20 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="50" cy="46" r="16" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M44 42 L50 48 L56 42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>

                    {/* Metadata */}
                    <div className="relative z-10 w-full mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[8px] text-neutral-500 font-bold uppercase tracking-widest font-sans">
                      <div className="flex items-center gap-1.5 text-neutral-400">
                        <TreePine className="w-3.5 h-3.5 text-emerald-400" />
                        <span>TREE ID: IIT-{Math.floor(Math.random() * 900000 + 100000)}</span>
                      </div>
                      <div className="text-neutral-400">
                        DATE: {new Date().toLocaleDateString()}
                      </div>
                    </div>
                  </div>          </div>

                  <button
                    onClick={handleCloseModal}
                    className="w-full py-4 rounded-xl border border-white/10 hover:border-emerald-500/20 bg-neutral-950 font-bold text-xs text-neutral-300 hover:text-emerald-400 transition-colors"
                  >
                    Return to Campaign
                  </button>
                </div>
              )}

            </motionFramer.div>
          </div>
        )}
      </AnimatePresence>
    </Layout>
  );
}

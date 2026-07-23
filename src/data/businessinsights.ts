// src/data/businessinsights.ts
//
// HOW TO ADD A NEWS ARTICLE (no coding needed):
//   1. Copy the whole { ... } block marked TEMPLATE below.
//   2. Paste it at the TOP of the list (newest first).
//   3. Fill in the fields between the quotes. Keep the quotes and commas.
//   4. Put the image file in:  public/images/business-insights/
//   5. Save. The site updates automatically after the change is pushed.
//
// Required: id, title, date, image, excerpt, content
// Optional: category, featured, readTime

export interface BusinessInsight {
  id: string;        // unique short name, e.g. "biodimension-8-crore"
  title: string;     // headline
  date: string;      // "DD-MM-YYYY", e.g. "15-06-2026"
  image: string;     // "/images/business-insights/your-file.jpg"
  excerpt: string;   // 1–2 line summary shown on the card
  content: string;   // full article. Use a blank line for new paragraphs.
  category?: string; // optional label, e.g. "Funding" (shows in orange)
  featured?: boolean;// optional: set true on ONE article to make it the big hero
  readTime?: string; // optional, e.g. "4 min read"
}

export const businessinsights: BusinessInsight[] = [
  // ===================== TEMPLATE — copy this block to add news =====================
  // {
  //   id: "short-unique-name",
  //   title: "Your headline here",
  //   date: "DD-MM-YYYY",
  //   category: "Funding",
  //   image: "/images/business-insights/your-image.jpg",
  //   excerpt: "One or two sentences that appear on the card.",
  //   readTime: "3 min read",
  //   featured: false,
  //   content: `Opening paragraph of the full article.
  //
  // Leave a blank line to start a new paragraph. Write as much as you like here.`,
  // },
  // =================================================================================
  {
    id: "skylark-labs-150m-raise",
    title: "Indian-Founded Skylark Labs in Talks to Raise $150M, Could Be India's Next AI Unicorn",
    date: "20-07-2026",
    category: "Startups & AI",
    image: "/images/business-insights/skylark-labs.jpeg",
    excerpt:
      "Skylark Labs, a physical AI startup founded by Indian-born Dr Amarjot Singh, is in advanced talks to raise up to $150 million in a round that could push its valuation beyond $1 billion.",
    readTime: "3 min read",
    featured: false,
    content: `Skylark Labs, a physical AI startup founded by Indian-born Dr Amarjot Singh and headquartered in California, is in advanced talks to raise between $100 million and $150 million in a new funding round that could push its valuation beyond $1 billion. Around 70% of the capital is already committed, with Bommie Capital among the key backers.

Skylark builds self-learning AI systems for edge devices — deployed on drones, robots, and autonomous vehicles — targeting defence, border security, and public safety applications.

The company last raised $6 million at a $250 million valuation in April 2026, making the current raise a dramatic step-change in scale. Offices are being planned in India and Abu Dhabi alongside its Menlo Park base, with a hiring drive of 100 people underway.

Skylark represents a new class of Indian-origin deep tech founders building globally from day one, rather than pivoting from domestic-first models.`,
  },

  {
    id: "blinkit-spoilage-q1-fy27",
    title: "Blinkit Lost ₹308 Crore to Spoiled Goods in One Quarter — Nearly 3x Its Own EBITDA",
    date: "20-07-2026",
    category: "Quick Commerce",
    image: "/images/business-insights/blinkit-spoilage.jpeg",
    excerpt:
      "Blinkit lost around ₹308 crore to expired inventory, damage, transit loss, and theft in Q1 FY27 — nearly three times its quarterly adjusted EBITDA — as its inventory-led model amplifies risk.",
    readTime: "3 min read",
    featured: false,
    content: `Blinkit, India's dominant quick-commerce platform and now the largest revenue contributor for its parent Eternal, disclosed a striking operational challenge in its Q1 FY27 results: it lost approximately ₹308 crore — roughly 1.8% of its net order value — to expired inventory, damaged goods, items lost during transit, and theft. That figure is nearly three times Blinkit's quarterly adjusted EBITDA of ₹102 crore.

The disclosure comes as Blinkit has transitioned from a marketplace model to an inventory-led model, meaning it now buys and holds goods directly rather than connecting buyers and sellers. The shift has supercharged revenue — up 553% year-on-year to ₹15,664 crore — but has also amplified inventory risk.

Blinkit added 200 dark stores in the quarter, taking its network to 2,443 stores.

The spoilage figure will be a central point of scrutiny for investors tracking the company's path to sustainable profitability.`,
  },

  {
    id: "india-d2c-beyond-roas-playbook",
    title: "India's D2C Founders Are Abandoning the ROAS Playbook and Rethinking Growth",
    date: "20-07-2026",
    category: "Consumer & Brands",
    image: "/images/business-insights/d2c-roas-playbook.jpeg",
    excerpt:
      "India's direct-to-consumer brands are shifting away from ROAS obsession toward brand equity, owned channels, and repeat-customer economics as paid-acquisition costs climb.",
    readTime: "3 min read",
    featured: false,
    content: `A widely discussed Inc42 analysis argues that India's direct-to-consumer brands are entering a fundamental strategic reset — moving away from ROAS (Return on Ad Spend) obsession and toward brand equity, owned channels, and repeat-customer economics.

Rising performance marketing costs on Meta and Google, combined with investor pressure for profitability, have made pure paid-acquisition strategies unsustainable. Smarter D2C founders are now investing in WhatsApp, creator communities, newsletters, and offline touchpoints.

Brands such as BlueStone, Mamaearth, and SUGAR Cosmetics have already made this shift — and hit sequential quarterly profitability as a result.

The broader signal: the next generation of Indian D2C winners will be built on community and trust, not just performance ad budgets.`,
  },

  {
    id: "ms-dhoni-solarsquare-series-c",
    title: "MS Dhoni Backs SolarSquare in $53M Series C as Startup Eyes 30–40 New Cities",
    date: "20-07-2026",
    category: "Startups & Funding",
    image: "/images/business-insights/solarsquare-dhoni.jpeg",
    excerpt:
      "Residential rooftop solar startup SolarSquare has closed a $53 million Series C — India's largest VC round in the solar sector — with MS Dhoni investing and joining as brand ambassador.",
    readTime: "3 min read",
    featured: false,
    content: `Residential rooftop solar startup SolarSquare has closed a $53 million Series C — the largest VC round in India's solar sector — led by Lightspeed, with Lowercarbon Capital, NGP Capital, and Elevation Capital also participating.

Former Indian captain MS Dhoni has invested through his family office, Midas Deals, and will serve as brand ambassador. Dhoni described the move as "investing in India's future."

Founded in 2015 by Shreya Mishra, Neeraj Jain, and Nikhil Nahar, SolarSquare has installed rooftop solar systems in over 50,000 homes across 29 cities, offering end-to-end consultation, installation, financing, and maintenance. The company is currently operating at an annual revenue run rate of ₹1,000 crore.

The capital will fund expansion into 30–40 new cities and platform upgrades.`,
  },

  {
    id: "bharatpe-sg-finserve-succesship-paperless-credit",
    title: "BharatPe, SG Finserve and Succesship Join Forces to Bring Paperless Credit to India's Merchants",
    date: "20-07-2026",
    category: "Fintech & Lending",
    image: "/images/business-insights/bharatpe-sg-finserve.jpeg",
    excerpt:
      "SG Finserve has partnered with BharatPe Money and Succesship Technologies to launch a fully digital, paperless credit solution for India's merchants and MSMEs.",
    readTime: "3 min read",
    featured: false,
    content: `NBFC SG Finserve has partnered with BharatPe Money — the lending arm of payments unicorn BharatPe — and fintech infrastructure firm Succesship Technologies to launch a fully digital, paperless credit solution for India's merchants and MSMEs.

Built in compliance with RBI's Digital Lending Guidelines, the product offers faster loan approvals, minimal documentation, and seamless onboarding, targeting the large pool of small business owners who lack access to formal credit.

The collaboration connects SG Finserve's lending capital, BharatPe's merchant network of millions, and Succesship's technology infrastructure.

The partnership reflects a growing playbook in Indian fintech — stacking complementary capabilities across NBFCs, payment platforms, and B2B infrastructure players to serve the underbanked MSME segment at scale, rather than building end-to-end in-house.`,
  },

  {
    id: "indian-startups-weekly-funding-july-2026",
    title: "Indian Startups Raised $281M Across 24 Deals in a Single Week, Led by AI and Fintech",
    date: "20-07-2026",
    category: "Startups & Funding",
    image: "/images/business-insights/weekly-funding-july-2026.jpeg",
    excerpt:
      "Indian startups raised $281.4 million across 24 deals in the week of July 11–17, 2026 — more than three times the previous week — anchored by Emergent's $130 million unicorn round.",
    readTime: "3 min read",
    featured: false,
    content: `Indian startups raised a cumulative $281.4 million across 24 deals in the week of July 11–17, 2026 — over three times the $71.9 million logged the previous week, according to Inc42's weekly funding roundup published on July 19.

The surge was anchored by Emergent's $130 million unicorn-minting AI round and a string of large growth-stage investments in fintech and consumer services.

The weekly data underscores a broader pattern taking shape in 2026: capital is concentrating in AI-native platforms, late-stage companies with strong unit economics, and B2B infrastructure plays rather than early consumer bets.

Analysts note that while headline numbers are strong, the number of individual deals has fallen compared to 2025, meaning fewer but larger rounds — and a tougher market for seed-stage founders pitching without substantial traction or recurring revenue.`,
  },

  {
    id: "india-2026-unicorn-class",
    title: "India's 2026 Unicorn Class: AI, Fintech and SpaceTech Lead the Next Growth Story",
    date: "20-07-2026",
    category: "Startups & Funding",
    image: "/images/business-insights/india-2026-unicorn-class.jpeg",
    excerpt:
      "As of July 2026, six Indian startups have joined the unicorn club, led by AI, fintech, payments, and space tech — a new chapter driven by deep technology and long-term investor confidence.",
    readTime: "3 min read",
    featured: false,
    content: `India's startup ecosystem is once again proving its resilience. While global venture funding has remained selective, 2026 has witnessed the emergence of a new cohort of billion-dollar startups, signalling that investors continue to back companies solving large-scale, technology-driven problems. As of 20 July 2026, six Indian startups have officially joined the unicorn club, collectively showcasing the country's growing strength in artificial intelligence, fintech, payments infrastructure, and space technology.

Topping the list are Emergent, Sarvam AI, and KreditBee, each valued at approximately US$1.5 billion following their latest funding rounds. They are followed by Neysa, an AI cloud infrastructure company valued at US$1.4 billion, Juspay, a payments infrastructure leader valued at US$1.2 billion, and Skyroot Aerospace, India's first private space-tech unicorn with a valuation of around US$1.1 billion.

Beyond the valuations, the 2026 unicorn class reflects a broader transformation in India's innovation economy. Artificial intelligence is rapidly becoming the country's next major growth engine, while fintech continues to deepen financial inclusion and digital payments. Meanwhile, the success of a space-tech company reaching unicorn status demonstrates India's expanding ambitions in frontier technologies.

Together, these companies represent a new chapter in India's entrepreneurial journey — one driven by deep technology, global scalability, and the confidence of long-term investors.`,
  },

  {
    id: "physicswallah-acquires-sarrthi-ias",
    title: "PhysicsWallah Acquires UPSC Platform Sarrthi IAS, Expanding Deeper Into Competitive Exam Prep",
    date: "15-07-2026",
    category: "Edtech & M&A",
    image: "/images/business-insights/physicswallah-sarrthi-ias.jpeg",
    excerpt:
      "Edtech unicorn PhysicsWallah has acquired UPSC prep platform Sarrthi IAS, gaining a direct foothold in one of India's most competitive exam markets.",
    readTime: "3 min read",
    featured: false,
    content: `Edtech unicorn PhysicsWallah has acquired Sarrthi IAS, a dedicated UPSC civil services exam preparation platform, adding another brand to its rapidly growing stable of exam-prep products beyond its engineering and medical coaching roots.

The deal gives PhysicsWallah a direct foothold in the UPSC segment, one of India's most competitive and emotionally charged education markets, with hundreds of thousands of aspirants enrolling annually. PW has been on an acquisition spree as it diversifies from its flagship JEE and NEET content into competitive government job preparation, skill development, and K–12 tutoring.

Sarrthi IAS brings an established community of civil services aspirants, curated content, and experienced faculty.

The acquisition reflects a broader trend of edtech platforms consolidating niche players to build end-to-end learning ecosystems that cover a student from school through every major competitive exam they may sit in their lifetime.`,
  },

  {
    id: "india-first-hydrogen-train",
    title: "India Launches Its First Hydrogen-Powered Train",
    date: "15-07-2026",
    category: "Energy & Infrastructure",
    image: "/images/business-insights/hydrogen-train.jpg",
    excerpt:
      "India has launched its first hydrogen-powered train, a milestone in its green mobility journey that emits only water vapor and heat instead of greenhouse gases.",
    readTime: "3 min read",
    featured: false,
    content: `India has taken a major step toward sustainable transportation with the launch of its first hydrogen-powered train, marking a significant milestone in the country's green mobility journey. Developed under Indian Railways' broader decarbonization strategy, the train uses hydrogen fuel cells to generate electricity, emitting only water vapor and heat instead of harmful greenhouse gases.

Hydrogen-powered trains offer a cleaner alternative to diesel locomotives, particularly on non-electrified rail routes where full electrification may not be immediately feasible. This initiative aligns with India's commitment to achieving net-zero emissions by 2070 while strengthening energy security through cleaner technologies.

Beyond reducing carbon emissions, the project is expected to accelerate innovation in hydrogen production, fuel infrastructure, and advanced railway engineering.

As India continues investing in sustainable transport, hydrogen-powered railways could become a key pillar of the nation's future mobility ecosystem, reinforcing its ambition to emerge as a global leader in clean energy and green infrastructure.`,
  },

  {
    id: "skyroot-vikram-i-mission-aagaman",
    title: "Skyroot Aerospace Set to Make History with Vikram-I",
    date: "15-07-2026",
    category: "Startups & Space Tech",
    image: "/images/business-insights/skyroot-vikram-i.jpg",
    excerpt:
      "Skyroot Aerospace is poised to launch Vikram-I, India's first privately developed orbital launch vehicle, under Mission Aagaman — a defining moment for the country's private space sector.",
    readTime: "3 min read",
    featured: false,
    content: `Skyroot Aerospace is poised to create history with the launch of Vikram-I, India's first privately developed orbital launch vehicle. Scheduled under Mission Aagaman, the rocket's maiden flight marks a defining moment for India's rapidly growing private space sector.

Developed by the Hyderabad-based startup founded by former ISRO engineers, Vikram-I is designed to place payloads of up to 350 kg into Low Earth Orbit (LEO) using advanced carbon-composite structures, 3D-printed engines, and indigenous propulsion technologies. The mission will carry multiple commercial and technology demonstration payloads, showcasing India's increasing capability in affordable and reliable satellite launches.

Beyond a technological milestone, Vikram-I symbolizes the success of India's space-sector reforms that opened opportunities for private innovation.

A successful mission will strengthen India's position in the global space economy, encourage greater investment in space startups, and pave the way for a vibrant commercial launch ecosystem alongside ISRO's achievements.`,
  },

  {
    id: "dhruva-space-antariksh-fund-raise",
    title: "Dhruva Space Raises ₹60 Crore from India's Sovereign Space-Tech Fund",
    date: "15-07-2026",
    category: "Startups & Space Tech",
    image: "/images/business-insights/dhruva-space.png",
    excerpt:
      "Hyderabad-based Dhruva Space has raised ₹60 crore in its maiden institutional round from the Antariksh Venture Capital Fund, India's sovereign fund dedicated to the space sector.",
    readTime: "3 min read",
    featured: false,
    content: `Hyderabad-based spacetech startup Dhruva Space has raised ₹60 crore in its maiden institutional funding round from the Antariksh Venture Capital Fund (AVCF), India's sovereign venture capital fund dedicated to the space sector. Managed by SIDBI Venture Capital and anchored by IN-SPACe, the fund aims to strengthen India's commercial space ecosystem.

The investment will help Dhruva Space expand satellite manufacturing, space-based solutions, research and development, and global commercial partnerships.

The funding marks a significant milestone for India's private space industry, which has gained momentum following policy reforms that opened the sector to private participation. Industry experts believe the investment validates India's ambition of becoming a global hub for satellite technology and space innovation.

As demand for satellite communication, earth observation, and defence applications increases worldwide, Dhruva Space is expected to play an important role in building indigenous space capabilities while competing internationally.`,
  },

  {
    id: "india-uk-ceta-enters-force",
    title: "India–UK CETA Enters Into Force, Granting Duty-Free Access Across 99% of Tariff Lines",
    date: "15-07-2026",
    category: "Trade & Policy",
    image: "/images/business-insights/india-uk-ceta.jpeg",
    excerpt:
      "The India–UK Comprehensive Economic and Trade Agreement came into force on July 15, 2026, eliminating UK tariffs on 99% of Indian exports — India's most ambitious trade deal with a G7 nation.",
    readTime: "3 min read",
    featured: false,
    content: `The India–UK Comprehensive Economic and Trade Agreement (CETA), along with its companion Double Contribution Convention (DCC), officially came into force on July 15, 2026. Concluded after 14 rounds of negotiations and signed in London in July 2025, it is India's most ambitious trade deal with a G7 nation.

The UK immediately eliminates tariffs on 99% of Indian exports — removing duties of up to 70% on processed foods, 21.5% on marine products, 12% on textiles, and 8% on pharmaceuticals.

The DCC simultaneously exempts Indian professionals on temporary UK assignments from paying social security contributions for up to five years, covering over 75,000 workers across IT, engineering, healthcare, and finance.

Commerce Secretary Rajesh Agrawal described it as a "gold standard" agreement spanning 30 chapters — including digital trade, government procurement, and professional mobility — and a defining step toward Viksit Bharat 2047.`,
  },

  {
    id: "made-in-india-chocolate-brands",
    title: "Made in India: Homegrown Chocolate Brands Redefining Premium",
    date: "09-07-2026",
    category: "Consumer & Brands",
    image: "/images/business-insights/made-in-india-chocolates.jpeg",
    excerpt:
      "A new generation of Indian chocolatiers is combining locally sourced cacao, artisanal craft, and world-class packaging to turn homegrown chocolate into a global contender.",
    readTime: "3 min read",
    featured: false,
    content: `India's chocolate industry is quietly undergoing a remarkable transformation. While global brands have long dominated store shelves, a new generation of Indian chocolatiers is redefining what premium chocolate means — combining locally sourced cacao, artisanal craftsmanship, innovative flavours, and world-class packaging. From bean-to-bar makers working directly with farmers to luxury gifting brands crafting handmade bonbons and pralines, Indian chocolate is no longer just an alternative; it is becoming a global contender.

Entisi — Founded by entrepreneur Nikki Thakker, Entisi has built a reputation for elegant, handcrafted chocolates designed for celebrations and premium gifting. Its collection spans bonbons, pralines, dragées, bars, and curated hampers, from dark and milk chocolate to sugar-free and dietary-specific options — reflecting how Indian premium chocolate is evolving in taste, presentation, and gifting culture.

Bombay Sweet Shop — Blending India's traditional mithai heritage with modern confectionery, Bombay Sweet Shop reinvents classics like laddoos and barfis while also offering chocolate products, festive assortments, and contemporary gift boxes. It represents a new wave of Indian brands successfully merging nostalgia with innovation.

Jakobi Chocolatier — Based in Kochi, Jakobi crafts artisanal chocolates including truffles, bonbons, filled bars, and signature slabs, with seasonal collections and sugar-free options. Its focus on quality and presentation showcases India's growing expertise in handcrafted chocolate making.

Naviluna — Originating from Mysuru, Naviluna works closely with cacao farmers across Karnataka and Kerala to produce chocolate from organically grown Indian cacao. Its low-heat processing helps preserve the bean's natural flavour, resulting in distinctive dark and milk chocolate bars, and highlights India's growing bean-to-bar movement.

India is emerging as one of the most exciting destinations for premium chocolate thanks to high-quality Indian-grown cacao, direct partnerships with local farmers, flavours inspired by Indian ingredients, premium gifting-focused packaging, and rising global recognition for artisanal craftsmanship. As consumer preferences shift toward authenticity, sustainability, and locally made premium products, Indian chocolatiers are proving they can compete with the best in the world — and supporting them means backing Indian entrepreneurs, farmers, designers, and artisans building a stronger food and luxury ecosystem.`,
  },

  {
    id: "world-bank-rooftop-solar-surya-ghar",
    title: "World Bank to Mobilise $4.2 Billion for India's Rooftop Solar Drive",
    date: "09-07-2026",
    category: "Energy & Climate",
    image: "/images/business-insights/world-bank-rooftop-solar.jpeg",
    excerpt:
      "The World Bank is set to mobilise $4.2 billion in private financing, plus an $890 million direct package, to accelerate rooftop solar adoption under India's PM Surya Ghar scheme.",
    readTime: "3 min read",
    featured: false,
    content: `The World Bank is set to mobilise USD 4.2 billion in private financing, alongside an USD 890 million direct package, to accelerate rooftop solar adoption under India's PM Surya Ghar scheme. The initiative is a cornerstone of India's clean energy push, bringing solar power directly to millions of households nationwide.

The move comes as India navigates a delicate balancing act between energy security, industrial growth, and climate commitments, particularly amid volatile global energy markets driven by ongoing geopolitical tensions.

Separately, Gujarat unveiled its Data Centre Policy 2026–29, targeting hyperscale data centre and AI infrastructure investments to support the state's vision of a USD 3.5 trillion economy by 2047.

Together, these developments reflect a broader national strategy in which energy transition and digital infrastructure are being pursued in tandem as twin pillars of India's long-term economic ambition.`,
  },

  {
    id: "tripura-business-conclave-2026-mous",
    title: "Tripura Signs 43 MoUs Worth ₹10,000 Crore at Business Conclave 2026",
    date: "09-07-2026",
    category: "Economy & Investment",
    image: "/images/business-insights/tripura-business-conclave.png",
    excerpt:
      "Tripura signed 43 MoUs worth over ₹10,000 crore at the Destination Tripura Business Conclave 2026, a landmark haul for a state that has long struggled to attract large-scale private capital.",
    readTime: "3 min read",
    featured: false,
    content: `India's northeastern states have long been viewed as laggards in attracting industrial investment, but Tripura is making a pointed statement to the contrary. The state signed 43 MoUs worth over ₹10,000 crore at the Destination Tripura Business Conclave 2026 — a significant haul for a region that has historically struggled to draw large-scale private capital.

The conclave signals a broader push by northeastern states to leverage their strategic location bordering Bangladesh, Myanmar, and the wider Southeast Asian corridor as India deepens its Act East policy. Sectors including infrastructure, tourism, agro-processing, and renewable energy featured prominently among the investment commitments.

The development aligns with the central government's increasing focus on unlocking the economic potential of India's northeast as a gateway to ASEAN markets, with improved connectivity and logistics investment laying the groundwork for a new chapter in regional industrial growth.`,
  },

  {
    id: "age-care-labs-series-b1-round",
    title: "Age Care Labs Closes ₹85 Crore Round, Bets Big on India's Booming Elder Care Market",
    date: "07-07-2026",
    category: "Startups & Funding",
    image: "/images/business-insights/age-care-labs.png",
    excerpt:
      "Age Care Labs, parent of Emoha and Epoch Elder Care, has raised ₹85 crore in a Series B1 round as investors bet on India's rapidly expanding senior care market.",
    readTime: "3 min read",
    featured: false,
    content: `Age Care Labs, the parent company of elder care brands Emoha and Epoch Elder Care, has raised ₹85 crore in a Series B1 round — part of a larger ₹250 crore Series B expected to close by Q1 2027.

The round was led by Shrem Group, with participation from Rainmatter — the investment arm of Zerodha — Pegasus Finvest, and several family offices. As part of the deal, Shrem Group has partnered with Emoha to co-launch Shremoha, a premium senior living platform.

The raise underscores growing investor confidence in India's elder care sector as the country's over-60 population rapidly expands toward 340 million by 2050. Age Care Labs competes with KITES Senior Care, Alserv, and Ratan Tata-backed Goodfellows.

The fresh capital will fund geographic expansion, technology development, and healthcare capability building. Having now raised over $20 million in total, the company is positioning itself as the dominant integrated platform in India's largely fragmented and underpenetrated senior care market.`,
  },

  {
    id: "cci-approves-upgrad-unacademy-acquisition",
    title: "CCI Clears upGrad's Acquisition of Unacademy — at a Fraction of Its Old Value",
    date: "07-07-2026",
    category: "Edtech & M&A",
    image: "/images/business-insights/upgrad-unacademy.png",
    excerpt:
      "India's competition regulator has approved upGrad's acquisition of Unacademy, valuing the edtech rival at around ₹2,055 crore — a steep fall from its $3.4 billion pandemic-era peak.",
    readTime: "3 min read",
    featured: false,
    content: `India's competition regulator cleared the way on July 7 for edtech platform upGrad to acquire rival Unacademy, marking one of the biggest deals in Indian online education history.

The transaction values Unacademy at roughly ₹2,055 crore ($218 million) — a dramatic fall from the $3.4 billion valuation it commanded at the height of the pandemic-era edtech boom in 2021, when investors were pouring money into online learning at an unprecedented pace. The deal is structured as an all-share transaction, meaning Unacademy shareholders will receive upGrad stock rather than cash.

For upGrad, led by entrepreneur Ronnie Screwvala, the acquisition is a strategic expansion into test preparation and K-12 learning — segments it previously had little presence in — and is expected to add around ₹500 crore to its annual revenue.

The timing is telling: upGrad only recently turned profitable after years of losses, and Unacademy has been restructuring since its post-pandemic slowdown. India's edtech sector, once defined by sky-high valuations and aggressive growth, is now consolidating around survival and scale.`,
  },

  {
    id: "swiggy-majority-indian-owned-iocc",
    title: "Swiggy Crosses a Major Structural Milestone as Foreign Ownership Falls Below 50%",
    date: "07-07-2026",
    category: "Startups & Ownership",
    image: "/images/business-insights/swiggy-iocc.png",
    excerpt:
      "Swiggy has become majority Indian-owned after its foreign shareholding organically slipped below 50%, a shift that lets Instamart hold inventory directly.",
    readTime: "3 min read",
    featured: false,
    content: `Swiggy has become majority Indian-owned after its foreign shareholding fell organically below 50%. The shift is more significant than it might appear on the surface.

Its reclassification as an Indian Owned and Controlled Company (IOCC) carries direct commercial implications — most notably, its quick commerce arm Instamart will now be able to hold inventory directly, improving margins and tightening supply chain control.

The organic route to this threshold makes it particularly meaningful. Back in May, Swiggy's shareholders had failed to pass a resolution formally classifying it as an IOCC, making the natural crossing of the 50% foreign ownership ceiling the more credible path to that status.

For Swiggy, locked in an intense battle with Zomato's Blinkit in the quick commerce space, tighter inventory control could prove a meaningful operational and cost advantage heading into the second half of FY27.`,
  },

  {
    id: "india-uk-trade-pact-july-15",
    title: "India–UK Trade Pact Set to Take Effect July 15",
    date: "07-07-2026",
    category: "Trade & Policy",
    image: "/images/business-insights/india-uk-trade-pact.png",
    excerpt:
      "The finance ministry has notified rules of origin under the India–UK trade pact, clearing the way for the agreement to come into force from July 15.",
    readTime: "3 min read",
    featured: false,
    content: `The finance ministry has notified the rules for determining the origin of goods under the India–UK trade pact, clearing the way for the agreement to take effect from July 15. The deal has been long in the making — years of negotiations that repeatedly stalled over differences on tariffs, worker mobility, and Scotch whisky duties. Its imminent rollout marks a significant moment in India's trade diplomacy.

India's free trade agreements with the UK and the EU are expected to boost toy exports through zero-duty market access, supported by fresh investments, expanding manufacturing capacity, and favourable government policies. Beyond toys, sectors such as pharmaceuticals, textiles, and IT services stand to gain considerably.

Commerce Minister Piyush Goyal has said the Trade and Technology Council dialogue will complement the recently concluded India–EU free trade agreement, while India aims to seal a Canada FTA within six months — signalling an ambitious run of trade-deal activity on the horizon.`,
  },

  {
    id: "fizzy-goblet-kareena-kapoor-investment",
    title: "Fizzy Goblet Draws Strategic Investment from Kareena Kapoor Khan, Eyes Rs 100 Crore Run Rate",
    date: "07-07-2026",
    category: "Retail & Investment",
    image: "/images/business-insights/fizzy-goblet-kareena.png",
    excerpt:
      "Homegrown footwear brand Fizzy Goblet has secured a strategic investment from actor Kareena Kapoor Khan as it targets an annual revenue run rate of over Rs 100 crore.",
    readTime: "3 min read",
    featured: false,
    content: `Homegrown footwear and accessories label Fizzy Goblet has announced a strategic investment from actor Kareena Kapoor Khan, deepening a bond that started when she began wearing the brand organically in 2014 and later became its brand ambassador in 2022.

The move takes Kapoor Khan beyond endorsements into an active business role — she will now weigh in on design selection and support brand-building efforts across India and international markets.

Founded more than 12 years ago by Laksheeta Govil with a modest initial investment of just Rs 1 lakh, Fizzy Goblet built its name around traditional Indian footwear such as juttis and kolhapuris. The brand ran as a bootstrapped venture before raising institutional capital from Accel. It currently operates at an annual revenue run rate of around Rs 60 crore and is aiming to cross Rs 100 crore in the coming year.

Notably, the company says its growth has been driven entirely through its own channels — every sale flows through its website and company-owned stores, with no reliance on marketplaces or franchise partners. Its retail footprint has grown from four stores in 2022 to 16 company-owned outlets today.

"Our vision is to make Fizzy Goblet the first globally recognised Indian footwear and accessories brand. Having Kareena on board as a strategic partner is the first major step on that journey," said founder Laksheeta Govil. Kapoor Khan added that her conviction in what Govil is building "has only grown," noting the brand has "always been part of my wardrobe."`,
  },

  {
    id: "cultfit-drhp-ipo-filing",
    title: "Cult.fit Files for IPO with SEBI, Eyeing Rs 950 Crore Fresh Issue",
    date: "07-07-2026",
    category: "IPO & Markets",
    image: "/images/business-insights/cultfit-ipo.png",
    excerpt:
      "Fitness platform Cult.fit has filed its draft papers with SEBI for an IPO combining a Rs 950 crore fresh issue with a 17.86 crore share offer for sale by existing backers.",
    readTime: "3 min read",
    featured: false,
    content: `Fitness and wellness company Cult.fit has taken a decisive step towards the public markets, submitting its draft red herring prospectus (DRHP) to the Securities and Exchange Board of India for a proposed initial public offering.

The offering pairs a fresh issue of shares worth up to Rs 950 crore with an offer for sale of as many as 17.86 crore shares from existing investors. The company has also flagged a possible pre-IPO placement of up to Rs 190 crore, which would trim the fresh issue by an equivalent amount. The final deal size will crystallise once the price band is set.

Among the selling shareholders, Temasek-backed MacRitchie Investments is set to be the largest, parting with up to 2.47 crore shares. Others trimming their stakes include Fitness First Luxembourg, IDG Ventures India, Tata Digital, Chiratae Trust, Accel entities, Kalaari Capital and Schroders Capital, alongside co-founder Mukesh Bansal, who plans to offload up to 1.6 crore shares.

Cult.fit intends to channel roughly Rs 217.5 crore of the proceeds into lease and rental costs for its existing centres, Rs 120 crore towards paring down debt, and Rs 75 crore into marketing and brand building, with the balance earmarked for general corporate use. Ahead of the filing, the company shored up its board with independent directors Kalpana Morparia, Arun M Kumar, Indu Bhushan and Pragya Misra to satisfy governance norms.

Founded in 2016 by Mukesh Bansal and Ankit Nagori, Cult.fit now runs more than 700 fitness centres nationwide alongside its Cultsport and Carefit arms. The company has drawn over $714 million across 16 funding rounds and was last valued near Rs 12,600 crore (about $1.5 billion). For FY26, it posted revenue of Rs 1,720 crore while narrowing its net loss by 48% to Rs 252 crore. Axis Capital, Goldman Sachs (India), Jefferies India and JM Financial are steering the issue as lead managers.`,
  },

  {
    id: "ai-for-good-global-commission-indian-leaders",
    title: "Ambani, Sunil Mittal and Lakshmi Mittal Named Founding Members of AI for Good Global Commission",
    date: "07-07-2026",
    category: "Tech & AI Policy",
    image: "/images/business-insights/ai-for-good-commission.jpeg",
    excerpt:
      "Mukesh Ambani, Sunil Bharti Mittal, and Lakshmi N. Mittal have been named founding members of the ITU's newly launched 44-member AI for Good Global Commission.",
    readTime: "3 min read",
    featured: false,
    content: `Three of India's most prominent business leaders — Mukesh Ambani, chairman of Reliance Industries; Sunil Bharti Mittal, founder and chairman of Bharti Enterprises; and Lakshmi N. Mittal, executive chairman of ArcelorMittal — have been named founding members of the newly launched AI for Good Global Commission.

Established under the International Telecommunication Union (ITU), the 44-member body is co-chaired by Rwanda's President Paul Kagame and Salesforce CEO Marc Benioff, with ITU Secretary-General Doreen Bogdan-Martin as vice-chair. The commission brings together heads of state, industry CEOs, and UN agency leaders — including Nvidia's Jensen Huang, Amazon's Andy Jassy, and Microsoft's Brad Smith — to forge practical, responsible AI pathways that strengthen trust, expand access, and ensure developing nations are not left behind.

Its inaugural meeting opens today at the ITU's AI for Good Global Summit 2026 in Geneva, running alongside the first UN-mandated Global Dialogue on AI Governance.`,
  },

  {
    id: "world-bank-1-5-bn-job-creation-india",
    title: "World Bank Approves $1.5 Bn to Accelerate Private-Sector Job Creation in India",
    date: "07-07-2026",
    category: "Economy & Policy",
    image: "/images/business-insights/world-bank-job-creation.png",
    excerpt:
      "The World Bank has approved $1.5 billion in Development Policy Financing to back structural reforms aimed at generating private-sector-led employment for 11 million young Indians.",
    readTime: "3 min read",
    featured: false,
    content: `The World Bank has approved $1.5 billion in Development Policy Financing to support a sweeping programme of structural reforms in India aimed at generating private-sector-led employment. The Boosting Job Creation initiative is designed to create opportunities for 11 million young Indians expected to enter the labour market over the next two decades.

The package backs reforms in tax simplification, trade integration, and regulatory improvements, while actively targeting a reduction in barriers to entrepreneurship and a significant increase in female labour force participation. The financing complements India's broader Viksit Bharat 2047 vision.

Separately, UPI — India's flagship digital payments rail — now operates in nine countries, including Singapore, UAE, France, Qatar, and Cambodia, following the successful launch of a real-time peer-to-peer cross-border remittance link with Nepal's National Payments Interface, operational since June 6, 2026, eliminating the need for physical currency exchange.`,
  },

  {
    id: "india-japan-summit-billions-commitments",
    title: "India–Japan Summit Draws Billions in Commitments",
    date: "06-07-2026",
    category: "Trade & Diplomacy",
    image: "/images/business-insights/india-japan-summit.png",
    excerpt:
      "The 16th India–Japan Annual Summit delivered a first-ever defence co-development project, a Joint Statement on AI, and over $10 billion in fresh Japanese investment commitments, deepening the two countries' strategic partnership.",
    readTime: "3 min read",
    featured: false,
    content: `The 16th India–Japan Annual Summit delivered a first-ever defence co-development project, a Joint Statement on AI, and over $10 billion in fresh Japanese investment commitments, marking a substantive deepening of the two countries' strategic partnership.

More than 150 Japanese firms committed $12.5 billion in investment in India, spanning infrastructure, semiconductors, clean energy, and advanced manufacturing. Trade between the two countries has crossed $27.5 billion, with both governments aiming to further increase commerce by improving market access and promoting local currency trade.

Artificial Intelligence has emerged as a new pillar of the partnership, with both countries expanding collaboration in AI research, digital infrastructure, cybersecurity, and trusted technologies.

India and Japan are also working together to secure reliable supplies of critical minerals like lithium, cobalt, and rare earth elements, vital for electric vehicles and clean energy.`,
  },

  {
    id: "tata-electronics-overtakes-foxconn-iphone-exports",
    title: "Tata Electronics Overtakes Foxconn in iPhone Exports from India",
    date: "06-07-2026",
    category: "Manufacturing & Electronics",
    image: "/images/business-insights/tata-iphone-exports.jpeg",
    excerpt:
      "Despite being a late entrant, Tata Electronics has overtaken Foxconn to grab a larger share of iPhones exported from India, assembling $26.3 billion worth against Foxconn's $25.6 billion over the FY22–FY26 PLI period.",
    readTime: "3 min read",
    featured: false,
    content: `Despite being a late entrant, Tata Electronics has overtaken Taiwanese electronics manufacturing giant Foxconn to grab a larger share of assembling iPhones exported from India during the five-year PLI scheme period between FY22 and FY26. iPhones assembled by Tata Electronics for export were pegged at $26.3 billion, compared to Foxconn's $25.6 billion.

Most of these iPhones are exported to the US and Europe. Tata Electronics has also doubled its authorised share capital to ₹20,000 crore, signalling that more funds could be injected by the parent company.

The milestone firmly establishes India as a serious global electronics manufacturing hub. Beyond smartphones, Tata Electronics is making a big push into semiconductors, investing around $14 billion to build a chip fabrication plant in Gujarat and a chip assembly and testing unit in Assam.`,
  },

  {
    id: "india-vc-funding-h1-2026-jump",
    title: "Indian Startup Ecosystem Sees 21% Jump in VC Funding in H1 2026",
    date: "02-07-2026",
    category: "Startups & Funding",
    image: "/images/business-insights/india-vc-funding-h1-2026.png",
    excerpt:
      "VC funding into Indian startups grew 21% year-on-year in H1 2026, signalling a sustained revival in capital inflows after a prolonged funding winter.",
    readTime: "3 min read",
    featured: false,
    content: `Venture capital funding into Indian startups recorded 21% annual growth in the first six months of 2026, sparking optimism about a sustained revival in capital inflows into the country. The rebound comes after a prolonged funding winter that dampened sentiment across the ecosystem.

Notable deals during the period include cleantech startup BatX Energies raising ₹105 crore in a Series A round led by IvyCap Ventures, with participation from Zephyr Peacock, Mankind Pharma Family Office, and others. Elder care platform Age Care Labs also raised ₹85 crore in a Series B1 round.

Additionally, entrepreneur Bhavin Turakhia launched Neo, an AI-native work platform, backed by a $30 million investment.

Investor confidence appears to be returning, particularly in sectors like AI, cleantech, and healthcare, signalling a more mature and resilient startup landscape heading into H2 2026.`,
  },

  {
    id: "upi-22-billion-transactions-june-2026",
    title: "India's UPI Crosses 22 Billion Transactions in June 2026",
    date: "02-07-2026",
    category: "Fintech & Payments",
    image: "/images/business-insights/upi-22-billion.png",
    excerpt:
      "India's UPI recorded a 23% rise in volumes, crossing 22 billion transactions in June 2026, cementing its position as a global leader in real-time digital payments.",
    readTime: "3 min read",
    featured: false,
    content: `India's UPI ecosystem recorded a 23% rise in transaction volumes, crossing 22 billion transactions in June 2026, continuing its robust growth trajectory.

The milestone cements India's position as a global leader in real-time digital payments. International adoption of UPI has also been expanding steadily, with several countries integrating the platform for cross-border remittances and retail transactions.

The strong numbers reflect India's deepening digital payments infrastructure and its growing influence in global fintech innovation. The government has been actively promoting UPI adoption through bilateral agreements, and its reach now spans markets across Southeast Asia, the Middle East, and parts of Europe.

With the National Payments Corporation of India pushing for further global rollout, UPI is increasingly being seen as a viable alternative to card-based international payment networks.`,
  },

  {
    id: "mahindra-june-record-sales",
    title: "Mahindra & Mahindra Posts Record 37% Sales Jump in June",
    date: "02-07-2026",
    category: "Auto & Sales",
    image: "/images/business-insights/mahindra-record-sales.jpg",
    excerpt:
      "Mahindra & Mahindra's sales surged 37% in June on strong UV and CV demand, capping a record FY26 boosted by late-2025 GST rate cuts.",
    readTime: "3 min read",
    featured: false,
    content: `Mahindra & Mahindra's sales surged 37% in June, with strong performance across its UV (utility vehicle) and CV (commercial vehicle) segments. The momentum follows a standout FY26 for the automaker.

M&M recorded its highest-ever annual sales in both SUVs — reaching 6.6 lakh units, up 20% — and light commercial vehicles at 2.89 lakh units, up 13%.

The surge has been largely driven by GST rate cuts that took effect in late 2025, which boosted consumer demand across the sector. The resilience in demand shows that lower prices have continued to outweigh concerns around geopolitical uncertainty.

However, analysts caution that demand may moderate in FY27 as CAFE 3 norms, price hikes, and new powertrain introductions could pressure affordability going forward.`,
  },

  {
    id: "sun-pharma-organon-acquisition",
    title: "Sun Pharma's $11.75 Billion Organon Acquisition — India's Biggest Pharma Deal",
    date: "02-07-2026",
    category: "Pharma & M&A",
    image: "/images/business-insights/sun-pharma-organon.jpeg",
    excerpt:
      "Sun Pharma agrees to acquire New Jersey-based Organon in an all-cash deal worth $11.75 billion — one of the largest outbound acquisitions by an Indian pharma firm.",
    readTime: "3 min read",
    featured: false,
    content: `Indian pharmaceutical giant Sun Pharma announced it has entered into an agreement to acquire New Jersey-headquartered Organon in an all-cash deal valued at $11.75 billion — one of the largest outbound acquisitions by an Indian pharmaceutical firm.

The acquisition will lift Sun Pharma's revenues to $12.4 billion, ranking it among the top 25 global pharmaceutical companies. Organon, which was spun off from Merck in 2021, specializes in women's health and biosimilars.

The transaction is expected to close in early 2027, subject to regulatory approvals and Organon shareholder approval.

The deal catapults Sun Pharma into biosimilars and diversifies it beyond generics into high-value specialty medicines across 140 countries — a landmark moment for India's pharmaceutical industry on the global stage.`,
  },

  {
    id: "india-sovereign-ai-governance-hurdles",
    title: "India's Sovereign AI Push Faces Governance Hurdles",
    date: "01-07-2026",
    category: "Tech & AI Policy",
    image: "/images/business-insights/india-sovereign-ai-governance.png",
    excerpt:
      "As India races to build sovereign AI, governance is emerging as its biggest challenge — with deepfakes, accountability gaps, and rising public-sector AI use testing policymakers' balance of innovation and trust.",
    readTime: "3 min read",
    featured: false,
    content: `As India accelerates its push to build sovereign AI capabilities, governance is emerging as its biggest challenge. Rising concerns around deepfakes, accountability, and growing public-sector use of AI are prompting policymakers to balance innovation with trust.

Debates are intensifying over whether India's AI compute infrastructure — bolstered by subsidised GPU programmes — is sufficient to close the capability gap with global leaders.

Experts warn that without robust regulatory frameworks, the rapid deployment of AI across government services and financial systems could outpace oversight, raising the stakes for policymakers as they race to scale India's AI ambitions responsibly.`,
  },

  {
    id: "hdfc-bank-rajiv-kumar-chairman-puneet-sharma-cfo",
    title: "HDFC Bank Strengthens Leadership with Rajiv Kumar as Chairman-Designate, Puneet Sharma as CFO",
    date: "01-07-2026",
    category: "Banking & Leadership",
    image: "/images/business-insights/hdfc-bank-leadership.jpg",
    excerpt:
      "HDFC Bank draws investor attention after appointing former Finance Secretary Rajiv Kumar as Chairman-designate and Puneet Sharma as CFO, moves analysts say strengthen the bank ahead of a growth phase.",
    readTime: "3 min read",
    featured: false,
    content: `HDFC Bank is drawing renewed investor attention following the appointment of former Finance Secretary Rajiv Kumar as Chairman-designate and Puneet Sharma as Chief Financial Officer.

Analysts say the leadership changes strengthen the bank's governance and financial oversight at a pivotal moment, as HDFC Bank enters what many expect to be a robust growth phase.

The optimism is underpinned by accelerating credit growth and easing net interest margin pressures, both of which are expected to support stronger earnings momentum for India's largest private-sector lender in the coming quarters.`,
  },

  {
    id: "titan-reinvention-lifestyle-powerhouse",
    title: "Titan's Reinvention: From Watchmaker to Lifestyle Powerhouse",
    date: "01-07-2026",
    category: "Retail & Lifestyle",
    image: "/images/business-insights/titan-reinvention-lifestyle-powerhouse.jpg",
    excerpt:
      "Titan crossed Rs 50,000 crore in revenue in FY25 after nearly 40 years — then added the next Rs 25,000 crore in just one year, as it expands into eyecare, fragrances, sarees, and global markets.",
    readTime: "3 min read",
    featured: false,
    content: `Titan Company, the modest 1984 joint venture between Tata Industries and the Tamil Nadu Industrial Development Corporation, has grown into the second-most valued Tata Group company after TCS, with a market capitalisation of Rs 3.6 lakh crore.

In FY25, Titan crossed Rs 50,000 crore in revenue — a milestone that took nearly 40 years to reach. It then added the next Rs 25,000 crore in just one year, in FY26, a sign of how sharply the company's growth curve has steepened.

The company is now pushing beyond its core watches and jewellery business into lifestyle adjacencies including eyecare, fragrances, and sarees, alongside a growing international footprint — most notably its 2025 acquisition of Dubai-based jewellery chain Damas.

Managing Director Ajoy Chawla describes the firm as "restless and responsible," a philosophy driven by constant product and retail innovation as Titan reinvents itself from a watchmaker into a diversified lifestyle powerhouse.`,
  },

  {
    id: "bharti-airtel-africa-stake-share-swap",
    title: "Bharti Airtel Boosts Africa Stake via Share Swap",
    date: "30-06-2026",
    category: "Telecom & M&A",
    image: "/images/business-insights/bharti-airtel-africa-stake.jpg",
    excerpt:
      "Bharti Airtel acquired a 16.3% stake in Airtel Africa from ICIL via a cashless ₹28,200 crore share swap, lifting its effective holding to roughly 79%.",
    readTime: "3 min read",
    featured: false,
    content: `Bharti Airtel acquired a 16.3% stake in Airtel Africa from ICIL through a cashless ₹28,200 crore share-swap deal, lifting its effective holding in the UK-listed Africa unit to roughly 79%. The move strengthens Airtel's control over its fast-growing African operations without requiring fresh cash outlay, reflecting the telecom major's continued push to consolidate its international portfolio.

This comes at a time when India's telecom sector itself is showing strong momentum, with industry-wide revenue rising steadily on the back of robust data consumption and subscriber growth.

Analysts view the swap as a strategic long-term bet on Africa's expanding telecom and digital services market, where Airtel has been investing heavily in network infrastructure and mobile money services.`,
  },

  {
    id: "india-ev-sector-sales-surge-may-2026",
    title: "India's EV Sector Sees Sharp Sales Surge",
    date: "30-06-2026",
    category: "EV & Mobility",
    image: "/images/business-insights/india-ev-sales-surge-2026.jpg",
    excerpt:
      "India's auto retail registrations rose 5.5% YoY in May 2026, led by a 41.2% jump in EV sales as fuel prices spiked and adoption accelerated.",
    readTime: "3 min read",
    featured: false,
    content: `India's domestic automobile retail registrations surged 5.5% year-on-year in May 2026, driven significantly by a robust 41.2% jump in electric vehicle sales. A steep surge in conventional petroleum fuel prices drove a sharp spike in electric vehicle penetration across India during May, accelerating consumer adoption.

Supporting this momentum, Bengaluru-based EV maker Simple Energy raised ₹250 crore in debt and equity, led by Thyrocare founder Velumani's family office, to scale production from 3,000 to 15,000 scooters monthly and expand stores from 80 to 250, targeting an FY28 IPO.

The move reflects strong investor confidence in India's electric two-wheeler segment, one of the fastest-growing pockets of the country's mobility transition.`,
  },

  {
    id: "rbi-holds-repo-rate-525-markets-rally",
    title: "RBI Holds Repo Rate at 5.25%, Markets Rally",
    date: "29-06-2026",
    category: "RBI & Markets",
    image: "/images/business-insights/india-stock-market-fourth-largest.jpg",
    excerpt:
      "Sensex and Nifty traded higher after the RBI kept the repo rate unchanged at 5.25%, retained a neutral stance, and announced measures to boost capital inflows.",
    readTime: "3 min read",
    featured: false,
    content: `Sensex and Nifty traded higher after the Reserve Bank of India kept the repo rate unchanged at 5.25%, retained a neutral policy stance, and announced measures to boost capital inflows.

The RBI also announced steps to improve foreign participation in Indian markets, including a higher investment limit in equities for Non-Resident Indians (NRIs) and Overseas Citizens of India (OCIs), along with an expansion of government securities available under the Fully Accessible Route (FAR).

Rate-sensitive sectors such as banking, financial services, and real estate outperformed following the policy announcement, while IT and metal stocks remained under pressure.`,
  },

  {
    id: "india-energy-storage-market-expansion-2032",
    title: "India's Energy Storage Market Set for Major Expansion",
    date: "29-06-2026",
    category: "Energy & Sustainability",
    image: "/images/business-insights/india-energy-storage-market-2032.jpg",
    excerpt:
      "India's C&I energy storage market is expected to scale to 22–31 GWh by 2032, driven by rising tariffs, renewable integration, and a push toward energy resilience.",
    readTime: "3 min read",
    featured: false,
    content: `India's commercial and industrial (C&I) energy storage market is expected to scale rapidly to 22–31 GWh by 2032, supported by rising energy tariffs, renewable energy integration, cost optimisation needs, and a shift toward energy resilience and decarbonisation.

This growth signals increasing corporate adoption of battery and storage solutions as India pushes toward its clean energy targets. The expansion is also being driven by government policy incentives for domestic manufacturing and renewable infrastructure.

Analysts expect the storage sector to attract significant private investment over the next five years, making it one of the fastest-growing segments within India's broader energy transition landscape.`,
  },

  {
    id: "meta-reliance-ai-data-centre-jamnagar",
    title: "Meta & Reliance to Build India's First AI-Enabled Data Centre in Jamnagar",
    date: "25-06-2026",
    category: "Tech & AI",
    image: "/images/business-insights/meta-reliance-data-centre.jpg",
    excerpt:
      "Meta and Reliance will build a 168-MW AI-enabled data centre in Jamnagar, Gujarat — powered by renewable energy and cooled using desalinated seawater.",
    readTime: "3 min read",
    featured: false,
    content: `Meta has struck a partnership with Reliance Industries to build a 168-megawatt AI-enabled data centre in Jamnagar, Gujarat — its first major built-to-suit AI infrastructure deal in India.

Under the agreement, Reliance will take end-to-end responsibility for development, while Meta will lease capacity from the facility. The data centre will be powered by renewable energy and cooled using desalinated seawater, with Meta covering all associated energy and water costs.

In a related announcement, Meta signed deals with two Indian clean energy firms — CleanMax and Fourth Partner Energy — totalling close to 1 gigawatt of new capacity across Rajasthan, Karnataka, Tamil Nadu, Maharashtra, and Uttar Pradesh.

The deal builds on a long-standing partnership between the companies that traces back to Meta's $5.7 billion investment in Jio Platforms in 2020, and a $100 million joint venture formed in 2025 to develop Llama-based enterprise AI solutions for Indian businesses. The Jamnagar facility is expected to be operational within two years.`,
  },

  {
    id: "india-us-trade-talks-july-deadline",
    title: "India-US Trade Talks Conclude Without Final Deal, July Deadline Looms",
    date: "24-06-2026",
    category: "Trade & Policy",
    image: "/images/business-insights/india-us-trade-talks.jpg",
    excerpt:
      "India and the US wrapped two days of talks in New Delhi but left key issues unresolved, with a temporary 10% US tariff regime set to expire on July 24.",
    readTime: "3 min read",
    featured: false,
    content: `India and the United States wrapped up two days of high-level trade talks in New Delhi on June 24, but left critical issues unresolved ahead of a pivotal deadline. Commerce and Industry Minister Piyush Goyal and visiting US Trade Representative Jamieson Greer discussed market access, digital trade, and non-tariff barriers but gave no indication that all differences had been bridged.

Both sides are racing to finalise an interim arrangement before the expiration of a temporary 10% US tariff regime on July 24 — a deadline that has added urgency to negotiations. The talks follow the Modi-Trump bilateral on the G7 sidelines in France on June 17.

India has proposed eliminating or reducing tariffs on all US industrial goods and a wide range of agricultural products, while also expressing intentions to purchase $500 billion worth of US goods — including energy, aircraft, and technology products — over the next five years. Both sides described "substantial progress" but stopped short of declaring a breakthrough.`,
  },

  {
    id: "bharatiya-vyapar-mahotsav-2026",
    title: "India Gears Up for Bharatiya Vyapar Mahotsav 2026",
    date: "24-06-2026",
    category: "Trade & MSME",
    image: "/images/business-insights/bharatiya-vyapar-mahotsav-2026.jpg",
    excerpt:
      "India's largest Make-in-India multi-sectoral business expo runs 12–15 August 2026 at Bharat Mandapam, with 2,000+ exhibitors and over 10 lakh visitors expected.",
    readTime: "3 min read",
    featured: true,
    content: `India's most ambitious trade exposition is set to take centre stage this Independence Day season. The Bharatiya Vyapar Mahotsav (BVM) 2026, billed as the country's largest Make-in-India multi-sectoral business expo, will be held from 12 to 15 August 2026 at Bharat Mandapam, Pragati Maidan, New Delhi.

Organised jointly by the Confederation of All India Traders (CAIT) and the India Trade Promotion Organisation (ITPO) under a landmark MoU, the event carries the theme "Made in India, Made for India, Made for the World" — an echo of Prime Minister Narendra Modi's vision of Atmanirbhar Bharat and Vocal for Local.

The four-day expo is expected to host over 2,000 exhibitors spanning sectors including MSMEs, agriculture, textiles, electronics, handicrafts, startups, and digital commerce. Organisers anticipate more than 10 lakh visitors, 2 lakh business delegates, and 5,000 international participants — making it one of India's largest commercial gatherings to date.

Union Commerce Minister Piyush Goyal, who launched the BVM portal in May, called the event a milestone for domestic trade, noting that India's exports have already reached $863 billion this year, nearly 5% higher than the previous year — with a national target of $1 trillion in sight.

Registrations are currently open across four categories — Exhibitor, Business Delegate, Speaker, and Visitor — at bharatiyavyaparmahotsav.com.`,
  },

  {
    id: "india-overtakes-japan-stock-market",
    title: "India Overtakes Japan to Become World's Fourth Largest Stock Market",
    date: "24-06-2026",
    category: "IPO & Markets",
    image: "/images/business-insights/india-stock-market-fourth-largest.jpg",
    excerpt:
      "India crosses the $5.5 trillion milestone in June 2026, overtaking Japan to become the world's fourth largest stock market as the Sensex tops 85,000.",
    readTime: "3 min read",
    featured: false,
    content: `India has officially overtaken Japan to become the world's fourth largest stock market by market capitalization, crossing the $5.5 trillion milestone in June 2026. The BSE Sensex crossed the 85,000 mark this month, driven by strong foreign institutional investor inflows, robust corporate earnings, and growing retail investor participation. India now trails only the United States, China, and the United Kingdom in total market cap.

The surge has been fueled by outperformance in sectors including capital goods, defence, infrastructure, and financial services. Systematic Investment Plan contributions hit an all-time high of ₹26,000 crore in May 2026, reflecting deep-rooted domestic confidence in equity markets.

Market analysts at Goldman Sachs and Morgan Stanley have both upgraded India's equity outlook to "Overweight," projecting further upside driven by a young demographic, rising middle-class consumption, and continued government capital expenditure in infrastructure and manufacturing.`,
  },

  {
    id: "tata-semiconductor-gujarat-expansion",
    title: "Tata Group Eyes $2 Billion Semiconductor Expansion in Gujarat",
    date: "24-06-2026",
    category: "Manufacturing",
    image: "/images/business-insights/tata-semiconductor-gujarat.jpg",
    excerpt:
      "Tata Group plans an additional $2 billion in its Dholera chip plant, boosting capacity by nearly 60% and creating an estimated 8,000 direct jobs by 2027.",
    readTime: "3 min read",
    featured: false,
    content: `The Tata Group is set to invest an additional $2 billion in expanding its semiconductor manufacturing facility in Dholera, Gujarat, as part of India's ambitious push to become a global chipmaking hub. The expansion, expected to be operational by 2027, will increase the plant's production capacity by nearly 60% and create an estimated 8,000 direct jobs.

This move comes on the back of strong government support under the India Semiconductor Mission, which has already committed over ₹76,000 crore in incentives to attract global chipmakers. Tata Electronics, which partnered with Taiwan's Powerchip Semiconductor Manufacturing Corporation for the original facility, is in advanced talks with two more global technology firms for technology transfer agreements.

Industry experts believe India's semiconductor ambitions could position the country as a credible alternative to China and Taiwan in the global supply chain, especially as Western nations aggressively diversify chip sourcing.`,
  },

  {
    id: "india-startup-funding-2026",
    title: "India's Startup Funding Slows in 2026, But Quality Deals Hold Strong",
    date: "23-06-2026",
    category: "Funding",
    image: "/images/business-insights/meta-cred.jpg",
    excerpt:
      "Indian startups raised $8.44 billion across 831 rounds in H1 2026 — a 14.7% drop — as investors turn more selective, prioritising quality deals over volume.",
    readTime: "3 min read",
    content: `India's startup ecosystem is going through a careful phase in 2026. While money is still flowing in, investors are being far more selective about where they put it.

Indian startups raised $8.44 billion across 831 equity funding rounds between January and June 2026 — a 14.7% drop compared to the same period last year, when $9.9 billion was raised across over 1,480 rounds. Despite the dip in volume, individual deals remain significant. The first week of June alone saw startups raise nearly $187 million, led by FirstClub's $55 million Series B round backed by Peak XV Partners and Sofina. On the policy front, the government launched Startup India Fund of Funds 2.0 with a ₹10,000 crore corpus, aimed at channelling more capital into early-stage startups through regulated investment funds.

The mood in India's startup world is shifting — from chasing growth to building real businesses. Investors are tightening their standards, but the ecosystem remains one of the most active in the world.`,
  },

  {
    id: "meta-cred-investment",
    title: "Meta Invests $900 Million in CRED, Taps Kunal Shah to Lead WhatsApp",
    date: "22-06-2026",
    category: "Deals & Fintech",
    image: "/images/business-insights/startup-funding-2026.jpg",
    excerpt:
      "Meta leads a $900 million round in CRED for a ~20% stake at a $4.5 billion valuation, and appoints founder Kunal Shah as the new global CEO of WhatsApp.",
    readTime: "3 min read",
    featured: false,
    content: `In a landmark deal reshaping India's tech landscape, Meta has led a $900 million financing round in Indian fintech giant CRED, structured through a combination of primary and secondary share purchases, making Meta a minority investor in the company.

The investment gives Meta a roughly 20% stake in CRED, valuing it at $4.5 billion post-money. This marks a recovery from CRED's peak valuation of $6.4 billion in 2022, which had since dipped to $3.6 billion in May 2025.

As part of the deal, CRED founder Kunal Shah has been appointed global CEO of WhatsApp, marking one of the biggest leadership changes in the platform's history. Shah will step down as CRED's chief executive while retaining his personal shareholding, with Miten Sampat taking over as interim CEO.

Shah's fintech background has fuelled speculation that Meta may deepen financial services and commerce integrations within WhatsApp in the years ahead.`,
  },

  {
    id: "jio-platforms-ipo",
    title: "Jio Files for India's Largest-Ever IPO Valued at ₹13 Lakh Crore",
    date: "22-06-2026",
    category: "IPO & Markets",
    image: "/images/business-insights/jio-ipo.jpeg",
    excerpt:
      "Reliance Industries officially sets the stage for India's biggest stock market debut, filing draft papers for a 100% fresh issue of Jio Platforms valued at ₹12–13 lakh crore.",
    readTime: "3 min read",
    featured: false,
    content: `Reliance Industries has officially set the stage for India's biggest stock market debut. At its 49th Annual General Meeting (AGM), chairman Mukesh Ambani confirmed that the board approved the draft papers for the Jio Platforms IPO, with the filing submitted to the Securities and Exchange Board of India (SEBI) on June 19.

Jio Platforms, Reliance's telecom and digital arm with over 527 million subscribers and a 43% revenue market share, is structured as a 100% fresh issue — meaning all proceeds go to the company, not existing shareholders. Analysts at Elara Capital have valued the entity at ₹12–13 lakh crore, with an expected fundraise of ₹35,000–52,000 crore. Akash Ambani, appointed Managing Director in May, will lead the listed entity alongside siblings Isha and Anant, marking a generational transition at Reliance.

With the SEBI review underway, the public issue is expected later in 2026. The Jio IPO is widely seen as both a market milestone and a defining chapter in India's digital economy story.`,
  },

    {
    id: "india-uk-trade",
    title: "India-UK trade pact kicks in July 15 — Scotch whisky, cars, and Indian textiles set for tariff cuts",
    date: "22-06-2026",
    category: "Economy & Trade",
    image: "/images/business-insights/india-uk-trade.png",
    excerpt:
      "The India-UK Comprehensive Economic and Trade Agreement will come into force on July 15, 2026, ushering in sweeping tariff reductions and expanded market access for both countries. While Scotch whisky and British automobiles will benefit from lower Indian duties, Indian exporters in textiles, footwear, marine products, and engineering goods gain duty-free access to the UK market, paving the way for stronger bilateral trade and economic cooperation.",
    readTime: "3 min read",
    content: `After years of negotiations and a signing in July 2025, the India-UK Comprehensive Economic and Trade Agreement will formally come into force on July 15, 2026 — making it India's first bilateral trade deal with a Western nation.



Indian whisky tariffs on British Scotch drop from 150% to 75% on day one, falling further to 40% over ten years. UK automobile tariffs fall from 100% to 10% under a quota. In return, India gains duty-free access on 99% of its exports to the UK from day one, with sectors like textiles, footwear, marine products, and engineering goods set to benefit immediately. The deal is projected to boost bilateral trade by £25.5 billion annually in the long run.



Experts caution that Indian exporters must upgrade product standards to meet UK regulatory norms to fully capitalise on the new terms. The government has been urged to run domestic outreach programmes for industry.`,
  },

  
  {
    id: "fable-5-ai",
    title: "US Restricts Anthropic's Mythos 5 and Fable 5 AI Models Over Jailbreak Concerns",
    date: "18-06-2026",
    category: "Technology — AI Policy & Export Controls",
    image: "/images/business-insights/fable-5-ai.png",
    excerpt:
     "Anthropic shut down its Fable 5 and Mythos 5 models worldwide after a US export directive cited a jailbreak-related security concern, a move it's complying with but disputing.",
    readTime: "4 min read",
    featured: false,
    content: `Anthropic stunned the tech world this week, hitting a $965 billion valuation that pushed it past rival OpenAI—remarkable, given OpenAI's six-year head start and the fact that Anthropic was founded by its former employees.

Strong numbers help explain the rise: revenue is projected to reach $10.9 billion this quarter, more than double the last, likely making it Anthropic's first profitable quarter.

However, the deeper driver is one word: trust.

It started internally. In 2020, a group of OpenAI staff, including CEO Dario Amodei, left over the belief that AI needs safety and alignment, not just scaling. That reputation now draws top talent—AI luminary Andrej Karpathy recently joined.

Public trust grew after a clash with the Pentagon, which cut ties over surveillance and weapons concerns. Rather than hurt Anthropic, the stand boosted its image as principled, contrasting with OpenAI's "sellout" reputation.

Users trust it too—many find Claude more accurate, balanced, and willing to push back than ChatGPT.

Investors, meanwhile, back Anthropic's clear enterprise-first path to profit, proven by tools like Claude Code.

The AI race is young, but whoever earns the most trust may win.

For now, Anthropic leads.`
  },

    {
    id: "non-metro-startup-story",
    title: "India's Startup Boom Breaks Out of the Metros",
    date: "19-06-2026",
    category: "Startups",
    image: "/images/business-insights/non-metro-startup-story.png",
    excerpt:
      "Nearly half of India's 207,000-plus recognised startups now emerge from Tier II and Tier III cities, signalling a profound democratisation of entrepreneurship.",
    readTime: "3 min read",
    content: `India's startup boom is no longer confined to its big-city hubs. The country now counts more than 207,000 recognised startups, 112 unicorns, and over $350 billion in collective value — and crucially, nearly half of these startups are emerging from Tier II and Tier III cities. \n\nThis geographic shift carries real significance. Founders building outside Bengaluru, Mumbai, and Delhi enjoy lower operating costs, closer proximity to underserved customers, and a sharper understanding of demand in markets that larger players have long overlooked. Instead of chasing trends from a distance, they are solving problems they live alongside every day. \n\nThe trend also speaks to the maturing of India's startup infrastructure. Digital public rails, policy support, seed programmes, and growing founder networks now make it possible to build a serious company almost anywhere in the country. For India, the implication is profound: entrepreneurship is becoming genuinely democratised. The next great Indian company may well be built not in a glass tower in a metro, but in a smaller city, closer to the real demand it serves.`,
  },

    {
  id: "second-time-founder-prolearn",
  title: "Ex-Vedantu Leader Raises Rs 30 Crore to Build an AI-Native Learning Platform",
  date: "19-06-2026",
  category: "Edtech",
  image: "/images/business-insights/second-time-founder-prolearn.png",    
  excerpt:
    "Second-time founder Ravneet Singh has raised Rs 30 crore in pre-seed funding for ProLearn, an AI-native platform aiming to replace one-size-fits-all video lectures with adaptive, personalised learning.",
  readTime: "2 min read",
  content: "Experience counts in entrepreneurship, and ProLearn is a case in point. Former Vedantu technology leader Ravneet Singh has raised Rs 30 crore in a pre-seed round for his new venture, an AI-native learning platform aiming to reimagine online education.\n\nAt the heart of ProLearn is an AI-powered learning companion designed to deliver personalised, interactive, and adaptive learning experiences — moving beyond one-size-fits-all video lectures toward education that responds to each individual student. The fresh capital will fuel product and engineering development, strengthen the platform's AI and reasoning infrastructure, expand curriculum-aligned content, and support hiring ahead of its public launch.\n\nWhat makes the story compelling is the founder's pedigree. Having previously helped build technology at one of India's best-known edtech companies, Singh represents a growing wave of experienced operators taking another swing at hard problems with sharper insight and stronger networks. As AI reshapes how knowledge is delivered, seasoned founders like Singh are well placed to build the next generation of learning tools — and to do so with the wisdom of having been there before.",

  },
  
  {
    id: "bigbasket-hari-menon",
    title: "Bigbasket Co-Founder Hari Menon Steps Down as CEO, Amazon Veteran Amit Nanda Takes Over",
    date: "18-06-2026",
    category: "Funding",
    image: "/images/business-insights/bigbasket-hari-menon.png",
    excerpt:
      "Business — Corporate Leadership / Retail & E-commerce",
    readTime: "3 min read",
    content: `BENGALURU — Bigbasket co-founder Hari Menon has stepped down as CEO of the Tata Group-backed grocery and quick-commerce company, handing the reins to former Amazon India executive Amit Nanda. The move marks the end of an era for one of India's earliest online grocery pioneers, coming as the sector races to shorten delivery times.

Menon will step back from daily operations but stay on the board alongside fellow co-founder Vipul Parekh, mentoring the leadership team.

Nanda, who spent 11 years at Amazon India—most recently leading Selling Partner Services—brings deep experience in ecommerce, technology, and consumer businesses. He earlier worked at Hindustan Unilever and Citibank.

"I am incredibly excited to join Bigbasket and build upon the phenomenal trust it has established with millions of consumers," Nanda said, noting that pairing Bigbasket's customer-first values with the Tata legacy creates a strong foundation.

Founded in 2011, Bigbasket helped popularise online grocery shopping in India and became central to Tata Digital after the group's 2021 majority acquisition. It now serves over 25 million customers across 60-plus cities through more than 900 dark stores.

Menon praised Nanda's track record, while Tata Digital CEO Sajith Sivanandan said his experience suits the company's expansion goals.`,
  },

  {
    id: "biodimension-8-crore",
    title: "Biodimension Raises ₹8 Crore to Transform Life Sciences",
    date: "15-06-2026",
    category: "Life Sciences",
    image: "/images/business-insights/biodimension.png",
    excerpt:
      "The Pune-based biotech startup will use the fresh capital to scale its 3D bioprinting platform and accelerate tissue-engineering research.",
    readTime: "4 min read",
    content: `Life sciences firm Biodimension, headquartered out of Bengaluru, has raised ₹8 crore in a fundraising round co-led by IAN Angel Fund and including other investors like Campus Angels Network, Dr. Sampath Srisailam, and angel investor Aaryan Baid. These funds will be utilized in product development, expanding laboratories, reinforcing its research and business teams, and commercializing its products in India and overseas.

Manojkumar S., Ranjith Kumar Velusamy, and Pradeep Arunachalam are the founders of this company that focuses on providing human tissue and organoid models, which could act as an alternative to animal testing. Biodimension's solutions provide assistance to pharmaceuticals, biotech, and cosmetics companies to make their research and safety assessments easier.

Currently, Biodimension has formed strategic collaborations with pharmaceutical companies, biotechs, research institutions, and contract research organizations both in India and Singapore. Moving forward, this company intends to ramp up their oncology research capability, scale their Bioassay-as-a-Service offering, and enter international markets, especially Southeast Asia.`,
  },

  {
    id: "deeptech-series-b",
    title: "Bengaluru Deeptech Startup Closes $40M Series B",
    date: "14-06-2026",
    category: "Funding",
    image: "/images/business-insights/deeptech.png",
    excerpt:
      "The round will fund global expansion and a new AI research lab in Bengaluru.",
    readTime: "3 min read",
    content: `Bangalore-based fashion-tech startup NeuroPixel.AI recently stated that it is discontinuing its services after five years of developing AI-powered products for the fashion industry. Launched in 2020 by co-founders Arvind Venugopal Nair and Amritendu Mukherjee, the company offered a suite of technologies that helped fashion companies develop virtual models, automate their product catalogs, and provide virtual try-on experiences without the expensive process of photo shoots.

NeuroPixel.AI managed to attract the interest of retail and e-commerce companies as well as investors such as Flipkart Ventures. However, with technology leaders like Google, Meta, and Alibaba developing advanced generative AI, the challenge for this small startup increased.

As explained by CEO and founder Arvind Venugopal Nair, besides difficulties in obtaining timely payments from the company's largest client, other factors such as lack of funds and limited market presence hindered the growth of NeuroPixel.AI. The company maintains its own unique set of AI technologies that can produce top quality products for less, but it has decided to end its service business while looking into other ways to make money off its technology stack.`,
  },


  {
    id: "indian-deep-tech-innotrek-uk",
    title: "Indian Deep-Tech Goes Global: Nasscom's InnoTrek UK 2026 Opens Doors in London",
    category: "Emerging Tech",
    image: "/images/business-insights/indian-deep-tech-innotrek-uk.png",
    excerpt:
      "Nasscom's InnoTrek UK 2026 connects Indian deep-tech startups with UK investors, enterprises, and policymakers—marking a decisive shift toward global ambitions",
    featured: false,
    readTime: "4 min read",
    content: `The firm has also announced plans of making investments worth ₹75,000 crores in its oil-to-chemicals (O2C) division, besides boosting its green energy efforts. It is expected that such an investment will be used to increase the efficiency of their refining and petrochemical production operations, thus improving the firm's international competitiveness.

On the other hand, Reliance's ambition is to have a manufacturing capacity for solar modules worth 20 GW within the next five years from its Giga complex in Jamnagar, Gujarat. The proposed facility would target solar modules, battery storage, fuel cells, and green hydrogen manufacturing operations as part of the country's efforts to boost renewable energy production.

According to Chairman Mukesh Ambani, it was imperative to address present-day needs while at the same time looking at future needs. As much as O2C continues being the largest source of revenues for the company, Reliance is heavily investing in renewable energy products.

Industry experts regard such efforts as steps towards diversifying Reliance's energy sources.`,
  },

  {
    id: "green-hydrogen-push",
    title: "Reliance Commits ₹75,000 Cr to Green Hydrogen Push",
    date: "18-06-2026",
    category: "Energy",
    image: "/images/business-insights/hydrogen.png",
    excerpt:
      "The investment is part of a broader plan to make clean energy cost-competitive within the decade.",
    readTime: "5 min read",
    content: `India's deep-tech ambitions took a decisive international turn this June as industry body Nasscom launched InnoTrek UK 2026, a flagship global market-access programme. From June 8 to 12, a carefully selected cohort of Indian deep-tech startups travelled to the United Kingdom for an intensive week of market insights, investor access, and business development opportunities, with several engagements timed around London Tech Week.

The initiative is more than a networking trip. It is designed to strengthen India–UK technology collaboration and help promising Indian startups build globally competitive businesses, connecting founders directly with investors, enterprises, and policymakers in one of the world's most mature innovation ecosystems.

For a generation of founders building in artificial intelligence, semiconductors, and other frontier fields, programmes like InnoTrek signal a shift in mindset: Indian startups are no longer content to serve only the domestic market. They are positioning themselves as global players from day one. As cross-border partnerships deepen, such missions could prove pivotal in turning India's deep-tech promise into worldwide commercial success.`,
  },

    {
    id: "iit-madras-world-stage-bharat-innovates-2026",
    title: "IIT Madras Leads India's Innovation Charge in Nice at Bharat Innovates 2026",
    date: "18-06-2026",
    category: "Startups & Innovation",
    image: "/images/business-insights/iit-madras-world-stage-bharat-innovates-2026.png",
    excerpt:
      "At Bharat Innovates 2026 in Nice, IIT Madras presents fifteen startups and leads two thematic tracks—proof that world-class deep-tech is emerging from Indian campuses.",
    readTime: "5 min read",
    content: `India's premier engineering institution is carrying the country's innovation story to a global audience. IIT Madras is showcasing a range of deep-tech innovations, startups, and strategic research initiatives at Bharat Innovates 2026, an international technology exhibition organised by the Ministry of Education in Nice, France, from June 14 to 16.

The institute's role at the event is significant. IIT Madras is leading two of the thirteen thematic areas on display and presenting fifteen startups incubated within its own ecosystem — a powerful demonstration of how academic research is being translated into real, market-ready ventures.

This kind of presence matters. For years, India's brightest technical talent has been celebrated abroad; now its institutions are exporting not just engineers but entire companies and research agendas. By placing home-grown deep-tech alongside global peers, IIT Madras strengthens India's reputation as a serious source of frontier innovation.

For aspiring founders, the message is clear: world-class ideas can and do emerge from Indian campuses, and the global stage is increasingly within reach.`,
  },

  
    {
    id: "masters-union-demo-day-2026",
    title: "India's Youngest Founders Cash In at Masters' Union Demo Day 2026",
    date: "18-06-2026",
    category: "Education & Entrepreneurship",
    image: "/images/business-insights/masters-union-demo-day-2026.png",
    excerpt:
      "At Masters' Union's Demo Day 2026, eighteen student startups raised Rs 4 crore across AI, fintech, mobility, and more—proof that company-building is starting before graduation.",
    readTime: "4 min read",
    content: `Entrepreneurial energy was on full display at Masters' Union's Demo Day 2026 in Gurugram, where eighteen student-led startups secured a combined Rs 4 crore in funding commitments. Remarkably, much of the backing was announced within an hour of the founders' pitches — a testament to both investor confidence and the quality of ideas on show.

The funded ventures spanned an impressively broad range of sectors, including artificial intelligence, fintech, enterprise technology, consumer brands, mobility, hospitality, and edtech. The breadth reflects a generation of young founders unafraid to tackle problems across the economy.

These companies emerged from Masters' Union's year-long Venture Initiation Programme, which has now supported more than eighty student startups. Rather than treating entrepreneurship as a post-graduation pursuit, the programme builds company-creation directly into the student experience.

The story is an encouraging one for India's startup pipeline. When students can validate ideas, build early traction, and attract real capital before they even graduate, the result is a deeper, faster-moving talent pool feeding the wider innovation ecosystem.`,
  },
];

// Look up a single article by its id (used by the full-page article view).
export const getBusinessInsightById = (id: string): BusinessInsight | undefined =>
  businessinsights.find((a) => a.id === id);

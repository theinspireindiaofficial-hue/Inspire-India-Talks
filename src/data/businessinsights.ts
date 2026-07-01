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

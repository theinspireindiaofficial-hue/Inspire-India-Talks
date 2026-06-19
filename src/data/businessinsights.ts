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
    id: "fable-5-ai",
    title: "US Restricts Anthropic's Mythos 5 and Fable 5 AI Models Over Jailbreak Concerns",
    date: "18-06-2026",
    category: "Technology — AI Policy & Export Controls",
    image: "/images/buisness-insights/fable-5-ai.png",
    excerpt:
     "Anthropic shut down its Fable 5 and Mythos 5 models worldwide after a US export directive cited a jailbreak-related security concern, a move it's complying with but disputing.",
    readTime: "4 min read",
    featured: true,
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
    image: "/images/buisness-insights/non-metro-startup-story.png",
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
  image: "/images/buisness-insights/second-time-founder-prolearn.png",    
  excerpt:
    "Second-time founder Ravneet Singh has raised Rs 30 crore in pre-seed funding for ProLearn, an AI-native platform aiming to replace one-size-fits-all video lectures with adaptive, personalised learning.",
  readTime: "2 min read",
  body: "Experience counts in entrepreneurship, and ProLearn is a case in point. Former Vedantu technology leader Ravneet Singh has raised Rs 30 crore in a pre-seed round for his new venture, an AI-native learning platform aiming to reimagine online education.\n\nAt the heart of ProLearn is an AI-powered learning companion designed to deliver personalised, interactive, and adaptive learning experiences — moving beyond one-size-fits-all video lectures toward education that responds to each individual student. The fresh capital will fuel product and engineering development, strengthen the platform's AI and reasoning infrastructure, expand curriculum-aligned content, and support hiring ahead of its public launch.\n\nWhat makes the story compelling is the founder's pedigree. Having previously helped build technology at one of India's best-known edtech companies, Singh represents a growing wave of experienced operators taking another swing at hard problems with sharper insight and stronger networks. As AI reshapes how knowledge is delivered, seasoned founders like Singh are well placed to build the next generation of learning tools — and to do so with the wisdom of having been there before.",

  },
  
  {
    id: "bigbasket-hari-menon",
    title: "Bigbasket Co-Founder Hari Menon Steps Down as CEO, Amazon Veteran Amit Nanda Takes Over",
    date: "18-06-2026",
    category: "Funding",
    image: "/images/buisness-insights/bigbasket-hari-menon.png",
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
    image: "/images/buisness-insights/biodimension.png",
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
    image: "/images/buisness-insights/deeptech.png",
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
    image: "/images/buisness-insights/indian-deep-tech-innotrek-uk.png",
    excerpt:
      "Nasscom's InnoTrek UK 2026 connects Indian deep-tech startups with UK investors, enterprises, and policymakers—marking a decisive shift toward global ambitions",
    featured: true,
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
    image: "/images/buisness-insights/hydrogen.png",
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
    image: "/images/buisness-insights/iit-madras-world-stage-bharat-innovates-2026.png",
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
    image: "/images/buisness-insights/masters-union-demo-day-2026.png",
    excerpt:
      "At Masters' Union's Demo Day 2026, eighteen student startups raised Rs 4 crore across AI, fintech, mobility, and more—proof that company-building is starting before graduation.",
    readTime: "4 min read",
    content: `Entrepreneurial energy was on full display at Masters' Union's Demo Day 2026 in Gurugram, where eighteen student-led startups secured a combined Rs 4 crore in funding commitments. Remarkably, much of the backing was announced within an hour of the founders' pitches — a testament to both investor confidence and the quality of ideas on show.

The funded ventures spanned an impressively broad range of sectors, including artificial intelligence, fintech, enterprise technology, consumer brands, mobility, hospitality, and edtech. The breadth reflects a generation of young founders unafraid to tackle problems across the economy.

These companies emerged from Masters' Union's year-long Venture Initiation Programme, which has now supported more than eighty student startups. Rather than treating entrepreneurship as a post-graduation pursuit, the programme builds company-creation directly into the student experience.

The story is an encouraging one for India's startup pipeline. When students can validate ideas, build early traction, and attract real capital before they even graduate, the result is a deeper, faster-moving talent pool feeding the wider innovation ecosystem.`,
  },
];

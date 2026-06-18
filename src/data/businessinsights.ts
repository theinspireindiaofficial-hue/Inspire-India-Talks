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
    image: "/images/buisness-insights/biodimension.png",
    excerpt:
      "Anthropic shut down its Fable 5 and Mythos 5 models worldwide after a US export directive cited a jailbreak-related security concern, a move it's complying with but disputing.",
    readTime: "4 min read",
    featured: true,
    content: `Anthropic has cut off its newest models, Mythos 5 and Fable 5, to non US individuals after the US government issued an order limiting them under export-control regulations. American officials had concerns that the systems were vulnerable to being "jailbroken" into revealing software vulnerabilities. While Anthropic is complying, it says it plans to challenge the order, citing what it believes is insufficient evidence and renewing discussion about AI regulation. The AI provider has announced two new "Mythos-class" models, its most capable yet and significantly more advanced than the previous "Opus" model class. In addition to the ability to autonomously reason, Mythos-class models are capable of complex tasks over multiple days without human input. Fable 5 was the enterprise and knowledge work oriented public model for Mythos 5, and restricted Mythos 5 was released to vetted partners to perform tasks like vulnerability discovery, drug design and biodefense. The government announced an order to restrict both models on June 12 to non US persons on an immediate basis, and Anthropic cited that both had previously passed government review. In particular, a jailbreak was able to mimic a Mythos 5 model in Fable 5 to turn it into an automated vulnerability finding tool. A Wall Street Journal article also reports on the same or similar vulnerabilities found in Amazon's AI and shared with the Commerce Department.`
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
    featured: true,
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
    id: "bigbasket-hari-menon",
    title: "Bigbasket Co-Founder Hari Menon Steps Down as CEO, Amazon Veteran Amit Nanda Takes Over",
    date: "18-06-2026",
    category: "Funding",
    image: "/images/buisness-insights/deeptech.png",
    excerpt:
      "Business — Corporate Leadership / Retail & E-commerce",
    readTime: "3 min read",
    content: `Bigbasket co-founder Hari Menon has stepped down as CEO of the Tata Group-backed grocery and quick-commerce company, handing the reins to former Amazon India executive Amit Nanda. The move marks the end of an era for one of India's earliest online grocery pioneers, coming as the sector races to shorten delivery times.
Menon will step back from daily operations but stay on the board alongside fellow co-founder Vipul Parekh, mentoring the leadership team. Nanda, who spent 11 years at Amazon India—most recently leading Selling Partner Services—brings deep experience in ecommerce, technology, and consumer businesses. He earlier worked at Hindustan Unilever and Citibank.
"I am incredibly excited to join Bigbasket and build upon the phenomenal trust it has established with millions of consumers," Nanda said, noting that pairing Bigbasket's customer-first values with the Tata legacy creates a strong foundation.
Founded in 2011, Bigbasket helped popularise online grocery shopping in India and became central to Tata Digital after the group's 2021 majority acquisition. It now serves over 25 million customers across 60-plus cities through more than 900 dark stores.
Menon praised Nanda's track record, while Tata Digital CEO Sajith Sivanandan said his experience suits the company's expansion goals.
`,
  },

  {
    id: "green-hydrogen-push",
    title: "Reliance Commits ₹75,000 Cr to Green Hydrogen Push",
    date: "13-06-2026",
    category: "Energy",
    image: "/images/buisness-insights/hydrogen.png",
    excerpt:
      "The investment is part of a broader plan to make clean energy cost-competitive within the decade.",
    readTime: "5 min read",
    content: `The firm has also announced plans of making investments worth ₹75,000 crores in its oil-to-chemicals (O2C) division, besides boosting its green energy efforts. It is expected that such an investment will be used to increase the efficiency of their refining and petrochemical production operations, thus improving the firm's international competitiveness.

On the other hand, Reliance's ambition is to have a manufacturing capacity for solar modules worth 20 GW within the next five years from its Giga complex in Jamnagar, Gujarat. The proposed facility would target solar modules, battery storage, fuel cells, and green hydrogen manufacturing operations as part of the country's efforts to boost renewable energy production.

According to Chairman Mukesh Ambani, it was imperative to address present-day needs while at the same time looking at future needs. As much as O2C continues being the largest source of revenues for the company, Reliance is heavily investing in renewable energy products.

Industry experts regard such efforts as steps towards diversifying Reliance's energy sources.`,
  },
];

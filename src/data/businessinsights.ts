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
    id: "biodimension-8-crore",
    title: "Biodimension Raises ₹8 Crore to Transform Life Sciences",
    date: "15-06-2026",
    category: "Life Sciences",
    image: "/images/buisness-insights/biodimension.png",
    excerpt:
      "The Pune-based biotech startup will use the fresh capital to scale its 3D bioprinting platform and accelerate tissue-engineering research.",
    readTime: "4 min read",
    featured: true,
    content: `Biodimension, a Pune-based biotechnology startup, has raised ₹8 crore in a fresh funding round aimed at scaling its 3D bioprinting platform.

The company plans to expand its research team and accelerate work on tissue-engineering models that could reduce India's dependence on imported lab equipment.

Founders say the funding marks a turning point for deeptech in Indian life sciences, an area that has historically struggled to attract early-stage capital.`,
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
    content: `A Bengaluru-based deeptech startup has closed a $40 million Series B round led by a consortium of domestic and international investors.

The company intends to use the capital to expand into new markets and open a dedicated AI research lab.`,
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
    content: `Reliance has announced a ₹75,000 crore investment into green hydrogen production over the coming years.

The move is part of a wider strategy to bring the cost of clean energy down to competitive levels and support India's net-zero ambitions.`,
  },
];

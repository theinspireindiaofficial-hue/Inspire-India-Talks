export interface EventSpeaker {
    id: string;
    name: string;
    role: string;
    image: string;
    socialLink?: string;
}

export interface Event {
    id: string;
    slug: string;
    title: string;
    tagline: string;
    date: string;
    location: string;
    coverImage: string;
    heroVideo?: string;
    shortDescription: string;
    fullDescription: string[];
    speakers: EventSpeaker[];
    gallery: string[];
    highlights: string[];
}

export const events: Event[] = [
    {
        id: "e1",
        slug: "from-idea-to-impact-iiit-delhi",
        title: "From Idea to Impact",
        tagline: "The Entrepreneurial Journey of Building Customer-Centric Startups and Inspiring talks by trailblazing founders and leaders.",
        date: "March 14, 2026",
        location: "IIIT Delhi",
        coverImage: "/images/events/IIIT-Delhi.jpg",
        heroVideo: "/images/events/InspireIndiaTalks - Website - Vid.mp4",
        shortDescription: "An exclusive event celebrating entrepreneurship, leadership and startup's at IIIT Delhi.",
        fullDescription: [
            "The theme “From Idea to Impact” will highlight the challenges, learnings, and strategic decisions involved in building meaningful ventures. Attendees will gain insights into product-market fit, early-stage struggles, leadership mindset, and how bold ideas evolve into impactful startups."
        ],
        speakers: [
            {
                id: "s1",
                name: "Chandan Singh",
                role: "Founder & CEO, Kinzy & Ex-Cofounder of Adda247",
                image: "/images/events/Chandan-Sir.jpeg",
                socialLink: "https://www.linkedin.com/in/chandan-singh-cse08/"
            },
            {
                id: "s2",
                name: "Samshad Alam",
                role: "Founder & CEO, Edunachal & Inspire India Talks",
                image: "/images/events/Shamshad-Alam.jpeg",
                socialLink: "https://www.linkedin.com/in/shamshad-alam-791b9067/"
            },
            {
                id: "s3",
                name: "Anjali Malhotra",
                role: "Founder — C-Xcel, Venture Partner & Independent Director",
                image: "/images/events/Anjali-malhotra.jpeg",
                socialLink: "https://www.linkedin.com/in/anjali-malhotra-17505525/"
            },
            {
                id: "s4",
                name: "Tanmay Arora",
                role: "Partner & Vice President — KRESERA™ & Managing Director — The XCLUSIVE™ Crew",
                image: "/images/events/Tanmay-arora.jpeg",
                socialLink: "https://www.linkedin.com/in/tanmayaroraaa/"
            },
            {
                id: "s5",
                name: "Dipali Kulshrestha",
                role: "AWS Hero, Principal Engineer & Building Resilient Financial Systems",
                image: "/images/events/Dipali-Kulshrestha.jpeg",
                socialLink: "https://www.linkedin.com/in/dipalik/"
            },
            {
                id: "s6",
                name: "Amit Kumar",
                role: "Senior Solutions Architect @ Amazon Web Services & Hybrid Cloud Specialist",
                image: "/images/events/Amit-kumar.jpeg",
                socialLink: "https://www.linkedin.com/in/amitkyvmw/"
            }
        ],
        gallery: [
            "/images/events/IIIT-Delhi.jpg",
            "/images/events/eventphotos.png",
            "/images/events/eventphotos-1.png",
            "/images/events/eventphotos-2.png"
        ],
        highlights: [
            "Over 500+ attendees from various colleges",
            "Interactive Q&A sessions with the founders",
            "Networking opportunities with industry leaders"
        ]
    },
    {
        id: "e2",
        slug: "beyond-degrees-ggsipu-delhi",
        title: "Beyond Degrees",
        tagline: "Building Careers, Startups & Impact",
        date: "23rd April 2026",
        location: "GGSIPU Delhi",
        coverImage: "/images/events/ggsipu-univ.jpg",
        heroVideo: "/images/events/InspireIndiaTalks GGS iPU - Website - Vid.mp4",
        shortDescription: "Not just degrees—explore careers, startups, and how to build real impact in today’s world at GGSIPU Delhi.",
        fullDescription: [
            "Inspire India Talks – Edition 02 is designed to challenge the traditional idea of success being limited to degrees. With the theme “Beyond Degrees: Building Careers, Startups & Impact,” the event brings together leaders from civil services, entrepreneurship, and the digital ecosystem to share real-world insights with students.", "From building startups and navigating careers to creating meaningful impact in society, this event aims to inspire students to think beyond academics and take action toward building their own paths.Attendees will gain exposure to diverse perspectives, practical experiences, and powerful stories that bridge the gap between classroom learning and real-world execution."
        ],
        speakers: [
            {
                id: "s1",
                name: "Ira Singhal",
                role: "Chief Guest | Civil Servant (IAS) | Motivational Speaker",
                image: "/images/events/Ira_singhal.jpeg",
                socialLink: "https://www.linkedin.com/in/ira-singhal-7248aa37/"
            },
            {
                id: "s2",
                name: "Khushi Grewal",
                role: "AI/ML Influencer | Content Creator (90K+ Followers) | Entrepreneurship",
                image: "/images/events/Khushi-Spekaer.png",
                socialLink: "https://www.linkedin.com/in/khushi-grewall-ai/"
            },
            {
                id: "s3",
                name: "Shamshad Alam",
                role: "Founder & CEO – Edunachal | Founder – Inspire India Talks",
                image: "/images/events/Shamshad-Alam.jpeg",
                socialLink: "https://www.linkedin.com/in/shamshad-alam-791b9067/"
            },
            {
                id: "s4",
                name: "Vivekanand Vivek",
                role: "Co-founder at Programming Pathshala & Zenith School Of AI | IIT BHU",
                image: "/images/events/Vivekanadn-Vivek.jpg",
                socialLink: "https://www.linkedin.com/in/vivekanand-vivek-7a4ab388/"
            },
            {
                id: "s5",
                name: "Arush Lakhani",
                role: "Co-founder at SpurIQ.ai | Designing Revenue Orchestration Systems that Eliminate Revenue Leakage",
                image: "/images/events/Arush-founder.jpg",
                socialLink: "https://www.linkedin.com/in/arush-lakhani/"
            },
            {
                id: "s6",
                name: "Sonam Gupta",
                role: "Founder and the System Designer @ The Design Ethos | Kingston University",
                image: "/images/events/Sonam-founder.jpg",
                socialLink: "https://www.linkedin.com/in/sonam2308/"
            },
            {
                id: "s7",
                name: "Akriti Singh",
                role: "International Athlete | Lawyer & Researcher",
                image: "/images/events/Akriti-singh.jpg",
                socialLink: "https://www.linkedin.com/in/akriti-singh-927b781a9/"
            },
        ],
        gallery: [
            "/images/events/img1.JPG",
            "/images/events/img2.JPG",
            "/images/events/img3.JPG",
            "/images/events/img4.JPG",
            "/images/events/img7.JPG",
            "/images/events/img5.JPG",
            "/images/events/img6.JPG",
            "/images/events/img8.JPG",
        ],
        highlights: [
            "Over 500+ attendees from various colleges",
            "Interactive Q&A sessions with the founders",
            "Networking opportunities with industry leaders"
        ]
    },
    {
        id: "e3",
        slug: "the-next-big-thing-bangalore",
        title: "The Next Big Thing",
        tagline: "Building the future with Tech & Innovation.",
        date: "To Be Announced Soon",
        location: "Polaris School of Technology, Bangalore",
        coverImage: "/images/events/polaris-campus.avif",
        shortDescription: "Join us in Bangalore to explore the next big thing in tech and innovation. Where ideas meet impact and future leaders get inspired.",
        fullDescription: [
            "Inspire India Talks – Edition 03 is coming to Bangalore! With the theme “The Next Big Thing: Building the future with Tech & Innovation,” this event promises to be an extraordinary gathering where ideas meet impact, and future leaders get inspired.",
            "Featuring 5 game-changing speakers (lineup revealing soon!), this event is open to all students, faculty, and the public. Don't miss out on this opportunity to be a part of something extraordinary in collaboration with Polaris School of Technology."
        ],
        speakers: [
            {
                id: "s1",
                name: "To Be Announced Soon",
                role: "",
                image: "",
                socialLink: ""
            },
            {
                id: "s2",
                name: "To Be Announced Soon",
                role: "",
                image: "",
                socialLink: ""
            },
            {
                id: "s3",
                name: "To Be Announced Soon",
                role: "",
                image: "",
                socialLink: ""
            },
            {
                id: "s4",
                name: "To Be Announced Soon",
                role: "",
                image: "",
                socialLink: ""
            },
            {
                id: "s5",
                name: "To Be Announced Soon",
                role: "",
                image: "",
                socialLink: ""
            },
            {
                id: "s6",
                name: "To Be Announced Soon",
                role: "",
                image: "",
                socialLink: ""
            },
        ],
        gallery: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        ],
        highlights: [
            "5 Game-Changing Speakers (Lineup revealing soon)",
            "Explore Tech & Innovation",
            "Open to all students, faculty, and public"
        ]
    },
    {
    id: "e4",
    slug: "builders-of-tomorrow-varanasi",
    title: "Builders of Tomorrow",
    tagline: "Creating the Next Wave of Innovation",
    date: "To Be Announced Soon",
    location: "Indian Institute of Technology (BHU), Varanasi",
    coverImage: "/images/events/IIT-BHU.jpg",
    shortDescription: "Join us at IIT (BHU), Varanasi for an inspiring gathering of founders, innovators, and visionaries building the products, technologies, and companies of tomorrow.",
    fullDescription: [
        "Inspire India Talks – Edition 04 is coming to IIT (BHU), Varanasi. This edition will bring together some of the most inspiring founders, innovators, and technology leaders who are actively building the future.",
        "Centered around the theme 'Builders of Tomorrow: Creating the Next Wave of Innovation,' the event will explore entrepreneurship, emerging technologies, artificial intelligence, and the mindset required to turn bold ideas into meaningful impact.",
        "Featuring 5–6 exceptional speakers (lineup to be revealed soon), this event is open to students, researchers, faculty, and aspiring entrepreneurs who want to learn directly from those shaping what comes next."
    ],
    speakers: [
        {
            id: "s1",
            name: "To Be Announced Soon",
            role: "",
            image: "",
            socialLink: ""
        },
        {
            id: "s2",
            name: "To Be Announced Soon",
            role: "",
            image: "",
            socialLink: ""
        },
        {
            id: "s3",
            name: "To Be Announced Soon",
            role: "",
            image: "",
            socialLink: ""
        },
        {
            id: "s4",
            name: "To Be Announced Soon",
            role: "",
            image: "",
            socialLink: ""
        },
        {
            id: "s5",
            name: "To Be Announced Soon",
            role: "",
            image: "",
            socialLink: ""
        },
        {
            id: "s6",
            name: "To Be Announced Soon",
            role: "",
            image: "",
            socialLink: ""
        }
    ],
    gallery: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ],
    highlights: [
        "5–6 Visionary Speakers (Lineup Revealing Soon)",
        "AI, Innovation, Inspiring Journey & Entrepreneurship",
        "Open to Students, Faculty & Entrepreneurs",
        "Learn from Founders and Industry Leaders",
        "Build Connections with Future Innovators"
    ]
}
];

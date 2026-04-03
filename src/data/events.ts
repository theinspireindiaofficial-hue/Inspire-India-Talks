export interface EventSpeaker {
    id: string;
    name: string;
    role: string;
    image: string;
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
                image: "/images/events/Chandan-Sir.jpeg"
            },
            {
                id: "s2",
                name: "Samshad Alam",
                role: "Founder & CEO, Edunachal & Inspire India Talks",
                image: "/images/events/Shamshad-Alam.jpeg"
            },
            {
                id: "s3",
                name: "Anjali Malhotra",
                role: "Founder — C-Xcel, Venture Partner & Independent Director",
                image: "/images/events/Anjali-malhotra.jpeg"
            },
            {
                id: "s4",
                name: "Tanmay Arora",
                role: "Partner & Vice President — KRESERA™ & Managing Director — The XCLUSIVE™ Crew",
                image: "/images/events/Tanmay-arora.jpeg"
            },
            {
                id: "s5",
                name: "Dipali Kulshrestha",
                role: "AWS Hero, Principal Engineer & Building Resilient Financial Systems",
                image: "/images/events/Dipali-Kulshrestha.jpeg"
            },
            {
                id: "s6",
                name: "Amit Kumar",
                role: "Senior Solutions Architect @ Amazon Web Services & Hybrid Cloud Specialist",
                image: "/images/events/Amit-kumar.jpeg"
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
        date: "April 9th / 10th, 2026",
        location: "GGSIPU Delhi",
        coverImage: "/public/images/events/ggsipu.jpg",
        shortDescription: "Not just degrees—explore careers, startups, and how to build real impact in today’s world at GGSIPU Delhi.",
        fullDescription: [
            "Inspire India Talks – Edition 02 is designed to challenge the traditional idea of success being limited to degrees. With the theme “Beyond Degrees: Building Careers, Startups & Impact,” the event brings together leaders from civil services, entrepreneurship, and the digital ecosystem to share real-world insights with students. From building startups and navigating careers to creating meaningful impact in society, this event aims to inspire students to think beyond academics and take action toward building their own paths.Attendees will gain exposure to diverse perspectives, practical experiences, and powerful stories that bridge the gap between classroom learning and real-world execution."
        ],
        speakers: [
            {
                id: "s1",
                name: "Vijender Singh Chauhan",
                role: "Chief Guest | Civil Servant (IAS/IPS) | Motivational Speaker",
                image: "/images/events/Vijendra-singh-chauhan.jpeg"
            },
            {
                id: "s2",
                name: "Khushi Grewal",
                role: "AI/ML Influencer | Content Creator (82K+ Followers) | Entrepreneurship",
                image: "/images/events/Khushi-grewal.jpg"
            },
            {
                id: "s3",
                name: "Shamshad Alam",
                role: "Founder & CEO – Edunachal | Founder – Inspire India Talks",
                image: "/images/events/Shamshad-Alam.jpeg"
            },
            {
                id: "s4",
                name: "Satyaprakash Singh",
                role: "Indian Forest Service (IFS) Officer",
                image: "/images/events/satya-prakash-singh.jpeg"
            },
        ],
        gallery: [
            "/images/events/women-who-hustle-iiit-delhi/gallery1.jpg",
            "/images/events/women-who-hustle-iiit-delhi/gallery2.jpg",
            "/images/events/women-who-hustle-iiit-delhi/gallery3.jpg",
            "/images/events/women-who-hustle-iiit-delhi/gallery4.jpg"
        ],
        highlights: [
            "Over 500+ attendees from various colleges",
            "Interactive Q&A sessions with the founders",
            "Networking opportunities with industry leaders"
        ]
    }
];

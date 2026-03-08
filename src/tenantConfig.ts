// src/tenantConfig.ts
// Auto-generated tenant configuration for Apex Pest Control
// Generated on: 2026-03-08

export const tenant = {

    // ─── BRAND IDENTITY ───
    companyName: "Apex Pest Control",          // REQUIRED — e.g. "PestoWorld"
    tagline: "Reliable & Honest",              // REQUIRED — e.g. "Pest Control"
    logoUrl: "/apexpestcontrol_logo.svg",  // null = use Bug icon fallback
    heroImage: "/pest_control_new_banner.png",            // REQUIRED — Unsplash URL or local path

    // ─── COLOR PALETTE ───
    colors: {
        brandDark: "#1a1a1b",     // REQUIRED — Primary dark (navbar bg, headings)
        brandLight: "#ffffff",    // REQUIRED — Light background sections
        brandAccent: "#00a0e3",   // REQUIRED — CTA buttons, highlights
        brandOrange: "#ffad00",   // REQUIRED — Secondary accent
    },

    // ─── CONTACT INFO ───
    phone: "92669 68600",                // REQUIRED — Primary display number e.g. "1800-313-707"
    phoneFull: "+919266968600",            // REQUIRED — tel: link format e.g. "+911800313707"
    whatsapp: "+91 92669 68600",             // WhatsApp number e.g. "+919560450376"
    whatsappLink: "https://wa.me/919266968600",         // Full link e.g. "https://wa.me/919560450376"
    email: "apexpestcontrolservicesdelhi@gmail.com",                // e.g. "info@pestoworld.com"

    // ─── GEOGRAPHY ───
    regionName: "Delhi",           // REQUIRED — e.g. "Delhi NCR", "Mumbai Metro"
    regionCities: "Delhi · Azadpur · Surrounding Areas",         // REQUIRED — e.g. "Delhi · Noida · Ghaziabad"
    serviceAreas: [
        {
            city: "Delhi",
            areas: ["Azadpur", "North Delhi", "South Delhi", "West Delhi", "East Delhi", "NCR"],
            count: "500+"
        }
    ],

    // ─── SOCIAL PROOF & STATS ───
    stats: {
        homesProtected: "5,000+",     // e.g. "10,000+"
        successRate: "99%",        // e.g. "99%"
        googleReviews: "240+",      // e.g. "1,200+"
        responseTime: "45 Mins",       // e.g. "24 Hrs"
        avgRating: "4.9",          // e.g. "4.9"
    },

    // ─── HERO SECTION COPY ───
    heroHeadline: "RELIABLE & HONEST",         // REQUIRED — e.g. "Delhi NCR's Most Trusted"
    heroHeadlineAccent: "PEST CONTROL.",   // REQUIRED — e.g. "Pest Control Service."
    heroSubheadline: "Experience unparalleled pest management services across Delhi. Expert technicians, green methods, and starting at just ₹499.",      // REQUIRED
    heroCta1: "Book Online",             // e.g. "Book FREE Inspection Today"
    heroCta2: "Call 92669 68600",             // e.g. "📞 1800-313-707 (Toll Free)"

    // ─── CERTIFICATIONS ───
    certifications: [
        {
            label: "Exp",          // e.g. "ISO"
            value: "2015",          // e.g. "9001:2015"
            subtitle: "Established",       // e.g. "International quality management"
            color: "green",          // Tailwind color class e.g. "green"
            fullTitle: "Trusted Since 2015",      // e.g. "ISO 9001:2015 Certified"
            description: "Providing reliable pest control services to Delhi for over 9 years."
        },
        {
            label: "Rating",
            value: "4.9",
            subtitle: "Google Rating",
            color: "blue",
            fullTitle: "Highly Rated",
            description: "Over 240 glowing reviews from satisfied customers."
        }
    ],

    // ─── SERVICES / ESTABLISHMENT TYPES ───
    services: [
        {
            iconName: "Bug",       // Lucide icon name e.g. "Home", "Building2"
            title: "Cockroach Control",
            description: "Starts from ₹499. Comprehensive 30-min treatment covering all hiding spots."
        },
        {
            iconName: "ShieldAlert",
            title: "Termite Treatment",
            description: "Starts from ₹2,000. 1 hr 30 min intensive treatment to protect your property's foundation."
        },
        {
            iconName: "Bed",
            title: "Bedbugs Treatment",
            description: "Starts from ₹1,200. Deep cleaning & eradication ensuring peaceful sleep."
        },
        {
            iconName: "Mouse",
            title: "Rodent Control",
            description: "Starts from ₹499. Effective baiting & trapping to eliminate rat infestations."
        },
        {
            iconName: "BugOff",
            title: "Ant Control",
            description: "Starts from ₹499. Precision gel and spray applications for complete ant removal."
        }
    ],

    // ─── FEATURES / WHY-US ───
    features: [
        {
            iconName: "ShieldCheck",
            title: "Reliable & Honest",
            description: "We believe in transparent pricing and guaranteeing our work. No hidden fees or surprises.",
            linkText: "Read more"
        },
        {
            iconName: "Clock",
            title: "Fast Response",
            description: "Pest problems need immediate attention. We offer rapid dispatch to your location across Delhi.",
            linkText: "Book now"
        },
        {
            iconName: "Leaf",
            title: "Safe Treatments",
            description: "Using approved, safe chemicals that are tough on pests but safe for your family and pets.",
            linkText: "Learn more"
        }
    ],

    // ─── HOW IT WORKS STEPS ───
    steps: [
        {
            num: "01",            // e.g. "01"
            iconName: "PhoneCall",
            title: "Contact Us",
            description: "Call or book online. Describe your pest issue to our experts."
        },
        {
            num: "02",
            iconName: "Search",
            title: "Inspection",
            description: "Our technicians arrive and conduct a thorough assessment of your property."
        },
        {
            num: "03",
            iconName: "ShieldAlert",
            title: "Treatment",
            description: "We deploy targeted, safe pest control methods to eliminate the infestation."
        }
    ],

    // ─── TESTIMONIALS ───
    reviews: [
        {
            name: "Rahul M.",
            text: "Excellent service! They arrived on time and completely solved our termite problem. Highly recommended.",
            initial: "R",        // First letter of name for avatar
            location: "Delhi"
        },
        {
            name: "Sneha G.",
            text: "Very professional and honest. Didn't push unnecessary treatments. The cockroach gel worked perfectly.",
            initial: "S",
            location: "Azadpur"
        },
        {
            name: "Vikram S.",
            text: "Pricing is completely transparent. The 499 package for ants was extremely effective.",
            initial: "V",
            location: "North Delhi"
        }
    ],

    // ─── BUSINESS HOURS ───
    hours: {
        weekday: "Monday–Saturday",        // e.g. "Monday–Saturday"
        weekdayTime: "9:00 AM – 8:00 PM",    // e.g. "9 AM – 7 PM IST"
        weekend: "Sunday",        // e.g. "Sunday"
        weekendTime: "9:00 AM – 5:00 PM"    // e.g. "10 AM – 4 PM IST"
    },

    // ─── FOOTER ───
    footerLinks: [
        ["Home", "#"],
        ["Book Online", "#book"],
        ["Plans & Pricing", "#plans"],
        ["Contact", "#contact"]
    ],
    footerServices: [
        ["Cockroach Control", "#"],
        ["Termite Treatment", "#"],
        ["Bedbugs", "#"],
        ["Rodents", "#"]
    ],
    copyrightText: "© 2026 by Apex Pest Control. Proudly created with Anti-Gravity Template.",
    copyrightSubtext: "All Rights Reserved. Professional Pest Management Services.",

    // ─── SEO ───
    seo: {
        title: "Apex Pest Control | Reliable & Honest Pest Services in Delhi",              // REQUIRED — <title> tag
        description: "Expert pest control services in Delhi starting at ₹499. Specializing in termites, cockroaches, rodents, and bedbugs. Book online today!",        // REQUIRED — <meta description>
    },
};

export type TenantConfig = typeof tenant;

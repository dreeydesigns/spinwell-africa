// Spinwell Africa — Data Layer
// All product data, blog posts, FAQs, and site constants

export const WHATSAPP_NUMBER = "254119290903";
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

export function whatsappLink(message: string) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/spinwell.africa/",
  tiktok: "https://www.tiktok.com/@spinwell.africa",
  whatsapp: whatsappLink("Hi Spinwell! I'd love to learn more about your bikes."),
};

// Asset URLs
export const ASSETS = {
  smoothieSplash: "/manus-storage/smoothie_19bc91af.webp",
  whiteBike: "/manus-storage/white_bike_847d1bae.webp",
  bikeLineup: "/manus-storage/lineup_ef9b066a.webp",
  girlRiding: "/manus-storage/girl_riding_29c700ac.webp",
  heroBg: "/manus-storage/spinwell-hero-bg_ddc71885.png",
  bikesShowcase: "/manus-storage/spinwell-bikes-showcase_db22c45c.png",
  eventAction: "/manus-storage/spinwell-event-action_6669059f.png",
  aboutHero: "/manus-storage/spinwell-about-hero_28d27f13.png",
  logoIcon: "/manus-storage/spinwell-logo-icon_50cf169c.png",
  orangeBikeEvent: "/manus-storage/DSC_3195_cdc3d9c9.webp",
  blueBikeBanner: "/manus-storage/DSC_1899_04ea48b7.webp",
  familyAction: "/manus-storage/fxphotography-214_435e5e9a.webp",
  logoColour: "/manus-storage/logo-extract-2_88a64ffa.png",
  logoHorizontal: "/manus-storage/logo-extract-5_d56d6304.png",
  logoWhite: "/manus-storage/logo-extract-4_7454853b.png",
};

export interface Bike {
  id: string;
  name: string;
  tagline: string;
  description: string;
  audience: "adult" | "kids";
  category: "smoothie" | "bubble" | "spin-art";
  dimensions: string;
  weight: string;
  maxLoad: string;
  includes: string[];
  colors: string[];
  image: string;
  accentColor: string;
}

export const BIKES: Bike[] = [
  {
    id: "adult-smoothie",
    name: "Adult Smoothie Bike",
    tagline: "Pedal. Blend. Sip. Repeat.",
    description: "Our flagship pedal-powered blender bike. Hop on, pedal hard, and watch your fresh fruit transform into a delicious smoothie — no electricity needed. Perfect for corporate events, festivals, weddings, and wellness days.",
    audience: "adult",
    category: "smoothie",
    dimensions: "165 × 70 × 100 cm",
    weight: "35 kg",
    maxLoad: "150 kg",
    includes: ["1 bike", "Plastic jar set (1200ml + 1800ml)", "Wicker basket", "Horn", "2 fruit wheel covers"],
    colors: ["White", "Pink", "Green", "Orange", "Royal Blue"],
    image: ASSETS.whiteBike,
    accentColor: "#EC2F5D",
  },
  {
    id: "kids-smoothie",
    name: "Kids Smoothie Bike",
    tagline: "Little legs, big flavour.",
    description: "A pint-sized version of our smoothie bike, built for young riders. Kids absolutely love pedalling their own smoothie into existence. The ultimate crowd-pleaser at family events and school wellness days.",
    audience: "kids",
    category: "smoothie",
    dimensions: "135 × 70 × 95 cm",
    weight: "28 kg",
    maxLoad: "90 kg",
    includes: ["1 bike", "Plastic jar set (1200ml + 1800ml)", "Wicker basket", "Horn", "2 fruit wheel covers"],
    colors: ["White", "Pink"],
    image: ASSETS.bikeLineup,
    accentColor: "#F5871F",
  },
  {
    id: "adult-bubble",
    name: "Adult Bubble Bike",
    tagline: "Pedal your way through a bubble storm.",
    description: "Combine the joy of cycling with a cascade of bubbles. Our pedal-powered bubble bike creates a magical atmosphere at any event. The electric bubble machine runs on a 24V power inverter — all powered by your legs.",
    audience: "adult",
    category: "bubble",
    dimensions: "165 × 70 × 100 cm",
    weight: "38 kg",
    maxLoad: "150 kg",
    includes: ["1 bike", "Bubble machine", "Electric box (24V/400W)", "Wicker basket", "Phone holder", "Wheel cover set"],
    colors: ["White", "Pink", "Green", "Orange", "Royal Blue"],
    image: ASSETS.orangeBikeEvent,
    accentColor: "#2FA8E0",
  },
  {
    id: "kids-bubble",
    name: "Kids Bubble Bike",
    tagline: "Tiny pedals, massive bubbles.",
    description: "All the bubble magic in a kid-friendly package. Children pedal to power the bubble machine, creating an enchanting cloud of bubbles. A guaranteed showstopper at birthday parties and family fun days.",
    audience: "kids",
    category: "bubble",
    dimensions: "135 × 70 × 95 cm",
    weight: "30 kg",
    maxLoad: "90 kg",
    includes: ["1 bike", "Bubble machine", "Electric box (24V/400W)", "Wicker basket", "Phone holder", "Wheel cover set"],
    colors: ["White", "Pink"],
    image: ASSETS.blueBikeBanner,
    accentColor: "#3FA34D",
  },
  {
    id: "adult-spin-art",
    name: "Adult Spin Art Bike",
    tagline: "Pedal. Spin. Create.",
    description: "Art meets fitness in this unique pedal-powered spin art station. Riders pedal to spin a canvas while dripping paint creates one-of-a-kind abstract masterpieces. Every ride produces a unique piece of art to take home.",
    audience: "adult",
    category: "spin-art",
    dimensions: "165 × 70 × 100 cm",
    weight: "38 kg",
    maxLoad: "150 kg",
    includes: ["1 bike", "Spin art machine", "Wicker basket", "Phone holder", "Wheel cover set"],
    colors: ["White", "Pink", "Green", "Orange", "Royal Blue"],
    image: ASSETS.familyAction,
    accentColor: "#FFC93C",
  },
  {
    id: "kids-spin-art",
    name: "Kids Spin Art Bike",
    tagline: "Where tiny artists go big.",
    description: "The kids version of our spin art bike lets young creators pedal their way to artistic glory. Perfect for school events, birthday parties, and creative workshops. Every child leaves with their own masterpiece.",
    audience: "kids",
    category: "spin-art",
    dimensions: "135 × 70 × 95 cm",
    weight: "30 kg",
    maxLoad: "90 kg",
    includes: ["1 bike", "Spin art machine", "Wicker basket", "Phone holder", "Wheel cover set"],
    colors: ["White", "Pink"],
    image: ASSETS.eventAction,
    accentColor: "#EC2F5D",
  },
];

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

export const BLOG_CATEGORIES = ["All", "Events", "Wellness", "Sustainability", "Tips & Ideas"];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "why-smoothie-bikes-are-the-ultimate-event-attraction",
    title: "Why Smoothie Bikes Are the Ultimate Event Attraction",
    excerpt: "From corporate team-building to music festivals, smoothie bikes turn passive attendees into active participants. Here's why event planners across Africa are making the switch.",
    category: "Events",
    date: "2026-06-15",
    readTime: "4 min read",
    image: ASSETS.heroBg,
    content: `Smoothie bikes have rapidly become one of the most sought-after attractions at events across Africa. Unlike traditional catering stations where guests passively receive their drinks, smoothie bikes transform every attendee into an active participant.\n\nThe concept is beautifully simple: hop on, pedal, and blend your own fresh fruit smoothie using nothing but leg power. No electricity, no generators, no complicated setup — just pure human energy converted into delicious, healthy drinks.\n\n## Why Event Planners Love Them\n\nFirst, they create natural gathering points. People are drawn to the bikes out of curiosity, and once one person starts pedalling, a queue forms organically. This creates the kind of spontaneous social interaction that event planners dream about.\n\nSecond, they photograph incredibly well. In an age where events need to be Instagram-worthy, a colourful smoothie bike with a watermelon wheel cover is an instant content magnet. Your event gets free social media exposure every time someone posts their pedalling moment.\n\nThird, they align with the growing demand for wellness-focused experiences. Companies hosting corporate wellness days, health expos, and team-building events find that smoothie bikes perfectly bridge the gap between fun and healthy living.\n\n## The Spinwell Difference\n\nAt Spinwell Africa, we don't just deliver bikes — we deliver experiences. Our team handles setup, provides fresh fruit, and ensures every guest has a smooth (pun intended) experience. Whether you need one bike for an intimate gathering or ten for a major festival, we've got you covered.`,
  },
  {
    id: "2",
    slug: "zero-electricity-zero-waste-full-flavour",
    title: "Zero Electricity, Zero Waste, Full Flavour",
    excerpt: "How pedal-powered blending is helping African events reduce their carbon footprint while delivering an unforgettable experience.",
    category: "Sustainability",
    date: "2026-05-28",
    readTime: "3 min read",
    image: ASSETS.aboutHero,
    content: `In a continent where power supply can be unreliable and generators are both noisy and polluting, pedal-powered smoothie bikes offer a refreshingly clean alternative.\n\nEvery smoothie blended on a Spinwell bike uses exactly zero watts of grid electricity. The only energy source is human pedal power — making it one of the most sustainable catering solutions available for events.\n\n## The Environmental Impact\n\nA typical event generator produces approximately 1.5 kg of CO2 per hour of operation. Over a full-day event, that's nearly 12 kg of carbon emissions just to power a blender station. Our smoothie bikes? Zero emissions. Zero noise pollution. Zero fuel costs.\n\nBut the sustainability story doesn't end with energy. Our bikes encourage the use of fresh, locally sourced fruits — reducing the packaging waste associated with pre-made drinks. Guests blend exactly what they want, minimising food waste.\n\n## A Message That Resonates\n\nFor brands looking to demonstrate their commitment to sustainability, sponsoring or featuring smoothie bikes at events sends a powerful message. It shows that eco-friendly choices don't mean sacrificing fun or quality — they enhance both.`,
  },
  {
    id: "3",
    slug: "5-creative-ways-to-use-smoothie-bikes-at-your-next-event",
    title: "5 Creative Ways to Use Smoothie Bikes at Your Next Event",
    excerpt: "Beyond basic blending — discover unexpected ways to incorporate pedal-powered bikes into weddings, product launches, and more.",
    category: "Tips & Ideas",
    date: "2026-05-10",
    readTime: "5 min read",
    image: ASSETS.eventAction,
    content: `Think smoothie bikes are just for health expos? Think again. Here are five creative ways event planners are using Spinwell bikes to create unforgettable moments.\n\n## 1. Wedding Cocktail Stations\n\nReplace the traditional cocktail bar with a row of smoothie bikes. Guests pedal their own fresh fruit cocktails (or mocktails) while the wedding photographer captures priceless candid moments. It's interactive, healthy, and incredibly photogenic.\n\n## 2. Product Launch Activations\n\nBrands are using custom-branded smoothie bikes as interactive product launch stations. The bike wheels can be customised with brand colours and logos, turning every pedal into a branded experience.\n\n## 3. School Wellness Programs\n\nOur kids' smoothie bikes are perfect for school health days. Children learn about nutrition while physically creating their own healthy drinks. It's education through experience — and they absolutely love it.\n\n## 4. Corporate Team Building\n\nSet up a smoothie bike relay race. Teams compete to blend the best smoothie in the fastest time. It combines fitness, creativity, and teamwork in a way that no trust fall exercise ever could.\n\n## 5. Festival VIP Lounges\n\nMusic festivals are adding smoothie bike stations to their VIP areas. After hours of dancing, guests can recharge with a fresh, pedal-powered smoothie. It's the perfect blend of wellness and entertainment.`,
  },
  {
    id: "4",
    slug: "the-science-of-pedal-powered-blending",
    title: "The Science of Pedal-Powered Blending",
    excerpt: "Ever wondered how pedalling a bike can blend a smoothie? Here's the fascinating engineering behind our bikes.",
    category: "Wellness",
    date: "2026-04-22",
    readTime: "4 min read",
    image: ASSETS.bikesShowcase,
    content: `The magic of a smoothie bike lies in a simple but elegant mechanical principle: converting rotational energy from pedalling into blending power.\n\n## How It Works\n\nWhen you pedal a Spinwell bike, the chain drives a flywheel connected to the blender mechanism. The gear ratio is carefully calibrated so that a comfortable pedalling speed of about 60-80 RPM translates to the 3,000+ RPM needed to effectively blend fruit.\n\nThis means you don't need to be a cycling champion to make a great smoothie. A moderate, steady pedalling pace for about 30-60 seconds is all it takes to transform whole fruits into a smooth, drinkable blend.\n\n## The Fitness Bonus\n\nHere's a fun fact: blending a single smoothie on our bike burns approximately 50-100 calories — roughly the same number of calories in the smoothie itself. So you're essentially earning your drink through exercise. It's the most honest transaction in the food industry.\n\n## Built to Last\n\nOur bikes use commercial-grade blender mechanisms paired with robust bicycle components. The stainless steel drive system is designed to handle thousands of blending cycles, and the fruit-themed wheel covers are made from durable, weather-resistant materials.`,
  },
];

export interface FAQ {
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    question: "How does a smoothie bike work?",
    answer: "It's beautifully simple — you pedal, and the bike's chain drives a blender attached to the handlebars. Fresh fruit goes in, you pedal for about 30-60 seconds, and out comes a delicious smoothie. No electricity needed, just leg power!",
  },
  {
    question: "Can I hire bikes for just one day?",
    answer: "Absolutely! We offer single-day hire for events of all sizes. Whether it's a birthday party, corporate event, or festival, we'll deliver, set up, and collect the bikes. Just tell us the date and location.",
  },
  {
    question: "What's included in the hire package?",
    answer: "Our standard hire includes the bike(s), blender jars, setup and collection, and a Spinwell team member to manage the station. Fresh fruit and cups can be arranged as an add-on, or you can supply your own.",
  },
  {
    question: "Do you deliver outside Nairobi?",
    answer: "Yes! We serve events across Kenya and are expanding across East Africa. Delivery fees vary by location. Drop us a WhatsApp message with your event details and we'll provide a custom quote.",
  },
  {
    question: "Can I buy a bike outright?",
    answer: "Yes, we sell bikes for businesses, schools, and individuals who want their own pedal-powered experience. Our adult smoothie bikes start from USD 1,200 per set, which includes the bike, blender jars, basket, horn, and two fruit wheel covers.",
  },
  {
    question: "What's the difference between hiring and leasing?",
    answer: "Hiring is for short-term use (1 day to 1 week) — perfect for events. Leasing is a longer-term arrangement (1 month+) ideal for businesses like juice bars, hotels, or wellness centres that want ongoing access without the upfront purchase cost.",
  },
  {
    question: "Are the bikes safe for children?",
    answer: "Yes! Our kids' bikes are specifically designed for younger riders with lower seats, lighter pedal resistance, and a maximum load of 90 kg. They're a huge hit at family events and school wellness days.",
  },
  {
    question: "How many smoothies can one bike make in a day?",
    answer: "With a steady flow of riders, one bike can produce 80-120 smoothies in a typical event day. For larger events, we recommend multiple bikes to keep queues short and energy high.",
  },
];

export const EVENT_TYPES = [
  { name: "Corporate Events", icon: "briefcase", description: "Team building, wellness days, product launches" },
  { name: "Weddings", icon: "heart", description: "Cocktail stations, guest entertainment, photo ops" },
  { name: "Festivals", icon: "music", description: "VIP lounges, main stage activations, food courts" },
  { name: "Schools", icon: "graduation-cap", description: "Health days, sports days, fundraisers" },
  { name: "Brand Activations", icon: "megaphone", description: "Custom branding, experiential marketing" },
  { name: "Private Parties", icon: "party-popper", description: "Birthdays, anniversaries, garden parties" },
];

export const STATS = [
  { value: "500+", label: "Events Powered" },
  { value: "50,000+", label: "Smoothies Blended" },
  { value: "0", label: "Watts of Electricity Used" },
  { value: "100%", label: "Smiles Guaranteed" },
];

export const HOW_IT_WORKS = [
  { step: 1, title: "Pick Your Fruit", description: "Choose from a rainbow of fresh, locally sourced fruits. Mango, strawberry, banana, passion fruit — the choice is yours.", icon: "🍓" },
  { step: 2, title: "Hop On & Pedal", description: "Take a seat on our colourful smoothie bike and start pedalling. The harder you pedal, the smoother your blend.", icon: "🚲" },
  { step: 3, title: "Blend & Enjoy", description: "In just 30-60 seconds of pedalling, your fresh fruit transforms into a delicious, ice-cold smoothie. Sip and smile.", icon: "🥤" },
];

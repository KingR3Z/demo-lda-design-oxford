export const client = {
  // Business Details
  name: "LDA Design Oxford",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Oxford.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "01865 887050",
  email: "",
  website: "",

  // Location
  address: "Oxford",
  city: "Oxford",
  county: "",
  postcode: "",
  basedIn: "Oxford",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "1",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Luke H", rating: 5, text: "Passed my test first time with Ibrar Ch! Great instructor and got me test ready. Told me exactly what to focus on and how to fix my mistakes. Massive thanks to him and definitely recommend using these guys if you want to learn to drive!", date: "a year ago" },
    { name: "Julius", rating: 5, text: "Ibrar Ch was an excellent instructor, passed first time because of him. Would recommend to anyone", date: "a year ago" },
    { name: "Olena Ilchenko", rating: 5, text: "Thank you DLA for helping me to prepare and pass my driving test the first time. I wanted to thank my very competent instructor Yaseer Kotob for all the tips and hints, as well as for boosting my confidence before the test. It was a pleasure from the first phone contact and every lesson, I would highly recommend this school and instructor.", date: "7 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "LDA Design Oxford | Landscaper in Oxford",
    description: "Professional landscaper in Oxford. 5.0-star rated on Google. Call for a free quote.",
  },
};

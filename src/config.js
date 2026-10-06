// ============================================================================
// SALON CONFIG — everything specific to THIS business lives here.
//
// To reuse this whole site for a different grooming salon: change the values
// in this file (and swap the files in /public/assets), then update the two
// SEO tags at the top of index.html. You should not need to touch any file
// inside src/components/ or src/utils/.
// ============================================================================

export const salon = {
  name: "Cutie Paws Grooming",
  shortName: "Cutie Paws",

  // Used in the hero heading as: "{kicker} {highlight} {city}"
  heroKicker: "Cutie cuts",
  heroHighlight: "in",
  heroCity: "Riverside",

  tagline: "15+ years in business",

  description:
    "Breed cuts, clipping and paw care from groomers who are patient and gentle with every pup, from tiny Yorkies to 165 lb gentle giants. Your fur baby leaves clean, comfy and looking oh-so-cute.",

  // E.164 format — used for tel: / sms: links.
  phone: "+19517809495",
  phoneDisplay: "(951) 780-9495",

  email: "", // leave blank to hide the "send by email" fallback link

  address: {
    line1: "17122 Van Buren Boulevard",
    city: "Riverside",
    state: "CA",
    zip: "92504",
  },

  // Google Maps embed + link query. Kept separate from the address object
  // so you can hand-tune the query string without reformatting the address.
  mapsQuery: "17122 Van Buren Blvd, Riverside, CA 92504",

  // 0 = Sunday ... 6 = Saturday, matching Date#getDay().
  hours: [
    { day: "Sunday", open: null, close: null },
    { day: "Monday", open: null, close: null },
    { day: "Tuesday", open: "8:30 am", close: "8:00 pm" },
    { day: "Wednesday", open: "8:30 am", close: "8:00 pm" },
    { day: "Thursday", open: "8:30 am", close: "8:00 pm" },
    { day: "Friday", open: "8:30 am", close: "8:00 pm" },
    { day: "Saturday", open: "8:30 am", close: "8:00 pm" },
  ],
  hoursSummary: "Tue–Sat, 8:30am–8pm · Closed Sun & Mon",

  // Toggle to show/hide "from $X" price labels next to each service. Add a
  // `price` to each service below before turning this on.
  showPrices: false,

  services: [
    {
      name: "Full grooming",
      description:
        "The works: bath, blow dry, haircut, nail trim and ear cleaning, so your pup goes home looking and feeling their best.",
    },
    {
      name: "Pet haircut",
      description:
        "A cut styled the way you like it, whether that’s short and easy for summer, fluffy teddy bear, or just a little trim.",
    },
    {
      name: "Bath and groom only",
      description:
        "A deep-clean bath, blow dry and brush-out without the haircut. Perfect for keeping fresh between full grooms.",
    },
    {
      name: "Breed cuts",
      description:
        "Classic breed-specific styles done right, from Yorkies and Shih Tzus to fluffy Pomeranians and doodles.",
    },
    {
      name: "Pet clipping",
      description:
        "Full clip-downs and tidy-ups for comfort and easy upkeep between visits. Gentle with matted coats and nervous pups.",
    },
    {
      name: "Paws grooming",
      description:
        "Nail trims, paw-pad shaving and neat, rounded feet, so every step is a cute one.",
    },
    {
      name: "Home services",
      description:
        "Ask us about grooming care at home. Give us a call and we’ll talk through what works best for your pet.",
    },
  ],

  // [label, sublabel] pairs shown as size-picker buttons in the booking form.
  sizes: {
    dog: [
      ["Small", "under 20 lb"],
      ["Medium", "20–50 lb"],
      ["Large", "50–90 lb"],
      ["XL", "90+ lb"],
    ],
    cat: [
      ["Small", "under 8 lb"],
      ["Medium", "8–12 lb"],
      ["Large", "12+ lb"],
    ],
  },

  // Exterior photo shown in the hero.
  storefront: {
    src: "/assets/storefront.webp",
    alt: "The Cutie Paws Grooming storefront on Van Buren Boulevard",
  },

  // `position` is an optional object-position used to keep faces in frame
  // when the photo is cropped to the gallery's portrait tiles.
  gallery: [
    { src: "/assets/goldendoodle.webp", alt: "Freshly groomed cream goldendoodle sitting on the grooming table" },
    { src: "/assets/yorkie.webp", alt: "Yorkie with a fresh trim and purple flower collar" },
    { src: "/assets/pomeranians.webp", alt: "Smiling groomer with six fluffy freshly groomed Pomeranians", position: "center 40%" },
    { src: "/assets/doodle-tie.webp", alt: "Happy doodle wearing a colorful bow tie after his groom" },
  ],

  reviews: [
    {
      name: "Mitch H.",
      when: "2 months ago",
      text: "They do a wonderful job and my terrier loves them 💞",
    },
    {
      name: "Cicely B.",
      when: "2 years ago",
      text: "Best place for my dogs. Groomers love my fur babies and take care of them. Great price for service and care that is given.",
    },
    {
      name: "Heather S.",
      when: "5 years ago",
      text: "Love love love this place!! Cannot recommend enough, my sweet dog is a difficult dog to groom, due to past trama, and she is always taken care of so well and always walks away looking so cute ♥️",
    },
    {
      name: "Frank P.",
      when: "6 years ago",
      text: "Brenda and I have been taking our babies to Jammies Cutie Paws for over 17 years and have been 100% satisfied with their services.... they listen and groom to perfection!!!!",
    },
    {
      name: "Cynthia L.",
      when: "6 years ago",
      text: "They are so patient and gentle with my dogs. I have a 165 lb dog and a 55 lb dog and both have great experiences there.",
    },
    {
      name: "Amanda G.",
      when: "5 years ago",
      text: "So knowledgeable and passionate. I'm very pleased with the service and care my furbabes received. Thank you Jamie!!",
    },
    {
      name: "Carolyn P.",
      when: "5 years ago",
      text: "Wonderful, caring, professional groomers at a reasonable cost. My number 1 choice for the last 10 years!!!",
    },
  ],

  // Palette pulled from the storefront: the sign's cherry red, the pink and
  // purple paw prints on the window, and the salon's lavender walls.
  // Applied at runtime as CSS custom properties (see src/main.jsx), so this
  // object is the ONE place that defines the site's color palette. Keep
  // accentStrong/accentDeep/accentLabel dark enough to clear WCAG AA
  // contrast against the light backgrounds they sit on.
  colors: {
    bg: "#FFF7F9",
    surface: "#FFFFFF",
    surfaceAlt: "#F5EEFB",
    ink: "#2B1A35",
    inkSoft: "#54445E",
    inkMute: "#6C5F76",
    inkHover: "#45304F",
    border: "rgba(43,26,53,.1)",
    borderStrong: "rgba(43,26,53,.18)",
    accent: "#F7A8C4",
    accentHover: "#FABBD1",
    accentStrong: "#C8102E",
    accentDeep: "#A30D26",
    accentLabel: "#7A3D9E",
    highlight: "#FDE7EF",
    selection: "#F8C6D8",
    lavender: "#E6D6F5",
    onDark: "#FFF7F9",
    onDarkSoft: "#D9CCE0",
    placeholder: "#EFE4EC",
    error: "#B3261E",
    openDot: "#3E9B5A",
    closedDot: "#C9A2B6",
  },

  // Applied at runtime as --font-display / --font-body (see src/main.jsx).
  // The matching stylesheet <link> lives in index.html.
  fonts: {
    display: "'Fredoka', 'Nunito', system-ui, sans-serif",
    body: "'Nunito', system-ui, sans-serif",
  },
};

// ============================================
// COLORS
// ============================================

export const COLORS = {
  background: {
    light: "#f7f6f5",
    dark: "#1b1b1b",
    white: "#ffffff",
  },
  text: {
    primary: "#1b1b1b",
    secondary: "#8d8d8d",
    light: "#f7f6f5",
  },
  accent: {
    green: "#91ef81",
    greenFaded: "#91ef81/50",
  },
} as const;

// ============================================
// FONT SIZES
// ============================================

export const FONT_SIZES = {
  heroHeading: "48px",
  mainHeading: "35px",
  subtitle: "30px",
  cardText: "35.07px",
  label: "15px",
  button: "24px",
  navLink: "15px",
} as const;

// ============================================
// BUTTON STYLES (reference: sans-400-16, sans-400-20)
// ============================================

export const BUTTON_STYLES = {
  font: {
    family: "sans-serif",
    weight: 400, // font-normal
    size: "16px", // sans-400-16
    sizeMd: "20px", // sans-400-20 (desktop)
  },
  padding: {
    x: "20px", // px-5
    y: "10px", // py-2.5
  },
  border: "0.9px solid black",
  borderRadius: "11.28px",
} as const;

// ============================================
// SPACING
// ============================================

export const SPACING = {
  sectionPaddingX: "px-20",
  sectionPaddingY: {
    default: "py-28",
    hook: "py-16",
    problem: "py-20",
  },
} as const;

// ============================================
// BORDER RADIUS
// ============================================

export const BORDER_RADIUS = {
  card: "20px",
  buttonLarge: "rounded-3xl",
  buttonRound: "rounded-full",
} as const;

// ============================================
// ROUTES
// ============================================

export const ROUTES = {
  home: "/",
  ourStory: "/our-story",
  howItWorks: "/how-it-works",
  waitlist: "/waitlist",
} as const;

// ============================================
// SITE INFO
// ============================================

export const SITE = {
  name: "MAON",
  logoHighlight: "O",
} as const;

// ============================================
// NAV
// ============================================

export const NAV = {
  links: [
    { label: "our story", href: "/our-story" },
    { label: "how it works", href: "/how-it-works" },
  ],
  cta: {
    label: "save your spot",
    href: "/waitlist",
  },
} as const;

// ============================================
// HOOK (HERO) SECTION
// ============================================

export const HOOK = {
  headline: "AI mental health assistant plugged into your biometrics",
  subtext: "emotion layer of AI",
  cta: {
    label: "Join the waitlist",
    href: "/waitlist",
  },
} as const;

// ============================================
// PROBLEM SECTION
// ============================================

export const PROBLEM = {
  label: "problem",
  headline:
    "Mental health is the only major area of medicine where there's no objective test to tell you something's wrong.",
  transition: "maybe its because...",
  quote: {
    text: "the practice of professional psychologists is often not based on scientific knowledge",
    attribution: "Robyn M. Dawes, CMU Professor of Psychology",
  },
} as const;

// ============================================
// APPROACH SECTION
// ============================================

export const APPROACH = {
  label: "approach",
  headline:
    "We use data from your smart devices to give you a new perspective on your mental health.",
  cards: [
    { title: "listen to your body" },
    { title: "identify emotional patterns" },
    { title: "step in when it matters" },
    { title: "show you the bigger picture" },
  ],
} as const;

// ============================================
// VISION SECTION
// ============================================

export const VISION = {
  label: "vision",
  headline:
    "Demystifying mental disorders by revealing their underlying patterns through data.",
  subheadline: "To provide proper care.",
  cta: {
    label: "save your spot",
    href: "/waitlist",
  },
} as const;

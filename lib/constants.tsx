// ============================================
// FONTS
// ============================================

export const FONTS = {
  sans: "'Google Sans Flex', Arial, Helvetica, sans-serif",
  serif: "'Merriweather', Georgia, serif",
} as const;

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
    green: "#B7D7A8",
    greenFaded: "#B7D7A8/50",
  },
} as const;

// ============================================
// FONT SIZES
// ============================================

export const FONT_SIZES = {
  heroHeading: "48px",
  mainHeading: "35px",
  subtitle: "25px",
  cardText: "27px",
  label: "15px",
  button: "24px",
  navLink: "15px",
} as const;

export const FONT_SIZES_MOBILE = {
  heroHeading: "32px",
  mainHeading: "24px",
  subtitle: "20px",
  cardText: "18px",
  label: "12px",
  button: "18px",
  navLink: "14px",
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
  links: [],
  cta: {
    label: "waitlist",
    href: "/waitlist",
  },
} as const;

// ============================================
// HOOK (HERO) SECTION
// ============================================

export const HOOK = {
  headline: "agentic mental health assistant plugged into your biometrics",
  subtext: "autonomous haptic and digital interventions",
  cta: {
    label: "save your spot",
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
  headline:
    "We listen to your body, look at app usage patterns, and your conversation with Maon to detect distress and autonomously intervene early.",
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

// ============================================
// DO'S & DON'TS SECTION
// ============================================

export const DOS_DONTS = {
  label: "do's & don'ts",
  doSection: {
    title: "what we do",
    cards: [
      { text: "provide supportive and optional interventions", icon: "/assets/provide.svg" },
      { text: "give you full control over data and features", icon: "/assets/full_control.svg" },
      { text: "use simple, non-medical language", icon: "/assets/medical.svg" },
    ],
  },
  dontSection: {
    title: "what we don't do",
    cards: [
      { text: "We don't diagnose mental health conditions" },
      { text: "We don't label you with disorders" },
      { text: "We don't contact anyone without your permission" },
    ],
  },
} as const;

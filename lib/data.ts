import type { MockupLayout } from "@/components/WebsiteMockup";

/* ------------------------------------------------------------------ */
/* PORTFOLIO / CASE STUDIES                                            */
/* ------------------------------------------------------------------ */

export type CaseStudy = {
  slug: string;
  name: string;
  role: string;
  audience: string; // audience slug
  theme: "charcoal" | "beige" | "teal" | "sage" | "peach";
  layout: MockupLayout;
  // Result-first headline used on the gallery card
  resultHeadline: string;
  // Short supporting line on the card
  cardSub: string;
  // Detail page
  challenge: string;
  approach: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  quote: string;
  deliverables: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "josephine",
    name: "Josephine",
    role: "Marketing Lead, ex-agency",
    audience: "job-seekers",
    theme: "charcoal",
    layout: "profile",
    resultHeadline: "Josephine is never going to be overlooked by recruiters again.",
    cardSub: "From a buried LinkedIn to a website recruiters remember.",
    challenge:
      "Josephine was applying to senior marketing roles with a strong CV — but everything lived inside a generic LinkedIn profile that looked identical to a thousand others. Recruiters skimmed and moved on. Her best campaigns, her results, her voice — none of it was visible.",
    approach:
      "We built her a single, sharp personal site that leads with outcomes: the campaigns she ran, the numbers she moved, and the kind of teams she thrives on. Professionally written, beautifully laid out, and ready to drop into every application and DM.",
    outcome:
      "Within three weeks of sending her new site instead of a PDF, Josephine had three first-round interviews — two from recruiters who replied specifically to say the site stood out.",
    metrics: [
      { label: "Interviews booked", value: "3 in 3 weeks" },
      { label: "Recruiter reply rate", value: "+4×" },
      { label: "Time to launch", value: "5 days" },
    ],
    quote:
      "I stopped feeling like one more applicant. The site made me feel like a candidate worth meeting.",
    deliverables: [
      "Custom personal website",
      "Professionally written bio & experience",
      "Results-led case highlights",
      "One-click share link for applications",
    ],
  },
  {
    slug: "sarah",
    name: "Sarah",
    role: "Product Designer",
    audience: "creators",
    theme: "beige",
    layout: "portfolio",
    resultHeadline: "Sarah finally has a portfolio that matches her expertise.",
    cardSub: "Senior-level work, finally presented at a senior level.",
    challenge:
      "Sarah's work was excellent, but it was scattered across Dribbble shots, Notion docs and old Behance links. Nothing told the story of her thinking. Clients couldn't tell the difference between her and a junior.",
    approach:
      "We curated her strongest projects into a calm, editorial portfolio — each one framed as a problem solved, not just a screen designed. Clean typography, generous whitespace, and copy that sounds like the senior designer she is.",
    outcome:
      "Her new portfolio became the link she sends first. She raised her rates and stopped competing on price.",
    metrics: [
      { label: "Rate increase", value: "+40%" },
      { label: "Proposal win rate", value: "2× higher" },
      { label: "Time to launch", value: "6 days" },
    ],
    quote:
      "For the first time my portfolio looks like the work actually felt to make. It finally matches me.",
    deliverables: [
      "Editorial portfolio website",
      "Curated case studies",
      "Custom project layouts",
      "Contact & enquiry form",
    ],
  },
  {
    slug: "michael",
    name: "Michael",
    role: "Freelance Developer",
    audience: "freelancers",
    theme: "teal",
    layout: "studio",
    resultHeadline: "Michael stopped sending PDFs and started sending a website.",
    cardSub: "One link replaced the messy email attachments.",
    challenge:
      "Every new lead meant attaching the same tired PDF and hoping it got opened. It looked like a freelancer scraping by — not the reliable engineer Michael actually is.",
    approach:
      "We gave him a confident, modern site that does the selling for him: what he builds, who he's built it for, and exactly how to start a project. Now he replies to leads with one link.",
    outcome:
      "Leads take him seriously before the first call. His close rate went up and his proposals got shorter.",
    metrics: [
      { label: "Lead-to-call rate", value: "+60%" },
      { label: "Avg. project size", value: "+35%" },
      { label: "Time to launch", value: "5 days" },
    ],
    quote:
      "Clients show up to calls already convinced. The website did half the work before I said a word.",
    deliverables: [
      "Professional services website",
      "Clear offer & process section",
      "Selected work showcase",
      "Project enquiry form",
    ],
  },
  {
    slug: "david",
    name: "David",
    role: "Strategy Consultant",
    audience: "consultants",
    theme: "sage",
    layout: "consultant",
    resultHeadline: "David's consulting business now looks like a six-figure brand.",
    cardSub: "A presence that matches the rooms he wants to be in.",
    challenge:
      "David charged premium rates but had no premium presence to back it up. Prospects Googled him, found nothing convincing, and hesitated. Credibility was leaking before the conversation started.",
    approach:
      "We built him an authoritative consulting site: a clear point of view, proof of results, and the quiet confidence of a serious advisory brand. Everything signals 'this person is worth the investment.'",
    outcome:
      "He now opens proposals from a position of strength. The site closes the credibility gap instantly.",
    metrics: [
      { label: "Avg. retainer", value: "+50%" },
      { label: "Inbound enquiries", value: "3× more" },
      { label: "Time to launch", value: "7 days" },
    ],
    quote:
      "It looks like a brand I'd hire. That's exactly the point — and exactly what my clients now feel.",
    deliverables: [
      "Authority-led consulting website",
      "Point-of-view & services pages",
      "Results & client proof",
      "Booking / enquiry flow",
    ],
  },
  {
    slug: "amara",
    name: "Amara",
    role: "Leadership Coach",
    audience: "coaches",
    theme: "peach",
    layout: "creator",
    resultHeadline: "Amara turned scattered referrals into a steady stream of clients.",
    cardSub: "A home for her method — and a reason to say yes.",
    challenge:
      "Amara relied entirely on word of mouth. When people were referred, they had nowhere to land that explained who she helped and how. Warm leads went cold.",
    approach:
      "We built a warm, trustworthy coaching site that captures her philosophy, her programs, and the transformation clients get — with an easy way to book a discovery call.",
    outcome:
      "Referrals now convert. Prospects arrive understanding her value and ready to commit.",
    metrics: [
      { label: "Referral conversion", value: "+70%" },
      { label: "Discovery calls", value: "2× booked" },
      { label: "Time to launch", value: "6 days" },
    ],
    quote:
      "People finally get what I do before we even speak. They show up ready.",
    deliverables: [
      "Warm, trust-led coaching site",
      "Programs & philosophy pages",
      "Client transformation stories",
      "Discovery-call booking",
    ],
  },
  {
    slug: "liam",
    name: "Liam",
    role: "Startup Founder",
    audience: "founders",
    theme: "teal",
    layout: "studio",
    resultHeadline: "Liam's founder page made investors take the meeting.",
    cardSub: "A credible founder story, not just a deck.",
    challenge:
      "Liam was raising, but when investors searched his name they found fragments. There was no single page that told his story or established why he was the person to build this.",
    approach:
      "We built a focused founder site: the mission, the traction, the why-now, and the why-him — designed to be forwarded between partners at a fund.",
    outcome:
      "His page became part of the raise. Warm intros landed with context already in place.",
    metrics: [
      { label: "Meeting acceptance", value: "+45%" },
      { label: "Intro-to-call rate", value: "2× higher" },
      { label: "Time to launch", value: "7 days" },
    ],
    quote:
      "When I share my page, investors already get the story. It changed how my raise conversations start.",
    deliverables: [
      "Founder & company narrative site",
      "Traction & vision sections",
      "Press & proof highlights",
      "Investor contact flow",
    ],
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

/* ------------------------------------------------------------------ */
/* AUDIENCES                                                           */
/* ------------------------------------------------------------------ */

export type Audience = {
  slug: string;
  title: string;
  emoji: string;
  navTagline: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroSub: string;
  pains: { title: string; body: string }[];
  outcomes: { title: string; body: string }[];
  features: string[];
  faqs: { q: string; a: string }[];
  // case study slugs to feature
  featured: string[];
  testimonial: { quote: string; name: string; role: string };
};

export const AUDIENCES: Audience[] = [
  {
    slug: "job-seekers",
    title: "Job Seekers",
    emoji: "🎯",
    navTagline: "Stop being one more applicant",
    heroEyebrow: "For job seekers",
    heroHeadline: "Be the candidate they remember.",
    heroSub:
      "A LinkedIn profile makes you findable. A personal website makes you memorable. Give recruiters a reason to choose you before the interview even starts.",
    pains: [
      {
        title: "You blend into the stack",
        body: "Hundreds of CVs look the same. Yours included — through no fault of your own.",
      },
      {
        title: "Your best work is invisible",
        body: "The projects and results that prove you're great never make it onto a résumé.",
      },
      {
        title: "Recruiters skim and forget",
        body: "Six seconds on a CV. Then they move on, and you're gone from memory.",
      },
    ],
    outcomes: [
      {
        title: "A link that opens doors",
        body: "One URL on every application, email and DM — instantly more credible than a PDF.",
      },
      {
        title: "Your story, told well",
        body: "Professionally written so your experience finally sounds as good as it actually is.",
      },
      {
        title: "Memorable, not forgettable",
        body: "A site that makes recruiters stop, read, and want to meet you.",
      },
    ],
    features: [
      "Results-led experience section",
      "Professional bio that sounds like you",
      "Highlight reel of your best work",
      "One-click share link for applications",
      "Downloadable CV integration",
      "Mobile-perfect for on-the-go recruiters",
    ],
    faqs: [
      {
        q: "Isn't LinkedIn enough?",
        a: "LinkedIn makes you findable, but everyone has one. A personal site is what makes a recruiter remember you — and it signals you take your career seriously.",
      },
      {
        q: "I'm not technical — can I still use this?",
        a: "Completely. You fill in a simple form; we design, write and build everything. You just share the link.",
      },
      {
        q: "Can I use it while employed?",
        a: "Yes. It's discreet, professional, and entirely yours — perfect for a quiet, confident job search.",
      },
    ],
    featured: ["josephine", "sarah"],
    testimonial: {
      quote:
        "I stopped feeling like one more applicant. The site made me feel like a candidate worth meeting.",
      name: "Josephine",
      role: "Marketing Lead",
    },
  },
  {
    slug: "freelancers",
    title: "Freelancers",
    emoji: "💼",
    navTagline: "Win better clients, faster",
    heroEyebrow: "For freelancers",
    heroHeadline: "Stop sending PDFs. Start sending a website.",
    heroSub:
      "Your work is worth more than a messy email attachment. Reply to every lead with one confident link that does the selling for you.",
    pains: [
      {
        title: "You compete on price",
        body: "Without a strong presence, clients can't tell your value — so they negotiate.",
      },
      {
        title: "Leads go cold",
        body: "By the time you've cobbled together examples, the moment has passed.",
      },
      {
        title: "You look like a side hustle",
        body: "Even great freelancers look unsure when there's nothing professional to point to.",
      },
    ],
    outcomes: [
      {
        title: "Charge what you're worth",
        body: "A premium presence justifies premium rates — before the first call.",
      },
      {
        title: "One link, every time",
        body: "Reply to inquiries instantly with a site that explains your offer and process.",
      },
      {
        title: "Close more, chase less",
        body: "Clients arrive already convinced, so conversations start from yes.",
      },
    ],
    features: [
      "Clear services & offer section",
      "Selected work showcase",
      "Your process, made obvious",
      "Project enquiry form",
      "Testimonials & social proof",
      "Rates-ready, premium positioning",
    ],
    faqs: [
      {
        q: "I already have a Notion / Carrd page.",
        a: "Those are fine for starting out. This is for when you're ready to look established and charge accordingly.",
      },
      {
        q: "Can it match my niche?",
        a: "Yes — we tailor the copy and layout to your specific service, audience and rates.",
      },
      {
        q: "How fast can I have it?",
        a: "Most freelancer sites launch in 5–7 days, ready to start sending to leads.",
      },
    ],
    featured: ["michael", "sarah"],
    testimonial: {
      quote:
        "Clients show up to calls already convinced. The website did half the work before I said a word.",
      name: "Michael",
      role: "Freelance Developer",
    },
  },
  {
    slug: "consultants",
    title: "Consultants",
    emoji: "📈",
    navTagline: "Look like the expert you are",
    heroEyebrow: "For consultants",
    heroHeadline: "Charge premium rates. Look the part.",
    heroSub:
      "When prospects Google you, what they find decides whether they trust your fee. Give them an authoritative presence that closes the credibility gap instantly.",
    pains: [
      {
        title: "Credibility leaks early",
        body: "A weak online presence makes prospects hesitate before they ever reply.",
      },
      {
        title: "Your expertise is invisible",
        body: "Years of results and judgement have nowhere to live and prove themselves.",
      },
      {
        title: "You sound like everyone else",
        body: "Without a clear point of view, you're just another consultant in the inbox.",
      },
    ],
    outcomes: [
      {
        title: "Instant authority",
        body: "A site that signals 'serious advisor' the moment someone lands on it.",
      },
      {
        title: "A clear point of view",
        body: "Your thinking, positioned sharply — the thing that wins the engagement.",
      },
      {
        title: "Premium by default",
        body: "Look like the six-figure brand your rates already imply.",
      },
    ],
    features: [
      "Authority-led positioning",
      "Point-of-view & services pages",
      "Results & client proof",
      "Booking / enquiry flow",
      "Credibility markers throughout",
      "Polished, advisory-grade design",
    ],
    faqs: [
      {
        q: "Will it reflect my specific field?",
        a: "Yes. We craft the positioning and copy around your discipline and the clients you want to win.",
      },
      {
        q: "I have client confidentiality concerns.",
        a: "No problem — we can present results anonymously or by outcome, without naming sensitive clients.",
      },
      {
        q: "Can I add a booking link?",
        a: "Absolutely. We integrate your scheduler so prospects can book a call in one click.",
      },
    ],
    featured: ["david", "liam"],
    testimonial: {
      quote:
        "It looks like a brand I'd hire. That's exactly the point — and exactly what my clients now feel.",
      name: "David",
      role: "Strategy Consultant",
    },
  },
  {
    slug: "creators",
    title: "Creators",
    emoji: "🎨",
    navTagline: "A home base you own",
    heroEyebrow: "For creators",
    heroHeadline: "Own your audience. Don't rent it.",
    heroSub:
      "Platforms change the rules overnight. A personal website is the one place your work, your story, and your audience truly belong to you.",
    pains: [
      {
        title: "You're at the mercy of the algorithm",
        body: "One change and your reach — and income — can vanish.",
      },
      {
        title: "Your best work disappears",
        body: "Posts get buried. There's no home where your portfolio lives forever.",
      },
      {
        title: "Brands can't take you seriously",
        body: "A link-in-bio isn't enough when a sponsor is deciding whether to pay you.",
      },
    ],
    outcomes: [
      {
        title: "A platform you control",
        body: "Your work, your audience, your terms — on a site that's truly yours.",
      },
      {
        title: "A media kit that converts",
        body: "Make brand partnerships easy with a presence that looks the part.",
      },
      {
        title: "Built to be remembered",
        body: "An editorial home that turns followers into a real, owned audience.",
      },
    ],
    features: [
      "Curated work & content gallery",
      "Brand / partnership section",
      "Email capture to grow your list",
      "Links to every platform",
      "Editorial, on-brand design",
      "Media-kit-ready layout",
    ],
    faqs: [
      {
        q: "Can it match my personal brand?",
        a: "Yes — we design around your aesthetic so it feels unmistakably you.",
      },
      {
        q: "Can I collect emails?",
        a: "Definitely. We set up email capture so you can build an audience you actually own.",
      },
      {
        q: "Do you handle different content types?",
        a: "Video, writing, photography, products — we lay it out so each shines.",
      },
    ],
    featured: ["sarah", "amara"],
    testimonial: {
      quote:
        "For the first time my portfolio looks like the work actually felt to make. It finally matches me.",
      name: "Sarah",
      role: "Product Designer",
    },
  },
  {
    slug: "coaches",
    title: "Coaches",
    emoji: "🌱",
    navTagline: "Turn referrals into clients",
    heroEyebrow: "For coaches",
    heroHeadline: "Give warm leads a reason to say yes.",
    heroSub:
      "When someone is referred to you, they need somewhere to land that explains who you help and how. Stop letting warm leads go cold.",
    pains: [
      {
        title: "Referrals fall through",
        body: "Word of mouth sends people who then have nowhere to learn about you.",
      },
      {
        title: "Your method is unclear",
        body: "Without a clear home, prospects can't tell what working with you is like.",
      },
      {
        title: "Booking is friction",
        body: "If it's hard to take the next step, even keen prospects drift away.",
      },
    ],
    outcomes: [
      {
        title: "Referrals that convert",
        body: "A warm, trustworthy site that turns introductions into discovery calls.",
      },
      {
        title: "Your method, made clear",
        body: "Programs and philosophy laid out so the transformation is obvious.",
      },
      {
        title: "Effortless booking",
        body: "An easy, inviting path to book a call while interest is high.",
      },
    ],
    features: [
      "Programs & philosophy pages",
      "Client transformation stories",
      "Warm, trust-led design",
      "Discovery-call booking",
      "Testimonials & results",
      "Email capture for nurture",
    ],
    faqs: [
      {
        q: "I coach a specific niche — does that work?",
        a: "Perfectly. The clearer your niche, the better we can position you to the right clients.",
      },
      {
        q: "Can I link my calendar?",
        a: "Yes — we connect your booking tool so prospects can schedule instantly.",
      },
      {
        q: "Will it feel like me?",
        a: "That's the goal. We capture your warmth and voice so it feels personal, not corporate.",
      },
    ],
    featured: ["amara", "david"],
    testimonial: {
      quote:
        "People finally get what I do before we even speak. They show up ready.",
      name: "Amara",
      role: "Leadership Coach",
    },
  },
  {
    slug: "founders",
    title: "Founders",
    emoji: "🚀",
    navTagline: "Make investors take the meeting",
    heroEyebrow: "For founders",
    heroHeadline: "Be the founder worth backing.",
    heroSub:
      "Investors, partners and early hires will Google you. Give them a single page that tells your story and makes the case for why it's you.",
    pains: [
      {
        title: "Your story is scattered",
        body: "Fragments across Twitter and LinkedIn don't make a compelling case.",
      },
      {
        title: "Credibility is unclear",
        body: "Investors can't quickly see your traction, vision and track record.",
      },
      {
        title: "Intros lose momentum",
        body: "A warm intro lands flat with nothing strong to forward alongside it.",
      },
    ],
    outcomes: [
      {
        title: "A page that gets forwarded",
        body: "The why-now and why-you, packaged to move between partners at a fund.",
      },
      {
        title: "Instant credibility",
        body: "Traction, vision and proof in one place that signals 'serious founder'.",
      },
      {
        title: "Stronger raise conversations",
        body: "Meetings start with context already in place — and on your terms.",
      },
    ],
    features: [
      "Founder & company narrative",
      "Traction & vision sections",
      "Press & proof highlights",
      "Investor / contact flow",
      "Forward-ready, fast-loading",
      "Credible, modern design",
    ],
    faqs: [
      {
        q: "Is this for me or my company?",
        a: "Either — we can build a founder page, a company landing page, or blend both into one.",
      },
      {
        q: "We're pre-traction. Still worth it?",
        a: "Yes. A clear story and strong presence build conviction even before the numbers are big.",
      },
      {
        q: "Can we update it as we grow?",
        a: "Of course — your site is yours to evolve as your traction and story develop.",
      },
    ],
    featured: ["liam", "david"],
    testimonial: {
      quote:
        "When I share my page, investors already get the story. It changed how my raise conversations start.",
      name: "Liam",
      role: "Startup Founder",
    },
  },
  {
    slug: "personal-brands",
    title: "Personal Brands",
    emoji: "✨",
    navTagline: "Look as good as you are",
    heroEyebrow: "For professionals building a personal brand",
    heroHeadline: "Look as good online as you are in real life.",
    heroSub:
      "Your reputation is your most valuable asset. Give it a home that's premium, credible, and unmistakably yours — wherever your name comes up.",
    pains: [
      {
        title: "Your name returns nothing",
        body: "When people search you, there's no strong, owned result to anchor your reputation.",
      },
      {
        title: "You look smaller than you are",
        body: "Your real influence and experience aren't reflected anywhere online.",
      },
      {
        title: "First impressions slip away",
        body: "Without a credible presence, opportunities pass you by quietly.",
      },
    ],
    outcomes: [
      {
        title: "Own your search results",
        body: "A polished site that's the first thing people find — and remember.",
      },
      {
        title: "Premium by association",
        body: "A presence that signals authority, taste and credibility instantly.",
      },
      {
        title: "Doors that open",
        body: "Speaking, partnerships, clients and opportunities that find you.",
      },
    ],
    features: [
      "Personal brand positioning",
      "Bio, work & highlights",
      "Speaking / media section",
      "Newsletter & contact capture",
      "Consistent, premium design",
      "SEO basics so you rank for your name",
    ],
    faqs: [
      {
        q: "What if my brand is still forming?",
        a: "Perfect timing. We help clarify your positioning and give it a credible home to grow into.",
      },
      {
        q: "Can it grow with me?",
        a: "Yes — your site is built to evolve as your brand and ambitions expand.",
      },
      {
        q: "Will I rank for my name?",
        a: "We include SEO basics so your site becomes a top result when people search you.",
      },
    ],
    featured: ["david", "liam"],
    testimonial: {
      quote:
        "My name finally returns something that looks like me at my best. It changed how people treat the first conversation.",
      name: "Priya",
      role: "Advisor & Speaker",
    },
  },
];

export function getAudience(slug: string) {
  return AUDIENCES.find((a) => a.slug === slug);
}

/* ------------------------------------------------------------------ */
/* TESTIMONIALS (homepage social proof)                               */
/* ------------------------------------------------------------------ */

export const TESTIMONIALS = [
  {
    quote:
      "I genuinely thought this would cost ten times what it did. I keep telling people the price just to watch their reaction.",
    name: "Josephine A.",
    role: "Marketing Lead",
    theme: "charcoal" as const,
  },
  {
    quote:
      "It looks like something a top agency would charge thousands for. I sent it to three clients the day it launched.",
    name: "Michael R.",
    role: "Freelance Developer",
  },
  {
    quote:
      "Prospects take me seriously before the first call now. My close rate has never been higher.",
    name: "David K.",
    role: "Strategy Consultant",
    theme: "sage" as const,
  },
  {
    quote:
      "Fast, beautiful, and the copywriting made me sound like the best version of myself. Worth ten times the price.",
    name: "Sarah L.",
    role: "Product Designer",
  },
  {
    quote:
      "Referrals actually convert now. People land on my site and book a call without me chasing.",
    name: "Amara O.",
    role: "Leadership Coach",
    theme: "teal" as const,
  },
  {
    quote:
      "I shared my founder page with an investor and got the meeting the same day. Fifty dollars. Unreal.",
    name: "Liam T.",
    role: "Startup Founder",
  },
];

/* ------------------------------------------------------------------ */
/* TRUST METRICS                                                       */
/* ------------------------------------------------------------------ */

export const TRUST_METRICS = [
  { value: "2,400+", label: "Websites delivered" },
  { value: "4.9/5", label: "Average customer rating" },
  { value: "5–7 days", label: "Average turnaround" },
  { value: "98%", label: "Would recommend" },
];

/* ------------------------------------------------------------------ */
/* HOW IT WORKS                                                        */
/* ------------------------------------------------------------------ */

export const STEPS = [
  {
    n: "01",
    title: "Choose your package",
    body: "One simple, honest price. No upsells, no surprises. Checkout takes two minutes.",
  },
  {
    n: "02",
    title: "Complete onboarding",
    body: "A short, guided form. Tell us about you — your work, your goals, your links and photos.",
  },
  {
    n: "03",
    title: "We build your website",
    body: "Designed, written and built by our team using modern AI-assisted workflows, human-perfected.",
  },
  {
    n: "04",
    title: "Review & launch",
    body: "You review, we refine, and your site goes live. Ready to share with the world.",
  },
];

/* ------------------------------------------------------------------ */
/* WHAT'S INCLUDED                                                     */
/* ------------------------------------------------------------------ */

export const INCLUDED = [
  {
    title: "Custom website",
    body: "Designed around you — not a template everyone else is using.",
  },
  {
    title: "Professional copywriting",
    body: "Words that make you sound as good as you actually are.",
  },
  {
    title: "Looks incredible everywhere",
    body: "Flawless on every phone, tablet and screen, automatically.",
  },
  {
    title: "Found on Google",
    body: "SEO basics so the right people find you when they search.",
  },
  {
    title: "Contact forms",
    body: "Make it effortless for opportunities to reach you.",
  },
  {
    title: "Portfolio sections",
    body: "Show your best work in a way that actually gets noticed.",
  },
  {
    title: "Personal branding guidance",
    body: "Direction on how to show up consistently and credibly.",
  },
  {
    title: "Hosting setup assistance",
    body: "We help you get live with zero technical headaches.",
  },
];

/* ------------------------------------------------------------------ */
/* HOMEPAGE FAQ                                                        */
/* ------------------------------------------------------------------ */

export const FAQS = [
  {
    q: "Why only $50?",
    a: "Because we use modern AI-assisted workflows, reviewed and perfected by experienced designers, developers and copywriters. The AI handles the heavy lifting; humans handle the taste. That efficiency is the reason you get $2,000 quality at a price that feels almost unfair — and we'd rather build thousands of great sites than a handful of overpriced ones.",
  },
  {
    q: "How long does it take?",
    a: "Most websites are designed, written and delivered in 5–7 days from the moment you complete onboarding. No three-month agency timelines.",
  },
  {
    q: "Do I own the website?",
    a: "Yes, completely. It's yours — your content, your domain, your site. We help you get it live and it belongs to you.",
  },
  {
    q: "Can I edit it later?",
    a: "Absolutely. We set things up so you can make updates easily, and we provide guidance so you're never stuck.",
  },
  {
    q: "Who is this for?",
    a: "Ambitious people who want to be taken seriously — job seekers, freelancers, consultants, creators, coaches, founders, and anyone building a personal brand.",
  },
  {
    q: "What if I don't like it?",
    a: "We work with you until it's right. Your satisfaction is the whole point — we refine based on your feedback before launch, and we stand behind every site we build.",
  },
];

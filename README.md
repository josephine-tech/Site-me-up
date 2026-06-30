# Site Me Up

> You deserve to be taken seriously.

The marketing website for **Site Me Up** — premium personal websites for
ambitious people, designed, written, and delivered in days for $50.

Built to feel like a $500–$2,000 product, then reveal a $50 price.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — brand design system
- **Framer Motion** — sophisticated scroll/enter motion
- Fully static (SSG) — every page prerenders

## Brand

| Token | Hex | |
|---|---|---|
| Charcoal | `#3D5D4D` | primary text / dark surfaces |
| Sage Green | `#75A591` | primary accent |
| Warm Beige | `#F5F1EB` | soft surfaces |
| White | `#FFFFFF` | base |
| Terracotta | `#E37156` | high-energy accent / CTAs |
| Burnt Orange | `#EB965C` | secondary |
| Soft Peach | `#F5D3C8` | secondary |
| Deep Teal | `#2A2F5F` | secondary dark |

- **Headings:** Space Grotesk · **Body:** Inter

## Pages

| Route | Purpose |
|---|---|
| `/` | Homepage — all 10 sections (hero → problem → transformation → portfolio → how it works → what's included → social proof → pricing reveal → lead capture → FAQ) |
| `/for/[slug]` | 7 audience pages: job-seekers, freelancers, consultants, creators, coaches, founders, personal-brands |
| `/work/[slug]` | Result-first case studies |
| `/pricing` | Pricing + agency/DIY comparison |
| `/checkout` | Distraction-free checkout (focused layout) |
| `/success` | Post-payment confirmation + next steps |
| `/onboarding` | Multi-step onboarding wizard |

## Project structure

```
app/
  (marketing)/   # full nav + footer  → home, /for, /work, /pricing
  (focus)/       # minimal header     → checkout, success, onboarding
  layout.tsx     # fonts + globals
components/       # Nav, Footer, sections/, ui/ (motion), WebsiteMockup…
lib/data.ts      # single source of truth: audiences, case studies, FAQs…
```

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (prerenders all routes)
npm run start    # serve the build
```

## Integration notes (placeholders to wire up)

- **Payments** — `app/(focus)/checkout/page.tsx` simulates payment then routes
  to `/success`. Drop in Stripe Checkout (or your provider) where marked.
- **Lead capture** — `components/sections/LeadCapture.tsx` and the onboarding
  form post to placeholders; connect your email platform (Klaviyo / Mailchimp /
  ConvertKit) and CRM where marked.

All copy is outcome-led: we talk about being taken seriously, not about
"responsive design".

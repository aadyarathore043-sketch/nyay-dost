# NyayaPath ⚖️

> **Know Your Rights. Know Your Next Step.**
>
> A premium, production-ready frontend for **NyayaPath** — a legal-tech platform that helps people in India understand legal problems in simple language. Built to look and feel like a funded startup product, not a student project.

---

## ✨ Highlights

- ⚛️ **React 18 + Vite** — fast, modern dev experience with code-splitting
- 🎨 **Tailwind CSS v3** — utility-first design system with brand tokens
- 🧭 **React Router v6** — layout routes + animated page transitions
- 🎞️ **Framer Motion** — scroll reveals, hover micro-interactions, route transitions
- 🌗 **Dark + Light mode** — persisted, respects OS preference
- 🪟 **Glassmorphism, gradients, soft shadows** — Stripe / Linear / Vercel aesthetic
- 📱 **Fully responsive** — mobile, tablet, desktop
- ♿ **Accessible** — focus rings, ARIA labels, semantic HTML, reduced-motion support
- 🧩 **Reusable architecture** — data decoupled from components for easy scaling

> **Disclaimer:** NyayaPath provides **educational legal information only**. It is **not a law firm** and **not a substitute for a qualified lawyer**. This disclaimer appears naturally throughout the site.

---

## 🚀 Quick start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (opens http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview

# 5. Lint
npm run lint
```

> Requires **Node 18+**.

---

## 🗺️ Pages & routes

| Route            | Page                     | What’s there                                                                                         |
| ---------------- | ------------------------ | ---------------------------------------------------------------------------------------------------- |
| `/`              | **Home**                 | Hero, features, stats, why-choose-us, how-it-works, business hub preview, emergency preview, FAQ, CTA |
| `/about`         | **About**                | Mission, story, values, stats, team placeholders                                                     |
| `/ai-assistant`  | **AI Legal Assistant**   | Intake form + placeholder response cards (UI only — no real AI)                                      |
| `/business-hub`  | **Business & Startup Hub** | Interactive dashboard of 10 legal topic cards + compliance checklist                                |
| `/emergency`     | **Emergency Help**       | Premium dashboard of national helpline cards (tappable `tel:` links)                                 |
| `/contact`       | **Contact**              | Contact form (UI only) + details + map placeholder                                                   |
| `/privacy`       | **Privacy Policy**       | Structured legal content + disclaimer                                                                |
| `/terms`         | **Terms & Conditions**   | Structured legal content + disclaimer                                                                |
| `*`              | **404**                  | Polished not-found page                                                                              |

### AI Legal Assistant form fields
Name, Age, State, District, Preferred Language, Email (optional), problem description, voice-input button (UI placeholder), and submit. On submit, it reveals placeholder result cards:

- Legal Category · Summary · Immediate Steps · Evidence to Preserve
- Government Resources · Helplines · Emergency Contacts
- When to Contact a Lawyer · Disclaimer

### Emergency helplines included
Police (100) · Ambulance (108) · Women Helpline (1091) · Cybercrime (1930) · Child Helpline (1098) · Consumer Helpline (1915)

---

## 📁 Project structure

```
project1/
├── index.html               # HTML entry + SEO/meta + fonts
├── package.json
├── vite.config.js           # Vite + @ path alias
├── tailwind.config.js       # Design tokens, animations, dark mode
├── postcss.config.js
├── .eslintrc.json
├── public/
│   └── favicon.svg          # Inline gradient logo
└── src/
    ├── main.jsx             # App entry (Router + ThemeProvider)
    ├── App.jsx              # Route table (lazy-loaded pages)
    ├── index.css            # Tailwind layers + design system
    ├── contexts/
    │   └── ThemeContext.jsx # Dark/light mode
    ├── utils/
    │   └── motion.js        # Shared Framer Motion variants
    ├── data/                # All content lives here (swap easily later)
    │   ├── navigation.js
    │   ├── features.js
    │   ├── stats.js
    │   ├── whyChooseUs.js
    │   ├── howItWorks.js
    │   ├── faqs.js
    │   ├── emergencyContacts.js
    │   ├── businessCards.js
    │   └── forms.js         # AI form options + sample response
    ├── components/
    │   ├── common/          # Button, Card, Container, Logo, Disclaimer, …
    │   ├── layout/          # Navbar, Footer, Layout, PageHeader, PageTransition
    │   ├── ui/              # FeatureCard, StatCard, EmergencyCard, FaqAccordion, …
    │   └── sections/        # Hero, Features, Stats, WhyChooseUs, HowItWorks, …
    └── pages/               # Home, About, AILegalAssistant, EmergencyHelp, …
```

---

## 🎨 Design system

- **Primary:** deep indigo → violet gradient (`brand` palette)
- **Accent:** teal / cyan (trust & action cues)
- **Typography:** `Inter` (body) + `Plus Jakarta Sans` (display headings)
- **Surfaces:** `glass` utility (translucent + backdrop blur), `shadow-card`, `shadow-glow`
- **Radii:** `rounded-3xl` / `rounded-4xl` for that soft, modern feel

All tokens live in `tailwind.config.js`. Shared animations are in `src/utils/motion.js`.

---

## 🔌 Wiring up real AI (next steps)

The AI Assistant is intentionally UI-only. To make it real:

1. **Create an endpoint** (e.g. `POST /api/analyze`) that accepts the form payload.
2. In `src/pages/AILegalAssistant.jsx`, replace the `setTimeout` in `handleSubmit` with a `fetch`/`axios` call.
3. Feed the real response into the existing `<ResultsGrid />` structure (it already matches the required card schema).
4. Move `sampleResponse` out of `src/data/forms.js` once your API returns live data.

Because content lives in `src/data/`, you can swap copy, helplines, and business topics **without touching components**.

---

## 📜 Disclaimer

NyayaPath provides **educational legal information only**. It is **not a law firm** and is **not a substitute for a qualified lawyer**. For matters with serious consequences, please consult a licensed advocate.

---

Built with care for clarity, trust, and access. 🇮🇳

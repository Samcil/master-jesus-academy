# Master Jesus Academy — Official Website

A world-class, fully responsive school website for **Master Jesus Academy**, Taifa, Greater Accra, Ghana.

## 🌟 Features

- **8 full pages**: Home, About, Academics, Admissions, Facilities, Gallery, News, Contact
- **Online Admissions Form** with EmailJS integration
- **Animated UI** with Framer Motion scroll animations
- **Fully responsive** — mobile, tablet, desktop
- **SEO optimised** — metadata, OG tags, sitemap-ready
- **TypeScript** throughout

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 16 (App Router) | Framework |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| React Hook Form + Zod | Form validation |
| EmailJS | Email integration |
| Lucide React | Icons |

## 🚀 Getting Started

1. Clone the repo
2. Install dependencies: `npm install`
3. Copy `.env.local.example` to `.env.local` and fill in your EmailJS keys
4. Run development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

## 📧 EmailJS Setup

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Create an Email Service (Gmail recommended)
3. Create two email templates:
   - **Admissions template**: for new school applications
   - **Contact template**: for general enquiries
4. Add your Service ID, Template IDs, and Public Key to `.env.local`

## 📁 Project Structure

```
master-jesus-academy/
├── app/              # Next.js App Router pages
├── components/       # React components
│   ├── brand/        # Logo
│   ├── layout/       # Navbar, Footer
│   ├── ui/           # Shared UI components
│   ├── home/         # Home page sections
│   ├── about/        # About page sections
│   ├── academics/    # Academics page sections
│   ├── admissions/   # Admissions page sections
│   ├── facilities/   # Facilities page sections
│   ├── gallery/      # Gallery page sections
│   ├── news/         # News page sections
│   └── contact/      # Contact page sections
├── lib/              # Utilities, constants, data
│   ├── constants.ts  # School info constants
│   ├── utils.ts      # Helper functions
│   ├── emailjs.ts    # EmailJS helper
│   └── data/         # Static data files
└── public/           # Static assets
```

## 🌍 School Info

- **School**: Master Jesus Academy
- **Location**: GA East Municipal, Taifa, Greater Accra Region, Ghana
- **Levels**: Nursery, Primary (B1–B6), Junior High School (JHS 1–3)

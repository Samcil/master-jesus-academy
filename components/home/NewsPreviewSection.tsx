'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface NewsItem {
  title: string
  excerpt: string
  date: string
  category: string
}

const news: NewsItem[] = [
  {
    title: 'End of Term Prize-Giving Ceremony',
    excerpt:
      'Join us as we celebrate academic achievement and honour our outstanding students for their hard work and dedication this term.',
    date: 'December 15, 2024',
    category: 'Academic',
  },
  {
    title: 'Enrolment Open for 2025/2026 Academic Year',
    excerpt:
      'Applications are now being accepted for Nursery, Primary, and Junior High School. Secure your child\'s place at Master Jesus Academy today.',
    date: 'November 28, 2024',
    category: 'Admissions',
  },
  {
    title: 'Inter-School Sports Competition',
    excerpt:
      'Our students showcased exceptional talent and sportsmanship at the annual inter-school athletics and football competition.',
    date: 'November 10, 2024',
    category: 'Sports',
  },
]

const categoryColors: Record<string, string> = {
  Academic: 'bg-primary/10 text-primary',
  Admissions: 'bg-secondary/10 text-secondary-dark',
  Sports: 'bg-accent/10 text-accent-dark',
}

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function NewsPreviewSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Latest News &amp; Events</h2>
          <p className="section-subtitle mx-auto">
            Stay up to date with everything happening at Master Jesus Academy.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {news.map((n) => (
            <motion.div key={n.title} variants={item} className="card p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[n.category]}`}>
                  {n.category}
                </span>
                <span className="text-xs text-gray-400">{n.date}</span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">{n.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">{n.excerpt}</p>
              <Link href="/news" className="text-primary font-semibold text-sm hover:underline">
                Read More →
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Link href="/news" className="btn-outline">
            View All News →
          </Link>
        </div>
      </div>
    </section>
  )
}

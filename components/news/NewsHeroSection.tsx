'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import { newsItems } from '@/lib/data/news'

const categoryColors: Record<string, string> = {
  Academic: 'bg-blue-500',
  Sports: 'bg-green-500',
  Events: 'bg-purple-500',
  Admissions: 'bg-yellow-500',
  Community: 'bg-orange-500',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function NewsHeroSection() {
  const featured = newsItems[0]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center"
        >
          {/* Image — 60% */}
          <div className="lg:col-span-3 relative rounded-2xl overflow-hidden aspect-[16/10]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
            <span className="absolute top-4 left-4 bg-secondary text-primary-dark text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
              Featured
            </span>
          </div>

          {/* Text — 40% */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className={`${categoryColors[featured.category]} text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full`}>
                {featured.category}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-neutral-500">
                <Calendar className="w-4 h-4" />
                {formatDate(featured.date)}
              </span>
            </div>

            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight">
              {featured.title}
            </h2>

            <p className="text-neutral-600 leading-relaxed">
              {featured.excerpt}
            </p>

            <button className="btn-secondary self-start mt-2 group">
              Read Full Article
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

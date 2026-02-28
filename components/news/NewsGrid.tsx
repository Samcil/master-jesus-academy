'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import { newsItems, type NewsCategory } from '@/lib/data/news'

const categories: Array<NewsCategory | 'All'> = [
  'All',
  'Academic',
  'Sports',
  'Events',
  'Admissions',
  'Community',
]

const categoryBadgeColors: Record<NewsCategory, string> = {
  Academic: 'bg-blue-100 text-blue-700',
  Sports: 'bg-green-100 text-green-700',
  Events: 'bg-purple-100 text-purple-700',
  Admissions: 'bg-yellow-100 text-yellow-700',
  Community: 'bg-orange-100 text-orange-700',
}

const categoryOverlayColors: Record<NewsCategory, string> = {
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

export default function NewsGrid() {
  const [active, setActive] = useState<NewsCategory | 'All'>('All')

  const filtered = active === 'All'
    ? newsItems
    : newsItems.filter((item) => item.category === active)

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-max">
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === cat
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-neutral-600 hover:bg-primary-50 border border-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <LayoutGroup>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 group"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className={`absolute top-3 left-3 ${categoryOverlayColors[item.category]} text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full`}>
                      {item.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col gap-3">
                    <span className="flex items-center gap-1.5 text-sm text-neutral-400">
                      <Calendar className="w-4 h-4" />
                      {formatDate(item.date)}
                    </span>

                    <h3 className="font-serif text-lg font-bold text-primary leading-snug line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-1 text-secondary-dark font-semibold text-sm mt-auto cursor-pointer hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  )
}

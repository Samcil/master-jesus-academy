'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Star, Sprout, BookOpen, GraduationCap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { academicLevels } from '@/lib/data/academics'

const iconMap: Record<string, LucideIcon> = {
  Sprout,
  BookOpen,
  GraduationCap,
}

const colorMap: Record<string, string> = {
  accent: 'text-accent',
  primary: 'text-primary',
  secondary: 'text-secondary-600',
}

const bgMap: Record<string, string> = {
  accent: 'bg-accent-50',
  primary: 'bg-primary-50',
  secondary: 'bg-secondary-50',
}

export default function LevelTabsSection() {
  const [activeIdx, setActiveIdx] = useState(0)
  const active = academicLevels[activeIdx]

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-10">
          <h2 className="section-title mb-3">Our Academic Programmes</h2>
          <p className="section-subtitle mx-auto">
            Comprehensive education tailored to every stage of your child&apos;s development.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-0 mb-10">
          {academicLevels.map((level, i) => (
            <button
              key={level.id}
              onClick={() => setActiveIdx(i)}
              className={`relative px-6 py-3 text-base font-semibold transition-colors rounded-lg sm:rounded-none sm:first:rounded-l-lg sm:last:rounded-r-lg ${
                activeIdx === i
                  ? 'text-primary bg-white shadow-card'
                  : 'text-neutral-500 bg-neutral-100 hover:bg-neutral-200'
              }`}
            >
              {(() => { const Icon = iconMap[level.iconName]; return Icon ? <Icon className="w-5 h-5 inline mr-2" /> : null })()}
              {level.label}
              {activeIdx === i && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className={`rounded-2xl p-6 md:p-10 ${bgMap[active.color]} border border-neutral-200`}
          >
            {/* Age badge + description */}
            <div className="mb-8">
              <span
                className={`inline-block text-sm font-bold px-3 py-1 rounded-full mb-3 ${colorMap[active.color]} bg-white`}
              >
                {active.ageRange}
              </span>
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">{active.description}</p>
            </div>

            {/* Two-column lists */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Subjects */}
              <div>
                <h3 className="font-serif text-xl font-bold text-primary mb-4">Subjects Offered</h3>
                <ul className="space-y-2">
                  {active.subjects.map((subject) => (
                    <li key={subject} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${colorMap[active.color]}`} />
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="font-serif text-xl font-bold text-primary mb-4">Programme Highlights</h3>
                <ul className="space-y-2">
                  {active.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-gray-700">
                      <Star className="w-5 h-5 mt-0.5 shrink-0 text-secondary" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Curriculum */}
            <div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">Our Curriculum Approach</h3>
              <p className="text-gray-700 leading-relaxed">{active.curriculum}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

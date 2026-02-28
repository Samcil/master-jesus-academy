'use client'

import { motion } from 'framer-motion'
import {
  School,
  BookOpen,
  Monitor,
  Trophy,
  UtensilsCrossed,
  Heart,
  CheckCircle,
} from 'lucide-react'
import { facilities } from '@/lib/data/facilities'
import type { LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  School,
  BookOpen,
  Monitor,
  Trophy,
  UtensilsCrossed,
  Heart,
}

const colorStyles: Record<string, { border: string; icon: string; bg: string }> = {
  primary: {
    border: 'border-t-primary',
    icon: 'text-primary',
    bg: 'bg-primary-50',
  },
  accent: {
    border: 'border-t-accent',
    icon: 'text-accent',
    bg: 'bg-accent-50',
  },
  secondary: {
    border: 'border-t-secondary',
    icon: 'text-secondary-600',
    bg: 'bg-secondary-50',
  },
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function FacilitiesGrid() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Our World-Class Facilities</h2>
          <p className="section-subtitle mx-auto">
            Every aspect of our campus is designed to support academic excellence and student wellbeing.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {facilities.map((facility) => {
            const Icon = iconMap[facility.icon]
            const colors = colorStyles[facility.color]

            return (
              <motion.div
                key={facility.id}
                variants={cardVariants}
                className={`bg-white rounded-2xl border-t-4 ${colors.border} shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 p-6`}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${colors.bg} mb-5`}>
                  <Icon className={`w-7 h-7 ${colors.icon}`} />
                </div>

                <h3 className="font-serif text-xl font-bold text-primary-800 mb-3">
                  {facility.title}
                </h3>

                <p className="text-neutral-600 leading-relaxed mb-5">
                  {facility.description}
                </p>

                <ul className="space-y-2">
                  {facility.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-neutral-700">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 ${colors.icon}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

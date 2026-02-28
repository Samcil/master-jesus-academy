'use client'

import { motion } from 'framer-motion'
import { Church, BookOpen, HandHelping, Star, FlaskConical, Trophy } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface ValueBlock {
  icon: LucideIcon
  heading: string
  description: string
}

const values: ValueBlock[] = [
  {
    icon: Church,
    heading: 'Faith-Based Education',
    description:
      'Rooted in Christian principles, we nurture spiritual growth alongside academic learning.',
  },
  {
    icon: BookOpen,
    heading: 'Academic Excellence',
    description:
      'We set high standards and equip students with the tools to achieve outstanding results.',
  },
  {
    icon: HandHelping,
    heading: 'Community Service',
    description:
      'We instil a spirit of service, teaching students to give back and uplift their communities.',
  },
  {
    icon: Star,
    heading: 'Character Development',
    description:
      'Building integrity, discipline, and respect so every child grows into a responsible citizen.',
  },
  {
    icon: FlaskConical,
    heading: 'Innovation in Learning',
    description:
      'Embracing modern teaching methods and technology to prepare students for the future.',
  },
  {
    icon: Trophy,
    heading: 'Achievement & Recognition',
    description:
      'Celebrating milestones and rewarding effort to inspire a culture of continuous improvement.',
  },
]

export default function ValuesSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
      {/* Decorative overlay */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 right-10 w-48 h-48 border border-white/5 rounded-full" />
        <div className="absolute bottom-10 left-10 w-32 h-32 border border-white/5 rotate-45" />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            The principles that shape our community and guide every decision we make.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon
            return (
              <motion.div
                key={v.heading}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{v.heading}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

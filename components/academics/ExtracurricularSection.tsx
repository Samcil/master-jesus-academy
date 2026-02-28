'use client'

import { motion } from 'framer-motion'
import { Trophy, Timer, Palette, Theater, BookOpen, FlaskConical, Music, Lightbulb } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { extracurricular } from '@/lib/data/academics'

const iconMap: Record<string, LucideIcon> = {
  Trophy,
  Timer,
  Palette,
  Drama: Theater,
  BookOpen,
  FlaskConical,
  Music,
  Lightbulb,
}

export default function ExtracurricularSection() {
  return (
    <section className="section-padding bg-primary-dark">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Beyond the Classroom
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We nurture well-rounded individuals through a wide range of extracurricular activities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {extracurricular.map((activity, i) => {
            const Icon = iconMap[activity.iconName]
            return (
              <motion.div
                key={activity.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="bg-white rounded-2xl p-5 md:p-6 text-center shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                  {Icon && <Icon className="w-7 h-7 text-primary" />}
                </div>
                <h3 className="font-semibold text-primary mb-1">{activity.name}</h3>
                <p className="text-sm text-gray-500">{activity.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

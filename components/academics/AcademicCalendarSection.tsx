'use client'

import { motion } from 'framer-motion'
import { CalendarDays } from 'lucide-react'

const terms = [
  {
    term: 1,
    dates: 'September – December',
    events: ['Back to School', 'Prize-Giving Ceremony'],
  },
  {
    term: 2,
    dates: 'January – April',
    events: ['Mid-Year Examinations', 'Sports Day'],
  },
  {
    term: 3,
    dates: 'May – August',
    events: ['BECE (JHS 3)', 'Graduation Ceremony', 'Admissions'],
  },
] as const

export default function AcademicCalendarSection() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="section-title mb-3">Academic Calendar</h2>
          <p className="section-subtitle mx-auto">
            Our school year is organised into three terms, each packed with learning and memorable events.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {terms.map((t, i) => (
            <motion.div
              key={t.term}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="card p-6 md:p-8"
            >
              {/* Term badge */}
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-white font-bold text-lg mb-4">
                {t.term}
              </span>

              <h3 className="font-serif text-xl font-bold text-primary mb-1">Term {t.term}</h3>
              <p className="text-sm text-gray-500 mb-4">{t.dates}</p>

              <ul className="space-y-2">
                {t.events.map((event) => (
                  <li key={event} className="flex items-start gap-2 text-gray-700">
                    <CalendarDays className="w-5 h-5 mt-0.5 shrink-0 text-secondary" />
                    {event}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

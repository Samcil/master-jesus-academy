'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Sprout, BookOpen, GraduationCap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Level {
  Icon: LucideIcon
  title: string
  ages: string
  border: string
  iconColor: string
  description: string
}

const levels: Level[] = [
  {
    Icon: Sprout,
    title: 'Nursery',
    ages: 'Ages 2–4',
    border: 'border-t-primary',
    iconColor: 'text-primary',
    description:
      'Our nursery programme offers a warm, play-based learning environment where young children develop foundational skills through creative activities, songs, and guided exploration.',
  },
  {
    Icon: BookOpen,
    title: 'Primary',
    ages: 'Ages 5–11',
    border: 'border-t-secondary',
    iconColor: 'text-secondary',
    description:
      'The primary school curriculum builds strong literacy, numeracy, and scientific thinking skills. Students engage in interactive lessons aligned with the Ghana Education Service standards.',
  },
  {
    Icon: GraduationCap,
    title: 'Junior High',
    ages: 'Ages 12–15',
    border: 'border-t-accent',
    iconColor: 'text-accent',
    description:
      'Our JHS programme prepares students for the BECE examinations with rigorous academics, leadership opportunities, and career guidance to set them on the path to success.',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function SchoolLevelsSection() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Our Academic Programmes</h2>
          <p className="section-subtitle mx-auto">
            Three levels of education designed to grow with your child every step of the way.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {levels.map((level) => (
            <motion.div
              key={level.title}
              variants={cardVariant}
              className={`card border-t-4 ${level.border} p-8 flex flex-col hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <level.Icon className={`w-7 h-7 ${level.iconColor}`} />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{level.title}</h3>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 w-fit">
                {level.ages}
              </span>
              <p className="text-gray-600 leading-relaxed mb-6 flex-1">{level.description}</p>
              <Link href="/academics" className="text-primary font-semibold hover:underline text-sm">
                Learn More →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

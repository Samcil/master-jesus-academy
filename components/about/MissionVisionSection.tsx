'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Gem } from 'lucide-react'
import type { ReactNode } from 'react'

interface CardProps {
  icon: ReactNode
  title: string
  borderColor: string
  children: ReactNode
  delay: number
}

function Card({ icon, title, borderColor, children, delay }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`bg-white rounded-2xl shadow-card p-8 border-t-4 ${borderColor} hover:shadow-elevated hover:-translate-y-1 transition-all duration-300`}
    >
      <div className="mb-5">{icon}</div>
      <h3 className="font-serif text-2xl font-bold text-primary mb-4">{title}</h3>
      <div className="text-neutral-600 leading-relaxed">{children}</div>
    </motion.div>
  )
}

const coreValues = ['Excellence', 'Integrity', 'Faith', 'Discipline', 'Innovation', 'Community']

export default function MissionVisionSection() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">What Drives Us</h2>
          <p className="section-subtitle mx-auto">
            Our mission, vision, and values guide everything we do at Master Jesus Academy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            icon={<Target className="w-10 h-10 text-primary" />}
            title="Our Mission"
            borderColor="border-primary"
            delay={0.1}
          >
            <p>
              To provide quality, holistic education grounded in Christian values, equipping every
              child with the knowledge, skills, and character to excel in life.
            </p>
          </Card>

          <Card
            icon={<Eye className="w-10 h-10 text-secondary" />}
            title="Our Vision"
            borderColor="border-secondary"
            delay={0.2}
          >
            <p>
              To be the leading educational institution in Greater Accra, recognized for academic
              excellence, moral integrity, and community impact.
            </p>
          </Card>

          <Card
            icon={<Gem className="w-10 h-10 text-accent" />}
            title="Core Values"
            borderColor="border-accent"
            delay={0.3}
          >
            <ul className="grid grid-cols-2 gap-2">
              {coreValues.map((value) => (
                <li key={value} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                  {value}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}

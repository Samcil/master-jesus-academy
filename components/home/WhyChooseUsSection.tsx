'use client'

import { motion } from 'framer-motion'
import { School, BookOpen, Church, FlaskConical, Palette, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Feature {
  Icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  { Icon: School, title: 'Qualified Teachers', description: 'Experienced, dedicated educators passionate about student success.' },
  { Icon: BookOpen, title: 'Strong Curriculum', description: 'Fully aligned with the Ghana Education Service curriculum standards.' },
  { Icon: Church, title: 'Faith-Based Values', description: 'Character and spiritual development integrated into daily learning.' },
  { Icon: FlaskConical, title: 'Modern Facilities', description: 'Computer lab, library, and sports ground to support all-round learning.' },
  { Icon: Palette, title: 'Holistic Development', description: 'Sports, arts, and extra-curricular activities for every student.' },
  { Icon: Users, title: 'Caring Community', description: 'A safe, inclusive, and nurturing environment where every child thrives.' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-[#F8FAFC]">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Why Choose Master Jesus Academy?</h2>
          <p className="section-subtitle mx-auto">
            We provide a well-rounded education that prepares students for academic and personal excellence.
          </p>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map(({ Icon, title, description }) => (
            <motion.div key={title} variants={item} className="card p-8 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

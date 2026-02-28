'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const values = ['Discipline', 'Excellence', 'Faith', 'Innovation']

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}

export default function WelcomeSection() {
  return (
    <section id="welcome" className="section-padding bg-white relative">
      <div className="container-max grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — text */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title mb-6">Welcome to Our Academy</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Master Jesus Academy is a distinguished educational institution located in Taifa, Greater
            Accra Region. We are committed to providing every child with an exceptional learning
            experience that nurtures intellectual growth, builds character, and inspires a passion for
            lifelong learning.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our dedicated team of educators combines a rigorous academic curriculum aligned with the
            Ghana Education Service standards with faith-based values, ensuring students develop into
            well-rounded, confident individuals prepared for the challenges of tomorrow.
          </p>
        </motion.div>

        {/* Right — decorative card */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-10 flex flex-col items-center gap-6 shadow-card max-w-sm w-full">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-12 h-12 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-bold text-primary text-center">
              Master Jesus Academy
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {values.map((v) => (
                <span
                  key={v}
                  className="px-4 py-1.5 rounded-full text-sm font-medium bg-white text-primary shadow-sm"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

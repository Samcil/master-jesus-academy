'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-secondary to-amber-500">
      <motion.div
        className="container-max text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Ready to Join Our Family?
        </h2>
        <p className="text-white/90 text-lg max-w-xl mx-auto mb-8">
          Admissions are currently open for the upcoming academic year. Give your child the gift of
          quality education at Master Jesus Academy.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/admissions" className="btn-primary bg-primary-dark hover:bg-primary-900 text-white px-8 py-3">
            Apply Now
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all">
            Contact Us
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

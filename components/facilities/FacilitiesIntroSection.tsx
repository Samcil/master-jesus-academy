'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const stats = [
  { value: '6', label: 'Classrooms' },
  { value: '1', label: 'Library' },
  { value: '1', label: 'Computer Lab' },
  { value: '1', label: 'Sports Ground' },
  { value: '500+', label: 'Students Capacity' },
  { value: '100%', label: 'Safe & Secure' },
]

export default function FacilitiesIntroSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title mb-6">
              A Safe &amp; Inspiring Learning Environment
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              At Master Jesus Academy, we believe that a conducive learning environment is
              essential for academic success. Our campus is thoughtfully designed with modern
              facilities that support both academic learning and the holistic development of
              every child.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              From well-equipped classrooms and a stocked library to our sports ground and
              ICT laboratory, every facility is maintained to the highest standards of safety,
              cleanliness, and functionality.
            </p>
            <Link href="/contact" className="btn-primary">
              Book a School Tour
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right column — Stats grid */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-card">
              <Image
                src="/images/school/building.webp"
                alt="Master Jesus Academy building"
                width={960}
                height={640}
                className="h-56 w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-neutral-50 rounded-xl p-5 text-center border border-neutral-200 hover:border-primary-200 hover:shadow-soft transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-primary mb-1 font-serif">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-500 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

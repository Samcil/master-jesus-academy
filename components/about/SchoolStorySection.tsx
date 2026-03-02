'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Quote } from 'lucide-react'
import Image from 'next/image'
import { SCHOOL } from '@/lib/constants'

interface Milestone {
  year: string
  title: string
  description: string
}

const milestones: Milestone[] = [
  {
    year: '2010',
    title: 'Founded',
    description: 'Master Jesus Academy was established in Taifa with a vision to transform education.',
  },
  {
    year: '2012',
    title: 'First Graduating Class',
    description: 'Our first nursery class graduated, marking the beginning of a proud tradition.',
  },
  {
    year: '2015',
    title: 'Primary School Added',
    description: 'Expanded to include a full primary school programme from Class 1 through Class 6.',
  },
  {
    year: '2018',
    title: 'JHS Introduced',
    description: 'Junior High School was added, providing a complete basic education pathway.',
  },
  {
    year: 'Present',
    title: 'Growing Strong',
    description: 'Serving hundreds of families across the Greater Accra Region with excellence.',
  },
]

export default function SchoolStorySection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="section-title mb-6">Our Story</h2>

            <div className="space-y-4 text-neutral-600 leading-relaxed mb-8">
              <p>
                Master Jesus Academy was founded in the heart of Taifa, a vibrant community in the
                GA East Municipal District of the Greater Accra Region. What began as a small
                nursery school with a handful of dedicated teachers and eager learners has grown
                into a thriving educational institution.
              </p>
              <p>
                Over the years, we have expanded from Nursery through Primary to Junior High
                School, serving families who seek quality education rooted in strong moral and
                Christian values. Our commitment to nurturing the whole child — academically,
                spiritually, and socially — has made us a trusted name in our community.
              </p>
              <p>
                Today, Master Jesus Academy continues to invest in modern teaching methods,
                qualified staff, and a supportive learning environment that prepares every child
                for a bright future.
              </p>
            </div>

            {/* Quote callout */}
            <div className="bg-primary-50 border-l-4 border-secondary rounded-r-xl p-6 mb-10">
              <Quote className="w-8 h-8 text-secondary mb-2" />
              <blockquote className="text-primary-700 italic text-lg font-medium leading-relaxed">
                &ldquo;Education is the most powerful weapon which you can use to change the
                world.&rdquo;
              </blockquote>
              <cite className="block mt-2 text-sm text-primary-400 not-italic">
                — Nelson Mandela
              </cite>
            </div>

            {/* Milestones timeline */}
            <h3 className="font-serif text-xl font-bold text-primary mb-6">Key Milestones</h3>
            <div className="relative pl-8 border-l-2 border-primary-200 space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[calc(2rem+5px)] top-1 w-3 h-3 rounded-full bg-secondary border-2 border-white" />
                  <span className="text-sm font-semibold text-secondary">{m.year}</span>
                  <h4 className="font-semibold text-primary">{m.title}</h4>
                  <p className="text-neutral-500 text-sm">{m.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Location card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:sticky lg:top-32"
          >
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white shadow-elevated relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 border border-white/10 rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border border-white/5 rotate-45 translate-y-1/2 -translate-x-1/2" aria-hidden="true" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-secondary" />
                </div>

                <h3 className="font-serif text-2xl font-bold mb-2">Find Us</h3>
                <p className="text-white/70 mb-8">
                  Visit our campus in the heart of Taifa, Greater Accra Region.
                </p>

                <div className="mb-7 overflow-hidden rounded-xl border border-white/20">
                  <Image
                    src="/images/school/building.jpeg"
                    alt="Master Jesus Academy main building"
                    width={960}
                    height={640}
                    className="h-44 w-full object-cover"
                  />
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-white/90">Address</p>
                      <p className="text-white/70 text-sm">{SCHOOL.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-white/90">Phone</p>
                      {SCHOOL.phoneAliases.map((phone) => (
                        <p key={phone.alias} className="text-white/70 text-sm">
                          {phone.alias}: {phone.number}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-white/90">Email</p>
                      <p className="text-white/70 text-sm">{SCHOOL.email}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-sm text-white/60 mb-3">Levels Offered</p>
                  <div className="flex flex-wrap gap-2">
                    {SCHOOL.levels.map((level) => (
                      <span
                        key={level}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/90"
                      >
                        {level}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

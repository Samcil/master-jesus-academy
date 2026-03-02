'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Quote, Crown } from 'lucide-react'
import { SCHOOL } from '@/lib/constants'

const values = ['Discipline', 'Excellence', 'Faith', 'Innovation']

export default function WelcomeSection() {
  return (
    <section id="welcome" className="section-padding bg-white">
      <div className="container-max grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary/80">From the Principal&apos;s Desk</p>
          <h2 className="mt-4 section-title">Welcome to a School Built on Purpose</h2>

          <p className="mt-5 text-neutral-600 leading-relaxed">
            Master Jesus Academy serves families in Taifa and the wider Greater Accra community with a
            clear mission: to raise students who excel academically and grow into responsible, confident
            leaders.
          </p>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            Under the leadership of <strong>{SCHOOL.principal.name}</strong>, {SCHOOL.principal.role},
            the school continues to strengthen quality teaching, student support, and a faith-rooted
            culture that values character as much as results.
          </p>

          <div className="mt-6 rounded-2xl border border-primary/15 bg-primary-50 p-5">
            <div className="mb-2 flex items-center gap-2 text-primary">
              <Quote className="h-4 w-4" />
              <p className="text-xs font-semibold uppercase tracking-[0.16em]">Leadership message</p>
            </div>
            <p className="font-serif text-2xl leading-tight text-primary">
              &ldquo;Every child entrusted to us deserves structure, care, and the confidence to shine.&rdquo;
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {values.map((value) => (
              <span
                key={value}
                className="rounded-full border border-primary/15 bg-white px-4 py-1.5 text-sm font-medium text-primary shadow-sm"
              >
                {value}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[1.8rem] border border-primary/15 shadow-card">
            <Image
              src="/images/school/student-3.webp"
              alt="Students of Master Jesus Academy focused during class"
              width={900}
              height={700}
              className="h-[28rem] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-7 left-6 right-6 rounded-2xl border border-white/60 bg-white/95 p-4 shadow-card backdrop-blur-sm">
            <div className="flex items-center gap-2 text-secondary-700">
              <Crown className="h-4 w-4" />
              <p className="text-xs font-semibold uppercase tracking-wide">Owner & Principal</p>
            </div>
            <p className="mt-1 font-serif text-2xl text-primary">{SCHOOL.principal.name}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

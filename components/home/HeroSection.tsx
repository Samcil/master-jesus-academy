'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const stats = [
  { value: '500+', label: 'Students' },
  { value: '30+', label: 'Teachers' },
  { value: '15+', label: 'Years' },
  { value: '3', label: 'Levels' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-primary-dark">
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full bg-secondary/10 blur-3xl"
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-[10%] w-80 h-80 rounded-full bg-accent/10 blur-3xl"
        animate={{ y: [0, 20, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[15%] right-[25%] w-40 h-40 rounded-full bg-white/5 blur-2xl"
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span
          variants={fadeUp}
          className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm border border-white/10"
        >
          Welcome to Master Jesus Academy
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Nurturing Minds,
          <br />
          Building Futures
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10"
        >
          A premier educational institution in Taifa, Accra — providing world-class education from
          Nursery through Junior High School
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/admissions"
            className="btn-secondary text-base px-8 py-3"
          >
            Apply for Admission →
          </Link>
          <a
            href="#welcome"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
          >
            Learn More ↓
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={fadeUp}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-secondary">{stat.value}</p>
              <p className="text-sm text-white/70 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

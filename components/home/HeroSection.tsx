'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, ShieldCheck } from 'lucide-react'

const stats = [
  { value: '500+', label: 'Students' },
  { value: '30+', label: 'Dedicated Teachers' },
  { value: '15+', label: 'Years of Impact' },
  { value: 'Nursery–JHS', label: 'Full Learning Path' },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary-dark text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.22),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(5,150,105,0.24),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(20,83,45,0.94),rgba(20,83,45,0.65)_55%,rgba(20,83,45,0.25))]" />

      <div className="relative container-max py-20 md:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs tracking-[0.14em] uppercase">
              <MapPin className="h-3.5 w-3.5 text-secondary-300" />
              Taifa, Greater Accra
            </div>

            <h1 className="mt-6 font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
              A Distinctive
              <span className="block text-secondary-300">Learning Journey</span>
            </h1>

            <p className="mt-6 max-w-xl text-base text-white/80 sm:text-lg">
              Master Jesus Academy shapes confident learners with strong academics, faith-based values,
              and a nurturing school culture from Nursery through Junior High School.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/admissions" className="btn-secondary px-8 py-3 text-base">
                Apply for Admission
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/35 px-8 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Discover Our Story
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + idx * 0.08, duration: 0.45 }}
                  className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <p className="font-serif text-2xl text-secondary-200">{stat.value}</p>
                  <p className="text-sm text-white/75">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-xl"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 shadow-elevated">
              <Image
                src="/images/school/landing.webp"
                alt="Master Jesus Academy students walking with books in Taifa"
                width={980}
                height={740}
                className="h-[26rem] w-full object-cover md:h-[30rem]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-primary-dark/75 p-4 backdrop-blur-sm">
                <p className="font-serif text-2xl leading-tight">Nurturing minds with purpose and care</p>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 hidden w-52 overflow-hidden rounded-2xl border border-white/20 shadow-card sm:block">
              <Image
                src="/images/school/building.webp"
                alt="Master Jesus Academy main school building"
                width={520}
                height={400}
                className="h-36 w-full object-cover"
              />
            </div>

            <div className="absolute -top-8 -right-7 hidden max-w-[14rem] rounded-2xl border border-white/20 bg-white/95 p-4 text-primary shadow-card md:block">
              <div className="mb-2 flex items-center gap-2 text-secondary-600">
                <ShieldCheck className="h-4 w-4" />
                <span className="text-xs font-semibold tracking-wide uppercase">Trusted by families</span>
              </div>
              <p className="text-sm leading-relaxed text-neutral-700">
                A warm and disciplined environment focused on achievement, confidence, and character.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumb?: string
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-primary-dark">
      {/* Decorative geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 left-10 w-40 h-40 border border-white/10 rounded-full" />
        <div className="absolute top-1/4 right-16 w-24 h-24 border border-white/5 rotate-45" />
        <div className="absolute bottom-16 left-1/4 w-32 h-32 border border-white/8 rounded-full" />
        <div className="absolute -bottom-10 right-1/3 w-48 h-48 border-2 border-secondary/10 rotate-12 rounded-2xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.03] rounded-full" />
        <div className="absolute top-20 right-1/4 w-3 h-3 bg-secondary/30 rounded-full" />
        <div className="absolute bottom-24 right-20 w-2 h-2 bg-secondary/20 rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-4 py-16 md:py-20">
        {breadcrumb && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white/70 text-sm md:text-base tracking-wide mb-4"
          >
            {breadcrumb}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}

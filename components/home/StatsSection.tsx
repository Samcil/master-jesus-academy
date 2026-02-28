'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface StatItem {
  target: number
  suffix: string
  label: string
}

const stats: StatItem[] = [
  { target: 500, suffix: '+', label: 'Enrolled Students' },
  { target: 30, suffix: '+', label: 'Qualified Teachers' },
  { target: 15, suffix: '+', label: 'Years of Excellence' },
  { target: 98, suffix: '%', label: 'Parent Satisfaction' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary">
      {count}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#1B3A6B]">
      <motion.div
        className="container-max grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <Counter target={stat.target} suffix={stat.suffix} />
            <p className="text-white/80 mt-2 text-sm sm:text-base">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

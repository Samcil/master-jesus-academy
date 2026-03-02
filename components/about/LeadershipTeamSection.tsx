'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Crown, BookOpenText, HeartHandshake, Building2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SCHOOL } from '@/lib/constants'

interface TeamCard {
  title: string
  role: string
  details: string
  Icon: LucideIcon
  accent: string
}

const supportTeams: TeamCard[] = [
  {
    title: 'Academic Coordination Team',
    role: 'Curriculum & Quality Assurance',
    details:
      'Oversees lesson delivery, learning outcomes, and assessment standards across Nursery, Primary, and JHS.',
    Icon: BookOpenText,
    accent: 'text-primary',
  },
  {
    title: 'Student Welfare Team',
    role: 'Pastoral & Student Development',
    details:
      'Supports discipline, mentoring, and wellbeing so every student feels safe, encouraged, and included.',
    Icon: HeartHandshake,
    accent: 'text-accent',
  },
  {
    title: 'School Administration Team',
    role: 'Operations & Parent Relations',
    details:
      'Coordinates admissions, communication, and day-to-day systems that keep the school running smoothly.',
    Icon: Building2,
    accent: 'text-secondary-700',
  },
]

export default function LeadershipTeamSection() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title mb-4">Leadership</h2>
          <p className="section-subtitle mx-auto">
            Guided by clear vision and community-centered leadership.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-3xl border border-primary/15 bg-white p-8 shadow-card md:p-10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                <Crown className="h-3.5 w-3.5" />
                {SCHOOL.principal.role}
              </div>
              <h3 className="mt-3 font-serif text-4xl text-primary">{SCHOOL.principal.name}</h3>
              <p className="mt-3 max-w-2xl text-neutral-600">
                {SCHOOL.principal.name} leads Master Jesus Academy with a strong commitment to academic
                excellence, Christian values, and a nurturing school culture where every learner is
                encouraged to grow in confidence and character.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary/20 shadow-soft md:w-64">
              <Image
                src="/images/school/principal.webp"
                alt="Mrs Cecilia Amoh, Owner and Principal of Master Jesus Academy"
                width={520}
                height={620}
                className="h-72 w-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {supportTeams.map((team, idx) => (
            <motion.article
              key={team.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="rounded-2xl border border-primary/10 bg-white p-6 shadow-soft"
            >
              <team.Icon className={`h-7 w-7 ${team.accent}`} />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                {team.role}
              </p>
              <h4 className="mt-2 font-serif text-2xl text-primary">{team.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{team.details}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

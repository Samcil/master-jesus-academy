'use client'

import { motion } from 'framer-motion'

interface Leader {
  name: string
  title: string
  initials: string
  bio: string
  gradient: string
}

const leaders: Leader[] = [
  {
    name: 'Mrs. Abena Mensah',
    title: 'Head Teacher / Principal',
    initials: 'AM',
    bio: 'A passionate educator with over 15 years of experience in school leadership and curriculum development.',
    gradient: 'from-primary to-primary-light',
  },
  {
    name: 'Mr. Kofi Asante',
    title: 'Deputy Head Teacher',
    initials: 'KA',
    bio: 'Dedicated to fostering a disciplined and nurturing learning environment for every student.',
    gradient: 'from-secondary to-secondary-light',
  },
  {
    name: 'Mrs. Akua Boateng',
    title: 'Head of Academics',
    initials: 'AB',
    bio: 'An expert in modern pedagogy, committed to driving academic excellence across all levels.',
    gradient: 'from-accent to-accent-light',
  },
  {
    name: 'Mr. Emmanuel Darko',
    title: 'Head of Administration',
    initials: 'ED',
    bio: 'Ensures smooth operations and a well-organized school environment for staff and students alike.',
    gradient: 'from-primary-light to-accent',
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
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">Meet Our Leadership</h2>
          <p className="section-subtitle mx-auto">
            Dedicated professionals guiding Master Jesus Academy toward excellence every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-card p-8 text-center hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
            >
              {/* Initials avatar */}
              <div
                className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${leader.gradient} flex items-center justify-center mb-5`}
              >
                <span className="text-2xl font-bold text-white">{leader.initials}</span>
              </div>

              <h3 className="font-serif text-xl font-bold text-primary">{leader.name}</h3>
              <p className="text-secondary font-medium text-sm mt-1 mb-3">{leader.title}</p>
              <p className="text-neutral-500 text-sm leading-relaxed">{leader.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

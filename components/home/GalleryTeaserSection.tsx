'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const featuredImages = [
  {
    src: '/images/school/student-1.jpeg',
    alt: 'Master Jesus Academy students in classroom learning session',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    src: '/images/school/student-2.jpeg',
    alt: 'Master Jesus Academy pupils collaborating in class',
    className: '',
  },
  {
    src: '/images/school/student-3.jpeg',
    alt: 'Master Jesus Academy students during school activity',
    className: '',
  },
]

export default function GalleryTeaserSection() {
  return (
    <section className="section-padding bg-primary-950 text-white">
      <div className="container-max">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-secondary-300">School Life</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
              Real moments from
              <span className="block text-secondary-300">Master Jesus Academy</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/75 md:text-base">
            Every frame reflects our daily rhythm: focused learning, joyful collaboration, and a
            culture where every child is known and supported.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid gap-4 md:grid-cols-3 md:grid-rows-2"
        >
          {featuredImages.map((image) => (
            <motion.div
              key={image.src}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={900}
                height={680}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/65 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white/90">{image.alt}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Link href="/gallery" className="btn-secondary">
            Explore Full Gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

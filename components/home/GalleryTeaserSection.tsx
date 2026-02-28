'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const images = [
  { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800', alt: 'School classroom' },
  { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800', alt: 'Students learning' },
  { src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800', alt: 'Children in class' },
  { src: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800', alt: 'Education activities' },
  { src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800', alt: 'School campus' },
  { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800', alt: 'Students outdoors' },
]

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const item = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

export default function GalleryTeaserSection() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Life at Master Jesus Academy</h2>
          <p className="section-subtitle mx-auto">
            A glimpse into the vibrant everyday experiences of our students.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={item}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Link href="/gallery" className="btn-primary">
            View Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  )
}

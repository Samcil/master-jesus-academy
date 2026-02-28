'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { galleryImages, type GalleryCategory, type GalleryImage } from '@/lib/data/gallery'

const categories: { value: GalleryCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'classrooms', label: 'Classrooms' },
  { value: 'events', label: 'Events' },
  { value: 'sports', label: 'Sports' },
  { value: 'students', label: 'Students' },
]

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('all')
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null)

  const filtered =
    activeFilter === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter)

  const openLightbox = useCallback((image: GalleryImage) => {
    setLightbox(image)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setLightbox(null)
    document.body.style.overflow = ''
  }, [])

  const navigateLightbox = useCallback(
    (direction: 'prev' | 'next') => {
      if (!lightbox) return
      const currentIndex = filtered.findIndex((img) => img.id === lightbox.id)
      const nextIndex =
        direction === 'next'
          ? (currentIndex + 1) % filtered.length
          : (currentIndex - 1 + filtered.length) % filtered.length
      setLightbox(filtered[nextIndex])
    },
    [lightbox, filtered],
  )

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeFilter === cat.value
                  ? 'bg-secondary text-white shadow-glow'
                  : 'bg-white text-neutral-600 border border-neutral-200 hover:border-primary-300 hover:text-primary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image grid */}
        <LayoutGroup>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/30 transition-colors duration-300 flex items-end">
                    <p className="text-white text-sm font-medium p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      {image.alt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/80 hover:text-white z-10 p-2"
              aria-label="Close lightbox"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateLightbox('prev')
              }}
              className="absolute left-4 text-white/80 hover:text-white z-10 p-2"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Image */}
            <motion.div
              key={lightbox.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full max-h-[80vh] aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateLightbox('next')
              }}
              className="absolute right-4 text-white/80 hover:text-white z-10 p-2 mr-8"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Caption */}
            <p className="absolute bottom-6 text-white/90 text-center text-sm">
              {lightbox.alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

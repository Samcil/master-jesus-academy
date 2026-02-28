import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import GalleryGrid from '@/components/gallery/GalleryGrid'

export const metadata: Metadata = {
  title: 'Gallery | Master Jesus Academy',
  description:
    'Browse photos from life at Master Jesus Academy — classrooms, events, sports, and students.',
}

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Moments from life at Master Jesus Academy"
        breadcrumb="Home / Gallery"
      />
      <GalleryGrid />
    </>
  )
}

import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import FacilitiesIntroSection from '@/components/facilities/FacilitiesIntroSection'
import FacilitiesGrid from '@/components/facilities/FacilitiesGrid'

export const metadata: Metadata = {
  title: 'Facilities | Master Jesus Academy',
  description:
    'Explore the modern, safe facilities at Master Jesus Academy — classrooms, library, computer lab, sports ground, and more.',
}

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        title="Facilities"
        subtitle="A safe, modern environment designed for learning and growth"
        breadcrumb="Home / Facilities"
      />
      <FacilitiesIntroSection />
      <FacilitiesGrid />
    </>
  )
}

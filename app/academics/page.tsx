import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import LevelTabsSection from '@/components/academics/LevelTabsSection'
import ExtracurricularSection from '@/components/academics/ExtracurricularSection'
import AcademicCalendarSection from '@/components/academics/AcademicCalendarSection'

export const metadata: Metadata = {
  title: 'Academics | Master Jesus Academy',
  description:
    'Explore our academic programmes from Nursery through Junior High School. GES-aligned curriculum, extracurricular activities, and holistic student development.',
}

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        title="Academics"
        subtitle="World-class education from Nursery through Junior High School"
        breadcrumb="Home / Academics"
      />
      <LevelTabsSection />
      <ExtracurricularSection />
      <AcademicCalendarSection />
    </>
  )
}

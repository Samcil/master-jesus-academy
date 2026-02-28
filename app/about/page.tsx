import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import MissionVisionSection from '@/components/about/MissionVisionSection'
import SchoolStorySection from '@/components/about/SchoolStorySection'
import LeadershipTeamSection from '@/components/about/LeadershipTeamSection'
import ValuesSection from '@/components/about/ValuesSection'

export const metadata: Metadata = {
  title: 'About Us | Master Jesus Academy',
  description:
    'Learn about the story, mission, vision, and leadership team behind Master Jesus Academy in Taifa, Greater Accra Region.',
}

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Us"
        subtitle="Learn about our story, mission, and the people behind Master Jesus Academy"
        breadcrumb="Home / About"
      />
      <MissionVisionSection />
      <SchoolStorySection />
      <LeadershipTeamSection />
      <ValuesSection />
    </main>
  )
}

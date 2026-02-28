import HeroSection from '@/components/home/HeroSection'
import WelcomeSection from '@/components/home/WelcomeSection'
import SchoolLevelsSection from '@/components/home/SchoolLevelsSection'
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection'
import StatsSection from '@/components/home/StatsSection'
import NewsPreviewSection from '@/components/home/NewsPreviewSection'
import GalleryTeaserSection from '@/components/home/GalleryTeaserSection'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WelcomeSection />
      <SchoolLevelsSection />
      <WhyChooseUsSection />
      <StatsSection />
      <NewsPreviewSection />
      <GalleryTeaserSection />
      <CTASection />
    </main>
  )
}

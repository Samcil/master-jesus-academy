import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import NewsHeroSection from '@/components/news/NewsHeroSection'
import NewsGrid from '@/components/news/NewsGrid'

export const metadata: Metadata = {
  title: 'News & Events | Master Jesus Academy',
  description:
    'Stay up to date with the latest news, events, and announcements from Master Jesus Academy in Taifa, Accra.',
}

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News & Events"
        subtitle="Stay up to date with life at Master Jesus Academy"
        breadcrumb="Home / News & Events"
      />
      <NewsHeroSection />
      <NewsGrid />
    </>
  )
}

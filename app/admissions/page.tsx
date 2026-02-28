import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import AdmissionsStepsSection from '@/components/admissions/AdmissionsStepsSection'
import RequirementsSection from '@/components/admissions/RequirementsSection'
import FeesSection from '@/components/admissions/FeesSection'
import AdmissionsFormSection from '@/components/admissions/AdmissionsFormSection'

export const metadata: Metadata = {
  title: 'Admissions | Master Jesus Academy',
  description:
    'Apply to Master Jesus Academy — learn about our admissions process, requirements, fees, and submit your application online.',
}

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        title="Admissions"
        subtitle="Join our family — applications open for 2025/2026"
        breadcrumb="Home / Admissions"
      />
      <AdmissionsStepsSection />
      <RequirementsSection />
      <FeesSection />
      <AdmissionsFormSection />
    </>
  )
}

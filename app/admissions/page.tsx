import type { Metadata } from 'next'
import Image from 'next/image'
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
        subtitle="Join our family — applications open for 2026/2027"
        breadcrumb="Home / Admissions"
      />
      <section className="section-padding bg-white pb-0">
        <div className="container-max grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-2xl border border-neutral-200 shadow-card">
            <Image
              src="/images/school/admissions.webp"
              alt="Master Jesus Academy admissions information banner"
              width={820}
              height={1200}
              className="w-full object-cover"
              priority
            />
            <div className="absolute left-4 top-4 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white shadow-card">
              Updated Intake: 2026/2027
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-primary/80">Admissions Snapshot</p>
            <h2 className="mt-3 font-serif text-4xl text-primary">Everything you need to apply</h2>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              We currently admit learners into Creche, Nursery, Kindergarten, Primary, and Junior High
              School. The school environment is child-friendly and supported by ICT and library resources.
            </p>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Visit our admissions desk or submit the online application form below. Our team will guide
              you through assessment, placement, and enrolment.
            </p>
          </div>
        </div>
      </section>
      <AdmissionsStepsSection />
      <RequirementsSection />
      <FeesSection />
      <AdmissionsFormSection />
    </>
  )
}

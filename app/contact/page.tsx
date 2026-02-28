import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import ContactInfoSection from '@/components/contact/ContactInfoSection'
import ContactFormSection from '@/components/contact/ContactFormSection'

export const metadata: Metadata = {
  title: 'Contact Us | Master Jesus Academy',
  description:
    'Get in touch with Master Jesus Academy in Taifa, Accra. Enquire about admissions, fees, academics, and more.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you — get in touch today"
        breadcrumb="Home / Contact"
      />
      <ContactInfoSection />
      <ContactFormSection />
    </>
  )
}

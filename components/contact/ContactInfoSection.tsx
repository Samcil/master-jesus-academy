'use client'

import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'
import { SCHOOL } from '@/lib/constants'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Location',
    value: SCHOOL.address,
  },
  {
    icon: Mail,
    label: 'Email',
    value: SCHOOL.email,
    href: `mailto:${SCHOOL.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: SCHOOL.phone,
    href: `tel:${SCHOOL.phone.replace(/\s/g, '')}`,
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon–Fri 7:30 AM – 4:00 PM\nSat 9:00 AM – 12:00 PM',
  },
]

export default function ContactInfoSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title mb-4">Get In Touch</h2>
            <p className="section-subtitle mb-10">
              Have a question about admissions, fees, or school life? We&rsquo;re here to help.
              Reach out to us using any of the methods below.
            </p>

            <div className="flex flex-col gap-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-secondary-dark" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-primary font-medium hover:text-primary-light transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-neutral-700 whitespace-pre-line">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-card"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15881.847!2d-0.246933!3d5.659137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzknMzMuMSJOIDDCsDE0JzQ5LjAiVw!5e0!3m2!1sen!2sgh!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Master Jesus Academy location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

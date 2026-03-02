'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'
import { SCHOOL } from '@/lib/constants'

export default function ContactInfoSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title mb-4">Get In Touch</h2>
            <p className="section-subtitle mb-10">
              Admissions enquiries, school visits, and general questions are welcome.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary/20">
                  <MapPin className="h-5 w-5 text-secondary-dark" />
                </div>
                <div>
                  <p className="mb-0.5 text-sm font-semibold uppercase tracking-wide text-neutral-500">Location</p>
                  <p className="text-neutral-700">{SCHOOL.address}</p>
                  <p className="text-neutral-600 text-sm">{SCHOOL.postalCode}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary/20">
                  <Mail className="h-5 w-5 text-secondary-dark" />
                </div>
                <div>
                  <p className="mb-0.5 text-sm font-semibold uppercase tracking-wide text-neutral-500">Email</p>
                  <a
                    href={`mailto:${SCHOOL.email}`}
                    className="font-medium text-primary transition-colors hover:text-primary-light"
                  >
                    {SCHOOL.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary/20">
                  <Phone className="h-5 w-5 text-secondary-dark" />
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-neutral-500">Phone Lines</p>
                  <div className="space-y-1">
                    {SCHOOL.phoneAliases.map((phone) => (
                      <a
                        key={phone.alias}
                        href={`tel:${phone.tel}`}
                        className="block font-medium text-primary transition-colors hover:text-primary-light"
                      >
                        {phone.alias}: {phone.number}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary/20">
                  <Clock className="h-5 w-5 text-secondary-dark" />
                </div>
                <div>
                  <p className="mb-0.5 text-sm font-semibold uppercase tracking-wide text-neutral-500">Office Hours</p>
                  <p className="whitespace-pre-line text-neutral-700">Mon–Fri 7:30 AM – 4:00 PM{'\n'}Sat 9:00 AM – 12:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-primary/15 bg-primary-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary/80">Social Handles</p>
              <p className="mt-2 text-sm text-primary">
                Instagram/Facebook/YouTube: {SCHOOL.socialHandles.primary}
              </p>
              <p className="text-sm text-primary">X: {SCHOOL.socialHandles.x}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-card">
              <Image
                src="/images/school/street.webp"
                alt="Street marker of Master Jesus Academy"
                width={520}
                height={980}
                className="h-64 w-full object-cover object-center"
              />
              <div className="bg-neutral-50 px-4 py-3 text-sm text-neutral-700">
                Street marker and location reference: {SCHOOL.postalCode}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.35!2d-0.2575218!3d5.6620367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9fc6e1feeffd%3A0x9950ef57561e73d8!2sMaster%20Jesus%20Academy!5e0!3m2!1sen!2sgh!4v1709164800000"
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Master Jesus Academy location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

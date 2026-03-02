import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'
import Logo from '@/components/brand/Logo'
import { SCHOOL } from '@/lib/constants'

const quickLinks = [
  { label: 'About', href: '/about' },
  { label: 'Academics', href: '/academics' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Facilities', href: '/facilities' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'News', href: '/news' },
]

const levels = [
  { label: 'Nursery', desc: 'Ages 2–4' },
  { label: 'Primary', desc: 'Ages 5–11' },
  { label: 'Junior High School', desc: 'Ages 12–15' },
]

const socialPlatforms = [
  { name: 'Facebook', href: SCHOOL.socialLinks.facebook, icon: '/images/social/facebook.png' },
  { name: 'Instagram', href: SCHOOL.socialLinks.instagram, icon: '/images/social/instagram.png' },
  { name: 'YouTube', href: SCHOOL.socialLinks.youtube, icon: '/images/social/youtube.png' },
  { name: 'WhatsApp', href: SCHOOL.socialLinks.whatsapp, icon: '/images/social/whatsapp.png' },
  { name: 'TikTok', href: SCHOOL.socialLinks.tiktok, icon: '/images/social/tiktok.png' },
  { name: 'X', href: SCHOOL.socialLinks.x, icon: '/images/social/x.png' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/90">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 — Brand */}
          <div className="space-y-4">
            <Logo size="sm" showText light />
            <p className="text-secondary font-serif text-sm font-semibold italic">
              &ldquo;{SCHOOL.tagline}&rdquo;
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              A premier Nursery, Primary and Junior High School in Taifa, Greater Accra,
              dedicated to academic excellence and the holistic development of every child.
            </p>
            <p className="text-xs text-white/60">
              Follow us: <span className="text-secondary">{SCHOOL.socialHandles.primary}</span>
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {socialPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform.name}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs text-white/80 transition-colors hover:bg-secondary/20 hover:text-white"
                >
                  <Image src={platform.icon} alt={`${platform.name} favicon`} width={16} height={16} />
                  <span>{platform.name}</span>
                </a>
              ))}
            </div>
            <div className="text-xs text-white/70">
              <span className="text-white/50">X handle:</span> {SCHOOL.socialHandles.x}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h3 className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-secondary" />
                <span>{SCHOOL.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 shrink-0 text-secondary" />
                <a href={`mailto:${SCHOOL.email}`} className="hover:text-white transition-colors">
                  {SCHOOL.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 shrink-0 text-secondary" />
                <div className="space-y-1">
                  {SCHOOL.phoneAliases.map((phone) => (
                    <a
                      key={phone.alias}
                      href={`tel:${phone.tel}`}
                      className="block hover:text-white transition-colors"
                    >
                      {phone.alias}: {phone.number}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 shrink-0 text-secondary" />
                <span>Mon–Fri: 7:30 AM – 4:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 4 — School Levels */}
          <div>
            <h3 className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              School Levels
            </h3>
            <ul className="space-y-3">
              {levels.map((level) => (
                <li key={level.label} className="text-sm">
                  <span className="text-white font-medium">{level.label}</span>
                  <span className="text-white/50 ml-2">({level.desc})</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-max flex flex-col sm:flex-row items-center justify-between py-5 gap-2 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} {SCHOOL.name}. All rights reserved.</p>
          <p>Dedicated to excellence in education</p>
        </div>
      </div>
    </footer>
  )
}

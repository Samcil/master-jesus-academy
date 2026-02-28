import { feesInfo } from '@/lib/data/admissions'
import { CircleDot, Phone } from 'lucide-react'
import Link from 'next/link'

const levelColors: Record<string, string> = {
  Nursery: 'bg-accent text-white',
  'Primary (Basic 1–6)': 'bg-primary text-white',
  'Junior High School': 'bg-secondary text-primary-dark',
}

export default function FeesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-14">
          <h2 className="section-title mb-3">School Fees</h2>
          <p className="section-subtitle mx-auto">
            Our fees cover quality education, learning materials, and extracurricular activities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {feesInfo.map((fee) => (
            <div key={fee.level} className="card overflow-hidden flex flex-col">
              {/* Header */}
              <div className={`px-6 py-4 ${levelColors[fee.level] ?? 'bg-primary text-white'}`}>
                <h3 className="font-serif text-lg font-bold">{fee.level}</h3>
              </div>

              {/* Items */}
              <div className="p-6 flex-1">
                <ul className="space-y-3 mb-6">
                  {fee.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-neutral-700 text-sm">
                      <CircleDot className="w-4 h-4 text-secondary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-neutral-400 italic">
                  Contact school for current fees
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note + CTA */}
        <div className="text-center space-y-4">
          <p className="text-neutral-600 text-sm">
            Fees are payable per term. Sibling discounts available.
          </p>
          <Link href="/contact" className="btn-secondary inline-flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Contact us for detailed fee schedule
          </Link>
        </div>
      </div>
    </section>
  )
}

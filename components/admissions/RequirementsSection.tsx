import { requirements } from '@/lib/data/admissions'
import { CheckCircle, CalendarDays, AlertCircle } from 'lucide-react'

const importantDates = [
  { label: 'Admissions Open', value: 'Every term' },
  { label: 'Academic Year', value: 'September – August' },
  { label: 'Term 1 Begins', value: 'September' },
  { label: 'Registration Deadline', value: '2 weeks before term' },
  { label: 'Assessment Days', value: 'By appointment' },
]

export default function RequirementsSection() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-max">
        <div className="text-center mb-14">
          <h2 className="section-title mb-3">Admission Requirements</h2>
          <p className="section-subtitle mx-auto">
            Prepare the following documents and take note of our key dates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Required Documents */}
          <div className="card p-8">
            <h3 className="font-serif text-xl font-bold text-primary-dark mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-accent" />
              Required Documents
            </h3>
            <ul className="space-y-4">
              {requirements.map((req) => (
                <li key={req} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Dates */}
          <div className="space-y-6">
            <div className="card p-8">
              <h3 className="font-serif text-xl font-bold text-primary-dark mb-6 flex items-center gap-2">
                <CalendarDays className="w-6 h-6 text-secondary" />
                Important Dates
              </h3>
              <dl className="space-y-4">
                {importantDates.map((d) => (
                  <div key={d.label} className="flex justify-between items-center border-b border-neutral-100 pb-3 last:border-0">
                    <dt className="text-neutral-600 font-medium text-sm">{d.label}</dt>
                    <dd className="text-primary-dark font-semibold text-sm">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Note box */}
            <div className="rounded-xl bg-secondary-50 border border-secondary-200 p-5 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-secondary-600 shrink-0 mt-0.5" />
              <p className="text-sm text-secondary-800 font-medium leading-relaxed">
                Early applications are encouraged as spaces are limited.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

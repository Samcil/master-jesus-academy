import { admissionsSteps } from '@/lib/data/admissions'
import {
  FileText,
  ClipboardList,
  Upload,
  Calendar,
  CheckCircle,
  Star,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  FileText,
  ClipboardList,
  Upload,
  Calendar,
  CheckCircle,
  Star,
}

export default function AdmissionsStepsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-14">
          <h2 className="section-title mb-3">How to Apply</h2>
          <p className="section-subtitle mx-auto">
            Follow these simple steps to enrol your child at Master Jesus Academy.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-12 left-[calc(8.33%+1.25rem)] right-[calc(8.33%+1.25rem)] h-0.5 bg-primary-100" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-6">
            {admissionsSteps.map((s, i) => {
              const Icon = iconMap[s.icon]
              return (
                <div key={s.step} className="relative flex flex-col items-center text-center group">
                  {/* Mobile connecting line */}
                  {i < admissionsSteps.length - 1 && (
                    <div className="lg:hidden absolute top-24 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-primary-100 sm:hidden" />
                  )}

                  {/* Step circle */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-secondary flex items-center justify-center shadow-glow mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary-dark" />
                  </div>

                  {/* Step number */}
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white text-xs font-bold mb-3">
                    {s.step}
                  </span>

                  <h3 className="font-semibold text-primary-dark text-sm lg:text-base mb-2 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { CheckCircle, Loader2, AlertTriangle } from 'lucide-react'

const admissionSchema = z.object({
  childName: z.string().min(1, 'Child\'s full name is required'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  gender: z.enum(['Male', 'Female'], { error: 'Please select a gender' }),
  levelApplyingFor: z.string().min(1, 'Please select a level'),
  previousSchool: z.string().optional(),
  parentName: z.string().min(1, 'Parent/guardian name is required'),
  relationship: z.string().min(1, 'Please select relationship'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  email: z.string().email('Please enter a valid email address'),
  homeAddress: z.string().min(1, 'Home address is required'),
  additionalInfo: z.string().optional(),
})

type AdmissionFormData = z.infer<typeof admissionSchema>

const levels = [
  'Nursery',
  'Primary - B1',
  'Primary - B2',
  'Primary - B3',
  'Primary - B4',
  'Primary - B5',
  'Primary - B6',
  'JHS 1',
  'JHS 2',
  'JHS 3',
]

const relationships = ['Father', 'Mother', 'Guardian', 'Other']

export default function AdmissionsFormSection() {
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AdmissionFormData>({
    resolver: zodResolver(admissionSchema),
  })

  const onSubmit = async (data: AdmissionFormData) => {
    setSubmitState('loading')
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
        {
          child_name: data.childName,
          date_of_birth: data.dateOfBirth,
          gender: data.gender,
          level: data.levelApplyingFor,
          previous_school: data.previousSchool || 'N/A',
          parent_name: data.parentName,
          relationship: data.relationship,
          phone: data.phone,
          email: data.email,
          home_address: data.homeAddress,
          additional_info: data.additionalInfo || 'N/A',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
      )
      setSubmitState('success')
      reset()
    } catch {
      setSubmitState('error')
    }
  }

  if (submitState === 'success') {
    return (
      <section className="section-padding bg-neutral-50">
        <div className="container-max max-w-2xl text-center">
          <div className="card p-12">
            <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
            <h3 className="font-serif text-2xl font-bold text-primary-dark mb-3">
              Application Submitted!
            </h3>
            <p className="text-neutral-600 mb-6">
              Thank you for applying to Master Jesus Academy. We will contact you within 2 business days.
            </p>
            <button
              onClick={() => setSubmitState('idle')}
              className="btn-primary"
            >
              Submit Another Application
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-neutral-50" id="apply">
      <div className="container-max max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="section-title mb-3">Apply Online</h2>
          <p className="section-subtitle mx-auto">
            Complete the form below and we will contact you within 2 business days.
          </p>
        </div>

        <div className="card p-8 md:p-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
            {/* Child Information */}
            <fieldset>
              <legend className="font-serif text-lg font-bold text-primary-dark mb-5">
                Child&apos;s Information
              </legend>
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Child's Full Name" error={errors.childName?.message}>
                  <input {...register('childName')} className={inputCls(errors.childName)} placeholder="e.g. Kwame Mensah" />
                </Field>

                <Field label="Date of Birth" error={errors.dateOfBirth?.message}>
                  <input type="date" {...register('dateOfBirth')} className={inputCls(errors.dateOfBirth)} />
                </Field>

                <Field label="Gender" error={errors.gender?.message}>
                  <select {...register('gender')} className={inputCls(errors.gender)} defaultValue="">
                    <option value="" disabled>Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </Field>

                <Field label="Level Applying For" error={errors.levelApplyingFor?.message}>
                  <select {...register('levelApplyingFor')} className={inputCls(errors.levelApplyingFor)} defaultValue="">
                    <option value="" disabled>Select level</option>
                    {levels.map((l) => (
                      <option key={l} value={l}>{l}</option>
                    ))}
                  </select>
                </Field>

                <Field label="Previous School" error={errors.previousSchool?.message} className="md:col-span-2">
                  <input {...register('previousSchool')} className={inputCls()} placeholder="Optional" />
                </Field>
              </div>
            </fieldset>

            {/* Parent/Guardian Information */}
            <fieldset>
              <legend className="font-serif text-lg font-bold text-primary-dark mb-5">
                Parent / Guardian Information
              </legend>
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Full Name" error={errors.parentName?.message}>
                  <input {...register('parentName')} className={inputCls(errors.parentName)} placeholder="e.g. Ama Mensah" />
                </Field>

                <Field label="Relationship to Child" error={errors.relationship?.message}>
                  <select {...register('relationship')} className={inputCls(errors.relationship)} defaultValue="">
                    <option value="" disabled>Select relationship</option>
                    {relationships.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </Field>

                <Field label="Phone Number" error={errors.phone?.message}>
                  <input type="tel" {...register('phone')} className={inputCls(errors.phone)} placeholder="+233 XX XXX XXXX" />
                </Field>

                <Field label="Email Address" error={errors.email?.message}>
                  <input type="email" {...register('email')} className={inputCls(errors.email)} placeholder="parent@email.com" />
                </Field>

                <Field label="Home Address" error={errors.homeAddress?.message} className="md:col-span-2">
                  <textarea {...register('homeAddress')} rows={3} className={inputCls(errors.homeAddress)} placeholder="House/street, neighbourhood, city" />
                </Field>

                <Field label="Additional Information" error={errors.additionalInfo?.message} className="md:col-span-2">
                  <textarea {...register('additionalInfo')} rows={3} className={inputCls()} placeholder="Any special needs, medical conditions, or other information (optional)" />
                </Field>
              </div>
            </fieldset>

            {/* Error banner */}
            {submitState === 'error' && (
              <div className="rounded-xl bg-red-50 border border-red-200 p-4 flex items-center gap-3 text-red-700">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <p className="text-sm font-medium">
                  Something went wrong. Please try again or contact us directly.
                </p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={submitState === 'loading'}
              className="btn-secondary w-full text-lg py-4 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitState === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting…
                </>
              ) : (
                'Submit Application'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

/* ── Helpers ─────────────────────────────────── */

function Field({
  label,
  error,
  className,
  children,
}: {
  label: string
  error?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-neutral-700 mb-1.5">{label}</label>
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}

function inputCls(error?: { message?: string }) {
  return `w-full rounded-lg border ${
    error ? 'border-red-400 ring-1 ring-red-200' : 'border-neutral-300'
  } bg-white px-4 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary transition-colors`
}

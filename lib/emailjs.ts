import emailjs from '@emailjs/browser'

export const sendContactEmail = async (data: {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}) => {
  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
    process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || 'YOUR_CONTACT_TEMPLATE_ID',
    {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      to_name: 'Master Jesus Academy',
    },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
  )
}

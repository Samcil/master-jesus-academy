export const admissionsSteps = [
  { step: 1, icon: 'FileText', title: 'Download Application Form', description: 'Collect the application form from our school office or download it from this page.' },
  { step: 2, icon: 'ClipboardList', title: 'Complete Application', description: 'Fill out all sections of the form with accurate information about the child and parent/guardian.' },
  { step: 3, icon: 'Upload', title: 'Submit Required Documents', description: 'Submit the completed form with: birth certificate, previous school report (if applicable), passport photos (2), parent/guardian ID.' },
  { step: 4, icon: 'Calendar', title: 'Attend Assessment', description: 'The child attends a brief age-appropriate assessment to determine correct class placement.' },
  { step: 5, icon: 'CheckCircle', title: 'Receive Offer Letter', description: 'Successful applicants receive an offer letter with payment instructions and school supply list.' },
  { step: 6, icon: 'Star', title: 'Complete Enrolment', description: 'Pay the required fees, collect your uniform and supplies, and prepare for the first day!' },
]

export const requirements = [
  'Completed application form',
  'Original and photocopy of birth certificate',
  'Two recent passport-sized photographs',
  'Previous school report card (for Primary and JHS applicants)',
  'Parent/guardian national ID (photocopy)',
  'Immunisation record (for Nursery applicants)',
]

export const feesInfo = [
  { level: 'Nursery', items: ['Registration fee', 'Term fees', 'PTA levy', 'Uniform cost'] },
  { level: 'Primary (Basic 1–6)', items: ['Registration fee', 'Term fees', 'Exam levy', 'PTA levy', 'Uniform cost'] },
  { level: 'Junior High School', items: ['Registration fee', 'Term fees', 'BECE levy (JHS 3)', 'Exam levy', 'PTA levy', 'Uniform cost'] },
]

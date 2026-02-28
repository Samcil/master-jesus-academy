export const facilities = [
  {
    id: 'classrooms',
    icon: 'School',
    title: 'Modern Classrooms',
    description: 'Bright, well-ventilated classrooms equipped with whiteboards, adequate seating, and learning displays to create an optimal learning environment for all students.',
    features: ['Natural lighting', 'Adequate seating', 'Display boards', 'Clean environment'],
    color: 'primary',
  },
  {
    id: 'library',
    icon: 'BookOpen',
    title: 'School Library',
    description: 'A well-stocked library with a wide range of books, reading materials, and reference resources to encourage a love of reading and independent learning.',
    features: ['Wide book selection', 'Reading corners', 'Reference materials', 'Quiet study area'],
    color: 'accent',
  },
  {
    id: 'computer-lab',
    icon: 'Monitor',
    title: 'Computer Laboratory',
    description: 'Our ICT lab provides students with hands-on computer skills training, preparing them for the digital world with age-appropriate technology education.',
    features: ['Student workstations', 'Internet access', 'ICT curriculum', 'Supervised sessions'],
    color: 'secondary',
  },
  {
    id: 'sports',
    icon: 'Trophy',
    title: 'Sports Ground',
    description: 'A spacious outdoor sports area where students engage in physical education, football, athletics, and other team sports, promoting health and teamwork.',
    features: ['Football pitch', 'Athletics track', 'PE equipment', 'Team sports'],
    color: 'primary',
  },
  {
    id: 'canteen',
    icon: 'UtensilsCrossed',
    title: 'School Canteen',
    description: 'A clean, hygienic canteen providing nutritious, affordable meals and snacks to keep students energized throughout the school day.',
    features: ['Nutritious meals', 'Hygienic preparation', 'Affordable pricing', 'Varied menu'],
    color: 'accent',
  },
  {
    id: 'sickbay',
    icon: 'Heart',
    title: 'Sick Bay / First Aid',
    description: 'A dedicated first aid station with a trained staff member to attend to minor injuries and health concerns, ensuring student wellbeing throughout the day.',
    features: ['First aid supplies', 'Trained staff', 'Rest area', 'Parent notification'],
    color: 'secondary',
  },
] as const

export type Facility = (typeof facilities)[number]

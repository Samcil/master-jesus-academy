export const academicLevels = [
  {
    id: 'nursery',
    label: 'Nursery',
    iconName: 'Sprout',
    ageRange: 'Ages 2–4',
    color: 'accent',
    description:
      'Our Nursery programme provides a safe, stimulating environment where young children develop through play-based learning, building foundations in language, numeracy, and social skills.',
    subjects: [
      'Phonics & Literacy',
      'Basic Numeracy',
      'Creative Arts',
      'Music & Movement',
      'Social Studies',
      'Physical Education',
      'Bible Knowledge',
    ],
    highlights: [
      'Small class sizes',
      'Qualified early childhood educators',
      'Structured play activities',
      'Daily storytime',
      'Outdoor learning',
    ],
    curriculum:
      'We follow the Ghana Education Service (GES) Early Childhood Development curriculum, emphasizing holistic development through age-appropriate activities. Our nursery classrooms are designed with dedicated learning centres for literacy, numeracy, science exploration, and creative play. Each child receives individualised attention to ensure they reach key developmental milestones.',
  },
  {
    id: 'primary',
    label: 'Primary School',
    iconName: 'BookOpen',
    ageRange: 'Ages 5–11',
    color: 'primary',
    description:
      'Our Primary programme (Basic 1–6) delivers a comprehensive curriculum aligned with the Ghana Education Service standards, focusing on literacy, numeracy, and critical thinking.',
    subjects: [
      'English Language',
      'Mathematics',
      'Integrated Science',
      'Social Studies',
      'Religious & Moral Education',
      'Ghanaian Language',
      'Creative Arts & Design',
      'Computing',
      'Physical Education',
      'French',
    ],
    highlights: [
      'GES-aligned curriculum',
      'Regular assessments',
      'Parent-teacher meetings',
      'Extracurricular clubs',
      'Annual prize-giving',
    ],
    curriculum:
      'The Primary curriculum follows the new GES competency-based curriculum, developing 21st-century skills alongside core academic subjects. Students engage in project-based learning, collaborative activities, and regular formative assessments. Our dedicated teaching staff ensure every learner receives the support they need to excel.',
  },
  {
    id: 'jhs',
    label: 'Junior High School',
    iconName: 'GraduationCap',
    ageRange: 'Ages 12–15',
    color: 'secondary',
    description:
      'Our JHS programme (JHS 1–3) prepares students for the Basic Education Certificate Examination (BECE) with rigorous academic preparation and personal development.',
    subjects: [
      'English Language',
      'Mathematics',
      'Integrated Science',
      'Social Studies',
      'Religious & Moral Education',
      'Ghanaian Language',
      'French',
      'ICT',
      'Creative Arts',
      'Career Technology',
      'Physical Education',
    ],
    highlights: [
      'BECE preparation',
      'Career guidance',
      'Leadership programme',
      'Science fair',
      'Debating club',
    ],
    curriculum:
      'JHS students receive intensive BECE preparation alongside character development, career exploration, and leadership training. Our experienced teachers use proven exam strategies, regular mock tests, and personalised coaching to help every student achieve their best results and secure placement in top Senior High Schools.',
  },
] as const

export const extracurricular = [
  { iconName: 'Trophy', name: 'Football', description: 'Competitive school football team' },
  { iconName: 'Timer', name: 'Athletics', description: 'Track and field events' },
  { iconName: 'Palette', name: 'Art Club', description: 'Drawing, painting, crafts' },
  { iconName: 'Drama', name: 'Drama Club', description: 'Performance and public speaking' },
  { iconName: 'BookOpen', name: 'Reading Club', description: 'Library-based book discussions' },
  { iconName: 'FlaskConical', name: 'Science Club', description: 'Experiments and STEM activities' },
  { iconName: 'Music', name: 'Choir', description: 'School choir and music' },
  { iconName: 'Lightbulb', name: 'Chess Club', description: 'Strategic thinking and competitions' },
] as const

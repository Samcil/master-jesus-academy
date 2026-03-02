export type GalleryCategory = 'all' | 'classrooms' | 'events' | 'sports' | 'students'

export interface GalleryImage {
  id: number
  src: string
  alt: string
  category: Exclude<GalleryCategory, 'all'>
  width: number
  height: number
}

export const galleryImages: GalleryImage[] = [
  { id: 1, src: '/images/school/landing.jpeg', alt: 'Master Jesus Academy students holding books on the school street', category: 'students', width: 1200, height: 800 },
  { id: 2, src: '/images/school/building.jpeg', alt: 'Master Jesus Academy main campus building', category: 'classrooms', width: 1200, height: 800 },
  { id: 3, src: '/images/school/admissions.jpeg', alt: 'Admissions information banner for Master Jesus Academy', category: 'events', width: 800, height: 1200 },
  { id: 4, src: '/images/school/student-1.jpeg', alt: 'Classroom learning session at Master Jesus Academy', category: 'classrooms', width: 900, height: 700 },
  { id: 5, src: '/images/school/student-2.jpeg', alt: 'Students collaborating in an interactive lesson', category: 'students', width: 900, height: 700 },
  { id: 6, src: '/images/school/student-3.jpeg', alt: 'Students participating in activity-based learning', category: 'students', width: 900, height: 700 },
  { id: 7, src: '/images/school/student-4.jpeg', alt: 'Students in uniform on campus', category: 'students', width: 1200, height: 800 },
  { id: 8, src: '/images/school/student-6.jpeg', alt: 'Children engaged during school programme', category: 'students', width: 1200, height: 800 },
  { id: 9, src: '/images/school/student-7.jpeg', alt: 'Learners during a school day session', category: 'students', width: 1200, height: 800 },
  { id: 10, src: '/images/school/student-8.jpeg', alt: 'Master Jesus Academy students on campus', category: 'students', width: 1200, height: 800 },
  { id: 11, src: '/images/school/playing-1.jpeg', alt: 'Pupil enjoying playtime activities', category: 'sports', width: 1100, height: 760 },
  { id: 12, src: '/images/school/playing-2.jpeg', alt: 'Children having fun at school play area', category: 'sports', width: 1100, height: 760 },
  { id: 13, src: '/images/school/playing-3.jpeg', alt: 'Outdoor play and social interaction among pupils', category: 'sports', width: 1100, height: 760 },
  { id: 14, src: '/images/school/playing-4.jpeg', alt: 'Play-based learning moments in school', category: 'sports', width: 1100, height: 760 },
  { id: 15, src: '/images/school/playing-5.jpeg', alt: 'Students enjoying supervised playground activity', category: 'sports', width: 1100, height: 760 },
  { id: 16, src: '/images/school/playing-6.jpeg', alt: 'Kids at Master Jesus Academy during fun activity period', category: 'sports', width: 1100, height: 760 },
]

export type NewsCategory = 'Academic' | 'Sports' | 'Events' | 'Admissions' | 'Community'

export interface NewsItem {
  id: string
  title: string
  category: NewsCategory
  date: string
  excerpt: string
  content: string
  image: string
}

export const newsItems: NewsItem[] = [
  {
    id: 'admissions-2025',
    title: 'Enrolment Now Open for 2025/2026 Academic Year',
    category: 'Admissions',
    date: '2025-06-01',
    excerpt: 'We are pleased to announce that admissions are now open for all levels — Nursery, Primary, and Junior High School — for the upcoming academic year.',
    content: 'Master Jesus Academy is delighted to welcome applications for the 2025/2026 academic year. We have spaces available across all levels...',
    image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&auto=format&fit=crop',
  },
  {
    id: 'prize-giving-2024',
    title: 'Annual Prize-Giving Ceremony — Outstanding Results Celebrated',
    category: 'Academic',
    date: '2024-12-15',
    excerpt: 'Students who excelled academically and in extracurricular activities were celebrated at our annual prize-giving ceremony attended by parents and dignitaries.',
    content: 'The annual prize-giving ceremony was a proud moment for our school community...',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop',
  },
  {
    id: 'sports-day-2024',
    title: 'Inter-House Sports Day — Eagles House Takes the Trophy',
    category: 'Sports',
    date: '2024-11-20',
    excerpt: 'Our annual Inter-House Sports Day was a spectacular display of athletic talent, school spirit, and healthy competition among our four school houses.',
    content: 'Students from Nursery through JHS competed in various athletic events...',
    image: 'https://images.unsplash.com/photo-1546877625-cb8c71916608?w=800&auto=format&fit=crop',
  },
  {
    id: 'bece-results-2024',
    title: 'Exceptional BECE Results — 95% Pass Rate for Class of 2024',
    category: 'Academic',
    date: '2024-09-10',
    excerpt: 'We are immensely proud of our JHS 3 graduates who achieved outstanding results in the 2024 BECE examinations, with several earning aggregate scores in single digits.',
    content: 'The Class of 2024 has set a new benchmark for academic excellence at Master Jesus Academy...',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop',
  },
  {
    id: 'community-outreach',
    title: 'Community Health Walk — Students Give Back to Taifa',
    category: 'Community',
    date: '2024-08-05',
    excerpt: 'MJA students and teachers participated in a community health awareness walk through Taifa, promoting hygiene and healthy living in our neighbourhood.',
    content: 'As part of our commitment to community service, Master Jesus Academy organized a health awareness walk...',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop',
  },
  {
    id: 'new-library',
    title: 'New Library Books Donated — Expanding Our Reading Collection',
    category: 'Events',
    date: '2024-07-12',
    excerpt: 'Thanks to a generous donation from alumni and parents, our school library has expanded its collection with over 200 new books across all subjects and reading levels.',
    content: 'We are grateful to our parent-teacher association and alumni who contributed...',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop',
  },
]

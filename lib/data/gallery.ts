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
  { id: 1, src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop', alt: 'Students in a bright classroom', category: 'classrooms', width: 800, height: 600 },
  { id: 2, src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop', alt: 'Students studying together', category: 'students', width: 800, height: 533 },
  { id: 3, src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&auto=format&fit=crop', alt: 'Children in learning activity', category: 'students', width: 800, height: 600 },
  { id: 4, src: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&auto=format&fit=crop', alt: 'Academic achievement ceremony', category: 'events', width: 800, height: 534 },
  { id: 5, src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop', alt: 'School building exterior', category: 'classrooms', width: 800, height: 600 },
  { id: 6, src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop', alt: 'Students at sports day', category: 'sports', width: 800, height: 533 },
  { id: 7, src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop', alt: 'Group of students reading', category: 'students', width: 800, height: 533 },
  { id: 8, src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop', alt: 'Prize-giving ceremony', category: 'events', width: 800, height: 600 },
  { id: 9, src: 'https://images.unsplash.com/photo-1546877625-cb8c71916608?w=800&auto=format&fit=crop', alt: 'Children playing sports', category: 'sports', width: 800, height: 533 },
  { id: 10, src: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&auto=format&fit=crop', alt: 'Computer lab students', category: 'classrooms', width: 800, height: 600 },
  { id: 11, src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop', alt: 'Graduation ceremony', category: 'events', width: 800, height: 533 },
  { id: 12, src: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800&auto=format&fit=crop', alt: 'Students on sports field', category: 'sports', width: 800, height: 600 },
]

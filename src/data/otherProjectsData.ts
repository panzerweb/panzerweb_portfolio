import { OtherProjectType, type OtherProjects } from '@/types/types'

import BloodDrive from '@/assets/otherprojects/short-filmv1.png'
import CryOfBalintawak from '@/assets/otherprojects/short-filmv2.png'
import NocheBuena from '@/assets/otherprojects/mtv-spoof.png'

export const otherProjects: OtherProjects[] = [
  // Academic Projects
  {
    id: 1,
    name: 'Blood Drive',
    description:
      'A Short Film about a group of spies tasked together on a mission to bring down a certain enemy, only to discover a big secret',
    imageUrl: BloodDrive,
    category: [OtherProjectType.media, OtherProjectType.academic, OtherProjectType.creative],
    publishedAt: '2024',
  },
  {
    id: 2,
    name: 'MTV Spoof',
    description: "A MTV Spoof of Skusta Clee's Noche Buena. Produced for class requirements.",
    imageUrl: NocheBuena,
    category: [OtherProjectType.media, OtherProjectType.academic, OtherProjectType.creative],
    publishedAt: '2024',
  },
  {
    id: 3,
    name: 'Cry of Balintawak',
    description:
      'SS112 - Reading in Philippine History. Directed and story written by Christial Misal. Final project of RPH. A short dramatic act of the Cry of Balintawak.',
    imageUrl: CryOfBalintawak,
    category: [OtherProjectType.media, OtherProjectType.academic, OtherProjectType.creative],
    publishedAt: '2024',
  },
]

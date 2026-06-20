import { AchievementType, type Achievement } from '@/types/types'

// Import images

// Hackathon images
import NexusHackathon from '@/assets/achievements/nexus.png'
import Hackathon0 from '@/assets/achievements/Hackathon0.jpg'
import Hackathon1 from '@/assets/achievements/Hackathon1.jpg'
import Hackathon2 from '@/assets/achievements/Hackathon2.jpg'
import Hackathon3 from '@/assets/achievements/Hackathon3.jpg'
import Hackathon4 from '@/assets/achievements/Hackathon4.jpg'
import Hackathon5 from '@/assets/achievements/Hackathon5.jpg'
import Hackathon6 from '@/assets/achievements/Hackathon6.jpg'
import Hackathon7 from '@/assets/achievements/Hackathon7.jpg'

// Codex Images
import CodexPlaque from '@/assets/achievements/Codex_Plaque.jpg'
import CodexWorkshop1 from '@/assets/achievements/Codex_Workshop1.jpg'
import CodexWorkshop2 from '@/assets/achievements/Codex_Workshop2.jpg'
import CodexWorkshop3 from '@/assets/achievements/Codex_Workshop3.jpg'
// Techno Images
import TechnoCert from '@/assets/achievements/Techno_Cert.jpg'
import TechnoTop16 from '@/assets/achievements/Techno_Startup_Top16.jpg'
import Techno from '@/assets/achievements/Techno.jpg'

// CCNA Images
import CCNA from '@/assets/achievements/ccna.png'

// Base Build Images
import Base1 from '@/assets/achievements/Base_Ideathon1.jpg'
import Base2 from '@/assets/achievements/Base_Ideathon2.jpg'

export const achievements: Achievement[] = [
  {
    id: 1,
    name: 'Techstars Startup Hackathon Certificate',
    images: [NexusHackathon],
    description:
      'I got this certificate when I participated in my first ever hackathon. It was a great experience to meet with developers and mentors.',
    achievementType: AchievementType.certificate,
    date: 'September 2025',
    issuer: 'New Enegy Nexus Philippines',
    location: 'Davao City, Philippines',
    tags: [
      'Certificate',
      'Hackathon',
      'Startup',
      'Upskilling',
      'Network',
      'Mentorship',
      'Innovation',
    ],
  },
  {
    id: 2,
    name: 'Techstars Startup Weekend Social Impact Hackathon',
    images: [
      Hackathon0,
      Hackathon1,
      Hackathon2,
      Hackathon3,
      Hackathon4,
      Hackathon5,
      Hackathon6,
      Hackathon7,
    ],
    description:
      'My first ever hackathon event held in Davao City, Philippines. Meeting with skilled developers, mentors, deploying our startups and have taken part of a nationwide scale innovation.',
    achievementType: AchievementType.event,
    date: 'September 2025',
    issuer: 'New Enegy Nexus Philippines',
    location: 'Davao City, Philippines',
    tags: ['Hackathon', 'Startup', 'Upskilling', 'Network', 'Mentorship', 'Innovation'],
  },
  {
    id: 3,
    name: 'Plaque: Unveiling of systems of Codex',
    images: [CodexPlaque],
    description:
      'Got recognized as one the Developers of the IC-LSG DNSC Locker Rental Management System amongst all Codex Members.',
    achievementType: AchievementType.award,
    date: 'April 2026',
    issuer: 'IC-LSG: Codex',
    location: 'Panabo City, Philippines',
    tags: ['Plaque', 'Codex', 'DNSC LRMS', 'Student Developers'],
  },
  {
    id: 5,
    name: 'TechTalk Training: Building a Serverless App with AWS CDK and TypeScript',
    images: [CodexWorkshop1],
    description:
      'First Workshop in Codex where they taught us to navigate AWS and TypeScript to build a serverless application',
    achievementType: AchievementType.certificate,
    date: 'November 2024',
    issuer: 'IC-LSG: Codex',
    location: 'Panabo City, Philippines',
    tags: ['Workshop', 'Training', 'Codex', 'Serverless', 'Upskilling'],
  },
  {
    id: 6,
    name: 'Zero to Product Series 2025',
    images: [CodexWorkshop2],
    description:
      'A Series of Workshop for Codex members where we are taught about Web Applications, Digital Illustrations, and Mobile App Development.',
    achievementType: AchievementType.certificate,
    date: 'October 2025',
    issuer: 'IC-LSG: Codex',
    location: 'Panabo City, Philippines',
    tags: ['Workshop', 'Training', 'Codex', 'Series', 'Upskilling'],
  },
  {
    id: 7,
    name: 'From Development to Deployment: Next Steps After Building your System',
    images: [CodexWorkshop3],
    description:
      'A one day workshop that taught us what things to consider when deploying your application to the production stages.',
    achievementType: AchievementType.certificate,
    date: 'April 2026',
    issuer: 'IC-LSG: Codex',
    location: 'Panabo City, Philippines',
    tags: ['Workshop', 'Training', 'Codex', 'Deployment', 'Upskilling'],
  },
  {
    id: 8,
    name: 'LevelApp: Technopreneurship unveiling of startups',
    images: [TechnoCert, TechnoTop16, Techno],
    description:
      'Developed our startup StudyYa, multi-feature learning and productivity application. We garnered Top 16 finalist in the Pitching Competition.',
    achievementType: AchievementType.certificate,
    date: 'May 2026',
    issuer: 'Institute of Computing',
    location: 'Panabo City, Philippines',
    tags: [
      'Startup',
      'Innovation',
      'StudyYa',
      'Productivity',
      'Pitching Competition',
      'Certificate',
    ],
  },
  {
    id: 9,
    name: 'CCNA: Introduction to Networks',
    images: [CCNA],
    description:
      'My CCNA certificate after finishing the Introduction to Networks course during my second-year college time.',
    achievementType: AchievementType.certificate,
    date: 'June 2025',
    issuer: 'Cisco Networking Academy',
    location: 'Panabo City, Philippines',
    tags: ['Course', 'Networking', 'CCNA', 'Certificate'],
  },
  {
    id: 10,
    name: 'Base Build Philippines Ideathon',
    images: [Base1, Base2],
    description:
      'First Ideathon I participated where we learn about the basics and core concepts of blockchain. We also developed our fast mvp simple web applications using latest Agentic Coding resources.',
    achievementType: AchievementType.event,
    date: 'August 2025',
    issuer: 'Base Build Philippines',
    location: 'Panabo City, Philippines',
    tags: ['Ideathon', 'Mentorship', 'Blockchain', 'AI', 'Collaboration'],
  },
]

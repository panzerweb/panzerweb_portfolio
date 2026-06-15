import { TechCategory, type TechStacks, type UserProfile } from '@/types/types'
import personalPic from '@/assets/pic1.jfif'

export const userProfileData: UserProfile = {
  name: 'Romeo Selwyn Villar',
  ign: 'Panzerweb',
  profile: personalPic,
  role: ['Frontend Developer', 'Mobile App Developer', 'Digital Artist', 'UI/UX Designer'],
  briefDescription:
    'A Web and Mobile App Developer based on Philippines building scalable and modern softwares.',
  fullDescription:
    'I am currently a BSIT Student and a Student Developer focused on building and developing scalable, responsive, and modern software applications. I mainly work with Flutter, VueJS, FastAPI, TypeScript, Python, Dart, and PostgreSQL to create responsive interfaces, interactive dashboards, and basic management systems.',
  nonTechDescription:
    'When not coding, I indulge myself in doing some graphical outputs such as Pixel Art, Graphic Designing, and UI/UX Designing. System Design is what I am also prioritizing in this modern era of AI to always equip myself with a powerful weapon to design systems that are scalable and modern.',
  region: 'Region XI',
  province: 'Davao del Norte',
  city: 'Panabo City',
  barangay: 'San Francisco',
}

export const currentTechStack: TechStacks[] = [
  // Frontend Tech Stack
  {
    id: 1,
    name: 'VueJS',
    category: TechCategory.frontend,
  },
  {
    id: 2,
    name: 'Flutter',
    category: TechCategory.frontend,
  },
  {
    id: 3,
    name: 'TailwindCSS',
    category: TechCategory.frontend,
  },
  {
    id: 4,
    name: 'Bootstrap5',
    category: TechCategory.frontend,
  },
  {
    id: 5,
    name: 'TypeScript',
    category: TechCategory.frontend,
  },
  {
    id: 6,
    name: 'JavaScript',
    category: TechCategory.frontend,
  },
  {
    id: 7,
    name: 'Dart',
    category: TechCategory.frontend,
  },

  // Backend and Database Tech Stack
  {
    id: 8,
    name: 'FastAPI',
    category: TechCategory.backend,
  },
  {
    id: 9,
    name: 'Django',
    category: TechCategory.backend,
  },
  {
    id: 10,
    name: 'Laravel',
    category: TechCategory.backend,
  },
  {
    id: 11,
    name: 'Python',
    category: TechCategory.backend,
  },
  {
    id: 12,
    name: 'Php',
    category: TechCategory.backend,
  },
  {
    id: 13,
    name: 'PostgreSQL',
    category: TechCategory.backend,
  },
  {
    id: 14,
    name: 'MySQL',
    category: TechCategory.backend,
  },
  {
    id: 15,
    name: 'Supabase',
    category: TechCategory.backend,
  },
  {
    id: 16,
    name: 'SQLite',
    category: TechCategory.backend,
  },
  {
    id: 17,
    name: 'NodeJS',
    category: TechCategory.backend,
  },

  // Tools and Platforms Tech Stack
  {
    id: 18,
    name: 'Git/Github',
    category: TechCategory.tools,
  },
  {
    id: 19,
    name: 'Vercel',
    category: TechCategory.tools,
  },
  {
    id: 20,
    name: 'Render',
    category: TechCategory.tools,
  },
  {
    id: 21,
    name: 'VSCode',
    category: TechCategory.tools,
  },
  {
    id: 22,
    name: 'Vite',
    category: TechCategory.tools,
  },
  {
    id: 23,
    name: 'Postman',
    category: TechCategory.tools,
  },

  // Multimedia Tech Stack
  {
    id: 24,
    name: 'Figma',
    category: TechCategory.multimedia,
  },
  {
    id: 25,
    name: 'Aseprite',
    category: TechCategory.multimedia,
  },
  {
    id: 26,
    name: 'Libresprite',
    category: TechCategory.multimedia,
  },
  {
    id: 27,
    name: 'Canva',
    category: TechCategory.multimedia,
  },
  {
    id: 28,
    name: 'Adobe Lightroom',
    category: TechCategory.multimedia,
  },
  {
    id: 29,
    name: 'Davinci Resolve',
    category: TechCategory.multimedia,
  },
  {
    id: 30,
    name: 'Capcut',
    category: TechCategory.multimedia,
  },

  // Machine Learning Tech Stack
  {
    id: 31,
    name: 'Google Colab',
    category: TechCategory.machineLearning,
  },
  {
    id: 32,
    name: 'Scikit Learn',
    category: TechCategory.machineLearning,
  },
  {
    id: 33,
    name: 'Python Pandas',
    category: TechCategory.machineLearning,
  },
  {
    id: 34,
    name: 'Python NumPy',
    category: TechCategory.machineLearning,
  },
  {
    id: 35,
    name: 'Seaborn',
    category: TechCategory.machineLearning,
  },
  {
    id: 36,
    name: 'Matplotlib',
    category: TechCategory.machineLearning,
  },
]

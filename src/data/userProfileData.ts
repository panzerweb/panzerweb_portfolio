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
  contactNumber: '09090774336',
  email: 'selwynvillar@gmail.com',
}

export const currentTechStack: TechStacks[] = [
  // Frontend Tech Stack
  {
    name: 'VueJS',
    category: TechCategory.frontend,
  },
  {
    name: 'Flutter',
    category: TechCategory.frontend,
  },
  {
    name: 'TailwindCSS',
    category: TechCategory.frontend,
  },
  {
    name: 'Bootstrap5',
    category: TechCategory.frontend,
  },
  {
    name: 'TypeScript',
    category: TechCategory.frontend,
  },
  {
    name: 'JavaScript',
    category: TechCategory.frontend,
  },
  {
    name: 'Dart',
    category: TechCategory.frontend,
  },

  // Backend and Database Tech Stack
  {
    name: 'FastAPI',
    category: TechCategory.backend,
  },
  {
    name: 'Laravel',
    category: TechCategory.backend,
  },
  {
    name: 'Python',
    category: TechCategory.backend,
  },
  {
    name: 'Php',
    category: TechCategory.backend,
  },
  {
    name: 'PostgreSQL',
    category: TechCategory.backend,
  },
  {
    name: 'MySQL',
    category: TechCategory.backend,
  },
  {
    name: 'Supabase',
    category: TechCategory.backend,
  },
  {
    name: 'SQLite',
    category: TechCategory.backend,
  },

  // Tools and Platforms Tech Stack
  {
    name: 'Git/Github',
    category: TechCategory.tools,
  },
  {
    name: 'Vercel',
    category: TechCategory.tools,
  },
  {
    name: 'Render',
    category: TechCategory.tools,
  },
  {
    name: 'VSCode',
    category: TechCategory.tools,
  },
  {
    name: 'Vite',
    category: TechCategory.tools,
  },
  {
    name: 'Postman',
    category: TechCategory.tools,
  },

  // Multimedia Tech Stack
  {
    name: 'Figma',
    category: TechCategory.multimedia,
  },
  {
    name: 'Aseprite',
    category: TechCategory.multimedia,
  },
  {
    name: 'Libresprite',
    category: TechCategory.multimedia,
  },
  {
    name: 'Canva',
    category: TechCategory.multimedia,
  },
  {
    name: 'Adobe Lightroom',
    category: TechCategory.multimedia,
  },
  {
    name: 'Davinci Resolve',
    category: TechCategory.multimedia,
  },
  {
    name: 'Capcut',
    category: TechCategory.multimedia,
  },

  // Machine Learning Tech Stack
  // {
  //   name: 'Google Colab',
  //   category: TechCategory.machineLearning,
  // },
  // {
  //   name: 'Scikit Learn',
  //   category: TechCategory.machineLearning,
  // },
  // {
  //   name: 'Python Pandas',
  //   category: TechCategory.machineLearning,
  // },
  // {
  //   name: 'Python NumPy',
  //   category: TechCategory.machineLearning,
  // },
  // {
  //   name: 'Seaborn',
  //   category: TechCategory.machineLearning,
  // },
  // {
  //   name: 'Matplotlib',
  //   category: TechCategory.machineLearning,
  // },
]

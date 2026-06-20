import { ProjectType, type Projects, type TechStacks } from '@/types/types'
import { currentTechStack } from './userProfileData'

// Import Projects
import Bale from '@/assets/Projects/Bale.png'
import RFID from '@/assets/Projects/Attendance.png'
import LRMS from '@/assets/Projects/Locker.png'
import PyTodo from '@/assets/Projects/PyTodo.png'
import Taskenture from '@/assets/Projects/Taskenture.png'
import UtangLista from '@/assets/Projects/UtangLista.png'
import Aniblur from '@/assets/Projects/Aniblur.png'
import DeepCoderr from '@/assets/Projects/DeepCoderr.png'

// Helper to easily fetch the tech stacks of a project
export function findTechStack(name: string): TechStacks {
  return currentTechStack.find((t) => t.name === name)!
}

export const currentProjects: Projects[] = [
  {
    id: 1,
    name: 'Bale: Community Driven Geocommerce with POS Feature',
    coverFile: Bale,
    description:
      'An innovative ecommerce mobile application that supports a location-first browsing experience for customers, and a community-driven feature that creates an interconnected network of community amongst local businesses and customers. Enhancing the local economic growth and user shopping experience of customers.',
    techstack: [
      findTechStack('Flutter'),
      findTechStack('VueJS'),
      findTechStack('TailwindCSS'),
      findTechStack('TypeScript'),
      findTechStack('Dart'),
      findTechStack('FastAPI'),
      findTechStack('Python'),
      findTechStack('PostgreSQL'),
      findTechStack('Supabase'),
      findTechStack('Google Colab'),
      findTechStack('Scikit Learn'),
      findTechStack('Python Pandas'),
      findTechStack('Python NumPy'),
      findTechStack('Seaborn'),
      findTechStack('Matplotlib'),
    ],
    githubRepo: 'https://github.com/panzerweb/bale_commerce_frontend',
    isDeployed: false,
    category: ProjectType.main,
    publishedAt: '2026',
  },
  {
    id: 2,
    name: 'DNSC RFID Attendance Management System',
    coverFile: RFID,
    description:
      'A seamless RFID scanning integration for an attendance management system that allows student government to easily manage and track attendance of students in every event.',
    techstack: [
      findTechStack('Laravel'),
      { name: 'Blade' },
      findTechStack('Php'),
      findTechStack('JavaScript'),
      findTechStack('Vite'),
      findTechStack('TailwindCSS'),
      findTechStack('MySQL'),
    ],
    githubRepo: '',
    isDeployed: true,
    category: ProjectType.main,
    publishedAt: '2026',
  },
  {
    id: 3,
    name: 'DNSC Locker Rental Management System',
    coverFile: LRMS,
    description:
      'A web application for students to seamlessly rent a locker within school grounds. Developed for remote monitoring of available lockers, and current active subscriptions of a student.',
    techstack: [
      findTechStack('Flutter'),
      findTechStack('Django'),
      findTechStack('Dart'),
      findTechStack('Python'),
      findTechStack('MySQL'),
    ],
    githubRepo: 'https://github.com/panzerweb/dnsc_locker',
    isDeployed: true,
    category: ProjectType.main,
    publishedAt: '2026',
  },
  {
    id: 4,
    name: 'PyTodo: A Rule-Based Voice Command Window Startup CLI Todo Application',
    coverFile: PyTodo,
    description:
      'A simple, and efficient rule-based voice command CLI todo application that runs on every device startup to headstart your day and be productive. Simply command the program, and manage your tasks.',
    techstack: [
      findTechStack('Python'),
      findTechStack('SQLite'),
      { name: 'SpeechRecognition' },
      { name: 'Google Web Speech API' },
    ],
    githubRepo: 'https://github.com/panzerweb/pytodo',
    isDeployed: true,
    category: ProjectType.side,
    publishedAt: '2026',
  },
  {
    id: 5,
    name: 'Taskenture: Gamified Todo Web Application',
    coverFile: Taskenture,
    description:
      'A Gamified Todo Web Application for managing task with corresponding rewards and achievements. This web application is inspired by Habitica, to which it rewards users with gold, diamonds by completing their various progresses, and allow users to buy items in the shops. A true gamified Habitica inspired web application project.',
    techstack: [
      findTechStack('Laravel'),
      findTechStack('Php'),
      findTechStack('JavaScript'),
      findTechStack('Bootstrap5'),
      findTechStack('MySQL'),
    ],
    githubRepo: 'https://github.com/panzerweb/taskentureui',
    isDeployed: false,
    category: ProjectType.main,
    publishedAt: '2024',
  },
  {
    id: 6,
    name: 'UtangLista: Retail Store Debt Tracker Management System',
    coverFile: UtangLista,
    description:
      'A powerful yet straightforward debt tracker system specially built for MSMEs in a local environment setting. This is originally built for a small retail store in the Philippines called Sari-Sari stores.',
    techstack: [
      findTechStack('JavaScript'),
      findTechStack('Php'),
      findTechStack('Bootstrap5'),
      findTechStack('MySQL'),
    ],
    githubRepo: 'https://github.com/panzerweb/utanglista',
    isDeployed: false,
    category: ProjectType.main,
    publishedAt: '2025',
  },
  {
    id: 7,
    name: 'Aniblur: Anime Character Guessing Game',
    coverFile: Aniblur,
    description:
      'A simple anime guessing game for anime lovers, it relies on collecting JikanAPI and its MyAnimeList data to render the necessary components for the website.',
    techstack: [findTechStack('JavaScript'), findTechStack('Bootstrap5'), findTechStack('Vercel')],
    githubRepo: 'https://github.com/panzerweb/Aniblur',
    isDeployed: true,
    category: ProjectType.side,
    publishedAt: '2026',
  },
  {
    id: 8,
    name: 'DeepCoderr: Multi-Feature Todo Application',
    coverFile: DeepCoderr,
    description:
      'A fun and interactive web-based todo application that has various simple features such as Timer, Todo List, Music Player, Avatar Upload. Especially helpful for users that want to just enjoy the music while doing productivity work.',
    techstack: [findTechStack('JavaScript'), findTechStack('Bootstrap5'), findTechStack('Vercel')],
    githubRepo: 'https://github.com/panzerweb/DeepCoderr',
    isDeployed: true,
    category: ProjectType.side,
    publishedAt: '2026',
  },
]

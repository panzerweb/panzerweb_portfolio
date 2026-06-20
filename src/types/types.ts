// Enums
export enum TechCategory {
  frontend,
  backend,
  tools,
  multimedia,
  machineLearning,
}
export enum ProjectType {
  main,
  side,
}

export enum WorkType {
  hybrid,
  onsite,
  remote,
}

export enum OtherProjectType {
  academic,
  media,
  creative,
  research,
}

export enum AchievementType {
  certificate,
  event,
  award,
}

// Interfaces

// UserProfile Interface
export interface UserProfile {
  name: string
  ign: string
  profile: string
  role: string[]
  briefDescription: string
  fullDescription: string
  nonTechDescription: string
  region: string
  province: string
  city: string
  barangay: string
}

// Coding Project Tech Stack Interface
export interface TechStacks {
  id?: number
  name: string
  category?: TechCategory
}

// Coding Projects Interface
export interface Projects {
  id: number
  name: string
  coverFile: string
  description: string
  techstack: TechStacks[]
  githubRepo: string
  isDeployed: boolean
  category: ProjectType
  publishedAt: string
}

// Experience Interface
export interface Experiences {
  title: string
  location: string
  dateRange: string
  country: string
  region: string
  province: string
  type: WorkType
  description: string
}

// Other Projects Interface
export interface OtherProjects {
  id: number
  name: string
  imageUrl: string
  description: string
  techstack?: string[]
  url?: string
  category: OtherProjectType[]
  publishedAt: string
}

// Achievements Interface
export interface Achievement {
  id: number
  name: string
  images: string[]
  description: string
  date: string
  achievementType: AchievementType
  tags: string[]
  location?: string
  issuer?: string
  link?: string
}

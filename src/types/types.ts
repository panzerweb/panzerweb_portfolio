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
  contactNumber: string
  email: string
}

// Education
export type EducationalLevel =
  | 'elementary'
  | 'junior_high_school'
  | 'senior_high_school'
  | 'college'
  | 'postgraduate'

export interface AcademicAchievement {
  title: string
  description?: string
  year?: number
}

export interface EducationalBackground {
  schoolName: string
  educationalLevel: EducationalLevel
  // Optional because elementary and some high schools
  // do not necessarily have a degree or program.
  degreeOrProgram?: string
  startYear?: number
  endYear?: number
  // Indicates whether the student is still studying.
  isCurrentlyEnrolled?: boolean
  // A school can have multiple academic achievements.
  relevantAcademicAchievements?: AcademicAchievement[]
}

// Coding Project Tech Stack Interface
export interface TechStacks {
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
  description: string[]
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

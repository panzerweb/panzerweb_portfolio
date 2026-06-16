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

// Interfaces
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

export interface TechStacks {
  id: number
  name: string
  category: TechCategory
}

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

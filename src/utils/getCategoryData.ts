import { ProjectType } from '@/types/types'

export const getCategoryData = (type: ProjectType) => {
  switch (type) {
    case ProjectType.main:
      return {
        class: 'text-cyan-400 border-cyan-400',
        text: 'Main',
      }
    case ProjectType.side:
      return {
        class: 'text-purple-400 border-purple-400',
        text: 'Side',
      }
    default:
      return {
        class: 'text-gray-400 border-gray-400',
        text: 'Default',
      }
  }
}

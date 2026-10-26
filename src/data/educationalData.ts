import type { EducationalBackground } from '@/types/types'

export const education: EducationalBackground[] = [
  {
    schoolName: 'Sunbeam Christian School of Panabo',
    educationalLevel: 'elementary',
    startYear: 2010,
    endYear: 2016,
    isCurrentlyEnrolled: false,
    relevantAcademicAchievements: [],
  },
  {
    schoolName: 'Maryknoll College of Panabo, Inc.',
    educationalLevel: 'junior_high_school',
    startYear: 2016,
    endYear: 2021,
    isCurrentlyEnrolled: false,
    relevantAcademicAchievements: [
      {
        title: 'Champion of MCPI Battle of the Bands',
        year: 2018,
      },
    ],
  },
  {
    schoolName: 'Maryknoll College of Panabo, Inc.',
    educationalLevel: 'senior_high_school',
    degreeOrProgram: 'Technical-Vocational-Livelihood: ICT',
    startYear: 2021,
    endYear: 2023,
    isCurrentlyEnrolled: false,
    relevantAcademicAchievements: [
      {
        title: '1st place of MCPI Battle of the Bands',
        year: 2023,
      },
      {
        title: 'Best in Java Programming',
        year: 2023,
      },
      {
        title: 'Top 5 in Qualitative Research',
        year: 2021,
      },
    ],
  },
  {
    schoolName: 'Davao del Norte State College',
    educationalLevel: 'college',
    degreeOrProgram: 'Bachelor of Science in Information Technology',
    startYear: 2023,
    endYear: undefined,
    isCurrentlyEnrolled: true,
    relevantAcademicAchievements: [
      {
        title: 'Top 16 Finalist in Pitching Competition',
        year: 2026,
      },
      {
        title: 'Techstars Startup Hackathon Participant',
        year: 2025,
      },
      {
        title: 'Recognized as one of the developers of CODEX.',
        year: 2026,
      },
    ],
  },
]

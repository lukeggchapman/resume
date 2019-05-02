import { Root } from 'utils/hastToPDF/hast.d'

export interface ExperienceData {
  edges: {
    node: {
      htmlAst: Root
      frontmatter: {
        role: string
        company: string
        startDate: string
        endDate: string
        startDateFormatted: string
        endDateFormatted: string
        logo: {
          publicURL: string
        }
      }
    }
  }[]
}

export interface SkillsData {
  edges: {
    node: {
      advanced: string[]
      intermediate: string[]
      beginner: string[]
    }
  }[]
}

export default interface ResumeData {
  experience: ExperienceData
  skills: SkillsData
}

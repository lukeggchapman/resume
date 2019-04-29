import { Root } from '../../utils/htmlToPDF/hast.d'

export interface ExperienceData {
  edges: {
    node: {
      id: string
      htmlAst: Root
      frontmatter: {
        role: string
        company: string
        startDate: string
        endDate: string
        startDateFormatted: string
        endDateFormatted: string
        logo?: {
          publicURL: string
        }
      }
    }
  }[]
}

export default interface ResumeData {
  experience: ExperienceData
}

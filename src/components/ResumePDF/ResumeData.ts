import { Root } from '../../utils/htmlToPDF/hast.d'

export interface ExperienceData {
  group: {
    edges: {
      node: {
        id: string
        htmlAst: Root
        frontmatter: {
          title: string
          company: string
          startDate: string
          endDate: string
          endDateFormatted: string
        }
      }
    }[]
  }[]
}

export default interface ResumeData {
  experience: ExperienceData
}

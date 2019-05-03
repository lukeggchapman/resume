import { Root } from 'utils/hastToPDF/hast.d'

export interface EducationData {
  edges: {
    node: {
      htmlAst: Root
      frontmatter: {
        degree: string
        school: string
        startDate: string
        endDate: string
        logo: {
          publicURL: string
        }
      }
    }
  }[]
}

export interface ExperienceData {
  edges: {
    node: {
      htmlAst: Root
      frontmatter: {
        role: string
        company: string
        startDate: string
        endDate: string
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
  education: EducationData
  experience: ExperienceData
  skills: SkillsData
}

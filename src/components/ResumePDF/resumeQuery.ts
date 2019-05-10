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

export interface ResumeData {
  education: EducationData
  experience: ExperienceData
  skills: SkillsData
}

const query = `
  query {
    education: allMarkdownRemark(
      filter: { fields: { sourceInstanceName: { eq: "education" } } }
      sort: { fields: [frontmatter___endDate], order: DESC }
    ) {
      edges {
        node {
          htmlAst
          frontmatter {
            degree
            school
            startDate
            endDate
            logo {
              absolutePath
              publicURL
            }
          }
        }
      }
    }
    experience: allMarkdownRemark(
      filter: { fields: { sourceInstanceName: { eq: "experience" } } }
      sort: { fields: [frontmatter___endDate], order: DESC }
    ) {
      edges {
        node {
          htmlAst
          frontmatter {
            role
            company
            startDate
            endDate
            logo {
              absolutePath
              publicURL
            }
          }
        }
      }
    }
    skills: allSkillsJson {
      edges {
        node {
          advanced
          intermediate
          beginner
        }
      }
    }
  }
`

export default query

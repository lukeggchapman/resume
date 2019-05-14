import { useStaticQuery, graphql } from 'gatsby'
import { Root } from 'hast-format'

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

const resumeQuery = graphql`
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

export const useResumeData = (): ResumeData => {
  return useStaticQuery(resumeQuery)
}

export default resumeQuery

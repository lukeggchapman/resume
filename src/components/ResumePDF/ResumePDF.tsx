import React from 'react'
import { css } from '@emotion/core'
import { StaticQuery, graphql } from 'gatsby'
import { PDFViewer } from '@react-pdf/renderer'

import ResumeDocument from './ResumeDocument'

export interface ExperienceData {
  group: {
    edges: {
      node: {
        id: string
        html: string
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

export interface ResumeData {
  experience: ExperienceData
}

const ResumePDF = () => (
  <StaticQuery
    query={graphql`
      query {
        experience: allMarkdownRemark(
          filter: { fields: { sourceInstanceName: { eq: "experience" } } }
          sort: { fields: [frontmatter___endDate], order: DESC }
        ) {
          group(field: frontmatter___company) {
            edges {
              node {
                id
                html
                frontmatter {
                  title
                  company
                  endDate
                  startDate(formatString: "MMM, YYYY")
                  endDateFormatted: endDate(formatString: "MMM, YYYY")
                }
              }
            }
          }
        }
      }
    `}
    render={(data: ResumeData) => (
      <PDFViewer
        css={css`
          width: 100%;
          height: 1280px;
          border: 1px solid #777;
          background-color: white;
          box-shadow: 5px 5px 5px #777;
          overflow-x: hidden;
          overflow-y: hidden;
        `}
      >
        <ResumeDocument data={data} />
      </PDFViewer>
    )}
  />
)

export default ResumePDF

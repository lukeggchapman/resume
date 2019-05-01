import React from 'react'
import { css } from '@emotion/core'
import { StaticQuery, graphql } from 'gatsby'
import { PDFViewer } from '@react-pdf/renderer'

import ResumeDocument from './ResumeDocument'
import ResumeData from './ResumeData'

const ResumePDF = () => (
  <StaticQuery
    query={graphql`
      query {
        experience: allMarkdownRemark(
          filter: { fields: { sourceInstanceName: { eq: "experience" } } }
          sort: { fields: [frontmatter___endDate], order: DESC }
        ) {
          edges {
            node {
              id
              htmlAst
              frontmatter {
                role
                company
                startDate
                endDate
                startDateFormatted: startDate(formatString: "MMM, YYYY")
                endDateFormatted: endDate(formatString: "MMM, YYYY")
                logo {
                  publicURL
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

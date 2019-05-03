import React from 'react'
import { css } from '@emotion/core'
import { StaticQuery, graphql } from 'gatsby'
import { PDFViewer } from '@react-pdf/renderer'

import Document from './components/Document'
import ResumeData from './ResumeData'

export interface PureResumePDFProps {
  data: ResumeData
}

export const PureResumePDF = ({ data }: PureResumePDFProps) => (
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
    <Document data={data} />
  </PDFViewer>
)

const ResumePDF = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => <PureResumePDF data={data} />}
  />
)

export default ResumePDF

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
      height: 100%;
      background-color: white;
      overflow-x: hidden;
      overflow-y: hidden;
      margin-bottom: 0;
      border: none;
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

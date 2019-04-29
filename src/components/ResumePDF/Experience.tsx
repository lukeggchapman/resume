import React from 'react'

import { ExperienceData } from './ResumeData'
import ContentItem from './ContentItem'
import htmlToPDF from '../../utils/htmlToPDF'

interface ExperienceProps {
  data: ExperienceData
}

const Experience = ({ data }: ExperienceProps) => {
  return (
    <>
      {data.edges.map(({ node }) => {
        const { company, logo, startDate, endDate, role } = node.frontmatter

        return (
          <ContentItem
            key={company}
            title={company}
            subTitle={role}
            logo={logo && logo.publicURL}
            startDate={startDate}
            endDate={endDate}
          >
            {htmlToPDF(node.htmlAst)}
          </ContentItem>
        )
      })}
    </>
  )
}

export default Experience

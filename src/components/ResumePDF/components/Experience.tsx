import React from 'react'

import hastToPDF from 'utils/hastToPDF'
import { ExperienceData } from '../resumeQuery'
import ContentItem from './common/ContentItem'

export interface ExperienceProps {
  data: ExperienceData
}

const Experience = ({ data }: ExperienceProps) => {
  return (
    <>
      {data.edges.map(({ node }) => {
        const {
          company,
          logo: { publicURL: logoURL },
          startDate,
          endDate,
          role,
        } = node.frontmatter

        return (
          <ContentItem
            key={company}
            title={company}
            subTitle={role}
            logo={logoURL}
            startDate={startDate}
            endDate={endDate}
          >
            {hastToPDF(node.htmlAst)}
          </ContentItem>
        )
      })}
    </>
  )
}

export default Experience

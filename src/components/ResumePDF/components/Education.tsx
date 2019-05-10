import React from 'react'

import hastToPDF from 'utils/hastToPDF'
import ContentItem from './common/ContentItem'
import { EducationData } from '../resumeQuery'

export interface EducationProps {
  data: EducationData
}

const Experience = ({ data }: EducationProps) => {
  return (
    <>
      {data.edges.map(({ node }) => {
        const {
          school,
          degree,
          logo: { publicURL: logoURL },
          startDate,
          endDate,
        } = node.frontmatter

        return (
          <ContentItem
            key={school}
            title={school}
            subTitle={degree}
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

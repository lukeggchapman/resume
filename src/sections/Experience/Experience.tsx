import React from 'react'

import hastToPDF from 'utils/hastToPDF'
import ContentItem from 'components/ContentItem'

import experienceData from './experienceData'

const Experience = () => {
  return (
    <>
      {experienceData.map(({ frontmatter, logo, htmlAst }) => {
        const { company, startDate, endDate, role } = frontmatter

        return (
          <ContentItem
            key={company}
            title={company}
            subTitle={role}
            logo={logo}
            startDate={startDate}
            endDate={endDate}
          >
            {hastToPDF(htmlAst)}
          </ContentItem>
        )
      })}
    </>
  )
}

export default Experience

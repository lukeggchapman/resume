import React from 'react'

import hastToPDF from 'utils/hastToPDF'
import ContentItem from 'components/ContentItem'

import educationData from './educationData'

const Education = () => {
  return (
    <>
      {educationData.map(({ frontmatter, logo, htmlAst }) => {
        const { school, degree, startDate, endDate } = frontmatter

        return (
          <ContentItem
            key={school}
            title={school}
            subTitle={degree}
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

export default Education

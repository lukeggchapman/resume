import React from 'react'

import hastToPDF from 'utils/hastToPDF'
import ContentItem from 'components/ContentItem'
import Section from 'components/Section'

import educationData from './educationData'

function Education() {
  return (
    <Section title="Education">
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
    </Section>
  )
}

export default Education

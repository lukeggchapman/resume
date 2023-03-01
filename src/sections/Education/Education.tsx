import React from 'react'

import hastToPDF from 'utils/hastToPDF'
import ContentItem from 'components/ContentItem'
import Section from 'components/Section'
import educationContent from 'content/education'

function Education() {
  return (
    <Section title="Education">
      {educationContent.map(({ frontmatter, logo, htmlAst }) => {
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

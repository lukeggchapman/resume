import React from 'react'

import hastToPDF from 'utils/hastToPDF'
import ContentItem from 'components/ContentItem'
import Section from 'components/Section'
import experienceContent from 'content/experience'

function Experience() {
  return (
    <Section title="Experience">
      {experienceContent.map(({ frontmatter, logo, htmlAst, style }) => {
        const { company, startDate, endDate, role } = frontmatter

        return (
          <ContentItem
            key={company}
            title={company}
            subTitle={role}
            logo={logo}
            startDate={startDate}
            endDate={endDate}
            style={style}
          >
            {hastToPDF(htmlAst)}
          </ContentItem>
        )
      })}
    </Section>
  )
}

export default Experience

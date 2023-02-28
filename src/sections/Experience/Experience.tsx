import React from 'react'

import hastToPDF from 'utils/hastToPDF'
import ContentItem from 'components/ContentItem'
import Section from 'components/Section'

import experienceData from './experienceData'

function Experience() {
  return (
    <Section title="Experience">
      {experienceData.map(({ frontmatter, logo, htmlAst, style }) => {
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

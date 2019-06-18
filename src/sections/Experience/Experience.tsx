import React from 'react'

import hastToPDF from 'utils/hastToPDF'
import ContentItem from 'components/ContentItem'
import Section from 'components/Section'

import experienceData from './experienceData'

const Experience = () => {
  return (
    <Section title="Experience">
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
    </Section>
  )
}

export default Experience

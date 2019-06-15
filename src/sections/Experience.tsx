import React from 'react'

import hastToPDF from 'utils/hastToPDF'
import mdToHast from 'utils/mdToHast'
import ContentItem from 'components/ContentItem'

import assignarData from 'content/experience/2019-assignar.md'
import assignarLogo from 'content/experience/assignar.jpg'
import psyfariData from 'content/experience/2018-psyfari.md'
import psyfariLogo from 'content/experience/psyfari.png'
import learnosityData from 'content/experience/2015-learnosity.md'
import learnosityLogo from 'content/experience/learnosity.png'

const experienceData = [
  {
    frontmatter: assignarData.data,
    logo: assignarLogo,
    htmlAst: mdToHast(assignarData.content),
  },
  {
    frontmatter: psyfariData.data,
    logo: psyfariLogo,
    htmlAst: mdToHast(psyfariData.content),
  },
  {
    frontmatter: learnosityData.data,
    logo: learnosityLogo,
    htmlAst: mdToHast(learnosityData.content),
  },
]

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

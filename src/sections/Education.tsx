import React from 'react'

import hastToPDF from 'utils/hastToPDF'
import mdToHast from 'utils/mdToHast'
import ContentItem from 'components/ContentItem'
import macquarieData from 'content/education/2015-macquarie.md'
import macquarieLogo from 'content/education/macquarie-uni.png'

const experienceData = [
  {
    frontmatter: macquarieData.data,
    logo: macquarieLogo,
    htmlAst: mdToHast(macquarieData.content),
  },
]

const Experience = () => {
  return (
    <>
      {experienceData.map(({ frontmatter, logo, htmlAst }) => {
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

export default Experience

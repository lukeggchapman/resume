import React from 'react'

import hastToPDF from 'utils/hastToPDF'
import ContentItem from 'components/ContentItem'
import assignarData from 'content/experience/2019-assignar.md'

console.log('assignarData', assignarData)

const Experience = () => {
  return (
    <>
      {[].map(({ node }: any) => {
        const {
          company,
          logo: { publicURL: logoURL },
          startDate,
          endDate,
          role,
        } = node.frontmatter

        return (
          <ContentItem
            key={company}
            title={company}
            subTitle={role}
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

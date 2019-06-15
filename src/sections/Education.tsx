import React from 'react'

import hastToPDF from 'utils/hastToPDF'
import ContentItem from '../components/ContentItem'

const Experience = ({ data }: any) => {
  return (
    <>
      {data.edges.map(({ node }: any) => {
        const {
          school,
          degree,
          logo: { publicURL: logoURL },
          startDate,
          endDate,
        } = node.frontmatter

        return (
          <ContentItem
            key={school}
            title={school}
            subTitle={degree}
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

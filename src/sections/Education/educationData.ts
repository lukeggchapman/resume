import mdToHast from 'utils/mdToHast'

import macquarieData from 'content/education/2015-macquarie.md'
import macquarieLogo from 'content/education/macquarie-uni.png'

const experienceData = [
  {
    frontmatter: macquarieData.data,
    logo: macquarieLogo,
    htmlAst: mdToHast(macquarieData.content),
  },
]

export default experienceData

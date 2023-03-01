import parseMarkdownToHtmlAst from 'utils/parseMarkdownToHtmlAst'

import macquarieData from 'content/education/2015-macquarie.md'
import macquarieLogo from 'content/education/macquarie-uni.png'

interface ExperienceFrontmatter {
  school: string
  degree: string
  startDate: string
  endDate: string
}

const experienceData = [
  {
    ...parseMarkdownToHtmlAst<ExperienceFrontmatter>(macquarieData),
    logo: macquarieLogo,
  },
]

export default experienceData

import parseMarkdownToHtmlAst from 'utils/parseMarkdownToHtmlAst'

import assignarData from 'content/experience/2019-assignar.md'
import assignarLogo from 'content/experience/assignar.jpg'
import learnosityData from 'content/experience/2015-learnosity.md'
import learnosityLogo from 'content/experience/learnosity.png'
import componoData from 'content/experience/2020-compono.md'
import componoLogo from 'content/experience/compono.png'

interface ExperienceFrontmatter {
  company: string
  startDate: string
  endDate: string
  role: string
}

const experienceData = [
  {
    ...parseMarkdownToHtmlAst<ExperienceFrontmatter>(componoData),
    logo: componoLogo,
  },
  {
    ...parseMarkdownToHtmlAst<ExperienceFrontmatter>(assignarData),
    logo: assignarLogo,
  },
  {
    ...parseMarkdownToHtmlAst<ExperienceFrontmatter>(learnosityData),
    logo: learnosityLogo,
  },
]

export default experienceData

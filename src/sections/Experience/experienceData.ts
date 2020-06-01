import mdToHast from 'utils/mdToHast'

import assignarData from 'content/experience/2019-assignar.md'
import assignarLogo from 'content/experience/assignar.jpg'
import learnosityData from 'content/experience/2015-learnosity.md'
import learnosityLogo from 'content/experience/learnosity.png'
import componoData from 'content/experience/2020-compono.md'
import componoLogo from 'content/experience/compono.png'

const experienceData = [
  {
    frontmatter: componoData.data,
    logo: componoLogo,
    htmlAst: mdToHast(componoData.content),
  },
  {
    frontmatter: assignarData.data,
    logo: assignarLogo,
    htmlAst: mdToHast(assignarData.content),
  },
  {
    frontmatter: learnosityData.data,
    logo: learnosityLogo,
    htmlAst: mdToHast(learnosityData.content),
  },
]

export default experienceData

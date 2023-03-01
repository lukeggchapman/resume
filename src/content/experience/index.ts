import type { Style } from '@react-pdf/types'

import parseMarkdownToHtmlAst from 'utils/parseMarkdownToHtmlAst'

import assignarData from 'content/experience/2019-assignar.md'
import assignarLogo from 'content/experience/assignar.jpg'
import learnosityData from 'content/experience/2015-learnosity.md'
import learnosityLogo from 'content/experience/learnosity.png'
import componoData from 'content/experience/2020-compono.md'
import componoLogo from 'content/experience/compono.png'
import pathzeroData from 'content/experience/2022-pathzero.md'
import pathzeroLogo from 'content/experience/pathzero.png'
import indebtedData from 'content/experience/2023-indebted.md'
import indebtedLogo from 'content/experience/indebted.png'
import { HastNodes } from 'mdast-util-to-hast/lib'

interface ExperienceFrontmatter {
  company: string
  startDate: string
  endDate: string
  role: string
}

interface ExperienceData {
  logo: string
  frontmatter: ExperienceFrontmatter
  htmlAst: HastNodes | null | undefined
  style?: Style
}

const experienceData: ExperienceData[] = [
  {
    ...parseMarkdownToHtmlAst<ExperienceFrontmatter>(indebtedData),
    logo: indebtedLogo,
  },
  {
    ...parseMarkdownToHtmlAst<ExperienceFrontmatter>(pathzeroData),
    logo: pathzeroLogo,
  },
  {
    ...parseMarkdownToHtmlAst<ExperienceFrontmatter>(componoData),
    logo: componoLogo,
    style: {
      marginBottom: '100px',
    },
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

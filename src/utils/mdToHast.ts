import Remark from 'remark'
import toHAST from 'mdast-util-to-hast'

// Setup Remark.
const remarkOptions = {
  commonmark: true,
  footnotes: true,
  gfm: true,
  pedantic: true,
}
const remark = new Remark().data(`settings`, remarkOptions)

const mdToHast = (md: string) => {
  const markdownAST = remark.parse(md)

  return toHAST(markdownAST, { allowDangerousHTML: true })
}

export default mdToHast

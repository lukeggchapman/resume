import Remark from 'remark'
import toHAST from 'mdast-util-to-hast'

const remark = new Remark()

const mdToHast = (md: string) => {
  const markdownAST = remark.parse(md)

  return toHAST(markdownAST)
}

export default mdToHast

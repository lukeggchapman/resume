import {fromMarkdown} from 'mdast-util-from-markdown'
import toHAST from 'mdast-util-to-hast'

const mdToHast = (md: string) => {
  const markdownAST = fromMarkdown(md)

  return toHAST(markdownAST)
}

export default mdToHast

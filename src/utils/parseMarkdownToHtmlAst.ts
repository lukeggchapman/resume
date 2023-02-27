import { fromMarkdown } from 'mdast-util-from-markdown'
import { frontmatter } from 'micromark-extension-frontmatter'
import { frontmatterFromMarkdown } from 'mdast-util-frontmatter'
import { parse } from 'yaml'
import type { YAML } from 'mdast'
import toHAST from 'mdast-util-to-hast'

const parseMarkdownToHtmlAst = <Frontmatter extends object>(md: string) => {
  const markdownAST = fromMarkdown(md, {
    extensions: [frontmatter(['yaml'])],
    mdastExtensions: [frontmatterFromMarkdown(['yaml'])],
  })

  const frontmatterNodes = markdownAST.children.filter(
    ({ type }) => type === 'yaml'
  ) as Array<YAML>

  if (frontmatterNodes.length !== 1) {
    throw new Error(
      'parseMarkdownToHtmlAst failed: There should be only one frontmatter entity'
    )
  }

  return {
    frontmatter: parse(frontmatterNodes[0].value) as Frontmatter,
    htmlAst: toHAST(markdownAST),
  }
}

export default parseMarkdownToHtmlAst

/* eslint-disable import/no-unresolved */

declare module 'mdast-util-to-hast' {
  import { Root as MdastRoot } from 'mdast'
  import { Root as HastRoot } from 'hast-format'

  const value: (mdAst: MdastRoot) => HastRoot

  export = value
}

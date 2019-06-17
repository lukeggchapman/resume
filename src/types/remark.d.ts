declare module 'remark' {
  // eslint-disable-next-line import/no-unresolved
  import { Root } from 'mdast'

  export default class Remark {
    public parse: (md: string) => Root
  }
}

import {fromMarkdown} from 'mdast-util-from-markdown'
import toHAST from 'mdast-util-to-hast'

import mdToHast from '../mdToHast'

jest.mock('mdast-util-from-markdown', () => {
  return {
    __esModule: true,
    fromMarkdown: jest.fn(),
  };
});
jest.mock('mdast-util-to-hast', () => jest.fn())

const fromMarkdownMock = fromMarkdown as jest.Mock
const toHASTMock = toHAST as jest.Mock

describe('mdToHast', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('parses markdown to markdownAST', () => {
    const md = 'mdTest'
    mdToHast(md)

    expect(fromMarkdownMock).toHaveBeenCalledWith(md)
  })

  it('transforms markdown ast to html ast', () => {
    const md = 'mdTest'
    const mdAst = 'mdAstTest'
    const hast = 'HastTest'

    fromMarkdownMock.mockReturnValue(mdAst)
    toHASTMock.mockReturnValue(hast)

    const result = mdToHast(md)

    expect(toHAST).toHaveBeenCalledWith(mdAst)
    expect(result).toEqual(hast)
  })
})

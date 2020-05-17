import Remark from 'remark'
import toHAST from 'mdast-util-to-hast'

import mdToHast from '../mdToHast'

jest.mock('remark', () => {
  const parseMock = jest.fn()

  return jest.fn().mockImplementation(() => ({
    parse: parseMock,
  }))
})
jest.mock('mdast-util-to-hast', () => jest.fn())

const parseMock = new Remark().parse as jest.Mock
const toHASTMock = toHAST as jest.Mock

describe('mdToHast', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('parses markdown to markdownAST', () => {
    const md = 'mdTest'
    mdToHast(md)

    expect(parseMock).toHaveBeenCalledWith(md)
  })

  it('transforms markdown ast to html ast', () => {
    const md = 'mdTest'
    const mdAst = 'mdAstTest'
    const hast = 'HastTest'

    parseMock.mockReturnValue(mdAst)
    toHASTMock.mockReturnValue(hast)

    const result = mdToHast(md)

    expect(toHAST).toHaveBeenCalledWith(mdAst)
    expect(result).toEqual(hast)
  })
})

import { fromMarkdown } from 'mdast-util-from-markdown'
import { frontmatter } from 'micromark-extension-frontmatter'
import { frontmatterFromMarkdown } from 'mdast-util-frontmatter'
import toHAST from 'mdast-util-to-hast'

import parseMarkdownToHtmlAst from '../parseMarkdownToHtmlAst'

jest.mock('mdast-util-from-markdown', () => {
  return {
    __esModule: true,
    fromMarkdown: jest.fn(),
  }
})
jest.mock('micromark-extension-frontmatter', () => {
  return {
    __esModule: true,
    frontmatter: jest.fn(),
  }
})
jest.mock('mdast-util-frontmatter', () => {
  return {
    __esModule: true,
    frontmatterFromMarkdown: jest.fn(),
  }
})
jest.mock('mdast-util-to-hast', () => jest.fn())

const fromMarkdownMock = fromMarkdown as jest.Mock
const frontmatterMock = frontmatter as jest.Mock
const frontmatterFromMarkdownMock = frontmatterFromMarkdown as jest.Mock

const toHASTMock = toHAST as jest.Mock

describe('mdToHast', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('parses markdown to html ast with frontmatter', () => {
    const md = `---
role: 'Software Engineer'
company: 'Learnosity'
logo: './learnosity.png'
startDate: '2012-02-01'
endDate: '2015-07-31'
---

Blah blah blah, really great work and stuff
`
    fromMarkdownMock.mockReturnValue({
      type: 'root',
      children: [
        {
          type: 'yaml',
          value:
            "role: 'Software Engineer'\ncompany: 'Learnosity'\nlogo: './learnosity.png'\nstartDate: '2012-02-01'\nendDate: '2015-07-31'",
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Blah blah blah, really great work and stuff',
            },
          ],
        },
      ],
    })
    toHASTMock.mockReturnValue({
      type: 'root',
      children: [
        {
          type: 'element',
          tagName: 'p',
          properties: {},
          children: [
            {
              type: 'text',
              value: 'Blah blah blah, really great work and stuff',
            },
          ],
        },
      ],
    })

    const result = parseMarkdownToHtmlAst(md)

    expect(result).toEqual({
      frontmatter: {
        role: 'Software Engineer',
        company: 'Learnosity',
        logo: './learnosity.png',
        startDate: '2012-02-01',
        endDate: '2015-07-31',
      },
      htmlAst: {
        type: 'root',
        children: [
          {
            type: 'element',
            tagName: 'p',
            properties: {},
            children: [
              {
                type: 'text',
                value: 'Blah blah blah, really great work and stuff',
              },
            ],
          },
        ],
      },
    })
    expect(frontmatterMock).toHaveBeenCalledWith(['yaml'])
    expect(frontmatterFromMarkdownMock).toHaveBeenCalledWith(['yaml'])
  })

  it('throws error when there is no frontmatter', () => {
    const md = `Blah blah blah`
    fromMarkdownMock.mockReturnValue({
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'Blah blah blah',
            },
          ],
        },
      ],
    })

    expect(() => parseMarkdownToHtmlAst(md)).toThrowError(
      'parseMarkdownToHtmlAst failed: There should be only one frontmatter entity'
    )
  })
})

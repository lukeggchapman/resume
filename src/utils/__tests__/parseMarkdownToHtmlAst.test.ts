import parseMarkdownToHtmlAst from '../parseMarkdownToHtmlAst'

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
                position: {
                  start: {
                    line: 9,
                    column: 1,
                    offset: 128,
                  },
                  end: {
                    line: 9,
                    column: 44,
                    offset: 171,
                  },
                },
              },
            ],
            position: {
              start: {
                line: 9,
                column: 1,
                offset: 128,
              },
              end: {
                line: 9,
                column: 44,
                offset: 171,
              },
            },
          },
        ],
        position: {
          start: {
            line: 1,
            column: 1,
            offset: 0,
          },
          end: {
            line: 10,
            column: 1,
            offset: 172,
          },
        },
      },
    })
  })

  it('throws error when there is no frontmatter', () => {
    const md = `Blah blah blah`

    expect(() => parseMarkdownToHtmlAst(md)).toThrowError(
      'parseMarkdownToHtmlAst failed: There should be only one frontmatter entity'
    )
  })
})

import educationData from '../educationData'

jest.mock('utils/parseMarkdownToHtmlAst', () => (md: string) => ({
  frontmatter: { frontmatterFor: md },
  htmlAst: `htmlAst(${md})`,
}))
jest.mock('content/education/2015-macquarie.md', () => 'macquarieContentMock', {
  virtual: true,
})
jest.mock('content/education/macquarie-uni.png', () => 'macquarieLogoMock')

describe('educationData', () => {
  it('should have the correct data', () => {
    expect(educationData).toMatchSnapshot()
  })
})

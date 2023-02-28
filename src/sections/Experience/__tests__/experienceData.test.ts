import experienceData from '../experienceData'

jest.mock('utils/parseMarkdownToHtmlAst', () => (md: string) => ({
  frontmatter: { frontmatterFor: md },
  htmlAst: `htmlAst(${md})`,
}))
jest.mock('content/experience/2023-indebted.md', () => 'indebtedContentMock', {
  virtual: true,
})
jest.mock('content/experience/2022-pathzero.md', () => 'pathzeroContentMock', {
  virtual: true,
})
jest.mock('content/experience/2020-compono.md', () => 'componoContentMock', {
  virtual: true,
})
jest.mock('content/experience/2019-assignar.md', () => 'assignarContentMock', {
  virtual: true,
})
jest.mock(
  'content/experience/2015-learnosity.md',
  () => 'learnosityContentMock',
  {
    virtual: true,
  }
)

describe('experienceData', () => {
  it('should have the correct data', () => {
    expect(experienceData).toMatchSnapshot()
  })
})

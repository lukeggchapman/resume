import experienceData from '../experienceData'

jest.mock('utils/mdToHast', () => (md: string) => `mdToHast(${md})`)
jest.mock(
  'content/experience/2020-compono.md',
  () => ({ data: 'componoFrontmatterMock', content: 'componoContentMock' }),
  {
    virtual: true,
  }
)
jest.mock(
  'content/experience/2019-assignar.md',
  () => ({ data: 'assignarFrontmatterMock', content: 'assignarContentMock' }),
  {
    virtual: true,
  }
)
jest.mock(
  'content/experience/2015-learnosity.md',
  () => ({
    data: 'learnosityFrontmatterMock',
    content: 'learnosityContentMock',
  }),
  {
    virtual: true,
  }
)

describe('experienceData', () => {
  it('should have the correct data', () => {
    expect(experienceData).toMatchSnapshot()
  })
})

import experienceData from '../experienceData'

jest.mock('utils/mdToHast', () => (md: string) => `mdToHast(${md})`)
jest.mock(
  'content/experience/2019-assignar.md',
  () => ({ data: 'assignarFrontmatterMock', content: 'assignarContentMock' }),
  {
    virtual: true,
  }
)
jest.mock('content/experience/assignar.jpg', () => 'assignarLogoMock')
jest.mock(
  'content/experience/2018-psyfari.md',
  () => ({ data: 'psyfariFrontmatterMock', content: 'psyfariContentMock' }),
  {
    virtual: true,
  }
)
jest.mock('content/experience/psyfari.png', () => 'psyfariLogoMock')
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
jest.mock('content/experience/learnosity.png', () => 'learnosityLogoMock')

describe('experienceData', () => {
  it('should have the correct data', () => {
    expect(experienceData).toMatchSnapshot()
  })
})

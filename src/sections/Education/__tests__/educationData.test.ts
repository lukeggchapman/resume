import educationData from '../educationData'

jest.mock('utils/mdToHast', () => (md: string) => `mdToHast(${md})`)
jest.mock(
  'content/education/2015-macquarie.md',
  () => ({ data: 'macquarieFrontmatterMock', content: 'macquarieContentMock' }),
  {
    virtual: true,
  }
)
jest.mock('content/education/macquarie-uni.png', () => 'macquarieLogoMock')

describe('educationData', () => {
  it('should have the correct data', () => {
    expect(educationData).toMatchSnapshot()
  })
})

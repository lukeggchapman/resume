import React from 'react'
import { shallow } from 'enzyme'

import Education from '../Education'

jest.mock('components/ContentItem', () => 'ContentItem')
jest.mock('utils/hastToPDF', () => jest.fn((htmlAst) => htmlAst))
jest.mock('../educationData', () => [
  {
    frontmatter: {
      school: 'schoolTest1',
      endDate: 'endDateTest1',
      degree: 'degreeTest1',
      startDate: 'startDateTest1',
    },
    logo: 'logoPublcUrlTest1',
    htmlAst: 'htmlAstTest1' as any,
  },
])

describe('Education', () => {
  const render = () => shallow(<Education />)

  it('renders correctly', () => {
    expect(render()).toMatchSnapshot()
  })
})

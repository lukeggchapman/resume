import React from 'react'
import { shallow } from 'enzyme'

import Experience from '../Experience'

jest.mock('components/ContentItem', () => 'ContentItem')
jest.mock('utils/hastToPDF', () => jest.fn(htmlAst => htmlAst))
jest.mock('../experienceData', () => [
  {
    frontmatter: {
      company: 'companyTest1',
      endDate: 'endDateTest1',
      role: 'roleTest1',
      startDate: 'startDateTest1',
    },
    logo: 'logoPublcUrlTest1',
    htmlAst: 'htmlAstTest1' as any,
  },
  {
    frontmatter: {
      company: 'companyTest2',
      endDate: 'endDateTest2',
      role: 'roleTest2',
      startDate: 'startDateTest2',
    },
    logo: 'logoPublcUrlTest2',
    htmlAst: 'htmlAstTest2' as any,
  },
])

describe('Experience', () => {
  const render = () => shallow(<Experience />)

  it('renders correctly', () => {
    expect(render()).toMatchSnapshot()
  })
})

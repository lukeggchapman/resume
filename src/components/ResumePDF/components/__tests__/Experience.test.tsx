import React from 'react'
import { shallow } from 'enzyme'

import Experience, { ExperienceProps } from '../Experience'

jest.mock('../common/ContentItem', () => 'ContentItem')
jest.mock('utils/hastToPDF', () => jest.fn(htmlAst => htmlAst))

const baseProps: ExperienceProps = {
  data: {
    edges: [
      {
        node: {
          htmlAst: 'htmlAstTest1' as any,
          frontmatter: {
            company: 'companyTest1',
            endDate: 'endDateTest1',
            endDateFormatted: 'endDateFormattedTest1',
            logo: {
              publicURL: 'logoPublcUrlTest1',
            },
            role: 'roleTest1',
            startDate: 'startDateTest1',
            startDateFormatted: 'startDateFormattedTest1',
          },
        },
      },
      {
        node: {
          htmlAst: 'htmlAstTest2' as any,
          frontmatter: {
            company: 'companyTest2',
            endDate: 'endDateTest2',
            endDateFormatted: 'endDateFormattedTest2',
            logo: {
              publicURL: 'logoPublcUrlTest2',
            },
            role: 'roleTest2',
            startDate: 'startDateTest2',
            startDateFormatted: 'startDateFormattedTest2',
          },
        },
      },
    ],
  },
}

describe('Experience', () => {
  const render = () => shallow(<Experience {...baseProps} />)

  it('renders correctly', () => {
    expect(render()).toMatchSnapshot()
  })
})

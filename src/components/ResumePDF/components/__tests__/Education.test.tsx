import React from 'react'
import { shallow } from 'enzyme'

import Education, { EducationProps } from '../Education'

jest.mock('../common/ContentItem', () => 'ContentItem')
jest.mock('utils/hastToPDF', () => jest.fn(htmlAst => htmlAst))

const baseProps: EducationProps = {
  data: {
    edges: [
      {
        node: {
          htmlAst: 'htmlAstTest1' as any,
          frontmatter: {
            school: 'schoolTest1',
            endDate: 'endDateTest1',
            logo: {
              publicURL: 'logoPublcUrlTest1',
            },
            degree: 'degreeTest1',
            startDate: 'startDateTest1',
          },
        },
      },
    ],
  },
}

describe('Education', () => {
  const render = () => shallow(<Education {...baseProps} />)

  it('renders correctly', () => {
    expect(render()).toMatchSnapshot()
  })
})

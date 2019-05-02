import React from 'react'
import { shallow } from 'enzyme'

import Education from '../Education'

jest.mock('../common/ContentItem', () => 'ContentItem')

describe('Education', () => {
  const render = () => shallow(<Education />)

  it('renders correctly', () => {
    expect(render()).toMatchSnapshot()
  })
})

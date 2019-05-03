import React from 'react'
import { shallow } from 'enzyme'

import Header from './header'

describe('Header', () => {
  it('renders correctly', () => {
    expect(shallow(<Header siteTitle="Test Title" />)).toMatchSnapshot()
  })
})

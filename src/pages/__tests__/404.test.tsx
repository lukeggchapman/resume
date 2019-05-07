import React from 'react'
import { shallow } from 'enzyme'

import Page404 from '../404'

jest.mock('components/SEO', () => 'SEO')

describe('404', () => {
  const render = () => shallow(<Page404 />)

  it('renders correctly', () => {
    expect(render()).toMatchSnapshot()
  })
})

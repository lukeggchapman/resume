import React from 'react'
import { shallow } from 'enzyme'
import 'components/__mocks__/typographyMock'

import Footer from '../Footer'

describe('Footer Section', () => {
  const render = () => shallow(<Footer />)

  it('renders correctly', () => {
    expect(render()).toMatchSnapshot()
  })
})

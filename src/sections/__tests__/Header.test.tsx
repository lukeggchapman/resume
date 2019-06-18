import React from 'react'
import { shallow } from 'enzyme'
import 'components/__mocks__/typographyMock'

import Header from '../Header'

describe('Header Section', () => {
  const render = () => shallow(<Header />)

  it('renders correctly', () => {
    expect(render()).toMatchSnapshot()
  })
})

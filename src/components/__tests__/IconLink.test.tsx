import React from 'react'
import { shallow } from 'enzyme'

import IconLink, { IconLinkProps } from '../IconLink'

const baseProps: IconLinkProps = {
  src: 'srcTest',
  children: 'childrenTest',
  far: true,
  icon: 'envelope',
}

describe('IconLink', () => {
  const render = () => shallow(<IconLink {...baseProps} />)

  it('renders correctly', () => {
    expect(render()).toMatchSnapshot()
  })
})

import React from 'react'
import { shallow } from 'enzyme'

import IconLink, { IconLinkProps } from '../IconLink'

const baseProps: IconLinkProps = {
  src: 'srcTest',
  iconProps: {
    far: true,
    icon: 'envelope',
  },
  children: 'childrenTest',
}

describe('IconLink', () => {
  const render = () => shallow(<IconLink {...baseProps} />)

  it('renders correctly', () => {
    expect(render()).toMatchSnapshot()
  })
})

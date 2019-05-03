import React from 'react'
import { shallow } from 'enzyme'

import HTML, { HTMLProps } from '../html'

const baseProps: HTMLProps = {
  body: 'bodyTest',
  bodyAttributes: {
    bodyAttributes: 'test',
  },
  headComponents: 'headComponentsTest',
  htmlAttributes: {
    htmlAttributes: 'test',
  },
  postBodyComponents: 'postBodyComponentsTest',
  preBodyComponents: 'preBodyComponentsTest',
}

describe('HTML', () => {
  const render = () => shallow(<HTML {...baseProps} />)

  it('renders correctly', () => {
    expect(render()).toMatchSnapshot()
  })
})

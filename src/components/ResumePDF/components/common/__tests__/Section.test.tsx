import React from 'react'
import { shallow } from 'enzyme'

import Section, { SectionProps } from '../Section'

const baseProps: SectionProps = {
  title: 'titleTest',
  children: 'ReactNodeTest',
}

describe('Section', () => {
  const render = (props?: Partial<SectionProps>) =>
    shallow(<Section {...{ ...baseProps, ...props }} />)

  it('renders correctly', () => {
    expect(render()).toMatchSnapshot()
  })
})

import React from 'react'
import { shallow } from 'enzyme'

import Skills, { SkillsProps } from '../Skills'

const baseProps: SkillsProps = {
  data: {
    edges: [
      {
        node: {
          beginner: ['skillTest1', 'skillTest2'],
          intermediate: ['skillTest3', 'skillTest4'],
          advanced: ['skillTest5', 'skillTest6'],
        },
      },
    ],
  },
}

describe('Skills', () => {
  const render = (props?: Partial<SkillsProps>) =>
    shallow(<Skills {...{ ...baseProps, ...props }} />)

  it('renders correctly', () => {
    expect(render()).toMatchSnapshot()
  })
})

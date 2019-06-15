import React from 'react'
import { shallow } from 'enzyme'

import Skill, { SkillProps } from '../Skill'

const baseProps: SkillProps = {
  title: 'titleTest',
  skills: ['skillTest1', 'skillTest2'],
}

describe('Skill', () => {
  const render = (props?: Partial<SkillProps>) =>
    shallow(<Skill {...{ ...baseProps, ...props }} />)

  it('renders correctly', () => {
    expect(render()).toMatchSnapshot()
  })
})

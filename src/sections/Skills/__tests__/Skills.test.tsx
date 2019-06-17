import React from 'react'
import { shallow } from 'enzyme'

import Skills from '../Skills'

jest.mock(
  'content/skills/skills.json',
  () => ({
    beginner: ['skillTest1', 'skillTest2'],
    intermediate: ['skillTest3', 'skillTest4'],
    advanced: ['skillTest5', 'skillTest6'],
  }),
  { virtual: true }
)

describe('Skills', () => {
  const render = () => shallow(<Skills />)

  it('renders correctly', () => {
    expect(render()).toMatchSnapshot()
  })
})

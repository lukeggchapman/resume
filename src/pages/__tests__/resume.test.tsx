import React from 'react'
import { shallow } from 'enzyme'

import ResumePage from '../resume'

jest.mock('components/SEO', () => 'SEO')
jest.mock('components/ResumePDF', () => 'ResumePDF')

describe('ResumePage', () => {
  const render = () => shallow(<ResumePage />)

  it('renders correctly', () => {
    expect(render()).toMatchSnapshot()
  })
})

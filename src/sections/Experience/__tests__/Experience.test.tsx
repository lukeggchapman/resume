import React from 'react'
import { shallow } from 'enzyme'

import Experience from '../Experience'

jest.mock('components/ContentItem', () => 'ContentItem')
jest.mock('utils/hastToPDF', () => jest.fn((htmlAst) => htmlAst))
jest.mock('content/experience')

describe('Experience', () => {
  const render = () => shallow(<Experience />)

  it('renders correctly', () => {
    expect(render()).toMatchSnapshot()
  })
})

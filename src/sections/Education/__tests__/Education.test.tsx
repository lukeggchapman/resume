import React from 'react'
import { shallow } from 'enzyme'

import Education from '../Education'

jest.mock('components/ContentItem', () => 'ContentItem')
jest.mock('utils/hastToPDF', () => jest.fn((htmlAst) => htmlAst))
jest.mock('content/education')

describe('Education', () => {
  const render = () => shallow(<Education />)

  it('renders correctly', () => {
    expect(render()).toMatchSnapshot()
  })
})

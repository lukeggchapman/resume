import React from 'react'
import { shallow } from 'enzyme'
import '../components/__mocks__/typographyMock'
import Document from '../Resume'

jest.mock('sections/Experience', () => 'Experience')
jest.mock('sections/Education', () => 'Education')
jest.mock('sections/Skills', () => 'Skills')

describe('Document', () => {
  const render = () => shallow(<Document />)

  it('renders correctly', () => {
    expect(render()).toMatchSnapshot()
  })
})

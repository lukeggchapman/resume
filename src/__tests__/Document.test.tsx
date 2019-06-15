import React from 'react'
import { shallow } from 'enzyme'
import '../components/__mocks__/typographyMock'
import Document from '../Document'

jest.mock('../Experience', () => 'Experience')
jest.mock('../Education', () => 'Education')
jest.mock('../Skills', () => 'Skills')

describe('Document', () => {
  const render = () => shallow(<Document />)

  it('renders correctly', () => {
    expect(render()).toMatchSnapshot()
  })
})

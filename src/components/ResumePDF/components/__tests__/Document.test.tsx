import React from 'react'
import { shallow } from 'enzyme'
import '../__mocks__/typographyMock'
import Document, { DocumentProps } from '../Document'

jest.mock('../Experience', () => 'Experience')
jest.mock('../Education', () => 'Education')
jest.mock('../Skills', () => 'Skills')

const baseProps: DocumentProps = {
  data: {
    education: ('educationTest' as unknown) as DocumentProps['data']['education'],
    experience: ('experienceTest' as unknown) as DocumentProps['data']['experience'],
    skills: ('skillsTest' as unknown) as DocumentProps['data']['skills'],
  },
}

describe('Document', () => {
  const render = (props?: Partial<DocumentProps>) =>
    shallow(<Document {...{ ...baseProps, ...props }} />)

  it('renders correctly', () => {
    expect(render()).toMatchSnapshot()
  })
})

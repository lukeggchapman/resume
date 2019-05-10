import React from 'react'
import { shallow } from 'enzyme'

import ResumePDF from '../ResumePDF'

jest.mock('../components/Document', () => 'Document')
jest.mock('../resumeQuery', () => ({
  useResumeData: jest.fn(() => 'resumeDataTest'),
}))

describe('ResumePDF', () => {
  it('renders correctly', () => {
    expect(shallow(<ResumePDF />)).toMatchSnapshot()
  })
})

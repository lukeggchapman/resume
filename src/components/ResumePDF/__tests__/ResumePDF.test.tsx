import React from 'react'
import { shallow } from 'enzyme'

import ResumePDF, { PureResumePDF, PureResumePDFProps } from '../ResumePDF'

jest.mock('../components/Document', () => 'Document')

const baseProps: PureResumePDFProps = {
  data: 'dataTest' as any,
}

describe('ResumePDF', () => {
  it('renders StaticQuery correctly', () => {
    expect(shallow(<ResumePDF />)).toMatchSnapshot()
  })

  it('renders correctly', () => {
    expect(shallow(<PureResumePDF {...baseProps} />)).toMatchSnapshot()
  })
})

import React from 'react'
import { shallow } from 'enzyme'

import ResumePDF, { PureResumePDFProps } from '../ResumePDF'

jest.mock('../components/Document', () => 'Document')

const baseProps: PureResumePDFProps = {
  pageContext: {
    resumeData: 'dataTest' as any,
  },
}

describe('ResumePDF', () => {
  it('renders correctly', () => {
    expect(shallow(<ResumePDF {...baseProps} />)).toMatchSnapshot()
  })
})

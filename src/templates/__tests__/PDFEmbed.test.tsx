import React from 'react'
import { shallow } from 'enzyme'

import PDFEmbed, { PDFEmbedTemplateProps } from '../PDFEmbed'

const baseProps: PDFEmbedTemplateProps = {
  pageContext: {
    pdfPublicURL: 'pdfPublicURLTest',
  },
}

describe('PDFEmbed', () => {
  const render = () => shallow(<PDFEmbed {...baseProps} />)

  it('renders correctly', () => {
    expect(render()).toMatchSnapshot()
  })
})

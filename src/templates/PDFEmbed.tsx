import React from 'react'
import { css } from '@emotion/core'

export interface PDFEmbedTemplateProps {
  pageContext: {
    pdfPublicURL: string
  }
}

const PDFEmbedTemplate = ({ pageContext }: PDFEmbedTemplateProps) => (
  <embed
    css={css`
      width: 100%;
      height: 100%;
    `}
    src={pageContext.pdfPublicURL}
  />
)

export default PDFEmbedTemplate

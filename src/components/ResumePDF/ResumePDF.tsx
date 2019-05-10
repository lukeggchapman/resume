import React from 'react'
import { css } from '@emotion/core'
import { PDFViewer } from '@react-pdf/renderer'

import { useResumeData } from './resumeQuery'
import Document from './components/Document'

// Used in development only, client side renders PDF
const ResumePDF = () => {
  const resumeData = useResumeData()

  return (
    <PDFViewer
      css={css`
        width: 100%;
        height: 100%;
        background-color: white;
        overflow-x: hidden;
        overflow-y: hidden;
        margin-bottom: 0;
        border: none;
      `}
    >
      <Document data={resumeData} />
    </PDFViewer>
  )
}

export default ResumePDF

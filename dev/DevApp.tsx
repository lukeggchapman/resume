import React from 'react'
import { PDFViewer } from '@react-pdf/renderer'

import Resume from 'luke-chapman-resume'

// Used in development only, client side renders PDF
const DevApp = () => {
  return (
    <PDFViewer
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        margin: 0,
        border: 'none',
      }}
    >
      <Resume />
    </PDFViewer>
  )
}

export default DevApp

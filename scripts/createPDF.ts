import React from 'react'
import ReactPDF from '@react-pdf/renderer'

const createPDF = <P>(
  Component: React.ComponentType<P>,
  props: P,
  filePath: string
) => {
  return ReactPDF.render(React.createElement(Component, props), filePath)
}

export default createPDF

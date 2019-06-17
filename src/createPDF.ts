import React from 'react'
import ReactPDF from '@react-pdf/renderer'
import Resume from './Resume'

/**
 * Helper method to be ran in node environment to create the pdf
 * @param filePath output file path for resume pdf
 */
const createPDF = (filePath: string) => {
  return ReactPDF.render(React.createElement(Resume), filePath)
}

export default createPDF

import React from 'react'

const renderPromise = Promise.resolve()

module.exports = {
  Document: 'Document',
  Font: {
    register: jest.fn((definition: any) => definition),
  },
  Image: 'Image',
  Link: 'Link',
  Page: 'Page',
  PDFViewer: 'PDFViewer',
  StyleSheet: {
    create: jest.fn((styles: any) => styles),
  },
  Text: 'Text',
  View: 'View',
  render: jest.fn((Component: React.ComponentType, props) => renderPromise),
}

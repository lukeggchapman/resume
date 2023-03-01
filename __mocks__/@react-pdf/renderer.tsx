/* eslint-disable react/function-component-definition */
import React from 'react'

const renderPromise = Promise.resolve()
const container = (name: string) => {
  const ReactPDFContainerMock: React.FC<{ style?: object }> = ({
    style,
    children,
  }) => {
    return (
      <div data-pdf={name} data-style={style && JSON.stringify(style, null, 2)}>
        {children}
      </div>
    )
  }

  ReactPDFContainerMock.displayName = name
  ReactPDFContainerMock.defaultProps = {
    style: undefined,
  }

  return ReactPDFContainerMock
}

module.exports = {
  Document: container('Document'),
  Font: {
    register: jest.fn((definition: any) => definition),
  },
  Image: container('Image'),
  Link: container('Link'),
  Page: container('Page'),
  PDFViewer: 'PDFViewer',
  StyleSheet: {
    create: jest.fn((styles: any) => styles),
  },
  Text: container('Text'),
  View: container('View'),
  render: jest.fn(() => renderPromise),
}

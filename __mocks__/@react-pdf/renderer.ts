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
}

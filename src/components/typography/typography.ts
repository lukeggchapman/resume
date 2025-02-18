import ReactPDF, { StyleSheet } from '@react-pdf/renderer'

import './fonts/oswald'
import './fonts/notosans'
import './fonts/ptsans'

export default StyleSheet.create({
  body: {
    fontFamily: 'Noto Sans',
    fontSize: 12,
    color: '#333',
  },
  h1: {
    fontFamily: 'Oswald',
    fontWeight: 700,
    fontSize: 24,
  },
  h2: {
    fontFamily: 'Oswald',
    fontSize: 16,
    fontWeight: 900,
    borderBottom: '1 solid #333',
    marginBottom: 5,
  },
  h3: {
    fontFamily: 'Oswald',
    fontSize: 14,
  },
  h4: {
    fontFamily: 'PT Sans',
    fontSize: 8,
    color: '#555',
  },
}) as ReactPDF.Styles

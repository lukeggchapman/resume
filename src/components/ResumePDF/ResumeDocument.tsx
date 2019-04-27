import React from 'react'
import {
  Page,
  Text,
  Link as PDFLink,
  View,
  Document,
  StyleSheet,
  Font,
} from '@react-pdf/renderer'
import PDFIcon from './PDFIcon'

import { ResumeData } from './resumePDF'
import Experience from './Experience'

interface ResumePDFProps {
  data: ResumeData
}

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
})

Font.register({
  family: 'PT Sans',
  src: 'http://fonts.gstatic.com/s/ptsans/v8/FUDHvzEKSJww3kCxuiAo2A.ttf',
})

const stylesObj = {
  page: {
    flexDirection: 'column' as 'column',
    backgroundColor: 'white',
    fontFamily: 'PT Sans',
    fontSize: 12,
  },
  header: {
    flexDirection: 'row' as 'row',
    padding: '2% 3%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1pt solid #333',
  },
  heading: {
    fontFamily: 'Oswald',
    fontWeight: 700,
    fontSize: 24,
    color: '#333',
  },
  info: {
    alignItems: 'right',
  },
  body: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  sidePanel: {
    flex: 1,
  },
  content: {
    flex: 2,
  },
  footer: {},
}
const styles = StyleSheet.create(stylesObj)

const ResumeDocument = ({ data }: ResumePDFProps) => {
  console.log('data', data)

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.heading}>Luke Chapman</Text>
          <View style={styles.info}>
            <Text>
              <PDFIcon icon="envelope" fas />
              {` `}
              <PDFLink src="mailto:lukeggchapman@gmail.com">
                LukeGGChapman@gmail.com
              </PDFLink>
            </Text>
            <Text>
              <PDFIcon icon="phone" fas />
              {` `}
              <PDFLink src="tel:+61401516361">+61 401 516 361</PDFLink>
            </Text>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.sidePanel}>
            <Text>Side Panel</Text>
          </View>
          <View style={styles.content}>
            <Experience data={data.experience} />
          </View>
        </View>
        <View style={styles.footer}>
          <Text>Footer</Text>
        </View>
      </Page>
    </Document>
  )
}

export default ResumeDocument

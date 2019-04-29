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

import ResumeData from './ResumeData'
import Experience from './Experience'
import Education from './Education'
import Section from './Section'

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
    color: '#333',
  },
  header: {
    flexDirection: 'row' as 'row',
    padding: '2% 3%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'Oswald',
    fontWeight: 700,
    fontSize: 24,
  },
  info: {
    alignItems: 'right',
  },
  body: {
    flexDirection: 'row',
    flexGrow: 1,
    padding: 10,
  },
  sidePanel: {
    flex: 1,
  },
  content: {
    flex: 3,
  },
  footer: {},
}
const styles = StyleSheet.create(stylesObj)

const ResumeDocument = ({ data }: ResumePDFProps) => {
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
            <Section title="Education">
              <Education />
            </Section>
            <Section title="Experience">
              <Experience data={data.experience} />
            </Section>
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

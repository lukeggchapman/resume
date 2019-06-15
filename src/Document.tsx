import React from 'react'
import {
  Page,
  Text,
  Link as PDFLink,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer'

import typography, { FAIcon } from 'components/typography'
import Section from 'components/Section'
import Experience from 'sections/Experience'
import Education from 'sections/Education'
import Skills from 'sections/Skills'

const stylesObj = {
  page: {
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: '20 30',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  info: {
    alignItems: 'right',
    fontFamily: 'PT Sans',
  },
  body: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  content: {
    flex: 6,
  },
  sidePanel: {
    flex: 1,
    marginLeft: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}
const styles = StyleSheet.create(stylesObj)

const ResumeDocument = () => {
  return (
    <Document title="Luke Chapman Résumé">
      <Page size="A4" style={[typography.body, styles.page]}>
        <View style={styles.header}>
          <Text style={typography.h1}>Luke Chapman</Text>
          <View style={styles.info}>
            <Text>
              <FAIcon icon="envelope" fas />
              {` `}
              <PDFLink src="mailto:lukeggchapman@gmail.com">
                LukeGGChapman@gmail.com
              </PDFLink>
            </Text>
            <Text>
              <FAIcon icon="phone" fas />
              {` `}
              <PDFLink src="tel:+61401516361">+61 401 516 361</PDFLink>
            </Text>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.content}>
            <Section title="Experience">
              <Experience />
            </Section>
            <Section title="Education">
              <Education />
            </Section>
          </View>
          <View style={styles.sidePanel}>
            <Section title="Skills">
              <Skills />
            </Section>
          </View>
        </View>
        <View style={[typography.h4, styles.footer]}>
          <Text>
            <FAIcon icon="github" fab />
            {` `}
            <PDFLink src="https://github.com/lukeggchapman">
              lukeggchapman
            </PDFLink>
          </Text>
          <Text>
            <FAIcon icon="linkedin" fab />
            {` `}
            <PDFLink src="https://www.linkedin.com/in/lukeggchapman">
              lukeggchapman
            </PDFLink>
          </Text>
          <Text>
            <FAIcon icon="react" fab />
            {` `}
            Created with React.
            {' Source code '}
            <PDFLink src="https://bit.ly/2VgE4pH">
              https://bit.ly/2VgE4pH
            </PDFLink>
          </Text>
        </View>
      </Page>
    </Document>
  )
}

export default ResumeDocument

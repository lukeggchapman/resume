import React from 'react'
import { Page, View, Document, StyleSheet } from '@react-pdf/renderer'

import typography from 'components/typography'
import Header from 'sections/Header'
import Experience from 'sections/Experience'
import Education from 'sections/Education'
import Skills from 'sections/Skills'
import Footer from 'sections/Footer'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: '20 30',
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
})

const ResumeDocument = () => {
  return (
    <Document title="Luke Chapman Résumé">
      <Page size="A4" style={[typography.body, styles.page]}>
        <Header />
        <View style={styles.body}>
          <View style={styles.content}>
            <Experience />
            <Education />
          </View>
          <View style={styles.sidePanel}>
            <Skills />
          </View>
        </View>
        <Footer />
      </Page>
    </Document>
  )
}

export default ResumeDocument

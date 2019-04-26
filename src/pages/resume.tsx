import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import {
  Page,
  Text,
  Link as PDFLink,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Font,
} from '@react-pdf/renderer'

import fa from '../utils/fontawesome'
import Layout from '../components/layout'
import SEO from '../components/seo'

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
})

Font.register({
  family: 'PT Sans',
  src: 'http://fonts.gstatic.com/s/ptsans/v8/FUDHvzEKSJww3kCxuiAo2A.ttf',
})

Font.register({
  family: 'Font Awesome 5 Free',
  src:
    'https://use.fontawesome.com/releases/v5.8.1/webfonts/fa-regular-400.ttf',
})

Font.register({
  family: 'Font Awesome 5 Free',
  src: 'https://use.fontawesome.com/releases/v5.8.1/webfonts/fa-brands-400.ttf',
})

Font.register({
  family: 'Font Awesome 5 Free',
  src: 'https://use.fontawesome.com/releases/v5.8.1/webfonts/fa-solid-900.ttf',
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
  icon: {
    fontFamily: 'Font Awesome 5 Free',
    fontWeight: 900,
  },
}
const styles = StyleSheet.create(stylesObj)

const PDFIcon = ({ icon }: { icon: keyof typeof fa }) => (
  <Text style={styles.icon}>{fa[icon]}</Text>
)

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.heading}>Luke Chapman</Text>
        <View style={styles.info}>
          <Text>
            <PDFIcon icon="envelope" />
            {` `}
            <PDFLink src="mailto:lukeggchapman@gmail.com">
              LukeGGChapman@gmail.com
            </PDFLink>
          </Text>
          <Text>
            <PDFIcon icon="phone" />
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
          <Text>Content</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </Page>
  </Document>
)

const ResumePage = () => (
  <Layout>
    <SEO title="Résumé" />
    <h1>Résumé</h1>
    <PDFViewer
      css={css`
        width: 100%;
        height: 1280px;
        border: 1px solid #777;
        background-color: white;
        box-shadow: 5px 5px 5px #777;
        overflow-x: hidden;
        overflow-y: hidden;
      `}
    >
      <MyDocument />
    </PDFViewer>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ResumePage

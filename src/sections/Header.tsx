import React from 'react'
import { StyleSheet, View, Text, Link as PDFLink } from '@react-pdf/renderer'
import typography, { FAIcon } from 'components/typography'

const stylesObj = {
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
}
const styles = StyleSheet.create(stylesObj)

export default () => (
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
        <PDFLink src="tel:+61401516361">0401 516 361</PDFLink>
      </Text>
    </View>
  </View>
)

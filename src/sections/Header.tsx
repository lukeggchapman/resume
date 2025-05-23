import React from 'react'
import { StyleSheet, View, Text } from '@react-pdf/renderer'
import typography from 'components/typography'
import IconLink from 'components/IconLink'

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  info: {
    alignItems: 'flex-end',
    fontFamily: 'Noto Sans',
    fontSize: 10,
  },
})

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={typography.h1}>Luke Chapman</Text>
      <View style={styles.info}>
        <IconLink src="mailto:lukeggchapman@gmail.com" icon="envelope" fas>
          lukeggchapman@gmail.com
        </IconLink>
        <IconLink src="tel:+61401516361" icon="phone" fas>
          0401516361
        </IconLink>
      </View>
    </View>
  )
}

import React from 'react'
import { StyleSheet, View, Text, Link as PDFLink } from '@react-pdf/renderer'
import IconLink from 'components/IconLink'
import typography from 'components/typography'
import FAIcon from 'components/FAIcon'

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default function Footer() {
  return (
    <View style={[typography.h4, styles.footer]}>
      <IconLink
        src="https://www.linkedin.com/in/lukeggchapman"
        icon="linkedin"
        fab
      >
        lukeggchapman
      </IconLink>
      <Text>
        <FAIcon icon="react" fab />
        {` `}
        Created with React.
        {' Source code '}
        <PDFLink src="https://bit.ly/2VgE4pH">https://bit.ly/2VgE4pH</PDFLink>
      </Text>
    </View>
  )
}

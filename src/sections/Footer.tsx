import React from 'react'
import typography, { FAIcon } from 'components/typography'
import { StyleSheet, View, Text, Link as PDFLink } from '@react-pdf/renderer'

const stylesObj = {
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}
const styles = StyleSheet.create(stylesObj)

export default () => (
  <View style={[typography.h4, styles.footer]}>
    <Text>
      <FAIcon icon="github" fab />
      {` `}
      <PDFLink src="https://github.com/lukeggchapman">lukeggchapman</PDFLink>
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
      <PDFLink src="https://bit.ly/2VgE4pH">https://bit.ly/2VgE4pH</PDFLink>
    </Text>
  </View>
)

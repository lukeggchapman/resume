import React from 'react'
import { StyleSheet, View, Text, Link as PDFLink } from '@react-pdf/renderer'
import IconLink from 'components/IconLink'
import typography from 'components/typography'
import FAIcon from 'components/FAIcon'

const stylesObj = {
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}
const styles = StyleSheet.create(stylesObj)

export default () => (
  <View style={[typography.h4, styles.footer]}>
    <IconLink src="https://github.com/lukeggchapman" icon="github" fab>
      lukeggchapman
    </IconLink>
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

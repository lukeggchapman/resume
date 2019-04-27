import React from 'react'
import { Font, Text, StyleSheet } from '@react-pdf/renderer'
import fa from '../../utils/fontawesome'

Font.register({
  family: 'Font Awesome 5 Free',
  fontWeight: 400,
  src:
    'https://use.fontawesome.com/releases/v5.8.1/webfonts/fa-regular-400.ttf',
})

Font.register({
  family: 'Font Awesome 5 Free',
  fontWeight: 900,
  src: 'https://use.fontawesome.com/releases/v5.8.1/webfonts/fa-solid-900.ttf',
})

const styles = StyleSheet.create({
  icon: {
    fontFamily: 'Font Awesome 5 Free',
  },
  far: {
    fontWeight: 400,
  },
  fas: {
    fontWeight: 900,
  },
})

type IconStyleProps =
  | {
      fas: true
      far?: false
    }
  | {
      fas?: false
      far: true
    }

interface PDFIconProps {
  icon: keyof typeof fa
}

export default ({ icon, far }: PDFIconProps & IconStyleProps) => (
  <Text style={[styles.icon, far ? styles.far : styles.fas]}>{fa[icon]}</Text>
)

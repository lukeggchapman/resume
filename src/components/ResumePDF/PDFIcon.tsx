import React from 'react'
import { Text, StyleSheet } from '@react-pdf/renderer'

import './pdfFonts/fontawesome'
import fa from 'utils/fontawesome'

const styles = StyleSheet.create({
  icon: {
    fontFamily: 'Font Awesome 5 Free',
  },
  fab: {
    fontWeight: 400,
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
      fab: true
      far?: false
      fas?: false
    }
  | {
      fab?: false
      far: true
      fas?: false
    }
  | {
      fab?: false
      far?: false
      fas: true
    }

interface PDFIconProps {
  icon: keyof typeof fa
}

export default ({ icon, fab, far, fas }: PDFIconProps & IconStyleProps) => {
  const faStyle =
    (fab && styles.fab) ||
    (far && styles.far) ||
    (fas && styles.fas) ||
    styles.far

  return <Text style={[styles.icon, faStyle]}>{fa[icon]}</Text>
}

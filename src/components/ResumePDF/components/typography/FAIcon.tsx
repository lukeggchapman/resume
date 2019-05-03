import React from 'react'
import { Text, StyleSheet } from '@react-pdf/renderer'

import './fonts/fontawesome'
import fa from './fonts/fontawesome/faUnicode'

export const styles = StyleSheet.create({
  icon: {
    fontFamily: 'Font Awesome 5 Free',
  },
  fab: {
    fontWeight: 700,
  },
  far: {
    fontWeight: 400,
  },
  fas: {
    fontWeight: 900,
  },
})

export type IconStyleProps =
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

export interface FAIconProps {
  icon: keyof typeof fa
}

export default ({ icon, fab, far, fas }: FAIconProps & IconStyleProps) => {
  const faStyle =
    (fab && styles.fab) ||
    (far && styles.far) ||
    (fas && styles.fas) ||
    styles.far

  return <Text style={[styles.icon, faStyle]}>{fa[icon]}</Text>
}

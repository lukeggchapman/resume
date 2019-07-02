/**
 * FAIcon is an implementation of Font Awesome Free for use with React-PDF.
 *
 * <FAIcon icon="github" fab /> for brand icons.
 * <FAIcon icon="envelope" far /> for regular icons.
 * <FAIcon icon="envelope" fas /> for solid icons.
 */

import React from 'react'
import { Text, StyleSheet } from '@react-pdf/renderer'

import './typography/fonts/fontawesome'
import fa from './typography/fonts/fontawesome/faUnicode.json'

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

export interface FAIconPropsCommon {
  icon: keyof typeof fa
}
export type FAIconProps = FAIconPropsCommon & IconStyleProps

const getTrueKey = (obj: IconStyleProps) => {
  const keys = (Object.keys(obj) as unknown) as (keyof IconStyleProps)[]

  return keys.find(key => !!obj[key]) as keyof IconStyleProps
}

const FAIcon = ({ icon, ...iconStyleProps }: FAIconProps) => {
  const faStyle = styles[getTrueKey(iconStyleProps)]

  return <Text style={[styles.icon, faStyle]}>{fa[icon]}</Text>
}

export default FAIcon

import React from 'react'
import { View, Text } from '@react-pdf/renderer'

import typography from './typography'

export interface SectionProps {
  title: string
  children: React.ReactNode
}

function Section({ title, children }: SectionProps) {
  return (
    <View>
      <Text style={typography.h2}>{title}</Text>
      {children}
    </View>
  )
}

export default Section

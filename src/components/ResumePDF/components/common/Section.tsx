import React from 'react'
import { View, Text } from '@react-pdf/renderer'

import typography from '../typography'

export interface SectionProps {
  title: string
  children: React.ReactNode
}

const Section = ({ title, children }: SectionProps) => (
  <View>
    <Text style={typography.h2}>{title}</Text>
    {children}
  </View>
)

export default Section

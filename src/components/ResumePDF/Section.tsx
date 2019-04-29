import React from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  container: {},
  sectionHeader: {
    fontFamily: 'Oswald',
    fontSize: 16,
  },
})

interface SectionProps {
  title: string
  children: React.ReactNode
}

const Section = ({ title, children }: SectionProps) => (
  <View style={styles.container}>
    <View style={styles.sectionHeader}>
      <Text>{title}</Text>
    </View>
    {children}
  </View>
)

export default Section

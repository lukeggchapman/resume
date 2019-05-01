import React from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  container: {},
  title: {
    fontFamily: 'Oswald',
    fontSize: 16,
    fontWeight: 900,
    marginBottom: 5,
  },
})

interface SectionProps {
  title: string
  children: React.ReactNode
}

const Section = ({ title, children }: SectionProps) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    {children}
  </View>
)

export default Section

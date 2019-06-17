import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'

import typography from '../../components/typography'

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    textTransform: 'capitalize',
    marginBottom: 5,
  },
  skill: {
    color: '#333',
  },
})

export interface SkillProps {
  title: string
  skills: string[]
}

const Skill = ({ title, skills }: SkillProps) => (
  <View style={styles.container}>
    <Text style={[typography.h3, styles.title]}>{title}</Text>
    {skills.map(skill => (
      <Text key={skill} style={[typography.h4, styles.skill]}>
        {skill}
      </Text>
    ))}
  </View>
)

export default Skill

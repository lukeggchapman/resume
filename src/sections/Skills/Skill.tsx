import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer'

import typography from 'components/typography'
import PDFBulletList from 'components/PDFBulletList'

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
    fontFamily: 'PT Sans',
    fontSize: 8,
  },
})

export interface SkillProps {
  title: string
  skills: string[]
}

function Skill({ title, skills }: SkillProps) {
  return (
    <View style={styles.container}>
      <Text style={[typography.h3, styles.title]}>{title}</Text>
      <PDFBulletList
        list={skills.map((skill) => (
          <Text key={skill} style={styles.skill}>
            {skill}
          </Text>
        ))}
      />
    </View>
  )
}

export default Skill

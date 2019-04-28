import React from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer'

import { ExperienceData } from './ResumeData'
import htmlToPDF from '../../utils/htmlToPDF'

interface ExperienceProps {
  data: ExperienceData
}

const styles = StyleSheet.create({
  content: {
    fontFamily: 'PT Sans',
    fontSize: 10,
  },
})

const sortGroupsByEndDate = (group: ExperienceData['group']) => {
  return group.sort((a, b) =>
    a.edges[0].node.frontmatter.endDate > b.edges[0].node.frontmatter.endDate
      ? 1
      : 0
  )
}

const Experience = ({ data }: ExperienceProps) => {
  const groupSorted = sortGroupsByEndDate(data.group)

  return (
    <>
      {groupSorted.map(group => {
        const { company } = group.edges[0].node.frontmatter

        return (
          <View key={company}>
            <Text>{company}</Text>
            {group.edges.map(edge => {
              const experience = edge.node
              const {
                endDateFormatted,
                startDate,
                endDate,
              } = experience.frontmatter

              return (
                <View style={styles.content} key={`${company}_${endDate}`}>
                  <Text>{`${startDate} - ${endDateFormatted}`}</Text>
                  <View>{htmlToPDF(experience.htmlAst)}</View>
                </View>
              )
            })}
          </View>
        )
      })}
    </>
  )
}

export default Experience

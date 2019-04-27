import React from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer'

import { ExperienceData } from './ResumePDF'

interface ExperienceProps {
  data: ExperienceData
}

const styles = StyleSheet.create({})

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
                <View key={`${company}_${endDate}`}>
                  <Text>{startDate}</Text>
                  <Text>{endDateFormatted}</Text>
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

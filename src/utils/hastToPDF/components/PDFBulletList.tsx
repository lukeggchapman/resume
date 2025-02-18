import React from 'react'
import { uid } from 'react-uid'
import { StyleSheet, View, Text } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    paddingBottom: 2,
  },
  bullet: {
    width: 10,
  },
})

export interface PDFLiProps {
  content: React.ReactNode
}

function PDFLi({ content }: PDFLiProps) {
  return (
    <View style={styles.row}>
      <View style={styles.bullet}>
        <Text>{'\u2022 '}</Text>
      </View>
      <View>{content}</View>
    </View>
  )
}

export interface PDFBulletListProps {
  list: React.ReactNode[]
}

function PDFBulletList({ list }: PDFBulletListProps) {
  return (
    <View style={styles.column}>
      {list.map((listItem) => (
        <PDFLi content={listItem} key={uid(listItem)} />
      ))}
    </View>
  )
}

export { PDFLi }
export default PDFBulletList

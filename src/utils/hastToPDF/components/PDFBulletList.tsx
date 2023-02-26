import React from 'react'
import { uid } from 'react-uid'
import { StyleSheet, View, Text } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 200,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flex: 1,
  },
  bullet: {
    width: 10,
  },
  bulletText: {
    flex: 1,
  },
  boldText: {
    fontWeight: 'bold',
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
      <View style={styles.bulletText}>{content}</View>
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

import React from 'react'
import { View, Text, StyleSheet, Image } from '@react-pdf/renderer'
import { format } from 'date-fns'

import hr from 'images/hr.png'
import dateDifference from 'utils/dateDifference'
import typography from './typography'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    fontSize: 10,
    padding: '0 5',
  },
  leftColumn: {
    flex: 1,
    alignItems: 'center',
    justifyItems: 'center',
    paddingRight: 5,
  },
  rightColumn: {
    flex: 7,
  },
  subTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentContainer: {
    flexDirection: 'column',
    width: '100%',
  },
  content: {
    marginTop: 5,
  },
  logo: {
    height: 35,
  },
  hr: {
    width: 400,
    alignSelf: 'center',
    margin: '10 0',
  },
  dates: {
    flexDirection: 'row',
  },
})

export interface ContentItemProps {
  title: string
  subTitle: string
  logo: string
  startDate: string
  endDate: string
  children?: React.ReactNode
}

const ContentItem = ({
  title,
  subTitle,
  logo,
  startDate,
  endDate,
  children,
}: ContentItemProps) => (
  <View style={styles.container}>
    <View style={styles.leftColumn}>
      <Image style={styles.logo} src={logo} safePath="." />
    </View>
    <View
      style={[
        styles.rightColumn,
        { alignSelf: children ? 'normal' : 'center' },
      ]}
    >
      <Text style={typography.h3}>{title}</Text>
      <View style={[typography.h4, styles.subTitle]}>
        <Text>{subTitle}</Text>
        <View>
          <Text>
            {`${format(startDate, 'MMM, YYYY')} \u2013 ${format(
              endDate,
              'MMM, YYYY'
            )}`}
            {` \u00B7 `}
            {dateDifference(startDate, endDate)}
          </Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        {children && <View style={styles.content}>{children}</View>}
        <Image style={styles.hr} src={hr} safePath="." />
      </View>
    </View>
  </View>
)

export default ContentItem

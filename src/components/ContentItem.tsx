import React from 'react'
import ReactPDF, { View, Text, StyleSheet, Image } from '@react-pdf/renderer'
import type { Style } from '@react-pdf/types'
import { format } from 'date-fns'

import hr from 'images/hr.png'
import dateDifference from 'utils/dateDifference'
import typography from './typography'

export const styles: ReactPDF.Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    fontSize: 10,
    padding: '0 5',
  },
  leftColumn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  style?: Style | undefined
  children?: React.ReactNode
}

function ContentItem({
  title,
  subTitle,
  logo,
  startDate,
  endDate,
  style,
  children,
}: ContentItemProps) {
  return (
    <View style={[styles.container, style ?? {}]}>
      <View style={styles.leftColumn}>
        <Image style={styles.logo} src={logo} />
      </View>
      <View
        data-testid="center-container"
        style={[
          styles.rightColumn,
          {
            alignSelf: children ? undefined : ('center' as const),
          },
        ]}
      >
        <Text style={typography.h3}>{title}</Text>
        <View style={[typography.h4, styles.subTitle]}>
          <Text>{subTitle}</Text>
          <View>
            <Text>
              {`${format(new Date(startDate), 'MMM, yyyy')} \u2013 ${format(
                new Date(endDate),
                'MMM, yyyy'
              )}`}
              {` \u00B7 `}
              {dateDifference(startDate, endDate)}
            </Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          {children && (
            <View style={styles.content} data-testid="content">
              {children}
            </View>
          )}
          <Image style={styles.hr} src={hr} />
        </View>
      </View>
    </View>
  )
}

ContentItem.defaultProps = {
  children: undefined,
  style: undefined,
}

export default ContentItem

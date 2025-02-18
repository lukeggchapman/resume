import React from 'react'
import ReactPDF, { View, Text, StyleSheet, Image } from '@react-pdf/renderer'
import type { Style } from '@react-pdf/types'
import { format } from 'date-fns'

import hr from 'images/hr.png'
import dateDifference from 'utils/dateDifference'
import typography from './typography'

export const styles: ReactPDF.Styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    fontSize: 8,
    padding: '10 6',
  },
  header: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  subTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentContainer: {
    flexDirection: 'column',
    width: '100%',
    padding: 10,
  },
  content: {
    marginTop: 5,
  },
  logo: {
    height: 35,
    paddingRight: 10,
  },
  hr: {
    width: 400,
    alignSelf: 'center',
    marginTop: 6,
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
      <View style={styles.header}>
        <Image style={styles.logo} src={logo} />
        <View style={{ flexGrow: 1, justifyContent: 'center' }}>
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
        </View>
      </View>
      {children && (
        <View style={styles.contentContainer}>
          <View style={styles.content} data-testid="content">
            {children}
          </View>
        </View>
      )}
      <Image style={styles.hr} src={hr} />
    </View>
  )
}

ContentItem.defaultProps = {
  children: undefined,
  style: undefined,
}

export default ContentItem

import React from 'react'
import { View, Text, StyleSheet, Image } from '@react-pdf/renderer'
import { differenceInMonths, addDays, format } from 'date-fns'

import hr from '../../images/hr.png'

const styles = StyleSheet.create({
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
  titleContainer: {
    flexDirection: 'column',
  },
  title: {
    fontFamily: 'Oswald',
    fontSize: 14,
  },
  subTitle: {
    fontFamily: 'PT Sans',
    fontSize: 10,
    color: '#555',
  },
  contentContainer: {
    flexDirection: 'column',
    width: '100%',
    overflow: 'hidden',
    flex: 1,
    flewShrink: 1,
    flewGrow: 1,
  },
  content: {
    marginTop: 5,
  },
  logo: {
    height: 35,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'bottom',
  },
  hr: {
    width: 400,
    alignSelf: 'center',
    margin: '10 0',
  },
})

const getDifference = (startDate: string, endDate: string) => {
  const endDateAdd1 = addDays(endDate, 1) // Most contracts will end on the last day of the month
  const total = differenceInMonths(endDateAdd1, startDate)
  const years = Math.floor(total / 12)
  const months = total % 12

  return [
    (years && `${years} yr${years > 1 ? 's' : ''}`) || undefined,
    (months && `${months} mo${months > 1 ? 's' : ''}`) || undefined,
  ]
    .filter(string => !!string)
    .join(' ')
}

interface ContentItemProps {
  title: string
  subTitle: string
  logo?: string
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
      {logo && <Image style={styles.logo} src={logo} />}
    </View>
    <View
      style={[
        styles.rightColumn,
        { alignSelf: children ? 'normal' : 'center' },
      ]}
    >
      <View style={styles.itemHeader}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>
            {`${format(startDate, 'MMM, YYYY')} \u2013 ${format(
              endDate,
              'MMM, YYYY'
            )}`}
            {` \u00B7 `}
            {getDifference(startDate, endDate)}
          </Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        {children && <View style={styles.content}>{children}</View>}
        <Image style={styles.hr} src={hr} />
      </View>
    </View>
  </View>
)

export default ContentItem

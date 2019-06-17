import { differenceInMonths, addDays } from 'date-fns'

/**
 * Takes two date strings and returns the distance from startDate
 * to endDate in the format of "3 yrs 1 mo"
 *
 * @param startDate date string
 * @param endDate date string
 */
const dateDifference = (startDate: string, endDate: string) => {
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

export default dateDifference

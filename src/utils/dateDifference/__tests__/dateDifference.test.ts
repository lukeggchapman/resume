import dateDifference from '../dateDifference'

const testData = [
  {
    startDate: '2012-02-01',
    endDate: '2015-07-31',
    result: '3 yrs 6 mos',
  },
  {
    startDate: '2010-01-01',
    endDate: '2018-12-31',
    result: '9 yrs',
  },
  {
    startDate: '2016-02-01',
    endDate: '2019-01-04',
    result: '2 yrs 11 mos',
  },
]

describe('dateDifference', () => {
  it('calculates differences correctly', () => {
    testData.forEach(({ startDate, endDate, result }) =>
      expect(dateDifference(startDate, endDate)).toEqual(result)
    )
  })
})

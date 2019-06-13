import { useStaticQuery } from 'gatsby'

import resumeQuery, { useResumeData } from '../resumeQuery'

const useStaticQueryMock = useStaticQuery as jest.Mock

describe('resume query', () => {
  it('should match snapshot', () => {
    expect(resumeQuery).toMatchSnapshot()
  })

  describe('useResumeData', () => {
    it('should return resume data', () => {
      const data = {
        some: 'data',
      }

      useStaticQueryMock.mockReturnValueOnce(data)

      expect(useResumeData()).toEqual(data)
      expect(useStaticQueryMock).toHaveBeenCalledTimes(1)
      expect(useStaticQueryMock).toHaveBeenCalledWith(resumeQuery)
    })
  })
})

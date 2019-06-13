import React from 'react'
import { shallow } from 'enzyme'
import { useStaticQuery } from 'gatsby'

import SEO, { SEOProps } from '../SEO'

jest.mock('react-helmet', () => 'Helmet')

const useStaticQueryMock = useStaticQuery as jest.Mock

const baseProps: SEOProps = {
  title: 'titleTest',
  description: 'descriptionTest',
  lang: 'langTest',
  keywords: ['keywordTest1', 'keywordTest1'],
  meta: [
    {
      name: 'extendedMeta',
      content: 'Test',
    },
  ],
}

describe('SEO', () => {
  useStaticQueryMock.mockReturnValue({
    site: {
      siteMetadata: {
        description: 'siteDescriptionTest',
        author: 'authorDescriptionTest',
        title: 'titleTest',
      },
    },
  })

  const render = (props?: Partial<SEOProps>) => {
    return shallow(<SEO {...{ ...baseProps, ...props }} />)
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly', () => {
    expect(render()).toMatchSnapshot()
  })

  it('renders with defaultProps', () => {
    expect(shallow(<SEO title="defaultsTestTitle" />)).toMatchSnapshot()
  })

  it('graphql query remains unchanged', () => {
    render()

    expect(useStaticQueryMock).toHaveBeenCalledTimes(1)
    expect(useStaticQueryMock.mock.calls[0][0]).toMatchSnapshot()
  })

  it('supports not passing keywords', () => {
    const seo = render({ keywords: [] })

    const keywordsMetadata = seo
      .prop<NonNullable<SEOProps['meta']>>('meta')
      .filter(metadata => metadata.name === 'keywords')

    expect(keywordsMetadata).toEqual([])
  })
})

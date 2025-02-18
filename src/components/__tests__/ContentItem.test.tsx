import React from 'react'
import { render } from '@testing-library/react'

import ContentItem, { ContentItemProps } from '../ContentItem'

const baseProps: ContentItemProps = {
  title: 'titleTest',
  subTitle: 'subTitleTest',
  logo: 'logoTest',
  startDate: '2010-05-05',
  endDate: '2012-06-06',
  children: 'ReactNodeTest',
}

describe('ContentItem', () => {
  const renderContentItem = (props?: Partial<ContentItemProps>) =>
    render(<ContentItem {...{ ...baseProps, ...props }} />)

  it('not passing children removes content', () => {
    const contentItem = renderContentItem({ children: undefined })

    expect(contentItem.queryByTestId('content')).toBeNull()
  })

  it('allows setting container style', () => {
    const contentItem = renderContentItem({
      children: undefined,
      style: { padding: '10px' },
    })
    const pdfStyle = JSON.parse(
      (contentItem.container.firstChild as HTMLElement | null)?.dataset.style ??
        '{}'
    )

    expect(pdfStyle).toHaveLength(2)
    expect(pdfStyle[1]).toEqual({ padding: '10px' })
  })
})

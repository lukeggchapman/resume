import React from 'react'
import { shallow } from 'enzyme'
import { View } from '@react-pdf/renderer'

import ContentItem, {
  getLogoSrc,
  ContentItemProps,
  styles,
} from '../ContentItem'

const baseProps: ContentItemProps = {
  title: 'titleTest',
  subTitle: 'subTitleTest',
  logo: 'logoTest',
  startDate: '2010-05-05',
  endDate: '2012-06-06',
  children: 'ReactNodeTest',
}

describe('ContentItem', () => {
  const render = (props?: Partial<ContentItemProps>) =>
    shallow(<ContentItem {...{ ...baseProps, ...props }} />)

  it('renders correctly', () => {
    process.env.NODE_ENV = 'development'

    expect(render()).toMatchSnapshot()
  })

  it('not passing children removes content', () => {
    const contentItem = render({ children: undefined })

    expect(contentItem.find({ style: styles.content }).exists()).toBeFalsy()
  })

  it('not passing children aligns content with logo', () => {
    const contentItem = render({ children: undefined })

    expect(
      contentItem
        .find(View)
        .at(2)
        .prop('style')
    ).toEqual(
      expect.arrayContaining([
        {
          alignSelf: 'center',
        },
      ])
    )
  })
})

describe('getLogoSrc', () => {
  it('adds public path in production', () => {
    const somePath = 'some/path.png'
    process.env.NODE_ENV = 'production'

    expect(getLogoSrc(somePath)).toEqual(`./public/${somePath}`)
  })

  it('does nothing in development', () => {
    const somePath = 'some/other/path.png'
    process.env.NODE_ENV = 'development'

    expect(getLogoSrc(somePath)).toEqual(somePath)
  })
})

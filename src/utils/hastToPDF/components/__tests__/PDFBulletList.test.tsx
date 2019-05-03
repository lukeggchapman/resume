import React from 'react'
import { shallow } from 'enzyme'

import PDFBulletList, {
  PDFBulletListProps,
  PDFLi,
  PDFLiProps,
} from '../PDFBulletList'

describe('PDFLi', () => {
  const baseProps: PDFLiProps = {
    content: 'ListItem1',
  }
  const render = () => shallow(<PDFLi {...baseProps} />)

  it('renders correctly', () => {
    expect(render()).toMatchSnapshot()
  })
})

describe('PDFBulletList', () => {
  const baseProps: PDFBulletListProps = {
    list: ['ListItem1', 'ListItem2'],
  }
  const render = () => shallow(<PDFBulletList {...baseProps} />)

  it('renders correctly', () => {
    expect(render()).toMatchSnapshot()
  })
})

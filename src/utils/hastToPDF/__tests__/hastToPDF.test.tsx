import React from 'react'
import { shallow } from 'enzyme'
import { View, Text } from '@react-pdf/renderer'
import { uid } from 'react-uid'

import { Root, Text as HastText } from 'hast-format'
import hast2pdf from '../hastToPDF'
import BulletListPDF from '../components/PDFBulletList'

const bullet1: HastText = {
  type: 'text',
  value: 'point 1.',
}
const bullet2: HastText = {
  type: 'text',
  value: 'point 2.',
}
const hast: Root = {
  type: 'root',
  children: [
    {
      type: 'element',
      tagName: 'p',
      properties: {},
      children: [
        {
          type: 'text',
          value: 'Some paragraph.',
        },
      ],
    },
    {
      type: 'text',
      value: '\n',
    },
    {
      type: 'element',
      tagName: 'ul',
      properties: {},
      children: [
        {
          type: 'text',
          value: '\n',
        },
        {
          type: 'element',
          tagName: 'li',
          properties: {},
          children: [bullet1],
        },
        {
          type: 'text',
          value: '\n',
        },
        {
          type: 'element',
          tagName: 'li',
          properties: {},
          children: [bullet2],
        },
        {
          type: 'text',
          value: '\n',
        },
      ],
    },
    {
      type: 'text',
      value: '\n',
    },
  ],
  data: {
    quirksMode: false,
  },
}

const result = [
  <View key={uid(hast.children[0])}>
    <Text>Some paragraph.</Text>
  </View>,
  <Text key={uid(hast.children[1])}>{`\n`}</Text>,
  <BulletListPDF
    key={uid(hast.children[2])}
    list={[
      [<Text key={uid(bullet1)}>point 1.</Text>],
      [<Text key={uid(bullet2)}>point 2.</Text>],
    ]}
  />,
  <Text key={uid(hast.children[3])}>{`\n`}</Text>,
]

describe('hast2pdf', () => {
  it('transforms hast to react-pdf jsx', () => {
    const PDF = shallow(<View>{hast2pdf(hast)}</View>)

    expect(PDF.matchesElement(<View>{result}</View>)).toBeTruthy()
  })

  it('returns nothing with empty hast', () => {
    const emptyHast = {
      type: 'root',
      children: [],
      data: {
        quirksMode: false,
      },
    }

    expect(hast2pdf(emptyHast)).toEqual(undefined)
  })
})

import React from 'react'
import { render } from '@testing-library/react'
import { View, Text } from '@react-pdf/renderer'
import { uid } from 'react-uid'
import { HastNodes } from 'mdast-util-to-hast/lib'

import { Root, Text as HastText } from 'hast'
import BulletListPDF from 'components/PDFBulletList'
import hastToPDF from '../hastToPDF'

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

const expected = [
  <View key={uid(hast.children[0])}>
    <Text hyphenationCallback={(e) => [e]}>Some paragraph.</Text>
  </View>,
  <Text
    hyphenationCallback={(e) => [e]}
    key={uid(hast.children[1])}
  >{`\n`}</Text>,
  <BulletListPDF
    key={uid(hast.children[2])}
    list={[
      [
        <Text hyphenationCallback={(e) => [e]} key={uid(bullet1)}>
          point 1.
        </Text>,
      ],
      [
        <Text hyphenationCallback={(e) => [e]} key={uid(bullet2)}>
          point 2.
        </Text>,
      ],
    ]}
  />,
  <Text
    hyphenationCallback={(e) => [e]}
    key={uid(hast.children[3])}
  >{`\n`}</Text>,
]

describe('hastToPDF', () => {
  it('transforms hast to react-pdf jsx', () => {
    const result = hastToPDF(hast)
    const resultContainer = render(<View>{hastToPDF(hast)}</View>)
    const expectedContainer = render(<View>{expected}</View>)

    expect(result).toMatchDiffSnapshot(expected) // shallow
    expect(resultContainer).toMatchDiffSnapshot(expectedContainer) // render
  })

  it('returns nothing with empty hast', () => {
    const emptyHast: HastNodes = {
      type: 'root',
      children: [],
      data: {
        quirksMode: false,
      },
    }

    expect(hastToPDF(emptyHast)).toEqual(undefined)
  })

  it('adds hyphenationCallback to all Text elements', () => {
    const textHast: HastNodes = {
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
      ],
      data: {
        quirksMode: false,
      },
    }

    const result = hastToPDF(textHast)
    const hyphenationCallback = (result as any)?.[0]?.props?.children[0]?.props
      ?.hyphenationCallback

    expect(hyphenationCallback).toBeDefined()
    expect(hyphenationCallback('test')).toEqual(['test'])
  })

  it('throws error when called with invalid root object', () => {
    expect(() => hastToPDF({} as any)).toThrowError(
      `hastToPDF: Called with invalid root node`
    )
  })

  it('throws error when called with unsupported node type', () => {
    const type = 'random123'
    expect(() => hastToPDF({ type } as any)).toThrowError(
      `hastToPDF: Cannot compile unknown node ${type}`
    )
  })

  it('throws error when called with unsupported html element', () => {
    const tagName = 'strong'
    const element: HastNodes = {
      type: 'element',
      tagName,
      children: [],
    }

    expect(() => hastToPDF(element)).toThrowError(
      `hastToPDF: No transform for html element ${tagName}`
    )
  })
})

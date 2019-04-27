import React from 'react'
import idObj from 'identity-obj-proxy'
import { View, Text } from '@react-pdf/renderer'

import { Root } from './hast.d'
import html2pdf from './html2pdf'

jest.mock('@react-pdf/renderer')

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
          children: [
            {
              type: 'text',
              value: 'point 1.',
            },
          ],
        },
        {
          type: 'text',
          value: '\n',
        },
        {
          type: 'element',
          tagName: 'li',
          properties: {},
          children: [
            {
              type: 'text',
              value: 'point 2.',
            },
          ],
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

const styles = idObj as any

const result = (
  <View>
    <View>
      <Text>Some paragraph.</Text>
    </View>
    <View style={styles.column}>
      <View style={styles.row}>
        <View style={styles.bullet}>
          <Text>{'\u2022 '}</Text>
        </View>
        <View style={styles.bulletText}>
          <Text>point 1.</Text>
        </View>
      </View>
    </View>
    <View style={styles.row}>
      <View style={styles.bullet}>
        <Text>{'\u2022 '}</Text>
      </View>
      <View style={styles.bulletText}>
        <Text>point 2.</Text>
      </View>
    </View>
  </View>
)

describe('html2pdf', () => {
  it('transforms hast to react-pdf jsx', () => {
    expect(html2pdf(hast)).toEqual(result)
  })
})

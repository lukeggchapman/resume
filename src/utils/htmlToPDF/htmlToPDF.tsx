/* eslint-disable no-use-before-define, @typescript-eslint/no-use-before-define */
import React from 'react'
import { uid } from 'react-uid'
import { View, Text } from '@react-pdf/renderer'

import { Node, Root, Text as HastText, Element } from './hast.d'
import PDFBulletList from './PDFBulletList'

const getBulletList = (element: Element) => {
  return element.children
    .filter((node): node is Element => node.tagName === 'li')
    .map(node => node.children)
    .map(children => children.map(node => htmlToPDF(node)))
}

const handlers = {
  root: (root: Root): React.ReactNode => {
    const children = root && root.children

    return children.map(htmlToPDF)
  },
  text: (text: HastText): React.ReactNode => {
    return <Text key={uid(text)}>{text.value}</Text>
  },
  element: (element: Element): React.ReactNode => {
    const { tagName, children } = element

    switch (tagName) {
      case 'p':
        return <View key={uid(element)}>{children.map(htmlToPDF)}</View>
      case 'ul':
        return (
          <PDFBulletList key={uid(element)} list={getBulletList(element)} />
        )
      default:
        throw new Error(`htmlToPDF: No transform for html element ${tagName}`)
    }
  },
}

function htmlToPDF(node: Node): React.ReactNode {
  const type = node && node.type

  if (!type) {
    throw new Error(`htmlToPDF: Expected node, not ${node}`)
  }

  switch (type) {
    case 'root':
      return handlers.root(node as Root)
    case 'text':
      return handlers.text(node as HastText)
    case 'element':
      return handlers.element(node as Element)
    default:
      throw new Error(`htmlToPDF: Cannot compile unknown node ${type}`)
  }
}

export default htmlToPDF

/* eslint-disable no-use-before-define, @typescript-eslint/no-use-before-define */
/**
 * Crude hast (HTML AST) to React-PDF format JSX transform
 */

import React from 'react'
import { uid } from 'react-uid'
import { View, Text } from '@react-pdf/renderer'
import { HastNodes } from 'mdast-util-to-hast/lib'

import { Root, Text as HastText, Element } from 'hast'
import PDFBulletList from './components/PDFBulletList'

const getBulletList = (element: Element) => {
  return element.children
    .filter(
      (node): node is Element =>
        node.type === 'element' && node.tagName === 'li'
    )
    .map((node) => node.children)
    .map((children) => children.map((node) => hastToPDF(node)))
}

const handlers = {
  root: (root: Root): React.ReactNode => {
    const { children } = root

    if (children.length) {
      return children.map(hastToPDF)
    }

    // empty root has no react-PDF equiv
    return undefined
  },
  text: (text: HastText): React.ReactNode => {
    return <Text key={uid(text)}>{text.value}</Text>
  },
  element: (element: Element): React.ReactNode => {
    const { tagName, children } = element

    switch (tagName) {
      case 'p':
        return <View key={uid(element)}>{children.map(hastToPDF)}</View>
      case 'ul':
        return (
          <PDFBulletList key={uid(element)} list={getBulletList(element)} />
        )
      default:
        throw new Error(`hastToPDF: No transform for html element ${tagName}`)
    }
  },
}

function isHandledType(type: string): type is keyof typeof handlers {
  return Object.keys(handlers).indexOf(type) !== -1
}

function hastToPDF(node: HastNodes | null | undefined): React.ReactNode {
  const type = node && node.type

  if (!type) {
    throw new Error(`hastToPDF: Called with invalid root node`)
  }

  if (!isHandledType(type)) {
    throw new Error(`hastToPDF: Cannot compile unknown node ${type}`)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return handlers[type](node as any)
}

export default hastToPDF

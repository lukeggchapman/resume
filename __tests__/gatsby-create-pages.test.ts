import ReactPDF from '@react-pdf/renderer'
import React from 'react'
import gatsbyCreatePages, { CreatePagesProps } from '../gatsby-create-pages'

const reactPDFRenderMock = ReactPDF.render as jest.Mock

jest.mock('../src/components/ResumePDF/components/Document', () => ({
  default: 'Document',
}))
jest.mock('../src/components/ResumePDF/resumeQuery', () => ({
  default: 'resumeQuery',
}))
jest.mock('react', () => ({
  createElement: jest.fn((Component: React.ComponentType, props: object) => [
    Component,
    props,
  ]),
}))

const graphqlPromise = Promise.resolve({ data: 'resumeDataTest' })
const graphqlMock = jest.fn(() => graphqlPromise)
const createPageMock = jest.fn()
const baseProps: CreatePagesProps = {
  graphql: graphqlMock as any,
  actions: {
    createPage: createPageMock,
  },
}

describe('gatsby-create-pages', () => {
  const createPages = () => gatsbyCreatePages(baseProps)

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('production environment', () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'production'
    })

    it('calls graphql with resumeQuery', () => {
      createPages()

      expect(graphqlMock).toHaveBeenCalledWith('resumeQuery')
    })

    it('creates PDF', async () => {
      createPages()

      const resumeData = await graphqlMock()

      expect(React.createElement).toHaveBeenCalledWith('Document', resumeData)
    })

    it('calls pdf render with correct params', async () => {
      createPages()

      await graphqlMock()

      expect(reactPDFRenderMock.mock.calls[0]).toEqual(
        expect.arrayContaining([
          [
            'Document',
            {
              data: 'resumeDataTest',
            },
          ],
          expect.any(String),
        ])
      )
    })

    it('createPage to be called with correct params', async () => {
      createPages()

      await graphqlMock()
      await reactPDFRenderMock()

      expect(createPageMock).toHaveBeenCalledWith({
        path: '/',
        component: expect.any(String),
        context: {
          pdfPublicURL: expect.any(String),
        },
      })
      expect(createPageMock).toHaveBeenCalledTimes(1)
    })
  })

  describe('development environment', () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'development'
    })

    it('createPage to be called with correct params', async () => {
      createPages()

      expect(createPageMock).toHaveBeenCalledWith({
        path: '/',
        component: expect.any(String),
      })
      expect(createPageMock).toHaveBeenCalledTimes(1)
    })
  })
})

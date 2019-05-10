import path from 'path'
import React from 'react'
import ReactPDF from '@react-pdf/renderer'
import { ResumeData } from './src/components/ResumePDF/resumeQuery'

/* -------------------- Utils -------------------- */

const createPDF = <P>(
  Component: React.ComponentType<P>,
  props: P,
  filePath: string
) => {
  return ReactPDF.render(React.createElement(Component, props), filePath)
}

// dynamically import resume document and add typings, necessary to avoid import in development
const importResume = () => {
  // eslint-disable-next-line global-require
  const untyped = require('./src/components/ResumePDF/components/Document')
    .default

  return untyped as React.ComponentType<{
    data: ResumeData
  }>
}

/**
 * This is currently the only way to share gatsby graphql query definitions between server side and client side.
 * gatsby relies on it's graphql tag template to inject data at build time.
 * In an unbuilt node environment graphql has the definition () => void and throws a warning.
 * This is avoided by using a babel module alias of { "gatsby": "./gatsby-node-proxy.ts" } where graphql is mocked as:
 * (query: TemplateStringArray) => query.raw[0]
 * This returns the original query string for use on the server side, but the types need to be redefined as below.
 */
const importResumeQuery = () => {
  // eslint-disable-next-line global-require
  const untyped = require('./src/components/ResumePDF/resumeQuery').default

  return untyped as string
}

/* ----------------- Create Pages ----------------- */

interface CreatePageProps {
  path: string
  component: string
  layout?: string
  context?: object
}

export interface CreatePagesProps {
  graphql: <D>(query: string) => PromiseLike<{ data: D }>
  actions: {
    createPage: (page: CreatePageProps) => void
  }
}

const createPages = async ({ graphql, actions }: CreatePagesProps) => {
  const { createPage } = actions
  const isProduction = process.env.NODE_ENV === 'production'

  if (isProduction) {
    // Server Side Render PDF

    const resumeQuery = importResumeQuery()
    const resumeProps = await graphql<ResumeData>(resumeQuery)
    const ResumeDocument = importResume()

    const pdfName = 'LukeChapmanResume.pdf'
    const pdfPublicURL = path.join('static', pdfName)
    const staticDir = path.join(process.cwd(), `public`, `static`)
    const pdfPath = path.join(staticDir, pdfName)

    await createPDF(ResumeDocument, resumeProps, pdfPath)

    return createPage({
      path: '/',
      component: path.resolve('./src/templates/PDFEmbed.tsx'),
      context: {
        pdfPublicURL,
      },
    })
  }

  // client side render PDF
  return createPage({
    path: '/',
    component: path.resolve('./src/components/ResumePDF/ResumePDF.tsx'),
  })
}

export default createPages

import path from 'path'
import React from 'react'
import ReactPDF from '@react-pdf/renderer'
import resumeQuery, { ResumeData } from './src/components/ResumePDF/resumeQuery'

/* -------------------- Utils -------------------- */

const createPDF = <P>(
  Component: React.ComponentType<P>,
  props: P,
  filePath: string
) => {
  return ReactPDF.render(React.createElement(Component, props), filePath)
}

// dynamically import resume document and add typings, necessary to avoid import in development
const importResume = async () => {
  // eslint-disable-next-line
  const untyped = require('./src/components/ResumePDF/components/Document')
    .default

  return untyped as React.ComponentType<{
    data: ResumeData
  }>
}

/* ----------------- Create Pages ----------------- */

interface CreatePageProps {
  path: string
  component: string
  layout?: string
  context?: object
}

interface CreatePagesProps {
  graphql: <D>(query: string) => PromiseLike<{ data: D }>
  actions: {
    createPage: (page: CreatePageProps) => void
  }
}

const createPages = async ({ graphql, actions }: CreatePagesProps) => {
  const { createPage } = actions
  const isProduction = process.env.NODE_ENV === 'production'
  const resumeProps = await graphql<ResumeData>(resumeQuery)

  if (isProduction) {
    // Server Side Render PDF
    const ResumeDocument = await importResume()
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

  // Send data to client side PDF
  return createPage({
    path: '/',
    component: path.resolve('./src/components/ResumePDF/ResumePDF.tsx'),
    context: {
      /**
       * Passing data like this is not ideal as this will prevent hot reloading on content change.
       * Due to gatsby's limitation on queries needing to exist within client side files
       * the alternative solution involves duplicating the query
       */
      resumeData: resumeProps.data,
    },
  })
}

export default createPages

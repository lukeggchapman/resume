import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ResumePDF from '../components/ResumePDF'

import psyfari from '../../content/experience/psyfari.png'

const ResumePage = () => {
  return (
    <Layout>
      <SEO title="Résumé" />
      <h1>Résumé</h1>
      <img src={psyfari} />
      <ResumePDF />

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default ResumePage

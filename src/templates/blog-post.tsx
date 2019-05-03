import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

interface BlogPostTemplateProps {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        title: string
      }
    }
  }
}

const BlogPostTemplate = ({ data }: BlogPostTemplateProps) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

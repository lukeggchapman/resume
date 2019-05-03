import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { rhythm } from '../utils/typography'
import Layout from '../components/layout'

interface BlogProps {
  data: {
    allMarkdownRemark: {
      totalCount: number
      edges: {
        node: {
          id: string
          frontmatter: {
            title: string
            date: string
          }
          fields: {
            slug: string
          }
          excerpt: string
        }
      }[]
    }
  }
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { sourceInstanceName: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

const Blog = ({ data }: BlogProps) => {
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Amazing Pandas Eating Things
        </h1>
        <h4>{`${data.allMarkdownRemark.totalCount} Posts`}</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {`${node.frontmatter.title} `}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  {`— ${node.frontmatter.date}`}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Blog

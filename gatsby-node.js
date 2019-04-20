/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const parent = getNode(node.parent)
    const sourceName = parent.sourceInstanceName

    if (sourceName === 'blog') {
      const slug = path.join('blog', createFilePath({ node, getNode }))

      createNodeField({
        node,
        name: 'slug',
        value: slug,
      })
    }

    // Copy sourceInstanceName to remark nodes to allow for filtering by named filesystem config
    createNodeField({
      node,
      name: 'sourceInstanceName',
      value: sourceName,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        filter: { fields: { sourceInstanceName: { eq: "blog" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/blog-post.tsx'),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    })
  })
}

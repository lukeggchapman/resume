/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const parent = getNode(node.parent)
    const sourceName = parent.sourceInstanceName

    // Copy sourceInstanceName to remark nodes to allow for filtering by named filesystem config
    createNodeField({
      node,
      name: 'sourceInstanceName',
      value: sourceName,
    })
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  // enable absolute imports
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

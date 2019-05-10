/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

const resolvableExtensions = ['.ts', '.tsx', '.jsx', '.js']

require('@babel/register')({ extensions: resolvableExtensions })

const createPages = require('./gatsby-create-pages').default

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

exports.onCreateWebpackConfig = ({ actions, loaders }) => {
  actions.setWebpackConfig({
    // add typescript file loader
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: loaders.js(),
        },
      ],
    },

    // enable absolute imports
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

exports.resolvableExtensions = () => resolvableExtensions

exports.createPages = createPages

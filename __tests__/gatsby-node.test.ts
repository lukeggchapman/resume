const { createFilePath } = require(`gatsby-source-filesystem`)
const {
  onCreateNode,
  onCreateWebpackConfig,
  resolvableExtensions,
} = require('../gatsby-node')

jest.mock('gatsby-source-filesystem', () => ({ createFilePath: jest.fn() }))

const createFilePathMock = createFilePath as jest.Mock

describe('Gatsby Node', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('onCreateNode', () => {
    const createNode = (type: 'MarkdownRemark' | 'other') => ({
      internal: {
        type,
      },
    })
    const sourceName = 'experience'
    const getNodeMock = jest.fn(() => ({
      sourceInstanceName: sourceName,
    }))
    const createNodeFieldMock = jest.fn()
    const actionsMock = {
      createNodeField: createNodeFieldMock,
    }

    it('does nothing to non markdown nodes', () => {
      const node = createNode('other')

      onCreateNode({
        node,
        actions: actionsMock,
      })

      expect(createNodeFieldMock).not.toHaveBeenCalled()
    })

    it('adds sourceInstanceName to markdown nodes', () => {
      const node = createNode('MarkdownRemark')

      onCreateNode({
        node,
        getNode: getNodeMock,
        actions: actionsMock,
      })

      expect(createNodeFieldMock).toHaveBeenCalledTimes(1)
      expect(createNodeFieldMock).toHaveBeenCalledWith({
        node,
        name: 'sourceInstanceName',
        value: sourceName,
      })
    })
  })

  describe('onCreateWebpackConfig', () => {
    it('enables absolute imports', () => {
      const actions = {
        setWebpackConfig: jest.fn(),
      }
      const loaders = {
        js: jest.fn(),
      }

      onCreateWebpackConfig({ actions, loaders })

      expect(actions.setWebpackConfig).toHaveBeenCalledWith({
        module: {
          rules: [
            {
              test: /\.tsx?$/,
              use: loaders.js(),
            },
          ],
        },
        resolve: {
          modules: [expect.stringMatching(/src$/), 'node_modules'],
        },
      })
    })
  })

  describe('resolvableExtensions', () => {
    it('should return the resolvable extensions', () => {
      expect(resolvableExtensions()).toEqual(['.ts', '.tsx', '.jsx', '.js'])
    })
  })
})

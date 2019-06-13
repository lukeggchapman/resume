const gatsbyConfig = require('../gatsby-config')

describe('Gatsby Config', () => {
  it('config has not changed', () => {
    global.__dirname = 'some/path' // eslint-disable-line

    expect(gatsbyConfig).toMatchSnapshot()
  })
})

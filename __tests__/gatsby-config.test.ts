const gatsbyConfig = require('../gatsby-config')

describe('Gatsby Config', () => {
  it('config has not changed', () => {
    expect(gatsbyConfig).toMatchSnapshot()
  })
})

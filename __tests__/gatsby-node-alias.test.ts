import { graphql, useStaticQuery } from '../gatsby-node-alias'

describe('gatsby-node-alias', () => {
  it('mocks graphql', () => {
    expect(graphql`someQuery`).toEqual('someQuery')
  })

  it('mocks useStaticQuery', () => {
    expect(useStaticQuery()).toEqual(undefined)
  })
})

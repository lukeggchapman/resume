import { graphql } from '../gatsby-node-alias'

describe('gatsby-node-alias', () => {
  it('returns original string', () => {
    expect(graphql`someQuery`).toEqual('someQuery')
  })
})

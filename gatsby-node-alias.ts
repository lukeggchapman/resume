/**
 * This is a proxy for the gatsby import in a node environment.
 * See full explanation in gatsby-createPages.ts importResumeQuery definition.
 */

export const useStaticQuery = () => {}
export const graphql = (query: TemplateStringsArray) => query.raw[0]

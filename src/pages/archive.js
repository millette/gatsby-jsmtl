// npm
import React from 'react'
import { graphql } from 'gatsby'

// self
import { Layout, Years } from '../components'
import { date } from '../utils'

export default ({ data: { recent: { edges: [{ node }] }, allMeetupsJson: { totalCount, edges: [{ node: { on } }] } } }) => (
  <Layout>
    <p>We've had {totalCount} meetups since {date(on)}.</p>
    <Years first={on} last={node.on} />
  </Layout>
)

export const query = graphql`
  query {
    allMeetupsJson (
      limit: 1
      sort: {
        fields: [num]
        order: ASC
      }
    ) {
      totalCount
      edges {
        node {
          on
        }
      }
    }

    recent: allMeetupsJson (
      limit: 1
      sort: {
        fields: [num]
        order: DESC
      }
    ) {
      edges {
        node {
          on
        }
      }
    }
  }
`

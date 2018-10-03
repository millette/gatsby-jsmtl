// npm
import React from 'react'
import { graphql } from 'gatsby'

// self
import { Layout, Map, Event } from '../components'

export default ({ data: { allMeetupsJson: { totalCount, edges: [{ node }] } } }) => (
  <Layout>
    <p>We've had {totalCount} meetups so far!</p>
    <Event {...node} />
    <Map no />
  </Layout>
)

export const query = graphql`
  query {
    allMeetupsJson (
      limit: 1
      sort: {
        fields: [num]
        order: DESC
      }
    ) {
      totalCount
      edges {
        node {
          singleSession
          specialevent {
            relativePath
            publicURL
          }
          num
          title
          on
          speakers {
            title
            name
            url
            email
            synopsis
          }
          blurb
          singleSession
        }
      }
    }
  }
`

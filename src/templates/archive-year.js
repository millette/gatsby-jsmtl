// npm
import React from 'react'
import { graphql } from 'gatsby'

// self
import { Layout, Event } from '../components'
import { date } from '../utils'

export default ({ pageContext: { year }, data: { last: { edges: [{ node }] }, tot, allMeetupsJson: { totalCount, edges } } }) => {
  return (
    <Layout>
      <p>
        We've had {tot.totalCount} meetups since {date(node.on)}{year && ` and ${totalCount} in ${year}`}.
      </p>
      {edges.map(({ node }) => (
        <Event {...node} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query ($yearRegex: String!) {
    tot: allMeetupsJson (limit: 0) {
      totalCount
    }

    last: allMeetupsJson (
      limit: 1
      sort: {
        fields: [num]
        order: ASC
      }
    ) {
      edges {
        node {
          on
        }
      }
    }

    allMeetupsJson (
      skip: 0
      filter: {
        on: {
          regex: $yearRegex
        }
      }
      sort: {
        fields: [num]
        order: DESC
      }
    ) {
      totalCount
      edges {
        node {
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
        }
      }
    }
  }
`

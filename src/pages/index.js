// npm
import React from 'react'
import { graphql } from 'gatsby'

// self
import { Map, Footer, Nav, Session } from '../components'

const date = (dateStr) => {
  const year = parseInt(dateStr.slice(0, 4), 10)
  const month = parseInt(dateStr.slice(4, 6), 10) - 1
  const day = parseInt(dateStr.slice(6, 8), 10)
  return new Date(year, month, day, 12).toDateString()
}

export default ({ data: { allMeetupsJson: { totalCount, edges } } }) => {
  const { num, title, on, blurb, speakers, specialevent } = edges[0].node
  return (
    <div style={{ padding: '1rem' }}>
      <Nav />
      <p>We've had {totalCount} meetups so far!</p>
      <h2>#{num} {title} on <small>{date(on)}</small></h2>
      <p>{blurb}</p>
      {specialevent && specialevent.publicURL && <a href={specialevent.publicURL}>special</a>}
      <div style={{ display: 'flex' }}>
        {speakers.map((speaker, i) => (
          <Session key={i} {...speaker} />
        ))}
      </div>
      <Map no />
      <Footer />
    </div>
  )
}

export const query = graphql`
  query {
    allMeetupsJson (
      limit: 1
      skip: 0
      sort: {
        fields: [num]
        order: ASC
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

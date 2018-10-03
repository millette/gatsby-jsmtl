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

export default ({ data: { allMeetupsJson: { totalCount, edges: [{ node: { blurb, specialevent, num, title, on, speakers } }] } } }) => (
  <div style={{ padding: '1rem' }}>
    <Nav />
    <p>We've had {totalCount} meetups so far!</p>
    <div key={`num-${num}`}>
      <h2 style={{ marginBottom: 0 }}>#{num} {title} on <small>{date(on)}</small></h2>
      <p>{blurb}</p>
      {specialevent && specialevent.publicURL && <a href={specialevent.publicURL}>special</a>}
      <div style={{ display: 'flex' }}>
        {speakers.map((speaker, i) => (
          <Session key={`speaker-${num}-${i}`} {...speaker} />
        ))}
      </div>
    </div>
    <Map no />
    <Footer />
  </div>
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

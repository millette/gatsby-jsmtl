// npm
import React from 'react'

// self
import { Session } from '.'

const date = (dateStr) => {
  const year = parseInt(dateStr.slice(0, 4), 10)
  const month = parseInt(dateStr.slice(4, 6), 10) - 1
  const day = parseInt(dateStr.slice(6, 8), 10)
  return new Date(year, month, day, 12).toDateString()
}

export default ({ num, title, on, blurb, specialevent, speakers }) => (
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
)

// npm
import React from 'react'

// self
import { Session } from '.'
import { date } from '../utils'

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

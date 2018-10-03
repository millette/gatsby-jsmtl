// npm
import React from 'react'

// self
import { Session } from '.'
import { date } from '../utils'

export default ({ num, title, on, blurb, speakers }) => (
  <div key={`num-${num}`}>
    <h2 style={{ marginBottom: 0 }} dangerouslySetInnerHTML={{ __html: `#${num} ${title} on <small>${date(on)}</small>` }} />
    <p dangerouslySetInnerHTML={{ __html: blurb }} />
    <div style={{ display: 'flex' }}>
      {speakers.map((speaker, i) => (
        <Session id={`speaker-${num}-${i}`} key={`speaker-${num}-${i}`} {...speaker} />
      ))}
    </div>
  </div>
)

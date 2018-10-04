// npm
import React from 'react'

// self
import { External } from '.'

export default ({ id, title, name, url, email, synopsis, links }) => (
  <div id={id} style={{ paddingRight: '1rem', flex: '1 1 0' }}>
    <h3>{title}</h3>
    <h4>by {name}</h4>
    <p dangerouslySetInnerHTML={{ __html: synopsis }} />
    {links && (links.length > 0) && (
      <ul>
        {links.map((props) => (
          <li><External {...props} /></li>
        ))}
      </ul>
    )}
  </div>
)

// npm
import React from 'react'

export default ({ id, title, name, url, email, synopsis }) => (
  <div id={id} style={{ paddingRight: '1rem', flex: '1 1 0' }}>
    <h3>{title}</h3>
    <h4>by {name}</h4>
    <p dangerouslySetInnerHTML={{ __html: synopsis }} />
  </div>
)

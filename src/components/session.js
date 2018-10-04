// npm
import React, { Fragment } from 'react'

// self
import { External } from '.'

const valid = (url, name) => (!url || url.indexOf('http')) ? <Fragment>{name}</Fragment> : <External url={url} title={name} />

const speakerEmail = (email) => (email && email.indexOf('http')) && <Fragment>
  {' '}(<External url={`mailto:${email}`} title='email' />)
</Fragment>

export default ({ id, title, name, url, email, synopsis, links }) => (
  <div id={id} style={{ paddingRight: '1rem', flex: '1 1 0' }}>
    <h3>{title}</h3>
    <h4>by {valid(url, name)}{speakerEmail(email)}</h4>
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

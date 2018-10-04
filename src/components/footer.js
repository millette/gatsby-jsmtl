// npm
import React from 'react'

// self
import img from '../files/img/gare-sticky-blue.png'
import { External } from '.'

export default () => (
  <div style={{ display: 'flex' }}>
    <div style={{ flex: '1 1 0' }}>
      <h4>Contact</h4>
      <ul className='list-unstyled contact'>
        <li className='meetup'><External url='http://meetup.com/js-montreal' title='meetup.com' /></li>
        <li className='facebook'><External url='https://www.facebook.com/groups/253683934748003/' title='facebook group' /></li>
        <li className='linkedin'><External url='http://www.linkedin.com/groups?gid=2514289' title='on linkedin' /></li>
        <li className='twitter'><External url='http://www.twitter.com/jsmontreal' title='@jsmontreal' /></li>
        <li className='email'><External url='mailto:contact@js-montreal.org' title='Email us' /></li>
      </ul>
    </div>
    <div style={{ flex: '1 1 0' }}>
      <h4>User Groups</h4>
      <ul className='list-unstyled'>
        <li>
          <External url='http://gtugmontreal.blogspot.ca' title='GDG Montreal' />
        </li>
        <li>
          <External url='http://www.montrealonrails.com/' title='montreal.rb' />
        </li>
        <li>
          <External url='http://www.phpquebec.org/' title='php quebec' />
        </li>
        <li>
          <External url='http://montrealpython.org/' title='mtl python' />
        </li>
      </ul>
    </div>
    <div style={{ flex: '1 1 0' }}>
      <h4>Special thanks to</h4>
      <ul className='list-unstyled'>
        <li>
          <External url='https://garemtl.com/en/' title={<img alt='La Gare' src={img} width='100' />} />
        </li>
      </ul>
    </div>
  </div>
)

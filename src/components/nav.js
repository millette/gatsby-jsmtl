// npm
import React from 'react'
import { Link } from 'gatsby'

const flex = '1 1 0'

export default () => (
  <header>
    <div className='container'>
      <nav role='navigation'>
        <ul className='nav-simple' style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex' }}>
          <li style={{ flex }}><Link to='/'>Home</Link></li>
          <li style={{ flex }}><Link to='/archive/'>Archive</Link></li>
          <li style={{ flex }}><Link to='/archive-orig/'>Archive (2018/full)</Link></li>
          <li style={{ flex }}><Link to='/presenter/'>Present</Link></li>
          <li style={{ flex }}><Link to='/about/'>About</Link></li>
          <li style={{ flex }}><a target='_blank' rel='noopener noreferrer' href='http://www.meetup.com/js-montreal/messages/boards/thread/48462382'>Jobs</a></li>
          <li style={{ flex }}><a target='_blank' rel='noopener noreferrer' href='http://goo.gl/forms/JXCnE4K9bG'>2014 Survey</a></li>
          <li style={{ flex }}><strong><a target='_blank' rel='noopener noreferrer' href='http://goo.gl/forms/5U4gfTIXzt'>Join the team!</a></strong></li>
        </ul>
      </nav>
      <h1>
        <Link to='/'>js-montreal</Link><br />
        <small>Montreal's JavaScript User Group</small>
      </h1>
    </div>
  </header>
)

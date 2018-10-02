// npm
import React from 'react'
import { Link } from 'gatsby'

export default (props) => (
  <header>
    <div className='container'>
      <nav role='navigation'>
        <ul className='nav-simple'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/archive'>Archive</Link></li>
          <li><Link to='/presenter'>Present</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><a target='_blank' rel='noopener noreferrer' href='http://www.meetup.com/js-montreal/messages/boards/thread/48462382'>Jobs</a></li>
          <li><a target='_blank' rel='noopener noreferrer' href='http://goo.gl/forms/JXCnE4K9bG'>2014 Survey</a></li>
          <li><strong><a target='_blank' rel='noopener noreferrer' href='http://goo.gl/forms/5U4gfTIXzt'>Join the team!</a></strong></li>
        </ul>
      </nav>
      <div className='row'>
        <div className='col-md-12'>
          <h1>
            <Link to='/'>js-montreal</Link><br />
            <small>Montreal's JavaScript User Group</small>
          </h1>
        </div>
      </div>
    </div>
  </header>
)

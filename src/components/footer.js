// npm
import React from 'react'

// self
import img from '../files/img/gare-sticky-blue.png'

export default (props) => (
  <div style={{ display: "flex" }}>
    <div style={{ flex: "auto" }}>
      <h4>Contact</h4>
      <ul className="list-unstyled contact">
        <li className="meetup"><a href="http://meetup.com/js-montreal">meetup.com</a></li>
        <li className="facebook"><a href="https://www.facebook.com/groups/253683934748003/">facebook group</a></li>
        <li className="linkedin"><a href="http://www.linkedin.com/groups?gid=2514289">js-montreal.org</a></li>
        <li className="twitter"><a href="http://www.twitter.com/jsmontreal">@jsmontreal</a></li>
        <li className="email"><a href="mailto:contact@js-montreal.org" target="_blank">Email us</a></li>
      </ul>
    </div>
    <div style={{ flex: "auto" }}>
      <h4>User Groups</h4>
      <ul className="list-unstyled">
        <li>
          <a href="http://gtugmontreal.blogspot.ca">GDG Montreal</a>
        </li>
        <li>
          <a href="http://www.montrealonrails.com/">montreal.rb</a>
        </li>
        <li>
          <a href="http://www.phpquebec.org/">php quebec</a>
        </li>
        <li>
          <a href="http://montrealpython.org/">mtl python</a>
        </li>
      </ul>
    </div>
    <div style={{ flex: "auto" }}>
      <h4>Special thanks to</h4>
      <ul className="list-unstyled">
        <li>
          <a href="https://garemtl.com/en/"><img alt="La Gare" src={img} width="100" /></a>
        </li>
      </ul>
    </div>
  </div>
)

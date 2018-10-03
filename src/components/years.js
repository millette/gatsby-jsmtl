// npm
import React from 'react'
import { Link } from 'gatsby'

// self
import { yearRange } from '../utils'

export default ({ first, last }) => (
  <div>
    <ul>
      {yearRange(first, last).map((year) => (
        <li key={`archive-${year}`}>
          <Link to={`/archive/${year}/`}>
            {year}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

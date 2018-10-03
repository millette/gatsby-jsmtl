// npm
import React from 'react'

// self
import { Footer, Nav } from '.'

export default ({ children }) => (
  <div style={{ padding: '1rem' }}>
    <Nav />
    {children}
    <Footer />
  </div>
)

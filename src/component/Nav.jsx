import React from 'react'
import { Link } from 'react-router-dom'
import UL, { LI } from './Nav.style'

const Nav = () => {
  return (
    <UL>
      <LI>
        <Link to="/">Home</Link>
      </LI>
      <LI>
        <Link to="login">Login</Link>
      </LI>
    </UL>
  )
}

export default Nav
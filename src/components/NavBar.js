import React from 'react'
import UserInfo from './UserInfo'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const padding = {
    paddingRight: 5,
    paddingLeft: 5
  }

  return (
    <div style={{ clear: 'both', backgroundColor: 'gray' }}>
      <Link style={padding} to="/">blogs</Link>
      <Link style={padding} to="/writers">writers</Link>
      <UserInfo />
    </div>
  )
}

export default NavBar
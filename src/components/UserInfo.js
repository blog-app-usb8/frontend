import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../reducers/userReducer'

import { Button } from '@mui/material'

const UserInfo = () => {
  const user = useSelector(({ user }) => user)

  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <div style={{ marginLeft: 20 }}>
      {user.name} logged in &nbsp;
      <Button variant="outlined" color="inherit" size="small" onClick={handleLogout}>
        logout
      </Button>
    </div>
  )
}

export default UserInfo
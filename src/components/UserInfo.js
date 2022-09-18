import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../reducers/userReducer'

const UserInfo = () => {
  const user = useSelector(({ user }) => user)

  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <>
      {user.name} logged in
      <button id="logout-button" onClick={handleLogout}>
        logout
      </button>
    </>
  )
}

export default UserInfo
import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../reducers/userReducer'

const UserInfo = (props) => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <>
      {props.user.name} logged in
      <button id="logout-button" onClick={handleLogout}>
        logout
      </button>
    </>
  )
}

export default UserInfo
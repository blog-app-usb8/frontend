import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../reducers/userReducer'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleLogin = async (event) => {
    event.preventDefault()
    dispatch(loginUser(username, password))
  }

  return (
    <form onSubmit={handleLogin}>
      <div>
        username
        <input type="text" id="username" placeholder="username" value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
        <input type="password" id="password" placeholder="password" value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">
        login
      </button>
    </form>
  )
}

export default LoginForm
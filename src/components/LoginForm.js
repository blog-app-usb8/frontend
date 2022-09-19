// import React, { useState } from 'react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../reducers/userReducer'
import { useField } from './utils/hooks'

const LoginForm = () => {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  const username = useField('text')
  const password = useField('password')

  const dispatch = useDispatch()

  const handleLogin = async (event) => {
    event.preventDefault()
    // dispatch(loginUser(username, password))
    dispatch(loginUser(username.fields.value, password.fields.value))
  }

  return (
    <form onSubmit={handleLogin}>
      {/* <div>
        username
        <input type="text" id="username" placeholder="username" value={username}
          onChange={({ target }) => setUsername(target.value)} required
        />
      </div>
      <div>
        password
        <input type="password" id="password" placeholder="password" value={password}
          onChange={({ target }) => setPassword(target.value)} required
        />
      </div> */}

      <div>
        username
        <input {...username.fields} required />
      </div>
      <div>
        password
        <input {...password.fields} required />
      </div>

      <button type="submit">
        login
      </button>
    </form>
  )
}

export default LoginForm
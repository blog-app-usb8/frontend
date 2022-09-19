// import React, { useState } from 'react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../reducers/userReducer'
import { useField } from './utils/hooks'

import { TextField, Button } from '@mui/material'

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
      <div style={{ marginBottom: 20 }}>
        <TextField {...username.fields} label="username" required />
      </div>
      <div style={{ marginBottom: 20 }}>
        <TextField {...password.fields} label="password" required />
      </div>

      <div style={{ marginLeft: 70 }}>
        <Button variant="contained" color="primary" type="submit" size="small">
          login
        </Button>
      </div>
    </form>
  )
}

export default LoginForm
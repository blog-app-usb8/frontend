import React from 'react'
import { useDispatch } from 'react-redux'
import { signupUser } from '../reducers/userReducer'
import { useField } from './utils/hooks'

import { TextField, Button } from '@mui/material'

const SignupForm = () => {
  const username = useField('text')
  const name = useField('text')
  const password = useField('password')

  const dispatch = useDispatch()

  const handleLogin = async (event) => {
    event.preventDefault()
    dispatch(signupUser({
      username: username.fields.value,
      name: name.fields.value,
      password: password.fields.value,
    }))
  }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: 20 }}>
          <TextField {...username.fields} label="username" required />
        </div>
        <div style={{ marginBottom: 20 }}>
          <TextField {...name.fields} label="name" required />
        </div>
        <div style={{ marginBottom: 20 }}>
          <TextField {...password.fields} label="password" required />
        </div>

        <div style={{ marginLeft: 70 }}>
          <Button variant="contained" color="primary" type="submit" size="small">
            signup
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignupForm
import React from 'react'
import { useDispatch } from 'react-redux'
import { signupUser } from '../reducers/userReducer'
import { useField } from './utils/hooks'

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
        <div>
          username
          <input {...username.fields} />
        </div>
        <div>
          name
          <input {...name.fields} />
        </div>
        <div>
          password
          <input {...password.fields} />
        </div>

        <button type="submit">
          signup
        </button>
      </form>
    </div>
  )
}

export default SignupForm
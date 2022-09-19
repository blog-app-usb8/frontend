import React, { useState } from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

import { Button } from '@mui/material'

const LoginSignup = () => {
  const [loginVisible, setLoginVisible] = useState(true)

  return (
    <>
      <div>
        <Button variant="contained" color="primary" type="submit"
          onClick={() => setLoginVisible(true)}
        >
          Login Form
        </Button>
        <Button color="primary" type="submit"
          onClick={() => setLoginVisible(false)}
        >
          Signup Form
        </Button>
      </div>

      <div style={{ paddingLeft: 6, paddingTop: 20 }}>
        {loginVisible && <LoginForm />}
        {!loginVisible && <SignupForm />}
      </div>
    </>
  )
}

export default LoginSignup
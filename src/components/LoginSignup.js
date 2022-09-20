import React, { useState } from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import MyCard from './utils/MyCard'

import { Button } from '@mui/material'

const LoginSignup = () => {
  const [loginVisible, setLoginVisible] = useState(true)

  return (
    <div style={{ display: 'flex' }}>
      <MyCard style={{ margin: 'auto' }}>

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

      </MyCard>
    </div>
  )
}

export default LoginSignup
import React, { useState } from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const LoginSignup = () => {
  const [loginVisible, setLoginVisible] = useState(true)

  return (
    <>
      <div>
        <button onClick={() => setLoginVisible(true)}>
          Login Form
        </button>
        <button onClick={() => setLoginVisible(false)}>
          Signup Form
        </button>
      </div>

      {loginVisible && <LoginForm />}
      {!loginVisible && <SignupForm />}
    </>
  )
}

export default LoginSignup
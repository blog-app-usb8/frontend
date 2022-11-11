// import React, { useRef, useEffect } from 'react'
import React, { useRef, useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Togglable from './components/utils/Togglable'
import Notification from './components/utils/Notification'
import pingpongService from './services/pingpong'

import NavBar from './components/NavBar'
import BlogForm from './components/BlogForm'
import Blogs from './components/Blogs'
import Writers from './components/Writers'
import WriterDetail from './components/WriterDetail'
import BlogDetail from './components/BlogDetail'
import LoginSignup from './components/LoginSignup'

import { useSelector, useDispatch } from 'react-redux'
import { initializeUserFromLocalStorage } from './reducers/userReducer'

import { Container } from '@mui/material'

function App() {
  const [testPingpong, setTestPingpong] = useState(null)

  const user = useSelector(({ user }) => user)
  const dispatch = useDispatch()
  useEffect(() => {
    pingpongService.getPingPong()
      .then(res => setTestPingpong(res))
    dispatch(initializeUserFromLocalStorage())
  }, [dispatch])

  const blogFormRef = useRef()

  return (
    <Container>
      <div style={{ minHeight: 920, backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2) ), url(https://i.imgur.com/aMu3hF1.png)' }}>
        {/* <div style={{ minHeight: 920, backgroundImage: 'linear-gradient( #eaebe8, #f1f3f0 )' }}> */}
        { !user && // user === null
          <div style={{ paddingTop: 8 }}>
            <h1 style={{ textAlign:'center' }}>LOG IN TO APP</h1>
            <Notification />
            <LoginSignup />
          </div>
        }

        { user &&
          <>
            <NavBar />
            <Notification />

            <div style={{ paddingLeft: 30, paddingRight: 30 }}>
              <h1>BLOGS APP</h1>

              <Routes>
                <Route path="/" element={
                  <>
                    <Togglable buttonLabel="new blog" ref={blogFormRef}>
                      <BlogForm blogFormRef={blogFormRef} />
                    </Togglable>
                    <Blogs />
                  </>
                } />
                <Route path="/writers" element={<Writers />} />
                <Route path="/writers/:id" element={<WriterDetail />} />
                <Route path="/blogs/:id" element={<BlogDetail />} />
                <Route path="*" element={<NoMatch />} />
              </Routes>
            </div>
          </>
        }

        { process.env.REACT_APP_TEST_PING_PONG_CONNECTION &&
          <>
            <div className='pingpong' style={{ color: 'transparent' }}>{testPingpong}</div>
          </>
        }
      </div>
    </Container>
  )
}

export default App

function NoMatch() {
  let location = useLocation()

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  )
}
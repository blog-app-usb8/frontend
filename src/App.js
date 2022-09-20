import React, { useRef, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Togglable from './components/utils/Togglable'
import Notification from './components/utils/Notification'

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
  const user = useSelector(({ user }) => user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeUserFromLocalStorage())
  }, [dispatch])

  const blogFormRef = useRef()

  return (
    <Container>
      { !user && // user === null
        <>
          <h1 style={{ textAlign:'center' }}>LOG IN TO APP</h1>
          <Notification />
          <LoginSignup />
        </>
      }

      { user &&
        <>
          <NavBar />
          <Notification />

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
          </Routes>
        </>
      }
    </Container>
  )
}

export default App

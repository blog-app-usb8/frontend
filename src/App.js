import React, { useRef, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Togglable from './components/utils/Togglable'
import Notification from './components/utils/Notification'

import LoginForm from './components/LoginForm'
import UserInfo from './components/UserInfo'
import BlogForm from './components/BlogForm'
import Blogs from './components/Blogs'
import Writers from './components/Writers'
import WriterDetail from './components/WriterDetail'
import BlogDetail from './components/BlogDetail'

import { useSelector, useDispatch } from 'react-redux'
import { initializeUserFromLocalStorage } from './reducers/userReducer'

function App() {
  const user = useSelector(({ user }) => user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeUserFromLocalStorage())
  }, [dispatch])

  const blogFormRef = useRef()

  const padding = {
    paddingRight: 5,
    paddingLeft: 5
  }
  return (
    <div className="App">
      { !user && // user === null
        <>
          <h1>LOG IN TO APP</h1>
          <Notification />
          <LoginForm />
        </>
      }

      { user &&
        <>
          <div style={{ clear: 'both', backgroundColor: 'gray' }}>
            <Link style={padding} to="/">blogs</Link>
            <Link style={padding} to="/writers">writers</Link>
            <UserInfo user={user} />
          </div>

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
    </div>
  )
}

export default App

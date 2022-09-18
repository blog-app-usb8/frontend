import React, { useRef } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Togglable from './components/utils/Togglable'

import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import UserInfo from './components/UserInfo'
import BlogForm from './components/BlogForm'
import Blogs from './components/Blogs'
import Writers from './components/Writers'
import WriterDetail from './components/WriterDetail'
import BlogDetail from './components/BlogDetail'

function App() {
  const user = true

  const blogFormRef = useRef()

  const padding = {
    paddingRight: 5,
    paddingLeft: 5
  }
  return (
    <div className="App">
      { !user &&
        <>
          <h2>log in to app</h2>
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

          <h2>blogs app</h2>

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

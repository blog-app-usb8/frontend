import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createObj } from '../reducers/blogsReducer'

import { TextField, Button } from '@mui/material'

const BlogForm = () => {
  const [newBlog, setNewBlog] = useState({
    title: '',
    author: '',
    url: '',
  })

  const dispatch = useDispatch()
  const handleAddBlog = async (newBlog) => {
    dispatch(createObj(newBlog))
    // try {
    //   dispatch(createObj(newBlog))
    //   dispatch(throwNotification({ success: `a new blog ${newBlog.title} - ${newBlog.author} added` }, 5))
    //   props.blogFormRef.current.toggleVisibility()
    //   return true
    // } catch (exception) {
    //   dispatch(throwNotification({ fail: `${exception}` }, 5))
    // }

    // const result = dispatch(createObj(newBlog))
    // console.log('-------', result.json())  // how to get value of [[PromiseResult]] in dispatch redux !!!
  }
  const handleOnSubmit = async (event) => {
    event.preventDefault()
    // handleAddBlog(newBlog)
    //   .then((res) => {
    //     if (res === true) {
    //       setNewBlog({
    //         title: '',
    //         author: '',
    //         url: '',
    //       })
    //     }
    //   })
    const res = await handleAddBlog(newBlog)
    if (res === true) {   // TODO: after changed handleAddBlog, maybe also move const [newBlog, setNewBlog] in store redux
      setNewBlog({
        title: '',
        author: '',
        url: '',
      })
    }
  }

  return (
    <div>
      <h2>Create new blog</h2>

      <form onSubmit={handleOnSubmit}>
        <div style={{ marginBottom: 20 }}>
          <TextField label="title" type="text" id="title" value={newBlog.title} size="small"
            onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })} required
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <TextField label="author" type="text" id="author" value={newBlog.author} size="small"
            onChange={(e) => setNewBlog({ ...newBlog, author: e.target.value })} required
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <TextField label="url" type="text" id="url" value={newBlog.url} size="small"
            onChange={(e) => setNewBlog({ ...newBlog, url: e.target.value })} required
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <Button size="small" type="submit">
            add blog
          </Button>
        </div>
      </form>
    </div>
  )
}

export default BlogForm
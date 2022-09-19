import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createObj } from '../reducers/blogsReducer'

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
      <h2>create new blog</h2>

      <form onSubmit={handleOnSubmit}>
        <div>
          title:
          <input type="text" id="title" placeholder="title of the blog" value={newBlog.title}
            onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
          />
        </div>
        <div>
          author:
          <input type="text" id="author" placeholder="author of the blog" value={newBlog.author}
            onChange={(e) => setNewBlog({ ...newBlog, author: e.target.value })}
          />
        </div>
        <div>
          url:
          <input type="text" id="url" placeholder="url of the blog" value={newBlog.url}
            onChange={(e) => setNewBlog({ ...newBlog, url: e.target.value })}
          />
        </div>
        <button type="submit">
          create
        </button>
      </form>
    </div>
  )
}

export default BlogForm
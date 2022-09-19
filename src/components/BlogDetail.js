import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteObj, deleteObj } from '../reducers/blogsReducer'
import { useParams } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { initializeUserFromLocalStorage } from '../reducers/userReducer'
import { initializeObjs } from '../reducers/blogsReducer'
import Comments from './Comments'
import blogService from '../services/blogs'
import CommentForm from './CommentForm'

import { Button } from '@mui/material'

const BlogDetail = () => {
  const urlParam = useParams()
  const blogId = urlParam.id

  // Way1: lấy từ stores (Way2: call API)
  const blog = useSelector(({ blogs }) => {
    return blogs.find(o => o.id === blogId)
  })

  const user = useSelector(({ user }) => user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeUserFromLocalStorage())
    dispatch(initializeObjs())
  }, [dispatch])

  // NOTE: Error: Rendered more hooks than during the previous render.
  // --> Di dời lên trên if
  const [comments, setComments] = useState([])
  useEffect(() => {
    blogService.getComments(blogId).then(res => setComments(res))
  }, [])

  if (!blog) return null

  const handleUpdate = async () => {
    dispatch(voteObj(blog))
  }

  const handleRemove = async () => {
    if (window.confirm(`Remove blog: ${blog.title} - by ${blog.author} ?`)) {
      dispatch(deleteObj(blog.id))
    }
  }

  const userId = jwt_decode(user.token).id

  return (
    <div>
      <h1>{blog.title}</h1>
      <div style={{ paddingBottom:6 }}>{blog.author}</div>
      <div style={{ paddingBottom:6 }}>{blog.url}</div>
      <div className="like" style={{ paddingBottom:6 }}>
        like {blog.likes}&nbsp;
        <Button variant="outlined" color="primary"
          style={{ maxWidth: '40px', maxHeight: '22px', minWidth: '30px', minHeight: '22px' }}
          id="like-button" onClick={() => handleUpdate()}
        >
          like
        </Button>
      </div>
      {userId === blog.user.id || userId === blog.user
        ?
        <Button variant="contained" color="primary"
          style={{ maxWidth: '64px', maxHeight: '22px', minWidth: '30px', minHeight: '22px' }}
          id="remove-blog-button" onClick={() => handleRemove()}
        >
          remove
        </Button>
        :
        <></>
      }

      <h2>Comments</h2>
      <CommentForm comments={comments} setComments={setComments} />
      <Comments comments={comments} />
    </div>
  )
}

export default BlogDetail
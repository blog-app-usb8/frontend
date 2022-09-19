import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import blogsService from '../services/blogs'

import { TextField, Button } from '@mui/material'

const CommentForm = (props) => {
  const urlParam = useParams()
  const blogId = urlParam.id

  const [comment, setComment] = useState({
    content: '',
    blogId: blogId,
    // rating: '',
  })

  const handleAddBlog = async (comment, id) => {
    const createdComment = await blogsService.createComment(comment, id)
    const _comments = props.comments
    props.setComments([..._comments, createdComment])
  }

  const handleOnSubmit = async (event) => {
    event.preventDefault()
    const res = await handleAddBlog(comment, blogId)
    if (res === true) {
      setComment({
        content: '',
        blogId: blogId,
        // rating: '',
      })
    }
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div style={{ float: 'left' }}>
          <TextField label="share your idea" type="text" value={comment.content} size="small"
            onChange={(e) => setComment({ ...comment, content: e.target.value })} required
          />
        </div>
        <Button variant="contained" color="primary" type="submit" size="small"
          style={{ paddingTop: 8, marginTop: 2 }}
        >add comment
        </Button>
      </form>
    </div>
  )
}

export default CommentForm
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import blogsService from '../services/blogs'

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
          <input type="text" id="content" value={comment.content} name="Content" onChange={(e) => setComment({ ...comment, content: e.target.value })} />
        </div>
        <button id="add-comment-button" type="submit">
          add comment
        </button>
      </form>
    </div>
  )
}

export default CommentForm
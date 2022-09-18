import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initializeObjs } from '../reducers/blogsReducer'
import { Link } from 'react-router-dom'

const Blogs = () => {
  const blogs = useSelector(({ blogs }) => {
    const _blogs = [...blogs]
    return _blogs.sort((a, b) => b.likes - a.likes)
  })

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeObjs())
  }, [dispatch])

  return (
    <>
      {blogs.map((o) => (
        <Link key={o.id} to={`/blogs/${o.id}`}>
          <Blog className="blog" key={o.id} blog={o} />
        </Link>
      ))}
    </>
  )
}
export default Blogs

const Blog = (props) => {
  const blogStyle = {
    paddingTop: 5,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }
  return (
    <div style={blogStyle} className="blog">
      <div>
        {props.blog.title} - {props.blog.author}
      </div>
    </div>
  )
}
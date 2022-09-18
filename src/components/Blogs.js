import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initializeObjs } from '../reducers/blogsReducer'

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
        <div key={o.id}>{o.title} - {o.author}</div>
      ))}
    </>
  )
}

export default Blogs
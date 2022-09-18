import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { initializeUserFromLocalStorage } from '../reducers/userReducer'
import { initializeObjs } from '../reducers/writersReducer'

const WriterDetail = () => {
  const urlParam = useParams()
  const userId = urlParam.id

  // Way1: lấy từ stores (Way2: call API)
  const writer = useSelector(({ writers }) => {
    return writers.find(o => o.id === userId)
  })

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeUserFromLocalStorage())
    dispatch(initializeObjs())
  }, [dispatch])

  if (!writer) {
    return null
  }

  return (
    <>
      <h2>Writer: {writer.name}</h2>
      <h2>Added blogs</h2>
      <ul>
        {writer.blogs.map(o =>
          <li key={o.id} >
            <Link to={`/blogs/${o.id}`}>{o.title}</Link>
          </li>
        )}
      </ul>
    </>
  )
}

export default WriterDetail
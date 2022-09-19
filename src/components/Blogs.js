import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initializeObjs } from '../reducers/blogsReducer'
import { Link } from 'react-router-dom'

import { TableContainer, Paper, Table, TableBody } from '@mui/material'
import { TableRow, TableCell } from '@mui/material'

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
      {/* {blogs.map((o) => (
        <Link key={o.id} to={`/blogs/${o.id}`}>
          <Blog className="blog" key={o.id} blog={o} />
        </Link>
      ))} */}

      {/* NOTE: Link should be in row */}
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {blogs.map((o) => (
              <Blog key={o.id} className="blog" blog={o} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
export default Blogs

const Blog = (props) => {
  return (
  // <div style={blogStyle} className="blog">
  //   <div>
  //     {props.blog.title} - {props.blog.author}
  //   </div>
  // </div>

  // NOTE: Link should be in row
    <TableRow>
      <TableCell>
        <Link to={`/blogs/${props.blog.id}`}>{props.blog.title}</Link>
      </TableCell>
      <TableCell>
        {props.blog.author}
      </TableCell>
    </TableRow>
  )
}
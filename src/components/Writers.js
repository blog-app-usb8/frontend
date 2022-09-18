import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initializeObjs } from '../reducers/writersReducer'
import { Link } from 'react-router-dom'

const Writers = () => {
  const writers = useSelector(({ writers }) => {
    const _writers = [...writers]
    return _writers.sort((a, b) => b.blogs.length - a.blogs.length)
  })

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeObjs())
  }, [dispatch])

  const leftStyle = {
    float: 'left',
    minWidth: 150,
  }
  const rightStyle = {
    float: 'left',
  }

  return (
    <>
      <div style={{ fontWeight: 'bold' }}>
        <div style={leftStyle}>&nbsp;</div>
        <div style={rightStyle}>blogs created</div>
      </div>
      {writers.map((o) => (
        <Link key={o.id} to={`/users/${o.id}`}>
          <Writer writer={o} />
        </Link>
      ))}
    </>
  )
}

export default Writers

const Writer = (props) => {
  const leftStyle = {
    float: 'left',
    minWidth: 150,
  }
  const rightStyle = {
    float: 'left',
  }

  return (
    <div className="writer" style={{ clear: 'both' }}>
      <div style={leftStyle}>{props.writer.name}</div>
      <div style={rightStyle}>{props.writer.blogs.length}</div>
    </div>
  )
}
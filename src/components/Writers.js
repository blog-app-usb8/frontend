import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initializeObjs } from '../reducers/writersReducer'
import { Link } from 'react-router-dom'

import { Grid } from '@mui/material'

const Writers = () => {
  const writers = useSelector(({ writers }) => {
    const _writers = [...writers]
    return _writers.sort((a, b) => b.blogs.length - a.blogs.length)
  })

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeObjs())
  }, [dispatch])

  return (
    <>
      <div style={{ fontWeight: 'bold', marginBottom: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={2}><></></Grid>
          <Grid item xs={10}>blogs created</Grid>
        </Grid>
      </div>
      {writers.map((o) => (
        <Link key={o.id} to={`/writers/${o.id}`}>
          <Writer writer={o} />
        </Link>
      ))}
    </>
  )
}

export default Writers

const Writer = (props) => {
  return (
    <div className="writer" style={{ clear: 'both', marginTop: 18 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>{props.writer.name}</Grid>
        <Grid item xs={10}>{props.writer.blogs.length}</Grid>
      </Grid>
    </div>
  )
}
import React, { useState, forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'

import { Button } from '@mui/material'

const Togglable = forwardRef((props, refs) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(refs, () => {
    return { toggleVisibility }
  })

  return (
    <div style={{ paddingBottom: 26 }}>
      <div style={hideWhenVisible}>
        {/* <button onClick={toggleVisibility}>{props.buttonLabel}</button> */}
        <Button variant="contained" color="primary" size="small" onClick={toggleVisibility}>{props.buttonLabel}</Button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        {/* <button onClick={toggleVisibility}>cancel</button> */}
        <Button variant="contained" color="primary" size="small" onClick={toggleVisibility}>cancel</Button>
      </div>
    </div>
  )
})

Togglable.displayName = 'Togglable'

export default Togglable

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
}

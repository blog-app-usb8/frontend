import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(({ notification }) => notification)

  const successStyle = {
    color: 'green',
    background: '#a7a7a8',
    fontSize: 16,
    border: '2px solid green',
    padding: 4,
  }
  const failStyle = {
    color: 'red',
    background: '#a7a7a8',
    fontSize: 16,
    border: '2px solid red',
    padding: 4,
  }

  return (
    // (Object.keys(notification).length === 0)
    <>
      { notification.success &&
        <div style={successStyle}>{notification.success}</div>
      }

      { notification.fail &&
        <div style={failStyle} className="error">
          {notification.fail}
        </div>
      }
    </>
  )
}

export default Notification
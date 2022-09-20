import React from 'react'

const MyCard = (props) => {
  return <div style={{ ...cardStyle, ...props.style }}>{props.children}</div>
}

const cardStyle = {
  backgroundColor: 'white',
  padding: 20,
  boxShadow: '0px 0px 5px #9E9E9E',
  // boxShadow: '0px 0px 5px rgba(0, 0, 0, .4)',
  // border: '1px solid black',
  borderRadius: 10,
}

export default MyCard
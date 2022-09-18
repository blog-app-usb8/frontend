import { React } from 'react'

export default function Comments(props) {
  return (
    <>
      <ul>
        {props.comments.map(o =>
          <li key={o.id}>{o.content}</li>
        )}
      </ul>
    </>
  )
}
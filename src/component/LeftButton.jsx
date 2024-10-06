import React from 'react'
import '../styles/discover.css'

function LeftButton(props) {
  return (
    <div>
      <button className='server-buttons'>{props.title}</button>
    </div>
  )
}

export default LeftButton

import React from 'react'
import '../components/common.css'

function Button(props) {
  return (
    <div>
      <button className='TopButton'>{props.value}</button>
    </div>
  )
}

export default Button

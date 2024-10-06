import React from 'react'
import '../styles/left-side.css'
import LeftButton from './LeftButton'

function LeftComponent(props) {
    const leftArray =["server","quests"]
  return (
    <div className='left-side'>
      <h1 className='discover'>Discover</h1>
      {leftArray.map(val=><LeftButton title={val}/>)}
      <div className="profile">profile signs</div>
    </div>
  )
}

export default LeftComponent

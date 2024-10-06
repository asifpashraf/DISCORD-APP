import React from 'react'
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'
import '../styles/discover.css'

function Discover() {
    
  return (
    <div className='discover-page'>
        <div className="layout"></div>
      <LeftComponent/>
      <RightComponent/>
    </div>
  )
}

export default Discover

import React from 'react'
import '../styles/right-side.css'

function TopNavBar() {
  
  const server =['Home','gaming','Music','Entertainment','Science % Tech','Education','Student Hubs']
  return (
    <div className='parent'>
      {server.map(val=> <> <button className='server-button'>{val}</button></>)}
      <input type="text"placeholder='Search' />
      
    </div>
  )
}

export default TopNavBar

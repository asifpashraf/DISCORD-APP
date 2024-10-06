import React from 'react'
import TopNavBar from './TopNavBar'
import '../styles/right-side.css'
import ServerCard from './ServerCard'

function RightComponent() {
    const details =[
        {name:'dragon ball 1'},
        {name:'dragon ball 2'},
        {name:'dragon ball 3'},
        {name:'dragon ball 4'}
    ]
  return (
   <div className='right-page'>
    <div className='right-side'>
        <TopNavBar/>
        <div className="community">
            <h1>FIND YOUR COMMUNITY <br />ON DISCORD</h1>
            <h3>From gaming, to music, to learning,there's a place for you</h3>
        </div>
    </div> 
            <h2>featured servers</h2>
        <div className="server-place">
            {details.map((name) => <ServerCard titles={details.name}/>)}
        </div>
    </div>
  )
}

export default RightComponent

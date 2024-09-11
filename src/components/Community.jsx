import React from 'react'
import '../components/common.css'
import Button from './Button'

function Community() {
    const topArray =["Home","Gaming","Music","Entertainment","Science % Tech","Education","Student Hubs"]

  return (
    <div className='banner'>
        <div className="Topsection">
            <img src="" alt="home icon" />
            {topArray.map((value,index)=>{
                return <Button key={index} value={value}/>
            })}
            
            <input type="text" className='TopInput'/>
        </div>
        <div className='heading'>
        <h1>Find your community <br /> on discord</h1>
        <h3>From gaming, to music, to learning, there's a place for you</h3>
      
        </div>
        
    </div>
  )
}

export default Community

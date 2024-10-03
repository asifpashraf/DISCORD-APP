import React from 'react'
import '../components/common.css'
import Button from './Button'


function Banner() {
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
    </div>
  )
}

export default Banner

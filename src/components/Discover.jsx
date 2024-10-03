import React from 'react'
import Community from './Community'
import ServerCard from './ServerCard'
import '../components/styles/discover.css'


function Discover() {
    const cardDetails =[
        {id:1,title:"Midjourney"},
        {id:2,title:"Naruto"},
        {id:3,title:"One piece"},
        {id:4,title:"vegeta"},
        {id:5,title:"dragon ballz"}

        
    ]

  return (
    <div className='page'>
        <div className="page-left">
            icons here
        </div>
        <div className="server-option">
            <div className='options'>server</div>
            <div className='options'> Quests</div>
        </div>
        <div className="cards-community">
            <Community/>
            <p className='featured'>
                <h3 className='featured'>featured servers</h3>
            </p>
            <p className='servers'>

            {cardDetails.map(item=><ServerCard  title={item.title}/>)}
            </p>
        </div>
      
    </div>
  )
}

export default Discover

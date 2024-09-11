import React from 'react'
import Community from './Community'
import ServerCard from './ServerCard'

function Discover() {
  return (
    <div className='page'>
        <div className="page-left">
            welcome
        </div>
        <div className="server-option">
            <div>server</div>
            <div>Quests</div>
        </div>
        <div className="cards-community">
            <Community/>
            <p>
                <h3>featured servers</h3>
                <ServerCard/>
            </p>
        </div>
      
    </div>
  )
}

export default Discover

import React from 'react'
import './Player.css'

const Player = ({health, strength, playerAttacks}) => {
  return(
    <div className="player-container">
      <div className="player-image"></div>
      <h3>Player</h3>
      <div className="health-bar">
        <div
          className="player-health"
          style={{width: health + "px"}}
        ></div>
      </div>
      <button
        className="attack"
        onClick={() => playerAttacks(strength)}
      >Attack!</button>
    </div>
  )
}

export default Player

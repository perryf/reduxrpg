import React from 'react'
import './Player.css'

const Player = ({name, img, health, strength, defense, magic, maxHealth, playerAttacks}) => {
  let percentage = 100 / maxHealth
  return(
    <div className="player-container">
      <img className="player-image" src={img} />
      <h3>{name}</h3>
      <div className="health-bar">
        <div
          className="player-health"
          style={{width: health*percentage + "px"}}
        ></div>
        <p className="stats">Strength: {strength}</p>
        <p className="stats">Defense: {defense}</p>
        <p className="stats">Magic: {magic}</p>
        <p className="stats">Max Health: {maxHealth}</p>
      </div>
    </div>
  )
}

export default Player

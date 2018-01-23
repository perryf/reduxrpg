import React from 'react'
import './Player.css'

const Player = ({name, img, health, mana, strength, defense, magic, maxHealth, maxMana}) => {
  return(
    <div className="player-container">
      <img className="player-image" src={img} />
      <h3>{name}</h3>
      <div className="status-bar" style={{width: maxHealth + "px"}}>
        <div className="player-health" style={{width: health + "px"}}></div>
      </div>
      <div className="status-bar" style={{width: maxMana*20 + "px"}}>
        <div className="player-mana" style={{width: mana*20 + "px"}}></div>
      </div>
        <p className="stats">Strength: {strength}</p>
        <p className="stats">Defense: {defense}</p>
        <p className="stats">Magic: {magic}</p>
        <p className="stats">Max Health: {maxHealth}</p>
        <p className="stats">Max Mana: {maxMana}</p>
      </div>
  )
}

export default Player

import React from 'react'
import './Player.css'

const Player = ({name, img, health, mana, strength, defense, magic, maxHealth, maxMana, isAttacking, isSpecialing}) => {
  let attackStatus = isAttacking ? "attacking" : "waiting"
  let specialStatus = isSpecialing ? "specialing" : ""
  return(
    <div className="player-container">
      <img 
        className={"player-image " + attackStatus + " " + specialStatus} 
        src={img} 
        alt={name} />
      <h3>{name}</h3>
      <div className="status-bar" style={{width: maxHealth + "px"}}>
        <div className="player-health" style={{width: health + "px"}}></div>
      </div>
      <div className="status-bar" style={{width: maxMana * 20 + "px"}}>
        <div className="player-mana" style={{width: mana * 20 + "px"}}></div>
      </div>
      <div className="stats">
        <p className="stat">Strength: {strength}</p>
        <p className="stat">Defense: {defense}</p>
        <p className="stat">Magic: {magic}</p>
        <p className="stat">Max Health: {maxHealth}</p>
        <p className="stat">Max Mana: {maxMana}</p>
      </div>
    </div>
  )
}

export default Player

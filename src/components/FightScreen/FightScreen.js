import React from 'react'
import './FightScreen.css'
import PlayerWrapper from '../../containers/PlayerWrapper'
import EnemyWrapper from '../../containers/EnemyWrapper'

const FightScreen = () => {
  return(
    <div className="fight-screen">
      <PlayerWrapper />
      <EnemyWrapper />
    </div>
  )
}

export default FightScreen

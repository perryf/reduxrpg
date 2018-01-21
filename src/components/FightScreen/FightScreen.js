import React from 'react'
import './FightScreen.css'
import IntroScreenWrapper from '../../containers/IntroScreenWrapper'
import PlayerWrapper from '../../containers/PlayerWrapper'
import EnemyWrapper from '../../containers/EnemyWrapper'
import LevelStatsWrapper from '../../containers/LevelStatsWrapper'

const FightScreen = () => {
  return(
    <div className="fight-screen">
      <IntroScreenWrapper />
      <div className="combat">
        <PlayerWrapper />
        <EnemyWrapper />
      </div>
      <LevelStatsWrapper />
    </div>
  )
}

export default FightScreen

import React from 'react'
import './FightScreen.css'
import IntroScreenWrapper from '../../containers/IntroScreenWrapper'
import PlayerWrapper from '../../containers/PlayerWrapper'
import EnemyWrapper from '../../containers/EnemyWrapper'
import LevelStatsWrapper from '../../containers/LevelStatsWrapper'

const FightScreen = ({isPlaying}) => {
  return (
    <div className="fight-screen">
      {!isPlaying ?
        <IntroScreenWrapper /> :
        <div className="combat">
          <PlayerWrapper />
          <LevelStatsWrapper />
          <EnemyWrapper />
        </div>
      }
    </div>
  )
}

export default FightScreen

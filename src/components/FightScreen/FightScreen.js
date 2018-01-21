import React from 'react'
import './FightScreen.css'
import IntroScreenWrapper from '../../containers/IntroScreenWrapper'
import PlayerWrapper from '../../containers/PlayerWrapper'
import EnemyWrapper from '../../containers/EnemyWrapper'
import LevelStatsWrapper from '../../containers/LevelStatsWrapper'

const FightScreen = ({playerName}) => {
  console.log(playerName)
  return(
    <div className="fight-screen">
      {!playerName ?
        <IntroScreenWrapper /> :
        <div className="main-game">
          <div className="combat">
            <PlayerWrapper />
            <EnemyWrapper />
          </div>
          <LevelStatsWrapper />
        </div>
      }
    </div>
  )
}

export default FightScreen

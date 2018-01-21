import {connect} from 'react-redux'
import LevelStats from '../components/LevelStats/LevelStats'
import {playerAttacks, playerHeals} from '../actions'

const mapStateToProps = (state) => ({
  playerDmgTaken: state.levelStats.playerDmgTaken,
  enemyDmgTaken: state.levelStats.enemyDmgTaken,
  playerHealth: state.player.health,
  playerStrength: state.player.stats.strength,
  playerAttack: state.player.moves.attack,
  enemyName: state.enemy.name,
  enemyHealth: state.enemy.health,
  enemyAttack: state.enemy.moves.attack,
  enemyMaxHealth: state.enemy.stats.maxHealth,
  enemyDefense: state.enemy.stats.defense
})

const mapDispatchToProps = {
  playerAttacks: playerAttacks,
  playerHeals: playerHeals
}

const EnemyWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(LevelStats)

export default EnemyWrapper

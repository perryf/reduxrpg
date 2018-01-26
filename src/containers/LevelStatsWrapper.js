import {connect} from 'react-redux'
import LevelStats from '../components/LevelStats/LevelStats'
import {
  playerAttacks, 
  playerHeals, 
  playerSpecials, 
  enemyAttacks, 
  nextEnemy, 
  needsLevelUp, 
  playerDies
} from '../actions'

const mapStateToProps = (state) => ({
  playerName: state.player.name,
  playerDmgTaken: state.levelStats.playerDmgTaken,
  playerHealAmt: state.levelStats.playerHealAmt,
  enemyDmgTaken: state.levelStats.enemyDmgTaken,
  playerHealth: state.player.health,
  playerStrength: state.player.stats.strength,
  playerAttack: state.player.moves.attack,
  playerSpecial: state.player.moves.special,
  playerDefense: state.player.stats.defense,
  playerMaxHealth: state.player.stats.maxHealth,
  playerMagic: state.player.stats.magic,
  playerMana: state.player.mana,
  enemyName: state.enemy.name,
  enemyHealth: state.enemy.health,
  enemyStrength: state.enemy.stats.strength,
  enemyAttack: state.enemy.moves.attack,
  enemyMaxHealth: state.enemy.stats.maxHealth,
  enemyDefense: state.enemy.stats.defense,
  enemyMagic: state.enemy.stats.magic,
  isLevelingUp: state.levelStats.isLevelingUp
})

const mapDispatchToProps = {
  playerAttacks,
  playerHeals,
  playerSpecials,
  playerDies,
  enemyAttacks,
  nextEnemy,
  needsLevelUp
}

const EnemyWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(LevelStats)

export default EnemyWrapper

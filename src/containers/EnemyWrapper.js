import {connect} from 'react-redux'
import Enemy from '../components/Enemy/Enemy'
import {nextEnemy, nextLevel} from '../actions'

const mapStateToProps = (state) => ({
  name: state.enemy.name,
  img: state.enemy.img,
  health: state.enemy.health,
  attack: state.enemy.moves.attack,
  maxHealth: state.enemy.stats.maxHealth
})

const mapDispatchToProps = {
  nextEnemy: nextEnemy
}

const EnemyWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Enemy)

export default EnemyWrapper
import {connect} from 'react-redux'
import LevelUp from '../components/LevelUp/LevelUp'
import {levelUp, nextEnemy, increaseEnemyCounter} from '../actions'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
  levelUp,
  nextEnemy,
  increaseEnemyCounter
}

const LevelUpWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(LevelUp)

export default LevelUpWrapper

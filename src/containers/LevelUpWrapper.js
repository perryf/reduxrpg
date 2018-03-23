import {connect} from 'react-redux'
import LevelUp from '../components/LevelUp/LevelUp'
import {levelUpStatChoose, levelUp, nextEnemy, increaseEnemyCounter} from '../actions'

const mapStateToProps = () => ({
})

const mapDispatchToProps = {
  levelUpStatChoose,
  levelUp,
  nextEnemy,
  increaseEnemyCounter
}

const LevelUpWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(LevelUp)

export default LevelUpWrapper

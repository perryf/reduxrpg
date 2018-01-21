import {connect} from 'react-redux'
import LevelUp from '../components/LevelUp/LevelUp'
import {levelUp, nextEnemy} from '../actions'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
  levelUp,
  nextEnemy
}

const LevelUpWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(LevelUp)

export default LevelUpWrapper

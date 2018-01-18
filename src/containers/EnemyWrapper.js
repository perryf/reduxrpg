import {connect} from 'react-redux'
import Enemy from '../components/Enemy/Enemy'
import {enemyDies, enemyRecovers} from '../actions'

const mapStateToProps = (state) => ({
  health: state.enemy.health
})

const mapDispatchToProps = {
  enemyDies: enemyDies,
  enemyRecovers: enemyRecovers
}

const EnemyWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Enemy)

export default EnemyWrapper

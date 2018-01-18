import {connect} from 'react-redux'
import Player from '../components/Player/Player'
import {playerAttacks} from '../actions'

const mapStateToProps = (state) => ({
  health: state.player.health,
  strength: state.player.strength
})

const mapDispatchToProps = {
  playerAttacks: playerAttacks
}

const PlayerWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)

export default PlayerWrapper

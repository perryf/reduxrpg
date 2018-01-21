import {connect} from 'react-redux'
import Player from '../components/Player/Player'
import {playerAttacks} from '../actions'

const mapStateToProps = (state) => ({
  name: state.player.name,
  img: state.player.img,
  health: state.player.health,
  strength: state.player.stats.strength,
  defense: state.player.stats.defense,
  magic: state.player.stats.magic,
  maxHealth: state.player.stats.maxHealth
})

const mapDispatchToProps = {
  playerAttacks
}

const PlayerWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)

export default PlayerWrapper

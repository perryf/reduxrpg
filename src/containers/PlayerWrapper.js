import {connect} from 'react-redux'
import Player from '../components/Player/Player'
import {playerAttacks} from '../actions'

const mapStateToProps = (state) => ({
  name: state.player.name,
  img: state.player.img,
  health: state.player.health,
  mana: state.player.mana,
  strength: state.player.stats.strength,
  defense: state.player.stats.defense,
  maxHealth: state.player.stats.maxHealth,
  magic: state.player.stats.magic,
  maxMana: state.player.stats.maxMana
})

const mapDispatchToProps = {
  playerAttacks
}

const PlayerWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)

export default PlayerWrapper

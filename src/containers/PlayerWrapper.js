import {connect} from 'react-redux'
import Player from '../components/Player/Player'
import {playerAttacks} from '../actions'

const mapStateToProps = state => ({
  name: state.player.name,
  img: state.player.img,
  imgName: state.player.imgName,
  health: state.player.health,
  mana: state.player.mana,
  strength: state.player.stats.strength,
  defense: state.player.stats.defense,
  maxHealth: state.player.stats.maxHealth,
  magic: state.player.stats.magic,
  maxMana: state.player.stats.maxMana,
  isAttacking: state.player.isAttacking,
  isSpecialing: state.player.isSpecialing,
  isHealing: state.player.isHealing
})

const mapDispatchToProps = {
  playerAttacks
}

const PlayerWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)

export default PlayerWrapper

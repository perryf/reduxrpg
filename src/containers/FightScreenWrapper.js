import {connect} from 'react-redux'
import FightScreen from '../components/FightScreen/FightScreen'
import {introSubmit} from '../actions'

const mapStateToProps = (state) => ({
  isPlaying: state.levelStats.isPlaying
})

const mapDispatchToProps = {
}

const FightScreenWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(FightScreen)

export default FightScreenWrapper

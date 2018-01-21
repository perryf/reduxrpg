import {connect} from 'react-redux'
import IntroScreen from '../components/IntroScreen/IntroScreen'
import {introSubmit} from '../actions'

const mapStateToProps = (state) => ({
  playerName: state.player.name
})

const mapDispatchToProps = {
  introSubmit
}

const IntroScreenWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(IntroScreen)

export default IntroScreenWrapper

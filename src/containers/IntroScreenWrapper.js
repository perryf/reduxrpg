import {connect} from 'react-redux'
import IntroScreen from '../components/IntroScreen/IntroScreen'
import {introChooseName, introChooseCharacter, introSubmit} from '../actions'

const mapStateToProps = () => ({
})

const mapDispatchToProps = {
  introChooseName,
  introChooseCharacter,
  introSubmit
}

const IntroScreenWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(IntroScreen)

export default IntroScreenWrapper

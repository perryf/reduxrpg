import {connect} from 'react-redux'
import Status from '../components/Status/Status'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

const EnemyWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Status)

export default EnemyWrapper

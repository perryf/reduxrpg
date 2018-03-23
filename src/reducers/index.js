import {combineReducers} from 'redux'
import intro from './intro'
import player from './player'
import enemy from './enemy'
import levelStats from './levelStats'

const reducer = combineReducers({
  intro,
  player,
  enemy,
  levelStats
})

export default reducer

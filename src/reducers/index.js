import {combineReducers} from 'redux'
import player from './player'
import enemy from './enemy'
import levelStats from './levelStats'

const reducer = combineReducers({
  player,
  enemy,
  levelStats
})

export default reducer

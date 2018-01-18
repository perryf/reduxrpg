import {combineReducers} from 'redux'
import player from './player'
import enemy from './enemy'
import level from './level'

const reducer = combineReducers({
  player,
  enemy,
  level
})

export default reducer

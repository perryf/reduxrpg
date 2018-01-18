import {combineReducers} from 'redux'
import player from './player'
import enemy from './enemy'

const reducer = combineReducers({
  player,
  enemy
})

export default reducer

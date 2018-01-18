const initialState = {
  level: 1,
  maxHealth: 100,
  health: 100
}

const enemy = (state = initialState, action) => {
  switch (action.type) {
    case 'PLAYER_ATTACKS':
      if (state.health >= 0) {
        return {
          ...state,
          health: state.health - action.damage
        }
      } else {
        return state
      }
    case 'ENEMY_DIES':
      return Object.assign({}, {
        level: state.level + 1,
        maxHealth: state.maxHealth + 20
      })
    case 'ENEMY_RECOVERS':
      return {
        ...state,
        health: state.maxHealth
      }
    default:
      return state
  }
}

export default enemy

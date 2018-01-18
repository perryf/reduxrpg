const initialState = {
  health: 100,
  strength: 1
}

const player = (state = initialState, action) => {
  switch (action.type) {
    case 'ENEMY_ATTACKS':
      return {
        ...state,
        health: state.health - action.damage
      }
    default:
      return state
  }
}

export default player

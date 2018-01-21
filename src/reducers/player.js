const initialState = {
  "name": "Perry",
  "img": "https://www.mariowiki.com/images/e/e3/Frogmario.gif",
  "health": 100,
  "moves": {
    "attack": 10
  },
  "stats": {
    "maxHealth": 100,
    "strength": 1,
    "defense": 1,
    "magic": 1
  }
}

const player = (state = initialState, action) => {
  switch (action.type) {
    case 'ENEMY_ATTACKS':
      return {
        ...state,
        health: state.health - action.damage
      }
    case 'PLAYER_HEALS':
      if (state.health + 50 < state.stats.maxHealth) {
        return {
          ...state,
          health: state.health + 50
        }
      } else {
        return {
          ...state,
          health: state.stats.maxHealth
        }
      }
    case 'INTRO_SUBMIT':
      let stat = action.payload.statIncrease
      if (action.payload.statIncrease === 'maxHealth') {
        return {
          ...state,
          name: action.payload.name,
          health: state.health + 10,
          stats: {
            ...state.stats,
            [stat]: state.stats[stat] + 10
          }
        }
      } else {
        return {
          ...state,
          name: action.payload.name,
          stats: {
            ...state.stats,
            [stat]: state.stats[stat] + 1
          }
        }
      }
    default:
      return state
  }
}

export default player

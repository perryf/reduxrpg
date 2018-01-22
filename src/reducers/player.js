const initialState = {
  "name": "",
  "img": "https://www.mariowiki.com/images/e/e3/Frogmario.gif",
  "health": 100,
  "level": 0,
  "moves": {
    "attack": 10,
    "special": 20,
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
    case 'ENEMY_SPECIALS':
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
      var stat = action.payload.statIncrease
      if (stat === 'maxHealth') {
        return {
          ...state,
          name: action.payload.name,
          health: state.health + 10,
          level: state.level + 1,
          stats: {
            ...state.stats,
            [stat]: state.stats[stat] + 10
          }
        }
      } else {
        return {
          ...state,
          name: action.payload.name,
          level: state.level + 1,
          stats: {
            ...state.stats,
            [stat]: state.stats[stat] + 1
          }
        }
      }
    case 'LEVEL_UP':
    var stat = action.statIncrease
    if (stat === 'maxHealth') {
      return {
        ...state,
        health: state.health + 10,
        level: state.level + 1,
        stats: {
          ...state.stats,
          [stat]: state.stats[stat] + 10
        }
      }
    } else {
      return {
        ...state,
        level: state.level + 1,
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

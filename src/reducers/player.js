const initialState = {
  'name': '',
  'img': 'https://www.mariowiki.com/images/e/e3/Frogmario.gif',
  'health': 100,
  'mana': 2,
  'level': 0,
  'moves': {
    'attack': 10,
    'special': 10
  },
  'stats': {
    'maxHealth': 100,
    'strength': 1,
    'defense': 1,
    'magic': 1,
    'maxMana': 2
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
      if (state.health + action.healAmt < state.stats.maxHealth) {
        return {
          ...state,
          health: state.health + action.healAmt,
          mana: state.mana - 1
        }
      } else {
        return {
          ...state,
          health: state.stats.maxHealth,
          mana: state.mana - 1
        }
      }
    case 'PLAYER_SPECIALS':
      return {
        ...state,
        mana: state.mana - 1
      }
    case 'INTRO_SUBMIT':
      var stat = action.payload.statIncrease
      if (stat === 'maxHealth') {
        return {
          ...state,
          name: action.payload.name,
          health: state.health + 20,
          level: state.level + 1,
          stats: {
            ...state.stats,
            [stat]: state.stats[stat] + 20
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
          health: state.health + 20,
          level: state.level + 1,
          mana: state.stats.maxMana,
          stats: {
            ...state.stats,
            [stat]: state.stats[stat] + 20
          }
        }
      } else if (stat === 'magic' && state.stats.magic % 2 === 0) {
        return {
          ...state,
          level: state.level + 1,
          mana: state.stats.maxMana + 1,
          stats: {
            ...state.stats,
            [stat]: state.stats[stat] + 1,
            maxMana: state.stats.maxMana + 1
          }
        }
      } else {
        return {
          ...state,
          level: state.level + 1,
          mana: state.stats.maxMana,
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
const initialState = {
  'name': 'NoName McGee',
  'img': '',
  'imgName': '',
  'health': 100,
  'mana': 2,
  'level': 0,
  'alive': true,
  'isAttacking': false,
  'isSpecialing': false,
  'isHealing': false,
  'moves': {
    'attack': 10,
    'special': 10,
    'heal': 50
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
      if (action.enemyHealth > 0) {
        return {
          ...state,
          health: state.health - action.damage
        }
      } else {
        return state
      }
    case 'ENEMY_SPECIALS':
      if (action.enemyHealth > 0) {
        return {
          ...state,
          health: state.health - action.damage
        }
      } else {
        return state
      }
    case 'PLAYER_HEALS':
      if (action.currentHealth + action.healAmt < action.maxHealth) {
        return {
          ...state,
          health: action.currentHealth + action.healAmt,
          mana: state.mana - 1
        }
      } else {
        return {
          ...state,
          health: action.maxHealth,
          mana: state.mana - 1
        }
      }
    case 'PLAYER_SPECIALS':
      return {
        ...state,
        mana: state.mana - 1
      }
    case 'INTRO_SUBMIT':
      let statInit = action.stat
      let name = action.name || state.name
      if (statInit === 'maxHealth') {
        return {
          ...state,
          name: name,
          img: action.img,
          imgName: action.imgName,
          health: state.health + 20,
          level: state.level + 1,
          stats: {
            ...state.stats,
            [statInit]: state.stats[statInit] + 20
          }
        }
      } else {
        return {
          ...state,
          name: name,
          img: action.img,
          imgName: action.imgName,
          level: state.level + 1,
          stats: {
            ...state.stats,
            [statInit]: state.stats[statInit] + 1
          }
        }
      }
    case 'LEVEL_UP':
      let stat = action.statIncrease
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
    case 'PLAYER_DIES': 
      return {
        ...state,
        health: 0,
        alive: false
      }
    case 'PLAYER_START_ATTACK_PHASE':
      return {
        ...state,
        isAttacking: true
      }
    case 'PLAYER_END_ATTACK_PHASE':
    return {
      ...state,
      isAttacking: false
    }
    case 'PLAYER_START_SPECIAL_PHASE':
      return {
        ...state,
        isSpecialing: true
      }
    case 'PLAYER_END_SPECIAL_PHASE':
    return {
      ...state,
      isSpecialing: false
    }
    case 'PLAYER_START_HEAL_PHASE':
      return {
        ...state,
        isHealing: true
      }
    case 'PLAYER_END_HEAL_PHASE':
    return {
      ...state,
      isHealing: false
    }
    default:
      return state
  }
}

export default player
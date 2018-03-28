const initialState = {
  name: 'NoName McGee',
  img: '',
  imgName: '',
  health: 100,
  mana: 2,
  level: 0,
  alive: true,
  isAttacking: false,
  isSpecialing: false,
  isHealing: false,
  moves: [
    {
      id: 0,
      name: 'Attack',
      shortName: 'attack',
      type: 'basic',
      amt: 10,
      mana: 0,
      preReq: {
        level: 0
      }
    },
    {
      id: 1,
      name: 'Magic Attack',
      shortName: 'magic',
      type: 'special',
      amt: 10,
      mana: 1,
      preReq: {
        level: 0
      }
    },
    {
      id: 2,
      name: 'Heal',
      shortName: 'heal',
      type: 'special',
      amt: '50',
      mana: 1,
      preReq: {
        level: 0
      }
    }
  ],
  stats: {
    maxHealth: 100,
    strength: 1,
    defense: 1,
    magic: 1,
    maxMana: 2
  }
}

const player = (state = initialState, action) => {
  switch (action.type) {
    case 'ENEMY_ATTACKS':
      return {
        ...state,
        health: 
          action.enemyHealth > 0 ?
          state.health - action.damage : state.health
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
      return {
        ...state,
        health: 
          action.currentHealth + action.healAmt < action.maxHealth ?
          action.currentHealth + action.healAmt : action.maxHealth,
        mana: state.mana - 1
      }
    case 'PLAYER_SPECIALS':
      return {
        ...state,
        mana: state.mana - 1
      }
    case 'INTRO_SUBMIT': {
      let [health, statBoost] = [state.health, 1]
      if (action.stat === 'maxHealth') {
        [health, statBoost] = [state.health + 20, 20]
      }
      return {
        ...state,
        name: action.name || state.name,
        img: action.img,
        imgName: action.imgName,
        health: health,
        level: state.level + 1,
        stats: {
          ...state.stats,
          [action.stat]: state.stats[action.stat] + statBoost
        }
      }
    }
    case 'LEVEL_UP': {
      let [health, statBoost] = [state.health, 1]
      if (action.stat === 'maxHealth') {
        [health, statBoost] = [state.health + 20, 20]
      }
      let mana = 
        action.stat === 'magic' && state.stats.magic % 2 === 0 ?
        state.stats.maxMana + 1 : state.stats.maxMana
      return {
        ...state,
        level: state.level + 1,
        health: health,
        mana: mana,
        stats: {
          ...state.stats,
          [action.stat]: state.stats[action.stat] + statBoost,
          maxMana: mana
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
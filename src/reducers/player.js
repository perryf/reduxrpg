import {initialState} from '../playerData.js'

const player = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_MOVE_PREREQS':
      let newMoves = state.potentialMoves.filter(move => {
        let key = Object.keys(move.preReqs)[0]
        return (state.stats[key] >= move.preReqs[key])
      })
      let potentials = state.potentialMoves.filter(potentialMove => {
        let booleanVal = true
        newMoves.forEach(newMove => {
          if (newMove === potentialMove) booleanVal = false
        })
        return booleanVal
      })
      return {
        ...state,
        moves: [...state.moves, ...newMoves],
        potentialMoves: potentials
      } 
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
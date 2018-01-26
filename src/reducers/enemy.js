const data = require('../enemyData.json')
let counter = 0

const initialEnemy = data[counter]
initialEnemy.health = initialEnemy.stats.maxHealth
initialEnemy.isAttacking = false
initialEnemy.isSpecialing = false

const enemy = (state = initialEnemy, action) => {
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
    case 'PLAYER_SPECIALS':
      if (state.health >= 0) {
        return {
          ...state,
          health: state.health - action.damage
        }
      } else {
        return state
      }
    case 'NEXT_ENEMY':
      counter += 1
      if (data[counter]) {
        return Object.assign({}, data[counter], {
          health: data[counter].stats.maxHealth,
          isAttacking: false,
          isSpecialing: false
        })
      } else {
        return state
      }
      case 'ENEMY_START_ATTACK_PHASE':
      return {
        ...state,
        isAttacking: true
      }
      case 'ENEMY_END_ATTACK_PHASE':
      return {
        ...state,
        isAttacking: false
      }
      case 'ENEMY_START_SPECIAL_PHASE':
        return {
          ...state,
          isSpecialing: true
        }
      case 'ENEMY_END_SPECIAL_PHASE':
      return {
        ...state,
        isSpecialing: false
      }
    default:
      return state
  }
}

export default enemy

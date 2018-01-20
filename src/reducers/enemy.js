const data = require('../enemyData.json')
let counter = 0

const initialEnemy = data[counter]
initialEnemy.health = initialEnemy.stats.maxHealth

const enemy = (state = initialEnemy, action) => {
  switch (action.type) {
    case 'PLAYER_ATTACKS':
      if (state.health >= 0) {
        return {
          ...state,
          health: state.health - (action.damage / (0.5 * state.stats.defense))
        }
      } else {
        return state
      }
    case 'NEXT_ENEMY':
      counter += 1
      return Object.assign({}, data[counter], {health: data[counter].stats.maxHealth})
    default:
      return state
  }
}

export default enemy

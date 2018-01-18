const data = require('../enemyData.json')

let initialEnemy = data[0]
initialEnemy.health = initialEnemy.stats.maxHealth
console.log(initialEnemy)

const enemy = (state = initialEnemy, action) => {
  switch (action.type) {
    case 'PLAYER_ATTACKS':
      console.log(state.health)
      console.log(action.damage)
      if (state.health >= 0) {
        return {
          ...state,
          health: state.health - action.damage
        }
      } else {
        return state
      }
    case 'NEXT_ENEMY':
      return Object.assign({}, data[action.level])
    default:
      return state
  }
}

export default enemy

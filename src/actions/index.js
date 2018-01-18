export const playerAttacks = (strength) => ({
  type: 'PLAYER_ATTACKS',
  damage: 2 + Math.floor((strength * 2) * Math.random())
})

export const nextEnemy = (level) => ({
  type: 'NEXT_ENEMY'
})

export const nextLevel = () => ({
  type: 'NEXT_LEVEL'
})

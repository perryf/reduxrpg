export const playerAttacks = (strength) => ({
  type: 'PLAYER_ATTACKS',
  damage: 10 + Math.floor((strength * 10) * Math.random())
})

export const enemyDies = () => ({
  type: 'ENEMY_DIES'
})

export const enemyRecovers = () => ({
  type: 'ENEMY_RECOVERS'
})

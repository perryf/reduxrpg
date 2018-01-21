export const playerAttacks = (strength, attack, defense) => ({
  type: 'PLAYER_ATTACKS',
  damage: Math.ceil(((strength * attack) * Math.random()) / defense)
})

export const playerSpecials = (magic, attack) => ({
  type: 'PLAYER_SPECIALS',
  damage: Math.ceil((magic * attack) * Math.random())
})

export const playerHeals = () => ({
  type: 'PLAYER_HEALS'
})

export const enemyAttacks = (strength, attack, defense) => ({
  type: 'ENEMY_ATTACKS',
  damage: Math.ceil(((strength * attack) * Math.random()) / defense)
})

export const enemySpecials = (magic, attack) => ({
  type: 'ENEMY_SPECIALS',
  damage: Math.ceil((magic * attack) * Math.random())
})

export const nextEnemy = (level) => ({
  type: 'NEXT_ENEMY'
})

export const introSubmit = (name, stat) => ({
  type: 'INTRO_SUBMIT',
  payload: {
    name: name,
    statIncrease: stat
  }
})

export const levelUp = (stat) => ({
  type: 'LEVEL_UP',
  statIncrease: stat
})

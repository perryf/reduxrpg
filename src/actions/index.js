export const playerAttacks = (attackPow, strength, defense) => ({
  type: 'PLAYER_ATTACKS',
  damage: Math.ceil(((Math.pow(strength, 0.6) * attackPow) / Math.pow(defense, 0.6)) +
    ((Math.pow(strength, 0.6) * (attackPow * 0.5)) * Math.random()) / Math.pow(defense, 0.6))
})

export const playerSpecials = (attackPow, magic) => ({
  type: 'PLAYER_SPECIALS',
  damage: Math.ceil((Math.pow(magic, 0.6) * attackPow) +
    ((Math.pow(magic, 0.2) * attackPow) * Math.random()))
})

export const playerHeals = (maxHealth, magic) => ({
  type: 'PLAYER_HEALS',
  healAmt: Math.ceil((Math.pow(magic, 0.3) * (maxHealth * 0.5)) +
    (Math.pow(magic, 0.3) * (maxHealth * 0.1) * Math.random()))
})

export const enemyAttacks = (attackPow, strength, defense) => ({
  type: 'ENEMY_ATTACKS',
  damage: Math.ceil(((Math.pow(strength, 0.6) * attackPow) / Math.pow(defense, 0.6)) +
    ((Math.pow(strength, 0.6) * (attackPow * 0.5)) * Math.random()) / Math.pow(defense, 0.6))
})

export const enemySpecials = (attackPow, magic) => ({
  type: 'ENEMY_SPECIALS',
  damage: Math.ceil((Math.pow(magic, 0.6) * attackPow) +
    ((Math.pow(magic, 0.2) * attackPow) * Math.random()))
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

export const needsLevelUp = () => ({
  type: 'NEEDS_LEVEL_UP'
})

export const levelUp = (stat) => ({
  type: 'LEVEL_UP',
  statIncrease: stat
})

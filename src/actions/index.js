export const playerAttacks = (attackPow, strength, defense, crit) => ({
  type: 'PLAYER_ATTACKS',
  crit: crit,
  damage: Math.ceil(((Math.pow(strength, 0.8) * attackPow) / Math.pow(defense, 0.6)) +
    ((Math.pow(strength, 0.8) * (attackPow * 0.5)) * Math.random()) / Math.pow(defense, 0.6))
})

export const playerSpecials = (attackPow, magic, level) => ({
  type: 'PLAYER_SPECIALS',
  damage: Math.ceil((Math.pow(magic, 0.4) * attackPow * Math.pow(level, 0.2)) +
    ((Math.pow(magic, 0.2) * attackPow) * Math.random()))
})

export const playerHeals = (currentHealth, maxHealth, magic) => ({
  type: 'PLAYER_HEALS',
  currentHealth: currentHealth,
  maxHealth: maxHealth,
  healAmt: Math.ceil((Math.pow(magic, 0.2) * (maxHealth * 0.5)) +
    (Math.pow(magic, 0.2) * (maxHealth * 0.1) * Math.random()))
})

export const playerDies = () => ({type: 'PLAYER_DIES'})

export const playerStartAttackPhase = () => ({type: 'PLAYER_START_ATTACK_PHASE'})

export const playerEndAttackPhase = () => ({type: 'PLAYER_END_ATTACK_PHASE'})

export const playerStartSpecialPhase = () => ({type: 'PLAYER_START_SPECIAL_PHASE'})

export const playerEndSpecialPhase = () => ({type: 'PLAYER_END_SPECIAL_PHASE'})

export const enemyStartAttackPhase = () => ({type: 'ENEMY_START_ATTACK_PHASE'})

export const enemyEndAttackPhase = () => ({type: 'ENEMY_END_ATTACK_PHASE'})

export const enemyStartSpecialPhase = () => ({type: 'ENEMY_START_SPECIAL_PHASE'})

export const enemyEndSpecialPhase = () => ({type: 'ENEMY_END_SPECIAL_PHASE'})

export const enemyAttacks = (attackPow, strength, defense, enemyHealth) => ({
  type: 'ENEMY_ATTACKS',
  enemyHealth: enemyHealth,
  damage: Math.ceil(((Math.pow(strength, 0.6) * attackPow) / Math.pow(defense, 0.6)) +
    ((Math.pow(strength, 0.6) * (attackPow * 0.5)) * Math.random()) / Math.pow(defense, 0.6))
})

export const enemySpecials = (attackPow, magic, enemyHealth) => ({
  type: 'ENEMY_SPECIALS',
  enemyHealth: enemyHealth,
  damage: Math.ceil((Math.pow(magic, 0.6) * attackPow) +
    ((Math.pow(magic, 0.2) * attackPow) * Math.random()))
})

export const increaseEnemyCounter = () => ({
  type: 'INCREASE_ENEMY_COUNTER'
})

export const nextEnemy = (level) => ({
  type: 'NEXT_ENEMY'
})

export const introSubmit = (name, stat, img) => ({
  type: 'INTRO_SUBMIT',
  payload: {
    name,
    stat,
    img
  }
})

export const needsLevelUp = () => ({
  type: 'NEEDS_LEVEL_UP'
})

export const levelUp = (stat) => ({
  type: 'LEVEL_UP',
  statIncrease: stat
})

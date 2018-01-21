export const playerAttacks = (strength, attack, defense) => ({
  type: 'PLAYER_ATTACKS',
  damage: Math.ceil(((strength * attack) * Math.random()) / defense)
})

export const playerHeals = () => {
  type: 'PLAYER_HEALS'
}

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

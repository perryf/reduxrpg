const initialState = {
  playerDmgTaken: 0,
  playerHealAmt: 0,
  playerHitCrit: false,
  enemyDmgTaken: 0,
  isLevelingUp: false,
  isPlaying: false,
  enemysTurn: false,
  playerLastMove: null,
  enemyLastMove: null,
}

const levelStats = (state = initialState, action) => {
  switch (action.type) {
    case 'PLAYER_ATTACKS':
      if (!action.crit) {
        return {
          ...state,
          enemyDmgTaken: action.damage,
          playerHealAmt: 0,
          playerHitCrit: false, 
          enemysTurn: true
        }
      } else {
        return {
          ...state,
          enemyDmgTaken: action.damage,
          playerHealAmt: 0,
          playerHitCrit: true,
          enemysTurn: true
        }
      }
    case 'PLAYER_SPECIALS':
      return {
        ...state,
        enemyDmgTaken: action.damage,
        playerHealAmt: 0,
        enemysTurn: true
      }
    case 'PLAYER_HEALS':
      if (action.currentHealth + action.healAmt < action.maxHealth) {
        return {
          ...state,
          playerHealAmt: action.healAmt,
          enemyDmgTaken: 0,
          enemysTurn: true
        }
      } else {
        return {
          ...state,
          playerHealAmt: action.maxHealth - action.currentHealth,
          enemyDmgTaken: 0,
          enemysTurn: true
        }
      }
    case 'ENEMY_ATTACKS':
      return {
        ...state,
        playerDmgTaken: action.damage,
        enemysTurn: false
      }
    case 'ENEMY_SPECIALS':
      return {
        ...state,
        playerDmgTaken: action.damage,
        enemysTurn: false
      }
    case 'NEXT_ENEMY':
      return {
        ...state,
        enemysTurn: false
      }
    case 'INTRO_SUBMIT':
      return {
        ...state,
        isPlaying: true
      }
    case 'NEEDS_LEVEL_UP':
      return {
        ...state,
        playerDmgTaken: 0,
        playerHealAmt: 0,
        enemyDmgTaken: 0,
        isLevelingUp: true,

      }
    case 'LEVEL_UP':
      return {
        ...state,
        isLevelingUp: false,
        playerHitCrit: false
      }
    default:
      return state
  }

}

export default levelStats

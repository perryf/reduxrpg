const initialState = {
  playerDmgTaken: 0,
  playerHealAmt: '',
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
          playerHealAmt: '',
          playerHitCrit: false, 
          enemysTurn: true,
          playerLastMove: 'attack'
        }
      } else {
        return {
          ...state,
          enemyDmgTaken: action.damage * 2,
          playerHealAmt: '',
          playerHitCrit: true,
          enemysTurn: true,
          playerLastMove: 'attack'
        }
      }
    case 'PLAYER_SPECIALS':
      return {
        ...state,
        enemyDmgTaken: action.damage,
        playerHealAmt: '',
        enemysTurn: true,
        playerHitCrit: false,
        playerLastMove: 'special'
      }
    case 'PLAYER_HEALS':
      if (action.currentHealth + action.healAmt < action.maxHealth) {
        return {
          ...state,
          playerHealAmt: action.healAmt,
          enemyDmgTaken: 0,
          enemysTurn: true,
          playerHitCrit: false,
          playerLastMove: 'heal'
        }
      } else {
        return {
          ...state,
          playerHealAmt: action.maxHealth - action.currentHealth,
          enemyDmgTaken: 0,
          enemysTurn: true,
          playerHitCrit: false,
          playerLastMove: 'heal'
        }
      }
    case 'ENEMY_ATTACKS':
      return {
        ...state,
        playerDmgTaken: action.damage,
        enemysTurn: false,
        enemyLastMove: 'attack'
      }
    case 'ENEMY_SPECIALS':
      return {
        ...state,
        playerDmgTaken: action.damage,
        enemysTurn: false,
        enemyLastMove: 'special'
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
        playerHealAmt: '',
        enemyDmgTaken: 0,
        playerHitCrit: false,
        isLevelingUp: true,
        playerLastMove: null,
        playersLastMove: null
      }
    case 'LEVEL_UP':
      return {
        ...state,
        isLevelingUp: false
      }
    default:
      return state
  }

}

export default levelStats

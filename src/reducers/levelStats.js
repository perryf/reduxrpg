const initialState = {
  playerDmgTaken: 0,
  playerHealAmt: 0,
  enemyDmgTaken: 0,
  isLevelingUp: false,
  isPlaying: false
}

const levelStats = (state = initialState, action) => {
  switch (action.type) {
    case 'PLAYER_ATTACKS':
      return {
        ...state,
        enemyDmgTaken: action.damage,
        playerHealAmt: 0
      }
    case 'PLAYER_SPECIALS':
      return {
        ...state,
        enemyDmgTaken: action.damage,
        playerHealAmt: 0
      }
    case 'PLAYER_HEALS':
      return {
        ...state,
        playerHealAmt: action.healAmt,
        enemyDmgTaken: 0
      }
    case 'ENEMY_ATTACKS':
      return {
        ...state,
        playerDmgTaken: action.damage
      }
    case 'ENEMY_SPECIALS':
      return {
        ...state,
        playerDmgTaken: action.damage
      }
    case 'NEXT_ENEMY':
      return {
        ...state,
        playerDmgTaken: 0,
        playerHealAmt: 0,
        enemyDmgTaken: 0,
      }
    case 'INTRO_SUBMIT':
      return {
        ...state,
        isPlaying: true
      }
    case 'NEEDS_LEVEL_UP':
      return {
        ...state,
        isLevelingUp: true
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

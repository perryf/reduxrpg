const initialState = {
  playerDmgTaken: 0,
  enemyDmgTaken: 0,
}

const levelStats = (state = initialState, action) => {
  switch (action.type) {
    case 'PLAYER_ATTACKS':
      return {
        ...state,
        enemyDmgTaken: action.damage
      }
    case 'PLAYER_SPECIALS':
      return {
        ...state,
        enemyDmgTaken: action.damage
      }
    case 'PLAYER_HEALS':
      return {
        ...state
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
        enemyDmgTaken: 0,
      }
    default:
      return state
  }

}

export default levelStats

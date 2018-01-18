const initialLevel = 0

const level = (state = initialLevel, action) => {
  switch (action.type) {
    case 'NEXT_LEVEL':
      return state += 1
    default:
      return state
  }

}

export default level

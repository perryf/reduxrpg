export const initialState = {
  name: 'NoName McGee',
  img: '',
  imgName: '',
  alive: true,
  isAttacking: false,
  isSpecialing: false,
  isHealing: false,
  stats: {
    health: 100,
    mana: 2,
    level: 0,
    maxHealth: 100,
    strength: 1,
    defense: 1,
    magic: 1,
    maxMana: 2
  },
  moves: [
    {
      id: 0,
      name: 'Attack',
      shortName: 'attack',
      type: 'basic',
      amt: 10,
      mana: 0,
      preReqs: {
        level: 0
      }
    },
    {
      id: 1,
      name: 'Magic Attack',
      shortName: 'magic',
      type: 'special',
      amt: 10,
      mana: 1,
      preReqs: {
        level: 0
      }
    },
    {
      id: 2,
      name: 'Heal',
      shortName: 'heal',
      type: 'special',
      amt: 50,
      mana: 1,
      preReqs: {
        level: 0
      }
    }
  ],
  potentialMoves: [
    {
      id: 4,
      name: 'Hidden Test',
      shortName: 'test',
      type: 'special',
      amt: 20,
      mana: 2,
      preReqs: {
        magic: 200
      }
    }
  ]
}
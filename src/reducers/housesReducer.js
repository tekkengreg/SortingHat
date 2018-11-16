const housesList = [
  'Serpentard',
  'Griffondor',
  'Serdaigle',
  'Pouffsoufle',
]

export default function (state = { housesList, selectedHouse: "Griffondor" }, action) {
  let selectedHouse;
  switch (action.type) {

    case 'SELECT_RANDOM':
      selectedHouse = housesList[Math.floor(Math.random() * 4)]
      return { ...state, selectedHouse }

    case 'SELECT_SPECIFIC':
      selectedHouse = housesList[action.id]
      return { ...state, selectedHouse }

    default:
      return state
      
  }
}
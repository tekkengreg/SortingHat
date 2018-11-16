import { combineReducers } from 'redux';

const houses = [
  'Serpentard',
  'Griffondor',
  'Serdaigle',
  'Pouffsoufle',
]
export default combineReducers({
  houses: () => houses,
  selectedHouses: (state = "Griffondor", action) => {
    return houses[Math.floor(Math.random() * 4)]
  },
})
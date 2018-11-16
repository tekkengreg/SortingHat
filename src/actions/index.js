export const updateRandomHouse = () => ({
    type: 'SELECT_RANDOM',
  })

export const updateSpecificHouse = (id) => ({
    type: 'SELECT_SPECIFIC',
    id
  })
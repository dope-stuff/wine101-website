export const getProductTheme = (type = '') => {
  if ('White Wine'.toLowerCase().includes(type.toLowerCase())) {
    return {
      textColor: '#AEC5A4',
      bgColor: '#81CF8A',
      type: 'white',
    }
  } else if ('Sparkling Wine (Champagne)'.toLowerCase().includes(type.toLowerCase())) {
    return {
      textColor: '#ECCB7B',
      bgColor: '#E8C85E',
      type: 'sparkling',
    }
  } else if (
    'Rosé Wine'.toLowerCase().includes(type.toLowerCase()) ||
    'Rose Wine'.toLowerCase().includes(type.toLowerCase())
  ) {
    return {
      textColor: '#F88D97',
      bgColor: '#E7AF96',
      type: 'rose',
    }
  } else if ('Ice Wine'.toLowerCase().includes(type.toLowerCase())) {
    return {
      textColor: '#8AB5CD',
      bgColor: '#91A9FF',
      type: 'ice',
    }
  }
  return {
    textColor: '#B23A57',
    bgColor: '#E6645D',
    type: 'red',
  }
}

export const getProductTheme = (type = '') => {
  if ('White Wine'.toLowerCase().includes(type.toLowerCase())) {
    return {
      textColor: '#AEC5A4',
      bgColor: '#90AD83',
      type: 'white',
    }
  } else if ('Sparkling Wine (Champagne)'.toLowerCase().includes(type.toLowerCase())) {
    return {
      textColor: '#ECCB7B',
      bgColor: '#D3AF61',
      type: 'sparkling',
    }
  } else if (
    'Rosé Wine'.toLowerCase().includes(type.toLowerCase()) ||
    'Rose Wine'.toLowerCase().includes(type.toLowerCase())
  ) {
    return {
      textColor: '#F88D97',
      bgColor: '#F16471',
      type: 'rose',
    }
  } else if ('Ice Wine'.toLowerCase().includes(type.toLowerCase())) {
    return {
      textColor: '#8AB5CD',
      bgColor: '#6690A7',
      type: 'ice',
    }
  }
  return {
    textColor: '#B23A57',
    bgColor: '#961937',
    type: 'red',
  }
}

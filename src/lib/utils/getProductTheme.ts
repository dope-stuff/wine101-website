export const getProductTheme = (type = '') => {
  if (type === 'White Wine') {
    return {
      textColor: '#AEC5A4',
      bgColor: '#90AD83',
      type: 'white',
    }
  }
  if (type === 'Sparkling Wine (Champagne)') {
    return {
      textColor: '#ECCB7B',
      bgColor: '#D3AF61',
      type: 'sparkling',
    }
  }
  if (type === 'Rosé Wine') {
    return {
      textColor: '#F88D97',
      bgColor: '#F16471',
      type: 'rose',
    }
  }
  if (type === 'Ice Wine') {
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

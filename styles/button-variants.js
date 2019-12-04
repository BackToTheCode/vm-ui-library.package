const base = {
  '&:hover': {
    transform: 'translateY(-1px)'
  }
}

const buttons = {
  outline: {
    ...base,
    '&:hover': {
      backgroundColor: 'rgba(26, 171, 155, 0.1)'
    },
    bg: 'transparent',
    borderColor: 'primary',
    color: 'primary'
  },
  primary: {
    ...base,
    '&:hover': {
      bg: 'darkPrimary',
      borderColor: 'darkPrimary'
    },
    bg: 'primary',
    borderColor: 'primary',
    color: 'white'
  },
  secondary: {
    ...base,
    bg: 'secondary',
    borderColor: 'secondary',
    color: 'white'
  },
  text: {
    ...base,
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'lightPrimary',
      transform: 'translateY(0px)'
    },    
    bg: 'transparent',
    borderColor: 'transparent',
    color: 'primary'
  }
};

export default buttons;

const buttons = {
  primary: {
    color: 'white',
    bg: 'primary',
    borderColor: 'primary',
    '&:hover': {
      bg: 'darkPrimary',
      borderColor: 'darkPrimary'
    }
  },
  secondary: {
    color: 'white',
    bg: 'secondary',
    borderColor: 'secondary'
  },  
  outline: {
    color: 'primary',
    bg: 'transparent',
    borderColor: 'primary',
    '&:hover': {
      backgroundColor: 'rgba(26, 171, 155, 0.1)'
    }
  },
  link: {
    color: 'primary',
    bg: 'transparent',
    borderColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'lightPrimary',
    }
  }
};

export default buttons;

const styles = {
  button: {
    display: 'block',
    fontWeight: 'body',
    fontFamily: 'body',
    borderStyle: 'solid',
    borderWidth: 2,
    fontSize: 2,
    cursor: 'pointer',
    py: 5,
    px: 7,
    transition: '0.2s all',
    opacity: '1',
    filter: 'none',
    '&:hover': {
      transform: 'translateY(-1px)'
    },
    '&:focus': {
      outline: 0
    }
  },
  disabled: {
    cursor: 'default',
    opacity: '0.6',
    filter: 'grayscale(1)'
  }
};

export default styles;

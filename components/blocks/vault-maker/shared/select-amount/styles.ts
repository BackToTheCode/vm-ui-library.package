const styles = {
  coinIcon: (color: string) => ({
    bg: color,
    ml: '20px',
    position: 'relative',
    top: '-2px'
  }),
  collateralValue: {
    fontWeight: 'bold'
  },

  container: {
    flex: 1
  },
  detail: {
    color: 'grey'
  },
  input: {
    '&::placeholder': {
      color: 'midGrey'
    },
    '&:focus': {
      outline: 'none'
    },
    '&[type=number]::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0
    },
    bg: 'superLightGrey',
    border: 0,
    borderBottomColor: 'dark',
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderRadius: 0,
    color: 'dark',
    display: 'inline-block',
    fontFamily: 'body',
    marginRight: '15px',
    minWidth: '140px',
    px: 5,
    py: 3,
    transition: 'all 0.2s',
    verticalAlign: 'bottom'
  },
  label: {
    alignItems: 'baseline',
    color: 'grey',
    fontFamily: 'body',
    fontWeight: 'bold',
    justifyContent: 'left',
    letterSpacing: '0.5px',
    mb: 3
  },

  lockDetail: { mt: 6 },
  remainingBalance: { mt: 3 },
  symbol: {
    display: 'inline-block',
    position: 'relative',
    py: 3
    // top: '4px'
  }
};

export default styles;

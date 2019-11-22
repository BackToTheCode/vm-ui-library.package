const styles = {
  boxStyle: { flex: 1 },
  labelStyle: {
    mb: 3,
    justifyContent: 'left',
    alignItems: 'baseline',
    color: 'grey',
    fontWeight: 'bold',
    letterSpacing: '0.5px'
  },
  balanceStyle: {
    mb: 3,
    display: 'inline-block',
    position: 'relative',
    top: '-8px'
  },
  coinIconStyle: (color: string) => ({
    ml: '20px',
    position: 'relative',
    top: '-2px',
    bg: color
  }),
  balanceDetailStyle: { mt: 3, mb: 6, color: 'grey' }
};

export default styles;

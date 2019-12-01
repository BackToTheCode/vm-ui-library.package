const styles = {
  balance: {
    display: 'inline-block',
    mb: 3,
    position: 'relative',
    top: '-8px'
  },
  balanceDetail: { mt: 3, mb: 6, color: 'grey' },
  balanceValue: { fontWeight: 'bold'},
  box: { flex: 1 },
  coinIcon: (color: string) => ({
    bg: color,
    ml: '20px',
    position: 'relative',
    top: '-2px'
  }),
  label: {
    alignItems: 'baseline',
    color: 'grey',
    fontWeight: 'bold',
    justifyContent: 'left',
    letterSpacing: '0.5px',
    mb: 3
  }
};

export default styles;

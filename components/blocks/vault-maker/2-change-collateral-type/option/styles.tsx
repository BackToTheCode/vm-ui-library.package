const styles = {
  optionStyle: {
    borderRadius: '8px',
    cursor: 'pointer',
    flex: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'left',
    mb: 3,
    mt: 3,
    alignItems: 'center',
    transition: '0.2s all',
    '&:hover': {
      bg: 'superLightSecondary',
      transform: 'translateX(-1px)'
    }
  },
  selectedStyle: {
    bg: 'superLightSecondary'
  },
  radioStyle: { mx: 6 },
  symbolStyle: { display: 'inline-block', ml: 5 },
  iconStyle: (brand: any) => ({ ml: 6, bg: brand })
};

export default styles;

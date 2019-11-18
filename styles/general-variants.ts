let variants = {
  indicator: {
    connected: { bg: 'primary' },
    unconnected: { bg: 'warning' },
    disconnected: { bg: 'lightWarning' }
  },
  container: {
    regular: {
      maxHeight: '100%',
      maxWidth: 1024
    },
    wide: {
      maxHeight: '100%',
      maxWidth: '100%'
    },
    regularTall: {
      maxHeight: '100%',
      maxWidth: 1024,
      height: '85vh;'
    }
  }
};

export default variants;

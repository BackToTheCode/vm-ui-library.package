const base = {
  '-moz-osx-font-smoothing': 'grayscale',
  '-webkit-font-smoothing': 'antialiased'
};

const text = {
  body: {
    large: {
      color: 'dark',
      fontFamily: 'body',
      fontSize: 3
    },
    regular: {
      color: 'dark',
      fontFamily: 'body',
      fontSize: 2
    },
    small: {
      color: 'dark',
      fontFamily: 'body',
      fontSize: 0
    }
  },
  heading: {
    large: {
      fontFamily: 'heading',
      fontSize: [4, 5, 5]
    },
    regular: {
      fontFamily: 'heading',
      fontSize: 4
    },
    small: {
      fontFamily: 'heading',
      fontSize: '30px'
    }
  }
};

export default text;

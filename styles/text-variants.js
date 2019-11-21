const base = {
  '-webkit-font-smoothing': 'antialiased',
  '-moz-osx-font-smoothing': 'grayscale'
}


let text = {
    body: {
      small: {
        fontSize: 0,
        fontFamily: 'body',
        color: 'dark'
      },
      regular: {
        fontSize: 2,
        fontFamily: 'body',
        color: 'dark'
      },
      large: {
        fontSize: 3,
        fontFamily: 'body',
        color: 'dark'
      }
    },
    heading: {
      small: {
        fontSize: '30px',
        fontFamily: 'heading'
      },
      regular: {
        fontSize: 4,
        fontFamily: 'heading'
      },
      large: {
        fontSize: [4, 5, 5],
        fontFamily: 'heading'
      }
    }
  }

export default text;
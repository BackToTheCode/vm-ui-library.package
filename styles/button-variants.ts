const base = {
  fontWeight: 'body',
  fontSize: 2,
  cursor: 'pointer',
  fontFamily: 'body',
  borderStyle: 'solid',
  borderWidth: 2,
  '&:focus': {
    outline: 0
  }
}

let buttons: any = {
  primary: {
    color: 'white',
    bg: 'primary',
    borderColor: 'primary',
    py: 3,
    px: 4
  },
  secondary: {
    color: 'white',
    bg: 'secondary',
    borderColor: 'secondary',
    py: 1,
    px: 3
  },
  outline: {
    color: 'primary',
    bg: 'transparent',
    borderColor: 'primary',
    py: 5,
    px: 6,
    '&:hover': {
      backgroundColor: 'rgba(26, 171, 155, 0.1)'
    },
    disabled: {
      cursor: 'default',
      opacity: '0.6',
      filter: 'grayscale(1)'
    }
  }
};

buttons.primary = { ...buttons.primary, ...base };
buttons.secondary = { ...buttons.secondary, ...base };
buttons.outline = { ...buttons.outline, ...base };
buttons.outline.disabled = { ...buttons.outline, ...buttons.outline.disabled };

export default buttons;

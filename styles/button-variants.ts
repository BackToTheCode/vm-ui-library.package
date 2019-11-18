const base = {
  py: 4
};

const disabled = {
  cursor: 'default',
  opacity: '0.6',
  filter: 'grayscale(1)'
};

const tall = {
  py: 5
};

const primary = {
  color: 'white',
  bg: 'primary',
  borderColor: 'primary'
};

const secondary = {
  color: 'white',
  bg: 'secondary',
  borderColor: 'secondary'
};

const outline = {
  color: 'primary',
  bg: 'transparent',
  borderColor: 'primary',
  '&:hover': {
    backgroundColor: 'rgba(26, 171, 155, 0.1)'
  }
};

const buttons: any = {};

buttons.primary = { ...base, ...primary };
buttons.primary.tall = { ...buttons.primary, ...tall };
buttons.primary.disabled = { ...buttons.primary, ...disabled };

buttons.secondary = { ...base, ...secondary };
buttons.secondary.tall = { ...buttons.secondary, ...tall };
buttons.secondary.disabled = { ...buttons.secondary, ...disabled };

buttons.outline = { ...base, ...outline };
buttons.outline.tall = { ...buttons.outline, ...tall };
buttons.outline.disabled = { ...buttons.outline, ...disabled };
buttons.outline.disabled.tall = { ...buttons.outline.disabled, ...tall };

console.log('buttons.primary.tall', buttons.primary.tall)

export default buttons;

const styles = {
  icon:  (bgColor: string) => ({
    width: '35px',
    height: '35px',
    p: 3,
    borderRadius: '50%',
    bg: bgColor
  }),
  iconContainer: (bgColor: string) => ({
    bg: bgColor,
    borderRadius: '50%',
    p: 3,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'inline-flex'
  })
};

export default styles;

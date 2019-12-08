const styles = {
  container: (bgColor: string = 'rgba(244,183,49, 0.2)') => ({
    alignItems: 'center',
    bg: bgColor,
    borderRadius: '50%',
    display: 'inline-flex',
    justifyContent: 'center',
    p: 3,
  }),
  icon:  (bgColor: string = 'rgb(244,183,49, 0.5)') => ({
    bg: bgColor,
    borderRadius: '50%',
    height: '35px',
    p: 3,
    width: '35px',
  }),

};

export default styles;

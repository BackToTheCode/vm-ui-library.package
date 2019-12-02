type Keys = 'width' | 'alignContent' | 'borderColor' | 'mt' | 'mb';
type buttonStyleProps = {
  [key in Keys]: string | number;
};

export interface Styles {
  button: buttonStyleProps;
}

const styles: Styles = {
  button: {
    alignContent: 'end',
    borderColor: 'white',
    mb: 0,
    mt: 4,
    width: '100%'
  }
};

export default styles;

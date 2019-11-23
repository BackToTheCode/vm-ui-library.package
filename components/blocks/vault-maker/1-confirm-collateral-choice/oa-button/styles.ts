type Keys = 'width' | 'alignContent' | 'borderColor' | 'mt' | 'mb';
type OAButtonStyleProps = {
  [key in Keys]: string | number;
};

type Styles = {
  oaButtonStyle: OAButtonStyleProps;
};

const styles: Styles = {
  oaButtonStyle: {
    width: '100%',
    alignContent: 'end',
    borderColor: 'white',
    mt: 4,
    mb: 0
  }
};

export default styles;

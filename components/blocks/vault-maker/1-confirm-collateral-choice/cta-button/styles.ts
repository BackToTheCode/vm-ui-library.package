type Keys = 'width' | 'alignContent' | 'mt';
type CTAButtonStyleProps = {
  [key in Keys]: string | number;
};

type Styles = {
  ctaButtonStyle: CTAButtonStyleProps;
};

const styles: Styles = {
  ctaButtonStyle: {
    width: '100%',
    alignContent: 'end',
    mt: 6
  }
};

export default styles;
type Keys = 'flex';
type TitleStyleProps = {
  [key in Keys]: string | number;
};

interface Styles {
  titleStyle: TitleStyleProps;
};

const styles: Styles = {
  titleStyle: {
    flex: 1
  }
};

export default styles;
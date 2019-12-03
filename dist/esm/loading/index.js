/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Box, Image, Heading } from 'rebass';
import styles from './styles';
import ringSvg from '../../public/images/rings.svg';
export var Loading = function (props) {
    var image = props.image, text = props.text;
    return (jsx(Box, { sx: styles.container },
        jsx(Heading, { variant: "heading.regular", sx: styles.text }, text),
        jsx(Image, { src: image, sx: styles.image })));
};
Loading.defaultProps = {
    image: ringSvg,
    text: "Loading..."
};
Loading.displayName = 'Loading';
//# sourceMappingURL=index.js.map
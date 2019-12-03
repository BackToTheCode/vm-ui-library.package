/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Box, Image, Heading } from 'rebass';
import styles from './styles';
import ringSvg from '../../public/images/rings.svg';
export const Loading = (props) => {
    const { image, text } = props;
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
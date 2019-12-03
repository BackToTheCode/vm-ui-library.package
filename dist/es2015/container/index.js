/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Flex } from 'rebass';
import styles from './styles';
const Container = ({ children, variant, sx }) => {
    return (jsx(Flex, { variant: variant, sx: Object.assign({}, styles.base, sx) }, children));
};
const FullContainer = (props) => jsx(Container, Object.assign({}, props, { sx: styles.full }));
Container.displayName = 'Container';
FullContainer.displayName = 'FullContainer';
export { FullContainer, Container };
//# sourceMappingURL=index.js.map
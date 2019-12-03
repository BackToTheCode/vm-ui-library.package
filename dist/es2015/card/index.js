/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Box } from 'rebass';
import styles from './styles';
export const Card = ({ sx, children }) => (jsx(Box, { sx: Object.assign({}, styles.base, sx) }, children));
Card.displayName = 'Card';
//# sourceMappingURL=index.js.map
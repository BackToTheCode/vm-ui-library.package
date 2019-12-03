/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button } from '../regular';
import styles from './styles';
export const LargeButton = (props) => (jsx(Button, Object.assign({}, props, { sx: Object.assign({}, props.sx, styles.button) })));
LargeButton.displayName = 'LargeButton';
//# sourceMappingURL=index.js.map
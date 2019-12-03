/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button as BaseButton } from 'rebass';
import styles from './styles';
export const Button = ({ onClick, variant, isDisabled, sx, children }) => {
    let mergedStyle = styles.button;
    if (isDisabled) {
        mergedStyle = Object.assign({}, mergedStyle, styles.disabled);
    }
    return (jsx(BaseButton, { onClick: onClick, sx: Object.assign({}, mergedStyle, sx), variant: variant }, children));
};
Button.defaultProps = {
    variant: 'primary'
};
Button.displayName = 'Button';
//# sourceMappingURL=index.js.map
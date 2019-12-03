var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button as BaseButton } from 'rebass';
import styles from './styles';
export var Button = function (_a) {
    var onClick = _a.onClick, variant = _a.variant, isDisabled = _a.isDisabled, sx = _a.sx, children = _a.children;
    var mergedStyle = styles.button;
    if (isDisabled) {
        mergedStyle = __assign({}, mergedStyle, styles.disabled);
    }
    return (jsx(BaseButton, { onClick: onClick, sx: __assign({}, mergedStyle, sx), variant: variant }, children));
};
Button.defaultProps = {
    variant: 'primary'
};
Button.displayName = 'Button';
//# sourceMappingURL=index.js.map
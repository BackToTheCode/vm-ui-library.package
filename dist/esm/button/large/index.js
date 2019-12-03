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
import { Button } from '../regular';
import styles from './styles';
export var LargeButton = function (props) { return (jsx(Button, __assign({}, props, { sx: __assign({}, props.sx, styles.button) }))); };
LargeButton.displayName = 'LargeButton';
//# sourceMappingURL=index.js.map
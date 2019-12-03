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
import { Box } from 'rebass';
import styles from './styles';
export var Card = function (_a) {
    var sx = _a.sx, children = _a.children;
    return (jsx(Box, { sx: __assign({}, styles.base, sx) }, children));
};
Card.displayName = 'Card';
//# sourceMappingURL=index.js.map
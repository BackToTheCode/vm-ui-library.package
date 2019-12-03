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
import { Flex } from 'rebass';
import styles from './styles';
var Container = function (_a) {
    var children = _a.children, variant = _a.variant, sx = _a.sx;
    return (jsx(Flex, { variant: variant, sx: __assign({}, styles.base, sx) }, children));
};
var FullContainer = function (props) { return jsx(Container, __assign({}, props, { sx: styles.full })); };
Container.displayName = 'Container';
FullContainer.displayName = 'FullContainer';
export { FullContainer, Container };
//# sourceMappingURL=index.js.map
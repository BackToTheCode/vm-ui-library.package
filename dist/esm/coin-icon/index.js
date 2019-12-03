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
import { Box, Image } from 'rebass';
import styles from './styles';
export var CoinIcon = function (_a) {
    var brand = _a.brand, sx = _a.sx, icon = _a.icon;
    ;
    var mainBgColor = 'rgb(26, 171, 155)';
    var glowBgColor = 'rgb(89, 188, 175)';
    if (brand && brand.indexOf('a') == -1) {
        mainBgColor = brand.replace(')', ', 0.50)').replace('rgb', 'rgba');
        glowBgColor = brand.replace(')', ', 0.20)').replace('rgb', 'rgba');
    }
    console.log('icon', icon);
    return (jsx(Box, { sx: __assign({}, sx, styles.iconContainer(glowBgColor)) },
        jsx(Image, { sx: styles.icon(mainBgColor), src: icon })));
};
CoinIcon.displayName = 'CoinIcon';
CoinIcon.defaultProps = {
    brand: 'rgb(244,183,49)'
};
//# sourceMappingURL=index.js.map
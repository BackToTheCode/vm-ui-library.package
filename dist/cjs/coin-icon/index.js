"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var rebass_1 = require("rebass");
var styles_1 = __importDefault(require("./styles"));
exports.CoinIcon = function (_a) {
    var brand = _a.brand, sx = _a.sx, icon = _a.icon;
    ;
    var mainBgColor = 'rgb(26, 171, 155)';
    var glowBgColor = 'rgb(89, 188, 175)';
    if (brand && brand.indexOf('a') == -1) {
        mainBgColor = brand.replace(')', ', 0.50)').replace('rgb', 'rgba');
        glowBgColor = brand.replace(')', ', 0.20)').replace('rgb', 'rgba');
    }
    console.log('icon', icon);
    return (core_1.jsx(rebass_1.Box, { sx: __assign({}, sx, styles_1.default.iconContainer(glowBgColor)) },
        core_1.jsx(rebass_1.Image, { sx: styles_1.default.icon(mainBgColor), src: icon })));
};
exports.CoinIcon.displayName = 'CoinIcon';
exports.CoinIcon.defaultProps = {
    brand: 'rgb(244,183,49)'
};
//# sourceMappingURL=index.js.map
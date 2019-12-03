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
exports.Button = function (_a) {
    var onClick = _a.onClick, variant = _a.variant, isDisabled = _a.isDisabled, sx = _a.sx, children = _a.children;
    var mergedStyle = styles_1.default.button;
    if (isDisabled) {
        mergedStyle = __assign({}, mergedStyle, styles_1.default.disabled);
    }
    return (core_1.jsx(rebass_1.Button, { onClick: onClick, sx: __assign({}, mergedStyle, sx), variant: variant }, children));
};
exports.Button.defaultProps = {
    variant: 'primary'
};
exports.Button.displayName = 'Button';
//# sourceMappingURL=index.js.map
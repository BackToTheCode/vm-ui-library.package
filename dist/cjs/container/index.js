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
var Container = function (_a) {
    var children = _a.children, variant = _a.variant, sx = _a.sx;
    return (core_1.jsx(rebass_1.Flex, { variant: variant, sx: __assign({}, styles_1.default.base, sx) }, children));
};
exports.Container = Container;
var FullContainer = function (props) { return core_1.jsx(Container, __assign({}, props, { sx: styles_1.default.full })); };
exports.FullContainer = FullContainer;
Container.displayName = 'Container';
FullContainer.displayName = 'FullContainer';
//# sourceMappingURL=index.js.map
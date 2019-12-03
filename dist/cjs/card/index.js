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
exports.Card = function (_a) {
    var sx = _a.sx, children = _a.children;
    return (core_1.jsx(rebass_1.Box, { sx: __assign({}, styles_1.default.base, sx) }, children));
};
exports.Card.displayName = 'Card';
//# sourceMappingURL=index.js.map
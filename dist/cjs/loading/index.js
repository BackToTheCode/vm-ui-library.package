"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var rebass_1 = require("rebass");
var styles_1 = __importDefault(require("./styles"));
var rings_svg_1 = __importDefault(require("../../public/images/rings.svg"));
exports.Loading = function (props) {
    var image = props.image, text = props.text;
    return (core_1.jsx(rebass_1.Box, { sx: styles_1.default.container },
        core_1.jsx(rebass_1.Heading, { variant: "heading.regular", sx: styles_1.default.text }, text),
        core_1.jsx(rebass_1.Image, { src: image, sx: styles_1.default.image })));
};
exports.Loading.defaultProps = {
    image: rings_svg_1.default,
    text: "Loading..."
};
exports.Loading.displayName = 'Loading';
//# sourceMappingURL=index.js.map
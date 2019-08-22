"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var InputField = function (_a) {
    var placeholder = _a.placeholder;
    return (React.createElement("div", { className: "hero" },
        React.createElement("input", { type: "text", placeholder: placeholder })));
};
exports.default = InputField;
exports.InputField = InputField;
InputField.propTypes = {
    placeholder: prop_types_1.default.string
};
InputField.defaultProps = {
    placeholder: ''
};
//# sourceMappingURL=InputField.js.map
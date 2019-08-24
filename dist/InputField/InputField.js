"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var InputField = function (_a) {
    var label = _a.label, placeholder = _a.placeholder;
    return (React.createElement("div", { className: "hero" },
        React.createElement("label", { htmlFor: "text-field", className: "label", "data-label": label }, label),
        React.createElement("input", { id: "text-field", type: "text", placeholder: placeholder })));
};
exports.default = InputField;
exports.InputField = InputField;
InputField.defaultProps = {
    placeholder: 'Some text here'
};
//# sourceMappingURL=InputField.js.map
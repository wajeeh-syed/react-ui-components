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
var Checkbox = function (_a) {
    var checked = _a.checked, label = _a.label, handleClick = _a.handleClick, handleKeyUp = _a.handleKeyUp;
    return (React.createElement("div", { className: checked ? 'Checkbox-container checked' : 'Checkbox-container', onClick: handleClick, onKeyUp: handleKeyUp, role: "button", tabIndex: 0, "data-label": label },
        React.createElement("input", { type: "checkbox", checked: checked }),
        React.createElement("p", { className: "label", "data-label": label }, label)));
};
exports.default = Checkbox;
exports.Checkbox = Checkbox;
Checkbox.propTypes = {
    checked: prop_types_1.default.bool,
    label: prop_types_1.default.string.isRequired,
    handleClick: prop_types_1.default.func.isRequired
};
Checkbox.defaultProps = {
    checked: true
};
//# sourceMappingURL=Checkbox.js.map
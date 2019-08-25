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
var no_op_1 = __importDefault(require("no-op"));
var Checkbox = function (_a) {
    var label = _a.label, onChangeHandler = _a.onChangeHandler, onKeyHandler = _a.onKeyHandler;
    return (React.createElement("div", { className: "checkbox-container" },
        React.createElement("input", { id: "checkbox", type: "checkbox", onClick: onChangeHandler, onKeyUp: onKeyHandler }),
        React.createElement("label", { className: "label", "data-label": label }, label)));
};
exports.default = Checkbox;
exports.Checkbox = Checkbox;
Checkbox.defaultProps = {
    onChangeHandler: no_op_1.default,
    label: '',
    onKeyHandler: no_op_1.default
};
//# sourceMappingURL=Checkbox.js.map
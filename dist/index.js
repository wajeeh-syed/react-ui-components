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
var react_1 = __importStar(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var Checkbox_1 = require("./Checkbox");
exports.Checkbox = Checkbox_1.Checkbox;
var InputField_1 = require("./InputField");
exports.InputField = InputField_1.InputField;
var main = function () { return "Welcome to React UI Components world"; };
exports.main = main;
if (process.env.NODE_ENV !== 'production') {
    var axe = require('react-axe');
    axe(react_1.default, react_dom_1.default, 3000);
}
var App = function () { return (react_1.default.createElement(react_1.Fragment, null,
    react_1.default.createElement(Checkbox_1.Checkbox, { label: "yes", onChangeHandler: function () { return console.log('hey'); } }),
    react_1.default.createElement(InputField_1.InputField, { label: "Name: " }))); };
react_dom_1.default.render(react_1.default.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=index.js.map
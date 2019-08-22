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
var enzyme_1 = require("enzyme");
var InputField_1 = require("./InputField");
describe('InputField', function () {
    it('Renders without error', function () {
        var wrapper = enzyme_1.shallow(React.createElement(InputField_1.InputField, { placeholder: "some text" }));
        expect(wrapper.props()).toEqual({});
    });
});
//# sourceMappingURL=InputField test.js.map
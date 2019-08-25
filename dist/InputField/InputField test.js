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
describe('<InputField />', function () {
    var wrapper;
    var makeWrapper = function (props) {
        if (props === void 0) { props = {}; }
        wrapper = enzyme_1.mount(React.createElement(InputField_1.InputField, __assign({}, props)));
    };
    it('should return InputField with placeholder text', function () {
        makeWrapper();
        expect(wrapper).not.toBe(undefined);
        expect(wrapper.props()).toEqual({
            placeholder: 'Some text here',
            label: ''
        });
    });
    it('should return correct placeholder', function () {
        var props = { placeholder: 'a new text' };
        makeWrapper(props);
        expect(wrapper.props().placeholder).toBe('a new text');
    });
    it('should return correct className with shallow render', function () {
        var props = { placeholder: 'a new text' };
        wrapper = enzyme_1.shallow(React.createElement(InputField_1.InputField, __assign({}, props)));
        expect(wrapper.props().className).toBe('hero');
    });
    it('should return correct className after mount', function () {
        var props = { placeholder: 'a new text' };
        makeWrapper(props);
        expect(wrapper.find('.hero')).toHaveLength(1);
    });
});
//# sourceMappingURL=InputField test.js.map
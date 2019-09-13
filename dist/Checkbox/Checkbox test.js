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
var Checkbox_1 = require("./Checkbox");
describe('<InputField />', function () {
    var wrapper;
    var makeWrapper = function (props) {
        wrapper = enzyme_1.mount(React.createElement(Checkbox_1.Checkbox, __assign({}, props)));
    };
    it('should return InputField with placeholder text', function () {
        var props = {
            label: 'A label for checkbox',
            onChangeHandler: jest.fn(),
            onKeyHandler: jest.fn()
        };
        makeWrapper(props);
        expect(wrapper).not.toBe(undefined);
        expect(wrapper.props().label).toBe('A label for checkbox');
        expect(wrapper.props().onChangeHandler).toBeTruthy();
    });
    it('should return correct label and trigger click handler on click', function () {
        var props = {
            label: 'A label for checkbox',
            onChangeHandler: jest.fn(),
            onKeyHandler: jest.fn()
        };
        makeWrapper(props);
        var checkboxInput = wrapper.find('input');
        checkboxInput.simulate('click', { target: { checked: true } });
        expect(wrapper.props().label).toBe('A label for checkbox');
        expect(wrapper.props().onChangeHandler).toHaveBeenCalled();
    });
    it('should return correct className with shallow render', function () {
        var props = {
            checked: false,
            label: 'A new label',
            onChangeHandler: jest.fn(),
            onKeyHandler: jest.fn()
        };
        wrapper = enzyme_1.shallow(React.createElement(Checkbox_1.Checkbox, __assign({}, props)));
        expect(wrapper.props().className).toBe('checkbox-container');
    });
});
//# sourceMappingURL=Checkbox test.js.map
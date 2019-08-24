import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { Checkbox } from './Checkbox';

describe('<InputField />', () => {
  let wrapper;

  const makeWrapper = (props): void => {
    wrapper = mount(<Checkbox {...props} />);
  };

  it('should return InputField with placeholder text', () => {
    const props = {
      label: 'A label for checkbox',
      onChangeHandler: jest.fn(),
      onKeyHandler: jest.fn()
    };
    makeWrapper(props);

    expect(wrapper).not.toBe(undefined);
    expect(wrapper.props().label).toBe('A label for checkbox');
    expect(wrapper.props().onChangeHandler).toBeTruthy();
  });

  it('should return correct label and trigger click handler on click', () => {
    const props = {
      label: 'A label for checkbox',
      onChangeHandler: jest.fn(),
      onKeyHandler: jest.fn()
    };
    makeWrapper(props);

    const checkboxInput = wrapper.find('input');

    checkboxInput.simulate('click', { target: { checked: true } });

    expect(wrapper.props().label).toBe('A label for checkbox');
    expect(wrapper.props().onChangeHandler).toHaveBeenCalled();
  });

  it('should return correct className with shallow render', () => {
    const props = {
      checked: false,
      label: 'A new label',
      onChangeHandler: jest.fn(),
      onKeyHandler: jest.fn()
    };
    wrapper = shallow(<Checkbox {...props} />);

    expect(wrapper.props().className).toBe('checkbox-container');
  });

  it('should trigger keyEventHandler onKeyUp', () => {
    const props = { label: 'A new label', onKeyHandler: jest.fn() };
    makeWrapper(props);

    wrapper.find('input').simulate('keyup');

    expect(wrapper.props().onKeyHandler).toHaveBeenCalled();
  });
});

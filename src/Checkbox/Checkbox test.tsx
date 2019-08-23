import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { Checkbox } from './Checkbox';

describe('<InputField />', () => {
  let wrapper;

  const makeWrapper = (
    props = {
      handleClick: jest.fn(),
      checked: false,
      label: '',
      handleKeyUp: jest.fn()
    }
  ): void => {
    wrapper = mount(<Checkbox {...props} />);
  };

  xit('should return InputField with placeholder text', () => {
    const props = {
      label: 'A label for checkbox',
      handleClick: jest.fn(),
      checked: false,
      handleKeyUp: jest.fn()
    };
    makeWrapper(props);

    expect(wrapper).not.toBe(undefined);
    expect(wrapper.props().label).toBe('A label for checkbox');
    expect(wrapper.props().handleClick).toBeTruthy();
  });

  xit('should return correct label and trigger click handler on click', () => {
    const props = {
      label: 'A label for checkbox',
      handleClick: jest.fn(),
      checked: false,
      handleKeyUp: jest.fn()
    };
    makeWrapper(props);

    wrapper.simulate('change');

    expect(wrapper.props().label).toBe('a new label');
    expect(wrapper.props().handleClick).toHaveBeenCalled();
  });

  it('should return correct className with shallow render', () => {
    const props = {
      checked: false,
      label: 'a new label',
      handleClick: jest.fn(),
      handleKeyUp: jest.fn()
    };
    wrapper = shallow(<Checkbox {...props} />);

    expect(wrapper.props().className).toBe('checkbox-container');
  });

  it('should return correct className after mount', () => {
    const props = {
      label: 'a new text',
      handleClick: jest.fn(),
      handleKeyUp: jest.fn(),
      checked: true
    };
    makeWrapper(props);

    wrapper.simulate('change');

    expect(wrapper.find('.checkbox-container.checked')).toHaveLength(1);
  });

  it('should trigger keyEventHandler onKeyUp', () => {
    const props = {
      checked: false,
      label: 'a new label',
      handleClick: jest.fn(),
      handleKeyUp: jest.fn()
    };
    makeWrapper(props);

    wrapper.simulate('keyup');

    expect(wrapper.props().handleKeyUp).toHaveBeenCalled();
  });
});

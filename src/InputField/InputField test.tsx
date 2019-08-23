import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { InputField } from './InputField';

describe('<InputField />', () => {
  let wrapper;

  const makeWrapper = (props = {}): void => {
    wrapper = mount(<InputField {...props} />);
  };

  it('should return InputField with placeholder text', () => {
    makeWrapper();

    expect(wrapper).not.toBe(undefined);
    expect(wrapper.props()).toEqual({ placeholder: 'Some text here' });
  });

  it('should return correct placeholder', () => {
    const props = { placeholder: 'a new text' };
    makeWrapper(props);

    expect(wrapper.props().placeholder).toBe('a new text');
  });

  it('should return correct className with shallow render', () => {
    const props = { placeholder: 'a new text' };
    wrapper = shallow(<InputField {...props} />);

    expect(wrapper.props().className).toBe('hero');
  });

  it('should return correct className after mount', () => {
    const props = { placeholder: 'a new text' };
    makeWrapper(props);

    expect(wrapper.find('.hero')).toHaveLength(1);
  });
});

import * as React from 'react';
import PropTypes from 'prop-types';

interface InputFieldProps {
  placeholder?: string;
}

const InputField: React.FunctionComponent<InputFieldProps> = ({
  placeholder
}) => (
  <div className="hero">
    <input type="text" placeholder={placeholder} />
  </div>
);

InputField.propTypes = {
  placeholder: PropTypes.string
};

InputField.defaultProps = {
  placeholder: 'Some text here'
};

export { InputField as default, InputField };

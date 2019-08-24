import * as React from 'react';

interface InputFieldProps {
  label?: string;
  placeholder?: string;
}

const InputField: React.FunctionComponent<InputFieldProps> = ({
  label,
  placeholder
}) => (
  <div className="hero">
    <label htmlFor="text-field" className="label" data-label={label}>
      {label}
    </label>

    <input id="text-field" type="text" placeholder={placeholder} />
  </div>
);

InputField.defaultProps = {
  placeholder: 'Some text here',
  label: ''
};

export { InputField as default, InputField };

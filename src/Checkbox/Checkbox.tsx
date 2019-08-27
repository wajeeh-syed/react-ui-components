import * as React from 'react';
import noop from 'no-op';

interface CheckboxProps {
  checked?: boolean;
  label: string;
  onChangeHandler: React.MouseEventHandler<HTMLDivElement>;
}

const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  label,
  onChangeHandler
}) => (
  <div className="checkbox-container">
    <input
      aria-label="checkbox"
      title="checkbox"
      id="cbox"
      type="checkbox"
      onClick={onChangeHandler}
    />
    <label className="label" htmlFor="cbox" data-label={label}>
      {label}
    </label>
  </div>
);

Checkbox.defaultProps = {
  onChangeHandler: noop,
  label: ''
};

export { Checkbox as default, Checkbox };

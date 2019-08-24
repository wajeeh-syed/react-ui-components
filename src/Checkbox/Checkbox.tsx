import * as React from 'react';
import noop from 'no-op';

interface CheckboxProps {
  checked?: boolean;
  label: string;
  onChangeHandler: React.MouseEventHandler<HTMLDivElement>;
  onKeyHandler: React.KeyboardEventHandler<HTMLDivElement>;
}

const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  label,
  onChangeHandler,
  onKeyHandler
}) => (
  <div className="checkbox-container">
    <input
      id="checkbox"
      type="checkbox"
      onClick={onChangeHandler}
      onKeyUp={onKeyHandler}
    />
    <label className="label" data-label={label}>
      {label}
    </label>
  </div>
);

Checkbox.defaultProps = {
  onChangeHandler: noop,
  label: '',
  onKeyHandler: noop
};

export { Checkbox as default, Checkbox };

import * as React from 'react';
import PropTypes from 'prop-types';
import noop from 'no-op';

interface CheckboxProps {
  checked: boolean;
  label: string;
  handleClick: React.MouseEventHandler<HTMLDivElement>;
  handleKeyUp: React.KeyboardEventHandler<HTMLDivElement>;
}

const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  checked,
  label,
  handleClick,
  handleKeyUp
}) => (
  <div
    className={checked ? 'checkbox-container checked' : 'checkbox-container'}
    onChange={handleClick}
    onKeyUp={handleKeyUp}
    role="button"
    tabIndex={0}
    data-label={label}
  >
    <input type="checkbox" checked={checked} />
    <p className="label" data-label={label}>
      {label}
    </p>
  </div>
);

Checkbox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleKeyUp: PropTypes.func
};

Checkbox.defaultProps = {
  checked: false,
  handleClick: noop,
  handleKeyUp: noop
};

export { Checkbox as default, Checkbox };

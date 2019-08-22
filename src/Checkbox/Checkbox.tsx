import * as React from 'react';
import PropTypes from 'prop-types';

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
    className={checked ? 'Checkbox-container checked' : 'Checkbox-container'}
    onClick={handleClick}
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
  handleKeyUp: PropTypes.func.isRequired
};

Checkbox.defaultProps = {
  checked: true
};

export { Checkbox as default, Checkbox };

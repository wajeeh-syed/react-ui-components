import * as React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ placeholder }) => (
  <div className="hero">
    <input type="text" placeholder={placeholder} />
  </div>
);

InputField.propTypes = {
  placeholder: PropTypes.string
};

InputField.defaultProps = {
  placeholder: ''
};

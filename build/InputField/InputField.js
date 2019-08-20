import * as React from 'react';
import PropTypes from 'prop-types';
var InputField = function (_a) {
    var placeholder = _a.placeholder;
    return (<div className='hero'>
        <input type="text" placeholder={placeholder}/>
    </div>);
};
InputField.propTypes = {
    checked: PropTypes.bool,
    label: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
};
InputField.defaultProps = {
    checked: true,
};
//# sourceMappingURL=InputField.js.map
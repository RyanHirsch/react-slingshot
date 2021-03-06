import React from 'react';
import PropTypes from 'prop-types';

const FuelSavingsTextInput = ({ name, value, placeholder, onChange }) => (
  <input
    className="small"
    name={name}
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

const { string, func, number, oneOfType } = PropTypes;

FuelSavingsTextInput.propTypes = {
  name: string.isRequired,
  onChange: func.isRequired,
  placeholder: string,
  value: oneOfType([string, number]),
};

FuelSavingsTextInput.defaultProps = {
  value: 0,
  placeholder: '',
};

export default FuelSavingsTextInput;

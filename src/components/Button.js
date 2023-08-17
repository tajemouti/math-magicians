import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Button = ({ label, type }) => (
  <button type="button" className={type}>
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: '',
};

export default Button;

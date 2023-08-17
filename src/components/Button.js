import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Button = ({ label, type, onClick }) => (
  <button type="button" className={type} onClick={onClick}>
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: '',
  onClick: () => {},
};

export default Button;

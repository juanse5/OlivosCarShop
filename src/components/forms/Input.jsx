// src/components/Input.jsx
import React from 'react';
import PropTypes from 'prop-types';
//import '../../styles/Input.css'; // Asegúrate de crear este archivo CSS para estilos básicos

const Input = ({ label, name, value, onChange, type = 'text', placeholder = '' }) => (
  <div className="input-group">
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;

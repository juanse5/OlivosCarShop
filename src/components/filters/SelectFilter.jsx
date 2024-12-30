import React from 'react';

import "../../styles/nav/Nav.css"

const SelectFilter = ({ value, onChange, options, label }) => (
  <div className="select-filter">
    <label>{label}</label>
    <select value={value} onChange={onChange}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default SelectFilter;

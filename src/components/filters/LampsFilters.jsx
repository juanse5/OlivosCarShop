// LampsFilters.jsx
import React from 'react';
import SelectFilter from './SelectFilter';
import '../../styles/filters/Filters.css';

const LampsFilters = ({ 
  repuesto,
  vehicle, 
  lampType, 
  technology, 
  brand, 
  model, 
  handleRepuestoChange,
  handleVehicleChange, 
  handleLampTypeChange, 
  handleTechnologyChange, 
  handleBrandChange, 
  handleModelChange,
  repuestoOptions, 
  vehicleOptions, 
  lampTypeOptions, 
  technologyOptions, 
  brandOptions, 
  modelOptions 
}) => {
  return (
    <div className="lamps-filters-container">
      {/* Siempre muestra el filtro de "Tipo de Repuesto" */}
      <SelectFilter
        value={repuesto}
        onChange={handleRepuestoChange}
        options={repuestoOptions}
        label="Tipo de Repuesto"
      />
      
      {/* Mostrar los demás filtros solo si el repuesto seleccionado es "lamparas" */}
      {repuesto === 'lamparas' && (
        <>
          <SelectFilter
            value={vehicle}
            onChange={handleVehicleChange}
            options={vehicleOptions}
            label="Tipo de Vehículo"
          />
          <SelectFilter
            value={lampType}
            onChange={handleLampTypeChange}
            options={lampTypeOptions}
            label="Tipo de Lámpara"
          />
          <SelectFilter
            value={technology}
            onChange={handleTechnologyChange}
            options={technologyOptions}
            label="Tecnología de Lámpara"
          />
          <SelectFilter
            value={brand}
            onChange={handleBrandChange}
            options={brandOptions}
            label="Marca"
          />
          <SelectFilter
            value={model}
            onChange={handleModelChange}
            options={modelOptions}
            label="Modelo de Lámpara"
          />
        </>
      )}
    </div>
  );
};

export default LampsFilters;

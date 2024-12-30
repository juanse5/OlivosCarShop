
import React from 'react';
import useNavFilters from '../../hooks/nav/UseFilter.js'; // Import the custom hook
import LampsFilters from './LampsFilters.jsx'; // Import the new LampsFilters component

export default function Nav({ setFilters }) {
  const {
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
    modelOptions,
  } = useNavFilters(setFilters);

  return (
    <div className="filters-container">
      <LampsFilters
        repuesto={repuesto}
        vehicle={vehicle}
        lampType={lampType}
        technology={technology}
        brand={brand}
        model={model}
        handleRepuestoChange={handleRepuestoChange}
        handleVehicleChange={handleVehicleChange}
        handleLampTypeChange={handleLampTypeChange}
        handleTechnologyChange={handleTechnologyChange}
        handleBrandChange={handleBrandChange}
        handleModelChange={handleModelChange}
        repuestoOptions={repuestoOptions}
        vehicleOptions={vehicleOptions}
        lampTypeOptions={lampTypeOptions}
        technologyOptions={technologyOptions}
        brandOptions={brandOptions}
        modelOptions={modelOptions}
      />
    
    </div>
  );
}

import { useState } from 'react';

const useNavFilters = (setFilters) => {
  const [vehicle, setVehicle] = useState('');
  const [lampType, setLampType] = useState('');
  const [technology, setTechnology] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [repuesto, setRepuesto] = useState('');



  const handleRepuestoChange = (event) => {
    setRepuesto(event.target.value);
    setFilters(filters => ({ ...filters, repuesto: event.target.value }));
  };
  const handleVehicleChange = (event) => {
    setVehicle(event.target.value);
    setFilters(filters => ({ ...filters, vehicle: event.target.value }));
  };
  const handleLampTypeChange = (event) => {
    setLampType(event.target.value);
    setFilters(filters => ({ ...filters, lampType: event.target.value }));
  };
  const handleTechnologyChange = (event) => {
    setTechnology(event.target.value);
    setFilters(filters => ({ ...filters, technology: event.target.value }));
  };
  const handleBrandChange = (event) => {
    setBrand(event.target.value);
    setFilters(filters => ({ ...filters, brand: event.target.value }));
  };
  const handleModelChange = (event) => {
    setModel(event.target.value);
    setFilters(filters => ({ ...filters, model: event.target.value }));
  };


  const repuestoOptions = [
    { value: '', label: 'Todos' },
    { value: 'baterias', label: 'Baterias' },
    { value: 'detailing', label: 'Detailing' },
    { value: 'lamparas', label: 'Lamparas' },
    { value: 'lubricantes', label: 'Lubricantes' },
  ];

  const vehicleOptions = [
    { value: '', label: 'Todos' },
    { value: 'auto', label: 'Auto / Camioneta' },
    { value: 'camion', label: 'camion' },
    { value: 'moto', label: 'Moto' },
    { value: 'trailer', label: 'Trailer' },
  ];

  const lampTypeOptions = [
    { value: '', label: 'Todas' },
    { value: 'Tablero', label: 'Tablero / Testigo' },
    { value: 'Giros', label: 'Giros / Balizas' },
    { value: 'Traseras', label: 'Traseras' },
    { value: 'delantera', label: 'Delanteras' },
    { value: 'Auxiliares', label: 'Auxiliares' },
    { value: 'off-road', label: 'Barras y Faros (Off-Road)' },
  ];

  const technologyOptions = [
    { value: '', label: 'Todas' },
    { value: 'Halogena', label: 'Halogenas Estandar' },
    { value: 'Halogena CBI', label: 'Halogenas CBI/CBN' },
    { value: 'Led', label: 'Led' },
    { value: 'Xenon', label: 'Xenon' },
    { value: 'Laser (NBL)', label: 'NBL - Night Breaker Laser' },
  ];

  const brandOptions = [
    { value: '', label: 'Todas' },
    { value: 'Osram', label: 'Osram' },
    { value: 'Neolux', label: 'Neolux' },
    { value: 'S6', label: 'S6' },
  ];

  const modelOptions = [
    { value: '', label: 'Todas' },
    { value: 'H1', label: 'H1' },
    { value: 'H3', label: 'H3' },
    { value: 'H4', label: 'H4' },
    { value: 'H7', label: 'H7' },
    { value: 'H8 H11 H16', label: 'H8/H11/H16' },
    { value: 'H15', label: 'H15' },
  ];

  return {
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
  };
};

export default useNavFilters;

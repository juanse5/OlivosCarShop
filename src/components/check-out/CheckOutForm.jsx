// src/components/check-out/CheckoutForm.jsx
import React, { useState } from 'react';
import Input from '../forms/Input.jsx'; // Asegúrate de que Input esté en la ruta correcta
import '../../styles/check-out/CheckOutForm.css'; // Asegúrate de crear este archivo CSS para estilos básicos

const CheckoutForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dni: '',
    streetAddress: '',
    corner: '',
    city: '',
    departamento:'',
    province: '',
    postalCode: '',
    phoneNumber: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h3>Datos Para el Envio</h3>
      <div className='input-doble'>
          
          <div>
              <Input
                placeholder="Nombre"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
          </div>

         <div>
            <Input
                placeholder="Apellido"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />  
          </div>
      </div>

      <div className='input-check-form'>
          <Input
            placeholder="DNI"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
          />
      </div>
      <div className='input-check-form'>
          <Input
            placeholder="Dirección (calle y altura)"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
          />
      </div>
      <div className='input-check-form'>
          <Input
            placeholder="(Piso y Departamento) (opcional)"
            name="departamento"
            value={formData.departamento}
            onChange={handleChange}
          />
      </div>
      <div className='input-check-form'>
          <Input
            placeholder="Esquina (opcional)"
            name="corner"
            value={formData.corner}
            onChange={handleChange}
          />
      </div>
      <div className='input-doble'>
          <div>
              <Input
                placeholder="Localidad"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
          </div>
          <div>
              <Input
                placeholder="Province"
                name="province"
                value={formData.province}
                onChange={handleChange}
              />
          </div>
      </div>
      <div className='input-check-form'>
          <Input
            placeholder="Código Postal"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
          />
      </div>
      <div className='input-check-form'>
         <Input
            placeholder="Número de Teléfono"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            type="tel"
          />
      </div>

    </form>
  );
};

export default CheckoutForm;

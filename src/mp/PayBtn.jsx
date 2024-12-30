import React from 'react';
import axios from 'axios';
import '../styles/mp/PayBtn.css'
const PayButton = ({ cartItems }) => { // Recibe los ítems del carrito como props
    const handlePayment = async () => {
        try {
            // Llama al backend para crear la preferencia
            const response = await axios.post('http://localhost:5000/create_preference', {
                items: cartItems
            }); 

            const { id, sandbox_init_point } = response.data;

            // Inicializa Mercado Pago en el frontend
            const mp = new window.MercadoPago('TEST-7b8addf4-a276-4cf8-870f-ee114de4cd76', {
                locale: 'es-AR',
            });

            mp.checkout({
                preference: {
                    id, // ID de la preferencia devuelto por el backend
                },
                autoOpen: true, // Abre el checkout automáticamente
                init_point: sandbox_init_point, // Utiliza el sandbox_init_point para redirigir al entorno de pruebas
            });
        } catch (error) {
            console.error("Error al procesar el pago", error.response ? error.response.data : error.message);
        }
    };

    return <button className='mp-btn-pagar' onClick={handlePayment}>Pagar Con Mercado Pago </button>;
};

export default PayButton;



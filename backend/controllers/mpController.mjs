import axios from 'axios';

export const createPreference = async (preferenceData) => {
  try {
    const items = preferenceData.items.map(item => ({
      title: item.title,
      unit_price: parseFloat(item.unit_price),
      quantity: parseInt(item.quantity),
    }));

    const preference = {
      items,
      back_urls: {
        success: "https://tusitio.com/success",
        failure: "https://tusitio.com/failure",
        pending: "https://tusitio.com/pending",
      },
      auto_return: "approved",
    };

    console.log('Preferencia creada para enviar a Mercado Pago:', preference);

    const response = await axios.post(
      'https://api.mercadopago.com/checkout/preferences',
      preference,
      {
        headers: {
          Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
        },
      }
    );

    console.log('Respuesta de Mercado Pago:', response.data);

    return {
      id: response.data.id,
      sandbox_init_point: response.data.sandbox_init_point,
    };
  } catch (error) {
    console.error('Error al crear la preferencia:', error.response ? error.response.data : error.message);
    throw new Error('Error al crear la preferencia');
  }
};

const mp = new MercadoPago('TEST-7b8addf4-a276-4cf8-870f-ee114de4cd76', {
    locale: 'es-AR'
});

// Inicializar el checkout
mp.checkout({
    preference: {
        id: 'ID_DE_PREFERENCIA', // Este ID viene del backend
    },
    autoOpen: true, // Abrir el checkout automáticamente
});

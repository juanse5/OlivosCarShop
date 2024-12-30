// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.mjs';
import productsRoutes from './routes/productRoutes.mjs';
import { createPreference } from './controllers/mpController.mjs';
import imagesRoutes from './routes/imagesRoutes.mjs';

dotenv.config();

if (!process.env.MP_ACCESS_TOKEN) {
    console.error("Error: El access token no está definido en el archivo .env");
    process.exit(1);
}

console.log('Access Token cargado:', process.env.MP_ACCESS_TOKEN);

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', productsRoutes);
app.use('/api/images', imagesRoutes);
// Nueva ruta para Mercado Pago
app.post('/create_preference', async (req, res) => {
  try {
    const preferenceResponse = await createPreference(req.body); 
    res.json(preferenceResponse);
  } catch (error) {
    console.error('Error en la ruta /create_preference:', error.message);
    res.status(500).send("Error al crear la preferencia");
  }
});

app.use((err, req, res, next) => {
    console.error('Middleware de manejo de errores:', err);
    res.status(500).json({ error: 'Error en el servidor' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

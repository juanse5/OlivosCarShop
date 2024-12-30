// routes/imagesRoutes.js
import express from 'express';
import { getAllImages } from '../controllers/imagesController.mjs';

const router = express.Router();

router.get('/', getAllImages);

export default router;

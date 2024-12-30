// controllers/imagesController.js
import supabase from '../config/database.mjs';

export const getAllImages = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('imagenes')
      .select('*');

    if (error) {
      throw error;
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Error al obtener las imágenes:', error.message);
    res.status(500).json({ error: error.message });
  }
};

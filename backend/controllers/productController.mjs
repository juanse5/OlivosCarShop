
import supabase from '../config/database.mjs';

export const getProducts = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('products_lamps')  // Tabla principal
      .select(`
        *,  
        details_lamps(*),
        lamps_info:lamps_info!fk_product(description)  // Selecciona sólo la descripción de lamps_info
      `);  
    console.log('Productos descargados desde supabase:', data);
    if (error) throw error;

    res.status(200).json(data);
  } catch (err) {
    console.error('Error fetching products:', err.message);
    res.status(500).json({ error: 'Error fetching products' });
  }
};

import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';

// Cargar variables de entorno
config();

// Variables de entorno desde .env
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

console.log('Supabase URL:', supabaseUrl); // Verificar si se carga correctamente
console.log('Supabase Key:', supabaseKey);

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase URL or Key');
}


// Crear instancia del cliente de Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

// Exportar por defecto para usarlo en otros módulos
export default supabase;

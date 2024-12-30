import jwt from 'jwt-simple';
import supabase from '../config/database.mjs'; // Tu configuración de supabase
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

// Registrar un nuevo usuario
const registerUser = async (req, res) => {
  const { email, password } = req.body; // Solo email y password
  console.log('Registrando usuario:', { email, password });

  try {
    // Registrar usuario en Supabase Auth (solo email y password)
    const { data: authUser, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      console.error('Error de registro:', authError.message);
      return res.status(400).json({ error: authError.message });
    }

    console.log('Usuario registrado en auth:', authUser);

    // Crear el token JWT
    const payload = { userId: authUser.user.id };
    const token = jwt.encode(payload, JWT_SECRET);
    
    // Enviar la respuesta con el token
    res.status(201).json({ token });
  } catch (error) {
    console.error('Error del servidor en registro:', error);
    res.status(500).json({ error: 'Hubo un problema al registrar al usuario.' });
  }
};







const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log('Iniciando sesión con:', { email, password });

  try {
    // Iniciar sesión en Supabase Authentication
    const { data: authUser, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      console.error('Error de autenticación:', authError.message);
      return res.status(400).json({ error: 'Credenciales inválidas.' });
    }

    if (!authUser.user) {
      return res.status(400).json({ error: 'No se encontró el usuario.' });
    }

    console.log('Usuario autenticado:', authUser);

    // Generar un token JWT
    const payload = { userId: authUser.user.id };
    const token = jwt.encode(payload, JWT_SECRET);

    // Responder con el token
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error del servidor en login:', error);
    res.status(500).json({ error: 'Hubo un problema al iniciar sesión.' });
  }
};

export { registerUser, loginUser };

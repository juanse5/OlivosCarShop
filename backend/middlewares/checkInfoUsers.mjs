import supabase from '../config/database.mjs';

export const checkUserProfile = async (req, res, next) => {
  const userId = req.user.id; // Obtener el ID del usuario autenticado

  const { data: profile, error } = await supabase
    .from('users_profile')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error || !profile) {
    return res.status(400).json({ error: 'Complete su perfil para continuar' });
  }

  next();
};

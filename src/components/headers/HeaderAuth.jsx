import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function HeaderAuth({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Eliminar token
    onLogout(); // Llama al callback para cambiar el estado de autenticación
    navigate('/home'); // Redirige a la página principal
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#222' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Ilucar
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="outlined" color="inherit" onClick={handleLogout}>
            Cerrar Sesión
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

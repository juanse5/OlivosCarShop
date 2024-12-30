import React, { useState } from 'react';
import { TextField, Button, Box, CircularProgress } from '@mui/material';


export default function LoginForm({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      setLoading(true); // Activar indicador de carga
  
      // Llama a la función loginUser del servicio
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      
  
      const result = await response.json();
  
      if (response.ok) {
        alert('Inicio de sesión exitoso');
        console.log('Token:', result.token);
  
        // Ejecuta onSuccess si se proporcionó (puedes redirigir o actualizar el estado)
        if (onSuccess) onSuccess(result);
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false); // Desactivar indicador de carga
    }
  };
  
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Correo Electrónico"
        fullWidth
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextField
        label="Contraseña"
        fullWidth
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        sx={{ mt: 2 }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={loading}
        sx={{ mt: 2 }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Iniciar Sesión'}
      </Button>
    </Box>
  );
}

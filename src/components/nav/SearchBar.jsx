import React, { useState } from 'react';
import '../../styles/nav/SearchBar.css'

export default function SearchBar({ onLogin }) {
  const [inputValue, setInputValue] = useState('');
  const [isAuthMode, setIsAuthMode] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);

    if (e.target.value.includes('@') && e.target.value.includes('.')) {
      setEmail(e.target.value);
      setIsAuthMode(true);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      if (isAuthMode) {
        // Trigger login
        try {
          setLoading(true);

          const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
          });

          const result = await response.json();

          if (response.ok) {
            alert('Inicio de sesión exitoso');
            console.log('Token:', result.token);

            if (onLogin) onLogin(result);
          } else {
            alert(`Error: ${result.error}`);
          }
        } catch (error) {
          alert(`Error: ${error.message}`);
        } finally {
          setLoading(false);
        }
      } else {
        console.log('Searching for:', inputValue);
      }
    }
  };

  return (
    <div className='search-container'>
      {isAuthMode ? (
        <input
          type="password"
          placeholder="Ingrese su contraseña"
          value={password}
          onChange={handlePasswordChange}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <input
          type="text"
          placeholder="Buscar Modelo"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      )}
      {loading && <span>Loading...</span>}
    </div>
  );
}

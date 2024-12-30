import React from 'react';
import '../styles/Headers.css';
import { Button } from '@mui/material';
const HomeLoginApp = () => {

  
  return (
    <div>
      <div className='sub-header-login'>
        <Button 
          variant="outlined" 
          sx={{ 
            color: '#222', 
            borderColor: '#000', 
            background:'#d0d0d0',
            '&:hover': {
              borderColor: '#fff',
              backgroundColor: '#ababab'
            } 
          }}
        >
          Configuración
        </Button>
      </div>
    
    </div>
  );
};

export default HomeLoginApp;

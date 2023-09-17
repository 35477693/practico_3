// Importando las dependencias necesarias
import React from 'react';
import styled from 'styled-components';

// Estilos para el input donde el jugador introduce su nombre
const StyledInput = styled.input`
    padding: 12px 20px;      
    margin: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 18px;        
    width: 300px;           
`;

// Componente para permitir al jugador introducir su nombre
function NombreJugador({ nombre, setNombre }) {
  return (
    <StyledInput
      type="text"
      value={nombre}
      onChange={(e) => setNombre(e.target.value)}
      placeholder="Ingresa tu nombre"
    />
  );
}

// Exportar el componente para usarlo en otras partes de la aplicación
export default NombreJugador;

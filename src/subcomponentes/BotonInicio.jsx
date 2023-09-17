// Importando las dependencias necesarias
import React from 'react';
import styled from 'styled-components';

// Estilos para el botón de inicio del juego
const StartButton = styled.button`
  padding: 10px 15px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: #007BFF;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

// Componente funcional que representa el botón para iniciar el juego
function BotonInicio({ iniciarJuego }) {
    return (
        <StartButton onClick={iniciarJuego}>Iniciar Juego</StartButton>
    );
}

// Exportar el componente para usarlo en otras partes de la aplicación
export default BotonInicio;

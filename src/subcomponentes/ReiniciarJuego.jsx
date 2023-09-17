// Importando las dependencias necesarias
import React from 'react';
import styled from 'styled-components';

// Estilos para el botón Reiniciar Juego
const StyledButton = styled.button`
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

// Componente para el botón de reiniciar el juego
function ReiniciarJuego({ reiniciar }) {
  return <StyledButton id="botonReiniciar" onClick={reiniciar}>Reiniciar Juego</StyledButton>;
}

// Exportar el componente para usarlo en otras partes de la aplicación
export default ReiniciarJuego;


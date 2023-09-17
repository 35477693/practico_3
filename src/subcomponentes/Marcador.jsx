// Importando las dependencias necesarias
import React from 'react';
import styled from 'styled-components';

// Estilos para el contenedor del marcador
const MarcadorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// Componente que muestra el marcador del juego, incluyendo puntos del jugador, puntos de la PC y empates
function Marcador({ jugador, pc, empates }) {
  return (
    <MarcadorContainer id="marcador">
      <div>Jugador: <span id="puntuacionJugador">{jugador}</span></div>
      <div>PC: <span id="puntuacionPC">{pc}</span></div>
      <div>Empates: <span id="empates">{empates}</span></div>
    </MarcadorContainer>
  );
}

// Exportar el componente para usarlo en otras partes de la aplicación
export default Marcador;


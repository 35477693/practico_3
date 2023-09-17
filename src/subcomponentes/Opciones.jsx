// Importando las dependencias necesarias
import React from 'react';
import styled from 'styled-components';
import ImagenChoice from './ImagenChoice';

// Estilos para el contenedor que agrupa las imágenes de las opciones
const ImagenesContainer = styled.div`
  display: flex;
  justify-content: center;
`;

// Componente Opciones para mostrar las imágenes de Piedra, Papel y Tijera
function Opciones({ handleEleccion, piedraImg, papelImg, tijeraImg, eleccionJugador }) {
  return (
    <ImagenesContainer>
      <ImagenChoice 
        src={piedraImg} 
        alt="Piedra" 
        choice="piedra" 
        onElegir={handleEleccion} 
        eleccionJugador={eleccionJugador}
      />
      <ImagenChoice 
        src={papelImg} 
        alt="Papel" 
        choice="papel" 
        onElegir={handleEleccion} 
        eleccionJugador={eleccionJugador}
      />
      <ImagenChoice 
        src={tijeraImg} 
        alt="Tijera" 
        choice="tijera" 
        onElegir={handleEleccion} 
        eleccionJugador={eleccionJugador}
      />
    </ImagenesContainer>
  );
}

// Exportar el componente para usarlo en otras partes de la aplicación
export default Opciones;

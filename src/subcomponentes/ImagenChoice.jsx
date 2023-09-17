// Importando las dependencias necesarias
import React from 'react';
import styled from 'styled-components';

// Estilos para el contenedor principal de cada opción de elección (Piedra, Papel, Tijera)
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;

  ${props => props.isSelected && `
    border: 3px solid #007BFF;
    padding: 5px;
    border-radius: 8px;
  `}
`;

// Estilos para la imagen de la elección
const Image = styled.img`
  cursor: pointer;
  width: 80px;
  height: 80px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

// Estilos para el nombre de la elección (Piedra, Papel, Tijera)
const Caption = styled.p`
  margin-top: 5px;
  font-weight: bold;
`;

// Componente que representa una opción de elección con su imagen y nombre
function ImagenChoice({ src, alt, choice, onElegir, eleccionJugador }) {
  const isSelected = eleccionJugador === choice;

  return (
    <Container isSelected={isSelected} onClick={() => onElegir(choice)}>
      <Image src={src} alt={alt} />
      <Caption>{alt}</Caption>
    </Container>
  );
}

// Exportar el componente para usarlo en otras partes de la aplicación
export default ImagenChoice;


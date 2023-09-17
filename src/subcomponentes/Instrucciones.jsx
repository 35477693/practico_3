// Importando las dependencias necesarias
import React from 'react';
import styled from 'styled-components';

// Definiendo estilos para el contenedor de las instrucciones
const InstructionsContainer = styled.div`
  margin-bottom: 20px;
  text-align: left;             
  color: #34495e;              
  line-height: 1.6;             
  font-family: 'Georgia', serif; 
  font-size: 18px;             
  font-weight: 500;            
  padding: 0 20px;             
  background-color: #f0f3f4;  
  border-radius: 10px;         
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
`;

// Componente que muestra las instrucciones del juego
function Instrucciones() {
    return (
        <InstructionsContainer>
            <div>1. Iniciar el Juego: Comienza ingresando tu nombre en el cuadro de texto y haz click en "Iniciar Juego".</div>
            <div>2. Hacer una Elección: Selecciona entre Piedra, Papel o Tijera haciendo click en la imagen correspondiente.</div>
            <div>3. Espera la Elección de la PC: Tras hacer tu elección, la PC elegirá de manera aleatoria y el resultado será anunciado.</div>
            <div>4. Resultados: Después de cada elección, el marcador se actualizará reflejando los puntos del jugador, de la PC y los empates.</div>
            <div>5. Fin del Juego: El juego consta de 5 rondas o hasta que un jugador alcance 3 puntos. Al final, se anunciará el ganador y podrás reiniciar el juego si lo deseas.</div>
        </InstructionsContainer>
    );
}

// Exportar el componente para usarlo en otras partes de la aplicación
export default Instrucciones;
// Importando las dependencias necesarias
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Marcador from './subcomponentes/Marcador';
import Opciones from './subcomponentes/Opciones';
import ReiniciarJuego from './subcomponentes/ReiniciarJuego';
import Instrucciones from './subcomponentes/Instrucciones';
import piedraImg from './Piedra.png';
import papelImg from './Papel.png';
import tijeraImg from './Tijera.png';
import logoImage from './React.png'; 

// Estilo para el logo
const StyledLogo = styled.img`
  width: 150px; 
  height: auto;
  margin-bottom: 20px;
`;

// Estilo principal para la aplicación
const StyledApp = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: #dcdde6;  // Un tono ligeramente más oscuro
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`;

// Estilo para el título
const Title = styled.h1`
  color: #444;
  margin-bottom: 20px;
`;

// Estilo para el botón de iniciar juego
const IniciarJuegoButton = styled.button`
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

// Componente principal
function App() {
  // Estados del juego
  const [nombreJugador, setNombreJugador] = useState("");
  const [eleccionJugador, setEleccionJugador] = useState("");
  const [puntuacionJugador, setPuntuacionJugador] = useState(0);
  const [puntuacionPC, setPuntuacionPC] = useState(0);
  const [empates, setEmpates] = useState(0);
  const [ronda, setRonda] = useState(0);
  const [juegoIniciado, setJuegoIniciado] = useState(false);
  const [juegoTerminado, setJuegoTerminado] = useState(false);

// Función para iniciar el juego
  const iniciarJuego = () => {
    if (!nombreJugador) {
      alert("El campo de nombre no debe estar vacío!");
      return;
    }
    alert("Bienvenido, " + nombreJugador + "!");
    alert("Haz tu elección!");
    setJuegoIniciado(true);
    setJuegoTerminado(false);
  };

// Actualiza el marcador según el ganador
  const actualizarMarcador = (ganador) => {
    if (ganador === "jugador") {
      setPuntuacionJugador(prev => prev + 1);
    } else if (ganador === "pc") {
      setPuntuacionPC(prev => prev + 1);
    }
  };

 // Determina el ganador de la ronda 
   const determinarGanador = (eleccionJugador, eleccionPC) => {
    if (eleccionJugador === eleccionPC) {
      setEmpates(prev => prev + 1);
    } else if (
      (eleccionJugador === "piedra" && eleccionPC === "tijera") ||
      (eleccionJugador === "tijera" && eleccionPC === "papel") ||
      (eleccionJugador === "papel" && eleccionPC === "piedra")
    ) {
      actualizarMarcador("jugador");
    } else {
      actualizarMarcador("pc");
    }
    setRonda(prevRonda => prevRonda + 1);
};

// Efecto para verificar si el juego ha terminado
useEffect(() => {
  if (!juegoTerminado && (ronda >= 5 || puntuacionJugador === 3 || puntuacionPC === 3)) { // Agregar condición para evitar múltiples alertas
    if (puntuacionJugador > puntuacionPC) {
      alert(nombreJugador + " es el ganador!");
    } else if (puntuacionJugador < puntuacionPC) {
      alert("La PC es el ganador!");
    } else {
      alert("Es un empate!");
    }
    setJuegoTerminado(true);
  }
}, [ronda, puntuacionJugador, puntuacionPC, nombreJugador, juegoTerminado]);

 // Maneja la elección del jugador y la elección de la PC
const handleEleccion = (choice) => {
  console.log("Eleccion Jugador:", choice);
  setEleccionJugador(choice);

  setTimeout(() => {
      const opciones = ["piedra", "papel", "tijera"];
      const eleccionAleatoria = opciones[Math.floor(Math.random() * 3)];

      setTimeout(() => {
          alert("La PC eligió: " + eleccionAleatoria);
          determinarGanador(choice, eleccionAleatoria);
          setEleccionJugador("");  
      }, 500);

  }, 0);
};

  return (
    <StyledApp>
    <StyledLogo src={logoImage} alt="Logo del juego" />
      <Title>Piedra, Papel o Tijera</Title>
      {!juegoIniciado ? (
        <>
          <Instrucciones />
          <input
            type="text"
            value={nombreJugador}
            onChange={(e) => setNombreJugador(e.target.value)}
            placeholder="Ingresa tu nombre"
          />
          <IniciarJuegoButton onClick={iniciarJuego}>
            Iniciar Juego
          </IniciarJuegoButton>
        </>
      ) : (
        <>
          {ronda < 5 && puntuacionJugador < 3 && puntuacionPC < 3 ? (
            <>
              <Opciones
                handleEleccion={handleEleccion}
                piedraImg={piedraImg}
                papelImg={papelImg}
                tijeraImg={tijeraImg}
                eleccionJugador={eleccionJugador}
              />
              <Marcador
                jugador={puntuacionJugador}
                pc={puntuacionPC}
                empates={empates}
              />
              <div>Rondas transcurridas: {ronda} / 5</div>
            </>
          ) : (
            <>
              <div>¡El juego ha terminado! Por favor, reinicia para jugar nuevamente.</div>
              <ReiniciarJuego reiniciar={() => {
                setPuntuacionJugador(0);
                setPuntuacionPC(0);
                setEmpates(0);
                setRonda(0);
                setEleccionJugador("");
                setNombreJugador("");
                setJuegoIniciado(false);
              }} />
            </>
          )}
        </>
      )}
    </StyledApp>
  );
}

// Exportar el componente para usarlo en otras partes de la aplicación
export default App;

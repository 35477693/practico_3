# Juego: Piedra, Papel o Tijera

Este proyecto es una implementación interactiva del clásico juego "Piedra, Papel o Tijera", desarrollado con React y styled-components.

## 🎮 Cómo Jugar

1. **Iniciar el Juego**: Comienza ingresando tu nombre en el cuadro de texto y haz click en "Iniciar Juego".
2. **Hacer una Elección**: Selecciona entre Piedra, Papel o Tijera haciendo click en la imagen correspondiente.
3. **Espera la Elección de la PC**: Tras hacer tu elección, la PC elegirá de manera aleatoria y el resultado será anunciado.
4. **Resultados**: Después de cada elección, el marcador se actualizará reflejando los puntos del jugador, de la PC y los empates.
5. **Fin del Juego**: El juego consta de 5 rondas o hasta que un jugador alcance 3 puntos. Al final, se anunciará el ganador y podrás reiniciar el juego si lo deseas.

## 🛠️ Detalles Técnicos

### Componentes de React

- **App.jsx**: Componente principal que coordina y controla el flujo del juego.
- **Marcador**: Muestra el score actual del jugador, la PC y la cantidad de empates.
- **Opciones**: Presenta las opciones visuales e interactivas de Piedra, Papel o Tijera para que el jugador haga su elección.
- **ReiniciarJuego**: Proporciona un botón para reiniciar y comenzar una nueva partida.
- **Instrucciones**: Un sencillo componente que brinda las instrucciones básicas del juego.

### Estilos con Styled Components

Este proyecto emplea `styled-components` para la estilización. Esta elección garantiza una perfecta cohesión entre los componentes y sus estilos, ofreciendo un código más limpio y fácil de mantener.

### Lógica del Juego

La elección de la PC se genera aleatoriamente en cada ronda. El ganador de cada jugada se determina a través de una lógica que compara las elecciones del jugador y la PC.

## 📈 Mejoras y Optimizaciones

- Se incluyó una notificación que muestra el progreso de las rondas, indicando el número de rondas jugadas y cuántas restan.
- Se refinó la lógica de determinación del ganador para garantizar precisión en el marcador, basándose en las elecciones del jugador y de la PC.

## 👤 Autor

[Vega Alberto Emanuel](#)

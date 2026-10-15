// Íconos o emoticonos para formar las parejas
const iconos = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];
let cartas = [...iconos, ...iconos]; // Duplicamos los íconos para tener 16 cartas

let primeraCarta = null;
let segundaCarta = null;
let bloqueoTablero = false;
let intentos = 0;

const contenedorTablero = document.getElementById('tablero');
const contadorIntentos = document.getElementById('intentos');
const btnReiniciar = document.getElementById('btn-reiniciar');

// Función para mezclar un arreglo (Algoritmo Fisher-Yates)
function mezclarCartas(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Función para inicializar o reiniciar el juego
function iniciarJuego() {
  contenedorTablero.innerHTML = '';
  primeraCarta = null;
  segundaCarta = null;
  bloqueoTablero = false;
  intentos = 0;
  contadorIntentos.textContent = intentos;

  mezclarCartas(cartas);

  cartas.forEach((element) => {
    const cartaHTML = document.createElement('div');
    cartaHTML.classList.add('carta');
    cartaHTML.dataset.icono = element;

    cartaHTML.innerHTML = `
      <div class="carta-inner">
        <div class="carta-dorso">❓</div>
        <div class="carta-frente">${element}</div>
      </div>
    `;

    cartaHTML.addEventListener('click', voltearCarta);
    contenedorTablero.appendChild(cartaHTML);
  });
}

// Función cuando se hace clic en una carta
function voltearCarta() {
  if (bloqueoTablero) return;
  if (this === primeraCarta) return; // Evita hacer clic dos veces en la misma carta

  this.classList.add('volteada');

  if (!primeraCarta) {
    primeraCarta = this;
    return;
  }

  segundaCarta = this;
  intentos++;
  contadorIntentos.textContent = intentos;

  comprobarPareja();
}

// Comprobar si las dos cartas seleccionadas coinciden
function comprobarPareja() {
  const esCoincidencia = primeraCarta.dataset.icono === segundaCarta.dataset.icono;

  if (esCoincidencia) {
    desactivarCartas();
  } else {
    desvoltearCartas();
  }
}

// Si coinciden, quitamos el evento de clic
function desactivarCartas() {
  primeraCarta.removeEventListener('click', voltearCarta);
  segundaCarta.removeEventListener('click', voltearCarta);

  resetearTablero();
  verificarVictoria();
}

// Si no coinciden, se dan la vuelta de nuevo tras 1 segundo
function desvoltearCartas() {
  bloqueoTablero = true;

  setTimeout(() => {
    primeraCarta.classList.remove('volteada');
    segundaCarta.classList.remove('volteada');
    resetearTablero();
  }, 1000);
}

function resetearTablero() {
  [primeraCarta, segundaCarta] = [null, null];
  [bloqueoTablero] = [false];
}

// Comprobar si todas las cartas han sido volteadas
function verificarVictoria() {
  const cartasVolteadas = document.querySelectorAll('.carta.volteada');
  if (cartasVolteadas.length === cartas.length) {
    setTimeout(() => {
      alert(`¡Felicidades! Ganaste el juego en ${intentos} intentos. 🎉`);
    }, 500);
  }
}

// Evento para el botón de reiniciar
btnReiniciar.addEventListener('click', iniciarJuego);

// Arrancar el juego al cargar la página
iniciarJuego();